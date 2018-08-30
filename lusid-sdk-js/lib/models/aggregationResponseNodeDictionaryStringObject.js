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
 * Class representing a AggregationResponseNodeDictionaryStringObject.
 */
class AggregationResponseNodeDictionaryStringObject {
  /**
   * Create a AggregationResponseNodeDictionaryStringObject.
   * @member {string} [groupPropertyKey]
   * @member {string} [groupPropertyValue]
   * @member {number} [idx]
   * @member {object} [properties]
   * @member {array} [children]
   */
  constructor() {
  }

  /**
   * Defines the metadata of AggregationResponseNodeDictionaryStringObject
   *
   * @returns {object} metadata of AggregationResponseNodeDictionaryStringObject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AggregationResponseNode_Dictionary_String_Object_',
      type: {
        name: 'Composite',
        className: 'AggregationResponseNodeDictionaryStringObject',
        modelProperties: {
          groupPropertyKey: {
            required: false,
            serializedName: 'groupPropertyKey',
            type: {
              name: 'String'
            }
          },
          groupPropertyValue: {
            required: false,
            serializedName: 'groupPropertyValue',
            type: {
              name: 'String'
            }
          },
          idx: {
            required: false,
            serializedName: 'idx',
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
                  serializedName: 'AggregationResponseNodeDictionaryStringObjectElementType',
                  type: {
                    name: 'Composite',
                    className: 'AggregationResponseNodeDictionaryStringObject'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AggregationResponseNodeDictionaryStringObject;
