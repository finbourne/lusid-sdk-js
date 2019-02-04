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
 * Class representing a Portfolio.
 */
class Portfolio {
  /**
   * Create a Portfolio.
   * @property {string} [href] Link to retrieve the current entity
   * @property {object} [id] Identifier for the portfolio
   * @property {string} [id.scope]
   * @property {string} [id.code]
   * @property {string} [type] The type of portfolio this is (e.g. Transaction
   * Portfolio, Reference  Portfolio). Possible values include: 'Transaction',
   * 'Reference', 'DerivedTransaction'
   * @property {string} [displayName] Display name of the portfolio
   * @property {string} [description] Description of the portfolio
   * @property {date} [created] Portfolio creation time in UTC
   * @property {object} [parentPortfolioId] If this is a derived portfolio, the
   * identifier of the portfolio from which it is derived
   * @property {string} [parentPortfolioId.scope]
   * @property {string} [parentPortfolioId.code]
   * @property {object} [version] The version of the portfolio
   * @property {date} [version.effectiveFrom]
   * @property {date} [version.asAtDate]
   * @property {boolean} [isDerived]
   * @property {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Portfolio
   *
   * @returns {object} metadata of Portfolio
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Portfolio',
      type: {
        name: 'Composite',
        className: 'Portfolio',
        modelProperties: {
          href: {
            required: false,
            serializedName: 'href',
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
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
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
          created: {
            required: false,
            serializedName: 'created',
            type: {
              name: 'DateTime'
            }
          },
          parentPortfolioId: {
            required: false,
            serializedName: 'parentPortfolioId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
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
          isDerived: {
            required: false,
            serializedName: 'isDerived',
            type: {
              name: 'Boolean'
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

module.exports = Portfolio;
