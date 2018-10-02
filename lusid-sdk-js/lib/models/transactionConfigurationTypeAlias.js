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
 * Class representing a TransactionConfigurationTypeAlias.
 */
class TransactionConfigurationTypeAlias {
  /**
   * Create a TransactionConfigurationTypeAlias.
   * @member {string} type The transaction type
   * @member {string} description Brief description of the transaction
   * @member {string} transactionClass Relates types of a similar class. E.g.
   * Buy/Sell, StockIn/StockOut
   * @member {string} transactionGroup Group is a set of codes related to a
   * source, or sync
   * @member {string} [transactionRoles] Transactions role within a class. E.g.
   * Increase a long position. Possible values include: 'None', 'LongLonger',
   * 'LongShorter', 'ShortShorter', 'ShortLonger', 'Longer', 'Shorter',
   * 'AllRoles'
   */
  constructor() {
  }

  /**
   * Defines the metadata of TransactionConfigurationTypeAlias
   *
   * @returns {object} metadata of TransactionConfigurationTypeAlias
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TransactionConfigurationTypeAlias',
      type: {
        name: 'Composite',
        className: 'TransactionConfigurationTypeAlias',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          description: {
            required: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          transactionClass: {
            required: true,
            serializedName: 'transactionClass',
            type: {
              name: 'String'
            }
          },
          transactionGroup: {
            required: true,
            serializedName: 'transactionGroup',
            type: {
              name: 'String'
            }
          },
          transactionRoles: {
            required: false,
            serializedName: 'transactionRoles',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TransactionConfigurationTypeAlias;
