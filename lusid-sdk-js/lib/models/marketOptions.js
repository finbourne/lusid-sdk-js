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
 * The set of options that control miscellaneous and default market resolution
 * behaviour.
 * These are aimed at a 'crude' level of control for those who do not wish to
 * fine tune the way that data is resolved.
 * For clients who wish to simply match instruments to prices this is quite
 * possibly sufficient. For those wishing to control market data sources
 * according to requirements based on accuracy or timeliness it is not. In more
 * advanced cases the options should largely be ignored and rules specified
 * per source. Be aware that where no specified rule matches the final fallback
 * is on to the logic implied here.
 *
 */
class MarketOptions {
  /**
   * Create a MarketOptions.
   * @property {string} [defaultSupplier] The default supplier of data. This
   * controls which 'dialect' is used to find particular market data. e.g. one
   * supplier might address data by RIC, another by PermId. Possible values
   * include: 'DataScope', 'Lusid'
   * @property {string} [defaultInstrumentCodeType] when instrument quotes are
   * searched for, what identifier should be used by default. Possible values
   * include: 'LusidInstrumentId', 'Figi', 'RIC', 'QuotePermId', 'Isin',
   * 'CurrencyPair'
   * @property {string} [defaultScope] for default rules, which scope should
   * data be searched for in
   */
  constructor() {
  }

  /**
   * Defines the metadata of MarketOptions
   *
   * @returns {object} metadata of MarketOptions
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MarketOptions',
      type: {
        name: 'Composite',
        className: 'MarketOptions',
        modelProperties: {
          defaultSupplier: {
            required: false,
            serializedName: 'defaultSupplier',
            type: {
              name: 'String'
            }
          },
          defaultInstrumentCodeType: {
            required: false,
            serializedName: 'defaultInstrumentCodeType',
            type: {
              name: 'String'
            }
          },
          defaultScope: {
            required: false,
            serializedName: 'defaultScope',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MarketOptions;
