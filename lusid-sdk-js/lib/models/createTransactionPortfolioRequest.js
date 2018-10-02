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
 * Class representing a CreateTransactionPortfolioRequest.
 */
class CreateTransactionPortfolioRequest {
  /**
   * Create a CreateTransactionPortfolioRequest.
   * @member {string} displayName
   * @member {string} [description]
   * @member {string} code
   * @member {date} [created]
   * @member {string} baseCurrency
   * @member {object} [corporateActionSourceId]
   * @member {string} [corporateActionSourceId.scope]
   * @member {string} [corporateActionSourceId.code]
   * @member {string} [accountingMethod] Possible values include: 'Default',
   * 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut', 'HighestCostFirst',
   * 'LowestCostFirst'
   * @member {array} [subHoldingKeys]
   * @member {object} [properties] Portfolio properties to add to the portfolio
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateTransactionPortfolioRequest
   *
   * @returns {object} metadata of CreateTransactionPortfolioRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateTransactionPortfolioRequest',
      type: {
        name: 'Composite',
        className: 'CreateTransactionPortfolioRequest',
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
            required: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          created: {
            required: false,
            serializedName: 'created',
            type: {
              name: 'DateTime'
            }
          },
          baseCurrency: {
            required: true,
            serializedName: 'baseCurrency',
            type: {
              name: 'String'
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
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'CreatePropertyRequestElementType',
                  type: {
                    name: 'Composite',
                    className: 'CreatePropertyRequest'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CreateTransactionPortfolioRequest;
