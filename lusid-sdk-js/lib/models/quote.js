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
 * Class representing a Quote.
 */
class Quote {
  /**
   * Create a Quote.
   * @member {string} id
   * @member {object} metricValue
   * @member {number} [metricValue.value]
   * @member {string} [metricValue.unit]
   * @member {object} [version]
   * @member {date} [version.effectiveFrom]
   * @member {date} [version.asAtDate]
   * @member {string} [version.href]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Quote
   *
   * @returns {object} metadata of Quote
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Quote',
      type: {
        name: 'Composite',
        className: 'Quote',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          metricValue: {
            required: true,
            serializedName: 'metricValue',
            type: {
              name: 'Composite',
              className: 'MetricValue'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'Composite',
              className: 'Version'
            }
          }
        }
      }
    };
  }
}

module.exports = Quote;
