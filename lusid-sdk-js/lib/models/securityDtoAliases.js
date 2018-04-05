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
 * Class representing a SecurityDtoAliases.
 */
class SecurityDtoAliases {
  /**
   * Create a SecurityDtoAliases.
   * @member {string} [undefined]
   * @member {string} [reutersAssetId]
   * @member {string} [cINS]
   * @member {string} [isin]
   * @member {string} [sedol]
   * @member {string} [cusip]
   * @member {string} [clientInternal]
   * @member {string} [figi]
   * @member {string} [wertpapier]
   */
  constructor() {
  }

  /**
   * Defines the metadata of SecurityDtoAliases
   *
   * @returns {object} metadata of SecurityDtoAliases
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SecurityDto_aliases',
      type: {
        name: 'Composite',
        className: 'SecurityDtoAliases',
        modelProperties: {
          undefined: {
            required: false,
            serializedName: 'Undefined',
            type: {
              name: 'String'
            }
          },
          reutersAssetId: {
            required: false,
            serializedName: 'ReutersAssetId',
            type: {
              name: 'String'
            }
          },
          cINS: {
            required: false,
            serializedName: 'CINS',
            type: {
              name: 'String'
            }
          },
          isin: {
            required: false,
            serializedName: 'Isin',
            type: {
              name: 'String'
            }
          },
          sedol: {
            required: false,
            serializedName: 'Sedol',
            type: {
              name: 'String'
            }
          },
          cusip: {
            required: false,
            serializedName: 'Cusip',
            type: {
              name: 'String'
            }
          },
          clientInternal: {
            required: false,
            serializedName: 'ClientInternal',
            type: {
              name: 'String'
            }
          },
          figi: {
            required: false,
            serializedName: 'Figi',
            type: {
              name: 'String'
            }
          },
          wertpapier: {
            required: false,
            serializedName: 'Wertpapier',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SecurityDtoAliases;
