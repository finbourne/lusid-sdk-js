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
 * Class representing a ValuationReconciliationRequest.
 */
class ValuationReconciliationRequest {
  /**
   * Create a ValuationReconciliationRequest.
   * @property {object} portfolioId The id of the portfolio on which to run the
   * aggregation request
   * @property {string} [portfolioId.scope]
   * @property {string} [portfolioId.code]
   * @property {object} aggregation The specification of the aggregation
   * request to be used to obtain the risk
   * @property {object} [aggregation.recipeId]
   * @property {string} [aggregation.recipeId.scope]
   * @property {string} [aggregation.recipeId.code]
   * @property {boolean} [aggregation.loadReferencePortfolio]
   * @property {date} [aggregation.asAt] The asAt date to use
   * @property {date} [aggregation.effectiveAt]
   * @property {array} [aggregation.metrics]
   * @property {array} [aggregation.groupBy]
   * @property {array} [aggregation.filters]
   * @property {number} [aggregation.limit]
   * @property {string} [aggregation.sort]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ValuationReconciliationRequest
   *
   * @returns {object} metadata of ValuationReconciliationRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ValuationReconciliationRequest',
      type: {
        name: 'Composite',
        className: 'ValuationReconciliationRequest',
        modelProperties: {
          portfolioId: {
            required: true,
            serializedName: 'portfolioId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          aggregation: {
            required: true,
            serializedName: 'aggregation',
            type: {
              name: 'Composite',
              className: 'AggregationRequest'
            }
          }
        }
      }
    };
  }
}

module.exports = ValuationReconciliationRequest;
