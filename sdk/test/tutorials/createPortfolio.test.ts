// Require the LUSID SDK and libraries
import {
  CreateTransactionPortfolioRequest, Portfolio, ErrorResponse, AggregationApi } from "../../api";

import { client } from './clientBuilder'
import { IncomingMessage } from "http";
const uuid4 = require('uuid/v4')


function createTransactionPortfolio(
  scope: string,
  createRequest: CreateTransactionPortfolioRequest
  ) :Promise<Portfolio> {
    return new Promise((resolve, reject) => {
      console.log(client.api.transactionPortfolios.createPortfolio)
      client.api.transactionPortfolios.createPortfolio(
        scope,
        createRequest
      )
      .then((res: {response: IncomingMessage; body: Portfolio}) => resolve(res.body))
      .catch((err: {response: IncomingMessage; body: ErrorResponse}) => reject(err))
    })
  }

var createRequest = new CreateTransactionPortfolioRequest()
createRequest.displayName = "UK Equities"
createRequest.code = "UKEQTY"
createRequest.baseCurrency = "GBP"

setTimeout(function() {
  createTransactionPortfolio(uuid4(), createRequest)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
}, 10000)

setTimeout(function() {
  createTransactionPortfolio(uuid4(), createRequest)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
}, 25000)

createTransactionPortfolio(uuid4(), createRequest)
.then((res) => console.log(res))
.catch((err) => console.log(err))

export {};
