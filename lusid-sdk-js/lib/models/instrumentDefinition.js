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
 * Class representing a InstrumentDefinition.
 */
class InstrumentDefinition {
  /**
   * Create a InstrumentDefinition.
   * @property {string} name Required. The name of the instrument
   * @property {object} identifiers Required. A set of identifiers that
   * uniquely identify this instrument (e.g FIGI, RIC)
   * @property {array} [properties] Optional. A collection of properties to
   * upsert on the instrument.
   * @property {object} [lookThroughPortfolioId] Optional. The identifier of
   * the portfolio that represents this instrument
   * @property {string} [lookThroughPortfolioId.scope]
   * @property {string} [lookThroughPortfolioId.code]
   * @property {object} [definition] Expanded instrument definition - in the
   * case of OTC instruments
   * this contains the definition of the non-exchange traded instrument.
   * The format for this can be client-defined, but in order to transparently
   * use
   * vendor libraries it must conform to a format that LUSID understands.
   * @property {string} [definition.instrumentFormat]
   * @property {string} [definition.content]
   */
  constructor() {
  }

  /**
   * Defines the metadata of InstrumentDefinition
   *
   * @returns {object} metadata of InstrumentDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InstrumentDefinition',
      type: {
        name: 'Composite',
        className: 'InstrumentDefinition',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          identifiers: {
            required: true,
            serializedName: 'identifiers',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          properties: {
            required: false,
            readOnly: true,
            serializedName: 'properties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'InstrumentPropertyElementType',
                  type: {
                    name: 'Composite',
                    className: 'InstrumentProperty'
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
          definition: {
            required: false,
            serializedName: 'definition',
            type: {
              name: 'Composite',
              className: 'InstrumentEconomicDefinition'
            }
          }
        }
      }
    };
  }
}

module.exports = InstrumentDefinition;
