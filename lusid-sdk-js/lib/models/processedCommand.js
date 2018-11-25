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
 * Class representing a ProcessedCommand.
 */
class ProcessedCommand {
  /**
   * Create a ProcessedCommand.
   * @property {string} [description]
   * @property {string} [path]
   * @property {object} [userId] The user that issued the command.
   * @property {string} [userId.id]
   * @property {object} [processedTime] The as at time of the events published
   * by the processing of
   * this command.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ProcessedCommand
   *
   * @returns {object} metadata of ProcessedCommand
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProcessedCommand',
      type: {
        name: 'Composite',
        className: 'ProcessedCommand',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          path: {
            required: false,
            serializedName: 'path',
            type: {
              name: 'String'
            }
          },
          userId: {
            required: false,
            serializedName: 'userId',
            type: {
              name: 'Composite',
              className: 'User'
            }
          },
          processedTime: {
            required: false,
            serializedName: 'processedTime',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = ProcessedCommand;
