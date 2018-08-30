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
 * Class representing a UpsertPortfolioTradeRequest.
 */
class UpsertPortfolioTradeRequest {
  /**
   * Create a UpsertPortfolioTradeRequest.
   * @member {string} tradeId Unique trade identifier
   * @member {string} type LUSID transaction type code - Buy, Sell, StockIn,
   * StockOut, etc
   * @member {string} securityUid Unique security identifier
   * @member {date} tradeDate Trade date
   * @member {date} settlementDate Settlement date
   * @member {number} units Quantity of trade in units of the security
   * @member {number} tradePrice Execution price for the trade
   * @member {number} totalConsideration Total value of the trade
   * @member {number} [exchangeRate] Rate between trade and settle currency
   * @member {string} settlementCurrency Settlement currency
   * @member {string} [tradeCurrency] Trade currency
   * @member {array} [properties]
   * @member {string} [counterpartyId] Counterparty identifier
   * @member {string} source Where this trade came from, either Client or
   * System. Possible values include: 'System', 'Client'
   * @member {string} [dividendState] Possible values include: 'Default',
   * 'ExDividend', 'CumDividend'
   * @member {string} [tradePriceType] Possible values include: 'Price',
   * 'Yield', 'Spread'
   * @member {string} [unitType] Possible values include: 'Nominal', 'Shares',
   * 'FaceValue', 'Contracts'
   * @member {string} [nettingSet]
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpsertPortfolioTradeRequest
   *
   * @returns {object} metadata of UpsertPortfolioTradeRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpsertPortfolioTradeRequest',
      type: {
        name: 'Composite',
        className: 'UpsertPortfolioTradeRequest',
        modelProperties: {
          tradeId: {
            required: true,
            serializedName: 'tradeId',
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
          securityUid: {
            required: true,
            serializedName: 'securityUid',
            type: {
              name: 'String'
            }
          },
          tradeDate: {
            required: true,
            serializedName: 'tradeDate',
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
          tradePrice: {
            required: true,
            serializedName: 'tradePrice',
            type: {
              name: 'Number'
            }
          },
          totalConsideration: {
            required: true,
            serializedName: 'totalConsideration',
            type: {
              name: 'Number'
            }
          },
          exchangeRate: {
            required: false,
            serializedName: 'exchangeRate',
            type: {
              name: 'Number'
            }
          },
          settlementCurrency: {
            required: true,
            serializedName: 'settlementCurrency',
            type: {
              name: 'String'
            }
          },
          tradeCurrency: {
            required: false,
            serializedName: 'tradeCurrency',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Sequence',
              element: {
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
          dividendState: {
            required: false,
            serializedName: 'dividendState',
            type: {
              name: 'String'
            }
          },
          tradePriceType: {
            required: false,
            serializedName: 'tradePriceType',
            type: {
              name: 'String'
            }
          },
          unitType: {
            required: false,
            serializedName: 'unitType',
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

module.exports = UpsertPortfolioTradeRequest;
