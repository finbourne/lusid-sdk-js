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
 * Class representing a OutputTransaction.
 */
class OutputTransaction {
  /**
   * Create a OutputTransaction.
   * @property {string} [transactionId] Unique transaction identifier
   * @property {string} [type] LUSID transaction type code - Buy, Sell,
   * StockIn, StockOut, etc
   * @property {string} [description] LUSID transaction description
   * @property {object} [instrumentIdentifiers] Unique instrument identifiers.
   * @property {string} [instrumentUid] Unique instrument identifier
   * @property {date} [transactionDate] Transaction date
   * @property {date} [settlementDate] Settlement date
   * @property {number} [units] Quantity of trade in units of the instrument
   * @property {object} [transactionPrice] Execution price for the transaction
   * @property {number} [transactionPrice.price]
   * @property {string} [transactionPrice.type] Possible values include:
   * 'Price', 'Yield', 'Spread'
   * @property {object} [totalConsideration] Total value of the transaction in
   * settlement currency
   * @property {number} [totalConsideration.amount]
   * @property {string} [totalConsideration.currency]
   * @property {number} [exchangeRate] Rate between transaction and settlement
   * currency
   * @property {number} [transactionToPortfolioRate] Rate between transaction
   * and portfolio currency
   * @property {string} [transactionCurrency] Transaction currency
   * @property {array} [properties]
   * @property {string} [counterpartyId] Counterparty identifier
   * @property {string} [source] Where this transaction came from, either
   * Client or System. Possible values include: 'System', 'Client'
   * @property {string} [nettingSet]
   * @property {string} [transactionStatus] Transaction status (active, amended
   * or cancelled). Possible values include: 'Active', 'Amended', 'Cancelled'
   * @property {date} [entryDateTime] Date/Time the transaction was booked into
   * LUSID
   * @property {date} [cancelDateTime] Date/Time the cancellation was booked
   * into LUSID
   * @property {array} [realisedGainLoss] Collection of gains or losses
   */
  constructor() {
  }

  /**
   * Defines the metadata of OutputTransaction
   *
   * @returns {object} metadata of OutputTransaction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OutputTransaction',
      type: {
        name: 'Composite',
        className: 'OutputTransaction',
        modelProperties: {
          transactionId: {
            required: false,
            readOnly: true,
            serializedName: 'transactionId',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          instrumentIdentifiers: {
            required: false,
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
          instrumentUid: {
            required: false,
            readOnly: true,
            serializedName: 'instrumentUid',
            type: {
              name: 'String'
            }
          },
          transactionDate: {
            required: false,
            readOnly: true,
            serializedName: 'transactionDate',
            type: {
              name: 'DateTime'
            }
          },
          settlementDate: {
            required: false,
            readOnly: true,
            serializedName: 'settlementDate',
            type: {
              name: 'DateTime'
            }
          },
          units: {
            required: false,
            readOnly: true,
            serializedName: 'units',
            type: {
              name: 'Number'
            }
          },
          transactionPrice: {
            required: false,
            readOnly: true,
            serializedName: 'transactionPrice',
            type: {
              name: 'Composite',
              className: 'TransactionPrice'
            }
          },
          totalConsideration: {
            required: false,
            readOnly: true,
            serializedName: 'totalConsideration',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          },
          exchangeRate: {
            required: false,
            readOnly: true,
            serializedName: 'exchangeRate',
            type: {
              name: 'Number'
            }
          },
          transactionToPortfolioRate: {
            required: false,
            readOnly: true,
            serializedName: 'transactionToPortfolioRate',
            type: {
              name: 'Number'
            }
          },
          transactionCurrency: {
            required: false,
            readOnly: true,
            serializedName: 'transactionCurrency',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            readOnly: true,
            serializedName: 'properties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PerpetualPropertyElementType',
                  type: {
                    name: 'Composite',
                    className: 'PerpetualProperty'
                  }
              }
            }
          },
          counterpartyId: {
            required: false,
            readOnly: true,
            serializedName: 'counterpartyId',
            type: {
              name: 'String'
            }
          },
          source: {
            required: false,
            readOnly: true,
            serializedName: 'source',
            type: {
              name: 'String'
            }
          },
          nettingSet: {
            required: false,
            readOnly: true,
            serializedName: 'nettingSet',
            type: {
              name: 'String'
            }
          },
          transactionStatus: {
            required: false,
            readOnly: true,
            serializedName: 'transactionStatus',
            type: {
              name: 'String'
            }
          },
          entryDateTime: {
            required: false,
            readOnly: true,
            serializedName: 'entryDateTime',
            type: {
              name: 'DateTime'
            }
          },
          cancelDateTime: {
            required: false,
            readOnly: true,
            serializedName: 'cancelDateTime',
            type: {
              name: 'DateTime'
            }
          },
          realisedGainLoss: {
            required: false,
            readOnly: true,
            serializedName: 'realisedGainLoss',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RealisedGainLossElementType',
                  type: {
                    name: 'Composite',
                    className: 'RealisedGainLoss'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = OutputTransaction;
