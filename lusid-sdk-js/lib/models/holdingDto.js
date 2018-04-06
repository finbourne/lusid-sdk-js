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

const models = require('./index');

/**
 * Class representing a HoldingDto.
 */
class HoldingDto {
  /**
   * Create a HoldingDto.
   * @member {string} securityUid Unique security identifier
   * @member {array} [properties]
   * @member {string} holdingType Type of holding, eg Position, Balance,
   * CashCommitment, Receivable, ForwardFX
   * @member {number} units Quantity of holding
   * @member {number} settledUnits Settled quantity of holding
   * @member {number} cost Book cost of holding in trade currency
   * @member {number} costPortfolioCcy Book cost of holding in portfolio
   * currency
   * @member {object} [transaction] If this is commitment-type holding, the
   * transaction behind it
   * @member {string} [transaction.tradeId] Unique trade identifier
   * @member {string} [transaction.type] LUSID transaction type code - Buy,
   * Sell, StockIn, StockOut, etc
   * @member {string} [transaction.securityUid] Unique security identifier
   * @member {date} [transaction.tradeDate] Trade date
   * @member {date} [transaction.settlementDate] Settlement date
   * @member {number} [transaction.units] Quantity of trade in units of the
   * security
   * @member {number} [transaction.tradePrice] Execution price for the trade
   * @member {number} [transaction.totalConsideration] Total value of the trade
   * @member {number} [transaction.exchangeRate] Rate between trade and settle
   * currency
   * @member {string} [transaction.settlementCurrency] Settlement currency
   * @member {string} [transaction.tradeCurrency] Trade currency
   * @member {array} [transaction.properties]
   * @member {string} [transaction.counterpartyId] Counterparty identifier
   * @member {string} [transaction.source] Where this trade came from, either
   * Client or System. Possible values include: 'System', 'Client'
   * @member {string} [transaction.dividendState] Possible values include:
   * 'Default', 'ExDividend', 'CumDividend'
   * @member {string} [transaction.tradePriceType] Possible values include:
   * 'Price', 'Yield', 'Spread'
   * @member {string} [transaction.unitType] Possible values include:
   * 'Nominal', 'Shares', 'FaceValue', 'Contracts'
   * @member {string} [transaction.nettingSet]
   */
  constructor() {
  }

  /**
   * Defines the metadata of HoldingDto
   *
   * @returns {object} metadata of HoldingDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HoldingDto',
      type: {
        name: 'Composite',
        className: 'HoldingDto',
        modelProperties: {
          securityUid: {
            required: true,
            serializedName: 'securityUid',
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
                  serializedName: 'PropertyDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'PropertyDto'
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
              name: 'Number'
            }
          },
          costPortfolioCcy: {
            required: true,
            serializedName: 'costPortfolioCcy',
            type: {
              name: 'Number'
            }
          },
          transaction: {
            required: false,
            serializedName: 'transaction',
            type: {
              name: 'Composite',
              className: 'TradeDto'
            }
          }
        }
      }
    };
  }
}

module.exports = HoldingDto;
