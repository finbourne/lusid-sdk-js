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
 * Class representing a ExecutionRequest.
 */
class ExecutionRequest {
  /**
   * Create a ExecutionRequest.
   * @member {string} executionId FIX Field 17.  Unique execution identifier.
   * @member {string} side FIX Field 54.
   * @member {string} instrumentUid Unique instrument identifier.
   * @member {date} transactionTime FIX field 60.  Time the transaction
   * represented by this ExecutionReport occurred.
   * @member {number} orderQty FIX field 38.  Order quantity.
   * @member {number} price FIX field 44.
   * @member {string} currency FIX field 15.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExecutionRequest
   *
   * @returns {object} metadata of ExecutionRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExecutionRequest',
      type: {
        name: 'Composite',
        className: 'ExecutionRequest',
        modelProperties: {
          executionId: {
            required: true,
            serializedName: 'executionId',
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
          instrumentUid: {
            required: true,
            serializedName: 'instrumentUid',
            type: {
              name: 'String'
            }
          },
          transactionTime: {
            required: true,
            serializedName: 'transactionTime',
            type: {
              name: 'DateTime'
            }
          },
          orderQty: {
            required: true,
            serializedName: 'orderQty',
            type: {
              name: 'Number'
            }
          },
          price: {
            required: true,
            serializedName: 'price',
            type: {
              name: 'Number'
            }
          },
          currency: {
            required: true,
            serializedName: 'currency',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExecutionRequest;
