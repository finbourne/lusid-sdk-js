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
 * Class representing a LoginResponse.
 */
class LoginResponse {
  /**
   * Create a LoginResponse.
   * @member {string} [name]
   * @member {string} [firstName]
   * @member {string} [defaultScope]
   * @member {string} [sessionContextId]
   * @member {string} [logoUri]
   * @member {string} [valueCurrencyCode]
   * @member {string} [valueCurrencySymbol]
   */
  constructor() {
  }

  /**
   * Defines the metadata of LoginResponse
   *
   * @returns {object} metadata of LoginResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LoginResponse',
      type: {
        name: 'Composite',
        className: 'LoginResponse',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          firstName: {
            required: false,
            serializedName: 'firstName',
            type: {
              name: 'String'
            }
          },
          defaultScope: {
            required: false,
            serializedName: 'defaultScope',
            type: {
              name: 'String'
            }
          },
          sessionContextId: {
            required: false,
            serializedName: 'sessionContextId',
            type: {
              name: 'String'
            }
          },
          logoUri: {
            required: false,
            serializedName: 'logoUri',
            type: {
              name: 'String'
            }
          },
          valueCurrencyCode: {
            required: false,
            serializedName: 'valueCurrencyCode',
            type: {
              name: 'String'
            }
          },
          valueCurrencySymbol: {
            required: false,
            serializedName: 'valueCurrencySymbol',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LoginResponse;
