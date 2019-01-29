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
 * Class representing a ExpandedGroup.
 */
class ExpandedGroup {
  /**
   * Create a ExpandedGroup.
   * @property {string} [href]
   * @property {object} [id]
   * @property {string} [id.scope]
   * @property {string} [id.code]
   * @property {string} [name]
   * @property {string} [description]
   * @property {array} [values]
   * @property {array} [subGroups]
   * @property {object} [version]
   * @property {date} [version.effectiveFrom]
   * @property {date} [version.asAtDate]
   * @property {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExpandedGroup
   *
   * @returns {object} metadata of ExpandedGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExpandedGroup',
      type: {
        name: 'Composite',
        className: 'ExpandedGroup',
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
          name: {
            required: false,
            serializedName: 'name',
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
          values: {
            required: false,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CompletePortfolioElementType',
                  type: {
                    name: 'Composite',
                    className: 'CompletePortfolio'
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
                  serializedName: 'ExpandedGroupElementType',
                  type: {
                    name: 'Composite',
                    className: 'ExpandedGroup'
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

module.exports = ExpandedGroup;
