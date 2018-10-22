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
 * Class representing a PropertyDefinition.
 */
class PropertyDefinition {
  /**
   * Create a PropertyDefinition.
   * @member {string} [href]
   * @member {string} [key]
   * @member {string} [valueType] Possible values include: 'String', 'Int',
   * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements',
   * 'ArrayofUnits', 'StringArray', 'CurrencyAndAmount', 'TradePrice',
   * 'UnitCreation', 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
   * @member {boolean} [valueRequired]
   * @member {string} [displayName]
   * @member {object} [dataTypeId]
   * @member {string} [dataTypeId.scope]
   * @member {string} [dataTypeId.code]
   * @member {string} [lifeTime] Possible values include: 'Perpetual',
   * 'TimeVariant'
   * @member {string} [type] Possible values include: 'Label', 'Metric'
   * @member {string} [unitSchema] Possible values include: 'NoUnits', 'Basic',
   * 'Iso4217Currency'
   * @member {string} [domain] Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   * @member {string} [scope]
   * @member {string} [code]
   * @member {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PropertyDefinition
   *
   * @returns {object} metadata of PropertyDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PropertyDefinition',
      type: {
        name: 'Composite',
        className: 'PropertyDefinition',
        modelProperties: {
          href: {
            required: false,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          },
          key: {
            required: false,
            serializedName: 'key',
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
          valueRequired: {
            required: false,
            serializedName: 'valueRequired',
            type: {
              name: 'Boolean'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          dataTypeId: {
            required: false,
            serializedName: 'dataTypeId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          lifeTime: {
            required: false,
            serializedName: 'lifeTime',
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
          unitSchema: {
            required: false,
            serializedName: 'unitSchema',
            type: {
              name: 'String'
            }
          },
          domain: {
            required: false,
            readOnly: true,
            serializedName: 'domain',
            type: {
              name: 'String'
            }
          },
          scope: {
            required: false,
            readOnly: true,
            serializedName: 'scope',
            type: {
              name: 'String'
            }
          },
          code: {
            required: false,
            readOnly: true,
            serializedName: 'code',
            type: {
              name: 'String'
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

module.exports = PropertyDefinition;
