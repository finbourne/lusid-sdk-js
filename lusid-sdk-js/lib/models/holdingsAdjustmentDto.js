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
 * Full content of a holdings adjustment for a single portfolio and effective
 * date.
 *
 */
class HoldingsAdjustmentDto {
  /**
   * Create a HoldingsAdjustmentDto.
   * @member {date} [effectiveAt] There can be at most one holdings adjustment
   * for a portfolio at a
   * specific effective time so this uniquely identifies the adjustment.
   * @member {object} [version]
   * @member {date} [version.effectiveFrom]
   * @member {date} [version.asAtDate]
   * @member {string} [version.updatedBy]
   * @member {string} [version.href]
   * @member {string} [unmatchedHoldingMethod] Possible values include:
   * 'PositionToZero', 'KeepTheSame'
   * @member {array} [adjustments]
   */
  constructor() {
  }

  /**
   * Defines the metadata of HoldingsAdjustmentDto
   *
   * @returns {object} metadata of HoldingsAdjustmentDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HoldingsAdjustmentDto',
      type: {
        name: 'Composite',
        className: 'HoldingsAdjustmentDto',
        modelProperties: {
          effectiveAt: {
            required: false,
            serializedName: 'effectiveAt',
            type: {
              name: 'DateTime'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'Composite',
              className: 'VersionDto'
            }
          },
          unmatchedHoldingMethod: {
            required: false,
            serializedName: 'unmatchedHoldingMethod',
            type: {
              name: 'String'
            }
          },
          adjustments: {
            required: false,
            serializedName: 'adjustments',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AdjustHoldingRequestElementType',
                  type: {
                    name: 'Composite',
                    className: 'AdjustHoldingRequest'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = HoldingsAdjustmentDto;
