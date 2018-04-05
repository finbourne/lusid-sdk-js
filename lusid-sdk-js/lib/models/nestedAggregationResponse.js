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

const models = require('./index');

/**
 * Class representing a NestedAggregationResponse.
 */
class NestedAggregationResponse {
  /**
   * Create a NestedAggregationResponse.
   * @member {string} [href]
   * @member {object} [data]
   * @member {string} [data.groupPropertyKey]
   * @member {string} [data.groupPropertyValue]
   * @member {number} [data.idx]
   * @member {object} [data.properties]
   * @member {array} [data.children]
   * @member {string} [aggregationCurrency]
   * @member {object} [dataSchema]
   * @member {array} [dataSchema.nodeValueSchema]
   * @member {object} [dataSchema.propertySchema]
   */
  constructor() {
  }

  /**
   * Defines the metadata of NestedAggregationResponse
   *
   * @returns {object} metadata of NestedAggregationResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NestedAggregationResponse',
      type: {
        name: 'Composite',
        className: 'NestedAggregationResponse',
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
              name: 'Composite',
              className: 'AggregationResponseNodeDictionaryStringObject'
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
          }
        }
      }
    };
  }
}

module.exports = NestedAggregationResponse;
