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

const models = require('./index');

/**
 * Used to specify the 'target' holding when calling the AdjustHoldings Api
 *
 */
class HoldingAdjustmentDto {
  /**
   * Create a HoldingAdjustmentDto.
   * @member {string} [href]
   * @member {string} [securityUid]
   * @member {number} [units]
   * @member {number} [cost]
   * @member {array} [properties]
   * @member {array} [_links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of HoldingAdjustmentDto
   *
   * @returns {object} metadata of HoldingAdjustmentDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HoldingAdjustmentDto',
      type: {
        name: 'Composite',
        className: 'HoldingAdjustmentDto',
        modelProperties: {
          href: {
            required: false,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          },
          securityUid: {
            required: false,
            serializedName: 'securityUid',
            type: {
              name: 'String'
            }
          },
          units: {
            required: false,
            serializedName: 'units',
            type: {
              name: 'Number'
            }
          },
          cost: {
            required: false,
            serializedName: 'cost',
            type: {
              name: 'Number'
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

module.exports = HoldingAdjustmentDto;
