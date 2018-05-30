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
   * @summary Gets a corporate action based on dates
   *
   * @param {string} scope Scope
   *
   * @param {string} sourceId Corporate action source id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveDate] Effective Date
   *
   * @param {date} [options.asAt] AsAt Date filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listCorporateActionsWithHttpOperationResponse(scope: string, sourceId: string, options?: { effectiveDate? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Gets a corporate action based on dates
   *
   * @param {string} scope Scope
   *
   * @param {string} sourceId Corporate action source id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveDate] Effective Date
   *
   * @param {date} [options.asAt] AsAt Date filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listCorporateActions(scope: string, sourceId: string, options?: { effectiveDate? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  listCorporateActions(scope: string, sourceId: string, callback: ServiceCallback<any>): void;
  listCorporateActions(scope: string, sourceId: string, options: { effectiveDate? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Creates/updates a corporate action
   *
   * @param {string} scope The intended scope of the corporate action
   *
   * @param {string} sourceId Source of the corporate action
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.createRequest] The corporate action creation
   * request object
   *
   * @param {string} options.createRequest.corporateActionId
   *
   * @param {date} options.createRequest.announcementDate
   *
   * @param {date} options.createRequest.exDate
   *
   * @param {date} options.createRequest.recordDate
   *
   * @param {array} options.createRequest.transitions
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertCorporateActionWithHttpOperationResponse(scope: string, sourceId: string, options?: { createRequest? : models.UpsertCorporateActionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Creates/updates a corporate action
   *
   * @param {string} scope The intended scope of the corporate action
   *
   * @param {string} sourceId Source of the corporate action
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.createRequest] The corporate action creation
   * request object
   *
   * @param {string} options.createRequest.corporateActionId
   *
   * @param {date} options.createRequest.announcementDate
   *
   * @param {date} options.createRequest.exDate
   *
   * @param {date} options.createRequest.recordDate
   *
   * @param {array} options.createRequest.transitions
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertCorporateAction(scope: string, sourceId: string, options?: { createRequest? : models.UpsertCorporateActionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  upsertCorporateAction(scope: string, sourceId: string, callback: ServiceCallback<any>): void;
  upsertCorporateAction(scope: string, sourceId: string, options: { createRequest? : models.UpsertCorporateActionRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Aggregate data in a group hierarchy
   *
   * @param {string} scope
   *
   * @param {string} groupCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregationByGroupWithHttpOperationResponse(scope: string, groupCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Aggregate data in a group hierarchy
   *
   * @param {string} scope
   *
   * @param {string} groupCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByGroup(scope: string, groupCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getAggregationByGroup(scope: string, groupCode: string, callback: ServiceCallback<any>): void;
  getAggregationByGroup(scope: string, groupCode: string, options: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Aggregation request data in a group hierarchy into a data tree
   *
   * @param {string} scope
   *
   * @param {string} groupCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getNestedAggregationByGroupWithHttpOperationResponse(scope: string, groupCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Aggregation request data in a group hierarchy into a data tree
   *
   * @param {string} scope
   *
   * @param {string} groupCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getNestedAggregationByGroup(scope: string, groupCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getNestedAggregationByGroup(scope: string, groupCode: string, callback: ServiceCallback<any>): void;
  getNestedAggregationByGroup(scope: string, groupCode: string, options: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Aggregate data in a portfolio
   *
   * @param {string} scope
   *
   * @param {string} portfolioCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregationByPortfolioWithHttpOperationResponse(scope: string, portfolioCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Aggregate data in a portfolio
   *
   * @param {string} scope
   *
   * @param {string} portfolioCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByPortfolio(scope: string, portfolioCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getAggregationByPortfolio(scope: string, portfolioCode: string, callback: ServiceCallback<any>): void;
  getAggregationByPortfolio(scope: string, portfolioCode: string, options: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Aggregation request data in a portfolio into a data tree
   *
   * @param {string} scope
   *
   * @param {string} portfolioCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getNestedAggregationByPortfolioWithHttpOperationResponse(scope: string, portfolioCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Aggregation request data in a portfolio into a data tree
   *
   * @param {string} scope
   *
   * @param {string} portfolioCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getNestedAggregationByPortfolio(scope: string, portfolioCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getNestedAggregationByPortfolio(scope: string, portfolioCode: string, callback: ServiceCallback<any>): void;
  getNestedAggregationByPortfolio(scope: string, portfolioCode: string, options: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Aggregate data from a result set
   *
   * @param {string} scope
   *
   * @param {string} resultsKey
   *
   * @param {string} resultsDate
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregationByResultSetWithHttpOperationResponse(scope: string, resultsKey: string, resultsDate: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Aggregate data from a result set
   *
   * @param {string} scope
   *
   * @param {string} resultsKey
   *
   * @param {string} resultsDate
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByResultSet(scope: string, resultsKey: string, resultsDate: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getAggregationByResultSet(scope: string, resultsKey: string, resultsDate: string, callback: ServiceCallback<any>): void;
  getAggregationByResultSet(scope: string, resultsKey: string, resultsDate: string, options: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Aggregate data from a result set into a nested structure
   *
   * @param {string} scope
   *
   * @param {string} resultsKey
   *
   * @param {date} resultsDate
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getNestedAggregationByResultSetWithHttpOperationResponse(scope: string, resultsKey: string, resultsDate: Date|string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Aggregate data from a result set into a nested structure
   *
   * @param {string} scope
   *
   * @param {string} resultsKey
   *
   * @param {date} resultsDate
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getNestedAggregationByResultSet(scope: string, resultsKey: string, resultsDate: Date|string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getNestedAggregationByResultSet(scope: string, resultsKey: string, resultsDate: Date|string, callback: ServiceCallback<any>): void;
  getNestedAggregationByResultSet(scope: string, resultsKey: string, resultsDate: Date|string, options: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listAnalyticStoresWithHttpOperationResponse(options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listAnalyticStores(options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  listAnalyticStores(callback: ServiceCallback<any>): void;
  listAnalyticStores(options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createAnalyticStoreWithHttpOperationResponse(options?: { request? : models.CreateAnalyticStoreRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createAnalyticStore(options?: { request? : models.CreateAnalyticStoreRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  createAnalyticStore(callback: ServiceCallback<any>): void;
  createAnalyticStore(options: { request? : models.CreateAnalyticStoreRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAnalyticStoreWithHttpOperationResponse(scope: string, year: number, month: number, day: number, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAnalyticStore(scope: string, year: number, month: number, day: number, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getAnalyticStore(scope: string, year: number, month: number, day: number, callback: ServiceCallback<any>): void;
  getAnalyticStore(scope: string, year: number, month: number, day: number, options: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deleteAnalyticStoreWithHttpOperationResponse(scope: string, year: number, month: number, day: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteAnalyticStore(scope: string, year: number, month: number, day: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  deleteAnalyticStore(scope: string, year: number, month: number, day: number, callback: ServiceCallback<any>): void;
  deleteAnalyticStore(scope: string, year: number, month: number, day: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  insertAnalyticsWithHttpOperationResponse(scope: string, year: number, month: number, day: number, options?: { data? : models.SecurityAnalyticDataDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  insertAnalytics(scope: string, year: number, month: number, day: number, options?: { data? : models.SecurityAnalyticDataDto[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  insertAnalytics(scope: string, year: number, month: number, day: number, callback: ServiceCallback<any>): void;
  insertAnalytics(scope: string, year: number, month: number, day: number, options: { data? : models.SecurityAnalyticDataDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Update classification data
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertClassificationWithHttpOperationResponse(options?: { classifications? : models.SecurityClassificationDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Update classification data
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertClassification(options?: { classifications? : models.SecurityClassificationDto[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  upsertClassification(callback: ServiceCallback<any>): void;
  upsertClassification(options: { classifications? : models.SecurityClassificationDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {array} [options.type.properties]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  addConfigurationTransactionTypeWithHttpOperationResponse(options?: { type? : models.TxnMetaDataDto, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {array} [options.type.properties]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  addConfigurationTransactionType(options?: { type? : models.TxnMetaDataDto, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  addConfigurationTransactionType(callback: ServiceCallback<any>): void;
  addConfigurationTransactionType(options: { type? : models.TxnMetaDataDto, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getConfigurationTransactionTypesWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getConfigurationTransactionTypes(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getConfigurationTransactionTypes(callback: ServiceCallback<any>): void;
  getConfigurationTransactionTypes(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  uploadConfigurationTransactionTypesWithHttpOperationResponse(options?: { types? : models.TxnMetaDataDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  uploadConfigurationTransactionTypes(options?: { types? : models.TxnMetaDataDto[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  uploadConfigurationTransactionTypes(callback: ServiceCallback<any>): void;
  uploadConfigurationTransactionTypes(options: { types? : models.TxnMetaDataDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getDownloadUrlWithHttpOperationResponse(options?: { version? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getDownloadUrl(options?: { version? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getDownloadUrl(callback: ServiceCallback<any>): void;
  getDownloadUrl(options: { version? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getLatestVersionWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getLatestVersion(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getLatestVersion(callback: ServiceCallback<any>): void;
  getLatestVersion(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listPortfolioGroupsWithHttpOperationResponse(scope: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolioGroups(scope: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  listPortfolioGroups(scope: string, callback: ServiceCallback<any>): void;
  listPortfolioGroups(scope: string, options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {string} options.request.name
   *
   * @param {string} [options.request.description]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createPortfolioGroupWithHttpOperationResponse(scope: string, options?: { request? : models.CreateGroupRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {string} options.request.name
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createPortfolioGroup(scope: string, options?: { request? : models.CreateGroupRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  createPortfolioGroup(scope: string, callback: ServiceCallback<any>): void;
  createPortfolioGroup(scope: string, options: { request? : models.CreateGroupRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioGroupWithHttpOperationResponse(scope: string, code: string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroup(scope: string, code: string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getPortfolioGroup(scope: string, code: string, callback: ServiceCallback<any>): void;
  getPortfolioGroup(scope: string, code: string, options: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioGroupWithHttpOperationResponse(scope: string, code: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioGroup(scope: string, code: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  deletePortfolioGroup(scope: string, code: string, callback: ServiceCallback<any>): void;
  deletePortfolioGroup(scope: string, code: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {string} [options.filter] A filter expression to apply to the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioGroupCommandsWithHttpOperationResponse(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroupCommands(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getPortfolioGroupCommands(scope: string, code: string, callback: ServiceCallback<any>): void;
  getPortfolioGroupCommands(scope: string, code: string, options: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioGroupExpansionWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroupExpansion(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getPortfolioGroupExpansion(scope: string, code: string, callback: ServiceCallback<any>): void;
  getPortfolioGroupExpansion(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  addPortfolioToGroupWithHttpOperationResponse(scope: string, code: string, options?: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  addPortfolioToGroup(scope: string, code: string, options?: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  addPortfolioToGroup(scope: string, code: string, callback: ServiceCallback<any>): void;
  addPortfolioToGroup(scope: string, code: string, options: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioFromGroupWithHttpOperationResponse(scope: string, code: string, portfolioScope: string, portfolioCode: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioFromGroup(scope: string, code: string, portfolioScope: string, portfolioCode: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  deletePortfolioFromGroup(scope: string, code: string, portfolioScope: string, portfolioCode: string, callback: ServiceCallback<any>): void;
  deletePortfolioFromGroup(scope: string, code: string, portfolioScope: string, portfolioCode: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  addSubGroupToGroupWithHttpOperationResponse(scope: string, code: string, options?: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  addSubGroupToGroup(scope: string, code: string, options?: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  addSubGroupToGroup(scope: string, code: string, callback: ServiceCallback<any>): void;
  addSubGroupToGroup(scope: string, code: string, options: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deleteSubGroupFromGroupWithHttpOperationResponse(scope: string, code: string, subgroupScope: string, subgroupCode: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteSubGroupFromGroup(scope: string, code: string, subgroupScope: string, subgroupCode: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  deleteSubGroupFromGroup(scope: string, code: string, subgroupScope: string, subgroupCode: string, callback: ServiceCallback<any>): void;
  deleteSubGroupFromGroup(scope: string, code: string, subgroupScope: string, subgroupCode: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {string} options.request.name
   *
   * @param {string} [options.request.description]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  updatePortfolioGroupWithHttpOperationResponse(scope: string, code: string, options?: { request? : models.UpdateGroupRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {string} options.request.name
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePortfolioGroup(scope: string, code: string, options?: { request? : models.UpdateGroupRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  updatePortfolioGroup(scope: string, code: string, callback: ServiceCallback<any>): void;
  updatePortfolioGroup(scope: string, code: string, options: { request? : models.UpdateGroupRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  portfolioGroupsSearchWithHttpOperationResponse(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  portfolioGroupsSearch(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  portfolioGroupsSearch(callback: ServiceCallback<any>): void;
  portfolioGroupsSearch(options: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Simple heartbeat method for the api
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getHealthWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Simple heartbeat method for the api
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getHealth(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getHealth(callback: ServiceCallback<any>): void;
  getHealth(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Gets the login information.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getLoginInfoWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Gets the login information.
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getLoginInfo(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getLoginInfo(callback: ServiceCallback<any>): void;
  getLoginInfo(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Store a log message
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.message]
   *
   * @param {string} [options.message.version] The semantic version of the remote
   * application submitting the log
   *
   * @param {string} [options.message.url] The url of the resource from which the
   * message originated
   *
   * @param {string} [options.message.message] The body of the message
   *
   * @param {string} [options.message.context] Context as to the occurance of the
   * message
   *
   * @param {string} [options.message.severity] The severity of the message.
   * Possible values include: 'Warn', 'Error'
   *
   * @param {string} [options.message.stacktrace] Any stacktrace that may be
   * relavent
   *
   * @param {string} [options.message.browser] Any browser/user-agent/os related
   * context
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  storeWebLogsWithHttpOperationResponse(options?: { message? : models.WebLogMessage, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Store a log message
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.message]
   *
   * @param {string} [options.message.version] The semantic version of the remote
   * application submitting the log
   *
   * @param {string} [options.message.url] The url of the resource from which the
   * message originated
   *
   * @param {string} [options.message.message] The body of the message
   *
   * @param {string} [options.message.context] Context as to the occurance of the
   * message
   *
   * @param {string} [options.message.severity] The severity of the message.
   * Possible values include: 'Warn', 'Error'
   *
   * @param {string} [options.message.stacktrace] Any stacktrace that may be
   * relavent
   *
   * @param {string} [options.message.browser] Any browser/user-agent/os related
   * context
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  storeWebLogs(options?: { message? : models.WebLogMessage, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  storeWebLogs(callback: ServiceCallback<any>): void;
  storeWebLogs(options: { message? : models.WebLogMessage, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Returns the current assembly version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getBuildVersionWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Returns the current assembly version
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getBuildVersion(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getBuildVersion(callback: ServiceCallback<any>): void;
  getBuildVersion(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Returns the current assembly version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  verifyConnectivityWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Returns the current assembly version
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  verifyConnectivity(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  verifyConnectivity(callback: ServiceCallback<any>): void;
  verifyConnectivity(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Returns the current assembly version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getVersionWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Returns the current assembly version
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getVersion(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getVersion(callback: ServiceCallback<any>): void;
  getVersion(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Get a personalisation, recursing to get any referenced if required.
   *
   * @param {boolean} recursive Whether to recurse into dereference recursive
   * settings
   *
   * @param {boolean} wildcards Whether to apply wildcards to the provided
   * pattern and pull back any matching
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.pattern] The search pattern or specific key
   *
   * @param {string} [options.scope] The scope level to request for. Possible
   * values include: 'User', 'Group', 'Default', 'All'
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPersonalisationsWithHttpOperationResponse(recursive: boolean, wildcards: boolean, options?: { pattern? : string, scope? : string, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Get a personalisation, recursing to get any referenced if required.
   *
   * @param {boolean} recursive Whether to recurse into dereference recursive
   * settings
   *
   * @param {boolean} wildcards Whether to apply wildcards to the provided
   * pattern and pull back any matching
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.pattern] The search pattern or specific key
   *
   * @param {string} [options.scope] The scope level to request for. Possible
   * values include: 'User', 'Group', 'Default', 'All'
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPersonalisations(recursive: boolean, wildcards: boolean, options?: { pattern? : string, scope? : string, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getPersonalisations(recursive: boolean, wildcards: boolean, callback: ServiceCallback<any>): void;
  getPersonalisations(recursive: boolean, wildcards: boolean, options: { pattern? : string, scope? : string, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertPersonalisationsWithHttpOperationResponse(options?: { personalisations? : models.PersonalisationDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPersonalisations(options?: { personalisations? : models.PersonalisationDto[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  upsertPersonalisations(callback: ServiceCallback<any>): void;
  upsertPersonalisations(options: { personalisations? : models.PersonalisationDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Delete a personalisation at a specific scope (or use scope ALL to
   * purge the setting entirely)
   *
   * @param {string} scope The scope to delete at (use ALL to purge the setting
   * entirely). Possible values include: 'User', 'Group', 'Default', 'All'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.key] The key of the setting to be deleted
   *
   * @param {string} [options.group] If deleting a setting at group level,
   * specify the group here
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePersonalisationWithHttpOperationResponse(scope: string, options?: { key? : string, group? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Delete a personalisation at a specific scope (or use scope ALL to
   * purge the setting entirely)
   *
   * @param {string} scope The scope to delete at (use ALL to purge the setting
   * entirely). Possible values include: 'User', 'Group', 'Default', 'All'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.key] The key of the setting to be deleted
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePersonalisation(scope: string, options?: { key? : string, group? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  deletePersonalisation(scope: string, callback: ServiceCallback<any>): void;
  deletePersonalisation(scope: string, options: { key? : string, group? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listPortfolioScopesWithHttpOperationResponse(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolioScopes(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  listPortfolioScopes(callback: ServiceCallback<any>): void;
  listPortfolioScopes(options: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listPortfoliosWithHttpOperationResponse(scope: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolios(scope: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  listPortfolios(scope: string, callback: ServiceCallback<any>): void;
  listPortfolios(scope: string, options: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {string} options.createRequest.name
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
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createPortfolioWithHttpOperationResponse(scope: string, options?: { createRequest? : models.CreatePortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {string} options.createRequest.name
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
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createPortfolio(scope: string, options?: { createRequest? : models.CreatePortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  createPortfolio(scope: string, callback: ServiceCallback<any>): void;
  createPortfolio(scope: string, options: { createRequest? : models.CreatePortfolioRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {array} [options.propertyFilter] Optional property filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {array} [options.propertyFilter] Optional property filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolio(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getPortfolio(scope: string, code: string, callback: ServiceCallback<any>): void;
  getPortfolio(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {string} options.request.name
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  updatePortfolioWithHttpOperationResponse(scope: string, code: string, options?: { request? : models.UpdatePortfolioRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {string} options.request.name
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePortfolio(scope: string, code: string, options?: { request? : models.UpdatePortfolioRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  updatePortfolio(scope: string, code: string, callback: ServiceCallback<any>): void;
  updatePortfolio(scope: string, code: string, options: { request? : models.UpdatePortfolioRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolio(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  deletePortfolio(scope: string, code: string, callback: ServiceCallback<any>): void;
  deletePortfolio(scope: string, code: string, options: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getCommandsWithHttpOperationResponse(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getCommands(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getCommands(scope: string, code: string, callback: ServiceCallback<any>): void;
  getCommands(scope: string, code: string, options: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {array} [options.propertyFilter] Optional property filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getDetailsWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {array} [options.propertyFilter] Optional property filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getDetails(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getDetails(scope: string, code: string, callback: ServiceCallback<any>): void;
  getDetails(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertPortfolioDetailsWithHttpOperationResponse(scope: string, code: string, options?: { details? : models.PortfolioDetailsRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPortfolioDetails(scope: string, code: string, options?: { details? : models.PortfolioDetailsRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  upsertPortfolioDetails(scope: string, code: string, callback: ServiceCallback<any>): void;
  upsertPortfolioDetails(scope: string, code: string, options: { details? : models.PortfolioDetailsRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioDetailsWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioDetails(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  deletePortfolioDetails(scope: string, code: string, callback: ServiceCallback<any>): void;
  deletePortfolioDetails(scope: string, code: string, options: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregateHoldingsWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregateHoldings(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getAggregateHoldings(scope: string, code: string, callback: ServiceCallback<any>): void;
  getAggregateHoldings(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Adjust holdings
   *
   * Create trades in a specific portfolio to bring it to the specified holdings
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdings]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  adjustHoldingsWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { holdings? : models.HoldingAdjustmentDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Adjust holdings
   *
   * Create trades in a specific portfolio to bring it to the specified holdings
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdings]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  adjustHoldings(scope: string, code: string, effectiveAt: Date|string, options?: { holdings? : models.HoldingAdjustmentDto[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  adjustHoldings(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<any>): void;
  adjustHoldings(scope: string, code: string, effectiveAt: Date|string, options: { holdings? : models.HoldingAdjustmentDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertiesWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getProperties(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getProperties(scope: string, code: string, callback: ServiceCallback<any>): void;
  getProperties(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {array} [options.properties]
   *
   * @param {date} [options.effectiveAt] The effective date for the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertPortfolioPropertiesWithHttpOperationResponse(scope: string, code: string, options?: { properties? : models.PropertyDto[], effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {array} [options.properties]
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPortfolioProperties(scope: string, code: string, options?: { properties? : models.PropertyDto[], effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  upsertPortfolioProperties(scope: string, code: string, callback: ServiceCallback<any>): void;
  upsertPortfolioProperties(scope: string, code: string, options: { properties? : models.PropertyDto[], effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Delete property
   *
   * Delete a property from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.property] The key of the property to be deleted
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioPropertyWithHttpOperationResponse(scope: string, code: string, options?: { property? : string, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Delete property
   *
   * Delete a property from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.property] The key of the property to be deleted
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioProperty(scope: string, code: string, options?: { property? : string, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  deletePortfolioProperty(scope: string, code: string, callback: ServiceCallback<any>): void;
  deletePortfolioProperty(scope: string, code: string, options: { property? : string, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Delete properties
   *
   * Delete all properties from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] The effective date for the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioPropertiesWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Delete properties
   *
   * Delete all properties from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioProperties(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  deletePortfolioProperties(scope: string, code: string, callback: ServiceCallback<any>): void;
  deletePortfolioProperties(scope: string, code: string, options: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Get trades
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromTradeDate] Include trades with a trade date equal
   * or later than this date
   *
   * @param {date} [options.toTradeDate] Include trades with a trade date equal
   * or before this date
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {array} [options.securityPropertyKeys] Keys for the security
   * properties to be decorated onto the trades
   *
   * @param {string} [options.filter] Trade filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getTradesWithHttpOperationResponse(scope: string, code: string, options?: { fromTradeDate? : Date, toTradeDate? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, securityPropertyKeys? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Get trades
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromTradeDate] Include trades with a trade date equal
   * or later than this date
   *
   * @param {date} [options.toTradeDate] Include trades with a trade date equal
   * or before this date
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {array} [options.securityPropertyKeys] Keys for the security
   * properties to be decorated onto the trades
   *
   * @param {string} [options.filter] Trade filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getTrades(scope: string, code: string, options?: { fromTradeDate? : Date, toTradeDate? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, securityPropertyKeys? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getTrades(scope: string, code: string, callback: ServiceCallback<any>): void;
  getTrades(scope: string, code: string, options: { fromTradeDate? : Date, toTradeDate? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, securityPropertyKeys? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Add/update trades
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.trades] The trades to be updated
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertTradesWithHttpOperationResponse(scope: string, code: string, options?: { trades? : models.TradeDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Add/update trades
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.trades] The trades to be updated
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertTrades(scope: string, code: string, options?: { trades? : models.TradeDto[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  upsertTrades(scope: string, code: string, callback: ServiceCallback<any>): void;
  upsertTrades(scope: string, code: string, options: { trades? : models.TradeDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Delete trades
   *
   * Delete one or more trades from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.id] Ids of trades to delete
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deleteTradesWithHttpOperationResponse(scope: string, code: string, options?: { id? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Delete trades
   *
   * Delete one or more trades from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.id] Ids of trades to delete
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteTrades(scope: string, code: string, options?: { id? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  deleteTrades(scope: string, code: string, callback: ServiceCallback<any>): void;
  deleteTrades(scope: string, code: string, options: { id? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Add/update trade properties
   *
   * Add one or more properties to a specific trade in a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {string} tradeId Id of trade to add properties to
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.properties] Trade properties to add
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  addTradePropertyWithHttpOperationResponse(scope: string, code: string, tradeId: string, options?: { properties? : models.PropertyDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Add/update trade properties
   *
   * Add one or more properties to a specific trade in a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {string} tradeId Id of trade to add properties to
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.properties] Trade properties to add
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  addTradeProperty(scope: string, code: string, tradeId: string, options?: { properties? : models.PropertyDto[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  addTradeProperty(scope: string, code: string, tradeId: string, callback: ServiceCallback<any>): void;
  addTradeProperty(scope: string, code: string, tradeId: string, options: { properties? : models.PropertyDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Delete trade property
   *
   * Delete a property from a specific trade
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {string} tradeId Id of the trade to delete the property from
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.property] The key of the property to be deleted
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePropertyFromTradeWithHttpOperationResponse(scope: string, code: string, tradeId: string, options?: { property? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Delete trade property
   *
   * Delete a property from a specific trade
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {string} tradeId Id of the trade to delete the property from
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.property] The key of the property to be deleted
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePropertyFromTrade(scope: string, code: string, tradeId: string, options?: { property? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  deletePropertyFromTrade(scope: string, code: string, tradeId: string, callback: ServiceCallback<any>): void;
  deletePropertyFromTrade(scope: string, code: string, tradeId: string, options: { property? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Add properties to all trades
   *
   * Add one or more properties to all trades in a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.properties] Properties to add to all trades
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  addTradePropertyToAllWithHttpOperationResponse(scope: string, code: string, options?: { properties? : models.PropertyDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Add properties to all trades
   *
   * Add one or more properties to all trades in a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.properties] Properties to add to all trades
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  addTradePropertyToAll(scope: string, code: string, options?: { properties? : models.PropertyDto[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  addTradePropertyToAll(scope: string, code: string, callback: ServiceCallback<any>): void;
  addTradePropertyToAll(scope: string, code: string, options: { properties? : models.PropertyDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {string} options.portfolio.name
   *
   * @param {string} [options.portfolio.id]
   *
   * @param {object} [options.portfolio.parentPortfolio]
   *
   * @param {string} [options.portfolio.parentPortfolio.scope]
   *
   * @param {string} [options.portfolio.parentPortfolio.code]
   *
   * @param {date} [options.portfolio.created]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createDerivedPortfolioWithHttpOperationResponse(scope: string, options?: { portfolio? : models.CreateDerivedPortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {string} options.portfolio.name
   *
   * @param {string} [options.portfolio.id]
   *
   * @param {object} [options.portfolio.parentPortfolio]
   *
   * @param {string} [options.portfolio.parentPortfolio.scope]
   *
   * @param {string} [options.portfolio.parentPortfolio.code]
   *
   * @param {date} [options.portfolio.created]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createDerivedPortfolio(scope: string, options?: { portfolio? : models.CreateDerivedPortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  createDerivedPortfolio(scope: string, callback: ServiceCallback<any>): void;
  createDerivedPortfolio(scope: string, options: { portfolio? : models.CreateDerivedPortfolioRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  portfoliosSearchWithHttpOperationResponse(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  portfoliosSearch(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  portfoliosSearch(callback: ServiceCallback<any>): void;
  portfoliosSearch(options: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  propertiesSearchWithHttpOperationResponse(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  propertiesSearch(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  propertiesSearch(callback: ServiceCallback<any>): void;
  propertiesSearch(options: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Gets the available property-definition domains.
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertyDefinitionDomainsWithHttpOperationResponse(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Gets the available property-definition domains.
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDefinitionDomains(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getPropertyDefinitionDomains(callback: ServiceCallback<any>): void;
  getPropertyDefinitionDomains(options: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {string} [options.definition.name]
   *
   * @param {boolean} [options.definition.valueRequired]
   *
   * @param {string} [options.definition.displayName]
   *
   * @param {object} [options.definition.dataFormatId]
   *
   * @param {string} [options.definition.dataFormatId.scope]
   *
   * @param {string} [options.definition.dataFormatId.code]
   *
   * @param {string} [options.definition.sort]
   *
   * @param {string} [options.definition.lifeTime] Possible values include:
   * 'Perpetual', 'TimeVariant'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createPropertyDefinitionWithHttpOperationResponse(options?: { definition? : models.CreatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {string} [options.definition.name]
   *
   * @param {boolean} [options.definition.valueRequired]
   *
   * @param {string} [options.definition.displayName]
   *
   * @param {object} [options.definition.dataFormatId]
   *
   * @param {string} [options.definition.dataFormatId.scope]
   *
   * @param {string} [options.definition.dataFormatId.code]
   *
   * @param {string} [options.definition.sort]
   *
   * @param {string} [options.definition.lifeTime] Possible values include:
   * 'Perpetual', 'TimeVariant'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createPropertyDefinition(options?: { definition? : models.CreatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  createPropertyDefinition(callback: ServiceCallback<any>): void;
  createPropertyDefinition(options: { definition? : models.CreatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Gets multiple property definitions.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.keys]
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getMultiplePropertyDefinitionsWithHttpOperationResponse(options?: { keys? : string[], sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Gets multiple property definitions.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.keys]
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getMultiplePropertyDefinitions(options?: { keys? : string[], sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getMultiplePropertyDefinitions(callback: ServiceCallback<any>): void;
  getMultiplePropertyDefinitions(options: { keys? : string[], sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Gets all available property definitions.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAllPropertyKeysInDomainWithHttpOperationResponse(domain: string, options?: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Gets all available property definitions.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAllPropertyKeysInDomain(domain: string, options?: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getAllPropertyKeysInDomain(domain: string, callback: ServiceCallback<any>): void;
  getAllPropertyKeysInDomain(domain: string, options: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Gets the available property-definition scopes for the specified
   * domain.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertyDefinitionScopesInDomainWithHttpOperationResponse(domain: string, options?: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Gets the available property-definition scopes for the specified
   * domain.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDefinitionScopesInDomain(domain: string, options?: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getPropertyDefinitionScopesInDomain(domain: string, callback: ServiceCallback<any>): void;
  getPropertyDefinitionScopesInDomain(domain: string, options: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Gets all properties in a scope.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAllPropertyKeysInScopeWithHttpOperationResponse(domain: string, scope: string, options?: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Gets all properties in a scope.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAllPropertyKeysInScope(domain: string, scope: string, options?: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getAllPropertyKeysInScope(domain: string, scope: string, callback: ServiceCallback<any>): void;
  getAllPropertyKeysInScope(domain: string, scope: string, options: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Gets a property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} name
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertyDefinitionWithHttpOperationResponse(domain: string, scope: string, name: string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Gets a property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} name
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDefinition(domain: string, scope: string, name: string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getPropertyDefinition(domain: string, scope: string, name: string, callback: ServiceCallback<any>): void;
  getPropertyDefinition(domain: string, scope: string, name: string, options: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Updates the specified property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition]
   *
   * @param {boolean} [options.definition.valueRequired]
   *
   * @param {string} [options.definition.displayName]
   *
   * @param {object} [options.definition.dataFormatId]
   *
   * @param {string} [options.definition.dataFormatId.scope]
   *
   * @param {string} [options.definition.dataFormatId.code]
   *
   * @param {string} [options.definition.sort]
   *
   * @param {string} [options.definition.lifeTime] Possible values include:
   * 'Perpetual', 'TimeVariant'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  updatePropertyDefinitionWithHttpOperationResponse(domain: string, scope: string, name: string, options?: { definition? : models.UpdatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Updates the specified property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition]
   *
   * @param {boolean} [options.definition.valueRequired]
   *
   * @param {string} [options.definition.displayName]
   *
   * @param {object} [options.definition.dataFormatId]
   *
   * @param {string} [options.definition.dataFormatId.scope]
   *
   * @param {string} [options.definition.dataFormatId.code]
   *
   * @param {string} [options.definition.sort]
   *
   * @param {string} [options.definition.lifeTime] Possible values include:
   * 'Perpetual', 'TimeVariant'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePropertyDefinition(domain: string, scope: string, name: string, options?: { definition? : models.UpdatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  updatePropertyDefinition(domain: string, scope: string, name: string, callback: ServiceCallback<any>): void;
  updatePropertyDefinition(domain: string, scope: string, name: string, options: { definition? : models.UpdatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Deletes the property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePropertyDefinitionWithHttpOperationResponse(domain: string, scope: string, name: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Deletes the property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePropertyDefinition(domain: string, scope: string, name: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  deletePropertyDefinition(domain: string, scope: string, name: string, callback: ServiceCallback<any>): void;
  deletePropertyDefinition(domain: string, scope: string, name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {string} options.request.formatType Possible values include: 'Basic',
   * 'Limited', 'Currency'
   *
   * @param {number} options.request.order
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'PropertyArray',
   * 'Percentage', 'Currency', 'BenchmarkType', 'Code', 'Id', 'Uri',
   * 'ArrayOfIds', 'ArrayOfTxnAliases', 'ArrayofTxnMovements'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createPropertyDataFormatWithHttpOperationResponse(options?: { request? : models.CreatePropertyDataFormatRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {string} options.request.formatType Possible values include: 'Basic',
   * 'Limited', 'Currency'
   *
   * @param {number} options.request.order
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'PropertyArray',
   * 'Percentage', 'Currency', 'BenchmarkType', 'Code', 'Id', 'Uri',
   * 'ArrayOfIds', 'ArrayOfTxnAliases', 'ArrayofTxnMovements'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createPropertyDataFormat(options?: { request? : models.CreatePropertyDataFormatRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  createPropertyDataFormat(callback: ServiceCallback<any>): void;
  createPropertyDataFormat(options: { request? : models.CreatePropertyDataFormatRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listPropertyDataFormatsWithHttpOperationResponse(scope: string, options?: { includeDefault? : boolean, includeSystem? : boolean, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listPropertyDataFormats(scope: string, options?: { includeDefault? : boolean, includeSystem? : boolean, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  listPropertyDataFormats(scope: string, callback: ServiceCallback<any>): void;
  listPropertyDataFormats(scope: string, options: { includeDefault? : boolean, includeSystem? : boolean, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertyDataFormatWithHttpOperationResponse(scope: string, name: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDataFormat(scope: string, name: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getPropertyDataFormat(scope: string, name: string, callback: ServiceCallback<any>): void;
  getPropertyDataFormat(scope: string, name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {string} options.request.formatType Possible values include: 'Basic',
   * 'Limited', 'Currency'
   *
   * @param {number} options.request.order
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'PropertyArray',
   * 'Percentage', 'Currency', 'BenchmarkType', 'Code', 'Id', 'Uri',
   * 'ArrayOfIds', 'ArrayOfTxnAliases', 'ArrayofTxnMovements'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  updatePropertyDataFormatWithHttpOperationResponse(scope: string, name: string, options?: { request? : models.UpdatePropertyDataFormatRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {string} options.request.formatType Possible values include: 'Basic',
   * 'Limited', 'Currency'
   *
   * @param {number} options.request.order
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'PropertyArray',
   * 'Percentage', 'Currency', 'BenchmarkType', 'Code', 'Id', 'Uri',
   * 'ArrayOfIds', 'ArrayOfTxnAliases', 'ArrayofTxnMovements'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePropertyDataFormat(scope: string, name: string, options?: { request? : models.UpdatePropertyDataFormatRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  updatePropertyDataFormat(scope: string, name: string, callback: ServiceCallback<any>): void;
  updatePropertyDataFormat(scope: string, name: string, options: { request? : models.UpdatePropertyDataFormatRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Perform a reconciliation between two portfolios
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.leftScope]
   *
   * @param {string} [options.request.leftCode]
   *
   * @param {date} [options.request.leftEffectiveAt]
   *
   * @param {date} [options.request.leftAsAt]
   *
   * @param {string} [options.request.rightScope]
   *
   * @param {string} [options.request.rightCode]
   *
   * @param {date} [options.request.rightEffectiveAt]
   *
   * @param {date} [options.request.rightAsAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  performReconciliationWithHttpOperationResponse(options?: { request? : models.ReconciliationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Perform a reconciliation between two portfolios
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.leftScope]
   *
   * @param {string} [options.request.leftCode]
   *
   * @param {date} [options.request.leftEffectiveAt]
   *
   * @param {date} [options.request.leftAsAt]
   *
   * @param {string} [options.request.rightScope]
   *
   * @param {string} [options.request.rightCode]
   *
   * @param {date} [options.request.rightEffectiveAt]
   *
   * @param {date} [options.request.rightAsAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  performReconciliation(options?: { request? : models.ReconciliationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  performReconciliation(callback: ServiceCallback<any>): void;
  performReconciliation(options: { request? : models.ReconciliationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Get all reference portfolios in a scope
   *
   * @param {string} scope
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
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listReferencePortfoliosWithHttpOperationResponse(scope: string, effectiveAt: Date|string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Get all reference portfolios in a scope
   *
   * @param {string} scope
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listReferencePortfolios(scope: string, effectiveAt: Date|string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  listReferencePortfolios(scope: string, effectiveAt: Date|string, callback: ServiceCallback<any>): void;
  listReferencePortfolios(scope: string, effectiveAt: Date|string, options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @param {string} options.referencePortfolio.name
   *
   * @param {string} options.referencePortfolio.code
   *
   * @param {date} [options.referencePortfolio.created]
   *
   * @param {string} options.referencePortfolio.baseCurrency
   *
   * @param {object} [options.referencePortfolio.corporateActionSourceId]
   *
   * @param {string} [options.referencePortfolio.corporateActionSourceId.scope]
   *
   * @param {string} [options.referencePortfolio.corporateActionSourceId.code]
   *
   * @param {string} [options.referencePortfolio.accountingMethod] Possible
   * values include: 'Default', 'AverageCost', 'FirstInFirstOut',
   * 'LastInFirstOut', 'HighestCostFirst', 'LowestCostFirst'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createReferencePortfolioWithHttpOperationResponse(scope: string, options?: { referencePortfolio? : models.CreatePortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   * @param {string} options.referencePortfolio.name
   *
   * @param {string} options.referencePortfolio.code
   *
   * @param {date} [options.referencePortfolio.created]
   *
   * @param {string} options.referencePortfolio.baseCurrency
   *
   * @param {object} [options.referencePortfolio.corporateActionSourceId]
   *
   * @param {string} [options.referencePortfolio.corporateActionSourceId.scope]
   *
   * @param {string} [options.referencePortfolio.corporateActionSourceId.code]
   *
   * @param {string} [options.referencePortfolio.accountingMethod] Possible
   * values include: 'Default', 'AverageCost', 'FirstInFirstOut',
   * 'LastInFirstOut', 'HighestCostFirst', 'LowestCostFirst'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createReferencePortfolio(scope: string, options?: { referencePortfolio? : models.CreatePortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  createReferencePortfolio(scope: string, callback: ServiceCallback<any>): void;
  createReferencePortfolio(scope: string, options: { referencePortfolio? : models.CreatePortfolioRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Get a reference portfolio by name (as opposed to id)
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
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getReferencePortfolioWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Get a reference portfolio by name (as opposed to id)
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
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getReferencePortfolio(scope: string, code: string, effectiveAt: Date|string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getReferencePortfolio(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<any>): void;
  getReferencePortfolio(scope: string, code: string, effectiveAt: Date|string, options: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Delete a specific portfolio
   *
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deleteReferencePortfolioWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Delete a specific portfolio
   *
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteReferencePortfolio(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  deleteReferencePortfolio(scope: string, code: string, callback: ServiceCallback<any>): void;
  deleteReferencePortfolio(scope: string, code: string, options: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Get all the constituents in a reference portfolio
   *
   * @param {string} scope
   *
   * @param {date} effectiveAt
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.referencePortfolioId]
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getReferencePortfolioConstituentsWithHttpOperationResponse(scope: string, effectiveAt: Date|string, code: string, options?: { referencePortfolioId? : string, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Get all the constituents in a reference portfolio
   *
   * @param {string} scope
   *
   * @param {date} effectiveAt
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.referencePortfolioId]
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getReferencePortfolioConstituents(scope: string, effectiveAt: Date|string, code: string, options?: { referencePortfolioId? : string, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getReferencePortfolioConstituents(scope: string, effectiveAt: Date|string, code: string, callback: ServiceCallback<any>): void;
  getReferencePortfolioConstituents(scope: string, effectiveAt: Date|string, code: string, options: { referencePortfolioId? : string, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertReferencePortfolioConstituentsWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { constituents? : models.ReferencePortfolioConstituentDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertReferencePortfolioConstituents(scope: string, code: string, effectiveAt: Date|string, options?: { constituents? : models.ReferencePortfolioConstituentDto[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  upsertReferencePortfolioConstituents(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<any>): void;
  upsertReferencePortfolioConstituents(scope: string, code: string, effectiveAt: Date|string, options: { constituents? : models.ReferencePortfolioConstituentDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getResultsWithHttpOperationResponse(scope: string, key: string, dateParameter: Date|string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getResults(scope: string, key: string, dateParameter: Date|string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getResults(scope: string, key: string, dateParameter: Date|string, callback: ServiceCallback<any>): void;
  getResults(scope: string, key: string, dateParameter: Date|string, options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertResultsWithHttpOperationResponse(scope: string, key: string, dateParameter: Date|string, options?: { request? : models.CreateResultsRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertResults(scope: string, key: string, dateParameter: Date|string, options?: { request? : models.CreateResultsRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  upsertResults(scope: string, key: string, dateParameter: Date|string, callback: ServiceCallback<any>): void;
  upsertResults(scope: string, key: string, dateParameter: Date|string, options: { request? : models.CreateResultsRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Gets the schema for a given entity.
   *
   * @param {string} entity Possible values include: 'PropertyKey',
   * 'FieldSchema', 'Personalisation', 'Security', 'Property', 'Login',
   * 'PropertyDefinition', 'PropertyDataFormat', 'AggregationResponseNode',
   * 'Portfolio', 'CompletePortfolio', 'PortfolioSearchResult',
   * 'PortfolioDetails', 'PortfolioProperties', 'Version', 'AddTradeProperty',
   * 'AnalyticStore', 'AnalyticStoreKey', 'UpsertPortfolioTrades', 'Group',
   * 'Constituent', 'Trade', 'PortfolioHolding', 'AdjustHolding', 'ErrorDetail',
   * 'ErrorResponse', 'InstrumentDefinition', 'ProcessedCommand',
   * 'CreatePortfolio', 'CreateAnalyticStore', 'CreateClientSecurity',
   * 'CreateDerivedPortfolio', 'CreateGroup', 'CreatePropertyDataFormat',
   * 'CreatePropertyDefinition', 'UpdatePortfolio', 'UpdateGroup',
   * 'UpdatePropertyDataFormat', 'UpdatePropertyDefinition', 'SecurityAnalytic',
   * 'AggregationRequest', 'Aggregation', 'NestedAggregation',
   * 'ResultDataSchema', 'Classification', 'SecurityClassification',
   * 'WebLogMessage', 'UpsertPersonalisation', 'CreatePortfolioDetails',
   * 'UpsertConstituent', 'CreateResults', 'Results', 'TryAddClientSecurities',
   * 'TryDeleteClientSecurities', 'TryLookupSecuritiesFromCodes',
   * 'ExpandedGroup', 'CreateCorporateAction', 'CorporateAction',
   * 'CorporateActionTransition', 'ReconciliationRequest', 'ReconciliationBreak',
   * 'TransactionConfigurationData', 'TransactionConfigurationMovementData',
   * 'TransactionConfigurationTypeAlias'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getEntitySchemaWithHttpOperationResponse(entity: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Gets the schema for a given entity.
   *
   * @param {string} entity Possible values include: 'PropertyKey',
   * 'FieldSchema', 'Personalisation', 'Security', 'Property', 'Login',
   * 'PropertyDefinition', 'PropertyDataFormat', 'AggregationResponseNode',
   * 'Portfolio', 'CompletePortfolio', 'PortfolioSearchResult',
   * 'PortfolioDetails', 'PortfolioProperties', 'Version', 'AddTradeProperty',
   * 'AnalyticStore', 'AnalyticStoreKey', 'UpsertPortfolioTrades', 'Group',
   * 'Constituent', 'Trade', 'PortfolioHolding', 'AdjustHolding', 'ErrorDetail',
   * 'ErrorResponse', 'InstrumentDefinition', 'ProcessedCommand',
   * 'CreatePortfolio', 'CreateAnalyticStore', 'CreateClientSecurity',
   * 'CreateDerivedPortfolio', 'CreateGroup', 'CreatePropertyDataFormat',
   * 'CreatePropertyDefinition', 'UpdatePortfolio', 'UpdateGroup',
   * 'UpdatePropertyDataFormat', 'UpdatePropertyDefinition', 'SecurityAnalytic',
   * 'AggregationRequest', 'Aggregation', 'NestedAggregation',
   * 'ResultDataSchema', 'Classification', 'SecurityClassification',
   * 'WebLogMessage', 'UpsertPersonalisation', 'CreatePortfolioDetails',
   * 'UpsertConstituent', 'CreateResults', 'Results', 'TryAddClientSecurities',
   * 'TryDeleteClientSecurities', 'TryLookupSecuritiesFromCodes',
   * 'ExpandedGroup', 'CreateCorporateAction', 'CorporateAction',
   * 'CorporateActionTransition', 'ReconciliationRequest', 'ReconciliationBreak',
   * 'TransactionConfigurationData', 'TransactionConfigurationMovementData',
   * 'TransactionConfigurationTypeAlias'
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getEntitySchema(entity: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getEntitySchema(entity: string, callback: ServiceCallback<any>): void;
  getEntitySchema(entity: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Get the schemas for the provided list of property keys
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.propertyKeys] A comma delimited list of property
   * keys in string format. e.g.
   * "Portfolio/default/PropertyName,Portfolio/differentScope/MyProperty"
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertySchemaWithHttpOperationResponse(options?: { propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Get the schemas for the provided list of property keys
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.propertyKeys] A comma delimited list of property
   * keys in string format. e.g.
   * "Portfolio/default/PropertyName,Portfolio/differentScope/MyProperty"
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertySchema(options?: { propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getPropertySchema(callback: ServiceCallback<any>): void;
  getPropertySchema(options: { propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getValueTypesWithHttpOperationResponse(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getValueTypes(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getValueTypes(callback: ServiceCallback<any>): void;
  getValueTypes(options: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Attempt to create one or more client securities. Failed securities
   * will be identified in the body of the response.
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  batchAddClientSecuritiesWithHttpOperationResponse(options?: { definitions? : models.CreateClientSecurityRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Attempt to create one or more client securities. Failed securities
   * will be identified in the body of the response.
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  batchAddClientSecurities(options?: { definitions? : models.CreateClientSecurityRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  batchAddClientSecurities(callback: ServiceCallback<any>): void;
  batchAddClientSecurities(options: { definitions? : models.CreateClientSecurityRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Attempt to delete one or more client securities. Failed securities
   * will be identified in the body of the response.
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
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  batchDeleteClientSecuritiesWithHttpOperationResponse(options?: { uids? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Attempt to delete one or more client securities. Failed securities
   * will be identified in the body of the response.
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
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  batchDeleteClientSecurities(options?: { uids? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  batchDeleteClientSecurities(callback: ServiceCallback<any>): void;
  batchDeleteClientSecurities(options: { uids? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Get an individual security by the unique security uid.  Optionally,
   * decorate each security with specific properties.
   *
   * @param {string} uid The uid of the requested security
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.propertyKeys] Keys of the properties to be retrieved
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getSecurityWithHttpOperationResponse(uid: string, options?: { asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Get an individual security by the unique security uid.  Optionally,
   * decorate each security with specific properties.
   *
   * @param {string} uid The uid of the requested security
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.propertyKeys] Keys of the properties to be retrieved
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getSecurity(uid: string, options?: { asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getSecurity(uid: string, callback: ServiceCallback<any>): void;
  getSecurity(uid: string, options: { asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Lookup more than one security by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each security with specific
   * properties.
   *
   * @param {string} codeType The type of identifier. Possible values include:
   * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip',
   * 'ClientInternal', 'Figi', 'Wertpapier'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.codes] An array of codes
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.propertyKeys] Keys of the properties to be retrieved
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  lookupSecuritiesFromCodesWithHttpOperationResponse(codeType: string, options?: { codes? : string[], asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Lookup more than one security by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each security with specific
   * properties.
   *
   * @param {string} codeType The type of identifier. Possible values include:
   * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip',
   * 'ClientInternal', 'Figi', 'Wertpapier'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.codes] An array of codes
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.propertyKeys] Keys of the properties to be retrieved
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  lookupSecuritiesFromCodes(codeType: string, options?: { codes? : string[], asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  lookupSecuritiesFromCodes(codeType: string, callback: ServiceCallback<any>): void;
  lookupSecuritiesFromCodes(codeType: string, options: { codes? : string[], asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Lookup a large number of securities by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each security with specific
   * properties.
   *
   * @param {string} codeType The type of identifier. Possible values include:
   * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip',
   * 'ClientInternal', 'Figi', 'Wertpapier'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.codes] An array of codes
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.propertyKeys] Keys of the properties to be retrieved
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  lookupSecuritiesFromCodesBulkWithHttpOperationResponse(codeType: string, options?: { codes? : string[], asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Lookup a large number of securities by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each security with specific
   * properties.
   *
   * @param {string} codeType The type of identifier. Possible values include:
   * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip',
   * 'ClientInternal', 'Figi', 'Wertpapier'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.codes] An array of codes
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.propertyKeys] Keys of the properties to be retrieved
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  lookupSecuritiesFromCodesBulk(codeType: string, options?: { codes? : string[], asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  lookupSecuritiesFromCodesBulk(codeType: string, callback: ServiceCallback<any>): void;
  lookupSecuritiesFromCodesBulk(codeType: string, options: { codes? : string[], asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
}

export { LUSIDAPI, models as LUSIDAPIModels };
