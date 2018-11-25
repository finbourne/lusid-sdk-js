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
 * Class representing a RealisedGainLoss.
 */
class RealisedGainLoss {
  /**
   * Create a RealisedGainLoss.
   * @property {string} [instrumentUid] Unique instrument identifier
   * @property {number} [units] Quantity against which gain has been made in
   * units of the instrument
   * @property {date} [purchaseTradeDate] Date the position was originally
   * purchased
   * @property {date} [purchaseSettlementDate] Date the position originally
   * settled
   * @property {number} [purchasePrice] Price the instrument was purchased at
   * @property {object} [costTradeCcy] Purchase cost in the trade currency
   * @property {number} [costTradeCcy.amount]
   * @property {string} [costTradeCcy.currency]
   * @property {object} [costPortfolioCcy] Purchase cost in the trade currency
   * @property {number} [costPortfolioCcy.amount]
   * @property {string} [costPortfolioCcy.currency]
   * @property {object} [realisedTradeCcy] Gains or losses in the trade
   * currency
   * @property {number} [realisedTradeCcy.amount]
   * @property {string} [realisedTradeCcy.currency]
   * @property {object} [realisedTotal] Total gains or losses in the portfolio
   * currency
   * @property {number} [realisedTotal.amount]
   * @property {string} [realisedTotal.currency]
   * @property {object} [realisedMarket] Market gains or losses in the
   * portfolio currency
   * @property {number} [realisedMarket.amount]
   * @property {string} [realisedMarket.currency]
   * @property {object} [realisedCurrency] Currency gains or losses in the
   * portfolio currency
   * @property {number} [realisedCurrency.amount]
   * @property {string} [realisedCurrency.currency]
   */
  constructor() {
  }

  /**
   * Defines the metadata of RealisedGainLoss
   *
   * @returns {object} metadata of RealisedGainLoss
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RealisedGainLoss',
      type: {
        name: 'Composite',
        className: 'RealisedGainLoss',
        modelProperties: {
          instrumentUid: {
            required: false,
            readOnly: true,
            serializedName: 'instrumentUid',
            type: {
              name: 'String'
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
          purchaseTradeDate: {
            required: false,
            readOnly: true,
            serializedName: 'purchaseTradeDate',
            type: {
              name: 'DateTime'
            }
          },
          purchaseSettlementDate: {
            required: false,
            readOnly: true,
            serializedName: 'purchaseSettlementDate',
            type: {
              name: 'DateTime'
            }
          },
          purchasePrice: {
            required: false,
            readOnly: true,
            serializedName: 'purchasePrice',
            type: {
              name: 'Number'
            }
          },
          costTradeCcy: {
            required: false,
            readOnly: true,
            serializedName: 'costTradeCcy',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          },
          costPortfolioCcy: {
            required: false,
            readOnly: true,
            serializedName: 'costPortfolioCcy',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          },
          realisedTradeCcy: {
            required: false,
            readOnly: true,
            serializedName: 'realisedTradeCcy',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          },
          realisedTotal: {
            required: false,
            readOnly: true,
            serializedName: 'realisedTotal',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          },
          realisedMarket: {
            required: false,
            readOnly: true,
            serializedName: 'realisedMarket',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          },
          realisedCurrency: {
            required: false,
            readOnly: true,
            serializedName: 'realisedCurrency',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          }
        }
      }
    };
  }
}

module.exports = RealisedGainLoss;
