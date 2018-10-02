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
 * Class representing a ListAggregationResponse.
 */
class ListAggregationResponse {
  /**
   * Create a ListAggregationResponse.
   * @member {string} [href]
   * @member {array} [data]
   * @member {string} [aggregationCurrency]
   * @member {object} [dataSchema]
   * @member {array} [dataSchema.nodeValueSchema]
   * @member {object} [dataSchema.propertySchema]
   * @member {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListAggregationResponse
   *
   * @returns {object} metadata of ListAggregationResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListAggregationResponse',
      type: {
        name: 'Composite',
        className: 'ListAggregationResponse',
        modelProperties: {
          href: {
            required: false,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          },
          data: {
            required: false,
            serializedName: 'data',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Dictionary',
                    value: {
                        required: false,
                        serializedName: 'ObjectElementType',
                        type: {
                          name: 'Object'
                        }
                    }
                  }
              }
            }
          },
          aggregationCurrency: {
            required: false,
            serializedName: 'aggregationCurrency',
            type: {
              name: 'String'
            }
          },
          dataSchema: {
            required: false,
            serializedName: 'dataSchema',
            type: {
              name: 'Composite',
              className: 'ResultDataSchema'
            }
          },
          links: {
            required: false,
            serializedName: 'links',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LinkElementType',
                  type: {
                    name: 'Composite',
                    className: 'Link'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ListAggregationResponse;
