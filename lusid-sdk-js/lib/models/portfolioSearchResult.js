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
 * Class representing a PortfolioSearchResult.
 */
class PortfolioSearchResult {
  /**
   * Create a PortfolioSearchResult.
   * @property {object} [id]
   * @property {string} [id.scope]
   * @property {string} [id.code]
   * @property {string} [type] Possible values include: 'Transaction',
   * 'Reference', 'DerivedTransaction'
   * @property {string} [href]
   * @property {string} [description]
   * @property {string} [displayName]
   * @property {boolean} [isDerived]
   * @property {date} [created]
   * @property {object} [parentPortfolioId]
   * @property {string} [parentPortfolioId.scope]
   * @property {string} [parentPortfolioId.code]
   * @property {array} [properties]
   * @property {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PortfolioSearchResult
   *
   * @returns {object} metadata of PortfolioSearchResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PortfolioSearchResult',
      type: {
        name: 'Composite',
        className: 'PortfolioSearchResult',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          href: {
            required: false,
            readOnly: true,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            readOnly: true,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          isDerived: {
            required: false,
            readOnly: true,
            serializedName: 'isDerived',
            type: {
              name: 'Boolean'
            }
          },
          created: {
            required: false,
            readOnly: true,
            serializedName: 'created',
            type: {
              name: 'DateTime'
            }
          },
          parentPortfolioId: {
            required: false,
            readOnly: true,
            serializedName: 'parentPortfolioId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          properties: {
            required: false,
            readOnly: true,
            serializedName: 'properties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PropertyElementType',
                  type: {
                    name: 'Composite',
                    className: 'Property'
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

module.exports = PortfolioSearchResult;
