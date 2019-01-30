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
 * Class representing a Instrument.
 */
class Instrument {
  /**
   * Create a Instrument.
   * @property {string} [href]
   * @property {string} [lusidInstrumentId] The lusid instrument id (LUID) of
   * the instrument
   * @property {object} [version] The version of the instrument
   * @property {date} [version.effectiveFrom]
   * @property {date} [version.asAtDate]
   * @property {string} [name] The name of the instrument
   * @property {object} [identifiers] The set of identifiers that can be used
   * to uniquely identify the instrument
   * @property {array} [properties] Any requested instrument properties. If no
   * property can be found for the instrument, then
   * a value of 'Unknown' will be returned
   * @property {object} [lookthroughPortfolio] The lookthrough portfolio of the
   * instrument (if any).
   * @property {string} [lookthroughPortfolio.scope]
   * @property {string} [lookthroughPortfolio.code]
   * @property {object} [instrumentDefinition] The economic definition of the
   * instrument for an OTC or instrument where an expanded definition exists.
   * @property {string} [instrumentDefinition.instrumentFormat]
   * @property {string} [instrumentDefinition.content]
   * @property {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Instrument
   *
   * @returns {object} metadata of Instrument
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Instrument',
      type: {
        name: 'Composite',
        className: 'Instrument',
        modelProperties: {
          href: {
            required: false,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          },
          lusidInstrumentId: {
            required: false,
            serializedName: 'lusidInstrumentId',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'Composite',
              className: 'Version'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          identifiers: {
            required: false,
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
            serializedName: 'properties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PropertyElementType',
                  type: {
                    name: 'Composite',
                    className: 'Property'
                  }
              }
            }
          },
          lookthroughPortfolio: {
            required: false,
            serializedName: 'lookthroughPortfolio',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          instrumentDefinition: {
            required: false,
            serializedName: 'instrumentDefinition',
            type: {
              name: 'Composite',
              className: 'InstrumentEconomicDefinition'
            }
          },
          links: {
            required: false,
            serializedName: 'links',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LinkElementType',
                  type: {
                    name: 'Composite',
                    className: 'Link'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Instrument;
