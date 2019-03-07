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
 * Class representing a MarketDataKeyRule.
 */
class MarketDataKeyRule {
  /**
   * Create a MarketDataKeyRule.
   * @property {string} [dataScope] the scope in which the data should be found
   * when using this rule.
   * @property {string} key The market data key pattern which this is a rule
   * for. A dot separated string (A.B.C.D.*)
   * @property {string} supplier the market data supplier (where the data comes
   * from). Possible values include: 'DataScope', 'Lusid'
   * @property {string} [quoteType] is the quote to be looked for a price,
   * yield etc. Possible values include: 'Price', 'Spread', 'Rate'
   * @property {string} [priceSide] the conceptual qualification for the field.
   * Something like Bid, Ask or Mid. Possible values include: 'Bid', 'Mid',
   * 'Ask'
   */
  constructor() {
  }

  /**
   * Defines the metadata of MarketDataKeyRule
   *
   * @returns {object} metadata of MarketDataKeyRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MarketDataKeyRule',
      type: {
        name: 'Composite',
        className: 'MarketDataKeyRule',
        modelProperties: {
          dataScope: {
            required: false,
            serializedName: 'dataScope',
            type: {
              name: 'String'
            }
          },
          key: {
            required: true,
            serializedName: 'key',
            type: {
              name: 'String'
            }
          },
          supplier: {
            required: true,
            serializedName: 'supplier',
            type: {
              name: 'String'
            }
          },
          quoteType: {
            required: false,
            serializedName: 'quoteType',
            type: {
              name: 'String'
            }
          },
          priceSide: {
            required: false,
            serializedName: 'priceSide',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MarketDataKeyRule;
