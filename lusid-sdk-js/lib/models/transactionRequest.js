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
   * @member {string} transactionId Unique transaction identifier
   * @member {string} type LUSID transaction type code - Buy, Sell, StockIn,
   * StockOut, etc
   * @member {string} instrumentUid Unique instrument identifier
   * @member {date} transactionDate Transaction date
   * @member {date} settlementDate Settlement date
   * @member {number} units Quantity of transaction in units of the instrument
   * @member {object} transactionPrice Execution price for the transaction
   * @member {number} [transactionPrice.price]
   * @member {string} [transactionPrice.type] Possible values include: 'Price',
   * 'Yield', 'Spread'
   * @member {object} totalConsideration Total value of the transaction, in
   * settlement currency
   * @member {number} [totalConsideration.amount]
   * @member {string} [totalConsideration.currency]
   * @member {number} [exchangeRate] Rate between transaction and settle
   * currency
   * @member {string} [transactionCurrency] Transaction currency
   * @member {object} [properties]
   * @member {string} [counterpartyId] Counterparty identifier
   * @member {string} source Where this transaction came from, either Client or
   * System. Possible values include: 'System', 'Client'
   * @member {string} [nettingSet]
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
          instrumentUid: {
            required: true,
            serializedName: 'instrumentUid',
            type: {
              name: 'String'
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
                  serializedName: 'CreatePerpetualPropertyRequestElementType',
                  type: {
                    name: 'Composite',
                    className: 'CreatePerpetualPropertyRequest'
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
            required: true,
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
