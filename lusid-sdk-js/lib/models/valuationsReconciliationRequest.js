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
 * Class representing a ValuationsReconciliationRequest.
 */
class ValuationsReconciliationRequest {
  /**
   * Create a ValuationsReconciliationRequest.
   * @property {object} left The specification of the left hand side of the
   * valuation (risk) reconciliation
   * @property {object} [left.portfolioId] The id of the portfolio on which to
   * run the aggregation request
   * @property {string} [left.portfolioId.scope]
   * @property {string} [left.portfolioId.code]
   * @property {object} [left.aggregation] The specification of the aggregation
   * request to be used to obtain the risk
   * @property {object} [left.aggregation.recipeId]
   * @property {string} [left.aggregation.recipeId.scope]
   * @property {string} [left.aggregation.recipeId.code]
   * @property {date} [left.aggregation.asAt] The asAt date to use
   * @property {date} [left.aggregation.effectiveAt]
   * @property {array} [left.aggregation.metrics]
   * @property {array} [left.aggregation.groupBy]
   * @property {array} [left.aggregation.filters]
   * @property {number} [left.aggregation.limit]
   * @property {string} [left.aggregation.sort]
   * @property {object} right The specification of the right hand side of the
   * valuation (risk) reconciliation
   * @property {object} [right.portfolioId] The id of the portfolio on which to
   * run the aggregation request
   * @property {string} [right.portfolioId.scope]
   * @property {string} [right.portfolioId.code]
   * @property {object} [right.aggregation] The specification of the
   * aggregation request to be used to obtain the risk
   * @property {object} [right.aggregation.recipeId]
   * @property {string} [right.aggregation.recipeId.scope]
   * @property {string} [right.aggregation.recipeId.code]
   * @property {date} [right.aggregation.asAt] The asAt date to use
   * @property {date} [right.aggregation.effectiveAt]
   * @property {array} [right.aggregation.metrics]
   * @property {array} [right.aggregation.groupBy]
   * @property {array} [right.aggregation.filters]
   * @property {number} [right.aggregation.limit]
   * @property {string} [right.aggregation.sort]
   * @property {array} instrumentPropertyKeys Instrument properties to be
   * included with any identified breaks. These properties will be in the
   * effective and AsAt dates of the left portfolio
   */
  constructor() {
  }

  /**
   * Defines the metadata of ValuationsReconciliationRequest
   *
   * @returns {object} metadata of ValuationsReconciliationRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ValuationsReconciliationRequest',
      type: {
        name: 'Composite',
        className: 'ValuationsReconciliationRequest',
        modelProperties: {
          left: {
            required: true,
            serializedName: 'left',
            type: {
              name: 'Composite',
              className: 'ValuationReconciliationRequest'
            }
          },
          right: {
            required: true,
            serializedName: 'right',
            type: {
              name: 'Composite',
              className: 'ValuationReconciliationRequest'
            }
          },
          instrumentPropertyKeys: {
            required: true,
            serializedName: 'instrumentPropertyKeys',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ValuationsReconciliationRequest;
