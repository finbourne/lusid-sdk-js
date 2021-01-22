// Require the LUSID SDK and libraries
import {
  CreateTransactionPortfolioRequest, CurrencyAndAmount, TransactionRequest
} from "../../api";

import { client } from './clientBuilder'
import { IncomingMessage } from "http";
import { LusidProblemDetails } from "../../model/models";
const uuid4 = require('uuid/v4')

let scope = uuid4()

let createRequest = new CreateTransactionPortfolioRequest()
createRequest.displayName = "UK Equities"
createRequest.code = "UKEQTY"
createRequest.baseCurrency = "GBP"
createRequest.created = new Date(2020, 1, 1, 12, 0, 0)

let transactionRequest = new TransactionRequest()
transactionRequest.instrumentIdentifiers = {"Instrument/default/Currency": "GBP"}
transactionRequest.type = "FundsIn"
transactionRequest.transactionDate = "2020-12-15T13:00:00Z"
transactionRequest.settlementDate = "2020-12-17T13:00:00Z"
transactionRequest.totalConsideration = new CurrencyAndAmount()
transactionRequest.totalConsideration.amount = 100
transactionRequest.totalConsideration.currency = "GBP"
transactionRequest.units = 100
transactionRequest.transactionCurrency = "GBP"
transactionRequest.transactionId = "1_-5207"

describe('Create portfolios', () => {
  it('Should create a portfolio', (done) => {
    client.api.transactionPortfolios.createPortfolio(
        scope,
        createRequest
    )
        .then(() => done())
        .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => done(err.body))
  })

  it('Should upsert a transaction', (done) => {
    client.api.transactionPortfolios.upsertTransactions(
        scope,
        createRequest.code,
        [transactionRequest])
        .then(() => done())
        .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => done(err.body))
  })

  it('Should cancel a transaction', (done) => {
    client.api.transactionPortfolios.cancelTransactions(
        scope,
        createRequest.code,
        [transactionRequest.transactionId])
        .then(() => done())
        .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => done(err.body))
  })

})

export {};
