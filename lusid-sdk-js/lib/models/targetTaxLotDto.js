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
 * Used to specify holdings target amounts at the tax-lot level
 *
 */
class TargetTaxLotDto {
  /**
   * Create a TargetTaxLotDto.
   * @member {number} [units] Quantity of holding
   * @member {number} [cost] Book cost of holding in trade currency
   * @member {number} [portfolioCost] Book cost of holding in portfolio
   * currency
   * @member {number} [price] Purchase price. Part of the unique key required
   * for multiple taxlots
   * @member {date} [purchaseDate] Purchase Date. Part of the unique key
   * required for multiple taxlots
   * @member {date} [settlementDate] Original settlement date of the tax-lot's
   * opening transaction.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TargetTaxLotDto
   *
   * @returns {object} metadata of TargetTaxLotDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TargetTaxLotDto',
      type: {
        name: 'Composite',
        className: 'TargetTaxLotDto',
        modelProperties: {
          units: {
            required: false,
            serializedName: 'units',
            type: {
              name: 'Number'
            }
          },
          cost: {
            required: false,
            serializedName: 'cost',
            type: {
              name: 'Number'
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

module.exports = TargetTaxLotDto;
