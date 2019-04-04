// Require the LUSID SDK and libraries
const lusid = require('../../src/index')

var client = lusid.ApiClient.instance

client.api = {}
client.api.metadata = new lusid.ApplicationMetadataApi()
client.api.portfolios = {}
client.api.portfolios.transactions = new lusid.TransactionPortfoliosApi()
client.api.portfolios.reference = new lusid.ReferencePortfolioApi()
client.api.portfolios.derived = new lusid.DerivedTransactionPortfoliosApi()
client.api.instruments = new lusid.InstrumentsApi()
client.api.properties = new lusid.PropertyDefinitionsApi()

module.exports = {
  client
}
