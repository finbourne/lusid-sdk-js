// Require the LUSID SDK and libraries
const lusid = require('../../src/index')
const clientAuthentication = require('./apiClientAuthentication.js')
const {client} = require('./apiClientInitialisation')
const uuid4 = require('uuid/v4')
const csv = require('csvtojson')

var clientBuilder = clientAuthentication.lusidApiClientBuilder;
var instrumentsFile = './data/paper-instruments.csv'

/**
 * Function to take an instrument object and convert it into a LUSID model
 * Inputs
 * instrument (dictionary) - Object with key-value attribute pairs describing the instrument
 * Returns
 * InstrumentDefinition (lusid.InstrumentDefinition) LUSID model for an instrument definition
 */
var buildUpsertInstrumentRequest = function (instrument) {
  return lusid.InstrumentDefinition
    .constructFromObject({
      name: instrument.instrument_name,
      identifiers: {
        "Figi": instrument.figi,
        "ClientInternal": instrument.client_internal}
    })
  }

// Import your instruments from a CSV file and upsert them
var upsertFromCsv = function (filePath) {
  // Returns a promise
  return new Promise((resolve, reject) => {
    // Use the csvtojson module to import a CSV file
    return csv()
    .fromFile(filePath)
    // Produces an array of objects, one for each row (instrument) of the CSV
    .then((instruments) => {
      // Use a reduce function to convert each instrument object into a LUSID model
      return instruments.reduce((map, instrument) => {
        // Call your conversion function defined earlier to convert each instrument
        map[instrument.instrument_name] = buildUpsertInstrumentRequest(instrument)
        return map
      }, {})
    })
    .then((instrumentDefinitions) => {
      // Use your client to call upsert instruments
      return clientBuilder(client).then((client) => {
        return client.api.instruments.upsertInstruments({
          // Body payload
          requestBody: instrumentDefinitions
        })
      })
    })
    .then((res) => resolve(res))
    .catch((err) => reject(err))
  })
}

// Use your client to call LUSID and create a new property
var createProperty = function (propertyDefintion) {
  // Return a promise
  return new Promise((resolve, reject) => {
    // Use your client to call create property definition
    return clientBuilder(client).then((client) => {
      return client.api.properties.createPropertyDefinition({
        // Body payload
        createPropertyDefinitionRequest: propertyDefintion
      })
    })
    .then((res) => resolve(res))
    .catch((err) => reject(err))
  })
}

// Gets tne Lusid Instrument Id for a list of instruments
var getLuidForInstruments = function (identifierType, identifierValues) {
  // Return a promise
  return new Promise((resolve, reject) => {
    // Using your client call LUSID to get the instrument definitions
    return clientBuilder(client)
    .then((client) => {
      return client.api.instruments.getInstruments({
        identifierType: identifierType,
        requestBody: identifierValues
      })
    })
    .then((res) => {
      // Pick off the Lusid Instrument ID for each definition and discard the rest
      return Object.keys(res.values).reduce((map, instrumentIdentifier) => {
        map[instrumentIdentifier] = res.values[instrumentIdentifier].lusidInstrumentId
        return map
      }, {})
    })
    .then((lusidInstrumentIdMapping) => resolve(lusidInstrumentIdMapping))
    .catch((err) => reject(err))
  })
}

// Get the Lusid Instrument Id for our instruments
var addLusidInstrumentIdsFromFile = function (fileName) {
  return new Promise((resolve, reject) => {
    // Get your instruments from a CSV file
    return csv()
    .fromFile(fileName)
    .then((instruments) => {
      // Get the figi for each instrument
      return [
        instruments,
        instruments.reduce((figis, instrument) => {
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
      return instruments.map((instrument) => {
        instrument.lusidinstrumentid = lusidInstrumentIdMapping[instrument.figi]
        return instrument
      })
    })
    .then((instruments) => resolve(instruments))
    .catch((err) => reject(err))
  })
}

var buildInstrumentProperty = function (key, value) {
  return lusid.InstrumentProperty.
    constructFromObject(
      {
        key: key,
        value: {
          labelValue: value,
        }
      }
    )
}

var buildUpsertInstrumentPropertiesRequest = function (key, property, instruments) {
  return instruments.reduce((list, instrument) => {
    list.push(
      lusid.UpsertInstrumentPropertyRequest
        .constructFromObject(
          {
            lusidInstrumentId:instrument.lusidinstrumentid,
            properties: [buildInstrumentProperty(
              key,
              instrument[property]
            )]
          }
        )
    )
    return list
  }, [])
}

var upsertInstrumentProperties = function (key, property, instruments) {
  return new Promise((resolve, reject) => {
    return clientBuilder(client).then((client) => {
      return client.api.instruments.upsertInstrumentsProperties({
        upsertInstrumentPropertyRequest: buildUpsertInstrumentPropertiesRequest(
          key,
          property,
          instruments
        )
      })
  })
  .then((res) => resolve(res))
  .catch((err) => reject(err))
})
}

// Create a custom property using the LUSID model
var securityCurrencyCode = lusid.CreatePropertyDefinitionRequest
  .constructFromObject(
    {
      domain: 'Instrument',
      scope: 'Performance' + uuid4(),
      code: 'SECURITY_CURRENCY_CODE',
      valueRequired: true,
      displayName: 'SECURITY_CURRENCY_CODE',
      dataTypeId: lusid.ResourceId.constructFromObject({
        scope: "default",
        code: "currency"
      }),
      lifeTime: 'TimeVariant',
      type: 'Label'
    }
  )

// Once the instruments have been upserted and property definition created you
// can add your own properties
Promise.all([
  upsertFromCsv(instrumentsFile),
  createProperty(securityCurrencyCode)
])
  .then((res) => {
    return addLusidInstrumentIdsFromFile(instrumentsFile).then((instruments) => {
      return [
        instruments,
        res[1]
      ]
    })
  })
  .then(([instruments, propertyResponse]) => {
    return upsertInstrumentProperties(
      propertyResponse.key,
      'currency',
      instruments)
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
