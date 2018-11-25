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
 * Class representing a CompletePortfolio.
 */
class CompletePortfolio {
  /**
   * Create a CompletePortfolio.
   * @property {object} [id]
   * @property {string} [id.scope]
   * @property {string} [id.code]
   * @property {string} [href]
   * @property {string} [description]
   * @property {string} [displayName]
   * @property {date} [created]
   * @property {object} [parentPortfolioId]
   * @property {string} [parentPortfolioId.scope]
   * @property {string} [parentPortfolioId.code]
   * @property {boolean} [isDerived]
   * @property {string} [type] Possible values include: 'Transaction',
   * 'Reference', 'DerivedTransaction'
   * @property {object} [version]
   * @property {date} [version.effectiveFrom]
   * @property {date} [version.asAtDate]
   * @property {string} [version.href]
   * @property {array} [properties]
   * @property {string} [baseCurrency]
   * @property {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CompletePortfolio
   *
   * @returns {object} metadata of CompletePortfolio
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CompletePortfolio',
      type: {
        name: 'Composite',
        className: 'CompletePortfolio',
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
          isDerived: {
            required: false,
            readOnly: true,
            serializedName: 'isDerived',
            type: {
              name: 'Boolean'
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
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'Composite',
              className: 'Version'
            }
          },
          properties: {
            required: false,
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
          baseCurrency: {
            required: false,
            serializedName: 'baseCurrency',
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

module.exports = CompletePortfolio;
