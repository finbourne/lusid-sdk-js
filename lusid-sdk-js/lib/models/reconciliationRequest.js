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
 * Class representing a ReconciliationRequest.
 */
class ReconciliationRequest {
  /**
   * Create a ReconciliationRequest.
   * @member {string} [leftScope]
   * @member {string} [leftCode]
   * @member {date} [leftEffectiveAt]
   * @member {date} [leftAsAt]
   * @member {string} [rightScope]
   * @member {string} [rightCode]
   * @member {date} [rightEffectiveAt]
   * @member {date} [rightAsAt]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReconciliationRequest
   *
   * @returns {object} metadata of ReconciliationRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReconciliationRequest',
      type: {
        name: 'Composite',
        className: 'ReconciliationRequest',
        modelProperties: {
          leftScope: {
            required: false,
            serializedName: 'leftScope',
            type: {
              name: 'String'
            }
          },
          leftCode: {
            required: false,
            serializedName: 'leftCode',
            type: {
              name: 'String'
            }
          },
          leftEffectiveAt: {
            required: false,
            serializedName: 'leftEffectiveAt',
            type: {
              name: 'DateTime'
            }
          },
          leftAsAt: {
            required: false,
            serializedName: 'leftAsAt',
            type: {
              name: 'DateTime'
            }
          },
          rightScope: {
            required: false,
            serializedName: 'rightScope',
            type: {
              name: 'String'
            }
          },
          rightCode: {
            required: false,
            serializedName: 'rightCode',
            type: {
              name: 'String'
            }
          },
          rightEffectiveAt: {
            required: false,
            serializedName: 'rightEffectiveAt',
            type: {
              name: 'DateTime'
            }
          },
          rightAsAt: {
            required: false,
            serializedName: 'rightAsAt',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = ReconciliationRequest;
