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
   * @member {object} [id]
   * @member {string} [id.scope]
   * @member {string} [id.code]
   * @member {string} [href]
   * @member {string} [description]
   * @member {string} [name]
   * @member {boolean} [isDerived]
   * @member {date} [created]
   * @member {object} [parentPortfolioId]
   * @member {string} [parentPortfolioId.scope]
   * @member {string} [parentPortfolioId.code]
   * @member {array} [properties]
   * @member {array} [_links]
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
            serializedName: 'id',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          href: {
            required: false,
            serializedName: 'href',
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
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          isDerived: {
            required: false,
            serializedName: 'isDerived',
            type: {
              name: 'Boolean'
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
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PropertyDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'PropertyDto'
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

module.exports = PortfolioSearchResult;
