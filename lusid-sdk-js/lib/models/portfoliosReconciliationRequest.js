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
 * Class representing a PortfoliosReconciliationRequest.
 */
class PortfoliosReconciliationRequest {
  /**
   * Create a PortfoliosReconciliationRequest.
   * @member {object} left The specification of the left hand side of the
   * portfolio reconciliation
   * @member {object} [left.portfolioId] The id of the portfolio to be
   * reconciled
   * @member {string} [left.portfolioId.scope]
   * @member {string} [left.portfolioId.code]
   * @member {date} [left.effectiveAt] The effective date of the portfolio
   * @member {date} [left.asAt] Optional. The AsAt date of the portfolio
   * @member {object} right The specification of the right hand side of the
   * portfolio reconciliation
   * @member {object} [right.portfolioId] The id of the portfolio to be
   * reconciled
   * @member {string} [right.portfolioId.scope]
   * @member {string} [right.portfolioId.code]
   * @member {date} [right.effectiveAt] The effective date of the portfolio
   * @member {date} [right.asAt] Optional. The AsAt date of the portfolio
   * @member {array} instrumentPropertyKeys Instrument properties to be
   * included with any identified breaks. These properties will be in the
   * effective and AsAt dates of the left portfolio
   */
  constructor() {
  }

  /**
   * Defines the metadata of PortfoliosReconciliationRequest
   *
   * @returns {object} metadata of PortfoliosReconciliationRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PortfoliosReconciliationRequest',
      type: {
        name: 'Composite',
        className: 'PortfoliosReconciliationRequest',
        modelProperties: {
          left: {
            required: true,
            serializedName: 'left',
            type: {
              name: 'Composite',
              className: 'PortfolioReconciliationRequest'
            }
          },
          right: {
            required: true,
            serializedName: 'right',
            type: {
              name: 'Composite',
              className: 'PortfolioReconciliationRequest'
            }
          },
          instrumentPropertyKeys: {
            required: true,
            serializedName: 'instrumentPropertyKeys',
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

module.exports = PortfoliosReconciliationRequest;
