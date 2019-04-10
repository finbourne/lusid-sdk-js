// Require the LUSID SDK and libraries
import {
  CreateTransactionPortfolioRequest, Portfolio, ErrorResponse } from "../../api";

import { Client } from './apiClientInitialisation'
import { IncomingMessage } from "http";

const clientAuthentication = require('./apiClientAuthentication.js')
const uuid4 = require('uuid/v4')

var client = new Client()
var clientBuilder = clientAuthentication.lusidApiClientBuilder;

function createTransactionPortfolio(
  scope: string,
  createRequest: CreateTransactionPortfolioRequest
  ) :Promise<Portfolio> {
    return new Promise((resolve, reject) => {
      clientBuilder(client).then((client: Client) => {
        client.api.transactionPortfolios.createPortfolio(
          scope,
          createRequest
        )
      .then((res: {response: IncomingMessage; body: Portfolio}) => resolve(res.body))
      .catch((err: {response: IncomingMessage; body: ErrorResponse}) => reject(err))
      })
    })
}

var createRequest = new CreateTransactionPortfolioRequest()
createRequest.displayName = "UK Equities"
createRequest.code = "UKEQTY"
createRequest.baseCurrency = "GBP"

createTransactionPortfolio(uuid4(), createRequest)
.then((portfolio: Portfolio) => console.log(portfolio))
.catch((err) => console.log(err))
