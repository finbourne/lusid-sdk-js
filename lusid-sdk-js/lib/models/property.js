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
 * This is intended to be the external facing property specification data type.
 *
 */
class Property {
  /**
   * Create a Property.
   * @member {string} key The property key made up of the PropertyDomain, scope
   * and name delimited with a '/'
   * e.g. trade/myscope/myproperty
   * @member {object} value
   * @member {date} [effectiveDate] Date for which the property is effective
   * from
   * @member {number} [version]
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
          effectiveDate: {
            required: false,
            serializedName: 'effectiveDate',
            type: {
              name: 'DateTime'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Property;
