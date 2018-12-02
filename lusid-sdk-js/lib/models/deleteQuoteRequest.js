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
 * Class representing a DeleteQuoteRequest.
 */
class DeleteQuoteRequest {
  /**
   * Create a DeleteQuoteRequest.
   * @property {object} quoteId
   * @property {string} [quoteId.instrumentId]
   * @property {string} [quoteId.instrumentIdType]
   * @property {string} [quoteId.quoteConvention]
   * @property {string} [quoteId.quoteType]
   * @property {string} [quoteId.priceSource]
   * @property {date} effectiveAt
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeleteQuoteRequest
   *
   * @returns {object} metadata of DeleteQuoteRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeleteQuoteRequest',
      type: {
        name: 'Composite',
        className: 'DeleteQuoteRequest',
        modelProperties: {
          quoteId: {
            required: true,
            serializedName: 'quoteId',
            type: {
              name: 'Composite',
              className: 'QuoteId'
            }
          },
          effectiveAt: {
            required: true,
            serializedName: 'effectiveAt',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = DeleteQuoteRequest;
