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
 * Class representing a QuoteId.
 */
class QuoteId {
  /**
   * Create a QuoteId.
   * @property {string} instrumentId
   * @property {string} instrumentIdType
   * @property {string} quoteConvention
   * @property {string} quoteType
   * @property {string} [priceSource]
   */
  constructor() {
  }

  /**
   * Defines the metadata of QuoteId
   *
   * @returns {object} metadata of QuoteId
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'QuoteId',
      type: {
        name: 'Composite',
        className: 'QuoteId',
        modelProperties: {
          instrumentId: {
            required: true,
            serializedName: 'instrumentId',
            type: {
              name: 'String'
            }
          },
          instrumentIdType: {
            required: true,
            serializedName: 'instrumentIdType',
            type: {
              name: 'String'
            }
          },
          quoteConvention: {
            required: true,
            serializedName: 'quoteConvention',
            type: {
              name: 'String'
            }
          },
          quoteType: {
            required: true,
            serializedName: 'quoteType',
            type: {
              name: 'String'
            }
          },
          priceSource: {
            required: false,
            serializedName: 'priceSource',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = QuoteId;
