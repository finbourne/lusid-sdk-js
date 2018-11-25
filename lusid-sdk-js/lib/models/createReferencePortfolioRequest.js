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
 * Class representing a CreateReferencePortfolioRequest.
 */
class CreateReferencePortfolioRequest {
  /**
   * Create a CreateReferencePortfolioRequest.
   * @property {string} displayName
   * @property {string} [description]
   * @property {string} code
   * @property {date} [created]
   * @property {object} [properties] Portfolio properties to add to the
   * portfolio
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateReferencePortfolioRequest
   *
   * @returns {object} metadata of CreateReferencePortfolioRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateReferencePortfolioRequest',
      type: {
        name: 'Composite',
        className: 'CreateReferencePortfolioRequest',
        modelProperties: {
          displayName: {
            required: true,
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
          code: {
            required: true,
            serializedName: 'code',
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
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'PerpetualPropertyValueElementType',
                  type: {
                    name: 'Composite',
                    className: 'PerpetualPropertyValue'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CreateReferencePortfolioRequest;
