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
 * Class representing a Link.
 */
class Link {
  /**
   * Create a Link.
   * @member {string} relation Possible values include: 'Root', 'Properties',
   * 'Transactions', 'Details', 'Constituents', 'Holdings', 'Commands',
   * 'HoldingsAdjustments', 'Parent', 'PropertySchema', 'EntitySchema', 'Quote'
   * @member {string} href
   * @member {string} [description]
   * @member {string} method Possible values include: 'POST', 'GET', 'PATCH',
   * 'DELETE'
   */
  constructor() {
  }

  /**
   * Defines the metadata of Link
   *
   * @returns {object} metadata of Link
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Link',
      type: {
        name: 'Composite',
        className: 'Link',
        modelProperties: {
          relation: {
            required: true,
            serializedName: 'relation',
            type: {
              name: 'String'
            }
          },
          href: {
            required: true,
            serializedName: 'href',
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
          method: {
            required: true,
            serializedName: 'method',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Link;
