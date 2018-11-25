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
 * Class representing a PortfolioHolding.
 */
class PortfolioHolding {
  /**
   * Create a PortfolioHolding.
   * @property {string} instrumentUid Unique instrument identifier
   * @property {array} [subHoldingKeys]
   * @property {array} [properties]
   * @property {string} holdingType Type of holding, eg Position, Balance,
   * CashCommitment, Receivable, ForwardFX
   * @property {number} units Quantity of holding
   * @property {number} settledUnits Settled quantity of holding
   * @property {object} cost Book cost of holding in transaction currency
   * @property {number} [cost.amount]
   * @property {string} [cost.currency]
   * @property {object} costPortfolioCcy Book cost of holding in portfolio
   * currency
   * @property {number} [costPortfolioCcy.amount]
   * @property {string} [costPortfolioCcy.currency]
   * @property {object} [transaction] If this is commitment-type holding, the
   * transaction behind it
   * @property {string} [transaction.transactionId] Unique transaction
   * identifier
   * @property {string} [transaction.type] LUSID transaction type code - Buy,
   * Sell, StockIn, StockOut, etc
   * @property {string} [transaction.instrumentUid] Unique instrument
   * identifier
   * @property {date} [transaction.transactionDate] Transaction date
   * @property {date} [transaction.settlementDate] Settlement date
   * @property {number} [transaction.units] Quantity of transaction in units of
   * the instrument
   * @property {object} [transaction.transactionPrice] Execution price for the
   * transaction
   * @property {number} [transaction.transactionPrice.price]
   * @property {string} [transaction.transactionPrice.type] Possible values
   * include: 'Price', 'Yield', 'Spread'
   * @property {object} [transaction.totalConsideration] Total value of the
   * transaction in settlement currency
   * @property {number} [transaction.totalConsideration.amount]
   * @property {string} [transaction.totalConsideration.currency]
   * @property {number} [transaction.exchangeRate] Rate between transaction and
   * settle currency
   * @property {string} [transaction.transactionCurrency] Transaction currency
   * @property {array} [transaction.properties]
   * @property {string} [transaction.counterpartyId] Counterparty identifier
   * @property {string} [transaction.source] Where this transaction came from.
   * Possible values include: 'System', 'Client'
   * @property {string} [transaction.nettingSet]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PortfolioHolding
   *
   * @returns {object} metadata of PortfolioHolding
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PortfolioHolding',
      type: {
        name: 'Composite',
        className: 'PortfolioHolding',
        modelProperties: {
          instrumentUid: {
            required: true,
            serializedName: 'instrumentUid',
            type: {
              name: 'String'
            }
          },
          subHoldingKeys: {
            required: false,
            serializedName: 'subHoldingKeys',
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
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PropertyElementType',
                  type: {
                    name: 'Composite',
                    className: 'Property'
                  }
              }
            }
          },
          holdingType: {
            required: true,
            serializedName: 'holdingType',
            type: {
              name: 'String'
            }
          },
          units: {
            required: true,
            serializedName: 'units',
            type: {
              name: 'Number'
            }
          },
          settledUnits: {
            required: true,
            serializedName: 'settledUnits',
            type: {
              name: 'Number'
            }
          },
          cost: {
            required: true,
            serializedName: 'cost',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          },
          costPortfolioCcy: {
            required: true,
            serializedName: 'costPortfolioCcy',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          },
          transaction: {
            required: false,
            serializedName: 'transaction',
            type: {
              name: 'Composite',
              className: 'Transaction'
            }
          }
        }
      }
    };
  }
}

module.exports = PortfolioHolding;
