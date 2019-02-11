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
 * Specification for the parameters that define how to perform a reconciliation
 * between two portfolios. This defines
 * the specification for one half of that request, namely how to find and
 * perform an aggregation request on one of the portfolios.
 *
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
   * @property {object} [aggregation.recipeId] The configuration recipe,
   * consisting of user scope and recipe name, to use in performing the
   * aggregation.
   * @property {string} [aggregation.recipeId.scope]
   * @property {string} [aggregation.recipeId.code]
   * @property {date} [aggregation.asAt] The asAt date to use
   * @property {date} [aggregation.effectiveAt] The market data time, i.e. the
   * time to run the aggregation request effective of.
   * @property {array} [aggregation.metrics] The set of specifications for
   * items to calculate or retrieve during the aggregation and present in the
   * results.
   * This is logically equivalent to the set of operations in a Sql select
   * statement
   * select [operation1(field1), operation2(field2), ... ] from results
   * @property {array} [aggregation.groupBy] The set of items by which to
   * perform grouping. This primarily matters when one or more of the metric
   * operators is a mapping
   * that reduces set size, e.g. sum or proportion. The group-by statement
   * determines the set of keys by which to break the results out.
   * @property {array} [aggregation.filters] A set of filters to use to reduce
   * the data found in a request. Equivalent to the 'where ...' part of a Sql
   * select statement.
   * For example, filter a set of values within a given range or matching a
   * particular value.
   * @property {number} [aggregation.limit] limit the results to a particular
   * number of values.
   * @property {string} [aggregation.sort] Sort the results or not.
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
