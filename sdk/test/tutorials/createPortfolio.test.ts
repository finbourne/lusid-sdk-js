// Require the LUSID SDK and libraries
import {
  CreateTransactionPortfolioRequest, Portfolio, ErrorResponse } from "../../api";

import { Client, Source } from '../../client/client'
import { IncomingMessage } from "http";
const uuid4 = require('uuid/v4')

var client = new Client(
  [Source.Secrets, 'tokenUrl'],
  [Source.Secrets, 'username'],
  [Source.Secrets, 'password'],
  [Source.Secrets, 'clientId'],
  [Source.Secrets, 'clientSecret'],
  [Source.Secrets, 'apiUrl'],
)

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

createTransactionPortfolio(uuid4(), createRequest)
.then((res) => console.log(res))
.catch((err) => console.log(err))
