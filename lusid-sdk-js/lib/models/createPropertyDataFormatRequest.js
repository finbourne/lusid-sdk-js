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
 * Class representing a CreatePropertyDataFormatRequest.
 */
class CreatePropertyDataFormatRequest {
  /**
   * Create a CreatePropertyDataFormatRequest.
   * @member {string} scope
   * @member {string} code
   * @member {string} formatType Possible values include: 'Basic', 'Limited',
   * 'Currency'
   * @member {number} order
   * @member {string} displayName
   * @member {string} valueType Possible values include: 'String', 'Int',
   * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'Currency', 'BenchmarkType', 'Code', 'Id', 'Uri',
   * 'ArrayOfIds', 'ArrayOfTxnAliases', 'ArrayofTxnMovements'
   * @member {array} [acceptableValues]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreatePropertyDataFormatRequest
   *
   * @returns {object} metadata of CreatePropertyDataFormatRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreatePropertyDataFormatRequest',
      type: {
        name: 'Composite',
        className: 'CreatePropertyDataFormatRequest',
        modelProperties: {
          scope: {
            required: true,
            serializedName: 'scope',
            type: {
              name: 'String'
            }
          },
          code: {
            required: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          formatType: {
            required: true,
            serializedName: 'formatType',
            type: {
              name: 'String'
            }
          },
          order: {
            required: true,
            serializedName: 'order',
            type: {
              name: 'Number'
            }
          },
          displayName: {
            required: true,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          valueType: {
            required: true,
            serializedName: 'valueType',
            type: {
              name: 'String'
            }
          },
          acceptableValues: {
            required: false,
            serializedName: 'acceptableValues',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CreatePropertyDataFormatRequest;
