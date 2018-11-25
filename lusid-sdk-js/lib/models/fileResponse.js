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
 * Allows a file (represented as a stream) to be returned from an Api call
 *
 */
class FileResponse {
  /**
   * Create a FileResponse.
   * @property {object} [fileStream]
   * @property {boolean} [fileStream.canRead]
   * @property {boolean} [fileStream.canSeek]
   * @property {boolean} [fileStream.canTimeout]
   * @property {boolean} [fileStream.canWrite]
   * @property {number} [fileStream.length]
   * @property {number} [fileStream.position]
   * @property {number} [fileStream.readTimeout]
   * @property {number} [fileStream.writeTimeout]
   * @property {string} [contentType]
   * @property {string} [downloadedFilename]
   */
  constructor() {
  }

  /**
   * Defines the metadata of FileResponse
   *
   * @returns {object} metadata of FileResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FileResponse',
      type: {
        name: 'Composite',
        className: 'FileResponse',
        modelProperties: {
          fileStream: {
            required: false,
            readOnly: true,
            serializedName: 'fileStream',
            type: {
              name: 'Composite',
              className: 'Stream'
            }
          },
          contentType: {
            required: false,
            readOnly: true,
            serializedName: 'contentType',
            type: {
              name: 'String'
            }
          },
          downloadedFilename: {
            required: false,
            readOnly: true,
            serializedName: 'downloadedFilename',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FileResponse;
