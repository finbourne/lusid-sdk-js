// Require the LUSID SDK and libraries
const lusid = require('../../src/index')
const clientAuthentication = require('./apiClientAuthentication.js')
const {client} = require('./apiClientInitialisation')
const uuid4 = require('uuid/v4')
const csv = require('csvtojson')

var clientBuilder = clientAuthentication.lusidApiClientBuilder;

// Function to take an instrument object and convert it into a LUSID model
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
  return new Promise((resolve, reject) => {
    csv().
    fromFile(filePath)
    .then((instruments) => {
      // Use a reduce function to convert each instrument object into a LUSDI model
      return instruments.reduce((map, instrument) => {
        map[instrument.instrument_name] = buildUpsertInstrumentRequest(instrument)
        return map
      }, {})
    })
    .then((instrumentDefinitions) => {
      // Use your client to call upsert instruments
      return clientBuilder(client).then((client) => {
        return client.api.instruments.upsertInstruments({
          requestBody: instrumentDefinitions
        })
      })
    })
    .then((res) => resolve(res))
    .catch((err) => reject(err))
  })
}


// Create a custom property
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
        code: "currencyAndAmount"
      }),
      lifeTime: 'TimeVariant',
      type: 'Label'
    }
  )

// Use your client to call LUSID and create a new property
var createProperty = function (propertyDefintion) {
  return new Promise((resolve, reject) => {
    clientBuilder(client).then((client) => {
      return client.api.properties.createPropertyDefinition({
        createPropertyDefinitionRequest: propertyDefintion
      })
    })
    .then((res) => resolve(res))
    .catch((err) => reject(err))
  })
}


Promise.all([
  upsertFromCsv('./data/paper-instruments.csv'),
  createProperty(securityCurrencyCode)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
