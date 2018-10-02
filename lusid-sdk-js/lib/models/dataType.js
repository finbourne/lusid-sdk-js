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
 * Class representing a DataType.
 */
class DataType {
  /**
   * Create a DataType.
   * @member {string} [href]
   * @member {string} [typeValueRange] Possible values include: 'Open',
   * 'Closed'
   * @member {object} [id]
   * @member {string} [id.scope]
   * @member {string} [id.code]
   * @member {string} [displayName]
   * @member {string} [description]
   * @member {string} [valueType] Possible values include: 'String', 'Int',
   * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements',
   * 'ArrayofUnits', 'StringArray', 'CurrencyAndAmount', 'TradePrice',
   * 'UnitCreation', 'Currency', 'UserId'
   * @member {array} [acceptableValues]
   * @member {string} [unitSchema] Possible values include: 'NoUnits', 'Basic',
   * 'Iso4217Currency'
   * @member {array} [acceptableUnits]
   * @member {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DataType
   *
   * @returns {object} metadata of DataType
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataType',
      type: {
        name: 'Composite',
        className: 'DataType',
        modelProperties: {
          href: {
            required: false,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          },
          typeValueRange: {
            required: false,
            serializedName: 'typeValueRange',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          valueType: {
            required: false,
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
                  serializedName: 'IUnitDefinitionElementType',
                  type: {
                    name: 'Composite',
                    className: 'IUnitDefinition'
                  }
              }
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

module.exports = DataType;
