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

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const ServiceClient = msRest.ServiceClient;
const WebResource = msRest.WebResource;

const models = require('./models');


/**
 * @summary List analytic stores
 *
 * List all defined analytic stores
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfAnalyticStoreKey} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listAnalyticStores(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/analytics';
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfAnalyticStoreKey']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Create analytic store
 *
 * Create a new analytic store for the specified scope and date
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] A populated analytic store definition
 *
 * @param {string} [options.request.scope]
 *
 * @param {date} [options.request.date]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AnalyticStore} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createAnalyticStore(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/analytics';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['CreateAnalyticStoreRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['AnalyticStore']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get analytic store
 *
 * Get the meta data associated with a specified scope and date combination
 * (analytic store)
 *
 * @param {string} scope The analytics data scope
 *
 * @param {number} year The year component of the date for the data in the
 * scope
 *
 * @param {number} month The month component of the date for the data in the
 * scope
 *
 * @param {number} day The day component of the date for the data in the scope
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AnalyticStore} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getAnalyticStore(scope, year, month, day, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (year === null || year === undefined || typeof year !== 'number') {
      throw new Error('year cannot be null or undefined and it must be of type number.');
    }
    if (month === null || month === undefined || typeof month !== 'number') {
      throw new Error('month cannot be null or undefined and it must be of type number.');
    }
    if (day === null || day === undefined || typeof day !== 'number') {
      throw new Error('day cannot be null or undefined and it must be of type number.');
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/analytics/{scope}/{year}/{month}/{day}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{year}', encodeURIComponent(year.toString()));
  requestUrl = requestUrl.replace('{month}', encodeURIComponent(month.toString()));
  requestUrl = requestUrl.replace('{day}', encodeURIComponent(day.toString()));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['AnalyticStore']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Delete analytic store
 *
 * Delete stored analytic data in the specified scope for the specified date
 *
 * @param {string} scope The analytics data scope
 *
 * @param {number} year The year component of the date
 *
 * @param {number} month The month component of the date
 *
 * @param {number} day The day component of the date
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteAnalyticStore(scope, year, month, day, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (year === null || year === undefined || typeof year !== 'number') {
      throw new Error('year cannot be null or undefined and it must be of type number.');
    }
    if (month === null || month === undefined || typeof month !== 'number') {
      throw new Error('month cannot be null or undefined and it must be of type number.');
    }
    if (day === null || day === undefined || typeof day !== 'number') {
      throw new Error('day cannot be null or undefined and it must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/analytics/{scope}/{year}/{month}/{day}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{year}', encodeURIComponent(year.toString()));
  requestUrl = requestUrl.replace('{month}', encodeURIComponent(month.toString()));
  requestUrl = requestUrl.replace('{day}', encodeURIComponent(day.toString()));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Set analytic data
 *
 * Store the complete set of analytics for an existing analytic store for the
 * specified scope and date
 *
 * @param {string} scope The scope of the data being stored
 *
 * @param {number} year The year component of the date for the data
 *
 * @param {number} month The month component of the date for the data
 *
 * @param {number} day The day component of the date for the data
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.data] The analytic data being inserted
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AnalyticStore} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _setAnalytics(scope, year, month, day, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let data = (options && options.data !== undefined) ? options.data : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (year === null || year === undefined || typeof year !== 'number') {
      throw new Error('year cannot be null or undefined and it must be of type number.');
    }
    if (month === null || month === undefined || typeof month !== 'number') {
      throw new Error('month cannot be null or undefined and it must be of type number.');
    }
    if (day === null || day === undefined || typeof day !== 'number') {
      throw new Error('day cannot be null or undefined and it must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/analytics/{scope}/{year}/{month}/{day}/prices';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{year}', encodeURIComponent(year.toString()));
  requestUrl = requestUrl.replace('{month}', encodeURIComponent(month.toString()));
  requestUrl = requestUrl.replace('{day}', encodeURIComponent(day.toString()));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (data !== null && data !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'data',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'InstrumentAnalyticElementType',
              type: {
                name: 'Composite',
                className: 'InstrumentAnalytic'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, data, 'data');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(data, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['AnalyticStore']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get corporate actions
 *
 * Gets corporate actions from a specific corporate action source
 *
 * @param {string} scope The scope of the corporate action source
 *
 * @param {string} code The code of the corporate action source
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.effectiveAt] Optional. The effective date of the data
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfCorporateActionEvent} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getCorporateActions(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/corporateactions/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfCorporateActionEvent']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Upsert corporate actions
 *
 * Attempt to create/update one or more corporate action in a specified
 * corporate action source. Failed actions will be identified in the body of
 * the response.
 *
 * @param {string} scope The scope of corporate action source
 *
 * @param {string} code The code of the corporate action source
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.actions] The corporate action definitions
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link UpsertCorporateActionsResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _batchUpsertCorporateActions(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let actions = (options && options.actions !== undefined) ? options.actions : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/corporateactions/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (actions !== null && actions !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'actions',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'CreateCorporateActionElementType',
              type: {
                name: 'Composite',
                className: 'CreateCorporateAction'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, actions, 'actions');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(actions, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['UpsertCorporateActionsResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Create data type definition
 *
 * Create a new data type definition
 *
 * Data types cannot be created in either the "default" or "system" scopes.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] The definition of the new data type
 *
 * @param {string} options.request.scope
 *
 * @param {string} options.request.code
 *
 * @param {string} options.request.typeValueRange Possible values include:
 * 'Open', 'Closed'
 *
 * @param {string} options.request.displayName
 *
 * @param {string} options.request.description
 *
 * @param {string} options.request.valueType Possible values include: 'String',
 * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits',
 * 'StringArray', 'CurrencyAndAmount', 'TradePrice', 'UnitCreation',
 * 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
 *
 * @param {array} [options.request.acceptableValues]
 *
 * @param {string} [options.request.unitSchema] Possible values include:
 * 'NoUnits', 'Basic', 'Iso4217Currency'
 *
 * @param {array} [options.request.acceptableUnits]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DataType} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createDataType(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/datatypes';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['CreateDataTypeRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DataType']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary List data types
 *
 * List all data types in a specified scope
 *
 * @param {string} scope The requested scope of the data types
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {boolean} [options.includeDefault] Whether to additionally include
 * those data types in the "default" scope
 *
 * @param {boolean} [options.includeSystem] Whether to additionally include
 * those data types in the "system" scope
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfDataType} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listDataTypes(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let includeDefault = (options && options.includeDefault !== undefined) ? options.includeDefault : undefined;
  let includeSystem = (options && options.includeSystem !== undefined) ? options.includeSystem : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (includeDefault !== null && includeDefault !== undefined && typeof includeDefault !== 'boolean') {
      throw new Error('includeDefault must be of type boolean.');
    }
    if (includeSystem !== null && includeSystem !== undefined && typeof includeSystem !== 'boolean') {
      throw new Error('includeSystem must be of type boolean.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/datatypes/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  let queryParameters = [];
  if (includeDefault !== null && includeDefault !== undefined) {
    queryParameters.push('includeDefault=' + encodeURIComponent(includeDefault.toString()));
  }
  if (includeSystem !== null && includeSystem !== undefined) {
    queryParameters.push('includeSystem=' + encodeURIComponent(includeSystem.toString()));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfDataType']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get data type definition
 *
 * Get the definition of a specified data type
 *
 * @param {string} scope The scope of the data type
 *
 * @param {string} code The code of the data type
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DataType} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getDataType(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/datatypes/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DataType']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Update data type definition
 *
 * Update the definition of the specified existing data type
 *
 * Not all elements within a data type definition are modifiable due to the
 * potential implications for data
 * already stored against the types
 *
 * @param {string} scope The scope of the data type
 *
 * @param {string} code The code of the data type
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] The updated definition of the data type
 *
 * @param {string} options.request.typeValueRange Possible values include:
 * 'Open', 'Closed'
 *
 * @param {string} options.request.displayName
 *
 * @param {string} options.request.description
 *
 * @param {string} options.request.valueType Possible values include: 'String',
 * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits',
 * 'StringArray', 'CurrencyAndAmount', 'TradePrice', 'UnitCreation',
 * 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
 *
 * @param {array} [options.request.acceptableValues]
 *
 * @param {string} [options.request.unitSchema] Possible values include:
 * 'NoUnits', 'Basic', 'Iso4217Currency'
 *
 * @param {array} [options.request.acceptableUnits]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DataType} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _updateDataType(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/datatypes/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['UpdateDataTypeRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DataType']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get units from data type
 *
 * Get the definitions of the specified units associated bound to a specific
 * data type
 *
 * @param {string} scope The scope of the data type
 *
 * @param {string} code The code of the data type
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.units] One or more unit identifiers for which the
 * definition is being requested
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link IUnitDefinition} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getUnitsFromDataType(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let units = (options && options.units !== undefined) ? options.units : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (Array.isArray(units)) {
      for (let i = 0; i < units.length; i++) {
        if (units[i] !== null && units[i] !== undefined && typeof units[i].valueOf() !== 'string') {
          throw new Error('units[i] must be of type string.');
        }
      }
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/datatypes/{scope}/{code}/units';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (units !== null && units !== undefined) {
    if (units.length == 0) {
      queryParameters.push('units=' + encodeURIComponent(''));
    } else {
      for (let item of units) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('units=' + encodeURIComponent('' + item));
      }
    }
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['IUnitDefinition']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Create derived transaction portfolio
 *
 * Creates a transaction portfolio that derives from an existing transaction
 * portfolio. In a derived portfolio, parts of the portfolio can either be
 * specific to this portfolio, or can be inherited from a "parent". Different
 * parts of the portfolio (e.g. transactions or properties) are combined in
 * different ways. The portfolio details are either overridden in entirety, or
 * not at all. The same is true for properties. Transactions on a derived
 * portfolio are merged with its parent portfolio's transactions. If the parent
 * portfolio is itself a derived portfolio, transactions from that parent are
 * also merged (and that parent's portfolio's, if it is also a derived
 * portfolio, and so on).
 *
 * @param {string} scope The scope into which to create the new derived
 * portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.portfolio] The root object of the new derived
 * portfolio, containing a populated reference portfolio id and reference scope
 *
 * @param {string} options.portfolio.displayName
 *
 * @param {string} [options.portfolio.description]
 *
 * @param {string} [options.portfolio.code]
 *
 * @param {object} [options.portfolio.parentPortfolioId]
 *
 * @param {date} [options.portfolio.created]
 *
 * @param {object} [options.portfolio.corporateActionSourceId]
 *
 * @param {string} [options.portfolio.corporateActionSourceId.scope]
 *
 * @param {string} [options.portfolio.corporateActionSourceId.code]
 *
 * @param {string} [options.portfolio.accountingMethod] Possible values
 * include: 'Default', 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut',
 * 'HighestCostFirst', 'LowestCostFirst'
 *
 * @param {array} [options.portfolio.subHoldingKeys]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link Portfolio} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createDerivedPortfolio(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let portfolio = (options && options.portfolio !== undefined) ? options.portfolio : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/derivedtransactionportfolios/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (portfolio !== null && portfolio !== undefined) {
      let requestModelMapper = new client.models['CreateDerivedTransactionPortfolioRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, portfolio, 'portfolio');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(portfolio, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['Portfolio']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Delete portfolio details
 *
 * Deletes the portfolio details for the specified derived transaction
 * portfolio
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.effectiveAt] The effective date of the change
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteDerivedPortfolioDetails(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/derivedtransactionportfolios/{scope}/{code}/details';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Create instrument
 *
 * Attempt to create one or more "client" instruments. Each instrument is keyed
 * by some unique key. This key is unimportant, and serves only as a method to
 * identify created instruments in the response.
 *
 * The response will return both the collection of successfully created
 * instruments, as well as those that were rejected and why their creation
 * failed. They will be keyed against the key supplied in the
 * request.
 *
 * It is important to always check the 'Failed' set for any unsuccessful
 * results.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.definitions] The client instrument definitions
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link TryAddClientInstruments} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _batchAddClientInstruments(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let definitions = (options && options.definitions !== undefined) ? options.definitions : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/instruments';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (definitions !== null && definitions !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'definitions',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'CreateClientInstrumentRequestElementType',
              type: {
                name: 'Composite',
                className: 'CreateClientInstrumentRequest'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, definitions, 'definitions');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(definitions, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['TryAddClientInstruments']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Delete instrument
 *
 * Attempt to delete one or more "client" instruments.
 *
 * The response will include those instruments that could not be deleted (as
 * well as any available details).
 *
 * It is important to always check the 'Failed' set for any unsuccessful
 * results.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.uids] The unique identifiers of the instruments to
 * delete
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeleteClientInstrumentsResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _batchDeleteClientInstruments(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let uids = (options && options.uids !== undefined) ? options.uids : undefined;
  // Validate
  try {
    if (Array.isArray(uids)) {
      for (let i = 0; i < uids.length; i++) {
        if (uids[i] !== null && uids[i] !== undefined && typeof uids[i].valueOf() !== 'string') {
          throw new Error('uids[i] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/instruments';
  let queryParameters = [];
  if (uids !== null && uids !== undefined) {
    if (uids.length == 0) {
      queryParameters.push('uids=' + encodeURIComponent(''));
    } else {
      for (let item of uids) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('uids=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeleteClientInstrumentsResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get instrument definition
 *
 * Get an individual instrument by the one of its unique instrument
 * identifiers. Optionally, it is possible to decorate each instrument with
 * specified property data.
 *
 * @param {string} uid The uid of the requested instrument
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.instrumentPropertyKeys] Optional. Keys of the
 * properties to be decorated on to the instrument
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link Instrument} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getInstrument(uid, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let instrumentPropertyKeys = (options && options.instrumentPropertyKeys !== undefined) ? options.instrumentPropertyKeys : undefined;
  // Validate
  try {
    if (uid === null || uid === undefined || typeof uid.valueOf() !== 'string') {
      throw new Error('uid cannot be null or undefined and it must be of type string.');
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(instrumentPropertyKeys)) {
      for (let i = 0; i < instrumentPropertyKeys.length; i++) {
        if (instrumentPropertyKeys[i] !== null && instrumentPropertyKeys[i] !== undefined && typeof instrumentPropertyKeys[i].valueOf() !== 'string') {
          throw new Error('instrumentPropertyKeys[i] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/instruments/{uid}';
  requestUrl = requestUrl.replace('{uid}', encodeURIComponent(uid));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (instrumentPropertyKeys !== null && instrumentPropertyKeys !== undefined) {
    if (instrumentPropertyKeys.length == 0) {
      queryParameters.push('instrumentPropertyKeys=' + encodeURIComponent(''));
    } else {
      for (let item of instrumentPropertyKeys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('instrumentPropertyKeys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['Instrument']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Lookup instrument definition
 *
 * Lookup one or more instrument definitions by specifying non-LUSID
 * identifiers. Optionally, it is possible to decorate each instrument with
 * specified property data.
 *
 * The response will return both the collection of found instruments for each
 * identifier, as well as a collection of all identifiers for which no
 * instruments could be found (as well as any available details).
 *
 * It is important to always check the 'Failed' set for any unsuccessful
 * results.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.codeType] The type of identifiers. Possible values
 * include: 'Undefined', 'LusidInstrumentId', 'ReutersAssetId', 'CINS', 'Isin',
 * 'Sedol', 'Cusip', 'Ticker', 'ClientInternal', 'Figi', 'CompositeFigi',
 * 'ShareClassFigi', 'Wertpapier'
 *
 * @param {array} [options.codes] One or more identifiers of the type specified
 * in the codeType
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.instrumentPropertyKeys] Optional. Keys of the
 * properties to be decorated on to the instrument
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link LookupInstrumentsFromCodesResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _lookupInstrumentsFromCodes(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let codeType = (options && options.codeType !== undefined) ? options.codeType : undefined;
  let codes = (options && options.codes !== undefined) ? options.codes : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let instrumentPropertyKeys = (options && options.instrumentPropertyKeys !== undefined) ? options.instrumentPropertyKeys : undefined;
  // Validate
  try {
    if (codeType !== null && codeType !== undefined && typeof codeType.valueOf() !== 'string') {
      throw new Error('codeType must be of type string.');
    }
    if (Array.isArray(codes)) {
      for (let i = 0; i < codes.length; i++) {
        if (codes[i] !== null && codes[i] !== undefined && typeof codes[i].valueOf() !== 'string') {
          throw new Error('codes[i] must be of type string.');
        }
      }
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(instrumentPropertyKeys)) {
      for (let i1 = 0; i1 < instrumentPropertyKeys.length; i1++) {
        if (instrumentPropertyKeys[i1] !== null && instrumentPropertyKeys[i1] !== undefined && typeof instrumentPropertyKeys[i1].valueOf() !== 'string') {
          throw new Error('instrumentPropertyKeys[i1] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/instruments/$lookup';
  let queryParameters = [];
  if (codeType !== null && codeType !== undefined) {
    queryParameters.push('codeType=' + encodeURIComponent(codeType));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (instrumentPropertyKeys !== null && instrumentPropertyKeys !== undefined) {
    if (instrumentPropertyKeys.length == 0) {
      queryParameters.push('instrumentPropertyKeys=' + encodeURIComponent(''));
    } else {
      for (let item of instrumentPropertyKeys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('instrumentPropertyKeys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (codes !== null && codes !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'codes',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'StringElementType',
              type: {
                name: 'String'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, codes, 'codes');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(codes, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['LookupInstrumentsFromCodesResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Upsert instrument properties
 *
 * Attempt to upsert property data for one or more instruments, properties, and
 * effective dates.
 *
 * The response will include the details of any failures that occurred during
 * data storage.
 *
 * It is important to always check the 'Failed' collection for any unsuccessful
 * results.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.instrumentProperties] The instrument property data
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link UpsertInstrumentPropertiesResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _batchUpsertInstrumentProperties(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let instrumentProperties = (options && options.instrumentProperties !== undefined) ? options.instrumentProperties : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/instruments/$upsertproperties';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (instrumentProperties !== null && instrumentProperties !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'instrumentProperties',
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
      };
      requestModel = client.serialize(requestModelMapper, instrumentProperties, 'instrumentProperties');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(instrumentProperties, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['UpsertInstrumentPropertiesResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get SAML Identity Provider
 *
 * Get the unique identifier for the SAML 2.0 Identity Provider to be used for
 * domain.
 *
 * @param {string} domain The domain that the user will be logging in to
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getSamlIdentityProviderId(domain, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (domain === null || domain === undefined || typeof domain.valueOf() !== 'string') {
      throw new Error('domain cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/login/saml/{domain}';
  requestUrl = requestUrl.replace('{domain}', encodeURIComponent(domain));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get Excel download url
 *
 * Request an authorised url for an Excel client version
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.version] The requested version of the Excel plugin
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getExcelDownloadUrl(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let version = (options && options.version !== undefined) ? options.version : undefined;
  // Validate
  try {
    if (version !== null && version !== undefined && typeof version.valueOf() !== 'string') {
      throw new Error('version must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/metadata/downloads/excel';
  let queryParameters = [];
  if (version !== null && version !== undefined) {
    queryParameters.push('version=' + encodeURIComponent(version));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Download Excel Addin
 *
 * Download the LUSID Excel Addin for Microsoft Excel. Not providing a specific
 * value will return the latest version being returned
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.version] The requested version of the Excel plugin
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getExcelAddin(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let version = (options && options.version !== undefined) ? options.version : undefined;
  // Validate
  try {
    if (version !== null && version !== undefined && typeof version.valueOf() !== 'string') {
      throw new Error('version must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/metadata/downloads/exceladdin';
  let queryParameters = [];
  if (version !== null && version !== undefined) {
    queryParameters.push('version=' + encodeURIComponent(version));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get LUSID versions
 *
 * Get the semantic versions associated with LUSID and its ecosystem
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link VersionSummary} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getLusidVersions(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/metadata/versions';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['VersionSummary']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get personalisation
 *
 * Get a personalisation, recursing to get any referenced if required.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.pattern] The search pattern or specific key
 *
 * @param {string} [options.scope] Optional. The scope level to request for.
 * Possible values include: 'User', 'Group', 'Default', 'All'
 *
 * @param {boolean} [options.recursive] Optional. Whether to recurse into
 * dereference recursive settings
 *
 * @param {boolean} [options.wildcards] Optional. Whether to apply wildcards to
 * the provided pattern and pull back any matching
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfPersonalisation} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPersonalisations(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let pattern = (options && options.pattern !== undefined) ? options.pattern : undefined;
  let scope = (options && options.scope !== undefined) ? options.scope : undefined;
  let recursive = (options && options.recursive !== undefined) ? options.recursive : false;
  let wildcards = (options && options.wildcards !== undefined) ? options.wildcards : false;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (pattern !== null && pattern !== undefined && typeof pattern.valueOf() !== 'string') {
      throw new Error('pattern must be of type string.');
    }
    if (scope !== null && scope !== undefined && typeof scope.valueOf() !== 'string') {
      throw new Error('scope must be of type string.');
    }
    if (recursive !== null && recursive !== undefined && typeof recursive !== 'boolean') {
      throw new Error('recursive must be of type boolean.');
    }
    if (wildcards !== null && wildcards !== undefined && typeof wildcards !== 'boolean') {
      throw new Error('wildcards must be of type boolean.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/personalisations';
  let queryParameters = [];
  if (pattern !== null && pattern !== undefined) {
    queryParameters.push('pattern=' + encodeURIComponent(pattern));
  }
  if (scope !== null && scope !== undefined) {
    queryParameters.push('scope=' + encodeURIComponent(scope));
  }
  if (recursive !== null && recursive !== undefined) {
    queryParameters.push('recursive=' + encodeURIComponent(recursive.toString()));
  }
  if (wildcards !== null && wildcards !== undefined) {
    queryParameters.push('wildcards=' + encodeURIComponent(wildcards.toString()));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfPersonalisation']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Upsert personalisations
 *
 * Upsert one or more personalisations
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.personalisations] The set of personalisations to
 * persist
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link UpsertPersonalisationResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertPersonalisations(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let personalisations = (options && options.personalisations !== undefined) ? options.personalisations : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/personalisations';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (personalisations !== null && personalisations !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'personalisations',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'PersonalisationElementType',
              type: {
                name: 'Composite',
                className: 'Personalisation'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, personalisations, 'personalisations');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(personalisations, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['UpsertPersonalisationResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Delete a personalisation
 *
 * Delete a personalisation at a specific scope (or use scope ALL to purge the
 * setting entirely)
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.key] The key of the setting to be deleted
 *
 * @param {string} [options.scope] The scope to delete at (use ALL to purge the
 * setting entirely). Possible values include: 'User', 'Group', 'Default',
 * 'All'
 *
 * @param {string} [options.group] Optional. If deleting a setting at group
 * level, specify the group here
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePersonalisation(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let key = (options && options.key !== undefined) ? options.key : undefined;
  let scope = (options && options.scope !== undefined) ? options.scope : undefined;
  let group = (options && options.group !== undefined) ? options.group : undefined;
  // Validate
  try {
    if (key !== null && key !== undefined && typeof key.valueOf() !== 'string') {
      throw new Error('key must be of type string.');
    }
    if (scope !== null && scope !== undefined && typeof scope.valueOf() !== 'string') {
      throw new Error('scope must be of type string.');
    }
    if (group !== null && group !== undefined && typeof group.valueOf() !== 'string') {
      throw new Error('group must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/personalisations';
  let queryParameters = [];
  if (key !== null && key !== undefined) {
    queryParameters.push('key=' + encodeURIComponent(key));
  }
  if (scope !== null && scope !== undefined) {
    queryParameters.push('scope=' + encodeURIComponent(scope));
  }
  if (group !== null && group !== undefined) {
    queryParameters.push('group=' + encodeURIComponent(group));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary List groups in scope
 *
 * Lists all portfolio groups in a specified scope
 *
 * @param {string} scope The scope
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfPortfolioGroup} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listPortfolioGroups(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfoliogroups/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfPortfolioGroup']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Create group
 *
 * Create a new portfolio group.
 *
 * @param {string} scope The scope into which the portfolio group will be
 * created
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] The definition of the new portfolio group
 *
 * @param {string} options.request.id
 *
 * @param {array} [options.request.values]
 *
 * @param {array} [options.request.subGroups]
 *
 * @param {string} options.request.displayName
 *
 * @param {string} [options.request.description]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioGroup} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createPortfolioGroup(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfoliogroups/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['CreatePortfolioGroupRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioGroup']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get portfolio group
 *
 * Get the definition of the specified portfolio group
 *
 * @param {string} scope The scope of the portfolio group
 *
 * @param {string} code The code of the portfolio group
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioGroup} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPortfolioGroup(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfoliogroups/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioGroup']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Update group
 *
 * Update the definition of the specified existing portfolio group.
 *
 * Not all elements within a portfolio group definition are modifiable after
 * creation.
 *
 * @param {string} scope The scope of the portfolio group
 *
 * @param {string} code The code of the portfolio group
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] The updated definition of the portfolio
 * group
 *
 * @param {string} options.request.displayName
 *
 * @param {string} [options.request.description]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioGroup} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _updatePortfolioGroup(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfoliogroups/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['UpdatePortfolioGroupRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioGroup']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Delete group
 *
 * Deletes the definition of the specified portfolio group
 *
 * @param {string} scope The scope of the portfolio group
 *
 * @param {string} code The code of the portfolio group
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePortfolioGroup(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfoliogroups/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Aggregate data in a portfolio group
 *
 * Aggregate data sourced from the specified portfolio group
 *
 * @param {string} scope The scope of the portfolio group
 *
 * @param {string} code The code of the portfolio group
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] The request specifying the parameters of
 * the aggregation
 *
 * @param {object} options.request.recipeId
 *
 * @param {string} [options.request.recipeId.scope]
 *
 * @param {string} [options.request.recipeId.code]
 *
 * @param {boolean} [options.request.loadReferencePortfolio]
 *
 * @param {date} [options.request.asAt] The asAt date to use
 *
 * @param {date} options.request.effectiveAt
 *
 * @param {array} options.request.metrics
 *
 * @param {array} [options.request.groupBy]
 *
 * @param {array} [options.request.filters]
 *
 * @param {number} [options.request.limit]
 *
 * @param {string} [options.request.sort]
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ListAggregationResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getAggregationByGroup(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfoliogroups/{scope}/{code}/$aggregate';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['AggregationRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ListAggregationResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Aggregate data in a portfolio group, as nested
 *
 * Obsolete - Aggregate data sourced from the specified portfolio group into a
 * nested structure. Data is nested following the group-by specifications.
 *
 * @param {string} scope The scope of the portfolio group
 *
 * @param {string} code The code of the portfolio group
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] The request specifying the parameters of
 * the aggregation
 *
 * @param {object} options.request.recipeId
 *
 * @param {string} [options.request.recipeId.scope]
 *
 * @param {string} [options.request.recipeId.code]
 *
 * @param {boolean} [options.request.loadReferencePortfolio]
 *
 * @param {date} [options.request.asAt] The asAt date to use
 *
 * @param {date} options.request.effectiveAt
 *
 * @param {array} options.request.metrics
 *
 * @param {array} [options.request.groupBy]
 *
 * @param {array} [options.request.filters]
 *
 * @param {number} [options.request.limit]
 *
 * @param {string} [options.request.sort]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link NestedAggregationResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getNestedAggregationByGroup(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfoliogroups/{scope}/{code}/$aggregatenested';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['AggregationRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['NestedAggregationResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get commands
 *
 * Gets all commands that modified a specific portfolio group
 *
 * @param {string} scope The scope of the portfolio group
 *
 * @param {string} code The code of the portfolio group
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.fromAsAt] Optional. Filters commands by those that
 * were processed at or after this date and time
 *
 * @param {date} [options.toAsAt] Optional. Filters commands by those that were
 * processed at or before this date and time
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfProcessedCommand} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPortfolioGroupCommands(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let fromAsAt = (options && options.fromAsAt !== undefined) ? options.fromAsAt : undefined;
  let toAsAt = (options && options.toAsAt !== undefined) ? options.toAsAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (fromAsAt && !(fromAsAt instanceof Date ||
        (typeof fromAsAt.valueOf() === 'string' && !isNaN(Date.parse(fromAsAt))))) {
          throw new Error('fromAsAt must be of type date.');
        }
    if (toAsAt && !(toAsAt instanceof Date ||
        (typeof toAsAt.valueOf() === 'string' && !isNaN(Date.parse(toAsAt))))) {
          throw new Error('toAsAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfoliogroups/{scope}/{code}/commands';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (fromAsAt !== null && fromAsAt !== undefined) {
    queryParameters.push('fromAsAt=' + encodeURIComponent(client.serializeObject(fromAsAt)));
  }
  if (toAsAt !== null && toAsAt !== undefined) {
    queryParameters.push('toAsAt=' + encodeURIComponent(client.serializeObject(toAsAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfProcessedCommand']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get a full expansion of a portfolio group
 *
 * Lists all portfolios in a group, and all sub groups. Portfolios are
 * decorated with their properties.
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.effectiveAt] Optional. The effective date of the data
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.propertyFilter] Optional. The restricted set of
 * properties that should be returned
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ExpandedGroup} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPortfolioGroupExpansion(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let propertyFilter = (options && options.propertyFilter !== undefined) ? options.propertyFilter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(propertyFilter)) {
      for (let i = 0; i < propertyFilter.length; i++) {
        if (propertyFilter[i] !== null && propertyFilter[i] !== undefined && typeof propertyFilter[i].valueOf() !== 'string') {
          throw new Error('propertyFilter[i] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfoliogroups/{scope}/{code}/expansion';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (propertyFilter !== null && propertyFilter !== undefined) {
    if (propertyFilter.length == 0) {
      queryParameters.push('propertyFilter=' + encodeURIComponent(''));
    } else {
      for (let item of propertyFilter) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('propertyFilter=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ExpandedGroup']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Add portfolio to group
 *
 * Adds a portfolio to a previously defined portfolio group
 *
 * @param {string} scope The scope of the portfolio group to which a portfolio
 * is being added
 *
 * @param {string} code The code of the portfolio group to which a portfolio is
 * being added
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.portfolioId] The id of the portfolio
 *
 * @param {string} [options.portfolioId.scope]
 *
 * @param {string} [options.portfolioId.code]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioGroup} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _addPortfolioToGroup(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let portfolioId = (options && options.portfolioId !== undefined) ? options.portfolioId : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfoliogroups/{scope}/{code}/portfolios';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (portfolioId !== null && portfolioId !== undefined) {
      let requestModelMapper = new client.models['ResourceId']().mapper();
      requestModel = client.serialize(requestModelMapper, portfolioId, 'portfolioId');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(portfolioId, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioGroup']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Remove portfolio from group
 *
 * Removes a portfolio from a portfolio group
 *
 * @param {string} scope The scope of the portfolio group
 *
 * @param {string} code The code of the portfolio group
 *
 * @param {string} portfolioScope The scope of the portfolio being removed
 *
 * @param {string} portfolioCode The code of the portfolio being removed
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioGroup} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePortfolioFromGroup(scope, code, portfolioScope, portfolioCode, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (portfolioScope === null || portfolioScope === undefined || typeof portfolioScope.valueOf() !== 'string') {
      throw new Error('portfolioScope cannot be null or undefined and it must be of type string.');
    }
    if (portfolioCode === null || portfolioCode === undefined || typeof portfolioCode.valueOf() !== 'string') {
      throw new Error('portfolioCode cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfoliogroups/{scope}/{code}/portfolios/{portfolioScope}/{portfolioCode}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{portfolioScope}', encodeURIComponent(portfolioScope));
  requestUrl = requestUrl.replace('{portfolioCode}', encodeURIComponent(portfolioCode));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioGroup']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Add group to group
 *
 * Adds a portfolio group, as a sub-group, to an existing portfolio group
 *
 * @param {string} scope The scope of the portfolio group to which a sub-group
 * is being added
 *
 * @param {string} code The code of the portfolio group to which a sub-group is
 * being added
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.portfolioGroupId] The id of the portfolio group
 * being added as a sub-group
 *
 * @param {string} [options.portfolioGroupId.scope]
 *
 * @param {string} [options.portfolioGroupId.code]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioGroup} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _addSubGroupToGroup(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let portfolioGroupId = (options && options.portfolioGroupId !== undefined) ? options.portfolioGroupId : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfoliogroups/{scope}/{code}/subgroups';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (portfolioGroupId !== null && portfolioGroupId !== undefined) {
      let requestModelMapper = new client.models['ResourceId']().mapper();
      requestModel = client.serialize(requestModelMapper, portfolioGroupId, 'portfolioGroupId');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(portfolioGroupId, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioGroup']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Remove group from group
 *
 * Remove a portfolio group (sub-group) from a parent portfolio group
 *
 * @param {string} scope The scope of the portfolio group
 *
 * @param {string} code The code of the portfolio group
 *
 * @param {string} subgroupScope The scope of the sub-group being removed
 *
 * @param {string} subgroupCode The code of the sub-group being removed
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioGroup} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteSubGroupFromGroup(scope, code, subgroupScope, subgroupCode, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (subgroupScope === null || subgroupScope === undefined || typeof subgroupScope.valueOf() !== 'string') {
      throw new Error('subgroupScope cannot be null or undefined and it must be of type string.');
    }
    if (subgroupCode === null || subgroupCode === undefined || typeof subgroupCode.valueOf() !== 'string') {
      throw new Error('subgroupCode cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfoliogroups/{scope}/{code}/subgroups/{subgroupScope}/{subgroupCode}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{subgroupScope}', encodeURIComponent(subgroupScope));
  requestUrl = requestUrl.replace('{subgroupCode}', encodeURIComponent(subgroupCode));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioGroup']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary List portfolio scopes
 *
 * Lists all scopes that are either currently or have previously had portfolios
 * in them
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {string} [options.filter] Filter to be applied to the list of scopes
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfScope} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listPortfolioScopes(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfolios';
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfScope']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary List portfolios
 *
 * List all the portfolios in the specified scope
 *
 * @param {string} scope The scope
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.effectiveAt] Optional. The effective date of the data
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfPortfolio} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listPortfolios(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfolios/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfPortfolio']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get portfolio definition
 *
 * Retrieves the basic set of information about a portfolio using the specified
 * scope and code.
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.effectiveAt] Optional. The effective date of the data
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link Portfolio} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPortfolio(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfolios/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['Portfolio']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Update portfolio definition
 *
 * Update the definition of a specific portfolio. Note, some parts of a
 * portfolio definition are not available for modification after the initial
 * creation.
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] The updated portfolio definition
 *
 * @param {string} options.request.displayName
 *
 * @param {string} [options.request.description]
 *
 * @param {date} [options.request.created]
 *
 * @param {date} [options.effectiveAt] Optional. The effective date for the
 * change
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link Portfolio} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _updatePortfolio(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfolios/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['UpdatePortfolioRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['Portfolio']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Delete portfolio
 *
 * Delete a portfolio at the specified effectiveAt
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.effectiveAt] Optional. The effective date of the
 * deletion
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePortfolio(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfolios/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Aggregate data in a portfolio
 *
 * Aggregate data sourced from the specified portfolio
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] The request specifying the parameters of
 * the aggregation
 *
 * @param {object} options.request.recipeId
 *
 * @param {string} [options.request.recipeId.scope]
 *
 * @param {string} [options.request.recipeId.code]
 *
 * @param {boolean} [options.request.loadReferencePortfolio]
 *
 * @param {date} [options.request.asAt] The asAt date to use
 *
 * @param {date} options.request.effectiveAt
 *
 * @param {array} options.request.metrics
 *
 * @param {array} [options.request.groupBy]
 *
 * @param {array} [options.request.filters]
 *
 * @param {number} [options.request.limit]
 *
 * @param {string} [options.request.sort]
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ListAggregationResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getAggregationByPortfolio(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfolios/{scope}/{code}/$aggregate';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['AggregationRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ListAggregationResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get commands
 *
 * Gets all commands that modified a specific portfolio
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.fromAsAt] Optional. Filters commands by those that
 * were processed at or after this date and time
 *
 * @param {date} [options.toAsAt] Optional. Filters commands by those that were
 * processed at or before this date and time
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfProcessedCommand} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPortfolioCommands(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let fromAsAt = (options && options.fromAsAt !== undefined) ? options.fromAsAt : undefined;
  let toAsAt = (options && options.toAsAt !== undefined) ? options.toAsAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (fromAsAt && !(fromAsAt instanceof Date ||
        (typeof fromAsAt.valueOf() === 'string' && !isNaN(Date.parse(fromAsAt))))) {
          throw new Error('fromAsAt must be of type date.');
        }
    if (toAsAt && !(toAsAt instanceof Date ||
        (typeof toAsAt.valueOf() === 'string' && !isNaN(Date.parse(toAsAt))))) {
          throw new Error('toAsAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfolios/{scope}/{code}/commands';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (fromAsAt !== null && fromAsAt !== undefined) {
    queryParameters.push('fromAsAt=' + encodeURIComponent(client.serializeObject(fromAsAt)));
  }
  if (toAsAt !== null && toAsAt !== undefined) {
    queryParameters.push('toAsAt=' + encodeURIComponent(client.serializeObject(toAsAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfProcessedCommand']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get portfolio properties
 *
 * Get the properties of a portfolio
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.effectiveAt] Optional. The effective date of the data
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioProperties} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPortfolioProperties(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfolios/{scope}/{code}/properties';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioProperties']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Upsert properties
 *
 * Upsert one or more property values to a portfolio for the specified
 * effectiveAt. All properties must be of the domain Portfolio.
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.portfolioProperties] The property values to be
 * upserted to the portfolio
 *
 * @param {date} [options.effectiveAt] Optional. The effective date of the
 * change
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioProperties} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertPortfolioProperties(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let portfolioProperties = (options && options.portfolioProperties !== undefined) ? options.portfolioProperties : undefined;
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfolios/{scope}/{code}/properties';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (portfolioProperties !== null && portfolioProperties !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'portfolioProperties',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'PropertyValueElementType',
              type: {
                name: 'Composite',
                className: 'PropertyValue'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, portfolioProperties, 'portfolioProperties');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(portfolioProperties, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioProperties']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Delete portfolios
 *
 * Delete one, many or all property values from a portfolio for the specified
 * effectiveAt
 *
 * Specifying no effectiveAt will delete all properties
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code Code for the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.effectiveAt] Optional. The effective date of the
 * deletion
 *
 * @param {array} [options.portfolioPropertyKeys] Optional. The keys of the
 * properties to be deleted. None specified indicates the intention to delete
 * all properties from the portfolio
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePortfolioProperties(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let portfolioPropertyKeys = (options && options.portfolioPropertyKeys !== undefined) ? options.portfolioPropertyKeys : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (Array.isArray(portfolioPropertyKeys)) {
      for (let i = 0; i < portfolioPropertyKeys.length; i++) {
        if (portfolioPropertyKeys[i] !== null && portfolioPropertyKeys[i] !== undefined && typeof portfolioPropertyKeys[i].valueOf() !== 'string') {
          throw new Error('portfolioPropertyKeys[i] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfolios/{scope}/{code}/properties';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (portfolioPropertyKeys !== null && portfolioPropertyKeys !== undefined) {
    if (portfolioPropertyKeys.length == 0) {
      queryParameters.push('portfolioPropertyKeys=' + encodeURIComponent(''));
    } else {
      for (let item of portfolioPropertyKeys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('portfolioPropertyKeys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Reconcile portfolio holdings
 *
 * Reconcile the holdings of two portfolios.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] The specifications of the inputs to the
 * reconciliation
 *
 * @param {object} options.request.left The specification of the left hand side
 * of the portfolio reconciliation
 *
 * @param {object} options.request.right The specification of the right hand
 * side of the portfolio reconciliation
 *
 * @param {object} options.request.right.portfolioId The id of the portfolio to
 * be reconciled
 *
 * @param {string} [options.request.right.portfolioId.scope]
 *
 * @param {string} [options.request.right.portfolioId.code]
 *
 * @param {date} options.request.right.effectiveAt The effective date of the
 * portfolio
 *
 * @param {date} [options.request.right.asAt] Optional. The AsAt date of the
 * portfolio
 *
 * @param {array} options.request.instrumentPropertyKeys Instrument properties
 * to be included with any identified breaks. These properties will be in the
 * effective and AsAt dates of the left portfolio
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfReconciliationBreak} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _reconcileHoldings(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/portfolios/$reconcileholdings';
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['PortfoliosReconciliationRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfReconciliationBreak']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get multiple property definitions
 *
 * Get one or more property definitions
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.propertyKeys] One or more keys for properties for
 * which the schema should be returned
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfPropertyDefinition} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getMultiplePropertyDefinitions(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let propertyKeys = (options && options.propertyKeys !== undefined) ? options.propertyKeys : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (Array.isArray(propertyKeys)) {
      for (let i = 0; i < propertyKeys.length; i++) {
        if (propertyKeys[i] !== null && propertyKeys[i] !== undefined && typeof propertyKeys[i].valueOf() !== 'string') {
          throw new Error('propertyKeys[i] must be of type string.');
        }
      }
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i1 = 0; i1 < sortBy.length; i1++) {
        if (sortBy[i1] !== null && sortBy[i1] !== undefined && typeof sortBy[i1].valueOf() !== 'string') {
          throw new Error('sortBy[i1] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/propertydefinitions';
  let queryParameters = [];
  if (propertyKeys !== null && propertyKeys !== undefined) {
    if (propertyKeys.length == 0) {
      queryParameters.push('propertyKeys=' + encodeURIComponent(''));
    } else {
      for (let item of propertyKeys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('propertyKeys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfPropertyDefinition']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Define a new property
 *
 * Create a new property definition
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.definition] The definition of the new property
 *
 * @param {string} [options.definition.domain] Possible values include:
 * 'Trade', 'Portfolio', 'Security', 'Holding', 'ReferenceHolding', 'TxnType',
 * 'Instrument'
 *
 * @param {string} [options.definition.scope]
 *
 * @param {string} [options.definition.code]
 *
 * @param {boolean} [options.definition.valueRequired]
 *
 * @param {string} [options.definition.displayName]
 *
 * @param {object} [options.definition.dataTypeId]
 *
 * @param {string} [options.definition.dataTypeId.scope]
 *
 * @param {string} [options.definition.dataTypeId.code]
 *
 * @param {string} [options.definition.lifeTime] Possible values include:
 * 'Perpetual', 'TimeVariant'
 *
 * @param {string} [options.definition.type] Possible values include: 'Label',
 * 'Metric'
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PropertyDefinition} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createPropertyDefinition(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let definition = (options && options.definition !== undefined) ? options.definition : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/propertydefinitions';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (definition !== null && definition !== undefined) {
      let requestModelMapper = new client.models['CreatePropertyDefinitionRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, definition, 'definition');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(definition, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PropertyDefinition']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get property definition
 *
 * Retrieve the definition for the identified property
 *
 * @param {string} domain The Property Domain of the requested property.
 * Possible values include: 'Trade', 'Portfolio', 'Security', 'Holding',
 * 'ReferenceHolding', 'TxnType', 'Instrument'
 *
 * @param {string} scope The scope of the requested property
 *
 * @param {string} code The code of the requested property
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PropertyDefinition} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPropertyDefinition(domain, scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (domain === null || domain === undefined || typeof domain.valueOf() !== 'string') {
      throw new Error('domain cannot be null or undefined and it must be of type string.');
    }
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/propertydefinitions/{domain}/{scope}/{code}';
  requestUrl = requestUrl.replace('{domain}', encodeURIComponent(domain));
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PropertyDefinition']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Update the definition of the specified existing property
 *
 * Not all elements within a property definition are modifiable due to the
 * potential implications for data
 * already stored against these properties
 *
 * @param {string} domain The Property Domain of the property being updated.
 * Possible values include: 'Trade', 'Portfolio', 'Security', 'Holding',
 * 'ReferenceHolding', 'TxnType', 'Instrument'
 *
 * @param {string} scope The scope of the property to be updated
 *
 * @param {string} code The code of the property to be updated
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.definition] The updated definition of the property
 *
 * @param {boolean} [options.definition.valueRequired]
 *
 * @param {string} [options.definition.displayName]
 *
 * @param {object} [options.definition.dataTypeId]
 *
 * @param {string} [options.definition.dataTypeId.scope]
 *
 * @param {string} [options.definition.dataTypeId.code]
 *
 * @param {string} [options.definition.lifeTime] Possible values include:
 * 'Perpetual', 'TimeVariant'
 *
 * @param {string} [options.definition.type] Possible values include: 'Label',
 * 'Metric'
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PropertyDefinition} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _updatePropertyDefinition(domain, scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let definition = (options && options.definition !== undefined) ? options.definition : undefined;
  // Validate
  try {
    if (domain === null || domain === undefined || typeof domain.valueOf() !== 'string') {
      throw new Error('domain cannot be null or undefined and it must be of type string.');
    }
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/propertydefinitions/{domain}/{scope}/{code}';
  requestUrl = requestUrl.replace('{domain}', encodeURIComponent(domain));
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (definition !== null && definition !== undefined) {
      let requestModelMapper = new client.models['UpdatePropertyDefinitionRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, definition, 'definition');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(definition, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PropertyDefinition']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Delete property definition
 *
 * Delete the definition of the specified property
 *
 * @param {string} domain The Property Domain of the property to be deleted.
 * Possible values include: 'Trade', 'Portfolio', 'Security', 'Holding',
 * 'ReferenceHolding', 'TxnType', 'Instrument'
 *
 * @param {string} scope The scope of the property to be deleted
 *
 * @param {string} code The code of the property to be deleted
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePropertyDefinition(domain, scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (domain === null || domain === undefined || typeof domain.valueOf() !== 'string') {
      throw new Error('domain cannot be null or undefined and it must be of type string.');
    }
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/propertydefinitions/{domain}/{scope}/{code}';
  requestUrl = requestUrl.replace('{domain}', encodeURIComponent(domain));
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get quotes
 *
 * Get quotes effective at the specified date/time (if any). An optional
 * maximum age of quotes can be specified, and is infinite by default.
 * Quotes which are older than this at the time of the effective date/time will
 * not be returned.
 * MaxAge is a duration of time represented in an ISO8601 format, eg.
 * P1Y2M3DT4H30M (1 year, 2 months, 3 days, 4 hours and 30 minutes).
 * The results are paged, and by default the 1st page of results is returned
 * with a limit of 100 results per page
 *
 * @param {string} scope The scope of the quotes
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.quoteIds] The ids of the quotes
 *
 * @param {date} [options.effectiveAt] Optional. The date/time from which the
 * quotes are effective
 *
 * @param {date} [options.asAt] Optional. The 'AsAt' date/time
 *
 * @param {string} [options.maxAge] Optional. The quote staleness tolerance
 *
 * @param {number} [options.page] Optional. The page of results to return
 *
 * @param {number} [options.limit] Optional. The number of results per page
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfQuote} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getQuotes(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let quoteIds = (options && options.quoteIds !== undefined) ? options.quoteIds : undefined;
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let maxAge = (options && options.maxAge !== undefined) ? options.maxAge : undefined;
  let page = (options && options.page !== undefined) ? options.page : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (Array.isArray(quoteIds)) {
      for (let i = 0; i < quoteIds.length; i++) {
        if (quoteIds[i] !== null && quoteIds[i] !== undefined && typeof quoteIds[i].valueOf() !== 'string') {
          throw new Error('quoteIds[i] must be of type string.');
        }
      }
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (maxAge !== null && maxAge !== undefined && typeof maxAge.valueOf() !== 'string') {
      throw new Error('maxAge must be of type string.');
    }
    if (page !== null && page !== undefined && typeof page !== 'number') {
      throw new Error('page must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/quotes/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  let queryParameters = [];
  if (quoteIds !== null && quoteIds !== undefined) {
    if (quoteIds.length == 0) {
      queryParameters.push('quoteIds=' + encodeURIComponent(''));
    } else {
      for (let item of quoteIds) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('quoteIds=' + encodeURIComponent('' + item));
      }
    }
  }
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (maxAge !== null && maxAge !== undefined) {
    queryParameters.push('maxAge=' + encodeURIComponent(maxAge));
  }
  if (page !== null && page !== undefined) {
    queryParameters.push('page=' + encodeURIComponent(page.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfQuote']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Add quotes
 *
 * Add quotes effective at the specified time. If a quote is added with the
 * same id (and is effective at the same time) as an existing quote, then the
 * more recently added quote will be returned when queried
 *
 * @param {string} scope The scope of the quotes
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.quotes] The quotes to add
 *
 * @param {date} [options.effectiveAt] Optional. The date/time from which the
 * quotes are effective
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link UpsertQuotesResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertQuotes(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let quotes = (options && options.quotes !== undefined) ? options.quotes : undefined;
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/quotes/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (quotes !== null && quotes !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'quotes',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'UpsertQuoteRequestElementType',
              type: {
                name: 'Composite',
                className: 'UpsertQuoteRequest'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, quotes, 'quotes');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(quotes, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['UpsertQuotesResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Delete a quote
 *
 * Delete the specified quote. In order for a quote to be deleted the id and
 * effectiveFrom date must exactly match.
 *
 * @param {string} scope The scope of the quote
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.id] The quote id
 *
 * @param {date} [options.effectiveFrom] The date/time from which the quote is
 * effective
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeleteQuotesResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteQuote(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let id = (options && options.id !== undefined) ? options.id : undefined;
  let effectiveFrom = (options && options.effectiveFrom !== undefined) ? options.effectiveFrom : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (id !== null && id !== undefined && typeof id.valueOf() !== 'string') {
      throw new Error('id must be of type string.');
    }
    if (effectiveFrom && !(effectiveFrom instanceof Date ||
        (typeof effectiveFrom.valueOf() === 'string' && !isNaN(Date.parse(effectiveFrom))))) {
          throw new Error('effectiveFrom must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/quotes/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  let queryParameters = [];
  if (id !== null && id !== undefined) {
    queryParameters.push('id=' + encodeURIComponent(id));
  }
  if (effectiveFrom !== null && effectiveFrom !== undefined) {
    queryParameters.push('effectiveFrom=' + encodeURIComponent(client.serializeObject(effectiveFrom)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeleteQuotesResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Create reference portfolio
 *
 * Create a new reference portfolio.
 *
 * @param {string} scope The intended scope of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.referencePortfolio] The portfolio creation request
 * object
 *
 * @param {string} options.referencePortfolio.displayName
 *
 * @param {string} [options.referencePortfolio.description]
 *
 * @param {string} options.referencePortfolio.code
 *
 * @param {date} [options.referencePortfolio.created]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link Portfolio} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createReferencePortfolio(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let referencePortfolio = (options && options.referencePortfolio !== undefined) ? options.referencePortfolio : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/referenceportfolios/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (referencePortfolio !== null && referencePortfolio !== undefined) {
      let requestModelMapper = new client.models['CreateReferencePortfolioRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, referencePortfolio, 'referencePortfolio');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(referencePortfolio, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['Portfolio']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get constituents
 *
 * Get all the constituents in the specified reference portfolio
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The scope of the portfolio
 *
 * @param {date} effectiveAt Optional. The effective date of the data
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfReferencePortfolioConstituent}
 *                      for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getReferencePortfolioConstituents(scope, code, effectiveAt, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if(!effectiveAt || !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt cannot be null or undefined and it must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/referenceportfolios/{scope}/{code}/{effectiveAt}/constituents';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{effectiveAt}', encodeURIComponent(client.serializeObject(effectiveAt)));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfReferencePortfolioConstituent']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Add constituents
 *
 * Add constituents to the specified reference portfolio.
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {date} effectiveAt Optional. The effective date of the data
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.constituents] The constituents to upload to the
 * portfolio
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link
 *                      UpsertReferencePortfolioConstituentsResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertReferencePortfolioConstituents(scope, code, effectiveAt, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let constituents = (options && options.constituents !== undefined) ? options.constituents : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if(!effectiveAt || !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt cannot be null or undefined and it must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/referenceportfolios/{scope}/{code}/{effectiveAt}/constituents';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{effectiveAt}', encodeURIComponent(client.serializeObject(effectiveAt)));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (constituents !== null && constituents !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'constituents',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'ReferencePortfolioConstituentRequestElementType',
              type: {
                name: 'Composite',
                className: 'ReferencePortfolioConstituentRequest'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, constituents, 'constituents');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(constituents, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['UpsertReferencePortfolioConstituentsResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get results
 *
 * Retrieve some previously stored results
 *
 * @param {string} scope The scope of the data
 *
 * @param {string} key The key that identifies the data
 *
 * @param {date} dateParameter The date for which the data was loaded
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link Results} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getResults(scope, key, dateParameter, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (key === null || key === undefined || typeof key.valueOf() !== 'string') {
      throw new Error('key cannot be null or undefined and it must be of type string.');
    }
    if(!dateParameter || !(dateParameter instanceof Date ||
        (typeof dateParameter.valueOf() === 'string' && !isNaN(Date.parse(dateParameter))))) {
          throw new Error('dateParameter cannot be null or undefined and it must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/results/{scope}/{key}/{date}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{key}', encodeURIComponent(key));
  requestUrl = requestUrl.replace('{date}', encodeURIComponent(client.serializeObject(dateParameter)));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['Results']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Upsert results
 *
 * Upsert pre-calculated results against a specified scope/key/date combination
 *
 * @param {string} scope The scope of the data
 *
 * @param {string} key The key that identifies the data
 *
 * @param {date} dateParameter The date for which the data is relevant
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] The results to upload
 *
 * @param {object} [options.request.data]
 *
 * @param {string} [options.request.scope]
 *
 * @param {string} [options.request.key]
 *
 * @param {date} [options.request.date]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link Results} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertResults(scope, key, dateParameter, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (key === null || key === undefined || typeof key.valueOf() !== 'string') {
      throw new Error('key cannot be null or undefined and it must be of type string.');
    }
    if(!dateParameter || !(dateParameter instanceof Date ||
        (typeof dateParameter.valueOf() === 'string' && !isNaN(Date.parse(dateParameter))))) {
          throw new Error('dateParameter cannot be null or undefined and it must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/results/{scope}/{key}/{date}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{key}', encodeURIComponent(key));
  requestUrl = requestUrl.replace('{date}', encodeURIComponent(client.serializeObject(dateParameter)));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['CreateResults']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['Results']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Aggregate using result data
 *
 * Aggregate data from a previously-run Result data set into a flat row of
 * results
 *
 * @param {string} scope The scope of the Result data set
 *
 * @param {string} resultsKey The key of the Result data set
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] The request specifying the parameters of
 * the aggregation
 *
 * @param {object} options.request.recipeId
 *
 * @param {string} [options.request.recipeId.scope]
 *
 * @param {string} [options.request.recipeId.code]
 *
 * @param {boolean} [options.request.loadReferencePortfolio]
 *
 * @param {date} [options.request.asAt] The asAt date to use
 *
 * @param {date} options.request.effectiveAt
 *
 * @param {array} options.request.metrics
 *
 * @param {array} [options.request.groupBy]
 *
 * @param {array} [options.request.filters]
 *
 * @param {number} [options.request.limit]
 *
 * @param {string} [options.request.sort]
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ListAggregationResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getAggregationByResultSet(scope, resultsKey, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (resultsKey === null || resultsKey === undefined || typeof resultsKey.valueOf() !== 'string') {
      throw new Error('resultsKey cannot be null or undefined and it must be of type string.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/results/{scope}/{resultsKey}/$aggregate';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{resultsKey}', encodeURIComponent(resultsKey));
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['AggregationRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ListAggregationResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary List entities
 *
 * List all available entities for which schema information is available.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfString} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listEntities(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/schemas/entities';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfString']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get schema
 *
 * Gets the schema and meta-data for a given entity
 *
 * @param {string} entity The name of a valid entity
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link Schema} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getEntitySchema(entity, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (entity === null || entity === undefined || typeof entity.valueOf() !== 'string') {
      throw new Error('entity cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/schemas/entities/{entity}';
  requestUrl = requestUrl.replace('{entity}', encodeURIComponent(entity));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['Schema']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get property schema
 *
 * Get the schemas for the provided list of property keys.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.propertyKeys] One or more property keys for which
 * the schema is requested
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PropertySchema} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPropertySchema(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let propertyKeys = (options && options.propertyKeys !== undefined) ? options.propertyKeys : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (Array.isArray(propertyKeys)) {
      for (let i = 0; i < propertyKeys.length; i++) {
        if (propertyKeys[i] !== null && propertyKeys[i] !== undefined && typeof propertyKeys[i].valueOf() !== 'string') {
          throw new Error('propertyKeys[i] must be of type string.');
        }
      }
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/schemas/properties';
  let queryParameters = [];
  if (propertyKeys !== null && propertyKeys !== undefined) {
    if (propertyKeys.length == 0) {
      queryParameters.push('propertyKeys=' + encodeURIComponent(''));
    } else {
      for (let item of propertyKeys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('propertyKeys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PropertySchema']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get value types
 *
 * Gets the available value types for which a schema is available.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfValueType} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getValueTypes(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/schemas/types';
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfValueType']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Search portfolio groups
 *
 * Search through all portfolio groups
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] A valid Elasticsearch 5.x request
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfPortfolioGroup} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _portfolioGroupsSearch(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (request !== null && request !== undefined && typeof request !== 'object') {
      throw new Error('request must be of type object.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/search/portfoliogroups';
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'request',
        type: {
          name: 'Object'
        }
      };
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfPortfolioGroup']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Search portfolios
 *
 * Search through all portfolios
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] A valid Elasticsearch 5.x request
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfPortfolioSearchResult} for
 *                      more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _portfoliosSearch(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (request !== null && request !== undefined && typeof request !== 'object') {
      throw new Error('request must be of type object.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/search/portfolios';
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'request',
        type: {
          name: 'Object'
        }
      };
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfPortfolioSearchResult']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Search property definitions
 *
 * Search through all property definitions
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.request] A valid Elasticsearch 5.x request
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfPropertyDefinition} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _propertiesSearch(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (request !== null && request !== undefined && typeof request !== 'object') {
      throw new Error('request must be of type object.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/search/propertydefinitions';
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'request',
        type: {
          name: 'Object'
        }
      };
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfPropertyDefinition']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary List transaction types
 *
 * Get the list of persisted transaction types
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfTransactionMetaData} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listConfigurationTransactionTypes(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/systemconfiguration/transactiontypes';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfTransactionMetaData']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Set transaction types
 *
 * Set all transaction types to be used by the movements engine, for the
 * organisation
 *
 * WARNING! Changing these mappings will have a material impact on how data,
 * new and old, is processed and aggregated by LUSID. This will affect your
 * whole organisation. Only change if you are fully aware of the implications
 * of the change.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.types] The complete set of transaction type
 * definitions
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfTransactionMetaData} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _setConfigurationTransactionTypes(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let types = (options && options.types !== undefined) ? options.types : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/systemconfiguration/transactiontypes';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (types !== null && types !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'types',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'TransactionConfigurationDataRequestElementType',
              type: {
                name: 'Composite',
                className: 'TransactionConfigurationDataRequest'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, types, 'types');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(types, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfTransactionMetaData']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Create transaction type
 *
 * Create a new transaction type by specifying a definition and the mappings to
 * movements
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.type] A transaction type definition
 *
 * @param {array} options.type.aliases List of transaction codes that map to
 * this specific transaction model
 *
 * @param {array} options.type.movements Movement data for the transaction code
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link TransactionConfigurationData} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createConfigurationTransactionType(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let type = (options && options.type !== undefined) ? options.type : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/systemconfiguration/transactiontypes';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (type !== null && type !== undefined) {
      let requestModelMapper = new client.models['TransactionConfigurationDataRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, type, 'type');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(type, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['TransactionConfigurationData']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Create transaction portfolio
 *
 * Create a transaction portfolio in a specific scope
 *
 * @param {string} scope The scope into which the transaction portfolio will be
 * created
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.createRequest] The transaction portfolio definition
 *
 * @param {string} options.createRequest.displayName
 *
 * @param {string} [options.createRequest.description]
 *
 * @param {string} options.createRequest.code
 *
 * @param {date} [options.createRequest.created]
 *
 * @param {string} options.createRequest.baseCurrency
 *
 * @param {object} [options.createRequest.corporateActionSourceId]
 *
 * @param {string} [options.createRequest.corporateActionSourceId.scope]
 *
 * @param {string} [options.createRequest.corporateActionSourceId.code]
 *
 * @param {string} [options.createRequest.accountingMethod] Possible values
 * include: 'Default', 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut',
 * 'HighestCostFirst', 'LowestCostFirst'
 *
 * @param {array} [options.createRequest.subHoldingKeys]
 *
 * @param {object} [options.createRequest.properties] Portfolio properties to
 * add to the portfolio
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link Portfolio} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createPortfolio(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let createRequest = (options && options.createRequest !== undefined) ? options.createRequest : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (createRequest !== null && createRequest !== undefined) {
      let requestModelMapper = new client.models['CreateTransactionPortfolioRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, createRequest, 'createRequest');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(createRequest, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['Portfolio']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get portfolio details
 *
 * Get the details document associated with a transaction portfolio
 *
 * When requesting details from a derived transaction portfolio, the returned
 * set of details could come from a different transaction portfolio
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.effectiveAt] Optional. The effective date of the data
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioDetails} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getDetails(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/details';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioDetails']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Upsert details
 *
 * Update the portfolio details for the specified transaction portfolios or add
 * if it doesn't already exist (in the case of a derived transaction
 * portfolio).
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.details] The set of details for the portfolio
 *
 * @param {string} [options.details.baseCurrency]
 *
 * @param {date} [options.effectiveAt] Optional. The effective date of the
 * change
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioDetails} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertPortfolioDetails(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let details = (options && options.details !== undefined) ? options.details : undefined;
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/details';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (details !== null && details !== undefined) {
      let requestModelMapper = new client.models['CreatePortfolioDetails']().mapper();
      requestModel = client.serialize(requestModelMapper, details, 'details');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(details, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioDetails']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Upsert executions
 *
 * Inserts new executions, or updates those already present
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.executions] The executions to be updated
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link UpsertPortfolioExecutionsResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertExecutions(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let executions = (options && options.executions !== undefined) ? options.executions : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/executions';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (executions !== null && executions !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'executions',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'ExecutionRequestElementType',
              type: {
                name: 'Composite',
                className: 'ExecutionRequest'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, executions, 'executions');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(executions, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['UpsertPortfolioExecutionsResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get holdings
 *
 * Get the aggregate holdings of a transaction portfolio.  If no effectiveAt or
 * asAt
 * are supplied then values will be defaulted to the latest system time.
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {boolean} [options.byTaxlots] Option to expand holdings to return the
 * underlying tax-lots
 *
 * @param {date} [options.effectiveAt] Optional. The effective date of the
 * portfolio
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {array} [options.instrumentPropertyKeys] Optional. Keys for the
 * instrument property values to be decorated onto the holdings
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link VersionedResourceListOfHolding} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getHoldings(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let byTaxlots = (options && options.byTaxlots !== undefined) ? options.byTaxlots : undefined;
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  let instrumentPropertyKeys = (options && options.instrumentPropertyKeys !== undefined) ? options.instrumentPropertyKeys : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (byTaxlots !== null && byTaxlots !== undefined && typeof byTaxlots !== 'boolean') {
      throw new Error('byTaxlots must be of type boolean.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
    if (Array.isArray(instrumentPropertyKeys)) {
      for (let i1 = 0; i1 < instrumentPropertyKeys.length; i1++) {
        if (instrumentPropertyKeys[i1] !== null && instrumentPropertyKeys[i1] !== undefined && typeof instrumentPropertyKeys[i1].valueOf() !== 'string') {
          throw new Error('instrumentPropertyKeys[i1] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/holdings';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (byTaxlots !== null && byTaxlots !== undefined) {
    queryParameters.push('byTaxlots=' + encodeURIComponent(byTaxlots.toString()));
  }
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (instrumentPropertyKeys !== null && instrumentPropertyKeys !== undefined) {
    if (instrumentPropertyKeys.length == 0) {
      queryParameters.push('instrumentPropertyKeys=' + encodeURIComponent(''));
    } else {
      for (let item of instrumentPropertyKeys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('instrumentPropertyKeys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['VersionedResourceListOfHolding']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Set all holdings on a transaction portfolio
 *
 * Prompt the creation of transactions in a specific transaction portfolio to
 * bring all holdings to the specified targets
 *
 * @param {string} scope The scope of the transaction portfolio
 *
 * @param {string} code The code of the transaction portfolio
 *
 * @param {date} effectiveAt The effective date of the change
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.holdingAdjustments] The complete set of holdings
 * adjustments for the portfolio
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AdjustHolding} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _setHoldings(scope, code, effectiveAt, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let holdingAdjustments = (options && options.holdingAdjustments !== undefined) ? options.holdingAdjustments : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if(!effectiveAt || !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt cannot be null or undefined and it must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/holdings/{effectiveAt}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{effectiveAt}', encodeURIComponent(client.serializeObject(effectiveAt)));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (holdingAdjustments !== null && holdingAdjustments !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'holdingAdjustments',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'AdjustHoldingRequestElementType',
              type: {
                name: 'Composite',
                className: 'AdjustHoldingRequest'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, holdingAdjustments, 'holdingAdjustments');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(holdingAdjustments, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['AdjustHolding']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Adjust holdings
 *
 * Adjust one or more holdings in a transaction portfolio
 *
 * Prompt the creation of transactions in a specific transaction portfolio to
 * bring selected holdings to the specified targets
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {date} effectiveAt The effective date of the change
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.holdingAdjustments] The selected set of holdings
 * adjustments
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AdjustHolding} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _adjustHoldings(scope, code, effectiveAt, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let holdingAdjustments = (options && options.holdingAdjustments !== undefined) ? options.holdingAdjustments : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if(!effectiveAt || !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt cannot be null or undefined and it must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/holdings/{effectiveAt}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{effectiveAt}', encodeURIComponent(client.serializeObject(effectiveAt)));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (holdingAdjustments !== null && holdingAdjustments !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'holdingAdjustments',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'AdjustHoldingRequestElementType',
              type: {
                name: 'Composite',
                className: 'AdjustHoldingRequest'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, holdingAdjustments, 'holdingAdjustments');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(holdingAdjustments, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['AdjustHolding']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Cancel holdings adjustments
 *
 * Cancel previous adjust-holdings for the portfolio for a specific date
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {date} effectiveAt The effective date of the change
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _cancelAdjustHoldings(scope, code, effectiveAt, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if(!effectiveAt || !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt cannot be null or undefined and it must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/holdings/{effectiveAt}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{effectiveAt}', encodeURIComponent(client.serializeObject(effectiveAt)));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary List holdings adjustments
 *
 * Get holdings adjustments from a transaction portfolio in an interval of
 * effective time.
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code Code for the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.fromEffectiveAt] Holdings adjustments between this
 * time (inclusive) and the toEffectiveAt are returned.
 *
 * @param {date} [options.toEffectiveAt] Holdings adjustments between this time
 * (inclusive) and the fromEffectiveAt are returned.
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListOfHoldingsAdjustmentHeader} for
 *                      more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listHoldingsAdjustments(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let fromEffectiveAt = (options && options.fromEffectiveAt !== undefined) ? options.fromEffectiveAt : undefined;
  let toEffectiveAt = (options && options.toEffectiveAt !== undefined) ? options.toEffectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (fromEffectiveAt && !(fromEffectiveAt instanceof Date ||
        (typeof fromEffectiveAt.valueOf() === 'string' && !isNaN(Date.parse(fromEffectiveAt))))) {
          throw new Error('fromEffectiveAt must be of type date.');
        }
    if (toEffectiveAt && !(toEffectiveAt instanceof Date ||
        (typeof toEffectiveAt.valueOf() === 'string' && !isNaN(Date.parse(toEffectiveAt))))) {
          throw new Error('toEffectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/holdingsadjustments';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (fromEffectiveAt !== null && fromEffectiveAt !== undefined) {
    queryParameters.push('fromEffectiveAt=' + encodeURIComponent(client.serializeObject(fromEffectiveAt)));
  }
  if (toEffectiveAt !== null && toEffectiveAt !== undefined) {
    queryParameters.push('toEffectiveAt=' + encodeURIComponent(client.serializeObject(toEffectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListOfHoldingsAdjustmentHeader']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get holding adjustment
 *
 * Get a holdings adjustment for a transaction portfolio at a specific
 * effective time.
 *
 * A holdings adjustment definition will only be returned if one exists for the
 * specified effective time
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {date} effectiveAt The effective time of the holdings adjustment
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link HoldingsAdjustment} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getHoldingsAdjustment(scope, code, effectiveAt, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if(!effectiveAt || !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt cannot be null or undefined and it must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/holdingsadjustments/{effectiveAt}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{effectiveAt}', encodeURIComponent(client.serializeObject(effectiveAt)));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['HoldingsAdjustment']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get transactions
 *
 * Get the transactions from a transaction portfolio
 *
 * When the requested portfolio is a derived transaction portfolio, the
 * returned set of transactions is the union set of all transactions of the
 * parent (and ancestors) and the specified portfolio.
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.fromTransactionDate] Optional. Limit the returned
 * transactions to those with a transaction date equal or later than this date
 *
 * @param {date} [options.toTransactionDate] Optional. Limit the returned
 * transactions to those with a transaction date equal or before this date
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {array} [options.instrumentPropertyKeys] Optional. Keys for the
 * instrument property values that will be decorated onto the transactions
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link VersionedResourceListOfTransaction} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getTransactions(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let fromTransactionDate = (options && options.fromTransactionDate !== undefined) ? options.fromTransactionDate : undefined;
  let toTransactionDate = (options && options.toTransactionDate !== undefined) ? options.toTransactionDate : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let instrumentPropertyKeys = (options && options.instrumentPropertyKeys !== undefined) ? options.instrumentPropertyKeys : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (fromTransactionDate && !(fromTransactionDate instanceof Date ||
        (typeof fromTransactionDate.valueOf() === 'string' && !isNaN(Date.parse(fromTransactionDate))))) {
          throw new Error('fromTransactionDate must be of type date.');
        }
    if (toTransactionDate && !(toTransactionDate instanceof Date ||
        (typeof toTransactionDate.valueOf() === 'string' && !isNaN(Date.parse(toTransactionDate))))) {
          throw new Error('toTransactionDate must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (Array.isArray(instrumentPropertyKeys)) {
      for (let i1 = 0; i1 < instrumentPropertyKeys.length; i1++) {
        if (instrumentPropertyKeys[i1] !== null && instrumentPropertyKeys[i1] !== undefined && typeof instrumentPropertyKeys[i1].valueOf() !== 'string') {
          throw new Error('instrumentPropertyKeys[i1] must be of type string.');
        }
      }
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/transactions';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (fromTransactionDate !== null && fromTransactionDate !== undefined) {
    queryParameters.push('fromTransactionDate=' + encodeURIComponent(client.serializeObject(fromTransactionDate)));
  }
  if (toTransactionDate !== null && toTransactionDate !== undefined) {
    queryParameters.push('toTransactionDate=' + encodeURIComponent(client.serializeObject(toTransactionDate)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (instrumentPropertyKeys !== null && instrumentPropertyKeys !== undefined) {
    if (instrumentPropertyKeys.length == 0) {
      queryParameters.push('instrumentPropertyKeys=' + encodeURIComponent(''));
    } else {
      for (let item of instrumentPropertyKeys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('instrumentPropertyKeys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['VersionedResourceListOfTransaction']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Upsert transactions into the specified transaction portfolio
 *
 * Upsert transactions
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code for the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.transactions] The transactions to be upserted
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link UpsertPortfolioTransactionsResponse} for
 *                      more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertTransactions(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let transactions = (options && options.transactions !== undefined) ? options.transactions : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/transactions';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (transactions !== null && transactions !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'transactions',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'TransactionRequestElementType',
              type: {
                name: 'Composite',
                className: 'TransactionRequest'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, transactions, 'transactions');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(transactions, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['UpsertPortfolioTransactionsResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Delete transactions
 *
 * Delete one or more transactions from a transaction portfolio
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {array} [options.transactionIds] Ids of transactions to delete
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteTransactions(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let transactionIds = (options && options.transactionIds !== undefined) ? options.transactionIds : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (Array.isArray(transactionIds)) {
      for (let i = 0; i < transactionIds.length; i++) {
        if (transactionIds[i] !== null && transactionIds[i] !== undefined && typeof transactionIds[i].valueOf() !== 'string') {
          throw new Error('transactionIds[i] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/transactions';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (transactionIds !== null && transactionIds !== undefined) {
    if (transactionIds.length == 0) {
      queryParameters.push('transactionIds=' + encodeURIComponent(''));
    } else {
      for (let item of transactionIds) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('transactionIds=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Add transaction properties
 *
 * Upsert one or more transaction properties to a single transaction in a
 * portfolio
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {string} transactionId Id of transaction
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.transactionProperties] Transaction properties
 * values
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AddTransactionPropertyResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _addTransactionProperty(scope, code, transactionId, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let transactionProperties = (options && options.transactionProperties !== undefined) ? options.transactionProperties : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (transactionId === null || transactionId === undefined || typeof transactionId.valueOf() !== 'string') {
      throw new Error('transactionId cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/transactions/{transactionId}/properties';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{transactionId}', encodeURIComponent(transactionId));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (transactionProperties !== null && transactionProperties !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'transactionProperties',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'PerpetualPropertyValueElementType',
              type: {
                name: 'Composite',
                className: 'PerpetualPropertyValue'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, transactionProperties, 'transactionProperties');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(transactionProperties, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['AddTransactionPropertyResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Delete transaction property
 *
 * Delete a property value from a single transaction in a portfolio
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code Code for the portfolio
 *
 * @param {string} transactionId Id of the transaction to delete the property
 * from
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.transactionPropertyKey] The key of the property to
 * be deleted
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePropertyFromTransaction(scope, code, transactionId, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let transactionPropertyKey = (options && options.transactionPropertyKey !== undefined) ? options.transactionPropertyKey : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (transactionId === null || transactionId === undefined || typeof transactionId.valueOf() !== 'string') {
      throw new Error('transactionId cannot be null or undefined and it must be of type string.');
    }
    if (transactionPropertyKey !== null && transactionPropertyKey !== undefined && typeof transactionPropertyKey.valueOf() !== 'string') {
      throw new Error('transactionPropertyKey must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/transactions/{transactionId}/properties';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{transactionId}', encodeURIComponent(transactionId));
  let queryParameters = [];
  if (transactionPropertyKey !== null && transactionPropertyKey !== undefined) {
    queryParameters.push('transactionPropertyKey=' + encodeURIComponent(transactionPropertyKey));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Build output transactions
 *
 * Builds and returns the collection of all types of transactions that affect
 * the holdings of a portfolio in to a set of output transactions
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code The code of the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.asAt] Optional. The AsAt date of the data
 *
 * @param {array} [options.sortBy] Optional. Order the results by these fields.
 * Use use the '-' sign to denote descending order e.g. -MyFieldName
 *
 * @param {number} [options.start] Optional. When paginating, skip this number
 * of results
 *
 * @param {number} [options.limit] Optional. When paginating, limit the number
 * of returned results to this many.
 *
 * @param {array} [options.instrumentPropertyKeys] Optional. Keys for the
 * instrument property values to be decorated onto the transactions
 *
 * @param {string} [options.filter] Optional. Expression to filter the result
 * set
 *
 * @param {object} [options.parameters] Optional. Transaction query parameters
 *
 * @param {date} [options.parameters.startDate] The required set of
 * transactions should begin from this date
 *
 * @param {date} [options.parameters.endDate] The required set of transactions
 * should end at this date
 *
 * @param {string} [options.parameters.queryMode] The method for date
 * selection. Trade date or Settlement date. Possible values include: 'None',
 * 'TradeDate', 'SettleDate'
 *
 * @param {boolean} [options.parameters.showCancelledTransactions] Option to
 * include cancelled transactions in the results
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link VersionedResourceListOfOutputTransaction}
 *                      for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _buildTransactions(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let instrumentPropertyKeys = (options && options.instrumentPropertyKeys !== undefined) ? options.instrumentPropertyKeys : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  let parameters = (options && options.parameters !== undefined) ? options.parameters : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (Array.isArray(instrumentPropertyKeys)) {
      for (let i1 = 0; i1 < instrumentPropertyKeys.length; i1++) {
        if (instrumentPropertyKeys[i1] !== null && instrumentPropertyKeys[i1] !== undefined && typeof instrumentPropertyKeys[i1].valueOf() !== 'string') {
          throw new Error('instrumentPropertyKeys[i1] must be of type string.');
        }
      }
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'api/transactionportfolios/{scope}/{code}/transactions/$build';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (instrumentPropertyKeys !== null && instrumentPropertyKeys !== undefined) {
    if (instrumentPropertyKeys.length == 0) {
      queryParameters.push('instrumentPropertyKeys=' + encodeURIComponent(''));
    } else {
      for (let item of instrumentPropertyKeys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('instrumentPropertyKeys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (parameters !== null && parameters !== undefined) {
      let requestModelMapper = new client.models['TransactionQueryParameters']().mapper();
      requestModel = client.serialize(requestModelMapper, parameters, 'parameters');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(parameters, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['VersionedResourceListOfOutputTransaction']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a LUSIDAPI. */
