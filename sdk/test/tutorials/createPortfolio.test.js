// Require the LUSID SDK and libraries
const lusid = require('../../src/index')
const clientAuthentication = require('./apiClientAuthentication.js')
const {client} = require('./apiClientInitialisation')
const uuid4 = require('uuid/v4')

var clientBuilder = clientAuthentication.lusidApiClientBuilder;

var request = {
  createTransactionPortfolioRequest: lusid.CreateTransactionPortfolioRequest
    .constructFromObject({
      displayName: 'test',
      code: 'test',
      baseCurrency: 'GBP',
      description:'Test portfolio'})
}

var test_portfolios = function() {
  var scope = uuid4()
  clientBuilder(client).then((client) => client.api.portfolio.transactions.createPortfolio(scope, request))
    .then((res) => res)
    .catch((res) => res)
}

test_portfolios()
