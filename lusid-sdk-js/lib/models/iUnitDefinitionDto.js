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
 * Class representing a IUnitDefinitionDto.
 */
class IUnitDefinitionDto {
  /**
   * Create a IUnitDefinitionDto.
   * @member {string} [schema] Possible values include: 'NoUnits', 'Basic',
   * 'Iso4217Currency'
   * @member {string} [code]
   * @member {string} [displayName]
   * @member {string} [description]
   */
  constructor() {
  }

  /**
   * Defines the metadata of IUnitDefinitionDto
   *
   * @returns {object} metadata of IUnitDefinitionDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IUnitDefinitionDto',
      type: {
        name: 'Composite',
        className: 'IUnitDefinitionDto',
        modelProperties: {
          schema: {
            required: false,
            readOnly: true,
            serializedName: 'schema',
            type: {
              name: 'String'
            }
          },
          code: {
            required: false,
            readOnly: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            readOnly: true,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IUnitDefinitionDto;
