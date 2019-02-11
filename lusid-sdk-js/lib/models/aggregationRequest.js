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
 * Specification object for the parameters of an aggregation
 *
 */
class AggregationRequest {
  /**
   * Create a AggregationRequest.
   * @property {object} recipeId The configuration recipe, consisting of user
   * scope and recipe name, to use in performing the aggregation.
   * @property {string} [recipeId.scope]
   * @property {string} [recipeId.code]
   * @property {date} [asAt] The asAt date to use
   * @property {date} effectiveAt The market data time, i.e. the time to run
   * the aggregation request effective of.
   * @property {array} metrics The set of specifications for items to calculate
   * or retrieve during the aggregation and present in the results.
   * This is logically equivalent to the set of operations in a Sql select
   * statement
   * select [operation1(field1), operation2(field2), ... ] from results
   * @property {array} [groupBy] The set of items by which to perform grouping.
   * This primarily matters when one or more of the metric operators is a
   * mapping
   * that reduces set size, e.g. sum or proportion. The group-by statement
   * determines the set of keys by which to break the results out.
   * @property {array} [filters] A set of filters to use to reduce the data
   * found in a request. Equivalent to the 'where ...' part of a Sql select
   * statement.
   * For example, filter a set of values within a given range or matching a
   * particular value.
   * @property {number} [limit] limit the results to a particular number of
   * values.
   * @property {string} [sort] Sort the results or not.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AggregationRequest
   *
   * @returns {object} metadata of AggregationRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AggregationRequest',
      type: {
        name: 'Composite',
        className: 'AggregationRequest',
        modelProperties: {
          recipeId: {
            required: true,
            serializedName: 'recipeId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          asAt: {
            required: false,
            serializedName: 'asAt',
            type: {
              name: 'DateTime'
            }
          },
          effectiveAt: {
            required: true,
            serializedName: 'effectiveAt',
            type: {
              name: 'DateTime'
            }
          },
          metrics: {
            required: true,
            serializedName: 'metrics',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AggregateSpecElementType',
                  type: {
                    name: 'Composite',
                    className: 'AggregateSpec'
                  }
              }
            }
          },
          groupBy: {
            required: false,
            serializedName: 'groupBy',
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
          },
          filters: {
            required: false,
            serializedName: 'filters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PropertyFilterElementType',
                  type: {
                    name: 'Composite',
                    className: 'PropertyFilter'
                  }
              }
            }
          },
          limit: {
            required: false,
            serializedName: 'limit',
            type: {
              name: 'Number'
            }
          },
          sort: {
            required: false,
            serializedName: 'sort',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AggregationRequest;
