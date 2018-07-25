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
 * Class representing a PropertyDataFormatDto.
 */
class PropertyDataFormatDto {
  /**
   * Create a PropertyDataFormatDto.
   * @member {string} [href]
   * @member {string} [formatType] Possible values include: 'Open', 'Closed'
   * @member {object} [id]
   * @member {string} [id.scope]
   * @member {string} [id.code]
   * @member {number} [order]
   * @member {string} [displayName]
   * @member {string} [description]
   * @member {string} [valueType] Possible values include: 'String', 'Int',
   * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
   * 'UnitCreation'
   * @member {array} [acceptableValues]
   * @member {string} [unitSchema] Possible values include: 'NoUnits', 'Basic',
   * 'Iso4217Currency', 'TimeSpan'
   * @member {array} [acceptableUnits]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PropertyDataFormatDto
   *
   * @returns {object} metadata of PropertyDataFormatDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PropertyDataFormatDto',
      type: {
        name: 'Composite',
        className: 'PropertyDataFormatDto',
        modelProperties: {
          href: {
            required: false,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          },
          formatType: {
            required: false,
            serializedName: 'formatType',
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
          order: {
            required: false,
            serializedName: 'order',
            type: {
              name: 'Number'
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
                  serializedName: 'IUnitDefinitionDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'IUnitDefinitionDto'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PropertyDataFormatDto;
