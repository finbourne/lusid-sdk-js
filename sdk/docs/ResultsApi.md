# LusidSdk.ResultsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getResults**](ResultsApi.md#getResults) | **GET** /api/results/{scope}/{key}/{date} | Get results
[**upsertResults**](ResultsApi.md#upsertResults) | **POST** /api/results/{scope}/{key}/{date} | Upsert results


<a name="getResults"></a>
# **getResults**
> Results getResults(scope, key, _date, opts)

Get results

Retrieve some previously stored results

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.ResultsApi();
var scope = "scope_example"; // String | The scope of the data
var key = "key_example"; // String | The key that identifies the data
var _date = new Date("2013-10-20T19:20:30+01:00"); // Date | The date for which the data was loaded
var opts = {
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56 // Number | Optional. When paginating, limit the number of returned results to this many.
};
apiInstance.getResults(scope, key, _date, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the data | 
 **key** | **String**| The key that identifies the data | 
 **_date** | **Date**| The date for which the data was loaded | 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 

### Return type

[**Results**](Results.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="upsertResults"></a>
# **upsertResults**
> Results upsertResults(scope, key, _date, opts)

Upsert results

Upsert pre-calculated results against a specified scope/key/date combination

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.ResultsApi();
var scope = "scope_example"; // String | The scope of the data
var key = "key_example"; // String | The key that identifies the data
var _date = new Date("2013-10-20T19:20:30+01:00"); // Date | The date for which the data is relevant
var opts = {
  'createResults': new LusidSdk.CreateResults() // CreateResults | The results to upload
};
apiInstance.upsertResults(scope, key, _date, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the data | 
 **key** | **String**| The key that identifies the data | 
 **_date** | **Date**| The date for which the data is relevant | 
 **createResults** | [**CreateResults**](CreateResults.md)| The results to upload | [optional] 

### Return type

[**Results**](Results.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

