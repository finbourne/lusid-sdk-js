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

import { ServiceClient, ServiceClientOptions, ServiceCallback, HttpOperationResponse, ServiceClientCredentials } from 'ms-rest';
import * as models from "./models";

export default class LUSIDAPI extends ServiceClient {
  /**
   * @class
   * Initializes a new instance of the LUSIDAPI class.
   * @constructor
   *
   * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(credentials: ServiceClientCredentials, baseUri?: string, options?: ServiceClientOptions);

  credentials: ServiceClientCredentials;


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
   * @reject {Error|ServiceError} - The error object.
   */
  listAnalyticStoresWithHttpOperationResponse(options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfAnalyticStoreKey>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfAnalyticStoreKey} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfAnalyticStoreKey} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfAnalyticStoreKey} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listAnalyticStores(options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfAnalyticStoreKey>;
  listAnalyticStores(callback: ServiceCallback<models.ResourceListOfAnalyticStoreKey>): void;
  listAnalyticStores(options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfAnalyticStoreKey>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  createAnalyticStoreWithHttpOperationResponse(options?: { request? : models.CreateAnalyticStoreRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AnalyticStore>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {AnalyticStore} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {AnalyticStore} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AnalyticStore} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createAnalyticStore(options?: { request? : models.CreateAnalyticStoreRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.AnalyticStore>;
  createAnalyticStore(callback: ServiceCallback<models.AnalyticStore>): void;
  createAnalyticStore(options: { request? : models.CreateAnalyticStoreRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AnalyticStore>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getAnalyticStoreWithHttpOperationResponse(scope: string, year: number, month: number, day: number, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AnalyticStore>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {AnalyticStore} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {AnalyticStore} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AnalyticStore} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAnalyticStore(scope: string, year: number, month: number, day: number, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.AnalyticStore>;
  getAnalyticStore(scope: string, year: number, month: number, day: number, callback: ServiceCallback<models.AnalyticStore>): void;
  getAnalyticStore(scope: string, year: number, month: number, day: number, options: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AnalyticStore>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  deleteAnalyticStoreWithHttpOperationResponse(scope: string, year: number, month: number, day: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteAnalyticStore(scope: string, year: number, month: number, day: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deleteAnalyticStore(scope: string, year: number, month: number, day: number, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deleteAnalyticStore(scope: string, year: number, month: number, day: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  setAnalyticsWithHttpOperationResponse(scope: string, year: number, month: number, day: number, options?: { data? : models.InstrumentAnalytic[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AnalyticStore>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {AnalyticStore} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {AnalyticStore} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AnalyticStore} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  setAnalytics(scope: string, year: number, month: number, day: number, options?: { data? : models.InstrumentAnalytic[], customHeaders? : { [headerName: string]: string; } }): Promise<models.AnalyticStore>;
  setAnalytics(scope: string, year: number, month: number, day: number, callback: ServiceCallback<models.AnalyticStore>): void;
  setAnalytics(scope: string, year: number, month: number, day: number, options: { data? : models.InstrumentAnalytic[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AnalyticStore>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getCorporateActionsWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfCorporateActionEvent>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfCorporateActionEvent} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfCorporateActionEvent} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfCorporateActionEvent} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getCorporateActions(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfCorporateActionEvent>;
  getCorporateActions(scope: string, code: string, callback: ServiceCallback<models.ResourceListOfCorporateActionEvent>): void;
  getCorporateActions(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfCorporateActionEvent>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  batchUpsertCorporateActionsWithHttpOperationResponse(scope: string, code: string, options?: { actions? : models.CreateCorporateAction[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UpsertCorporateActionsResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {UpsertCorporateActionsResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {UpsertCorporateActionsResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertCorporateActionsResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  batchUpsertCorporateActions(scope: string, code: string, options?: { actions? : models.CreateCorporateAction[], customHeaders? : { [headerName: string]: string; } }): Promise<models.UpsertCorporateActionsResponse>;
  batchUpsertCorporateActions(scope: string, code: string, callback: ServiceCallback<models.UpsertCorporateActionsResponse>): void;
  batchUpsertCorporateActions(scope: string, code: string, options: { actions? : models.CreateCorporateAction[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UpsertCorporateActionsResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  createDataTypeWithHttpOperationResponse(options?: { request? : models.CreateDataTypeRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DataType>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DataType} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DataType} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DataType} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createDataType(options?: { request? : models.CreateDataTypeRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.DataType>;
  createDataType(callback: ServiceCallback<models.DataType>): void;
  createDataType(options: { request? : models.CreateDataTypeRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataType>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  listDataTypesWithHttpOperationResponse(scope: string, options?: { includeDefault? : boolean, includeSystem? : boolean, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfDataType>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfDataType} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfDataType} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfDataType} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listDataTypes(scope: string, options?: { includeDefault? : boolean, includeSystem? : boolean, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfDataType>;
  listDataTypes(scope: string, callback: ServiceCallback<models.ResourceListOfDataType>): void;
  listDataTypes(scope: string, options: { includeDefault? : boolean, includeSystem? : boolean, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfDataType>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getDataTypeWithHttpOperationResponse(scope: string, code: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DataType>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DataType} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DataType} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DataType} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getDataType(scope: string, code: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DataType>;
  getDataType(scope: string, code: string, callback: ServiceCallback<models.DataType>): void;
  getDataType(scope: string, code: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataType>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  updateDataTypeWithHttpOperationResponse(scope: string, code: string, options?: { request? : models.UpdateDataTypeRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DataType>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DataType} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DataType} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DataType} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  updateDataType(scope: string, code: string, options?: { request? : models.UpdateDataTypeRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.DataType>;
  updateDataType(scope: string, code: string, callback: ServiceCallback<models.DataType>): void;
  updateDataType(scope: string, code: string, options: { request? : models.UpdateDataTypeRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataType>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getUnitsFromDataTypeWithHttpOperationResponse(scope: string, code: string, options?: { units? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.IUnitDefinition>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {IUnitDefinition} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {IUnitDefinition} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link IUnitDefinition} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getUnitsFromDataType(scope: string, code: string, options?: { units? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.IUnitDefinition>;
  getUnitsFromDataType(scope: string, code: string, callback: ServiceCallback<models.IUnitDefinition>): void;
  getUnitsFromDataType(scope: string, code: string, options: { units? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IUnitDefinition>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  createDerivedPortfolioWithHttpOperationResponse(scope: string, options?: { portfolio? : models.CreateDerivedTransactionPortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Portfolio>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Portfolio} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Portfolio} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Portfolio} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createDerivedPortfolio(scope: string, options?: { portfolio? : models.CreateDerivedTransactionPortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.Portfolio>;
  createDerivedPortfolio(scope: string, callback: ServiceCallback<models.Portfolio>): void;
  createDerivedPortfolio(scope: string, options: { portfolio? : models.CreateDerivedTransactionPortfolioRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Portfolio>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  deleteDerivedPortfolioDetailsWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteDerivedPortfolioDetails(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deleteDerivedPortfolioDetails(scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deleteDerivedPortfolioDetails(scope: string, code: string, options: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  batchAddClientInstrumentsWithHttpOperationResponse(options?: { definitions? : { [propertyName: string]: models.CreateClientInstrumentRequest }, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.TryAddClientInstruments>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {TryAddClientInstruments} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {TryAddClientInstruments} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TryAddClientInstruments} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  batchAddClientInstruments(options?: { definitions? : { [propertyName: string]: models.CreateClientInstrumentRequest }, customHeaders? : { [headerName: string]: string; } }): Promise<models.TryAddClientInstruments>;
  batchAddClientInstruments(callback: ServiceCallback<models.TryAddClientInstruments>): void;
  batchAddClientInstruments(options: { definitions? : { [propertyName: string]: models.CreateClientInstrumentRequest }, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TryAddClientInstruments>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  batchDeleteClientInstrumentsWithHttpOperationResponse(options?: { uids? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeleteClientInstrumentsResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeleteClientInstrumentsResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeleteClientInstrumentsResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeleteClientInstrumentsResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  batchDeleteClientInstruments(options?: { uids? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.DeleteClientInstrumentsResponse>;
  batchDeleteClientInstruments(callback: ServiceCallback<models.DeleteClientInstrumentsResponse>): void;
  batchDeleteClientInstruments(options: { uids? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeleteClientInstrumentsResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getInstrumentWithHttpOperationResponse(uid: string, options?: { asAt? : Date, instrumentPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Instrument>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Instrument} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Instrument} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Instrument} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getInstrument(uid: string, options?: { asAt? : Date, instrumentPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.Instrument>;
  getInstrument(uid: string, callback: ServiceCallback<models.Instrument>): void;
  getInstrument(uid: string, options: { asAt? : Date, instrumentPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Instrument>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  lookupInstrumentsFromCodesWithHttpOperationResponse(options?: { codeType? : string, codes? : string[], asAt? : Date, instrumentPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LookupInstrumentsFromCodesResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {LookupInstrumentsFromCodesResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {LookupInstrumentsFromCodesResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link LookupInstrumentsFromCodesResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  lookupInstrumentsFromCodes(options?: { codeType? : string, codes? : string[], asAt? : Date, instrumentPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.LookupInstrumentsFromCodesResponse>;
  lookupInstrumentsFromCodes(callback: ServiceCallback<models.LookupInstrumentsFromCodesResponse>): void;
  lookupInstrumentsFromCodes(options: { codeType? : string, codes? : string[], asAt? : Date, instrumentPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LookupInstrumentsFromCodesResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  batchUpsertInstrumentPropertiesWithHttpOperationResponse(options?: { instrumentProperties? : models.InstrumentProperty[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UpsertInstrumentPropertiesResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {UpsertInstrumentPropertiesResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {UpsertInstrumentPropertiesResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertInstrumentPropertiesResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  batchUpsertInstrumentProperties(options?: { instrumentProperties? : models.InstrumentProperty[], customHeaders? : { [headerName: string]: string; } }): Promise<models.UpsertInstrumentPropertiesResponse>;
  batchUpsertInstrumentProperties(callback: ServiceCallback<models.UpsertInstrumentPropertiesResponse>): void;
  batchUpsertInstrumentProperties(options: { instrumentProperties? : models.InstrumentProperty[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UpsertInstrumentPropertiesResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getSamlIdentityProviderIdWithHttpOperationResponse(domain: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<string>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {String} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getSamlIdentityProviderId(domain: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<string>;
  getSamlIdentityProviderId(domain: string, callback: ServiceCallback<string>): void;
  getSamlIdentityProviderId(domain: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getExcelDownloadUrlWithHttpOperationResponse(options?: { version? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<string>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {String} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getExcelDownloadUrl(options?: { version? : string, customHeaders? : { [headerName: string]: string; } }): Promise<string>;
  getExcelDownloadUrl(callback: ServiceCallback<string>): void;
  getExcelDownloadUrl(options: { version? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string>): void;


  /**
   * @summary Download the LUSID Excel Addin
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.version]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getExcelAddinWithHttpOperationResponse(options?: { version? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<string>>;

  /**
   * @summary Download the LUSID Excel Addin
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.version]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {String} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getExcelAddin(options?: { version? : string, customHeaders? : { [headerName: string]: string; } }): Promise<string>;
  getExcelAddin(callback: ServiceCallback<string>): void;
  getExcelAddin(options: { version? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getLusidVersionsWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.VersionSummary>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {VersionSummary} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {VersionSummary} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link VersionSummary} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getLusidVersions(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.VersionSummary>;
  getLusidVersions(callback: ServiceCallback<models.VersionSummary>): void;
  getLusidVersions(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.VersionSummary>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getPersonalisationsWithHttpOperationResponse(options?: { pattern? : string, scope? : string, recursive? : boolean, wildcards? : boolean, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPersonalisation>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPersonalisation} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPersonalisation} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPersonalisation} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPersonalisations(options?: { pattern? : string, scope? : string, recursive? : boolean, wildcards? : boolean, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPersonalisation>;
  getPersonalisations(callback: ServiceCallback<models.ResourceListOfPersonalisation>): void;
  getPersonalisations(options: { pattern? : string, scope? : string, recursive? : boolean, wildcards? : boolean, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPersonalisation>): void;


  /**
   * @summary Upsert personalisations
   *
   * Upsert one or more personalisations
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.personalisations]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertPersonalisationResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertPersonalisationsWithHttpOperationResponse(options?: { personalisations? : models.Personalisation[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UpsertPersonalisationResponse>>;

  /**
   * @summary Upsert personalisations
   *
   * Upsert one or more personalisations
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.personalisations]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {UpsertPersonalisationResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {UpsertPersonalisationResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertPersonalisationResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPersonalisations(options?: { personalisations? : models.Personalisation[], customHeaders? : { [headerName: string]: string; } }): Promise<models.UpsertPersonalisationResponse>;
  upsertPersonalisations(callback: ServiceCallback<models.UpsertPersonalisationResponse>): void;
  upsertPersonalisations(options: { personalisations? : models.Personalisation[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UpsertPersonalisationResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  deletePersonalisationWithHttpOperationResponse(options?: { key? : string, scope? : string, group? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePersonalisation(options?: { key? : string, scope? : string, group? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePersonalisation(callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePersonalisation(options: { key? : string, scope? : string, group? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  listPortfolioGroupsWithHttpOperationResponse(scope: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPortfolioGroup>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPortfolioGroup} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPortfolioGroup} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolioGroups(scope: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPortfolioGroup>;
  listPortfolioGroups(scope: string, callback: ServiceCallback<models.ResourceListOfPortfolioGroup>): void;
  listPortfolioGroups(scope: string, options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPortfolioGroup>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  createPortfolioGroupWithHttpOperationResponse(scope: string, options?: { request? : models.CreatePortfolioGroupRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioGroup>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioGroup} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createPortfolioGroup(scope: string, options?: { request? : models.CreatePortfolioGroupRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioGroup>;
  createPortfolioGroup(scope: string, callback: ServiceCallback<models.PortfolioGroup>): void;
  createPortfolioGroup(scope: string, options: { request? : models.CreatePortfolioGroupRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioGroup>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioGroupWithHttpOperationResponse(scope: string, code: string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioGroup>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioGroup} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroup(scope: string, code: string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioGroup>;
  getPortfolioGroup(scope: string, code: string, callback: ServiceCallback<models.PortfolioGroup>): void;
  getPortfolioGroup(scope: string, code: string, options: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioGroup>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  updatePortfolioGroupWithHttpOperationResponse(scope: string, code: string, options?: { request? : models.UpdatePortfolioGroupRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioGroup>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioGroup} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePortfolioGroup(scope: string, code: string, options?: { request? : models.UpdatePortfolioGroupRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioGroup>;
  updatePortfolioGroup(scope: string, code: string, callback: ServiceCallback<models.PortfolioGroup>): void;
  updatePortfolioGroup(scope: string, code: string, options: { request? : models.UpdatePortfolioGroupRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioGroup>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioGroupWithHttpOperationResponse(scope: string, code: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioGroup(scope: string, code: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePortfolioGroup(scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePortfolioGroup(scope: string, code: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregationByGroupWithHttpOperationResponse(scope: string, code: string, options?: { request? : models.AggregationRequest, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ListAggregationResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ListAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ListAggregationResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ListAggregationResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByGroup(scope: string, code: string, options?: { request? : models.AggregationRequest, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ListAggregationResponse>;
  getAggregationByGroup(scope: string, code: string, callback: ServiceCallback<models.ListAggregationResponse>): void;
  getAggregationByGroup(scope: string, code: string, options: { request? : models.AggregationRequest, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListAggregationResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getNestedAggregationByGroupWithHttpOperationResponse(scope: string, code: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.NestedAggregationResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {NestedAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {NestedAggregationResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link NestedAggregationResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getNestedAggregationByGroup(scope: string, code: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.NestedAggregationResponse>;
  getNestedAggregationByGroup(scope: string, code: string, callback: ServiceCallback<models.NestedAggregationResponse>): void;
  getNestedAggregationByGroup(scope: string, code: string, options: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NestedAggregationResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioGroupCommandsWithHttpOperationResponse(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfProcessedCommand>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfProcessedCommand} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfProcessedCommand} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfProcessedCommand} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroupCommands(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfProcessedCommand>;
  getPortfolioGroupCommands(scope: string, code: string, callback: ServiceCallback<models.ResourceListOfProcessedCommand>): void;
  getPortfolioGroupCommands(scope: string, code: string, options: { fromAsAt? : Date, toAsAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfProcessedCommand>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioGroupExpansionWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ExpandedGroup>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ExpandedGroup} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ExpandedGroup} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ExpandedGroup} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroupExpansion(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.ExpandedGroup>;
  getPortfolioGroupExpansion(scope: string, code: string, callback: ServiceCallback<models.ExpandedGroup>): void;
  getPortfolioGroupExpansion(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ExpandedGroup>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  addPortfolioToGroupWithHttpOperationResponse(scope: string, code: string, options?: { portfolioId? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioGroup>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioGroup} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  addPortfolioToGroup(scope: string, code: string, options?: { portfolioId? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioGroup>;
  addPortfolioToGroup(scope: string, code: string, callback: ServiceCallback<models.PortfolioGroup>): void;
  addPortfolioToGroup(scope: string, code: string, options: { portfolioId? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioGroup>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioFromGroupWithHttpOperationResponse(scope: string, code: string, portfolioScope: string, portfolioCode: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioGroup>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioGroup} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioFromGroup(scope: string, code: string, portfolioScope: string, portfolioCode: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioGroup>;
  deletePortfolioFromGroup(scope: string, code: string, portfolioScope: string, portfolioCode: string, callback: ServiceCallback<models.PortfolioGroup>): void;
  deletePortfolioFromGroup(scope: string, code: string, portfolioScope: string, portfolioCode: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioGroup>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  addSubGroupToGroupWithHttpOperationResponse(scope: string, code: string, options?: { portfolioGroupId? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioGroup>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioGroup} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  addSubGroupToGroup(scope: string, code: string, options?: { portfolioGroupId? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioGroup>;
  addSubGroupToGroup(scope: string, code: string, callback: ServiceCallback<models.PortfolioGroup>): void;
  addSubGroupToGroup(scope: string, code: string, options: { portfolioGroupId? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioGroup>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  deleteSubGroupFromGroupWithHttpOperationResponse(scope: string, code: string, subgroupScope: string, subgroupCode: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioGroup>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioGroup} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioGroup} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteSubGroupFromGroup(scope: string, code: string, subgroupScope: string, subgroupCode: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioGroup>;
  deleteSubGroupFromGroup(scope: string, code: string, subgroupScope: string, subgroupCode: string, callback: ServiceCallback<models.PortfolioGroup>): void;
  deleteSubGroupFromGroup(scope: string, code: string, subgroupScope: string, subgroupCode: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioGroup>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  listPortfolioScopesWithHttpOperationResponse(options?: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfScope>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfScope} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfScope} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfScope} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolioScopes(options?: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfScope>;
  listPortfolioScopes(callback: ServiceCallback<models.ResourceListOfScope>): void;
  listPortfolioScopes(options: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfScope>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  listPortfoliosWithHttpOperationResponse(scope: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPortfolio>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPortfolio} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPortfolio} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPortfolio} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolios(scope: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPortfolio>;
  listPortfolios(scope: string, callback: ServiceCallback<models.ResourceListOfPortfolio>): void;
  listPortfolios(scope: string, options: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPortfolio>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Portfolio>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Portfolio} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Portfolio} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Portfolio} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolio(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.Portfolio>;
  getPortfolio(scope: string, code: string, callback: ServiceCallback<models.Portfolio>): void;
  getPortfolio(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Portfolio>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  updatePortfolioWithHttpOperationResponse(scope: string, code: string, options?: { request? : models.UpdatePortfolioRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Portfolio>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Portfolio} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Portfolio} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Portfolio} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePortfolio(scope: string, code: string, options?: { request? : models.UpdatePortfolioRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.Portfolio>;
  updatePortfolio(scope: string, code: string, callback: ServiceCallback<models.Portfolio>): void;
  updatePortfolio(scope: string, code: string, options: { request? : models.UpdatePortfolioRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Portfolio>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolio(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePortfolio(scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePortfolio(scope: string, code: string, options: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregationByPortfolioWithHttpOperationResponse(scope: string, code: string, options?: { request? : models.AggregationRequest, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ListAggregationResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ListAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ListAggregationResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ListAggregationResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByPortfolio(scope: string, code: string, options?: { request? : models.AggregationRequest, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ListAggregationResponse>;
  getAggregationByPortfolio(scope: string, code: string, callback: ServiceCallback<models.ListAggregationResponse>): void;
  getAggregationByPortfolio(scope: string, code: string, options: { request? : models.AggregationRequest, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListAggregationResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioCommandsWithHttpOperationResponse(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfProcessedCommand>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfProcessedCommand} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfProcessedCommand} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfProcessedCommand} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioCommands(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfProcessedCommand>;
  getPortfolioCommands(scope: string, code: string, callback: ServiceCallback<models.ResourceListOfProcessedCommand>): void;
  getPortfolioCommands(scope: string, code: string, options: { fromAsAt? : Date, toAsAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfProcessedCommand>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioPropertiesWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioProperties>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioProperties} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioProperties} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioProperties} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioProperties(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioProperties>;
  getPortfolioProperties(scope: string, code: string, callback: ServiceCallback<models.PortfolioProperties>): void;
  getPortfolioProperties(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioProperties>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  upsertPortfolioPropertiesWithHttpOperationResponse(scope: string, code: string, options?: { portfolioProperties? : { [propertyName: string]: models.PropertyValue }, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioProperties>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioProperties} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioProperties} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioProperties} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPortfolioProperties(scope: string, code: string, options?: { portfolioProperties? : { [propertyName: string]: models.PropertyValue }, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioProperties>;
  upsertPortfolioProperties(scope: string, code: string, callback: ServiceCallback<models.PortfolioProperties>): void;
  upsertPortfolioProperties(scope: string, code: string, options: { portfolioProperties? : { [propertyName: string]: models.PropertyValue }, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioProperties>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioPropertiesWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, portfolioPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioProperties(scope: string, code: string, options?: { effectiveAt? : Date, portfolioPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePortfolioProperties(scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePortfolioProperties(scope: string, code: string, options: { effectiveAt? : Date, portfolioPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  reconcileHoldingsWithHttpOperationResponse(options?: { request? : models.PortfoliosReconciliationRequest, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfReconciliationBreak>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfReconciliationBreak} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfReconciliationBreak} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfReconciliationBreak} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  reconcileHoldings(options?: { request? : models.PortfoliosReconciliationRequest, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfReconciliationBreak>;
  reconcileHoldings(callback: ServiceCallback<models.ResourceListOfReconciliationBreak>): void;
  reconcileHoldings(options: { request? : models.PortfoliosReconciliationRequest, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfReconciliationBreak>): void;


  /**
   * @summary Get one or more property definitions
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
   * @reject {Error|ServiceError} - The error object.
   */
  getMultiplePropertyDefinitionsWithHttpOperationResponse(options?: { propertyKeys? : string[], asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPropertyDefinition>>;

  /**
   * @summary Get one or more property definitions
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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPropertyDefinition} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPropertyDefinition} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPropertyDefinition} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getMultiplePropertyDefinitions(options?: { propertyKeys? : string[], asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPropertyDefinition>;
  getMultiplePropertyDefinitions(callback: ServiceCallback<models.ResourceListOfPropertyDefinition>): void;
  getMultiplePropertyDefinitions(options: { propertyKeys? : string[], asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPropertyDefinition>): void;


  /**
   * @summary Define a new property
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
   * @reject {Error|ServiceError} - The error object.
   */
  createPropertyDefinitionWithHttpOperationResponse(options?: { definition? : models.CreatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PropertyDefinition>>;

  /**
   * @summary Define a new property
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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PropertyDefinition} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PropertyDefinition} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDefinition} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createPropertyDefinition(options?: { definition? : models.CreatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.PropertyDefinition>;
  createPropertyDefinition(callback: ServiceCallback<models.PropertyDefinition>): void;
  createPropertyDefinition(options: { definition? : models.CreatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PropertyDefinition>): void;


  /**
   * @summary Retrieve the definition for the identified property
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
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertyDefinitionWithHttpOperationResponse(domain: string, scope: string, code: string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PropertyDefinition>>;

  /**
   * @summary Retrieve the definition for the identified property
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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PropertyDefinition} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PropertyDefinition} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDefinition} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDefinition(domain: string, scope: string, code: string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.PropertyDefinition>;
  getPropertyDefinition(domain: string, scope: string, code: string, callback: ServiceCallback<models.PropertyDefinition>): void;
  getPropertyDefinition(domain: string, scope: string, code: string, options: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PropertyDefinition>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  updatePropertyDefinitionWithHttpOperationResponse(domain: string, scope: string, code: string, options?: { definition? : models.UpdatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PropertyDefinition>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PropertyDefinition} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PropertyDefinition} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDefinition} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePropertyDefinition(domain: string, scope: string, code: string, options?: { definition? : models.UpdatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.PropertyDefinition>;
  updatePropertyDefinition(domain: string, scope: string, code: string, callback: ServiceCallback<models.PropertyDefinition>): void;
  updatePropertyDefinition(domain: string, scope: string, code: string, options: { definition? : models.UpdatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PropertyDefinition>): void;


  /**
   * @summary Delete the definition of the specified property
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
   * @reject {Error|ServiceError} - The error object.
   */
  deletePropertyDefinitionWithHttpOperationResponse(domain: string, scope: string, code: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Delete the definition of the specified property
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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePropertyDefinition(domain: string, scope: string, code: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePropertyDefinition(domain: string, scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePropertyDefinition(domain: string, scope: string, code: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getQuotesWithHttpOperationResponse(scope: string, options?: { quoteIds? : string[], effectiveAt? : Date, asAt? : Date, maxAge? : string, page? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfQuote>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfQuote} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfQuote} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfQuote} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getQuotes(scope: string, options?: { quoteIds? : string[], effectiveAt? : Date, asAt? : Date, maxAge? : string, page? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfQuote>;
  getQuotes(scope: string, callback: ServiceCallback<models.ResourceListOfQuote>): void;
  getQuotes(scope: string, options: { quoteIds? : string[], effectiveAt? : Date, asAt? : Date, maxAge? : string, page? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfQuote>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  upsertQuotesWithHttpOperationResponse(scope: string, options?: { quotes? : models.UpsertQuoteRequest[], effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UpsertQuotesResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {UpsertQuotesResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {UpsertQuotesResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertQuotesResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertQuotes(scope: string, options?: { quotes? : models.UpsertQuoteRequest[], effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.UpsertQuotesResponse>;
  upsertQuotes(scope: string, callback: ServiceCallback<models.UpsertQuotesResponse>): void;
  upsertQuotes(scope: string, options: { quotes? : models.UpsertQuoteRequest[], effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UpsertQuotesResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  deleteQuoteWithHttpOperationResponse(scope: string, options?: { id? : string, effectiveFrom? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeleteQuotesResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeleteQuotesResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeleteQuotesResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeleteQuotesResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteQuote(scope: string, options?: { id? : string, effectiveFrom? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.DeleteQuotesResponse>;
  deleteQuote(scope: string, callback: ServiceCallback<models.DeleteQuotesResponse>): void;
  deleteQuote(scope: string, options: { id? : string, effectiveFrom? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeleteQuotesResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  createReferencePortfolioWithHttpOperationResponse(scope: string, options?: { referencePortfolio? : models.CreateReferencePortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Portfolio>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Portfolio} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Portfolio} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Portfolio} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createReferencePortfolio(scope: string, options?: { referencePortfolio? : models.CreateReferencePortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.Portfolio>;
  createReferencePortfolio(scope: string, callback: ServiceCallback<models.Portfolio>): void;
  createReferencePortfolio(scope: string, options: { referencePortfolio? : models.CreateReferencePortfolioRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Portfolio>): void;


  /**
   * Get constituents
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfReferencePortfolioConstituent>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getReferencePortfolioConstituentsWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfReferencePortfolioConstituent>>;

  /**
   * Get constituents
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfReferencePortfolioConstituent} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfReferencePortfolioConstituent} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfReferencePortfolioConstituent}
   *                      for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getReferencePortfolioConstituents(scope: string, code: string, effectiveAt: Date|string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfReferencePortfolioConstituent>;
  getReferencePortfolioConstituents(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<models.ResourceListOfReferencePortfolioConstituent>): void;
  getReferencePortfolioConstituents(scope: string, code: string, effectiveAt: Date|string, options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfReferencePortfolioConstituent>): void;


  /**
   * @summary Add constituents
   *
   * Add constituents to the specified reference portfolio.
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.constituents]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertReferencePortfolioConstituentsResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertReferencePortfolioConstituentsWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { constituents? : models.ReferencePortfolioConstituentRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UpsertReferencePortfolioConstituentsResponse>>;

  /**
   * @summary Add constituents
   *
   * Add constituents to the specified reference portfolio.
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.constituents]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {UpsertReferencePortfolioConstituentsResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {UpsertReferencePortfolioConstituentsResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link
   *                      UpsertReferencePortfolioConstituentsResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertReferencePortfolioConstituents(scope: string, code: string, effectiveAt: Date|string, options?: { constituents? : models.ReferencePortfolioConstituentRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<models.UpsertReferencePortfolioConstituentsResponse>;
  upsertReferencePortfolioConstituents(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<models.UpsertReferencePortfolioConstituentsResponse>): void;
  upsertReferencePortfolioConstituents(scope: string, code: string, effectiveAt: Date|string, options: { constituents? : models.ReferencePortfolioConstituentRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UpsertReferencePortfolioConstituentsResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getResultsWithHttpOperationResponse(scope: string, key: string, dateParameter: Date|string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Results>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Results} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Results} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Results} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getResults(scope: string, key: string, dateParameter: Date|string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.Results>;
  getResults(scope: string, key: string, dateParameter: Date|string, callback: ServiceCallback<models.Results>): void;
  getResults(scope: string, key: string, dateParameter: Date|string, options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Results>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  upsertResultsWithHttpOperationResponse(scope: string, key: string, dateParameter: Date|string, options?: { request? : models.CreateResults, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Results>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Results} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Results} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Results} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertResults(scope: string, key: string, dateParameter: Date|string, options?: { request? : models.CreateResults, customHeaders? : { [headerName: string]: string; } }): Promise<models.Results>;
  upsertResults(scope: string, key: string, dateParameter: Date|string, callback: ServiceCallback<models.Results>): void;
  upsertResults(scope: string, key: string, dateParameter: Date|string, options: { request? : models.CreateResults, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Results>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregationByResultSetWithHttpOperationResponse(scope: string, resultsKey: string, options?: { request? : models.AggregationRequest, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ListAggregationResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ListAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ListAggregationResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ListAggregationResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByResultSet(scope: string, resultsKey: string, options?: { request? : models.AggregationRequest, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ListAggregationResponse>;
  getAggregationByResultSet(scope: string, resultsKey: string, callback: ServiceCallback<models.ListAggregationResponse>): void;
  getAggregationByResultSet(scope: string, resultsKey: string, options: { request? : models.AggregationRequest, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListAggregationResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  listEntitiesWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfString>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfString} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfString} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfString} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listEntities(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfString>;
  listEntities(callback: ServiceCallback<models.ResourceListOfString>): void;
  listEntities(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfString>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getEntitySchemaWithHttpOperationResponse(entity: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Schema>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Schema} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Schema} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Schema} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getEntitySchema(entity: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.Schema>;
  getEntitySchema(entity: string, callback: ServiceCallback<models.Schema>): void;
  getEntitySchema(entity: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Schema>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertySchemaWithHttpOperationResponse(options?: { propertyKeys? : string[], asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PropertySchema>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PropertySchema} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PropertySchema} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertySchema} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertySchema(options?: { propertyKeys? : string[], asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.PropertySchema>;
  getPropertySchema(callback: ServiceCallback<models.PropertySchema>): void;
  getPropertySchema(options: { propertyKeys? : string[], asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PropertySchema>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getValueTypesWithHttpOperationResponse(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfValueType>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfValueType} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfValueType} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfValueType} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getValueTypes(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfValueType>;
  getValueTypes(callback: ServiceCallback<models.ResourceListOfValueType>): void;
  getValueTypes(options: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfValueType>): void;


  /**
   * @summary Search portfolio groups
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
   * @reject {Error|ServiceError} - The error object.
   */
  portfolioGroupsSearchWithHttpOperationResponse(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPortfolioGroup>>;

  /**
   * @summary Search portfolio groups
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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPortfolioGroup} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPortfolioGroup} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPortfolioGroup} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  portfolioGroupsSearch(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPortfolioGroup>;
  portfolioGroupsSearch(callback: ServiceCallback<models.ResourceListOfPortfolioGroup>): void;
  portfolioGroupsSearch(options: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPortfolioGroup>): void;


  /**
   * @summary Search portfolios
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
   * @reject {Error|ServiceError} - The error object.
   */
  portfoliosSearchWithHttpOperationResponse(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPortfolioSearchResult>>;

  /**
   * @summary Search portfolios
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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPortfolioSearchResult} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPortfolioSearchResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPortfolioSearchResult} for
   *                      more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  portfoliosSearch(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPortfolioSearchResult>;
  portfoliosSearch(callback: ServiceCallback<models.ResourceListOfPortfolioSearchResult>): void;
  portfoliosSearch(options: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPortfolioSearchResult>): void;


  /**
   * @summary Search property definitions
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
   * @reject {Error|ServiceError} - The error object.
   */
  propertiesSearchWithHttpOperationResponse(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPropertyDefinition>>;

  /**
   * @summary Search property definitions
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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPropertyDefinition} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPropertyDefinition} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPropertyDefinition} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  propertiesSearch(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPropertyDefinition>;
  propertiesSearch(callback: ServiceCallback<models.ResourceListOfPropertyDefinition>): void;
  propertiesSearch(options: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPropertyDefinition>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  listConfigurationTransactionTypesWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfTransactionMetaData>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfTransactionMetaData} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfTransactionMetaData} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfTransactionMetaData} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listConfigurationTransactionTypes(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfTransactionMetaData>;
  listConfigurationTransactionTypes(callback: ServiceCallback<models.ResourceListOfTransactionMetaData>): void;
  listConfigurationTransactionTypes(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfTransactionMetaData>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  setConfigurationTransactionTypesWithHttpOperationResponse(options?: { types? : models.TransactionConfigurationDataRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfTransactionMetaData>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfTransactionMetaData} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfTransactionMetaData} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfTransactionMetaData} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  setConfigurationTransactionTypes(options?: { types? : models.TransactionConfigurationDataRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfTransactionMetaData>;
  setConfigurationTransactionTypes(callback: ServiceCallback<models.ResourceListOfTransactionMetaData>): void;
  setConfigurationTransactionTypes(options: { types? : models.TransactionConfigurationDataRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfTransactionMetaData>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  createConfigurationTransactionTypeWithHttpOperationResponse(options?: { type? : models.TransactionConfigurationDataRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.TransactionConfigurationData>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {TransactionConfigurationData} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {TransactionConfigurationData} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TransactionConfigurationData} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createConfigurationTransactionType(options?: { type? : models.TransactionConfigurationDataRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.TransactionConfigurationData>;
  createConfigurationTransactionType(callback: ServiceCallback<models.TransactionConfigurationData>): void;
  createConfigurationTransactionType(options: { type? : models.TransactionConfigurationDataRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TransactionConfigurationData>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  createPortfolioWithHttpOperationResponse(scope: string, options?: { createRequest? : models.CreateTransactionPortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Portfolio>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Portfolio} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Portfolio} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Portfolio} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createPortfolio(scope: string, options?: { createRequest? : models.CreateTransactionPortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.Portfolio>;
  createPortfolio(scope: string, callback: ServiceCallback<models.Portfolio>): void;
  createPortfolio(scope: string, options: { createRequest? : models.CreateTransactionPortfolioRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Portfolio>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getDetailsWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioDetails>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioDetails} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioDetails} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDetails} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getDetails(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioDetails>;
  getDetails(scope: string, code: string, callback: ServiceCallback<models.PortfolioDetails>): void;
  getDetails(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioDetails>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  upsertPortfolioDetailsWithHttpOperationResponse(scope: string, code: string, options?: { details? : models.CreatePortfolioDetails, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioDetails>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioDetails} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioDetails} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDetails} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPortfolioDetails(scope: string, code: string, options?: { details? : models.CreatePortfolioDetails, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioDetails>;
  upsertPortfolioDetails(scope: string, code: string, callback: ServiceCallback<models.PortfolioDetails>): void;
  upsertPortfolioDetails(scope: string, code: string, options: { details? : models.CreatePortfolioDetails, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioDetails>): void;


  /**
   * @summary Upsert executions
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
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
   * @reject {Error|ServiceError} - The error object.
   */
  upsertExecutionsWithHttpOperationResponse(scope: string, code: string, options?: { executions? : models.ExecutionRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UpsertPortfolioExecutionsResponse>>;

  /**
   * @summary Upsert executions
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.executions] The executions to be updated
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {UpsertPortfolioExecutionsResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {UpsertPortfolioExecutionsResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertPortfolioExecutionsResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertExecutions(scope: string, code: string, options?: { executions? : models.ExecutionRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<models.UpsertPortfolioExecutionsResponse>;
  upsertExecutions(scope: string, code: string, callback: ServiceCallback<models.UpsertPortfolioExecutionsResponse>): void;
  upsertExecutions(scope: string, code: string, options: { executions? : models.ExecutionRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UpsertPortfolioExecutionsResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getHoldingsWithHttpOperationResponse(scope: string, code: string, options?: { byTaxlots? : boolean, effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, instrumentPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.VersionedResourceListOfHolding>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {VersionedResourceListOfHolding} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {VersionedResourceListOfHolding} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link VersionedResourceListOfHolding} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getHoldings(scope: string, code: string, options?: { byTaxlots? : boolean, effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, instrumentPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.VersionedResourceListOfHolding>;
  getHoldings(scope: string, code: string, callback: ServiceCallback<models.VersionedResourceListOfHolding>): void;
  getHoldings(scope: string, code: string, options: { byTaxlots? : boolean, effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, instrumentPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.VersionedResourceListOfHolding>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  setHoldingsWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { holdingAdjustments? : models.AdjustHoldingRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AdjustHolding>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {AdjustHolding} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {AdjustHolding} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AdjustHolding} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  setHoldings(scope: string, code: string, effectiveAt: Date|string, options?: { holdingAdjustments? : models.AdjustHoldingRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<models.AdjustHolding>;
  setHoldings(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<models.AdjustHolding>): void;
  setHoldings(scope: string, code: string, effectiveAt: Date|string, options: { holdingAdjustments? : models.AdjustHoldingRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AdjustHolding>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  adjustHoldingsWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { holdingAdjustments? : models.AdjustHoldingRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AdjustHolding>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {AdjustHolding} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {AdjustHolding} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AdjustHolding} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  adjustHoldings(scope: string, code: string, effectiveAt: Date|string, options?: { holdingAdjustments? : models.AdjustHoldingRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<models.AdjustHolding>;
  adjustHoldings(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<models.AdjustHolding>): void;
  adjustHoldings(scope: string, code: string, effectiveAt: Date|string, options: { holdingAdjustments? : models.AdjustHoldingRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AdjustHolding>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  cancelAdjustHoldingsWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  cancelAdjustHoldings(scope: string, code: string, effectiveAt: Date|string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  cancelAdjustHoldings(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  cancelAdjustHoldings(scope: string, code: string, effectiveAt: Date|string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  listHoldingsAdjustmentsWithHttpOperationResponse(scope: string, code: string, options?: { fromEffectiveAt? : Date, toEffectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfHoldingsAdjustmentHeader>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfHoldingsAdjustmentHeader} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfHoldingsAdjustmentHeader} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfHoldingsAdjustmentHeader} for
   *                      more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listHoldingsAdjustments(scope: string, code: string, options?: { fromEffectiveAt? : Date, toEffectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfHoldingsAdjustmentHeader>;
  listHoldingsAdjustments(scope: string, code: string, callback: ServiceCallback<models.ResourceListOfHoldingsAdjustmentHeader>): void;
  listHoldingsAdjustments(scope: string, code: string, options: { fromEffectiveAt? : Date, toEffectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfHoldingsAdjustmentHeader>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getHoldingsAdjustmentWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.HoldingsAdjustment>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {HoldingsAdjustment} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {HoldingsAdjustment} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link HoldingsAdjustment} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getHoldingsAdjustment(scope: string, code: string, effectiveAt: Date|string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.HoldingsAdjustment>;
  getHoldingsAdjustment(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<models.HoldingsAdjustment>): void;
  getHoldingsAdjustment(scope: string, code: string, effectiveAt: Date|string, options: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.HoldingsAdjustment>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  getTransactionsWithHttpOperationResponse(scope: string, code: string, options?: { fromTransactionDate? : Date, toTransactionDate? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, instrumentPropertyKeys? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.VersionedResourceListOfTransaction>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {VersionedResourceListOfTransaction} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {VersionedResourceListOfTransaction} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link VersionedResourceListOfTransaction} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getTransactions(scope: string, code: string, options?: { fromTransactionDate? : Date, toTransactionDate? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, instrumentPropertyKeys? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.VersionedResourceListOfTransaction>;
  getTransactions(scope: string, code: string, callback: ServiceCallback<models.VersionedResourceListOfTransaction>): void;
  getTransactions(scope: string, code: string, options: { fromTransactionDate? : Date, toTransactionDate? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, instrumentPropertyKeys? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.VersionedResourceListOfTransaction>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  upsertTransactionsWithHttpOperationResponse(scope: string, code: string, options?: { transactions? : models.TransactionRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UpsertPortfolioTransactionsResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {UpsertPortfolioTransactionsResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {UpsertPortfolioTransactionsResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertPortfolioTransactionsResponse} for
   *                      more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertTransactions(scope: string, code: string, options?: { transactions? : models.TransactionRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<models.UpsertPortfolioTransactionsResponse>;
  upsertTransactions(scope: string, code: string, callback: ServiceCallback<models.UpsertPortfolioTransactionsResponse>): void;
  upsertTransactions(scope: string, code: string, options: { transactions? : models.TransactionRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UpsertPortfolioTransactionsResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  deleteTransactionsWithHttpOperationResponse(scope: string, code: string, options?: { transactionIds? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteTransactions(scope: string, code: string, options?: { transactionIds? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deleteTransactions(scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deleteTransactions(scope: string, code: string, options: { transactionIds? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  addTransactionPropertyWithHttpOperationResponse(scope: string, code: string, transactionId: string, options?: { transactionProperties? : { [propertyName: string]: models.PerpetualPropertyValue }, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AddTransactionPropertyResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {AddTransactionPropertyResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {AddTransactionPropertyResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AddTransactionPropertyResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  addTransactionProperty(scope: string, code: string, transactionId: string, options?: { transactionProperties? : { [propertyName: string]: models.PerpetualPropertyValue }, customHeaders? : { [headerName: string]: string; } }): Promise<models.AddTransactionPropertyResponse>;
  addTransactionProperty(scope: string, code: string, transactionId: string, callback: ServiceCallback<models.AddTransactionPropertyResponse>): void;
  addTransactionProperty(scope: string, code: string, transactionId: string, options: { transactionProperties? : { [propertyName: string]: models.PerpetualPropertyValue }, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AddTransactionPropertyResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  deletePropertyFromTransactionWithHttpOperationResponse(scope: string, code: string, transactionId: string, options?: { transactionPropertyKey? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePropertyFromTransaction(scope: string, code: string, transactionId: string, options?: { transactionPropertyKey? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePropertyFromTransaction(scope: string, code: string, transactionId: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePropertyFromTransaction(scope: string, code: string, transactionId: string, options: { transactionPropertyKey? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


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
   * @reject {Error|ServiceError} - The error object.
   */
  buildTransactionsWithHttpOperationResponse(scope: string, code: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, instrumentPropertyKeys? : string[], filter? : string, parameters? : models.TransactionQueryParameters, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.VersionedResourceListOfOutputTransaction>>;

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
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {VersionedResourceListOfOutputTransaction} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {VersionedResourceListOfOutputTransaction} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link VersionedResourceListOfOutputTransaction}
   *                      for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  buildTransactions(scope: string, code: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, instrumentPropertyKeys? : string[], filter? : string, parameters? : models.TransactionQueryParameters, customHeaders? : { [headerName: string]: string; } }): Promise<models.VersionedResourceListOfOutputTransaction>;
  buildTransactions(scope: string, code: string, callback: ServiceCallback<models.VersionedResourceListOfOutputTransaction>): void;
  buildTransactions(scope: string, code: string, options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, instrumentPropertyKeys? : string[], filter? : string, parameters? : models.TransactionQueryParameters, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.VersionedResourceListOfOutputTransaction>): void;
}

export { LUSIDAPI, models as LUSIDAPIModels };
