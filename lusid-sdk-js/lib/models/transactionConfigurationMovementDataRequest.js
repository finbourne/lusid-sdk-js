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
 * Class representing a TransactionConfigurationMovementDataRequest.
 */
class TransactionConfigurationMovementDataRequest {
  /**
   * Create a TransactionConfigurationMovementDataRequest.
   * @property {string} movementTypes The Movement Types. Possible values
   * include: 'Settlement', 'Traded', 'ForwardFx', 'Commitment', 'Receivable',
   * 'CashSettlement', 'Accrual', 'UnsettledCashTypes'
   * @property {string} side The Movement Side. Possible values include:
   * 'Side1', 'Side2', 'BondInt'
   * @property {number} direction The Movement direction
   * @property {object} [properties]
   * @property {array} [mappings]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TransactionConfigurationMovementDataRequest
   *
   * @returns {object} metadata of TransactionConfigurationMovementDataRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TransactionConfigurationMovementDataRequest',
      type: {
        name: 'Composite',
        className: 'TransactionConfigurationMovementDataRequest',
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
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'PropertyValueElementType',
                  type: {
                    name: 'Composite',
                    className: 'PropertyValue'
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
                  serializedName: 'TransactionPropertyMappingRequestElementType',
                  type: {
                    name: 'Composite',
                    className: 'TransactionPropertyMappingRequest'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TransactionConfigurationMovementDataRequest;
