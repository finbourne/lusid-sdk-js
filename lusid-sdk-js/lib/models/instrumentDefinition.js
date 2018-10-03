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
 * Expanded instrument definition - in the case of OTC instruments
 * this contains the definition of the non-exchange traded instrument.
 * The format for this can be client-defined, but in order to transparently use
 * vendor libraries it must conform to a format that LUSID understands.
 *
 */
class InstrumentDefinition {
  /**
   * Create a InstrumentDefinition.
   * @member {string} instrumentFormat
   * @member {string} content
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
          instrumentFormat: {
            required: true,
            serializedName: 'instrumentFormat',
            type: {
              name: 'String'
            }
          },
          content: {
            required: true,
            serializedName: 'content',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = InstrumentDefinition;
