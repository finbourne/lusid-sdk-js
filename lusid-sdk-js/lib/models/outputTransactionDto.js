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
 * Class representing a OutputTransactionDto.
 */
class OutputTransactionDto {
  /**
   * Create a OutputTransactionDto.
   * @member {string} tradeId Unique trade identifier
   * @member {string} type LUSID transaction type code - Buy, Sell, StockIn,
   * StockOut, etc
   * @member {string} description LUSID transaction description
   * @member {string} [securityUid] Unique security identifier
   * @member {date} [tradeDate] Trade date
   * @member {date} [settlementDate] Settlement date
   * @member {number} [units] Quantity of trade in units of the security
   * @member {object} [tradePrice] Execution price for the trade
   * @member {number} [tradePrice.value]
   * @member {string} [tradePrice.type] Possible values include: 'Price',
   * 'Yield', 'Spread'
   * @member {object} [totalConsideration] Total value of the trade
   * @member {number} [totalConsideration.value]
   * @member {string} [totalConsideration.unit]
   * @member {number} [exchangeRate] Rate between trade and settlement currency
   * @member {number} [tradeToPortfolioRate] Rate between trade and portfolio
   * currency
   * @member {string} [tradeCurrency] Trade currency
   * @member {array} [properties]
   * @member {string} [counterpartyId] Counterparty identifier
   * @member {string} [source] Where this trade came from, either Client or
   * System. Possible values include: 'System', 'Client'
   * @member {string} [nettingSet]
   * @member {string} [transactionStatus] Transaction status (active, amended
   * or cancelled). Possible values include: 'Active', 'Amended', 'Cancelled'
   * @member {date} [entryDateTime] Date/Time the transaction was booked into
   * LUSID
   * @member {date} [cancelDateTime] Date/Time the cancellation was booked into
   * LUSID
   * @member {array} [realisedGainLoss] Collection of gains or losses
   */
  constructor() {
  }

  /**
   * Defines the metadata of OutputTransactionDto
   *
   * @returns {object} metadata of OutputTransactionDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OutputTransactionDto',
      type: {
        name: 'Composite',
        className: 'OutputTransactionDto',
        modelProperties: {
          tradeId: {
            required: true,
            readOnly: true,
            serializedName: 'tradeId',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          description: {
            required: true,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          securityUid: {
            required: false,
            readOnly: true,
            serializedName: 'securityUid',
            type: {
              name: 'String'
            }
          },
          tradeDate: {
            required: false,
            readOnly: true,
            serializedName: 'tradeDate',
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
          tradePrice: {
            required: false,
            readOnly: true,
            serializedName: 'tradePrice',
            type: {
              name: 'Composite',
              className: 'TradePrice'
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
          tradeToPortfolioRate: {
            required: false,
            readOnly: true,
            serializedName: 'tradeToPortfolioRate',
            type: {
              name: 'Number'
            }
          },
          tradeCurrency: {
            required: false,
            readOnly: true,
            serializedName: 'tradeCurrency',
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
                  serializedName: 'PerpetualPropertyDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'PerpetualPropertyDto'
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
                  serializedName: 'RealisedGainLossDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'RealisedGainLossDto'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = OutputTransactionDto;
