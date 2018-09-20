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
 * Class representing a KeyValuePairOfStringToFieldSchema.
 */
class KeyValuePairOfStringToFieldSchema {
  /**
   * Create a KeyValuePairOfStringToFieldSchema.
   * @member {string} [key]
   * @member {object} [value]
   * @member {string} [value.scope]
   * @member {string} [value.name]
   * @member {string} [value.displayName]
   * @member {string} [value.type] Possible values include: 'String', 'Int',
   * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
   * 'CurrencyAndAmount', 'TradePrice'
   * @member {boolean} [value.isMetric]
   * @member {number} [value.displayOrder]
   * @member {object} [value.propertySchema]
   */
  constructor() {
  }

  /**
   * Defines the metadata of KeyValuePairOfStringToFieldSchema
   *
   * @returns {object} metadata of KeyValuePairOfStringToFieldSchema
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'KeyValuePairOfStringToFieldSchema',
      type: {
        name: 'Composite',
        className: 'KeyValuePairOfStringToFieldSchema',
        modelProperties: {
          key: {
            required: false,
            readOnly: true,
            serializedName: 'key',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'Composite',
              className: 'FieldSchema'
            }
          }
        }
      }
    };
  }
}

module.exports = KeyValuePairOfStringToFieldSchema;
