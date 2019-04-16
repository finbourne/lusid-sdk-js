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

describe('Create portfolios', () => {
  it('Should create a portfolio', (done) => {
    createTransactionPortfolio(uuid4(), createRequest)
    .then((res) => {
      console.log(res)
      done()
    })
    .catch((err) => console.log(err))
  })
})

export {};
