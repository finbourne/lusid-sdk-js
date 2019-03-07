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
 * Market context node. This defines how LUSID processes parts of a request
 * that require resolution of market data such as instrument prices or
 * Fx rates. It controls where the data is loaded from and which sources take
 * precedence.
 *
 */
class MarketContext {
  /**
   * Create a MarketContext.
   * @property {array} [marketRules] The set of rules that define how to
   * resolve particular use cases. These can be relatively general or specific
   * in nature.
   * Nominally any number are possible and will be processed in order where
   * applicable. However, there is evidently a potential
   * for increased computational cost where many rules must be applied to
   * resolve data. Ensuring that portfolios are structured in
   * such a way as to reduce the number of rules required is therefore
   * sensible.
   * @property {object} [suppliers] It is possible to control which supplier is
   * used for a given asset class.
   * @property {string} [suppliers.commodity] Possible values include:
   * 'DataScope', 'Lusid'
   * @property {string} [suppliers.credit] Possible values include:
   * 'DataScope', 'Lusid'
   * @property {string} [suppliers.equity] Possible values include:
   * 'DataScope', 'Lusid'
   * @property {string} [suppliers.fx] Possible values include: 'DataScope',
   * 'Lusid'
   * @property {string} [suppliers.rates] Possible values include: 'DataScope',
   * 'Lusid'
   * @property {object} [options] Miscellaneous options around market loading.
   * In the simplest usage case, this is just a default supplier and instrument
   * resolution code.
   * @property {string} [options.defaultSupplier] The default supplier of data.
   * This controls which 'dialect' is used to find particular market data. e.g.
   * one supplier might address data by RIC, another by PermId. Possible values
   * include: 'DataScope', 'Lusid'
   * @property {string} [options.defaultInstrumentCodeType] when instrument
   * quotes are searched for, what identifier should be used by default.
   * Possible values include: 'LusidInstrumentId', 'Figi', 'RIC',
   * 'QuotePermId', 'Isin', 'CurrencyPair'
   * @property {string} [options.defaultScope] for default rules, which scope
   * should data be searched for in
   */
  constructor() {
  }

  /**
   * Defines the metadata of MarketContext
   *
   * @returns {object} metadata of MarketContext
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MarketContext',
      type: {
        name: 'Composite',
        className: 'MarketContext',
        modelProperties: {
          marketRules: {
            required: false,
            serializedName: 'marketRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MarketDataKeyRuleElementType',
                  type: {
                    name: 'Composite',
                    className: 'MarketDataKeyRule'
                  }
              }
            }
          },
          suppliers: {
            required: false,
            serializedName: 'suppliers',
            type: {
              name: 'Composite',
              className: 'MarketContextSuppliers'
            }
          },
          options: {
            required: false,
            serializedName: 'options',
            type: {
              name: 'Composite',
              className: 'MarketOptions'
            }
          }
        }
      }
    };
  }
}

module.exports = MarketContext;
