// Require the LUSID SDK and libraries
const lusid = require('../../src/index')

var client = lusid.ApiClient.instance

client.api = {}
client.api.metadata = new lusid.ApplicationMetadataApi()
client.api.portfolio = {}
client.api.portfolio.transactions = new lusid.TransactionPortfoliosApi()
client.api.portfolio.reference = new lusid.ReferencePortfolioApi()
client.api.portfolio.derived = new lusid.DerivedTransactionPortfoliosApi()

module.exports = {
  client
}
