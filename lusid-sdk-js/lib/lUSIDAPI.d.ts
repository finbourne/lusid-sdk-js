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
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @param {string} scope
   *
   * @param {number} year
   *
   * @param {number} month
   *
   * @param {number} day
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
   * @resolve {HttpOperationResponse<AnalyticStore>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAnalyticStoreWithHttpOperationResponse(scope: string, year: number, month: number, day: number, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AnalyticStore>>;

  /**
   * @param {string} scope
   *
   * @param {number} year
   *
   * @param {number} month
   *
   * @param {number} day
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
   * @param {string} scope
   *
   * @param {number} year
   *
   * @param {number} month
   *
   * @param {number} day
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
   * @param {string} scope
   *
   * @param {number} year
   *
   * @param {number} month
   *
   * @param {number} day
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
   * @param {string} scope
   *
   * @param {number} year
   *
   * @param {number} month
   *
   * @param {number} day
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
   * @param {string} scope
   *
   * @param {number} year
   *
   * @param {number} month
   *
   * @param {number} day
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.actions]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.actions]
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
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolio]
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
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolio]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
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
   * @param {string} uid
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.instrumentPropertyKeys]
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
   * @param {string} uid
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.instrumentPropertyKeys]
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
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.codeType] Possible values include: 'Undefined',
   * 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip', 'Ticker',
   * 'ClientInternal', 'Figi', 'CompositeFigi', 'ShareClassFigi', 'Wertpapier'
   *
   * @param {array} [options.codes]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.instrumentPropertyKeys]
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
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.codeType] Possible values include: 'Undefined',
   * 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip', 'Ticker',
   * 'ClientInternal', 'Figi', 'CompositeFigi', 'ShareClassFigi', 'Wertpapier'
   *
   * @param {array} [options.codes]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.instrumentPropertyKeys]
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
   * @param {string} domain
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
   * @param {string} domain
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
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.pattern]
   *
   * @param {string} [options.scope] Possible values include: 'User', 'Group',
   * 'Default', 'All'
   *
   * @param {boolean} [options.recursive]
   *
   * @param {boolean} [options.wildcards]
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
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.pattern]
   *
   * @param {string} [options.scope] Possible values include: 'User', 'Group',
   * 'Default', 'All'
   *
   * @param {boolean} [options.recursive]
   *
   * @param {boolean} [options.wildcards]
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
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.key]
   *
   * @param {string} [options.scope] Possible values include: 'User', 'Group',
   * 'Default', 'All'
   *
   * @param {string} [options.group]
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
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.key]
   *
   * @param {string} [options.scope] Possible values include: 'User', 'Group',
   * 'Default', 'All'
   *
   * @param {string} [options.group]
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
  listPortfolioGroupsWithHttpOperationResponse(scope: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPortfolioGroup>>;

  /**
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
  listPortfolioGroups(scope: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPortfolioGroup>;
  listPortfolioGroups(scope: string, callback: ServiceCallback<models.ResourceListOfPortfolioGroup>): void;
  listPortfolioGroups(scope: string, options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPortfolioGroup>): void;


  /**
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt]
   *
   * @param {date} [options.toAsAt]
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
   * @resolve {HttpOperationResponse<ResourceListOfProcessedCommand>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioGroupCommandsWithHttpOperationResponse(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfProcessedCommand>>;

  /**
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt]
   *
   * @param {date} [options.toAsAt]
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
   * @param {object} [options] Optional Parameters.
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
   * @resolve {HttpOperationResponse<ResourceListOfScope>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listPortfolioScopesWithHttpOperationResponse(options?: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfScope>>;

  /**
   * @param {object} [options] Optional Parameters.
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
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
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
   * @resolve {HttpOperationResponse<ResourceListOfPortfolio>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listPortfoliosWithHttpOperationResponse(scope: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPortfolio>>;

  /**
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
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
   * @param {date} [options.request.created]
   *
   * @param {date} [options.effectiveAt]
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
   * @param {date} [options.request.created]
   *
   * @param {date} [options.effectiveAt]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt]
   *
   * @param {date} [options.toAsAt]
   *
   * @param {string} [options.filter]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt]
   *
   * @param {date} [options.toAsAt]
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
   * @resolve {HttpOperationResponse<PortfolioProperties>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioPropertiesWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioProperties>>;

  /**
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolioProperties]
   *
   * @param {date} [options.effectiveAt]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolioProperties]
   *
   * @param {date} [options.effectiveAt]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
   *
   * @param {array} [options.portfolioPropertyKeys]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
   *
   * @param {array} [options.portfolioPropertyKeys]
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
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.referencePortfolio]
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
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.referencePortfolio]
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
   * @param {string} scope
   *
   * @param {string} key
   *
   * @param {date} dateParameter
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
   * @param {string} scope
   *
   * @param {string} key
   *
   * @param {date} dateParameter
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
   * @param {string} scope
   *
   * @param {string} key
   *
   * @param {date} dateParameter
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @param {string} scope
   *
   * @param {string} key
   *
   * @param {date} dateParameter
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
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
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.propertyKeys]
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
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.propertyKeys]
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
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.createRequest]
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
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.createRequest]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.details]
   *
   * @param {string} [options.details.baseCurrency]
   *
   * @param {date} [options.effectiveAt]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.details]
   *
   * @param {string} [options.details.baseCurrency]
   *
   * @param {date} [options.effectiveAt]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {boolean} [options.byTaxlots]
   *
   * @param {date} [options.effectiveAt]
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
   * @param {array} [options.instrumentPropertyKeys]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {boolean} [options.byTaxlots]
   *
   * @param {date} [options.effectiveAt]
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
   * @param {array} [options.instrumentPropertyKeys]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromEffectiveAt]
   *
   * @param {date} [options.toEffectiveAt]
   *
   * @param {date} [options.asAtTime]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromEffectiveAt]
   *
   * @param {date} [options.toEffectiveAt]
   *
   * @param {date} [options.asAtTime]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAtTime]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAtTime]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromTransactionDate]
   *
   * @param {date} [options.toTransactionDate]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {array} [options.instrumentPropertyKeys]
   *
   * @param {string} [options.filter]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromTransactionDate]
   *
   * @param {date} [options.toTransactionDate]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {array} [options.instrumentPropertyKeys]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.transactions]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.transactions]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.id]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.id]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {string} transactionId
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.transactionProperties]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {string} transactionId
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.transactionProperties]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {string} transactionId
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.transactionPropertyKey]
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
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {string} transactionId
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.transactionPropertyKey]
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
   * @param {string} scope
   *
   * @param {string} code
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
   * @param {array} [options.instrumentPropertyKeys]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.parameters]
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
   * @param {string} scope
   *
   * @param {string} code
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
   * @param {array} [options.instrumentPropertyKeys]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.parameters]
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
