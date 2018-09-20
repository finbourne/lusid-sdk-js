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
 * Class representing a TransactionQueryParameters.
 */
class TransactionQueryParameters {
  /**
   * Create a TransactionQueryParameters.
   * @member {date} [startDate] The required set of transactions should begin
   * from this date
   * @member {date} [endDate] The required set of transactions should end at
   * this date
   * @member {string} [queryMode] The method for date selection. Trade date or
   * Settlement date. Possible values include: 'None', 'TradeDate',
   * 'SettleDate'
   * @member {boolean} [showCancelledTransactions] Option to include cancelled
   * transactions in the results
   */
  constructor() {
  }

  /**
   * Defines the metadata of TransactionQueryParameters
   *
   * @returns {object} metadata of TransactionQueryParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TransactionQueryParameters',
      type: {
        name: 'Composite',
        className: 'TransactionQueryParameters',
        modelProperties: {
          startDate: {
            required: false,
            serializedName: 'startDate',
            type: {
              name: 'DateTime'
            }
          },
          endDate: {
            required: false,
            serializedName: 'endDate',
            type: {
              name: 'DateTime'
            }
          },
          queryMode: {
            required: false,
            serializedName: 'queryMode',
            type: {
              name: 'String'
            }
          },
          showCancelledTransactions: {
            required: false,
            serializedName: 'showCancelledTransactions',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = TransactionQueryParameters;
