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
 * Class representing a PortfolioGroup.
 */
class PortfolioGroup {
  /**
   * Create a PortfolioGroup.
   * @member {string} [href]
   * @member {object} [id]
   * @member {string} [id.scope]
   * @member {string} [id.code]
   * @member {string} [displayName]
   * @member {string} [description]
   * @member {array} [portfolios]
   * @member {array} [subGroups]
   * @member {object} [version]
   * @member {date} [version.effectiveFrom]
   * @member {date} [version.asAtDate]
   * @member {string} [version.href]
   * @member {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PortfolioGroup
   *
   * @returns {object} metadata of PortfolioGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PortfolioGroup',
      type: {
        name: 'Composite',
        className: 'PortfolioGroup',
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
          portfolios: {
            required: false,
            serializedName: 'portfolios',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ResourceIdElementType',
                  type: {
                    name: 'Composite',
                    className: 'ResourceId'
                  }
              }
            }
          },
          subGroups: {
            required: false,
            serializedName: 'subGroups',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ResourceIdElementType',
                  type: {
                    name: 'Composite',
                    className: 'ResourceId'
                  }
              }
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

module.exports = PortfolioGroup;
