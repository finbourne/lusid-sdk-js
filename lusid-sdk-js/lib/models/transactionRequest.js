/*
 * Copyright © 2018 FINBOURNE TECHNOLOGY LTD
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

'use strict';

/**
 * Class representing a TransactionRequest.
 */
class TransactionRequest {
  /**
   * Create a TransactionRequest.
   * @property {string} transactionId Unique transaction identifier
   * @property {string} type LUSID transaction type code - Buy, Sell, StockIn,
   * StockOut, etc
   * @property {object} instrumentIdentifiers Unique instrument identifiers.
   * @property {date} transactionDate Transaction date
   * @property {date} settlementDate Settlement date
   * @property {number} units Quantity of transaction in units of the
   * instrument
   * @property {object} transactionPrice Execution price for the transaction
   * @property {number} [transactionPrice.price]
   * @property {string} [transactionPrice.type] Possible values include:
   * 'Price', 'Yield', 'Spread'
   * @property {object} totalConsideration Total value of the transaction, in
   * settlement currency
   * @property {number} [totalConsideration.amount]
   * @property {string} [totalConsideration.currency]
   * @property {number} [exchangeRate] Rate between transaction and settle
   * currency
   * @property {string} [transactionCurrency] Transaction currency
   * @property {object} [properties]
   * @property {string} [counterpartyId] Counterparty identifier
   * @property {string} [source] Where this transaction came from
   * @property {string} [nettingSet]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TransactionRequest
   *
   * @returns {object} metadata of TransactionRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TransactionRequest',
      type: {
        name: 'Composite',
        className: 'TransactionRequest',
        modelProperties: {
          transactionId: {
            required: true,
            serializedName: 'transactionId',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          instrumentIdentifiers: {
            required: true,
            serializedName: 'instrumentIdentifiers',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          transactionDate: {
            required: true,
            serializedName: 'transactionDate',
            type: {
              name: 'DateTime'
            }
          },
          settlementDate: {
            required: true,
            serializedName: 'settlementDate',
            type: {
              name: 'DateTime'
            }
          },
          units: {
            required: true,
            serializedName: 'units',
            type: {
              name: 'Number'
            }
          },
          transactionPrice: {
            required: true,
            serializedName: 'transactionPrice',
            type: {
              name: 'Composite',
              className: 'TransactionPrice'
            }
          },
          totalConsideration: {
            required: true,
            serializedName: 'totalConsideration',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          },
          exchangeRate: {
            required: false,
            serializedName: 'exchangeRate',
            type: {
              name: 'Number'
            }
          },
          transactionCurrency: {
            required: false,
            serializedName: 'transactionCurrency',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'PerpetualPropertyValueElementType',
                  type: {
                    name: 'Composite',
                    className: 'PerpetualPropertyValue'
                  }
              }
            }
          },
          counterpartyId: {
            required: false,
            serializedName: 'counterpartyId',
            type: {
              name: 'String'
            }
          },
          source: {
            required: false,
            serializedName: 'source',
            type: {
              name: 'String'
            }
          },
          nettingSet: {
            required: false,
            serializedName: 'nettingSet',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TransactionRequest;
