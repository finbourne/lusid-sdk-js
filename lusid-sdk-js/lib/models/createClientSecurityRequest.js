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
 * Class representing a CreateClientSecurityRequest.
 */
class CreateClientSecurityRequest {
  /**
   * Create a CreateClientSecurityRequest.
   * @member {string} clientSecurityId
   * @member {string} name
   * @member {array} properties
   * @member {object} [lookThroughPortfolioId]
   * @member {string} [lookThroughPortfolioId.scope]
   * @member {string} [lookThroughPortfolioId.code]
   * @member {object} [instrument] There could be multiple underlying
   * instrument definitions (same
   * instrument but different format), but for now store one.
   * @member {string} [instrument.content]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateClientSecurityRequest
   *
   * @returns {object} metadata of CreateClientSecurityRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateClientSecurityRequest',
      type: {
        name: 'Composite',
        className: 'CreateClientSecurityRequest',
        modelProperties: {
          clientSecurityId: {
            required: true,
            serializedName: 'clientSecurityId',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: true,
            serializedName: 'properties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PropertyDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'PropertyDto'
                  }
              }
            }
          },
          lookThroughPortfolioId: {
            required: false,
            serializedName: 'lookThroughPortfolioId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          instrument: {
            required: false,
            serializedName: 'instrument',
            type: {
              name: 'Composite',
              className: 'InstrumentDefinitionDto'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateClientSecurityRequest;
