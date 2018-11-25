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
 * Summary information of a holdings adjustment for a single portfolio and
 * effective date.
 *
 */
class HoldingsAdjustmentHeader {
  /**
   * Create a HoldingsAdjustmentHeader.
   * @property {date} [effectiveAt] There can be at most one holdings
   * adjustment for a portfolio at a
   * specific effective time so this uniquely identifies the adjustment.
   * @property {object} [version]
   * @property {date} [version.effectiveFrom]
   * @property {date} [version.asAtDate]
   * @property {string} [version.href]
   * @property {string} [unmatchedHoldingMethod] Possible values include:
   * 'PositionToZero', 'KeepTheSame'
   * @property {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of HoldingsAdjustmentHeader
   *
   * @returns {object} metadata of HoldingsAdjustmentHeader
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HoldingsAdjustmentHeader',
      type: {
        name: 'Composite',
        className: 'HoldingsAdjustmentHeader',
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
              className: 'Version'
            }
          },
          unmatchedHoldingMethod: {
            required: false,
            serializedName: 'unmatchedHoldingMethod',
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

module.exports = HoldingsAdjustmentHeader;
