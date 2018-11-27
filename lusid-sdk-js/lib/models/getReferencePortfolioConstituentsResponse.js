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
 * Class representing a GetReferencePortfolioConstituentsResponse.
 */
class GetReferencePortfolioConstituentsResponse {
  /**
   * Create a GetReferencePortfolioConstituentsResponse.
   * @property {date} effectiveFrom
   * @property {string} weightType Possible values include: 'Static',
   * 'Floating', 'Periodical'
   * @property {string} [periodType] Possible values include: 'Daily',
   * 'Weekly', 'Monthly', 'Quarterly', 'Annually'
   * @property {number} [periodCount]
   * @property {array} constituents Set of constituents (instrument/weight
   * pairings)
   * @property {string} [href] The Uri that returns the same result as the
   * original request,
   * but may include resolved as at time(s).
   * @property {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetReferencePortfolioConstituentsResponse
   *
   * @returns {object} metadata of GetReferencePortfolioConstituentsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetReferencePortfolioConstituentsResponse',
      type: {
        name: 'Composite',
        className: 'GetReferencePortfolioConstituentsResponse',
        modelProperties: {
          effectiveFrom: {
            required: true,
            serializedName: 'effectiveFrom',
            type: {
              name: 'DateTime'
            }
          },
          weightType: {
            required: true,
            serializedName: 'weightType',
            type: {
              name: 'String'
            }
          },
          periodType: {
            required: false,
            serializedName: 'periodType',
            type: {
              name: 'String'
            }
          },
          periodCount: {
            required: false,
            serializedName: 'periodCount',
            type: {
              name: 'Number'
            }
          },
          constituents: {
            required: true,
            serializedName: 'constituents',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ReferencePortfolioConstituentElementType',
                  type: {
                    name: 'Composite',
                    className: 'ReferencePortfolioConstituent'
                  }
              }
            }
          },
          href: {
            required: false,
            serializedName: 'href',
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

module.exports = GetReferencePortfolioConstituentsResponse;
