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
 * Class representing a CreateClientInstrumentRequest.
 */
class CreateClientInstrumentRequest {
  /**
   * Create a CreateClientInstrumentRequest.
   * @member {string} clientInstrumentId
   * @member {string} name
   * @member {object} [lookThroughPortfolioId]
   * @member {string} [lookThroughPortfolioId.scope]
   * @member {string} [lookThroughPortfolioId.code]
   * @member {object} [instrument] Expanded instrument definition - in the case
   * of OTC instruments
   * this contains the definition of the non-exchange traded instrument.
   * The format for this can be client-defined, but in order to transparently
   * use
   * vendor libraries it must conform to a format that LUSID understands.
   * @member {string} [instrument.instrumentFormat]
   * @member {string} [instrument.content]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateClientInstrumentRequest
   *
   * @returns {object} metadata of CreateClientInstrumentRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateClientInstrumentRequest',
      type: {
        name: 'Composite',
        className: 'CreateClientInstrumentRequest',
        modelProperties: {
          clientInstrumentId: {
            required: true,
            serializedName: 'clientInstrumentId',
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
              className: 'InstrumentDefinition'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateClientInstrumentRequest;
