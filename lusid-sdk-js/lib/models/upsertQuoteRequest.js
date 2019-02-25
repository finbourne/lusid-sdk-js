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
 * Class representing a UpsertQuoteRequest.
 */
class UpsertQuoteRequest {
  /**
   * Create a UpsertQuoteRequest.
   * @property {object} quoteId
   * @property {string} [quoteId.instrumentId]
   * @property {string} [quoteId.instrumentIdType] Possible values include:
   * 'LusidInstrumentId', 'Figi', 'RIC', 'QuotePermId', 'Isin', 'CurrencyPair'
   * @property {string} [quoteId.quoteType] Possible values include: 'Price',
   * 'Spread', 'Rate'
   * @property {string} [quoteId.priceSide] Possible values include: 'Bid',
   * 'Mid', 'Ask'
   * @property {object} metricValue
   * @property {number} [metricValue.value]
   * @property {string} [metricValue.unit]
   * @property {object} quoteLineage
   * @property {string} [quoteLineage.dataVendor]
   * @property {string} [quoteLineage.contributor]
   * @property {date} effectiveAt
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpsertQuoteRequest
   *
   * @returns {object} metadata of UpsertQuoteRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpsertQuoteRequest',
      type: {
        name: 'Composite',
        className: 'UpsertQuoteRequest',
        modelProperties: {
          quoteId: {
            required: true,
            serializedName: 'quoteId',
            type: {
              name: 'Composite',
              className: 'QuoteId'
            }
          },
          metricValue: {
            required: true,
            serializedName: 'metricValue',
            type: {
              name: 'Composite',
              className: 'MetricValue'
            }
          },
          quoteLineage: {
            required: true,
            serializedName: 'quoteLineage',
            type: {
              name: 'Composite',
              className: 'QuoteLineage'
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

module.exports = UpsertQuoteRequest;
