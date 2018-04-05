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
 * Class representing a PersonalisationDto.
 */
class PersonalisationDto {
  /**
   * Create a PersonalisationDto.
   * @member {string} [scope] Possible values include: 'User', 'Group',
   * 'Default', 'All'
   * @member {string} [scopeValue]
   * @member {string} [settingKey]
   * @member {string} [settingValue]
   * @member {string} [dataType]
   * @member {string} [href]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PersonalisationDto
   *
   * @returns {object} metadata of PersonalisationDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PersonalisationDto',
      type: {
        name: 'Composite',
        className: 'PersonalisationDto',
        modelProperties: {
          scope: {
            required: false,
            serializedName: 'scope',
            type: {
              name: 'String'
            }
          },
          scopeValue: {
            required: false,
            serializedName: 'scopeValue',
            type: {
              name: 'String'
            }
          },
          settingKey: {
            required: false,
            serializedName: 'settingKey',
            type: {
              name: 'String'
            }
          },
          settingValue: {
            required: false,
            serializedName: 'settingValue',
            type: {
              name: 'String'
            }
          },
          dataType: {
            required: false,
            serializedName: 'dataType',
            type: {
              name: 'String'
            }
          },
          href: {
            required: false,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PersonalisationDto;
