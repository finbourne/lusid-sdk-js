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
 * Class representing a TransactionConfigurationDataRequest.
 */
class TransactionConfigurationDataRequest {
  /**
   * Create a TransactionConfigurationDataRequest.
   * @property {array} aliases List of transaction codes that map to this
   * specific transaction model
   * @property {array} movements Movement data for the transaction code
   * @property {object} [properties]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TransactionConfigurationDataRequest
   *
   * @returns {object} metadata of TransactionConfigurationDataRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TransactionConfigurationDataRequest',
      type: {
        name: 'Composite',
        className: 'TransactionConfigurationDataRequest',
        modelProperties: {
          aliases: {
            required: true,
            serializedName: 'aliases',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TransactionConfigurationTypeAliasElementType',
                  type: {
                    name: 'Composite',
                    className: 'TransactionConfigurationTypeAlias'
                  }
              }
            }
          },
          movements: {
            required: true,
            serializedName: 'movements',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TransactionConfigurationMovementDataRequestElementType',
                  type: {
                    name: 'Composite',
                    className: 'TransactionConfigurationMovementDataRequest'
                  }
              }
            }
          },
          properties: {
            required: false,
            readOnly: true,
            serializedName: 'properties',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'PerpetualPropertyValueElementType',
                  type: {
                    name: 'Composite',
                    className: 'PerpetualPropertyValue'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TransactionConfigurationDataRequest;
