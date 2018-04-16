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
 * Class representing a MovementDataDto.
 */
class MovementDataDto {
  /**
   * Create a MovementDataDto.
   * @member {string} movementTypes The movement types. Possible values
   * include: 'Settlement', 'Traded', 'ForwardFx', 'Commitment', 'Receivable',
   * 'CashSettlement', 'Accrual'
   * @member {string} side The Side. Possible values include: 'Side1', 'Side2',
   * 'BondInt'
   * @member {number} direction
   * @member {string} flags The Flags
   */
  constructor() {
  }

  /**
   * Defines the metadata of MovementDataDto
   *
   * @returns {object} metadata of MovementDataDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MovementDataDto',
      type: {
        name: 'Composite',
        className: 'MovementDataDto',
        modelProperties: {
          movementTypes: {
            required: true,
            readOnly: true,
            serializedName: 'movementTypes',
            type: {
              name: 'String'
            }
          },
          side: {
            required: true,
            readOnly: true,
            serializedName: 'side',
            type: {
              name: 'String'
            }
          },
          direction: {
            required: true,
            readOnly: true,
            serializedName: 'direction',
            type: {
              name: 'Number'
            }
          },
          flags: {
            required: true,
            readOnly: true,
            serializedName: 'flags',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MovementDataDto;