class LUSIDAPI extends ServiceClient {
  /**
   * Create a LUSIDAPI.
   * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   */
  constructor(credentials, baseUri, options) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost';
    }
    this.credentials = credentials;

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    this.models = models;
    this._listAnalyticStores = _listAnalyticStores;
    this._createAnalyticStore = _createAnalyticStore;
    this._getAnalyticStore = _getAnalyticStore;
    this._deleteAnalyticStore = _deleteAnalyticStore;
    this._setAnalytics = _setAnalytics;
    this._getCorporateActions = _getCorporateActions;
    this._batchUpsertCorporateActions = _batchUpsertCorporateActions;
    this._createDataType = _createDataType;
    this._listDataTypes = _listDataTypes;
    this._getDataType = _getDataType;
    this._updateDataType = _updateDataType;
    this._getUnitsFromDataType = _getUnitsFromDataType;
    this._createDerivedPortfolio = _createDerivedPortfolio;
    this._deleteDerivedPortfolioDetails = _deleteDerivedPortfolioDetails;
    this._batchAddClientInstruments = _batchAddClientInstruments;
    this._batchDeleteClientInstruments = _batchDeleteClientInstruments;
    this._getInstrument = _getInstrument;
    this._lookupInstrumentsFromCodes = _lookupInstrumentsFromCodes;
    this._batchUpsertInstrumentProperties = _batchUpsertInstrumentProperties;
    this._getSamlIdentityProviderId = _getSamlIdentityProviderId;
    this._getExcelDownloadUrl = _getExcelDownloadUrl;
    this._getExcelAddin = _getExcelAddin;
    this._getLusidVersions = _getLusidVersions;
    this._getPersonalisations = _getPersonalisations;
    this._upsertPersonalisations = _upsertPersonalisations;
    this._deletePersonalisation = _deletePersonalisation;
    this._listPortfolioGroups = _listPortfolioGroups;
    this._createPortfolioGroup = _createPortfolioGroup;
    this._getPortfolioGroup = _getPortfolioGroup;
    this._updatePortfolioGroup = _updatePortfolioGroup;
    this._deletePortfolioGroup = _deletePortfolioGroup;
    this._getAggregationByGroup = _getAggregationByGroup;
    this._getNestedAggregationByGroup = _getNestedAggregationByGroup;
    this._getPortfolioGroupCommands = _getPortfolioGroupCommands;
    this._getPortfolioGroupExpansion = _getPortfolioGroupExpansion;
    this._addPortfolioToGroup = _addPortfolioToGroup;
    this._deletePortfolioFromGroup = _deletePortfolioFromGroup;
    this._addSubGroupToGroup = _addSubGroupToGroup;
    this._deleteSubGroupFromGroup = _deleteSubGroupFromGroup;
    this._listPortfolioScopes = _listPortfolioScopes;
    this._listPortfolios = _listPortfolios;
    this._getPortfolio = _getPortfolio;
    this._updatePortfolio = _updatePortfolio;
    this._deletePortfolio = _deletePortfolio;
    this._getAggregationByPortfolio = _getAggregationByPortfolio;
    this._getPortfolioCommands = _getPortfolioCommands;
    this._getPortfolioProperties = _getPortfolioProperties;
    this._upsertPortfolioProperties = _upsertPortfolioProperties;
    this._deletePortfolioProperties = _deletePortfolioProperties;
    this._reconcileHoldings = _reconcileHoldings;
    this._getMultiplePropertyDefinitions = _getMultiplePropertyDefinitions;
    this._createPropertyDefinition = _createPropertyDefinition;
    this._getPropertyDefinition = _getPropertyDefinition;
    this._updatePropertyDefinition = _updatePropertyDefinition;
    this._deletePropertyDefinition = _deletePropertyDefinition;
    this._getQuotes = _getQuotes;
    this._upsertQuotes = _upsertQuotes;
    this._deleteQuote = _deleteQuote;
    this._createReferencePortfolio = _createReferencePortfolio;
    this._getReferencePortfolioConstituents = _getReferencePortfolioConstituents;
    this._upsertReferencePortfolioConstituents = _upsertReferencePortfolioConstituents;
    this._getResults = _getResults;
    this._upsertResults = _upsertResults;
    this._getAggregationByResultSet = _getAggregationByResultSet;
    this._listEntities = _listEntities;
    this._getEntitySchema = _getEntitySchema;
    this._getPropertySchema = _getPropertySchema;
    this._getValueTypes = _getValueTypes;
    this._portfolioGroupsSearch = _portfolioGroupsSearch;
    this._portfoliosSearch = _portfoliosSearch;
    this._propertiesSearch = _propertiesSearch;
    this._listConfigurationTransactionTypes = _listConfigurationTransactionTypes;
    this._setConfigurationTransactionTypes = _setConfigurationTransactionTypes;
    this._createConfigurationTransactionType = _createConfigurationTransactionType;
    this._createPortfolio = _createPortfolio;
    this._getDetails = _getDetails;
    this._upsertPortfolioDetails = _upsertPortfolioDetails;
    this._upsertExecutions = _upsertExecutions;
    this._getHoldings = _getHoldings;
    this._setHoldings = _setHoldings;
    this._adjustHoldings = _adjustHoldings;
    this._cancelAdjustHoldings = _cancelAdjustHoldings;
    this._listHoldingsAdjustments = _listHoldingsAdjustments;
    this._getHoldingsAdjustment = _getHoldingsAdjustment;
    this._getTransactions = _getTransactions;
    this._upsertTransactions = _upsertTransactions;
    this._deleteTransactions = _deleteTransactions;
    this._addTransactionProperty = _addTransactionProperty;
    this._deletePropertyFromTransaction = _deletePropertyFromTransaction;
    this._buildTransactions = _buildTransactions;
    msRest.addSerializationMixin(this);
  }

  /**
   * @summary List analytic stores
   *
   * List all defined analytic stores
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfAnalyticStoreKey>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listAnalyticStoresWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listAnalyticStores(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary List analytic stores
   *
   * List all defined analytic stores
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfAnalyticStoreKey} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfAnalyticStoreKey} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listAnalyticStores(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listAnalyticStores(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listAnalyticStores(options, optionalCallback);
    }
  }

  /**
   * @summary Create analytic store
   *
   * Create a new analytic store for the specified scope and date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A populated analytic store definition
   *
   * @param {string} [options.request.scope]
   *
   * @param {date} [options.request.date]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AnalyticStore>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  createAnalyticStoreWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createAnalyticStore(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Create analytic store
   *
   * Create a new analytic store for the specified scope and date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A populated analytic store definition
   *
   * @param {string} [options.request.scope]
   *
   * @param {date} [options.request.date]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {AnalyticStore} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AnalyticStore} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createAnalyticStore(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createAnalyticStore(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createAnalyticStore(options, optionalCallback);
    }
  }

  /**
   * @summary Get analytic store
   *
   * Get the meta data associated with a specified scope and date combination
   * (analytic store)
   *
   * @param {string} scope The analytics data scope
   *
   * @param {number} year The year component of the date for the data in the
   * scope
   *
   * @param {number} month The month component of the date for the data in the
   * scope
   *
   * @param {number} day The day component of the date for the data in the scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AnalyticStore>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getAnalyticStoreWithHttpOperationResponse(scope, year, month, day, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getAnalyticStore(scope, year, month, day, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get analytic store
   *
   * Get the meta data associated with a specified scope and date combination
   * (analytic store)
   *
   * @param {string} scope The analytics data scope
   *
   * @param {number} year The year component of the date for the data in the
   * scope
   *
   * @param {number} month The month component of the date for the data in the
   * scope
   *
   * @param {number} day The day component of the date for the data in the scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {AnalyticStore} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AnalyticStore} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getAnalyticStore(scope, year, month, day, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getAnalyticStore(scope, year, month, day, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getAnalyticStore(scope, year, month, day, options, optionalCallback);
    }
  }

  /**
   * @summary Delete analytic store
   *
   * Delete stored analytic data in the specified scope for the specified date
   *
   * @param {string} scope The analytics data scope
   *
   * @param {number} year The year component of the date
   *
   * @param {number} month The month component of the date
   *
   * @param {number} day The day component of the date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  deleteAnalyticStoreWithHttpOperationResponse(scope, year, month, day, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deleteAnalyticStore(scope, year, month, day, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Delete analytic store
   *
   * Delete stored analytic data in the specified scope for the specified date
   *
   * @param {string} scope The analytics data scope
   *
   * @param {number} year The year component of the date
   *
   * @param {number} month The month component of the date
   *
   * @param {number} day The day component of the date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteAnalyticStore(scope, year, month, day, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deleteAnalyticStore(scope, year, month, day, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deleteAnalyticStore(scope, year, month, day, options, optionalCallback);
    }
  }

  /**
   * @summary Set analytic data
   *
   * Store the complete set of analytics for an existing analytic store for the
   * specified scope and date
   *
   * @param {string} scope The scope of the data being stored
   *
   * @param {number} year The year component of the date for the data
   *
   * @param {number} month The month component of the date for the data
   *
   * @param {number} day The day component of the date for the data
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.data] The analytic data being inserted
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AnalyticStore>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  setAnalyticsWithHttpOperationResponse(scope, year, month, day, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._setAnalytics(scope, year, month, day, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Set analytic data
   *
   * Store the complete set of analytics for an existing analytic store for the
   * specified scope and date
   *
   * @param {string} scope The scope of the data being stored
   *
   * @param {number} year The year component of the date for the data
   *
   * @param {number} month The month component of the date for the data
   *
   * @param {number} day The day component of the date for the data
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.data] The analytic data being inserted
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {AnalyticStore} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AnalyticStore} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  setAnalytics(scope, year, month, day, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._setAnalytics(scope, year, month, day, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._setAnalytics(scope, year, month, day, options, optionalCallback);
    }
  }

  /**
   * @summary Get corporate actions
   *
   * Gets corporate actions from a specific corporate action source
   *
   * @param {string} scope The scope of the corporate action source
   *
   * @param {string} code The code of the corporate action source
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the data
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfCorporateActionEvent>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getCorporateActionsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getCorporateActions(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get corporate actions
   *
   * Gets corporate actions from a specific corporate action source
   *
   * @param {string} scope The scope of the corporate action source
   *
   * @param {string} code The code of the corporate action source
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the data
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfCorporateActionEvent} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfCorporateActionEvent} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getCorporateActions(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getCorporateActions(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getCorporateActions(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Upsert corporate actions
   *
   * Attempt to create/update one or more corporate action in a specified
   * corporate action source. Failed actions will be identified in the body of
   * the response.
   *
   * @param {string} scope The scope of corporate action source
   *
   * @param {string} code The code of the corporate action source
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.actions] The corporate action definitions
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertCorporateActionsResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  batchUpsertCorporateActionsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._batchUpsertCorporateActions(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Upsert corporate actions
   *
   * Attempt to create/update one or more corporate action in a specified
   * corporate action source. Failed actions will be identified in the body of
   * the response.
   *
   * @param {string} scope The scope of corporate action source
   *
   * @param {string} code The code of the corporate action source
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.actions] The corporate action definitions
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {UpsertCorporateActionsResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertCorporateActionsResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  batchUpsertCorporateActions(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._batchUpsertCorporateActions(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._batchUpsertCorporateActions(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Create data type definition
   *
   * Create a new data type definition
   *
   * Data types cannot be created in either the "default" or "system" scopes.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The definition of the new data type
   *
   * @param {string} options.request.scope
   *
   * @param {string} options.request.code
   *
   * @param {string} options.request.typeValueRange Possible values include:
   * 'Open', 'Closed'
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.description
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits',
   * 'StringArray', 'CurrencyAndAmount', 'TradePrice', 'UnitCreation',
   * 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {string} [options.request.unitSchema] Possible values include:
   * 'NoUnits', 'Basic', 'Iso4217Currency'
   *
   * @param {array} [options.request.acceptableUnits]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DataType>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  createDataTypeWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createDataType(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Create data type definition
   *
   * Create a new data type definition
   *
   * Data types cannot be created in either the "default" or "system" scopes.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The definition of the new data type
   *
   * @param {string} options.request.scope
   *
   * @param {string} options.request.code
   *
   * @param {string} options.request.typeValueRange Possible values include:
   * 'Open', 'Closed'
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.description
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits',
   * 'StringArray', 'CurrencyAndAmount', 'TradePrice', 'UnitCreation',
   * 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {string} [options.request.unitSchema] Possible values include:
   * 'NoUnits', 'Basic', 'Iso4217Currency'
   *
   * @param {array} [options.request.acceptableUnits]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DataType} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DataType} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createDataType(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createDataType(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createDataType(options, optionalCallback);
    }
  }

  /**
   * @summary List data types
   *
   * List all data types in a specified scope
   *
   * @param {string} scope The requested scope of the data types
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {boolean} [options.includeDefault] Whether to additionally include
   * those data types in the "default" scope
   *
   * @param {boolean} [options.includeSystem] Whether to additionally include
   * those data types in the "system" scope
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfDataType>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listDataTypesWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listDataTypes(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary List data types
   *
   * List all data types in a specified scope
   *
   * @param {string} scope The requested scope of the data types
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {boolean} [options.includeDefault] Whether to additionally include
   * those data types in the "default" scope
   *
   * @param {boolean} [options.includeSystem] Whether to additionally include
   * those data types in the "system" scope
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfDataType} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfDataType} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listDataTypes(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listDataTypes(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listDataTypes(scope, options, optionalCallback);
    }
  }

  /**
   * @summary Get data type definition
   *
   * Get the definition of a specified data type
   *
   * @param {string} scope The scope of the data type
   *
   * @param {string} code The code of the data type
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DataType>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getDataTypeWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getDataType(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get data type definition
   *
   * Get the definition of a specified data type
   *
   * @param {string} scope The scope of the data type
   *
   * @param {string} code The code of the data type
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DataType} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DataType} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getDataType(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getDataType(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getDataType(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Update data type definition
   *
   * Update the definition of the specified existing data type
   *
   * Not all elements within a data type definition are modifiable due to the
   * potential implications for data
   * already stored against the types
   *
   * @param {string} scope The scope of the data type
   *
   * @param {string} code The code of the data type
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The updated definition of the data type
   *
   * @param {string} options.request.typeValueRange Possible values include:
   * 'Open', 'Closed'
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.description
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits',
   * 'StringArray', 'CurrencyAndAmount', 'TradePrice', 'UnitCreation',
   * 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {string} [options.request.unitSchema] Possible values include:
   * 'NoUnits', 'Basic', 'Iso4217Currency'
   *
   * @param {array} [options.request.acceptableUnits]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DataType>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  updateDataTypeWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._updateDataType(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Update data type definition
   *
   * Update the definition of the specified existing data type
   *
   * Not all elements within a data type definition are modifiable due to the
   * potential implications for data
   * already stored against the types
   *
   * @param {string} scope The scope of the data type
   *
   * @param {string} code The code of the data type
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The updated definition of the data type
   *
   * @param {string} options.request.typeValueRange Possible values include:
   * 'Open', 'Closed'
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.description
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits',
   * 'StringArray', 'CurrencyAndAmount', 'TradePrice', 'UnitCreation',
   * 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {string} [options.request.unitSchema] Possible values include:
   * 'NoUnits', 'Basic', 'Iso4217Currency'
   *
   * @param {array} [options.request.acceptableUnits]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DataType} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DataType} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  updateDataType(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._updateDataType(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._updateDataType(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Get units from data type
   *
   * Get the definitions of the specified units associated bound to a specific
   * data type
   *
   * @param {string} scope The scope of the data type
   *
   * @param {string} code The code of the data type
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.units] One or more unit identifiers for which the
   * definition is being requested
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<IUnitDefinition>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getUnitsFromDataTypeWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getUnitsFromDataType(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get units from data type
   *
   * Get the definitions of the specified units associated bound to a specific
   * data type
   *
   * @param {string} scope The scope of the data type
   *
   * @param {string} code The code of the data type
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.units] One or more unit identifiers for which the
   * definition is being requested
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {IUnitDefinition} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link IUnitDefinition} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getUnitsFromDataType(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getUnitsFromDataType(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getUnitsFromDataType(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Create derived transaction portfolio
   *
   * Creates a transaction portfolio that derives from an existing transaction
   * portfolio. In a derived portfolio, parts of the portfolio can either be
   * specific to this portfolio, or can be inherited from a "parent". Different
   * parts of the portfolio (e.g. transactions or properties) are combined in
   * different ways. The portfolio details are either overridden in entirety, or
   * not at all. The same is true for properties. Transactions on a derived
   * portfolio are merged with its parent portfolio's transactions. If the parent
   * portfolio is itself a derived portfolio, transactions from that parent are
   * also merged (and that parent's portfolio's, if it is also a derived
   * portfolio, and so on).
   *
   * @param {string} scope The scope into which to create the new derived
   * portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolio] The root object of the new derived
   * portfolio, containing a populated reference portfolio id and reference scope
   *
   * @param {string} options.portfolio.displayName
   *
   * @param {string} [options.portfolio.description]
   *
   * @param {string} [options.portfolio.code]
   *
   * @param {object} [options.portfolio.parentPortfolioId]
   *
   * @param {date} [options.portfolio.created]
   *
   * @param {object} [options.portfolio.corporateActionSourceId]
   *
   * @param {string} [options.portfolio.corporateActionSourceId.scope]
   *
   * @param {string} [options.portfolio.corporateActionSourceId.code]
   *
   * @param {string} [options.portfolio.accountingMethod] Possible values
   * include: 'Default', 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut',
   * 'HighestCostFirst', 'LowestCostFirst'
   *
   * @param {array} [options.portfolio.subHoldingKeys]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Portfolio>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  createDerivedPortfolioWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createDerivedPortfolio(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Create derived transaction portfolio
   *
   * Creates a transaction portfolio that derives from an existing transaction
   * portfolio. In a derived portfolio, parts of the portfolio can either be
   * specific to this portfolio, or can be inherited from a "parent". Different
   * parts of the portfolio (e.g. transactions or properties) are combined in
   * different ways. The portfolio details are either overridden in entirety, or
   * not at all. The same is true for properties. Transactions on a derived
   * portfolio are merged with its parent portfolio's transactions. If the parent
   * portfolio is itself a derived portfolio, transactions from that parent are
   * also merged (and that parent's portfolio's, if it is also a derived
   * portfolio, and so on).
   *
   * @param {string} scope The scope into which to create the new derived
   * portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolio] The root object of the new derived
   * portfolio, containing a populated reference portfolio id and reference scope
   *
   * @param {string} options.portfolio.displayName
   *
   * @param {string} [options.portfolio.description]
   *
   * @param {string} [options.portfolio.code]
   *
   * @param {object} [options.portfolio.parentPortfolioId]
   *
   * @param {date} [options.portfolio.created]
   *
   * @param {object} [options.portfolio.corporateActionSourceId]
   *
   * @param {string} [options.portfolio.corporateActionSourceId.scope]
   *
   * @param {string} [options.portfolio.corporateActionSourceId.code]
   *
   * @param {string} [options.portfolio.accountingMethod] Possible values
   * include: 'Default', 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut',
   * 'HighestCostFirst', 'LowestCostFirst'
   *
   * @param {array} [options.portfolio.subHoldingKeys]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Portfolio} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Portfolio} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createDerivedPortfolio(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createDerivedPortfolio(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createDerivedPortfolio(scope, options, optionalCallback);
    }
  }

  /**
   * @summary Delete portfolio details
   *
   * Deletes the portfolio details for the specified derived transaction
   * portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] The effective date of the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  deleteDerivedPortfolioDetailsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deleteDerivedPortfolioDetails(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Delete portfolio details
   *
   * Deletes the portfolio details for the specified derived transaction
   * portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] The effective date of the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteDerivedPortfolioDetails(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deleteDerivedPortfolioDetails(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deleteDerivedPortfolioDetails(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Create instrument
   *
   * Attempt to create one or more "client" instruments. Each instrument is keyed
   * by some unique key. This key is unimportant, and serves only as a method to
   * identify created instruments in the response.
   *
   * The response will return both the collection of successfully created
   * instruments, as well as those that were rejected and why their creation
   * failed. They will be keyed against the key supplied in the
   * request.
   *
   * It is important to always check the 'Failed' set for any unsuccessful
   * results.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definitions] The client instrument definitions
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<TryAddClientInstruments>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  batchAddClientInstrumentsWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._batchAddClientInstruments(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Create instrument
   *
   * Attempt to create one or more "client" instruments. Each instrument is keyed
   * by some unique key. This key is unimportant, and serves only as a method to
   * identify created instruments in the response.
   *
   * The response will return both the collection of successfully created
   * instruments, as well as those that were rejected and why their creation
   * failed. They will be keyed against the key supplied in the
   * request.
   *
   * It is important to always check the 'Failed' set for any unsuccessful
   * results.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definitions] The client instrument definitions
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {TryAddClientInstruments} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TryAddClientInstruments} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  batchAddClientInstruments(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._batchAddClientInstruments(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._batchAddClientInstruments(options, optionalCallback);
    }
  }

  /**
   * @summary Delete instrument
   *
   * Attempt to delete one or more "client" instruments.
   *
   * The response will include those instruments that could not be deleted (as
   * well as any available details).
   *
   * It is important to always check the 'Failed' set for any unsuccessful
   * results.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.uids] The unique identifiers of the instruments to
   * delete
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeleteClientInstrumentsResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  batchDeleteClientInstrumentsWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._batchDeleteClientInstruments(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Delete instrument
   *
   * Attempt to delete one or more "client" instruments.
   *
   * The response will include those instruments that could not be deleted (as
   * well as any available details).
   *
   * It is important to always check the 'Failed' set for any unsuccessful
   * results.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.uids] The unique identifiers of the instruments to
   * delete
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeleteClientInstrumentsResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeleteClientInstrumentsResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  batchDeleteClientInstruments(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._batchDeleteClientInstruments(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._batchDeleteClientInstruments(options, optionalCallback);
    }
  }

  /**
   * @summary Get instrument definition
   *
   * Get an individual instrument by the one of its unique instrument
   * identifiers. Optionally, it is possible to decorate each instrument with
   * specified property data.
   *
   * @param {string} uid The uid of the requested instrument
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.instrumentPropertyKeys] Optional. Keys of the
   * properties to be decorated on to the instrument
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Instrument>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getInstrumentWithHttpOperationResponse(uid, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getInstrument(uid, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get instrument definition
   *
   * Get an individual instrument by the one of its unique instrument
   * identifiers. Optionally, it is possible to decorate each instrument with
   * specified property data.
   *
   * @param {string} uid The uid of the requested instrument
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.instrumentPropertyKeys] Optional. Keys of the
   * properties to be decorated on to the instrument
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Instrument} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Instrument} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getInstrument(uid, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getInstrument(uid, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getInstrument(uid, options, optionalCallback);
    }
  }

  /**
   * @summary Lookup instrument definition
   *
   * Lookup one or more instrument definitions by specifying non-LUSID
   * identifiers. Optionally, it is possible to decorate each instrument with
   * specified property data.
   *
   * The response will return both the collection of found instruments for each
   * identifier, as well as a collection of all identifiers for which no
   * instruments could be found (as well as any available details).
   *
   * It is important to always check the 'Failed' set for any unsuccessful
   * results.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.codeType] The type of identifiers. Possible values
   * include: 'Undefined', 'LusidInstrumentId', 'ReutersAssetId', 'CINS', 'Isin',
   * 'Sedol', 'Cusip', 'Ticker', 'ClientInternal', 'Figi', 'CompositeFigi',
   * 'ShareClassFigi', 'Wertpapier'
   *
   * @param {array} [options.codes] One or more identifiers of the type specified
   * in the codeType
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.instrumentPropertyKeys] Optional. Keys of the
   * properties to be decorated on to the instrument
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<LookupInstrumentsFromCodesResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  lookupInstrumentsFromCodesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._lookupInstrumentsFromCodes(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Lookup instrument definition
   *
   * Lookup one or more instrument definitions by specifying non-LUSID
   * identifiers. Optionally, it is possible to decorate each instrument with
   * specified property data.
   *
   * The response will return both the collection of found instruments for each
   * identifier, as well as a collection of all identifiers for which no
   * instruments could be found (as well as any available details).
   *
   * It is important to always check the 'Failed' set for any unsuccessful
   * results.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.codeType] The type of identifiers. Possible values
   * include: 'Undefined', 'LusidInstrumentId', 'ReutersAssetId', 'CINS', 'Isin',
   * 'Sedol', 'Cusip', 'Ticker', 'ClientInternal', 'Figi', 'CompositeFigi',
   * 'ShareClassFigi', 'Wertpapier'
   *
   * @param {array} [options.codes] One or more identifiers of the type specified
   * in the codeType
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.instrumentPropertyKeys] Optional. Keys of the
   * properties to be decorated on to the instrument
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {LookupInstrumentsFromCodesResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link LookupInstrumentsFromCodesResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  lookupInstrumentsFromCodes(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._lookupInstrumentsFromCodes(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._lookupInstrumentsFromCodes(options, optionalCallback);
    }
  }

  /**
   * @summary Upsert instrument properties
   *
   * Attempt to upsert property data for one or more instruments, properties, and
   * effective dates.
   *
   * The response will include the details of any failures that occurred during
   * data storage.
   *
   * It is important to always check the 'Failed' collection for any unsuccessful
   * results.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.instrumentProperties] The instrument property data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertInstrumentPropertiesResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  batchUpsertInstrumentPropertiesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._batchUpsertInstrumentProperties(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Upsert instrument properties
   *
   * Attempt to upsert property data for one or more instruments, properties, and
   * effective dates.
   *
   * The response will include the details of any failures that occurred during
   * data storage.
   *
   * It is important to always check the 'Failed' collection for any unsuccessful
   * results.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.instrumentProperties] The instrument property data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {UpsertInstrumentPropertiesResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertInstrumentPropertiesResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  batchUpsertInstrumentProperties(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._batchUpsertInstrumentProperties(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._batchUpsertInstrumentProperties(options, optionalCallback);
    }
  }

  /**
   * @summary Get SAML Identity Provider
   *
   * Get the unique identifier for the SAML 2.0 Identity Provider to be used for
   * domain.
   *
   * @param {string} domain The domain that the user will be logging in to
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getSamlIdentityProviderIdWithHttpOperationResponse(domain, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getSamlIdentityProviderId(domain, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get SAML Identity Provider
   *
   * Get the unique identifier for the SAML 2.0 Identity Provider to be used for
   * domain.
   *
   * @param {string} domain The domain that the user will be logging in to
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getSamlIdentityProviderId(domain, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getSamlIdentityProviderId(domain, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getSamlIdentityProviderId(domain, options, optionalCallback);
    }
  }

  /**
   * @summary Get Excel download url
   *
   * Request an authorised url for an Excel client version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.version] The requested version of the Excel plugin
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getExcelDownloadUrlWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getExcelDownloadUrl(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get Excel download url
   *
   * Request an authorised url for an Excel client version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.version] The requested version of the Excel plugin
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getExcelDownloadUrl(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getExcelDownloadUrl(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getExcelDownloadUrl(options, optionalCallback);
    }
  }

  /**
   * @summary Download Excel Addin
   *
   * Download the LUSID Excel Addin for Microsoft Excel. Not providing a specific
   * value will return the latest version being returned
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.version] The requested version of the Excel plugin
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getExcelAddinWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getExcelAddin(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Download Excel Addin
   *
   * Download the LUSID Excel Addin for Microsoft Excel. Not providing a specific
   * value will return the latest version being returned
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.version] The requested version of the Excel plugin
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getExcelAddin(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getExcelAddin(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getExcelAddin(options, optionalCallback);
    }
  }

  /**
   * @summary Get LUSID versions
   *
   * Get the semantic versions associated with LUSID and its ecosystem
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<VersionSummary>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getLusidVersionsWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getLusidVersions(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get LUSID versions
   *
   * Get the semantic versions associated with LUSID and its ecosystem
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {VersionSummary} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link VersionSummary} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getLusidVersions(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getLusidVersions(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getLusidVersions(options, optionalCallback);
    }
  }

  /**
   * @summary Get personalisation
   *
   * Get a personalisation, recursing to get any referenced if required.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.pattern] The search pattern or specific key
   *
   * @param {string} [options.scope] Optional. The scope level to request for.
   * Possible values include: 'User', 'Group', 'Default', 'All'
   *
   * @param {boolean} [options.recursive] Optional. Whether to recurse into
   * dereference recursive settings
   *
   * @param {boolean} [options.wildcards] Optional. Whether to apply wildcards to
   * the provided pattern and pull back any matching
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPersonalisation>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getPersonalisationsWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPersonalisations(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get personalisation
   *
   * Get a personalisation, recursing to get any referenced if required.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.pattern] The search pattern or specific key
   *
   * @param {string} [options.scope] Optional. The scope level to request for.
   * Possible values include: 'User', 'Group', 'Default', 'All'
   *
   * @param {boolean} [options.recursive] Optional. Whether to recurse into
   * dereference recursive settings
   *
   * @param {boolean} [options.wildcards] Optional. Whether to apply wildcards to
   * the provided pattern and pull back any matching
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfPersonalisation} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPersonalisation} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPersonalisations(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPersonalisations(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPersonalisations(options, optionalCallback);
    }
  }

  /**
   * @summary Upsert personalisations
   *
   * Upsert one or more personalisations
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.personalisations] The set of personalisations to
   * persist
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertPersonalisationResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  upsertPersonalisationsWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertPersonalisations(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Upsert personalisations
   *
   * Upsert one or more personalisations
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.personalisations] The set of personalisations to
   * persist
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {UpsertPersonalisationResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertPersonalisationResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPersonalisations(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertPersonalisations(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertPersonalisations(options, optionalCallback);
    }
  }

  /**
   * @summary Delete a personalisation
   *
   * Delete a personalisation at a specific scope (or use scope ALL to purge the
   * setting entirely)
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.key] The key of the setting to be deleted
   *
   * @param {string} [options.scope] The scope to delete at (use ALL to purge the
   * setting entirely). Possible values include: 'User', 'Group', 'Default',
   * 'All'
   *
   * @param {string} [options.group] Optional. If deleting a setting at group
   * level, specify the group here
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  deletePersonalisationWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePersonalisation(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Delete a personalisation
   *
   * Delete a personalisation at a specific scope (or use scope ALL to purge the
   * setting entirely)
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.key] The key of the setting to be deleted
   *
   * @param {string} [options.scope] The scope to delete at (use ALL to purge the
   * setting entirely). Possible values include: 'User', 'Group', 'Default',
   * 'All'
   *
   * @param {string} [options.group] Optional. If deleting a setting at group
   * level, specify the group here
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePersonalisation(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePersonalisation(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePersonalisation(options, optionalCallback);
    }
  }

  /**
   * @summary List groups in scope
   *
   * Lists all portfolio groups in a specified scope
   *
   * @param {string} scope The scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPortfolioGroup>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listPortfolioGroupsWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listPortfolioGroups(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary List groups in scope
   *
   * Lists all portfolio groups in a specified scope
   *
   * @param {string} scope The scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfPortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPortfolioGroup} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolioGroups(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listPortfolioGroups(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listPortfolioGroups(scope, options, optionalCallback);
    }
  }

  /**
   * @summary Create group
   *
   * Create a new portfolio group.
   *
   * @param {string} scope The scope into which the portfolio group will be
   * created
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The definition of the new portfolio group
   *
   * @param {string} options.request.id
   *
   * @param {array} [options.request.values]
   *
   * @param {array} [options.request.subGroups]
   *
   * @param {string} options.request.displayName
   *
   * @param {string} [options.request.description]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioGroup>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  createPortfolioGroupWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createPortfolioGroup(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Create group
   *
   * Create a new portfolio group.
   *
   * @param {string} scope The scope into which the portfolio group will be
   * created
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The definition of the new portfolio group
   *
   * @param {string} options.request.id
   *
   * @param {array} [options.request.values]
   *
   * @param {array} [options.request.subGroups]
   *
   * @param {string} options.request.displayName
   *
   * @param {string} [options.request.description]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createPortfolioGroup(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createPortfolioGroup(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createPortfolioGroup(scope, options, optionalCallback);
    }
  }

  /**
   * @summary Get portfolio group
   *
   * Get the definition of the specified portfolio group
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioGroup>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getPortfolioGroupWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPortfolioGroup(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get portfolio group
   *
   * Get the definition of the specified portfolio group
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroup(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPortfolioGroup(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPortfolioGroup(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Update group
   *
   * Update the definition of the specified existing portfolio group.
   *
   * Not all elements within a portfolio group definition are modifiable after
   * creation.
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The updated definition of the portfolio
   * group
   *
   * @param {string} options.request.displayName
   *
   * @param {string} [options.request.description]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioGroup>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  updatePortfolioGroupWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._updatePortfolioGroup(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Update group
   *
   * Update the definition of the specified existing portfolio group.
   *
   * Not all elements within a portfolio group definition are modifiable after
   * creation.
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The updated definition of the portfolio
   * group
   *
   * @param {string} options.request.displayName
   *
   * @param {string} [options.request.description]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePortfolioGroup(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._updatePortfolioGroup(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._updatePortfolioGroup(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Delete group
   *
   * Deletes the definition of the specified portfolio group
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  deletePortfolioGroupWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePortfolioGroup(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Delete group
   *
   * Deletes the definition of the specified portfolio group
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioGroup(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePortfolioGroup(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePortfolioGroup(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Aggregate data in a portfolio group
   *
   * Aggregate data sourced from the specified portfolio group
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The request specifying the parameters of
   * the aggregation
   *
   * @param {object} options.request.recipeId
   *
   * @param {string} [options.request.recipeId.scope]
   *
   * @param {string} [options.request.recipeId.code]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} options.request.effectiveAt
   *
   * @param {array} options.request.metrics
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ListAggregationResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getAggregationByGroupWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getAggregationByGroup(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Aggregate data in a portfolio group
   *
   * Aggregate data sourced from the specified portfolio group
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The request specifying the parameters of
   * the aggregation
   *
   * @param {object} options.request.recipeId
   *
   * @param {string} [options.request.recipeId.scope]
   *
   * @param {string} [options.request.recipeId.code]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} options.request.effectiveAt
   *
   * @param {array} options.request.metrics
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ListAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ListAggregationResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByGroup(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getAggregationByGroup(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getAggregationByGroup(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Aggregate data in a portfolio group, as nested
   *
   * Obsolete - Aggregate data sourced from the specified portfolio group into a
   * nested structure. Data is nested following the group-by specifications.
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The request specifying the parameters of
   * the aggregation
   *
   * @param {object} options.request.recipeId
   *
   * @param {string} [options.request.recipeId.scope]
   *
   * @param {string} [options.request.recipeId.code]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} options.request.effectiveAt
   *
   * @param {array} options.request.metrics
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<NestedAggregationResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getNestedAggregationByGroupWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getNestedAggregationByGroup(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Aggregate data in a portfolio group, as nested
   *
   * Obsolete - Aggregate data sourced from the specified portfolio group into a
   * nested structure. Data is nested following the group-by specifications.
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The request specifying the parameters of
   * the aggregation
   *
   * @param {object} options.request.recipeId
   *
   * @param {string} [options.request.recipeId.scope]
   *
   * @param {string} [options.request.recipeId.code]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} options.request.effectiveAt
   *
   * @param {array} options.request.metrics
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {NestedAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link NestedAggregationResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getNestedAggregationByGroup(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getNestedAggregationByGroup(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getNestedAggregationByGroup(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Get commands
   *
   * Gets all commands that modified a specific portfolio group
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt] Optional. Filters commands by those that
   * were processed at or after this date and time
   *
   * @param {date} [options.toAsAt] Optional. Filters commands by those that were
   * processed at or before this date and time
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfProcessedCommand>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getPortfolioGroupCommandsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPortfolioGroupCommands(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get commands
   *
   * Gets all commands that modified a specific portfolio group
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt] Optional. Filters commands by those that
   * were processed at or after this date and time
   *
   * @param {date} [options.toAsAt] Optional. Filters commands by those that were
   * processed at or before this date and time
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfProcessedCommand} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfProcessedCommand} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroupCommands(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPortfolioGroupCommands(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPortfolioGroupCommands(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Get a full expansion of a portfolio group
   *
   * Lists all portfolios in a group, and all sub groups. Portfolios are
   * decorated with their properties.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the data
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.propertyFilter] Optional. The restricted set of
   * properties that should be returned
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ExpandedGroup>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getPortfolioGroupExpansionWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPortfolioGroupExpansion(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get a full expansion of a portfolio group
   *
   * Lists all portfolios in a group, and all sub groups. Portfolios are
   * decorated with their properties.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the data
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.propertyFilter] Optional. The restricted set of
   * properties that should be returned
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ExpandedGroup} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ExpandedGroup} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroupExpansion(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPortfolioGroupExpansion(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPortfolioGroupExpansion(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Add portfolio to group
   *
   * Adds a portfolio to a previously defined portfolio group
   *
   * @param {string} scope The scope of the portfolio group to which a portfolio
   * is being added
   *
   * @param {string} code The code of the portfolio group to which a portfolio is
   * being added
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolioId] The id of the portfolio
   *
   * @param {string} [options.portfolioId.scope]
   *
   * @param {string} [options.portfolioId.code]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioGroup>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  addPortfolioToGroupWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._addPortfolioToGroup(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Add portfolio to group
   *
   * Adds a portfolio to a previously defined portfolio group
   *
   * @param {string} scope The scope of the portfolio group to which a portfolio
   * is being added
   *
   * @param {string} code The code of the portfolio group to which a portfolio is
   * being added
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolioId] The id of the portfolio
   *
   * @param {string} [options.portfolioId.scope]
   *
   * @param {string} [options.portfolioId.code]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  addPortfolioToGroup(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._addPortfolioToGroup(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._addPortfolioToGroup(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Remove portfolio from group
   *
   * Removes a portfolio from a portfolio group
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {string} portfolioScope The scope of the portfolio being removed
   *
   * @param {string} portfolioCode The code of the portfolio being removed
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioGroup>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  deletePortfolioFromGroupWithHttpOperationResponse(scope, code, portfolioScope, portfolioCode, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePortfolioFromGroup(scope, code, portfolioScope, portfolioCode, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Remove portfolio from group
   *
   * Removes a portfolio from a portfolio group
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {string} portfolioScope The scope of the portfolio being removed
   *
   * @param {string} portfolioCode The code of the portfolio being removed
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioFromGroup(scope, code, portfolioScope, portfolioCode, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePortfolioFromGroup(scope, code, portfolioScope, portfolioCode, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePortfolioFromGroup(scope, code, portfolioScope, portfolioCode, options, optionalCallback);
    }
  }

  /**
   * @summary Add group to group
   *
   * Adds a portfolio group, as a sub-group, to an existing portfolio group
   *
   * @param {string} scope The scope of the portfolio group to which a sub-group
   * is being added
   *
   * @param {string} code The code of the portfolio group to which a sub-group is
   * being added
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolioGroupId] The id of the portfolio group
   * being added as a sub-group
   *
   * @param {string} [options.portfolioGroupId.scope]
   *
   * @param {string} [options.portfolioGroupId.code]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioGroup>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  addSubGroupToGroupWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._addSubGroupToGroup(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Add group to group
   *
   * Adds a portfolio group, as a sub-group, to an existing portfolio group
   *
   * @param {string} scope The scope of the portfolio group to which a sub-group
   * is being added
   *
   * @param {string} code The code of the portfolio group to which a sub-group is
   * being added
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolioGroupId] The id of the portfolio group
   * being added as a sub-group
   *
   * @param {string} [options.portfolioGroupId.scope]
   *
   * @param {string} [options.portfolioGroupId.code]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  addSubGroupToGroup(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._addSubGroupToGroup(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._addSubGroupToGroup(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Remove group from group
   *
   * Remove a portfolio group (sub-group) from a parent portfolio group
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {string} subgroupScope The scope of the sub-group being removed
   *
   * @param {string} subgroupCode The code of the sub-group being removed
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioGroup>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  deleteSubGroupFromGroupWithHttpOperationResponse(scope, code, subgroupScope, subgroupCode, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deleteSubGroupFromGroup(scope, code, subgroupScope, subgroupCode, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Remove group from group
   *
   * Remove a portfolio group (sub-group) from a parent portfolio group
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The code of the portfolio group
   *
   * @param {string} subgroupScope The scope of the sub-group being removed
   *
   * @param {string} subgroupCode The code of the sub-group being removed
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteSubGroupFromGroup(scope, code, subgroupScope, subgroupCode, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deleteSubGroupFromGroup(scope, code, subgroupScope, subgroupCode, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deleteSubGroupFromGroup(scope, code, subgroupScope, subgroupCode, options, optionalCallback);
    }
  }

  /**
   * @summary List portfolio scopes
   *
   * Lists all scopes that are either currently or have previously had portfolios
   * in them
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Filter to be applied to the list of scopes
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfScope>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listPortfolioScopesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listPortfolioScopes(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary List portfolio scopes
   *
   * Lists all scopes that are either currently or have previously had portfolios
   * in them
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Filter to be applied to the list of scopes
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfScope} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfScope} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolioScopes(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listPortfolioScopes(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listPortfolioScopes(options, optionalCallback);
    }
  }

  /**
   * @summary List portfolios
   *
   * List all the portfolios in the specified scope
   *
   * @param {string} scope The scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the data
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPortfolio>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listPortfoliosWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listPortfolios(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary List portfolios
   *
   * List all the portfolios in the specified scope
   *
   * @param {string} scope The scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the data
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfPortfolio} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPortfolio} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolios(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listPortfolios(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listPortfolios(scope, options, optionalCallback);
    }
  }

  /**
   * @summary Get portfolio definition
   *
   * Retrieves the basic set of information about a portfolio using the specified
   * scope and code.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the data
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Portfolio>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getPortfolioWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPortfolio(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get portfolio definition
   *
   * Retrieves the basic set of information about a portfolio using the specified
   * scope and code.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the data
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Portfolio} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Portfolio} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolio(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPortfolio(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPortfolio(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Update portfolio definition
   *
   * Update the definition of a specific portfolio. Note, some parts of a
   * portfolio definition are not available for modification after the initial
   * creation.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The updated portfolio definition
   *
   * @param {string} options.request.displayName
   *
   * @param {string} [options.request.description]
   *
   * @param {date} [options.request.created]
   *
   * @param {date} [options.effectiveAt] Optional. The effective date for the
   * change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Portfolio>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  updatePortfolioWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._updatePortfolio(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Update portfolio definition
   *
   * Update the definition of a specific portfolio. Note, some parts of a
   * portfolio definition are not available for modification after the initial
   * creation.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The updated portfolio definition
   *
   * @param {string} options.request.displayName
   *
   * @param {string} [options.request.description]
   *
   * @param {date} [options.request.created]
   *
   * @param {date} [options.effectiveAt] Optional. The effective date for the
   * change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Portfolio} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Portfolio} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePortfolio(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._updatePortfolio(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._updatePortfolio(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Delete portfolio
   *
   * Delete a portfolio at the specified effectiveAt
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the
   * deletion
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  deletePortfolioWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePortfolio(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Delete portfolio
   *
   * Delete a portfolio at the specified effectiveAt
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the
   * deletion
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolio(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePortfolio(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePortfolio(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Aggregate data in a portfolio
   *
   * Aggregate data sourced from the specified portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The request specifying the parameters of
   * the aggregation
   *
   * @param {object} options.request.recipeId
   *
   * @param {string} [options.request.recipeId.scope]
   *
   * @param {string} [options.request.recipeId.code]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} options.request.effectiveAt
   *
   * @param {array} options.request.metrics
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ListAggregationResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getAggregationByPortfolioWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getAggregationByPortfolio(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Aggregate data in a portfolio
   *
   * Aggregate data sourced from the specified portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The request specifying the parameters of
   * the aggregation
   *
   * @param {object} options.request.recipeId
   *
   * @param {string} [options.request.recipeId.scope]
   *
   * @param {string} [options.request.recipeId.code]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} options.request.effectiveAt
   *
   * @param {array} options.request.metrics
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ListAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ListAggregationResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByPortfolio(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getAggregationByPortfolio(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getAggregationByPortfolio(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Get commands
   *
   * Gets all commands that modified a specific portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt] Optional. Filters commands by those that
   * were processed at or after this date and time
   *
   * @param {date} [options.toAsAt] Optional. Filters commands by those that were
   * processed at or before this date and time
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfProcessedCommand>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getPortfolioCommandsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPortfolioCommands(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get commands
   *
   * Gets all commands that modified a specific portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt] Optional. Filters commands by those that
   * were processed at or after this date and time
   *
   * @param {date} [options.toAsAt] Optional. Filters commands by those that were
   * processed at or before this date and time
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfProcessedCommand} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfProcessedCommand} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioCommands(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPortfolioCommands(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPortfolioCommands(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Get portfolio properties
   *
   * Get the properties of a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the data
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioProperties>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getPortfolioPropertiesWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPortfolioProperties(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get portfolio properties
   *
   * Get the properties of a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the data
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioProperties} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioProperties} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioProperties(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPortfolioProperties(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPortfolioProperties(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Upsert properties
   *
   * Upsert one or more property values to a portfolio for the specified
   * effectiveAt. All properties must be of the domain Portfolio.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolioProperties] The property values to be
   * upserted to the portfolio
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the
   * change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioProperties>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  upsertPortfolioPropertiesWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertPortfolioProperties(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Upsert properties
   *
   * Upsert one or more property values to a portfolio for the specified
   * effectiveAt. All properties must be of the domain Portfolio.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolioProperties] The property values to be
   * upserted to the portfolio
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the
   * change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioProperties} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioProperties} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPortfolioProperties(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertPortfolioProperties(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertPortfolioProperties(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Delete portfolios
   *
   * Delete one, many or all property values from a portfolio for the specified
   * effectiveAt
   *
   * Specifying no effectiveAt will delete all properties
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the
   * deletion
   *
   * @param {array} [options.portfolioPropertyKeys] Optional. The keys of the
   * properties to be deleted. None specified indicates the intention to delete
   * all properties from the portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  deletePortfolioPropertiesWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePortfolioProperties(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Delete portfolios
   *
   * Delete one, many or all property values from a portfolio for the specified
   * effectiveAt
   *
   * Specifying no effectiveAt will delete all properties
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the
   * deletion
   *
   * @param {array} [options.portfolioPropertyKeys] Optional. The keys of the
   * properties to be deleted. None specified indicates the intention to delete
   * all properties from the portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioProperties(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePortfolioProperties(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePortfolioProperties(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Reconcile portfolio holdings
   *
   * Reconcile the holdings of two portfolios.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The specifications of the inputs to the
   * reconciliation
   *
   * @param {object} options.request.left The specification of the left hand side
   * of the portfolio reconciliation
   *
   * @param {object} options.request.right The specification of the right hand
   * side of the portfolio reconciliation
   *
   * @param {object} options.request.right.portfolioId The id of the portfolio to
   * be reconciled
   *
   * @param {string} [options.request.right.portfolioId.scope]
   *
   * @param {string} [options.request.right.portfolioId.code]
   *
   * @param {date} options.request.right.effectiveAt The effective date of the
   * portfolio
   *
   * @param {date} [options.request.right.asAt] Optional. The AsAt date of the
   * portfolio
   *
   * @param {array} options.request.instrumentPropertyKeys Instrument properties
   * to be included with any identified breaks. These properties will be in the
   * effective and AsAt dates of the left portfolio
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfReconciliationBreak>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  reconcileHoldingsWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._reconcileHoldings(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Reconcile portfolio holdings
   *
   * Reconcile the holdings of two portfolios.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The specifications of the inputs to the
   * reconciliation
   *
   * @param {object} options.request.left The specification of the left hand side
   * of the portfolio reconciliation
   *
   * @param {object} options.request.right The specification of the right hand
   * side of the portfolio reconciliation
   *
   * @param {object} options.request.right.portfolioId The id of the portfolio to
   * be reconciled
   *
   * @param {string} [options.request.right.portfolioId.scope]
   *
   * @param {string} [options.request.right.portfolioId.code]
   *
   * @param {date} options.request.right.effectiveAt The effective date of the
   * portfolio
   *
   * @param {date} [options.request.right.asAt] Optional. The AsAt date of the
   * portfolio
   *
   * @param {array} options.request.instrumentPropertyKeys Instrument properties
   * to be included with any identified breaks. These properties will be in the
   * effective and AsAt dates of the left portfolio
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfReconciliationBreak} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfReconciliationBreak} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  reconcileHoldings(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._reconcileHoldings(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._reconcileHoldings(options, optionalCallback);
    }
  }

  /**
   * @summary Get multiple property definitions
   *
   * Get one or more property definitions
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.propertyKeys] One or more keys for properties for
   * which the schema should be returned
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPropertyDefinition>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getMultiplePropertyDefinitionsWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getMultiplePropertyDefinitions(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get multiple property definitions
   *
   * Get one or more property definitions
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.propertyKeys] One or more keys for properties for
   * which the schema should be returned
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfPropertyDefinition} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPropertyDefinition} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getMultiplePropertyDefinitions(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getMultiplePropertyDefinitions(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getMultiplePropertyDefinitions(options, optionalCallback);
    }
  }

  /**
   * @summary Define a new property
   *
   * Create a new property definition
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition] The definition of the new property
   *
   * @param {string} [options.definition.domain] Possible values include:
   * 'Trade', 'Portfolio', 'Security', 'Holding', 'ReferenceHolding', 'TxnType',
   * 'Instrument'
   *
   * @param {string} [options.definition.scope]
   *
   * @param {string} [options.definition.code]
   *
   * @param {boolean} [options.definition.valueRequired]
   *
   * @param {string} [options.definition.displayName]
   *
   * @param {object} [options.definition.dataTypeId]
   *
   * @param {string} [options.definition.dataTypeId.scope]
   *
   * @param {string} [options.definition.dataTypeId.code]
   *
   * @param {string} [options.definition.lifeTime] Possible values include:
   * 'Perpetual', 'TimeVariant'
   *
   * @param {string} [options.definition.type] Possible values include: 'Label',
   * 'Metric'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PropertyDefinition>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  createPropertyDefinitionWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createPropertyDefinition(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Define a new property
   *
   * Create a new property definition
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition] The definition of the new property
   *
   * @param {string} [options.definition.domain] Possible values include:
   * 'Trade', 'Portfolio', 'Security', 'Holding', 'ReferenceHolding', 'TxnType',
   * 'Instrument'
   *
   * @param {string} [options.definition.scope]
   *
   * @param {string} [options.definition.code]
   *
   * @param {boolean} [options.definition.valueRequired]
   *
   * @param {string} [options.definition.displayName]
   *
   * @param {object} [options.definition.dataTypeId]
   *
   * @param {string} [options.definition.dataTypeId.scope]
   *
   * @param {string} [options.definition.dataTypeId.code]
   *
   * @param {string} [options.definition.lifeTime] Possible values include:
   * 'Perpetual', 'TimeVariant'
   *
   * @param {string} [options.definition.type] Possible values include: 'Label',
   * 'Metric'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PropertyDefinition} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDefinition} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createPropertyDefinition(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createPropertyDefinition(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createPropertyDefinition(options, optionalCallback);
    }
  }

  /**
   * @summary Get property definition
   *
   * Retrieve the definition for the identified property
   *
   * @param {string} domain The Property Domain of the requested property.
   * Possible values include: 'Trade', 'Portfolio', 'Security', 'Holding',
   * 'ReferenceHolding', 'TxnType', 'Instrument'
   *
   * @param {string} scope The scope of the requested property
   *
   * @param {string} code The code of the requested property
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PropertyDefinition>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getPropertyDefinitionWithHttpOperationResponse(domain, scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPropertyDefinition(domain, scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get property definition
   *
   * Retrieve the definition for the identified property
   *
   * @param {string} domain The Property Domain of the requested property.
   * Possible values include: 'Trade', 'Portfolio', 'Security', 'Holding',
   * 'ReferenceHolding', 'TxnType', 'Instrument'
   *
   * @param {string} scope The scope of the requested property
   *
   * @param {string} code The code of the requested property
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PropertyDefinition} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDefinition} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDefinition(domain, scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPropertyDefinition(domain, scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPropertyDefinition(domain, scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Update the definition of the specified existing property
   *
   * Not all elements within a property definition are modifiable due to the
   * potential implications for data
   * already stored against these properties
   *
   * @param {string} domain The Property Domain of the property being updated.
   * Possible values include: 'Trade', 'Portfolio', 'Security', 'Holding',
   * 'ReferenceHolding', 'TxnType', 'Instrument'
   *
   * @param {string} scope The scope of the property to be updated
   *
   * @param {string} code The code of the property to be updated
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition] The updated definition of the property
   *
   * @param {boolean} [options.definition.valueRequired]
   *
   * @param {string} [options.definition.displayName]
   *
   * @param {object} [options.definition.dataTypeId]
   *
   * @param {string} [options.definition.dataTypeId.scope]
   *
   * @param {string} [options.definition.dataTypeId.code]
   *
   * @param {string} [options.definition.lifeTime] Possible values include:
   * 'Perpetual', 'TimeVariant'
   *
   * @param {string} [options.definition.type] Possible values include: 'Label',
   * 'Metric'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PropertyDefinition>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  updatePropertyDefinitionWithHttpOperationResponse(domain, scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._updatePropertyDefinition(domain, scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Update the definition of the specified existing property
   *
   * Not all elements within a property definition are modifiable due to the
   * potential implications for data
   * already stored against these properties
   *
   * @param {string} domain The Property Domain of the property being updated.
   * Possible values include: 'Trade', 'Portfolio', 'Security', 'Holding',
   * 'ReferenceHolding', 'TxnType', 'Instrument'
   *
   * @param {string} scope The scope of the property to be updated
   *
   * @param {string} code The code of the property to be updated
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition] The updated definition of the property
   *
   * @param {boolean} [options.definition.valueRequired]
   *
   * @param {string} [options.definition.displayName]
   *
   * @param {object} [options.definition.dataTypeId]
   *
   * @param {string} [options.definition.dataTypeId.scope]
   *
   * @param {string} [options.definition.dataTypeId.code]
   *
   * @param {string} [options.definition.lifeTime] Possible values include:
   * 'Perpetual', 'TimeVariant'
   *
   * @param {string} [options.definition.type] Possible values include: 'Label',
   * 'Metric'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PropertyDefinition} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDefinition} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePropertyDefinition(domain, scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._updatePropertyDefinition(domain, scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._updatePropertyDefinition(domain, scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Delete property definition
   *
   * Delete the definition of the specified property
   *
   * @param {string} domain The Property Domain of the property to be deleted.
   * Possible values include: 'Trade', 'Portfolio', 'Security', 'Holding',
   * 'ReferenceHolding', 'TxnType', 'Instrument'
   *
   * @param {string} scope The scope of the property to be deleted
   *
   * @param {string} code The code of the property to be deleted
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  deletePropertyDefinitionWithHttpOperationResponse(domain, scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePropertyDefinition(domain, scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Delete property definition
   *
   * Delete the definition of the specified property
   *
   * @param {string} domain The Property Domain of the property to be deleted.
   * Possible values include: 'Trade', 'Portfolio', 'Security', 'Holding',
   * 'ReferenceHolding', 'TxnType', 'Instrument'
   *
   * @param {string} scope The scope of the property to be deleted
   *
   * @param {string} code The code of the property to be deleted
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePropertyDefinition(domain, scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePropertyDefinition(domain, scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePropertyDefinition(domain, scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Get quotes
   *
   * Get quotes effective at the specified date/time (if any). An optional
   * maximum age of quotes can be specified, and is infinite by default.
   * Quotes which are older than this at the time of the effective date/time will
   * not be returned.
   * MaxAge is a duration of time represented in an ISO8601 format, eg.
   * P1Y2M3DT4H30M (1 year, 2 months, 3 days, 4 hours and 30 minutes).
   * The results are paged, and by default the 1st page of results is returned
   * with a limit of 100 results per page
   *
   * @param {string} scope The scope of the quotes
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.quoteIds] The ids of the quotes
   *
   * @param {date} [options.effectiveAt] Optional. The date/time from which the
   * quotes are effective
   *
   * @param {date} [options.asAt] Optional. The 'AsAt' date/time
   *
   * @param {string} [options.maxAge] Optional. The quote staleness tolerance
   *
   * @param {number} [options.page] Optional. The page of results to return
   *
   * @param {number} [options.limit] Optional. The number of results per page
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfQuote>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getQuotesWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getQuotes(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get quotes
   *
   * Get quotes effective at the specified date/time (if any). An optional
   * maximum age of quotes can be specified, and is infinite by default.
   * Quotes which are older than this at the time of the effective date/time will
   * not be returned.
   * MaxAge is a duration of time represented in an ISO8601 format, eg.
   * P1Y2M3DT4H30M (1 year, 2 months, 3 days, 4 hours and 30 minutes).
   * The results are paged, and by default the 1st page of results is returned
   * with a limit of 100 results per page
   *
   * @param {string} scope The scope of the quotes
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.quoteIds] The ids of the quotes
   *
   * @param {date} [options.effectiveAt] Optional. The date/time from which the
   * quotes are effective
   *
   * @param {date} [options.asAt] Optional. The 'AsAt' date/time
   *
   * @param {string} [options.maxAge] Optional. The quote staleness tolerance
   *
   * @param {number} [options.page] Optional. The page of results to return
   *
   * @param {number} [options.limit] Optional. The number of results per page
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfQuote} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfQuote} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getQuotes(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getQuotes(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getQuotes(scope, options, optionalCallback);
    }
  }

  /**
   * @summary Add quotes
   *
   * Add quotes effective at the specified time. If a quote is added with the
   * same id (and is effective at the same time) as an existing quote, then the
   * more recently added quote will be returned when queried
   *
   * @param {string} scope The scope of the quotes
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.quotes] The quotes to add
   *
   * @param {date} [options.effectiveAt] Optional. The date/time from which the
   * quotes are effective
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertQuotesResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  upsertQuotesWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertQuotes(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Add quotes
   *
   * Add quotes effective at the specified time. If a quote is added with the
   * same id (and is effective at the same time) as an existing quote, then the
   * more recently added quote will be returned when queried
   *
   * @param {string} scope The scope of the quotes
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.quotes] The quotes to add
   *
   * @param {date} [options.effectiveAt] Optional. The date/time from which the
   * quotes are effective
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {UpsertQuotesResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertQuotesResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertQuotes(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertQuotes(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertQuotes(scope, options, optionalCallback);
    }
  }

  /**
   * @summary Delete a quote
   *
   * Delete the specified quote. In order for a quote to be deleted the id and
   * effectiveFrom date must exactly match.
   *
   * @param {string} scope The scope of the quote
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.id] The quote id
   *
   * @param {date} [options.effectiveFrom] The date/time from which the quote is
   * effective
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeleteQuotesResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  deleteQuoteWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deleteQuote(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Delete a quote
   *
   * Delete the specified quote. In order for a quote to be deleted the id and
   * effectiveFrom date must exactly match.
   *
   * @param {string} scope The scope of the quote
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.id] The quote id
   *
   * @param {date} [options.effectiveFrom] The date/time from which the quote is
   * effective
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeleteQuotesResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeleteQuotesResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteQuote(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deleteQuote(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deleteQuote(scope, options, optionalCallback);
    }
  }

  /**
   * @summary Create reference portfolio
   *
   * Create a new reference portfolio.
   *
   * @param {string} scope The intended scope of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.referencePortfolio] The portfolio creation request
   * object
   *
   * @param {string} options.referencePortfolio.displayName
   *
   * @param {string} [options.referencePortfolio.description]
   *
   * @param {string} options.referencePortfolio.code
   *
   * @param {date} [options.referencePortfolio.created]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Portfolio>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  createReferencePortfolioWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createReferencePortfolio(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Create reference portfolio
   *
   * Create a new reference portfolio.
   *
   * @param {string} scope The intended scope of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.referencePortfolio] The portfolio creation request
   * object
   *
   * @param {string} options.referencePortfolio.displayName
   *
   * @param {string} [options.referencePortfolio.description]
   *
   * @param {string} options.referencePortfolio.code
   *
   * @param {date} [options.referencePortfolio.created]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Portfolio} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Portfolio} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createReferencePortfolio(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createReferencePortfolio(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createReferencePortfolio(scope, options, optionalCallback);
    }
  }

  /**
   * @summary Get constituents
   *
   * Get all the constituents in the specified reference portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The scope of the portfolio
   *
   * @param {date} effectiveAt Optional. The effective date of the data
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfReferencePortfolioConstituent>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getReferencePortfolioConstituentsWithHttpOperationResponse(scope, code, effectiveAt, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getReferencePortfolioConstituents(scope, code, effectiveAt, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get constituents
   *
   * Get all the constituents in the specified reference portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The scope of the portfolio
   *
   * @param {date} effectiveAt Optional. The effective date of the data
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfReferencePortfolioConstituent} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfReferencePortfolioConstituent}
   *                      for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getReferencePortfolioConstituents(scope, code, effectiveAt, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getReferencePortfolioConstituents(scope, code, effectiveAt, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getReferencePortfolioConstituents(scope, code, effectiveAt, options, optionalCallback);
    }
  }

  /**
   * @summary Add constituents
   *
   * Add constituents to the specified reference portfolio.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {date} effectiveAt Optional. The effective date of the data
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.constituents] The constituents to upload to the
   * portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertReferencePortfolioConstituentsResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  upsertReferencePortfolioConstituentsWithHttpOperationResponse(scope, code, effectiveAt, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertReferencePortfolioConstituents(scope, code, effectiveAt, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Add constituents
   *
   * Add constituents to the specified reference portfolio.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {date} effectiveAt Optional. The effective date of the data
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.constituents] The constituents to upload to the
   * portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {UpsertReferencePortfolioConstituentsResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link
   *                      UpsertReferencePortfolioConstituentsResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertReferencePortfolioConstituents(scope, code, effectiveAt, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertReferencePortfolioConstituents(scope, code, effectiveAt, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertReferencePortfolioConstituents(scope, code, effectiveAt, options, optionalCallback);
    }
  }

  /**
   * @summary Get results
   *
   * Retrieve some previously stored results
   *
   * @param {string} scope The scope of the data
   *
   * @param {string} key The key that identifies the data
   *
   * @param {date} dateParameter The date for which the data was loaded
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Results>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getResultsWithHttpOperationResponse(scope, key, dateParameter, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getResults(scope, key, dateParameter, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get results
   *
   * Retrieve some previously stored results
   *
   * @param {string} scope The scope of the data
   *
   * @param {string} key The key that identifies the data
   *
   * @param {date} dateParameter The date for which the data was loaded
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Results} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Results} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getResults(scope, key, dateParameter, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getResults(scope, key, dateParameter, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getResults(scope, key, dateParameter, options, optionalCallback);
    }
  }

  /**
   * @summary Upsert results
   *
   * Upsert pre-calculated results against a specified scope/key/date combination
   *
   * @param {string} scope The scope of the data
   *
   * @param {string} key The key that identifies the data
   *
   * @param {date} dateParameter The date for which the data is relevant
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The results to upload
   *
   * @param {object} [options.request.data]
   *
   * @param {string} [options.request.scope]
   *
   * @param {string} [options.request.key]
   *
   * @param {date} [options.request.date]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Results>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  upsertResultsWithHttpOperationResponse(scope, key, dateParameter, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertResults(scope, key, dateParameter, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Upsert results
   *
   * Upsert pre-calculated results against a specified scope/key/date combination
   *
   * @param {string} scope The scope of the data
   *
   * @param {string} key The key that identifies the data
   *
   * @param {date} dateParameter The date for which the data is relevant
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The results to upload
   *
   * @param {object} [options.request.data]
   *
   * @param {string} [options.request.scope]
   *
   * @param {string} [options.request.key]
   *
   * @param {date} [options.request.date]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Results} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Results} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertResults(scope, key, dateParameter, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertResults(scope, key, dateParameter, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertResults(scope, key, dateParameter, options, optionalCallback);
    }
  }

  /**
   * @summary Aggregate using result data
   *
   * Aggregate data from a previously-run Result data set into a flat row of
   * results
   *
   * @param {string} scope The scope of the Result data set
   *
   * @param {string} resultsKey The key of the Result data set
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The request specifying the parameters of
   * the aggregation
   *
   * @param {object} options.request.recipeId
   *
   * @param {string} [options.request.recipeId.scope]
   *
   * @param {string} [options.request.recipeId.code]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} options.request.effectiveAt
   *
   * @param {array} options.request.metrics
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ListAggregationResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getAggregationByResultSetWithHttpOperationResponse(scope, resultsKey, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getAggregationByResultSet(scope, resultsKey, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Aggregate using result data
   *
   * Aggregate data from a previously-run Result data set into a flat row of
   * results
   *
   * @param {string} scope The scope of the Result data set
   *
   * @param {string} resultsKey The key of the Result data set
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The request specifying the parameters of
   * the aggregation
   *
   * @param {object} options.request.recipeId
   *
   * @param {string} [options.request.recipeId.scope]
   *
   * @param {string} [options.request.recipeId.code]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} options.request.effectiveAt
   *
   * @param {array} options.request.metrics
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ListAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ListAggregationResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByResultSet(scope, resultsKey, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getAggregationByResultSet(scope, resultsKey, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getAggregationByResultSet(scope, resultsKey, options, optionalCallback);
    }
  }

  /**
   * @summary List entities
   *
   * List all available entities for which schema information is available.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfString>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listEntitiesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listEntities(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary List entities
   *
   * List all available entities for which schema information is available.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfString} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfString} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listEntities(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listEntities(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listEntities(options, optionalCallback);
    }
  }

  /**
   * @summary Get schema
   *
   * Gets the schema and meta-data for a given entity
   *
   * @param {string} entity The name of a valid entity
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Schema>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getEntitySchemaWithHttpOperationResponse(entity, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getEntitySchema(entity, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get schema
   *
   * Gets the schema and meta-data for a given entity
   *
   * @param {string} entity The name of a valid entity
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Schema} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Schema} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getEntitySchema(entity, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getEntitySchema(entity, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getEntitySchema(entity, options, optionalCallback);
    }
  }

  /**
   * @summary Get property schema
   *
   * Get the schemas for the provided list of property keys.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.propertyKeys] One or more property keys for which
   * the schema is requested
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PropertySchema>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getPropertySchemaWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPropertySchema(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get property schema
   *
   * Get the schemas for the provided list of property keys.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.propertyKeys] One or more property keys for which
   * the schema is requested
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PropertySchema} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertySchema} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertySchema(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPropertySchema(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPropertySchema(options, optionalCallback);
    }
  }

  /**
   * @summary Get value types
   *
   * Gets the available value types for which a schema is available.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfValueType>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getValueTypesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getValueTypes(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get value types
   *
   * Gets the available value types for which a schema is available.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfValueType} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfValueType} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getValueTypes(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getValueTypes(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getValueTypes(options, optionalCallback);
    }
  }

  /**
   * @summary Search portfolio groups
   *
   * Search through all portfolio groups
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A valid Elasticsearch 5.x request
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPortfolioGroup>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  portfolioGroupsSearchWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._portfolioGroupsSearch(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Search portfolio groups
   *
   * Search through all portfolio groups
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A valid Elasticsearch 5.x request
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfPortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPortfolioGroup} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  portfolioGroupsSearch(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._portfolioGroupsSearch(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._portfolioGroupsSearch(options, optionalCallback);
    }
  }

  /**
   * @summary Search portfolios
   *
   * Search through all portfolios
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A valid Elasticsearch 5.x request
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPortfolioSearchResult>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  portfoliosSearchWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._portfoliosSearch(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Search portfolios
   *
   * Search through all portfolios
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A valid Elasticsearch 5.x request
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfPortfolioSearchResult} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPortfolioSearchResult} for
   *                      more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  portfoliosSearch(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._portfoliosSearch(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._portfoliosSearch(options, optionalCallback);
    }
  }

  /**
   * @summary Search property definitions
   *
   * Search through all property definitions
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A valid Elasticsearch 5.x request
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPropertyDefinition>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  propertiesSearchWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._propertiesSearch(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Search property definitions
   *
   * Search through all property definitions
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A valid Elasticsearch 5.x request
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfPropertyDefinition} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPropertyDefinition} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  propertiesSearch(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._propertiesSearch(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._propertiesSearch(options, optionalCallback);
    }
  }

  /**
   * @summary List transaction types
   *
   * Get the list of persisted transaction types
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfTransactionMetaData>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listConfigurationTransactionTypesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listConfigurationTransactionTypes(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary List transaction types
   *
   * Get the list of persisted transaction types
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfTransactionMetaData} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfTransactionMetaData} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listConfigurationTransactionTypes(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listConfigurationTransactionTypes(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listConfigurationTransactionTypes(options, optionalCallback);
    }
  }

  /**
   * @summary Set transaction types
   *
   * Set all transaction types to be used by the movements engine, for the
   * organisation
   *
   * WARNING! Changing these mappings will have a material impact on how data,
   * new and old, is processed and aggregated by LUSID. This will affect your
   * whole organisation. Only change if you are fully aware of the implications
   * of the change.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.types] The complete set of transaction type
   * definitions
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfTransactionMetaData>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  setConfigurationTransactionTypesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._setConfigurationTransactionTypes(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Set transaction types
   *
   * Set all transaction types to be used by the movements engine, for the
   * organisation
   *
   * WARNING! Changing these mappings will have a material impact on how data,
   * new and old, is processed and aggregated by LUSID. This will affect your
   * whole organisation. Only change if you are fully aware of the implications
   * of the change.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.types] The complete set of transaction type
   * definitions
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfTransactionMetaData} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfTransactionMetaData} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  setConfigurationTransactionTypes(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._setConfigurationTransactionTypes(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._setConfigurationTransactionTypes(options, optionalCallback);
    }
  }

  /**
   * @summary Create transaction type
   *
   * Create a new transaction type by specifying a definition and the mappings to
   * movements
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.type] A transaction type definition
   *
   * @param {array} options.type.aliases List of transaction codes that map to
   * this specific transaction model
   *
   * @param {array} options.type.movements Movement data for the transaction code
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<TransactionConfigurationData>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  createConfigurationTransactionTypeWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createConfigurationTransactionType(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Create transaction type
   *
   * Create a new transaction type by specifying a definition and the mappings to
   * movements
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.type] A transaction type definition
   *
   * @param {array} options.type.aliases List of transaction codes that map to
   * this specific transaction model
   *
   * @param {array} options.type.movements Movement data for the transaction code
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {TransactionConfigurationData} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TransactionConfigurationData} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createConfigurationTransactionType(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createConfigurationTransactionType(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createConfigurationTransactionType(options, optionalCallback);
    }
  }

  /**
   * @summary Create transaction portfolio
   *
   * Create a transaction portfolio in a specific scope
   *
   * @param {string} scope The scope into which the transaction portfolio will be
   * created
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.createRequest] The transaction portfolio definition
   *
   * @param {string} options.createRequest.displayName
   *
   * @param {string} [options.createRequest.description]
   *
   * @param {string} options.createRequest.code
   *
   * @param {date} [options.createRequest.created]
   *
   * @param {string} options.createRequest.baseCurrency
   *
   * @param {object} [options.createRequest.corporateActionSourceId]
   *
   * @param {string} [options.createRequest.corporateActionSourceId.scope]
   *
   * @param {string} [options.createRequest.corporateActionSourceId.code]
   *
   * @param {string} [options.createRequest.accountingMethod] Possible values
   * include: 'Default', 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut',
   * 'HighestCostFirst', 'LowestCostFirst'
   *
   * @param {array} [options.createRequest.subHoldingKeys]
   *
   * @param {object} [options.createRequest.properties] Portfolio properties to
   * add to the portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Portfolio>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  createPortfolioWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createPortfolio(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Create transaction portfolio
   *
   * Create a transaction portfolio in a specific scope
   *
   * @param {string} scope The scope into which the transaction portfolio will be
   * created
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.createRequest] The transaction portfolio definition
   *
   * @param {string} options.createRequest.displayName
   *
   * @param {string} [options.createRequest.description]
   *
   * @param {string} options.createRequest.code
   *
   * @param {date} [options.createRequest.created]
   *
   * @param {string} options.createRequest.baseCurrency
   *
   * @param {object} [options.createRequest.corporateActionSourceId]
   *
   * @param {string} [options.createRequest.corporateActionSourceId.scope]
   *
   * @param {string} [options.createRequest.corporateActionSourceId.code]
   *
   * @param {string} [options.createRequest.accountingMethod] Possible values
   * include: 'Default', 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut',
   * 'HighestCostFirst', 'LowestCostFirst'
   *
   * @param {array} [options.createRequest.subHoldingKeys]
   *
   * @param {object} [options.createRequest.properties] Portfolio properties to
   * add to the portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Portfolio} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Portfolio} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createPortfolio(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createPortfolio(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createPortfolio(scope, options, optionalCallback);
    }
  }

  /**
   * @summary Get portfolio details
   *
   * Get the details document associated with a transaction portfolio
   *
   * When requesting details from a derived transaction portfolio, the returned
   * set of details could come from a different transaction portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the data
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioDetails>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getDetailsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getDetails(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get portfolio details
   *
   * Get the details document associated with a transaction portfolio
   *
   * When requesting details from a derived transaction portfolio, the returned
   * set of details could come from a different transaction portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the data
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioDetails} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDetails} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getDetails(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getDetails(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getDetails(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Upsert details
   *
   * Update the portfolio details for the specified transaction portfolios or add
   * if it doesn't already exist (in the case of a derived transaction
   * portfolio).
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.details] The set of details for the portfolio
   *
   * @param {string} [options.details.baseCurrency]
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the
   * change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioDetails>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  upsertPortfolioDetailsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertPortfolioDetails(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Upsert details
   *
   * Update the portfolio details for the specified transaction portfolios or add
   * if it doesn't already exist (in the case of a derived transaction
   * portfolio).
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.details] The set of details for the portfolio
   *
   * @param {string} [options.details.baseCurrency]
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the
   * change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioDetails} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDetails} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPortfolioDetails(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertPortfolioDetails(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertPortfolioDetails(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Upsert executions
   *
   * Inserts new executions, or updates those already present
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.executions] The executions to be updated
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertPortfolioExecutionsResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  upsertExecutionsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertExecutions(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Upsert executions
   *
   * Inserts new executions, or updates those already present
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.executions] The executions to be updated
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {UpsertPortfolioExecutionsResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertPortfolioExecutionsResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertExecutions(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertExecutions(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertExecutions(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Get holdings
   *
   * Get the aggregate holdings of a transaction portfolio.  If no effectiveAt or
   * asAt
   * are supplied then values will be defaulted to the latest system time.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {boolean} [options.byTaxlots] Option to expand holdings to return the
   * underlying tax-lots
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the
   * portfolio
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {array} [options.instrumentPropertyKeys] Optional. Keys for the
   * instrument property values to be decorated onto the holdings
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<VersionedResourceListOfHolding>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getHoldingsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getHoldings(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get holdings
   *
   * Get the aggregate holdings of a transaction portfolio.  If no effectiveAt or
   * asAt
   * are supplied then values will be defaulted to the latest system time.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {boolean} [options.byTaxlots] Option to expand holdings to return the
   * underlying tax-lots
   *
   * @param {date} [options.effectiveAt] Optional. The effective date of the
   * portfolio
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {array} [options.instrumentPropertyKeys] Optional. Keys for the
   * instrument property values to be decorated onto the holdings
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {VersionedResourceListOfHolding} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link VersionedResourceListOfHolding} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getHoldings(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getHoldings(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getHoldings(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Set all holdings on a transaction portfolio
   *
   * Prompt the creation of transactions in a specific transaction portfolio to
   * bring all holdings to the specified targets
   *
   * @param {string} scope The scope of the transaction portfolio
   *
   * @param {string} code The code of the transaction portfolio
   *
   * @param {date} effectiveAt The effective date of the change
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdingAdjustments] The complete set of holdings
   * adjustments for the portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AdjustHolding>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  setHoldingsWithHttpOperationResponse(scope, code, effectiveAt, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._setHoldings(scope, code, effectiveAt, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Set all holdings on a transaction portfolio
   *
   * Prompt the creation of transactions in a specific transaction portfolio to
   * bring all holdings to the specified targets
   *
   * @param {string} scope The scope of the transaction portfolio
   *
   * @param {string} code The code of the transaction portfolio
   *
   * @param {date} effectiveAt The effective date of the change
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdingAdjustments] The complete set of holdings
   * adjustments for the portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {AdjustHolding} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AdjustHolding} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  setHoldings(scope, code, effectiveAt, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._setHoldings(scope, code, effectiveAt, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._setHoldings(scope, code, effectiveAt, options, optionalCallback);
    }
  }

  /**
   * @summary Adjust holdings
   *
   * Adjust one or more holdings in a transaction portfolio
   *
   * Prompt the creation of transactions in a specific transaction portfolio to
   * bring selected holdings to the specified targets
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {date} effectiveAt The effective date of the change
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdingAdjustments] The selected set of holdings
   * adjustments
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AdjustHolding>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  adjustHoldingsWithHttpOperationResponse(scope, code, effectiveAt, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._adjustHoldings(scope, code, effectiveAt, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Adjust holdings
   *
   * Adjust one or more holdings in a transaction portfolio
   *
   * Prompt the creation of transactions in a specific transaction portfolio to
   * bring selected holdings to the specified targets
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {date} effectiveAt The effective date of the change
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdingAdjustments] The selected set of holdings
   * adjustments
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {AdjustHolding} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AdjustHolding} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  adjustHoldings(scope, code, effectiveAt, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._adjustHoldings(scope, code, effectiveAt, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._adjustHoldings(scope, code, effectiveAt, options, optionalCallback);
    }
  }

  /**
   * @summary Cancel holdings adjustments
   *
   * Cancel previous adjust-holdings for the portfolio for a specific date
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {date} effectiveAt The effective date of the change
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  cancelAdjustHoldingsWithHttpOperationResponse(scope, code, effectiveAt, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._cancelAdjustHoldings(scope, code, effectiveAt, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Cancel holdings adjustments
   *
   * Cancel previous adjust-holdings for the portfolio for a specific date
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {date} effectiveAt The effective date of the change
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  cancelAdjustHoldings(scope, code, effectiveAt, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._cancelAdjustHoldings(scope, code, effectiveAt, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._cancelAdjustHoldings(scope, code, effectiveAt, options, optionalCallback);
    }
  }

  /**
   * @summary List holdings adjustments
   *
   * Get holdings adjustments from a transaction portfolio in an interval of
   * effective time.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromEffectiveAt] Holdings adjustments between this
   * time (inclusive) and the toEffectiveAt are returned.
   *
   * @param {date} [options.toEffectiveAt] Holdings adjustments between this time
   * (inclusive) and the fromEffectiveAt are returned.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfHoldingsAdjustmentHeader>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listHoldingsAdjustmentsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listHoldingsAdjustments(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary List holdings adjustments
   *
   * Get holdings adjustments from a transaction portfolio in an interval of
   * effective time.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromEffectiveAt] Holdings adjustments between this
   * time (inclusive) and the toEffectiveAt are returned.
   *
   * @param {date} [options.toEffectiveAt] Holdings adjustments between this time
   * (inclusive) and the fromEffectiveAt are returned.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListOfHoldingsAdjustmentHeader} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfHoldingsAdjustmentHeader} for
   *                      more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listHoldingsAdjustments(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listHoldingsAdjustments(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listHoldingsAdjustments(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Get holding adjustment
   *
   * Get a holdings adjustment for a transaction portfolio at a specific
   * effective time.
   *
   * A holdings adjustment definition will only be returned if one exists for the
   * specified effective time
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {date} effectiveAt The effective time of the holdings adjustment
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<HoldingsAdjustment>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getHoldingsAdjustmentWithHttpOperationResponse(scope, code, effectiveAt, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getHoldingsAdjustment(scope, code, effectiveAt, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get holding adjustment
   *
   * Get a holdings adjustment for a transaction portfolio at a specific
   * effective time.
   *
   * A holdings adjustment definition will only be returned if one exists for the
   * specified effective time
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {date} effectiveAt The effective time of the holdings adjustment
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {HoldingsAdjustment} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link HoldingsAdjustment} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getHoldingsAdjustment(scope, code, effectiveAt, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getHoldingsAdjustment(scope, code, effectiveAt, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getHoldingsAdjustment(scope, code, effectiveAt, options, optionalCallback);
    }
  }

  /**
   * @summary Get transactions
   *
   * Get the transactions from a transaction portfolio
   *
   * When the requested portfolio is a derived transaction portfolio, the
   * returned set of transactions is the union set of all transactions of the
   * parent (and ancestors) and the specified portfolio.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromTransactionDate] Optional. Limit the returned
   * transactions to those with a transaction date equal or later than this date
   *
   * @param {date} [options.toTransactionDate] Optional. Limit the returned
   * transactions to those with a transaction date equal or before this date
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {array} [options.instrumentPropertyKeys] Optional. Keys for the
   * instrument property values that will be decorated onto the transactions
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<VersionedResourceListOfTransaction>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getTransactionsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getTransactions(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get transactions
   *
   * Get the transactions from a transaction portfolio
   *
   * When the requested portfolio is a derived transaction portfolio, the
   * returned set of transactions is the union set of all transactions of the
   * parent (and ancestors) and the specified portfolio.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromTransactionDate] Optional. Limit the returned
   * transactions to those with a transaction date equal or later than this date
   *
   * @param {date} [options.toTransactionDate] Optional. Limit the returned
   * transactions to those with a transaction date equal or before this date
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {array} [options.instrumentPropertyKeys] Optional. Keys for the
   * instrument property values that will be decorated onto the transactions
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {VersionedResourceListOfTransaction} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link VersionedResourceListOfTransaction} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getTransactions(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getTransactions(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getTransactions(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Upsert transactions into the specified transaction portfolio
   *
   * Upsert transactions
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.transactions] The transactions to be upserted
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertPortfolioTransactionsResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  upsertTransactionsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertTransactions(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Upsert transactions into the specified transaction portfolio
   *
   * Upsert transactions
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.transactions] The transactions to be upserted
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {UpsertPortfolioTransactionsResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertPortfolioTransactionsResponse} for
   *                      more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertTransactions(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertTransactions(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertTransactions(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Delete transactions
   *
   * Delete one or more transactions from a transaction portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.transactionIds] Ids of transactions to delete
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  deleteTransactionsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deleteTransactions(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Delete transactions
   *
   * Delete one or more transactions from a transaction portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.transactionIds] Ids of transactions to delete
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteTransactions(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deleteTransactions(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deleteTransactions(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Add transaction properties
   *
   * Upsert one or more transaction properties to a single transaction in a
   * portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {string} transactionId Id of transaction
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.transactionProperties] Transaction properties
   * values
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AddTransactionPropertyResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  addTransactionPropertyWithHttpOperationResponse(scope, code, transactionId, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._addTransactionProperty(scope, code, transactionId, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Add transaction properties
   *
   * Upsert one or more transaction properties to a single transaction in a
   * portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {string} transactionId Id of transaction
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.transactionProperties] Transaction properties
   * values
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {AddTransactionPropertyResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AddTransactionPropertyResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  addTransactionProperty(scope, code, transactionId, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._addTransactionProperty(scope, code, transactionId, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._addTransactionProperty(scope, code, transactionId, options, optionalCallback);
    }
  }

  /**
   * @summary Delete transaction property
   *
   * Delete a property value from a single transaction in a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {string} transactionId Id of the transaction to delete the property
   * from
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.transactionPropertyKey] The key of the property to
   * be deleted
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  deletePropertyFromTransactionWithHttpOperationResponse(scope, code, transactionId, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePropertyFromTransaction(scope, code, transactionId, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Delete transaction property
   *
   * Delete a property value from a single transaction in a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {string} transactionId Id of the transaction to delete the property
   * from
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.transactionPropertyKey] The key of the property to
   * be deleted
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePropertyFromTransaction(scope, code, transactionId, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePropertyFromTransaction(scope, code, transactionId, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePropertyFromTransaction(scope, code, transactionId, options, optionalCallback);
    }
  }

  /**
   * @summary Build output transactions
   *
   * Builds and returns the collection of all types of transactions that affect
   * the holdings of a portfolio in to a set of output transactions
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {array} [options.instrumentPropertyKeys] Optional. Keys for the
   * instrument property values to be decorated onto the transactions
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.parameters] Optional. Transaction query parameters
   *
   * @param {date} [options.parameters.startDate] The required set of
   * transactions should begin from this date
   *
   * @param {date} [options.parameters.endDate] The required set of transactions
   * should end at this date
   *
   * @param {string} [options.parameters.queryMode] The method for date
   * selection. Trade date or Settlement date. Possible values include: 'None',
   * 'TradeDate', 'SettleDate'
   *
   * @param {boolean} [options.parameters.showCancelledTransactions] Option to
   * include cancelled transactions in the results
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<VersionedResourceListOfOutputTransaction>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  buildTransactionsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._buildTransactions(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Build output transactions
   *
   * Builds and returns the collection of all types of transactions that affect
   * the holdings of a portfolio in to a set of output transactions
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The code of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] Optional. The AsAt date of the data
   *
   * @param {array} [options.sortBy] Optional. Order the results by these fields.
   * Use use the '-' sign to denote descending order e.g. -MyFieldName
   *
   * @param {number} [options.start] Optional. When paginating, skip this number
   * of results
   *
   * @param {number} [options.limit] Optional. When paginating, limit the number
   * of returned results to this many.
   *
   * @param {array} [options.instrumentPropertyKeys] Optional. Keys for the
   * instrument property values to be decorated onto the transactions
   *
   * @param {string} [options.filter] Optional. Expression to filter the result
   * set
   *
   * @param {object} [options.parameters] Optional. Transaction query parameters
   *
   * @param {date} [options.parameters.startDate] The required set of
   * transactions should begin from this date
   *
   * @param {date} [options.parameters.endDate] The required set of transactions
   * should end at this date
   *
   * @param {string} [options.parameters.queryMode] The method for date
   * selection. Trade date or Settlement date. Possible values include: 'None',
   * 'TradeDate', 'SettleDate'
   *
   * @param {boolean} [options.parameters.showCancelledTransactions] Option to
   * include cancelled transactions in the results
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {VersionedResourceListOfOutputTransaction} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link VersionedResourceListOfOutputTransaction}
   *                      for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  buildTransactions(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._buildTransactions(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._buildTransactions(scope, code, options, optionalCallback);
    }
  }

}

module.exports = LUSIDAPI;
module.exports['default'] = LUSIDAPI;
module.exports.LUSIDAPI = LUSIDAPI;
module.exports.LUSIDAPIModels = models;
