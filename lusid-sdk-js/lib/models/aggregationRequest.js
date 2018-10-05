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
   * @member {object} recipeId
   * @member {string} [recipeId.scope]
   * @member {string} [recipeId.code]
   * @member {boolean} [loadReferencePortfolio]
   * @member {date} [asAt] The asAt date to use
   * @member {date} effectiveAt
   * @member {array} metrics
   * @member {array} [groupBy]
   * @member {array} [filters]
   * @member {number} [limit]
   * @member {string} [sort]
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
          loadReferencePortfolio: {
            required: false,
            serializedName: 'loadReferencePortfolio',
            type: {
              name: 'Boolean'
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
