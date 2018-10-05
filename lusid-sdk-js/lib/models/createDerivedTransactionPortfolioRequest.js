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
 * Class representing a CreateDerivedTransactionPortfolioRequest.
 */
class CreateDerivedTransactionPortfolioRequest {
  /**
   * Create a CreateDerivedTransactionPortfolioRequest.
   * @member {string} displayName
   * @member {string} [description]
   * @member {string} [code]
   * @member {object} [parentPortfolioId]
   * @member {string} [parentPortfolioId.scope]
   * @member {string} [parentPortfolioId.code]
   * @member {date} [created]
   * @member {object} [corporateActionSourceId]
   * @member {string} [corporateActionSourceId.scope]
   * @member {string} [corporateActionSourceId.code]
   * @member {string} [accountingMethod] Possible values include: 'Default',
   * 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut', 'HighestCostFirst',
   * 'LowestCostFirst'
   * @member {array} [subHoldingKeys]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateDerivedTransactionPortfolioRequest
   *
   * @returns {object} metadata of CreateDerivedTransactionPortfolioRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateDerivedTransactionPortfolioRequest',
      type: {
        name: 'Composite',
        className: 'CreateDerivedTransactionPortfolioRequest',
        modelProperties: {
          displayName: {
            required: true,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          parentPortfolioId: {
            required: false,
            serializedName: 'parentPortfolioId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          created: {
            required: false,
            serializedName: 'created',
            type: {
              name: 'DateTime'
            }
          },
          corporateActionSourceId: {
            required: false,
            serializedName: 'corporateActionSourceId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          accountingMethod: {
            required: false,
            serializedName: 'accountingMethod',
            type: {
              name: 'String'
            }
          },
          subHoldingKeys: {
            required: false,
            serializedName: 'subHoldingKeys',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CreateDerivedTransactionPortfolioRequest;
