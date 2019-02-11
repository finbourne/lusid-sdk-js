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
 * Specification for the reconciliation request. Left and Right hand sides are
 * constructed. Each consists of a valuation of a portfolio
 * using an aggregation request. The results of this can then be compared to
 * each other. The difference, which is effectively a risk based
 * difference allows comparison of the effects of changing a recipe, valuation
 * date, or (though it may or may not make logical sense) a portfolio.
 * For instance, one might look at the difference in risk caused by the
 * addition of transaction to a portfolio, or through changing the valuation
 * methodology or system.
 *
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
   * @property {object} [left.aggregation.recipeId] The configuration recipe,
   * consisting of user scope and recipe name, to use in performing the
   * aggregation.
   * @property {string} [left.aggregation.recipeId.scope]
   * @property {string} [left.aggregation.recipeId.code]
   * @property {date} [left.aggregation.asAt] The asAt date to use
   * @property {date} [left.aggregation.effectiveAt] The market data time, i.e.
   * the time to run the aggregation request effective of.
   * @property {array} [left.aggregation.metrics] The set of specifications for
   * items to calculate or retrieve during the aggregation and present in the
   * results.
   * This is logically equivalent to the set of operations in a Sql select
   * statement
   * select [operation1(field1), operation2(field2), ... ] from results
   * @property {array} [left.aggregation.groupBy] The set of items by which to
   * perform grouping. This primarily matters when one or more of the metric
   * operators is a mapping
   * that reduces set size, e.g. sum or proportion. The group-by statement
   * determines the set of keys by which to break the results out.
   * @property {array} [left.aggregation.filters] A set of filters to use to
   * reduce the data found in a request. Equivalent to the 'where ...' part of
   * a Sql select statement.
   * For example, filter a set of values within a given range or matching a
   * particular value.
   * @property {number} [left.aggregation.limit] limit the results to a
   * particular number of values.
   * @property {string} [left.aggregation.sort] Sort the results or not.
   * @property {object} right The specification of the right hand side of the
   * valuation (risk) reconciliation
   * @property {object} [right.portfolioId] The id of the portfolio on which to
   * run the aggregation request
   * @property {string} [right.portfolioId.scope]
   * @property {string} [right.portfolioId.code]
   * @property {object} [right.aggregation] The specification of the
   * aggregation request to be used to obtain the risk
   * @property {object} [right.aggregation.recipeId] The configuration recipe,
   * consisting of user scope and recipe name, to use in performing the
   * aggregation.
   * @property {string} [right.aggregation.recipeId.scope]
   * @property {string} [right.aggregation.recipeId.code]
   * @property {date} [right.aggregation.asAt] The asAt date to use
   * @property {date} [right.aggregation.effectiveAt] The market data time,
   * i.e. the time to run the aggregation request effective of.
   * @property {array} [right.aggregation.metrics] The set of specifications
   * for items to calculate or retrieve during the aggregation and present in
   * the results.
   * This is logically equivalent to the set of operations in a Sql select
   * statement
   * select [operation1(field1), operation2(field2), ... ] from results
   * @property {array} [right.aggregation.groupBy] The set of items by which to
   * perform grouping. This primarily matters when one or more of the metric
   * operators is a mapping
   * that reduces set size, e.g. sum or proportion. The group-by statement
   * determines the set of keys by which to break the results out.
   * @property {array} [right.aggregation.filters] A set of filters to use to
   * reduce the data found in a request. Equivalent to the 'where ...' part of
   * a Sql select statement.
   * For example, filter a set of values within a given range or matching a
   * particular value.
   * @property {number} [right.aggregation.limit] limit the results to a
   * particular number of values.
   * @property {string} [right.aggregation.sort] Sort the results or not.
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
