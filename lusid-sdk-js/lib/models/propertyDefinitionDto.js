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
 * Class representing a PropertyDefinitionDto.
 */
class PropertyDefinitionDto {
  /**
   * Create a PropertyDefinitionDto.
   * @member {string} [href]
   * @member {string} [key]
   * @member {string} [valueType] Possible values include: 'String', 'Int',
   * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
   * 'CurrencyAndAmount', 'TradePrice'
   * @member {boolean} [valueRequired]
   * @member {string} [displayName]
   * @member {object} [dataFormatId]
   * @member {string} [dataFormatId.scope]
   * @member {string} [dataFormatId.code]
   * @member {string} [sort]
   * @member {string} [lifeTime] Possible values include: 'Perpetual',
   * 'TimeVariant'
   * @member {string} [type] Possible values include: 'Label', 'Metric'
   * @member {string} [unitSchema] Possible values include: 'NoUnits', 'Basic',
   * 'Iso4217Currency'
   * @member {array} [_links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PropertyDefinitionDto
   *
   * @returns {object} metadata of PropertyDefinitionDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PropertyDefinitionDto',
      type: {
        name: 'Composite',
        className: 'PropertyDefinitionDto',
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
          dataFormatId: {
            required: false,
            serializedName: 'dataFormatId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          sort: {
            required: false,
            serializedName: 'sort',
            type: {
              name: 'String'
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
          _links: {
            required: false,
            serializedName: '_links',
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

module.exports = PropertyDefinitionDto;
