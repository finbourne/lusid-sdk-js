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
 * Class representing a TargetTaxLotRequest.
 */
class TargetTaxLotRequest {
  /**
   * Create a TargetTaxLotRequest.
   * @property {number} units Quantity of holding
   * @property {object} [cost] Book cost of holding in transaction currency
   * @property {number} [cost.amount]
   * @property {string} [cost.currency]
   * @property {number} [portfolioCost] Book cost of holding in portfolio
   * currency
   * @property {number} [price] Purchase price. Part of the unique key required
   * for multiple taxlots
   * @property {date} [purchaseDate] Purchase Date. Part of the unique key
   * required for multiple taxlots
   * @property {date} [settlementDate] Original settlement date of the
   * tax-lot's opening transaction.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TargetTaxLotRequest
   *
   * @returns {object} metadata of TargetTaxLotRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TargetTaxLotRequest',
      type: {
        name: 'Composite',
        className: 'TargetTaxLotRequest',
        modelProperties: {
          units: {
            required: true,
            serializedName: 'units',
            type: {
              name: 'Number'
            }
          },
          cost: {
            required: false,
            serializedName: 'cost',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          },
          portfolioCost: {
            required: false,
            serializedName: 'portfolioCost',
            type: {
              name: 'Number'
            }
          },
          price: {
            required: false,
            serializedName: 'price',
            type: {
              name: 'Number'
            }
          },
          purchaseDate: {
            required: false,
            serializedName: 'purchaseDate',
            type: {
              name: 'DateTime'
            }
          },
          settlementDate: {
            required: false,
            serializedName: 'settlementDate',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = TargetTaxLotRequest;
