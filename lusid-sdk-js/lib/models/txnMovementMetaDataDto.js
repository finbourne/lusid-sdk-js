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
 * Class representing a TxnMovementMetaDataDto.
 */
class TxnMovementMetaDataDto {
  /**
   * Create a TxnMovementMetaDataDto.
   * @member {string} movementTypes The Movement Types. Possible values
   * include: 'Settlement', 'Traded', 'ForwardFx', 'Commitment', 'Receivable',
   * 'CashSettlement', 'Accrual', 'UnsettledCashTypes'
   * @member {string} side The Movement Side. Possible values include: 'Side1',
   * 'Side2', 'BondInt'
   * @member {number} direction The Movement direction
   * @member {array} [properties]
   * @member {array} [mappings]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TxnMovementMetaDataDto
   *
   * @returns {object} metadata of TxnMovementMetaDataDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TxnMovementMetaDataDto',
      type: {
        name: 'Composite',
        className: 'TxnMovementMetaDataDto',
        modelProperties: {
          movementTypes: {
            required: true,
            serializedName: 'movementTypes',
            type: {
              name: 'String'
            }
          },
          side: {
            required: true,
            serializedName: 'side',
            type: {
              name: 'String'
            }
          },
          direction: {
            required: true,
            serializedName: 'direction',
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
          mappings: {
            required: false,
            serializedName: 'mappings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TxnPropertyMappingDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'TxnPropertyMappingDto'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TxnMovementMetaDataDto;
