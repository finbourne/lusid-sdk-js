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
 * Class representing a Stream.
 */
class Stream {
  /**
   * Create a Stream.
   * @property {boolean} [canRead]
   * @property {boolean} [canSeek]
   * @property {boolean} [canTimeout]
   * @property {boolean} [canWrite]
   * @property {number} [length]
   * @property {number} [position]
   * @property {number} [readTimeout]
   * @property {number} [writeTimeout]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Stream
   *
   * @returns {object} metadata of Stream
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Stream',
      type: {
        name: 'Composite',
        className: 'Stream',
        modelProperties: {
          canRead: {
            required: false,
            readOnly: true,
            serializedName: 'canRead',
            type: {
              name: 'Boolean'
            }
          },
          canSeek: {
            required: false,
            readOnly: true,
            serializedName: 'canSeek',
            type: {
              name: 'Boolean'
            }
          },
          canTimeout: {
            required: false,
            readOnly: true,
            serializedName: 'canTimeout',
            type: {
              name: 'Boolean'
            }
          },
          canWrite: {
            required: false,
            readOnly: true,
            serializedName: 'canWrite',
            type: {
              name: 'Boolean'
            }
          },
          length: {
            required: false,
            readOnly: true,
            serializedName: 'length',
            type: {
              name: 'Number'
            }
          },
          position: {
            required: false,
            serializedName: 'position',
            type: {
              name: 'Number'
            }
          },
          readTimeout: {
            required: false,
            serializedName: 'readTimeout',
            type: {
              name: 'Number'
            }
          },
          writeTimeout: {
            required: false,
            serializedName: 'writeTimeout',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Stream;
