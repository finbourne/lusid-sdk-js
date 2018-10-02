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
 * Class representing a ReferencePortfolioConstituent.
 */
class ReferencePortfolioConstituent {
  /**
   * Create a ReferencePortfolioConstituent.
   * @member {string} [instrumentUid]
   * @member {array} [properties]
   * @member {number} [weight]
   * @member {string} [type] Possible values include: 'Shares', 'Weight',
   * 'Nominal'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReferencePortfolioConstituent
   *
   * @returns {object} metadata of ReferencePortfolioConstituent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReferencePortfolioConstituent',
      type: {
        name: 'Composite',
        className: 'ReferencePortfolioConstituent',
        modelProperties: {
          instrumentUid: {
            required: false,
            serializedName: 'instrumentUid',
            type: {
              name: 'String'
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
          weight: {
            required: false,
            serializedName: 'weight',
            type: {
              name: 'Number'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ReferencePortfolioConstituent;
