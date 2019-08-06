// Require the LUSID SDK and libraries
import {
  InstrumentDefinition,
  UpsertInstrumentsResponse,
  PropertyDefinition,
  CreatePropertyDefinitionRequest,
  GetInstrumentsResponse,
  UpsertInstrumentPropertiesResponse,
  UpsertInstrumentPropertyRequest,
  ResourceId,
  InstrumentIdValue,
  Property, PropertyValue
} from "../../api";

import { client } from './clientBuilder'
const uuid4 = require('uuid/v4')
const csv = require('csvtojson')

var instrumentsFile = './paper-instruments.json'

/**
 * Function to take an instrument object and convert it into a LUSID model
 * Inputs
 * instrument (dictionary) - Object with key-value attribute pairs describing the instrument
 * Returns
 * InstrumentDefinition (lusid.InstrumentDefinition) LUSID model for an instrument definition
 */
function buildUpsertInstrumentRequest(instrument: any): InstrumentDefinition {
  let definition: InstrumentDefinition = new InstrumentDefinition()

  let figiIdentifier = new InstrumentIdValue()
  figiIdentifier.value = instrument.figi

  let clientInternalIdentifier = new InstrumentIdValue()
  clientInternalIdentifier.value = instrument.client_internal

  definition.name = instrument.instrument_name
  definition.identifiers = {
    "Figi": figiIdentifier,
    "ClientInternal": clientInternalIdentifier
  }
  return definition
}

// Import your instruments from a CSV file
function loadFromCsv(filePath: string): Promise<any[]> {
  // Returns a promise
  return new Promise((resolve, reject) => {
    // Use the csvtojson module to import a CSV file
    csv()
    .fromFile(filePath)
    // Produces an array of objects, one for each row (instrument) of the CSV
    .then((instruments: any[]) => resolve(instruments))
    .catch((err) => reject(err))
  })
}

// Import your instruments from a JSON file
function loadFromJson(filePath: string): Promise<any[]> {
  // Returns a promise
  return new Promise((resolve, reject) => {
    // Use the csvtojson module to import a CSV file
    try {
      let instruments = require(filePath)
      resolve(instruments)
    } catch (err) {
      reject (err)
    }
  })
}

enum FileType {
    Json = "Json",
    Csv = "Csv",
}

function upsertInstrumentsFromFile(
  filePath: string,
  fileType: FileType
  ): Promise<UpsertInstrumentsResponse> {

    return new Promise((resolve, reject) => {

      if (fileType == FileType.Json) {
        var loadFunction = loadFromJson(filePath)
      } else {
        var loadFunction = loadFromCsv(filePath)
      }

      loadFunction.then((instruments: any[]) => {
        // Use a reduce function to convert each instrument object into a LUSID model
        return instruments.reduce((map: {[key: string]: InstrumentDefinition}, instrument: any) => {
          // Call your conversion function defined earlier to convert each instrument
          map[instrument.instrument_name] = buildUpsertInstrumentRequest(instrument)
          return map
        }, {})
      })
      .then((instrumentDefinitions: {[key: string]: InstrumentDefinition}) => {
        // Use your client to call upsert instruments
        return client.api.instruments.upsertInstruments(instrumentDefinitions)
        })
      .then((res: any) => resolve(res.body))
      .catch((err: any) => reject(err))
    })
  }


// Use your client to call LUSID and create a new property
function createProperty(
  propertyDefintion: CreatePropertyDefinitionRequest):
  Promise<PropertyDefinition> {
    // Return a promise
    return new Promise((resolve, reject) => {
      // Use your client to call create property definition
      client.api.propertyDefinitions.createPropertyDefinition(propertyDefintion)
      .then((res: any) => resolve(res.body))
      .catch((err: any) => reject(err))
    })
  }

// Gets tne Lusid Instrument Id for a list of instruments
function getLuidForInstruments(
  identifierType: string,
  identifierValues: string[]
  ): Promise<{[key: string]: string}> {
    // Return a promise
    return new Promise((resolve, reject) => {
      // Using your client call LUSID to get the instrument definitions
      client.api.instruments.getInstruments(identifierType, identifierValues)
      .then((res: any) => res.body)
      .then((res: GetInstrumentsResponse) => {
        // Pick off the Lusid Instrument ID for each definition and discard the rest
        return Object.keys(res.values).reduce(
          (map: {[key: string]: string}, instrumentIdentifier: string) => {
            map[instrumentIdentifier] = res.values[instrumentIdentifier].lusidInstrumentId
            return map
          }, {})
      })
      .then((lusidInstrumentIdMapping: {[key: string]: string}) => {
        resolve(lusidInstrumentIdMapping)
      })
      .catch((err: any) => reject(err))
    })
  }

