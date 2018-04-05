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
 * Class representing a SecurityDto.
 */
class SecurityDto {
  /**
   * Create a SecurityDto.
   * @member {string} [href]
   * @member {string} [uid]
   * @member {object} [version]
   * @member {date} [version.effectiveFrom]
   * @member {date} [version.asAtDate]
   * @member {string} [version.updatedBy]
   * @member {string} [version.href]
   * @member {string} [commonName]
   * @member {object} [aliases]
   * @member {string} [aliases.undefined]
   * @member {string} [aliases.reutersAssetId]
   * @member {string} [aliases.cINS]
   * @member {string} [aliases.isin]
   * @member {string} [aliases.sedol]
   * @member {string} [aliases.cusip]
   * @member {string} [aliases.clientInternal]
   * @member {string} [aliases.figi]
   * @member {string} [aliases.wertpapier]
   * @member {object} [properties]
   * @member {array} [_links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of SecurityDto
   *
   * @returns {object} metadata of SecurityDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SecurityDto',
      type: {
        name: 'Composite',
        className: 'SecurityDto',
        modelProperties: {
          href: {
            required: false,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          },
          uid: {
            required: false,
            serializedName: 'uid',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'Composite',
              className: 'VersionDto'
            }
          },
          commonName: {
            required: false,
            serializedName: 'commonName',
            type: {
              name: 'String'
            }
          },
          aliases: {
            required: false,
            serializedName: 'aliases',
            type: {
              name: 'Composite',
              className: 'SecurityDtoAliases'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'PropertyElementType',
                  type: {
                    name: 'Composite',
                    className: 'Property'
                  }
              }
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

module.exports = SecurityDto;
