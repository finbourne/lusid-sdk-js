# LusidSdk.SearchApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instrumentsSearch**](SearchApi.md#instrumentsSearch) | **POST** /api/search/instruments | Search instruments
[**portfolioGroupsSearch**](SearchApi.md#portfolioGroupsSearch) | **POST** /api/search/portfoliogroups | Search portfolio groups
[**portfoliosSearch**](SearchApi.md#portfoliosSearch) | **POST** /api/search/portfolios | Search portfolios
[**propertiesSearch**](SearchApi.md#propertiesSearch) | **POST** /api/search/propertydefinitions | Search property definitions


<a name="instrumentsSearch"></a>
# **instrumentsSearch**
> [InstrumentMatch] instrumentsSearch(opts)

Search instruments

Search through instruments that have been mastered in LUSID, and optionally augment results with instruments from a symbology service

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.SearchApi();
var opts = {
  'masteredEffectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date for searching mastered instruments. If this is not set, then the current date is taken.  This parameter has no effect on instruments that have not been mastered within LUSID.
  'masteredOnly': false, // Boolean | Optional. If set to true, only search over instruments that have been mastered within LUSID. Default to false
  'instrumentSearchProperty': [new LusidSdk.InstrumentSearchProperty()] // [InstrumentSearchProperty] | A collection of instrument symbols to search for
};
apiInstance.instrumentsSearch(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masteredEffectiveAt** | **Date**| Optional. The effective date for searching mastered instruments. If this is not set, then the current date is taken.  This parameter has no effect on instruments that have not been mastered within LUSID. | [optional] 
 **masteredOnly** | **Boolean**| Optional. If set to true, only search over instruments that have been mastered within LUSID. Default to false | [optional] [default to false]
 **instrumentSearchProperty** | [**[InstrumentSearchProperty]**](Array.md)| A collection of instrument symbols to search for | [optional] 

### Return type

[**[InstrumentMatch]**](InstrumentMatch.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="portfolioGroupsSearch"></a>
# **portfolioGroupsSearch**
> ResourceListOfPortfolioGroup portfolioGroupsSearch(opts)

Search portfolio groups

Search through all portfolio groups

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.SearchApi();
var opts = {
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example", // String | Optional. Expression to filter the result set
  'body': "body_example" // String | A valid Elasticsearch 5.x request
};
apiInstance.portfolioGroupsSearch(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 
 **body** | **String**| A valid Elasticsearch 5.x request | [optional] 

### Return type

[**ResourceListOfPortfolioGroup**](ResourceListOfPortfolioGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: text/plain, application/json, text/json

<a name="portfoliosSearch"></a>
# **portfoliosSearch**
> ResourceListOfPortfolioSearchResult portfoliosSearch(opts)

Search portfolios

Search through all portfolios

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.SearchApi();
var opts = {
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example", // String | Optional. Expression to filter the result set
  'body': "body_example" // String | A valid Elasticsearch 5.x request
};
apiInstance.portfoliosSearch(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 
 **body** | **String**| A valid Elasticsearch 5.x request | [optional] 

### Return type

[**ResourceListOfPortfolioSearchResult**](ResourceListOfPortfolioSearchResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: text/plain, application/json, text/json

<a name="propertiesSearch"></a>
# **propertiesSearch**
> ResourceListOfPropertyDefinition propertiesSearch(opts)

Search property definitions

Search through all property definitions

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.SearchApi();
var opts = {
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example", // String | Optional. Expression to filter the result set
  'body': "body_example" // String | A valid Elasticsearch 5.x request
};
apiInstance.propertiesSearch(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 
 **body** | **String**| A valid Elasticsearch 5.x request | [optional] 

### Return type

[**ResourceListOfPropertyDefinition**](ResourceListOfPropertyDefinition.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: text/plain, application/json, text/json

