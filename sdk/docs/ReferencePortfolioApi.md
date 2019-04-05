# LusidSdk.ReferencePortfolioApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReferencePortfolio**](ReferencePortfolioApi.md#createReferencePortfolio) | **POST** /api/referenceportfolios/{scope} | Create reference portfolio
[**getReferencePortfolioConstituents**](ReferencePortfolioApi.md#getReferencePortfolioConstituents) | **GET** /api/referenceportfolios/{scope}/{code}/constituents | Get constituents
[**listConstituentsAdjustments**](ReferencePortfolioApi.md#listConstituentsAdjustments) | **GET** /api/referenceportfolios/{scope}/{code}/constituentsadjustments | Gets constituents adjustments in an interval of effective time.
[**upsertReferencePortfolioConstituents**](ReferencePortfolioApi.md#upsertReferencePortfolioConstituents) | **POST** /api/referenceportfolios/{scope}/{code}/constituents | Add constituents


<a name="createReferencePortfolio"></a>
# **createReferencePortfolio**
> Portfolio createReferencePortfolio(scope, opts)

Create reference portfolio

Create a new reference portfolio.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.ReferencePortfolioApi();
var scope = "scope_example"; // String | The intended scope of the portfolio
var opts = {
  'createReferencePortfolioRequest': new LusidSdk.CreateReferencePortfolioRequest() // CreateReferencePortfolioRequest | The portfolio creation request object
};
apiInstance.createReferencePortfolio(scope, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The intended scope of the portfolio | 
 **createReferencePortfolioRequest** | [**CreateReferencePortfolioRequest**](CreateReferencePortfolioRequest.md)| The portfolio creation request object | [optional] 

### Return type

[**Portfolio**](Portfolio.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="getReferencePortfolioConstituents"></a>
# **getReferencePortfolioConstituents**
> GetReferencePortfolioConstituentsResponse getReferencePortfolioConstituents(scope, code, opts)

Get constituents

Get all the constituents in the specified reference portfolio

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.ReferencePortfolioApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the constituents to retrieve
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many
  'instrumentPropertyKeys': ["null"] // [String] | Optional. The Properties of the constituents
};
apiInstance.getReferencePortfolioConstituents(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the portfolio | 
 **code** | **String**| The code of the portfolio | 
 **effectiveAt** | **Date**| Optional. The effective date of the constituents to retrieve | [optional] 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many | [optional] 
 **instrumentPropertyKeys** | [**[String]**](String.md)| Optional. The Properties of the constituents | [optional] 

### Return type

[**GetReferencePortfolioConstituentsResponse**](GetReferencePortfolioConstituentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="listConstituentsAdjustments"></a>
# **listConstituentsAdjustments**
> ResourceListOfConstituentsAdjustmentHeader listConstituentsAdjustments(scope, code, opts)

Gets constituents adjustments in an interval of effective time.

Specify a time period in which you&#39;d like to see the list of times that adjustments where made to this portfolio

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.ReferencePortfolioApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | Code for the portfolio
var opts = {
  'fromEffectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Events between this time (inclusive) and the toEffectiveAt are returned.
  'toEffectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Events between this time (inclusive) and the fromEffectiveAt are returned.
  'asAtTime': new Date("2013-10-20T19:20:30+01:00") // Date | The as-at time for which the result is valid.
};
apiInstance.listConstituentsAdjustments(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the portfolio | 
 **code** | **String**| Code for the portfolio | 
 **fromEffectiveAt** | **Date**| Events between this time (inclusive) and the toEffectiveAt are returned. | [optional] 
 **toEffectiveAt** | **Date**| Events between this time (inclusive) and the fromEffectiveAt are returned. | [optional] 
 **asAtTime** | **Date**| The as-at time for which the result is valid. | [optional] 

### Return type

[**ResourceListOfConstituentsAdjustmentHeader**](ResourceListOfConstituentsAdjustmentHeader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="upsertReferencePortfolioConstituents"></a>
# **upsertReferencePortfolioConstituents**
> UpsertReferencePortfolioConstituentsResponse upsertReferencePortfolioConstituents(scope, code, opts)

Add constituents

Add constituents to the specified reference portfolio.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.ReferencePortfolioApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'upsertReferencePortfolioConstituentsRequest': new LusidSdk.UpsertReferencePortfolioConstituentsRequest() // UpsertReferencePortfolioConstituentsRequest | The constituents to upload to the portfolio
};
apiInstance.upsertReferencePortfolioConstituents(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the portfolio | 
 **code** | **String**| The code of the portfolio | 
 **upsertReferencePortfolioConstituentsRequest** | [**UpsertReferencePortfolioConstituentsRequest**](UpsertReferencePortfolioConstituentsRequest.md)| The constituents to upload to the portfolio | [optional] 

### Return type

[**UpsertReferencePortfolioConstituentsResponse**](UpsertReferencePortfolioConstituentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

