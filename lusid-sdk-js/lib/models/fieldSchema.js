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
 * Class representing a FieldSchema.
 */
class FieldSchema {
  /**
   * Create a FieldSchema.
   * @member {string} [scope]
   * @member {string} [name]
   * @member {string} [displayName]
   * @member {string} [type] Possible values include: 'String', 'Int',
   * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
   * 'UnitCreation'
   * @member {boolean} [isMetric]
   * @member {number} [displayOrder]
   * @member {object} [propertySchema]
   */
  constructor() {
  }

  /**
   * Defines the metadata of FieldSchema
   *
   * @returns {object} metadata of FieldSchema
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FieldSchema',
      type: {
        name: 'Composite',
        className: 'FieldSchema',
        modelProperties: {
          scope: {
            required: false,
            serializedName: 'scope',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          isMetric: {
            required: false,
            serializedName: 'isMetric',
            type: {
              name: 'Boolean'
            }
          },
          displayOrder: {
            required: false,
            serializedName: 'displayOrder',
            type: {
              name: 'Number'
            }
          },
          propertySchema: {
            required: false,
            serializedName: 'propertySchema',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'FieldSchemaElementType',
                  type: {
                    name: 'Composite',
                    className: 'FieldSchema'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = FieldSchema;
