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
 * Class representing a AnalyticsItemDto.
 */
class AnalyticsItemDto {
  /**
   * Create a AnalyticsItemDto.
   * @member {string} label
   * @member {string} securityUid
   * @member {date} analyticDate
   * @member {string} [recipeScope]
   * @member {string} recipeKey
   * @member {object} metricKey
   * @member {object} value
   */
  constructor() {
  }

  /**
   * Defines the metadata of AnalyticsItemDto
   *
   * @returns {object} metadata of AnalyticsItemDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AnalyticsItemDto',
      type: {
        name: 'Composite',
        className: 'AnalyticsItemDto',
        modelProperties: {
          label: {
            required: true,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          securityUid: {
            required: true,
            serializedName: 'securityUid',
            type: {
              name: 'String'
            }
          },
          analyticDate: {
            required: true,
            serializedName: 'analyticDate',
            type: {
              name: 'DateTime'
            }
          },
          recipeScope: {
            required: false,
            serializedName: 'recipeScope',
            type: {
              name: 'String'
            }
          },
          recipeKey: {
            required: true,
            serializedName: 'recipeKey',
            type: {
              name: 'String'
            }
          },
          metricKey: {
            required: true,
            serializedName: 'metricKey',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AnalyticsItemDto;