// Get the Lusid Instrument Id for our instruments
function addLusidInstrumentIdsFromFile(
  filePath: string,
  fileType: FileType
  ): Promise<any[]> {

    return new Promise((resolve, reject) => {
      if (fileType == FileType.Json) {
        var loadFunction = loadFromJson(filePath)
      } else {
        var loadFunction = loadFromCsv(filePath)
      }
      // Get your instruments from a the file
      loadFunction
      .then((instruments: any[]) => {
        // Get the figi for each instrument
        return [
          instruments,
          instruments.reduce((figis: string[], instrument: any) => {
            figis.push(instrument.figi)
            return figis
          }, [])
        ]
      })
      .then(([instruments, figis]) => {
        // Using the Figi retrieve each instruments LusidInstrumentId
        return getLuidForInstruments('Figi', figis)
        .then((lusidInstrumentIdMapping) => {
          return [
            instruments,
            lusidInstrumentIdMapping
          ]
        })
      })
      .then(([instruments, lusidInstrumentIdMapping]) => {
        return instruments.map((instrument: any) => {
          instrument.lusidinstrumentid = lusidInstrumentIdMapping[instrument.figi]
          return instrument
        })
      })
      .then((instruments: any[]) => resolve(instruments))
      .catch((err: any) => reject(err))
    })
}

function buildInstrumentProperty(key: string, value: string): Property {
  let instrumentProperty = new Property()
  instrumentProperty.key = key
  let instrumentPropertyValue = new PropertyValue()
  instrumentPropertyValue.labelValue = value
  instrumentProperty.value = instrumentPropertyValue
  return instrumentProperty
}

function buildUpsertInstrumentPropertiesRequest(
  key: string,
  property: string,
  instruments: any[]):
  UpsertInstrumentPropertyRequest[] {
    return instruments.reduce((list: UpsertInstrumentPropertyRequest[], instrument: any) => {
      let instrumentPropertyRequest = new UpsertInstrumentPropertyRequest()
      instrumentPropertyRequest.lusidInstrumentId = instrument.lusidinstrumentid
      instrumentPropertyRequest.properties = [
        buildInstrumentProperty(
          key,
          instrument[property]
        )
      ]
      list.push(instrumentPropertyRequest)
      return list
    }, [])
  }

function upsertInstrumentProperties(
  key: string,
  property: string,
  instruments: any[]):
  Promise<UpsertInstrumentPropertiesResponse> {
    return new Promise((resolve, reject) => {
      client.api.instruments.upsertInstrumentsProperties(
        buildUpsertInstrumentPropertiesRequest(
          key,
          property,
          instruments
        )
      )
    .then((res: any) => resolve(res.body))
    .catch((err: any) => reject(err))
  })
}

// Create a custom property using the LUSID model
var dataTypeId = new ResourceId()
dataTypeId.scope = "system"
dataTypeId.code= "currency"

// Create a property definition request to define a new property
var securityCurrencyCode = new CreatePropertyDefinitionRequest()
securityCurrencyCode.domain = CreatePropertyDefinitionRequest.DomainEnum.Instrument
securityCurrencyCode.scope = 'Performance' + uuid4()
securityCurrencyCode.code = 'SECURITY_CURRENCY_CODE'
securityCurrencyCode.valueRequired = true
securityCurrencyCode.displayName = 'SECURITY_CURRENCY_CODE'
securityCurrencyCode.code = 'SECURITY_CURRENCY_CODE'
securityCurrencyCode.dataTypeId = dataTypeId
securityCurrencyCode.lifeTime = CreatePropertyDefinitionRequest.LifeTimeEnum.TimeVariant

// Once the instruments have been upserted and property definition created you
// can add your own properties
describe('Load Instrument Master', () => {
  it('Should create instruments with properties', (done) => {
    Promise.all([
      upsertInstrumentsFromFile(instrumentsFile, FileType.Json),
      createProperty(securityCurrencyCode)
    ])
      .then((res) => {
        return {
          property: res[1],
          instruments: addLusidInstrumentIdsFromFile(instrumentsFile, FileType.Json)
          }
        })
      .then((response) => {
        return response.instruments.then((instruments) => {
          return upsertInstrumentProperties(
            response.property['key'],
            'currency',
            instruments)
        })
      })
      .then((res: UpsertInstrumentPropertiesResponse) => {
        console.log(res)
        done()
      })
      .catch((err) => console.log(err.response.statusCode, err.response.statusMessage))
  })
})

export {};
