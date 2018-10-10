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
   * @summary List all analytic stores in client
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
   * @param {string} [options.filter]
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
   * @summary List all analytic stores in client
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
   * @param {string} [options.filter]
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
   * @summary Create a new analytic store for the given scope for the given date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A valid and fully populated analytic store
   * creation request
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
   * @summary Create a new analytic store for the given scope for the given date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A valid and fully populated analytic store
   * creation request
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
   * @summary Get an analytic store
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
   * @param {date} [options.asAt] AsAt date
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
   * @summary Get an analytic store
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
   * @param {date} [options.asAt] AsAt date
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
   * @summary Create a new analytic store for the given scope for the given date
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
   * @summary Create a new analytic store for the given scope for the given date
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
   * @summary Insert analytics into an existing analytic store for the given
   * scope and date.
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
   * @param {array} [options.data]
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
  insertAnalyticsWithHttpOperationResponse(scope: string, year: number, month: number, day: number, options?: { data? : models.InstrumentAnalytic[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AnalyticStore>>;

  /**
   * @summary Insert analytics into an existing analytic store for the given
   * scope and date.
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
   * @param {array} [options.data]
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
  insertAnalytics(scope: string, year: number, month: number, day: number, options?: { data? : models.InstrumentAnalytic[], customHeaders? : { [headerName: string]: string; } }): Promise<models.AnalyticStore>;
  insertAnalytics(scope: string, year: number, month: number, day: number, callback: ServiceCallback<models.AnalyticStore>): void;
  insertAnalytics(scope: string, year: number, month: number, day: number, options: { data? : models.InstrumentAnalytic[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AnalyticStore>): void;


  /**
   * @summary Gets a corporate action based on dates
   *
   * @param {string} scope Scope
   *
   * @param {string} code Corporate action source id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective Date
   *
   * @param {date} [options.asAt] AsAt Date filter
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
   * @summary Gets a corporate action based on dates
   *
   * @param {string} scope Scope
   *
   * @param {string} code Corporate action source id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective Date
   *
   * @param {date} [options.asAt] AsAt Date filter
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
   * @summary Attempt to create/update one or more corporate action. Failed
   * actions will be identified in the body of the response.
   *
   * @param {string} scope The intended scope of the corporate action
   *
   * @param {string} code Source of the corporate action
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.actions] The corporate actions to create
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
   * @summary Attempt to create/update one or more corporate action. Failed
   * actions will be identified in the body of the response.
   *
   * @param {string} scope The intended scope of the corporate action
   *
   * @param {string} code Source of the corporate action
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.actions] The corporate actions to create
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
   * @summary Create a new PropertyDataFormat. Note: Only non-default formats can
   * be created.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The definition of the new format
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
   * 'Currency', 'UserId', 'MetricValue'
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
   * @summary Create a new PropertyDataFormat. Note: Only non-default formats can
   * be created.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The definition of the new format
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
   * 'Currency', 'UserId', 'MetricValue'
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
   * @summary Lists all property data formats in the specified scope.
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {boolean} [options.includeDefault]
   *
   * @param {boolean} [options.includeSystem]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
   * @summary Lists all property data formats in the specified scope.
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {boolean} [options.includeDefault]
   *
   * @param {boolean} [options.includeSystem]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
   * @summary Gets a property data format.
   *
   * @param {string} scope
   *
   * @param {string} name
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
  getDataTypeWithHttpOperationResponse(scope: string, name: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DataType>>;

  /**
   * @summary Gets a property data format.
   *
   * @param {string} scope
   *
   * @param {string} name
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
  getDataType(scope: string, name: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DataType>;
  getDataType(scope: string, name: string, callback: ServiceCallback<models.DataType>): void;
  getDataType(scope: string, name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataType>): void;


  /**
   * @summary Update a PropertyDataFormat. Note: Only non-default formats can be
   * updated.
   *
   * @param {string} scope The scope of the format being updated
   *
   * @param {string} name The name of the format to update
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The new definition of the format
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
   * 'Currency', 'UserId', 'MetricValue'
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
  updateDataTypeWithHttpOperationResponse(scope: string, name: string, options?: { request? : models.UpdateDataTypeRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DataType>>;

  /**
   * @summary Update a PropertyDataFormat. Note: Only non-default formats can be
   * updated.
   *
   * @param {string} scope The scope of the format being updated
   *
   * @param {string} name The name of the format to update
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The new definition of the format
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
   * 'Currency', 'UserId', 'MetricValue'
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
  updateDataType(scope: string, name: string, options?: { request? : models.UpdateDataTypeRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.DataType>;
  updateDataType(scope: string, name: string, callback: ServiceCallback<models.DataType>): void;
  updateDataType(scope: string, name: string, options: { request? : models.UpdateDataTypeRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataType>): void;


  /**
   * @summary Return the definitions for the specified list of units
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.units]
   *
   * @param {string} [options.filter]
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
  getUnitsFromDataTypeWithHttpOperationResponse(scope: string, name: string, options?: { units? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.IUnitDefinition>>;

  /**
   * @summary Return the definitions for the specified list of units
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.units]
   *
   * @param {string} [options.filter]
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
  getUnitsFromDataType(scope: string, name: string, options?: { units? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.IUnitDefinition>;
  getUnitsFromDataType(scope: string, name: string, callback: ServiceCallback<models.IUnitDefinition>): void;
  getUnitsFromDataType(scope: string, name: string, options: { units? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IUnitDefinition>): void;


  /**
   * @summary Create derived portfolio
   *
   * Creates a portfolio that derives from an existing portfolio
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
   * @summary Create derived portfolio
   *
   * Creates a portfolio that derives from an existing portfolio
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
   * Deletes the portfolio details for the given code
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
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
   * Deletes the portfolio details for the given code
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
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
   * @summary Attempt to create one or more client instruments. Failed
   * instruments will be identified in the body of the response.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.definitions]
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
  batchAddClientInstrumentsWithHttpOperationResponse(options?: { definitions? : models.CreateClientInstrumentRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.TryAddClientInstruments>>;

  /**
   * @summary Attempt to create one or more client instruments. Failed
   * instruments will be identified in the body of the response.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.definitions]
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
  batchAddClientInstruments(options?: { definitions? : models.CreateClientInstrumentRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<models.TryAddClientInstruments>;
  batchAddClientInstruments(callback: ServiceCallback<models.TryAddClientInstruments>): void;
  batchAddClientInstruments(options: { definitions? : models.CreateClientInstrumentRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TryAddClientInstruments>): void;


  /**
   * @summary Attempt to delete one or more client instruments. Failed
   * instruments will be identified in the body of the response.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.uids]
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
   * @summary Attempt to delete one or more client instruments. Failed
   * instruments will be identified in the body of the response.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.uids]
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
   * @summary Get an individual instrument by the unique instrument uid.
   * Optionally, decorate each instrument with specific properties.
   *
   * @param {string} uid The uid of the requested instrument
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.instrumentPropertyKeys] Keys of the properties to be
   * retrieved
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
   * @summary Get an individual instrument by the unique instrument uid.
   * Optionally, decorate each instrument with specific properties.
   *
   * @param {string} uid The uid of the requested instrument
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.instrumentPropertyKeys] Keys of the properties to be
   * retrieved
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
   * @summary Lookup a large number of instruments by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each instrument with specific
   * properties.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.codeType] The type of identifier. Possible values
   * include: 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip',
   * 'Ticker', 'ClientInternal', 'Figi', 'CompositeFigi', 'ShareClassFigi',
   * 'Wertpapier'
   *
   * @param {array} [options.codes] An array of codes
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.instrumentPropertyKeys] Keys of the properties to be
   * retrieved
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
   * @summary Lookup a large number of instruments by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each instrument with specific
   * properties.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.codeType] The type of identifier. Possible values
   * include: 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip',
   * 'Ticker', 'ClientInternal', 'Figi', 'CompositeFigi', 'ShareClassFigi',
   * 'Wertpapier'
   *
   * @param {array} [options.codes] An array of codes
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.instrumentPropertyKeys] Keys of the properties to be
   * retrieved
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
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.classifications]
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
  batchUpsertInstrumentPropertiesWithHttpOperationResponse(options?: { classifications? : models.InstrumentProperty[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UpsertInstrumentPropertiesResponse>>;

  /**
   * @summary Upsert instrument properties
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.classifications]
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
  batchUpsertInstrumentProperties(options?: { classifications? : models.InstrumentProperty[], customHeaders? : { [headerName: string]: string; } }): Promise<models.UpsertInstrumentPropertiesResponse>;
  batchUpsertInstrumentProperties(callback: ServiceCallback<models.UpsertInstrumentPropertiesResponse>): void;
  batchUpsertInstrumentProperties(options: { classifications? : models.InstrumentProperty[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UpsertInstrumentPropertiesResponse>): void;


  /**
   * @summary Get the unique identifier for the SAML Identity Provider to be used
   * by domain.
   *
   * @param {string} domain The domain that the user will be logging in to.
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
   * @summary Get the unique identifier for the SAML Identity Provider to be used
   * by domain.
   *
   * @param {string} domain The domain that the user will be logging in to.
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
   * @summary Request an authorised url for an Excel client version
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
  getExcelDownloadUrlWithHttpOperationResponse(options?: { version? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<string>>;

  /**
   * @summary Request an authorised url for an Excel client version
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
  getExcelDownloadUrl(options?: { version? : string, customHeaders? : { [headerName: string]: string; } }): Promise<string>;
  getExcelDownloadUrl(callback: ServiceCallback<string>): void;
  getExcelDownloadUrl(options: { version? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string>): void;


  /**
   * @summary Returns the current major application version
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
   * @summary Returns the current major application version
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
   * @summary Get a personalisation, recursing to get any referenced if required.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.pattern] The search pattern or specific key
   *
   * @param {string} [options.scope] The scope level to request for. Possible
   * values include: 'User', 'Group', 'Default', 'All'
   *
   * @param {boolean} [options.recursive] Whether to recurse into dereference
   * recursive settings
   *
   * @param {boolean} [options.wildcards] Whether to apply wildcards to the
   * provided pattern and pull back any matching
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
   * @resolve {HttpOperationResponse<ResourceListOfPersonalisation>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPersonalisationsWithHttpOperationResponse(options?: { pattern? : string, scope? : string, recursive? : boolean, wildcards? : boolean, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPersonalisation>>;

  /**
   * @summary Get a personalisation, recursing to get any referenced if required.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.pattern] The search pattern or specific key
   *
   * @param {string} [options.scope] The scope level to request for. Possible
   * values include: 'User', 'Group', 'Default', 'All'
   *
   * @param {boolean} [options.recursive] Whether to recurse into dereference
   * recursive settings
   *
   * @param {boolean} [options.wildcards] Whether to apply wildcards to the
   * provided pattern and pull back any matching
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
   * @summary Upsert one or more personalisations
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
   * @summary Upsert one or more personalisations
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
   * @summary Delete a personalisation at a specific scope (or use scope ALL to
   * purge the setting entirely)
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.key] The key of the setting to be deleted
   *
   * @param {string} [options.scope] The scope to delete at (use ALL to purge the
   * setting entirely). Possible values include: 'User', 'Group', 'Default',
   * 'All'
   *
   * @param {string} [options.group] If deleting a setting at group level,
   * specify the group here
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
   * @summary Delete a personalisation at a specific scope (or use scope ALL to
   * purge the setting entirely)
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.key] The key of the setting to be deleted
   *
   * @param {string} [options.scope] The scope to delete at (use ALL to purge the
   * setting entirely). Possible values include: 'User', 'Group', 'Default',
   * 'All'
   *
   * @param {string} [options.group] If deleting a setting at group level,
   * specify the group here
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
   * @summary List all groups in a specified scope
   *
   * @param {string} scope
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
   * @param {string} [options.filter] A filter expression to apply to the result
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
   * @summary List all groups in a specified scope
   *
   * @param {string} scope
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
   * @param {string} [options.filter] A filter expression to apply to the result
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
   * @summary Create a new group
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @summary Create a new group
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @summary Get an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
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
   * @summary Get an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
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
   * @summary Update an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @summary Update an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @summary Delete a group
   *
   * @param {string} scope
   *
   * @param {string} code
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
   * @summary Delete a group
   *
   * @param {string} scope
   *
   * @param {string} code
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
   * @summary Aggregate data in a group hierarchy
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @resolve {HttpOperationResponse<ListAggregationResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregationByGroupWithHttpOperationResponse(scope: string, code: string, options?: { request? : models.AggregationRequest, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ListAggregationResponse>>;

  /**
   * @summary Aggregate data in a group hierarchy
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @summary Obsolete - Aggregation request data in a group hierarchy into a
   * data tree
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @summary Obsolete - Aggregation request data in a group hierarchy into a
   * data tree
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @summary Gets all commands that modified the portfolio groups(s) with the
   * specified id.
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The portfolio group id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt] Filters commands by those that were
   * processed at or after this time. Null means there is no lower limit.
   *
   * @param {date} [options.toAsAt] Filters commands by those that were processed
   * at or before this time. Null means there is no upper limit (latest).
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter] A filter expression to apply to the result
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
   * @summary Gets all commands that modified the portfolio groups(s) with the
   * specified id.
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The portfolio group id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt] Filters commands by those that were
   * processed at or after this time. Null means there is no lower limit.
   *
   * @param {date} [options.toAsAt] Filters commands by those that were processed
   * at or before this time. Null means there is no upper limit (latest).
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter] A filter expression to apply to the result
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
   * @summary Get a full expansion of an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.propertyFilter]
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
   * @summary Get a full expansion of an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.propertyFilter]
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
   * @summary Add a portfolio to an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.identifier]
   *
   * @param {string} [options.identifier.scope]
   *
   * @param {string} [options.identifier.code]
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
  addPortfolioToGroupWithHttpOperationResponse(scope: string, code: string, options?: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioGroup>>;

  /**
   * @summary Add a portfolio to an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.identifier]
   *
   * @param {string} [options.identifier.scope]
   *
   * @param {string} [options.identifier.code]
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
  addPortfolioToGroup(scope: string, code: string, options?: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioGroup>;
  addPortfolioToGroup(scope: string, code: string, callback: ServiceCallback<models.PortfolioGroup>): void;
  addPortfolioToGroup(scope: string, code: string, options: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioGroup>): void;


  /**
   * @summary Remove a portfolio that is currently present within an existing
   * group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {string} portfolioScope
   *
   * @param {string} portfolioCode
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
   * @summary Remove a portfolio that is currently present within an existing
   * group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {string} portfolioScope
   *
   * @param {string} portfolioCode
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
   * @summary Add a sub group to an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.identifier]
   *
   * @param {string} [options.identifier.scope]
   *
   * @param {string} [options.identifier.code]
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
  addSubGroupToGroupWithHttpOperationResponse(scope: string, code: string, options?: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioGroup>>;

  /**
   * @summary Add a sub group to an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.identifier]
   *
   * @param {string} [options.identifier.scope]
   *
   * @param {string} [options.identifier.code]
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
  addSubGroupToGroup(scope: string, code: string, options?: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioGroup>;
  addSubGroupToGroup(scope: string, code: string, callback: ServiceCallback<models.PortfolioGroup>): void;
  addSubGroupToGroup(scope: string, code: string, options: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioGroup>): void;


  /**
   * @summary Remove a subgroup that is currently present within an existing
   * group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {string} subgroupScope
   *
   * @param {string} subgroupCode
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
   * @summary Remove a subgroup that is currently present within an existing
   * group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {string} subgroupScope
   *
   * @param {string} subgroupCode
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
   * @summary List scopes that contain portfolios
   *
   * Lists all scopes that have previously been used
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy] How to order the returned scopes
   *
   * @param {number} [options.start] The starting index for the returned scopes
   *
   * @param {number} [options.limit] The final index for the returned scopes
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
   * @summary List scopes that contain portfolios
   *
   * Lists all scopes that have previously been used
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy] How to order the returned scopes
   *
   * @param {number} [options.start] The starting index for the returned scopes
   *
   * @param {number} [options.limit] The final index for the returned scopes
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
   * @summary Get all portfolios
   *
   * Get all portfolios in a scope
   *
   * @param {string} scope The scope to get portfolios from
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {string} [options.filter]
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
   * @summary Get all portfolios
   *
   * Get all portfolios in a scope
   *
   * @param {string} scope The scope to get portfolios from
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {string} [options.filter]
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
   * @summary Get portfolio
   *
   * Gets a single portfolio by code
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
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
   * @summary Get portfolio
   *
   * Gets a single portfolio by code
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
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
   * @summary Update portfolio
   *
   * @param {string} scope The scope of the portfolio to be updated
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The update request
   *
   * @param {string} options.request.displayName
   *
   * @param {string} [options.request.description]
   *
   * @param {date} [options.request.created]
   *
   * @param {date} [options.effectiveAt] The effective date for the change
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
   * @summary Update portfolio
   *
   * @param {string} scope The scope of the portfolio to be updated
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The update request
   *
   * @param {string} options.request.displayName
   *
   * @param {string} [options.request.description]
   *
   * @param {date} [options.request.created]
   *
   * @param {date} [options.effectiveAt] The effective date for the change
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
   * Deletes a portfolio from the given effectiveAt
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
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
   * Deletes a portfolio from the given effectiveAt
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @resolve {HttpOperationResponse<ListAggregationResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregationByPortfolioWithHttpOperationResponse(scope: string, code: string, options?: { request? : models.AggregationRequest, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ListAggregationResponse>>;

  /**
   * @summary Aggregate data in a portfolio
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @summary Get modifications
   *
   * Gets all commands that modified the portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The portfolio id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt] Filters commands by those that were
   * processed at or after this time. Null means there is no lower limit.
   *
   * @param {date} [options.toAsAt] Filters commands by those that were processed
   * at or before this time. Null means there is no upper limit (latest).
   *
   * @param {string} [options.filter] Command filter
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
  getPortfolioCommandsWithHttpOperationResponse(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfProcessedCommand>>;

  /**
   * @summary Get modifications
   *
   * Gets all commands that modified the portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The portfolio id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt] Filters commands by those that were
   * processed at or after this time. Null means there is no lower limit.
   *
   * @param {date} [options.toAsAt] Filters commands by those that were processed
   * at or before this time. Null means there is no upper limit (latest).
   *
   * @param {string} [options.filter] Command filter
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
  getPortfolioCommands(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfProcessedCommand>;
  getPortfolioCommands(scope: string, code: string, callback: ServiceCallback<models.ResourceListOfProcessedCommand>): void;
  getPortfolioCommands(scope: string, code: string, options: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfProcessedCommand>): void;


  /**
   * @summary Get properties
   *
   * Get properties attached to the portfolio.  If the asAt is not specified then
   * the latest system time is used
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
   *
   * @param {array} [options.sortBy] Property to sort the results by
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
   * @resolve {HttpOperationResponse<PortfolioProperties>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioPropertiesWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioProperties>>;

  /**
   * @summary Get properties
   *
   * Get properties attached to the portfolio.  If the asAt is not specified then
   * the latest system time is used
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
   *
   * @param {array} [options.sortBy] Property to sort the results by
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
   * @summary Update properties
   *
   * Create one or more properties on a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolioProperties]
   *
   * @param {date} [options.effectiveAt] The effective date for the change
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
   * @summary Update properties
   *
   * Create one or more properties on a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolioProperties]
   *
   * @param {date} [options.effectiveAt] The effective date for the change
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
   * @summary Delete one, many or all properties from a portfolio for a specified
   * effective date
   *
   * Specifying no properties will delete all properties
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {array} [options.portfolioPropertyKeys] The keys of the property to
   * be deleted. None specified indicates the intent to delete all properties
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
   * @summary Delete one, many or all properties from a portfolio for a specified
   * effective date
   *
   * Specifying no properties will delete all properties
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {array} [options.portfolioPropertyKeys] The keys of the property to
   * be deleted. None specified indicates the intent to delete all properties
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
   * @summary Perform a reconciliation between two portfolios
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {object} options.request.left
   *
   * @param {object} options.request.right
   *
   * @param {object} options.request.right.portfolioId
   *
   * @param {string} [options.request.right.portfolioId.scope]
   *
   * @param {string} [options.request.right.portfolioId.code]
   *
   * @param {date} options.request.right.effectiveAt
   *
   * @param {date} [options.request.right.asAt]
   *
   * @param {array} options.request.instrumentPropertyKeys
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
   * @summary Perform a reconciliation between two portfolios
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {object} options.request.left
   *
   * @param {object} options.request.right
   *
   * @param {object} options.request.right.portfolioId
   *
   * @param {string} [options.request.right.portfolioId.scope]
   *
   * @param {string} [options.request.right.portfolioId.code]
   *
   * @param {date} options.request.right.effectiveAt
   *
   * @param {date} [options.request.right.asAt]
   *
   * @param {array} options.request.instrumentPropertyKeys
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
   * @summary Gets multiple property definitions.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.keys]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
  getMultiplePropertyDefinitionsWithHttpOperationResponse(options?: { keys? : string[], asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPropertyDefinition>>;

  /**
   * @summary Gets multiple property definitions.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.keys]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
  getMultiplePropertyDefinitions(options?: { keys? : string[], asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPropertyDefinition>;
  getMultiplePropertyDefinitions(callback: ServiceCallback<models.ResourceListOfPropertyDefinition>): void;
  getMultiplePropertyDefinitions(options: { keys? : string[], asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPropertyDefinition>): void;


  /**
   * @summary Creates a new property definition.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition]
   *
   * @param {string} [options.definition.domain] Possible values include:
   * 'Trade', 'Portfolio', 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
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
   * @summary Creates a new property definition.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition]
   *
   * @param {string} [options.definition.domain] Possible values include:
   * 'Trade', 'Portfolio', 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
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
   * @summary Gets a property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
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
   * @summary Gets a property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
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
   * @summary Updates the specified property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition]
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
   * @summary Updates the specified property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition]
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
   * @summary Deletes the property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} code
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
   * @summary Deletes the property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} code
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
   * @summary Create a new reference portfolio
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
   * @summary Create a new reference portfolio
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
   * @summary Get all the constituents in a reference portfolio
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
   * @summary Get all the constituents in a reference portfolio
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
   * @summary Add constituents to a specific reference portfolio
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
   * @summary Add constituents to a specific reference portfolio
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
   * @summary Retrieve some previously stored results
   *
   * @param {string} scope The scope of the data
   *
   * @param {string} key The key that identifies the data
   *
   * @param {date} dateParameter The date for which the data was loaded
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
   * @resolve {HttpOperationResponse<Results>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getResultsWithHttpOperationResponse(scope: string, key: string, dateParameter: Date|string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Results>>;

  /**
   * @summary Retrieve some previously stored results
   *
   * @param {string} scope The scope of the data
   *
   * @param {string} key The key that identifies the data
   *
   * @param {date} dateParameter The date for which the data was loaded
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
   * @summary Upsert precalculated results against a specified scope/key/date
   * combination
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
   * @summary Upsert precalculated results against a specified scope/key/date
   * combination
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
   * @summary Aggregate data from a result set
   *
   * @param {string} scope
   *
   * @param {string} resultsKey
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @resolve {HttpOperationResponse<ListAggregationResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregationByResultSetWithHttpOperationResponse(scope: string, resultsKey: string, options?: { request? : models.AggregationRequest, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ListAggregationResponse>>;

  /**
   * @summary Aggregate data from a result set
   *
   * @param {string} scope
   *
   * @param {string} resultsKey
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @summary List all available entities
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
   * @summary List all available entities
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
   * @summary Gets the schema for a given entity.
   *
   * @param {string} entity
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
   * @summary Gets the schema for a given entity.
   *
   * @param {string} entity
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
   * @summary Get the schemas for the provided list of property keys
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.propertyKeys] A comma delimited list of property
   * keys in string format. e.g.
   * "Portfolio/default/PropertyName,Portfolio/differentScope/MyProperty"
   *
   * @param {date} [options.asAt]
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
   * @summary Get the schemas for the provided list of property keys
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.propertyKeys] A comma delimited list of property
   * keys in string format. e.g.
   * "Portfolio/default/PropertyName,Portfolio/differentScope/MyProperty"
   *
   * @param {date} [options.asAt]
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
   * @summary Gets the available value types that could be returned in a schema
   *
   * @param {object} [options] Optional Parameters.
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
   * @resolve {HttpOperationResponse<ResourceListOfValueType>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getValueTypesWithHttpOperationResponse(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfValueType>>;

  /**
   * @summary Gets the available value types that could be returned in a schema
   *
   * @param {object} [options] Optional Parameters.
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
   * @param {object} [options.request]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
   * @param {object} [options.request]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
   * @param {object} [options.request]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
   * @param {object} [options.request]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
   * @summary Search properties
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
   * @summary Search properties
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
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
   * @summary Gets the list of persisted transaction types
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
   * @summary Gets the list of persisted transaction types
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
   * @summary Uploads a list of transaction types to be used by the movements
   * engine
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.types]
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
   * @summary Uploads a list of transaction types to be used by the movements
   * engine
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.types]
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
   * @summary Adds a new transaction type movement to the list of existing types
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.type]
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
   * @summary Adds a new transaction type movement to the list of existing types
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.type]
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
   * @summary Create portfolio
   *
   * Creates a new portfolio
   *
   * @param {string} scope The intended scope of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.createRequest] The portfolio creation request
   * object
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
   * @summary Create portfolio
   *
   * Creates a new portfolio
   *
   * @param {string} scope The intended scope of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.createRequest] The portfolio creation request
   * object
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
   * Gets the details for a portfolio.  For a derived portfolio this can be
   * the details of another reference portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
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
   * Gets the details for a portfolio.  For a derived portfolio this can be
   * the details of another reference portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
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
   * @summary Add/update portfolio details
   *
   * Update the portfolio details for the given code or add if it doesn't already
   * exist. Updates with
   * null values will remove any existing values
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.details]
   *
   * @param {string} [options.details.baseCurrency]
   *
   * @param {date} [options.effectiveAt] The effective date of the change
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
   * @summary Add/update portfolio details
   *
   * Update the portfolio details for the given code or add if it doesn't already
   * exist. Updates with
   * null values will remove any existing values
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.details]
   *
   * @param {string} [options.details.baseCurrency]
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
   * @summary Get holdings
   *
   * Get the aggregate holdings of a portfolio.  If no effectiveAt or asAt
   * are supplied then values will be defaulted to the latest system time.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {string} [options.filter] A filter on the results
   *
   * @param {array} [options.instrumentPropertyKeys] Keys for the instrument
   * properties to be decorated onto the holdings
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
  getHoldingsWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, instrumentPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.VersionedResourceListOfHolding>>;

  /**
   * @summary Get holdings
   *
   * Get the aggregate holdings of a portfolio.  If no effectiveAt or asAt
   * are supplied then values will be defaulted to the latest system time.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {string} [options.filter] A filter on the results
   *
   * @param {array} [options.instrumentPropertyKeys] Keys for the instrument
   * properties to be decorated onto the holdings
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
  getHoldings(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, instrumentPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.VersionedResourceListOfHolding>;
  getHoldings(scope: string, code: string, callback: ServiceCallback<models.VersionedResourceListOfHolding>): void;
  getHoldings(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, instrumentPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.VersionedResourceListOfHolding>): void;


  /**
   * @summary Set All Holdings
   *
   * Create transactions in a specific portfolio to bring all holdings to the
   * specified targets
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdingAdjustments]
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
   * @summary Set All Holdings
   *
   * Create transactions in a specific portfolio to bring all holdings to the
   * specified targets
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdingAdjustments]
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
   * @summary Adjust Selected Holdings
   *
   * Create transactions in a specific portfolio to bring the selected holdings
   * up to the specified targets
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdingAdjustments]
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
   * @summary Adjust Selected Holdings
   *
   * Create transactions in a specific portfolio to bring the selected holdings
   * up to the specified targets
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdingAdjustments]
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
   * @summary Cancel adjust-holdings
   *
   * Cancels a previous adjust holdings request
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
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
   * @summary Cancel adjust-holdings
   *
   * Cancels a previous adjust holdings request
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
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
   * @summary Gets holdings adjustments in an interval of effective time.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromEffectiveAt] Events between this time (inclusive)
   * and the toEffectiveAt are returned.
   *
   * @param {date} [options.toEffectiveAt] Events between this time (inclusive)
   * and the fromEffectiveAt are returned.
   *
   * @param {date} [options.asAtTime] The as-at time for which the result is
   * valid.
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
  listHoldingsAdjustmentsWithHttpOperationResponse(scope: string, code: string, options?: { fromEffectiveAt? : Date, toEffectiveAt? : Date, asAtTime? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfHoldingsAdjustmentHeader>>;

  /**
   * @summary Gets holdings adjustments in an interval of effective time.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromEffectiveAt] Events between this time (inclusive)
   * and the toEffectiveAt are returned.
   *
   * @param {date} [options.toEffectiveAt] Events between this time (inclusive)
   * and the fromEffectiveAt are returned.
   *
   * @param {date} [options.asAtTime] The as-at time for which the result is
   * valid.
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
  listHoldingsAdjustments(scope: string, code: string, options?: { fromEffectiveAt? : Date, toEffectiveAt? : Date, asAtTime? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfHoldingsAdjustmentHeader>;
  listHoldingsAdjustments(scope: string, code: string, callback: ServiceCallback<models.ResourceListOfHoldingsAdjustmentHeader>): void;
  listHoldingsAdjustments(scope: string, code: string, options: { fromEffectiveAt? : Date, toEffectiveAt? : Date, asAtTime? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfHoldingsAdjustmentHeader>): void;


  /**
   * @summary Get a holdings adjustment for a single portfolio at a specific
   * effective time.
   * If no adjustment exists at this effective time, not found is returned.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt The effective time of the holdings adjustment.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAtTime] The as-at time for which the result is
   * valid.
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
  getHoldingsAdjustmentWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { asAtTime? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.HoldingsAdjustment>>;

  /**
   * @summary Get a holdings adjustment for a single portfolio at a specific
   * effective time.
   * If no adjustment exists at this effective time, not found is returned.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt The effective time of the holdings adjustment.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAtTime] The as-at time for which the result is
   * valid.
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
  getHoldingsAdjustment(scope: string, code: string, effectiveAt: Date|string, options?: { asAtTime? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.HoldingsAdjustment>;
  getHoldingsAdjustment(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<models.HoldingsAdjustment>): void;
  getHoldingsAdjustment(scope: string, code: string, effectiveAt: Date|string, options: { asAtTime? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.HoldingsAdjustment>): void;


  /**
   * @summary Get transactions
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromTransactionDate] Include transactions with a
   * transaction date equal or later than this date. If not supplied, no lower
   * filter is applied
   *
   * @param {date} [options.toTransactionDate] Include transactions with a
   * transaction date equal or before this date. If not supplied, no upper filter
   * is applied
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {array} [options.instrumentPropertyKeys] Keys for the instrument
   * properties to be decorated onto the transactions
   *
   * @param {string} [options.filter] Transaction filter
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
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromTransactionDate] Include transactions with a
   * transaction date equal or later than this date. If not supplied, no lower
   * filter is applied
   *
   * @param {date} [options.toTransactionDate] Include transactions with a
   * transaction date equal or before this date. If not supplied, no upper filter
   * is applied
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {array} [options.instrumentPropertyKeys] Keys for the instrument
   * properties to be decorated onto the transactions
   *
   * @param {string} [options.filter] Transaction filter
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
   * @summary Upsert transactions
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.transactions] The transactions to be updated
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
   * @summary Upsert transactions
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.transactions] The transactions to be updated
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
   * Delete one or more transactions from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.id] Ids of transactions to delete
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
  deleteTransactionsWithHttpOperationResponse(scope: string, code: string, options?: { id? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Delete transactions
   *
   * Delete one or more transactions from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.id] Ids of transactions to delete
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
  deleteTransactions(scope: string, code: string, options?: { id? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deleteTransactions(scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deleteTransactions(scope: string, code: string, options: { id? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


  /**
   * @summary Add/update transaction properties
   *
   * Add one or more properties to a specific transaction in a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {string} transactionId Id of transaction to add properties to
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.transactionProperties] Transaction properties to
   * add
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
   * @summary Add/update transaction properties
   *
   * Add one or more properties to a specific transaction in a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {string} transactionId Id of transaction to add properties to
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.transactionProperties] Transaction properties to
   * add
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
   * Delete a property from a specific transaction
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
   * Delete a property from a specific transaction
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
   * @summary Get transactions
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {array} [options.instrumentPropertyKeys] Keys for the instrument
   * properties to be decorated onto the trades
   *
   * @param {string} [options.filter] Trade filter
   *
   * @param {object} [options.parameters] Core query parameters
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
   * @summary Get transactions
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {array} [options.instrumentPropertyKeys] Keys for the instrument
   * properties to be decorated onto the trades
   *
   * @param {string} [options.filter] Trade filter
   *
   * @param {object} [options.parameters] Core query parameters
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
