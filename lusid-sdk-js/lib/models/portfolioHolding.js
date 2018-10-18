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
   * @member {string} instrumentUid Unique instrument identifier
   * @member {array} [subHoldingKeys]
   * @member {array} [properties]
   * @member {string} holdingType Type of holding, eg Position, Balance,
   * CashCommitment, Receivable, ForwardFX
   * @member {number} units Quantity of holding
   * @member {number} settledUnits Settled quantity of holding
   * @member {object} cost Book cost of holding in transaction currency
   * @member {number} [cost.amount]
   * @member {string} [cost.currency]
   * @member {object} costPortfolioCcy Book cost of holding in portfolio
   * currency
   * @member {number} [costPortfolioCcy.amount]
   * @member {string} [costPortfolioCcy.currency]
   * @member {object} [transaction] If this is commitment-type holding, the
   * transaction behind it
   * @member {string} [transaction.transactionId] Unique transaction identifier
   * @member {string} [transaction.type] LUSID transaction type code - Buy,
   * Sell, StockIn, StockOut, etc
   * @member {string} [transaction.instrumentUid] Unique instrument identifier
   * @member {date} [transaction.transactionDate] Transaction date
   * @member {date} [transaction.settlementDate] Settlement date
   * @member {number} [transaction.units] Quantity of transaction in units of
   * the instrument
   * @member {object} [transaction.transactionPrice] Execution price for the
   * transaction
   * @member {number} [transaction.transactionPrice.price]
   * @member {string} [transaction.transactionPrice.type] Possible values
   * include: 'Price', 'Yield', 'Spread'
   * @member {object} [transaction.totalConsideration] Total value of the
   * transaction
   * @member {number} [transaction.totalConsideration.amount]
   * @member {string} [transaction.totalConsideration.currency]
   * @member {number} [transaction.exchangeRate] Rate between transaction and
   * settle currency
   * @member {string} [transaction.transactionCurrency] Transaction currency
   * @member {array} [transaction.properties]
   * @member {string} [transaction.counterpartyId] Counterparty identifier
   * @member {string} [transaction.source] Where this transaction came from.
   * Possible values include: 'System', 'Client'
   * @member {string} [transaction.nettingSet]
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
