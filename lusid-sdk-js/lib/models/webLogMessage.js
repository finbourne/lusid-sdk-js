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
 * A log message structured for provision by a web project
 *
 */
class WebLogMessage {
  /**
   * Create a WebLogMessage.
   * @member {string} [version] The semantic version of the remote application
   * submitting the log
   * @member {string} [url] The url of the resource from which the message
   * originated
   * @member {string} [message] The body of the message
   * @member {string} [context] Context as to the occurance of the message
   * @member {string} [severity] The severity of the message. Possible values
   * include: 'Warn', 'Error'
   * @member {string} [stacktrace] Any stacktrace that may be relavent
   * @member {string} [browser] Any browser/user-agent/os related context
   */
  constructor() {
  }

  /**
   * Defines the metadata of WebLogMessage
   *
   * @returns {object} metadata of WebLogMessage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WebLogMessage',
      type: {
        name: 'Composite',
        className: 'WebLogMessage',
        modelProperties: {
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          context: {
            required: false,
            serializedName: 'context',
            type: {
              name: 'String'
            }
          },
          severity: {
            required: false,
            serializedName: 'severity',
            type: {
              name: 'String'
            }
          },
          stacktrace: {
            required: false,
            serializedName: 'stacktrace',
            type: {
              name: 'String'
            }
          },
          browser: {
            required: false,
            serializedName: 'browser',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WebLogMessage;
