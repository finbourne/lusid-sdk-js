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
 * Class representing a Property.
 */
class Property {
  /**
   * Create a Property.
   * @property {string} key
   * @property {object} value
   * @property {string} [unit]
   * @property {date} [effectiveFrom] Date for which the property is effective
   * from
   */
  constructor() {
  }

  /**
   * Defines the metadata of Property
   *
   * @returns {object} metadata of Property
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Property',
      type: {
        name: 'Composite',
        className: 'Property',
        modelProperties: {
          key: {
            required: true,
            serializedName: 'key',
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Object'
            }
          },
          unit: {
            required: false,
            serializedName: 'unit',
            type: {
              name: 'String'
            }
          },
          effectiveFrom: {
            required: false,
            serializedName: 'effectiveFrom',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = Property;
