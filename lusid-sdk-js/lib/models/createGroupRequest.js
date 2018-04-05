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

const models = require('./index');

/**
 * Class representing a CreateGroupRequest.
 */
class CreateGroupRequest {
  /**
   * Create a CreateGroupRequest.
   * @member {string} id
   * @member {array} [values]
   * @member {array} [subGroups]
   * @member {string} name
   * @member {string} [description]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateGroupRequest
   *
   * @returns {object} metadata of CreateGroupRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateGroupRequest',
      type: {
        name: 'Composite',
        className: 'CreateGroupRequest',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          values: {
            required: false,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ResourceIdElementType',
                  type: {
                    name: 'Composite',
                    className: 'ResourceId'
                  }
              }
            }
          },
          subGroups: {
            required: false,
            serializedName: 'subGroups',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ResourceIdElementType',
                  type: {
                    name: 'Composite',
                    className: 'ResourceId'
                  }
              }
            }
          },
          name: {
            required: true,
            serializedName: 'name',
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
          }
        }
      }
    };
  }
}

module.exports = CreateGroupRequest;
