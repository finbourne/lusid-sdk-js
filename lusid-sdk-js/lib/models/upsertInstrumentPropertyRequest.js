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
 * Class representing a UpsertInstrumentPropertyRequest.
 */
class UpsertInstrumentPropertyRequest {
  /**
   * Create a UpsertInstrumentPropertyRequest.
   * @property {string} [instrumentPropertyKey] The property key of the
   * property, e.g, 'Instrument/default/Isin'
   * @property {object} [property] The value of the property, which must not be
   * empty or null. e.g, 'US0378331005'
   * @property {string} [property.labelValue]
   * @property {object} [property.metricValue]
   * @property {number} [property.metricValue.value]
   * @property {string} [property.metricValue.unit]
   * @property {date} [property.effectiveFrom] Date for which the property is
   * effective from
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpsertInstrumentPropertyRequest
   *
   * @returns {object} metadata of UpsertInstrumentPropertyRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpsertInstrumentPropertyRequest',
      type: {
        name: 'Composite',
        className: 'UpsertInstrumentPropertyRequest',
        modelProperties: {
          instrumentPropertyKey: {
            required: false,
            serializedName: 'instrumentPropertyKey',
            type: {
              name: 'String'
            }
          },
          property: {
            required: false,
            serializedName: 'property',
            type: {
              name: 'Composite',
              className: 'PropertyValue'
            }
          }
        }
      }
    };
  }
}

module.exports = UpsertInstrumentPropertyRequest;
