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
 * Class representing a CreateDataTypeRequest.
 */
class CreateDataTypeRequest {
  /**
   * Create a CreateDataTypeRequest.
   * @property {string} scope
   * @property {string} code
   * @property {string} typeValueRange Possible values include: 'Open',
   * 'Closed'
   * @property {string} displayName
   * @property {string} description
   * @property {string} valueType Possible values include: 'String', 'Int',
   * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements',
   * 'ArrayofUnits', 'StringArray', 'CurrencyAndAmount', 'TradePrice',
   * 'UnitCreation', 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
   * @property {array} [acceptableValues]
   * @property {string} [unitSchema] Possible values include: 'NoUnits',
   * 'Basic', 'Iso4217Currency'
   * @property {array} [acceptableUnits]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateDataTypeRequest
   *
   * @returns {object} metadata of CreateDataTypeRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateDataTypeRequest',
      type: {
        name: 'Composite',
        className: 'CreateDataTypeRequest',
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
          typeValueRange: {
            required: true,
            serializedName: 'typeValueRange',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          description: {
            required: true,
            serializedName: 'description',
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
          },
          unitSchema: {
            required: false,
            serializedName: 'unitSchema',
            type: {
              name: 'String'
            }
          },
          acceptableUnits: {
            required: false,
            serializedName: 'acceptableUnits',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CreateUnitDefinitionElementType',
                  type: {
                    name: 'Composite',
                    className: 'CreateUnitDefinition'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CreateDataTypeRequest;
