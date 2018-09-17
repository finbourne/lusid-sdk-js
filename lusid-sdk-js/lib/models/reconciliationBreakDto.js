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
 * A reconciliation break
 *
 */
class ReconciliationBreakDto {
  /**
   * Create a ReconciliationBreakDto.
   * @member {string} [securityUid] Unique security identifier
   * @member {array} [properties]
   * @member {number} [unitsDifference] Difference in units
   * @member {number} [costDifference] Difference in cost
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReconciliationBreakDto
   *
   * @returns {object} metadata of ReconciliationBreakDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReconciliationBreakDto',
      type: {
        name: 'Composite',
        className: 'ReconciliationBreakDto',
        modelProperties: {
          securityUid: {
            required: false,
            serializedName: 'securityUid',
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
                  serializedName: 'PropertyDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'PropertyDto'
                  }
              }
            }
          },
          unitsDifference: {
            required: false,
            serializedName: 'unitsDifference',
            type: {
              name: 'Number'
            }
          },
          costDifference: {
            required: false,
            serializedName: 'costDifference',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ReconciliationBreakDto;
