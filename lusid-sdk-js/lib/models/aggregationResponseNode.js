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
 * Class representing a AggregationResponseNode.
 */
class AggregationResponseNode {
  /**
   * Create a AggregationResponseNode.
   * @property {object} [key]
   * @property {string} [key.key]
   * @property {string} [key.op] Possible values include: 'Sum', 'Proportion',
   * 'Average', 'Count', 'Min', 'Max', 'Value'
   * @property {string} [value]
   * @property {number} [depth]
   * @property {object} [properties]
   * @property {array} [children]
   */
  constructor() {
  }

  /**
   * Defines the metadata of AggregationResponseNode
   *
   * @returns {object} metadata of AggregationResponseNode
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AggregationResponseNode',
      type: {
        name: 'Composite',
        className: 'AggregationResponseNode',
        modelProperties: {
          key: {
            required: false,
            serializedName: 'key',
            type: {
              name: 'Composite',
              className: 'AggregateSpec'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          },
          depth: {
            required: false,
            serializedName: 'depth',
            type: {
              name: 'Number'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
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
          },
          children: {
            required: false,
            serializedName: 'children',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AggregationResponseNodeElementType',
                  type: {
                    name: 'Composite',
                    className: 'AggregationResponseNode'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AggregationResponseNode;
