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
 * Class representing a PortfolioReconciliationRequest.
 */
class PortfolioReconciliationRequest {
  /**
   * Create a PortfolioReconciliationRequest.
   * @property {object} portfolioId The id of the portfolio to be reconciled
   * @property {string} [portfolioId.scope]
   * @property {string} [portfolioId.code]
   * @property {date} effectiveAt The effective date of the portfolio
   * @property {date} [asAt] Optional. The AsAt date of the portfolio
   */
  constructor() {
  }

  /**
   * Defines the metadata of PortfolioReconciliationRequest
   *
   * @returns {object} metadata of PortfolioReconciliationRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PortfolioReconciliationRequest',
      type: {
        name: 'Composite',
        className: 'PortfolioReconciliationRequest',
        modelProperties: {
          portfolioId: {
            required: true,
            serializedName: 'portfolioId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          effectiveAt: {
            required: true,
            serializedName: 'effectiveAt',
            type: {
              name: 'DateTime'
            }
          },
          asAt: {
            required: false,
            serializedName: 'asAt',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = PortfolioReconciliationRequest;
