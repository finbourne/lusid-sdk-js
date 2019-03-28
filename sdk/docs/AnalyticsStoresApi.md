# LusidSdk.AnalyticsStoresApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAnalyticStore**](AnalyticsStoresApi.md#createAnalyticStore) | **POST** /api/analytics | Create analytic store
[**deleteAnalyticStore**](AnalyticsStoresApi.md#deleteAnalyticStore) | **DELETE** /api/analytics/{scope}/{year}/{month}/{day} | Delete analytic store
[**getAnalyticStore**](AnalyticsStoresApi.md#getAnalyticStore) | **GET** /api/analytics/{scope}/{year}/{month}/{day} | Get analytic store
[**listAnalyticStores**](AnalyticsStoresApi.md#listAnalyticStores) | **GET** /api/analytics | List analytic stores
[**setAnalytics**](AnalyticsStoresApi.md#setAnalytics) | **PUT** /api/analytics/{scope}/{year}/{month}/{day}/prices | Set analytic data


<a name="createAnalyticStore"></a>
# **createAnalyticStore**
> AnalyticStore createAnalyticStore(opts)

Create analytic store

Create a new analytic store for the specified scope and date

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.AnalyticsStoresApi();
var opts = {
  'createAnalyticStoreRequest': new LusidSdk.CreateAnalyticStoreRequest() // CreateAnalyticStoreRequest | A populated analytic store definition
};
apiInstance.createAnalyticStore(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAnalyticStoreRequest** | [**CreateAnalyticStoreRequest**](CreateAnalyticStoreRequest.md)| A populated analytic store definition | [optional] 

### Return type

[**AnalyticStore**](AnalyticStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="deleteAnalyticStore"></a>
# **deleteAnalyticStore**
> DeletedEntityResponse deleteAnalyticStore(scope, year, month, day)

Delete analytic store

Delete stored analytic data in the specified scope for the specified date

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.AnalyticsStoresApi();
var scope = "scope_example"; // String | The analytics data scope
var year = 56; // Number | The year component of the date
var month = 56; // Number | The month component of the date
var day = 56; // Number | The day component of the date
apiInstance.deleteAnalyticStore(scope, year, month, day).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The analytics data scope | 
 **year** | **Number**| The year component of the date | 
 **month** | **Number**| The month component of the date | 
 **day** | **Number**| The day component of the date | 

### Return type

[**DeletedEntityResponse**](DeletedEntityResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getAnalyticStore"></a>
# **getAnalyticStore**
> AnalyticStore getAnalyticStore(scope, year, month, day, opts)

Get analytic store

Get the meta data associated with a specified scope and date combination (analytic store)

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.AnalyticsStoresApi();
var scope = "scope_example"; // String | The analytics data scope
var year = 56; // Number | The year component of the date for the data in the scope
var month = 56; // Number | The month component of the date for the data in the scope
var day = 56; // Number | The day component of the date for the data in the scope
var opts = {
  'asAt': new Date("2013-10-20T19:20:30+01:00") // Date | Optional. The AsAt date of the data
};
apiInstance.getAnalyticStore(scope, year, month, day, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The analytics data scope | 
 **year** | **Number**| The year component of the date for the data in the scope | 
 **month** | **Number**| The month component of the date for the data in the scope | 
 **day** | **Number**| The day component of the date for the data in the scope | 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 

### Return type

[**AnalyticStore**](AnalyticStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="listAnalyticStores"></a>
# **listAnalyticStores**
> ResourceListOfAnalyticStoreKey listAnalyticStores(opts)

List analytic stores

List all defined analytic stores

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.AnalyticsStoresApi();
var opts = {
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example" // String | Optional. Expression to filter the result set
};
apiInstance.listAnalyticStores(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 

### Return type

[**ResourceListOfAnalyticStoreKey**](ResourceListOfAnalyticStoreKey.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="setAnalytics"></a>
# **setAnalytics**
> AnalyticStore setAnalytics(scope, year, month, day, opts)

Set analytic data

Store the complete set of analytics for an existing analytic store for the specified scope and date

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.AnalyticsStoresApi();
var scope = "scope_example"; // String | The scope of the data being stored
var year = 56; // Number | The year component of the date for the data
var month = 56; // Number | The month component of the date for the data
var day = 56; // Number | The day component of the date for the data
var opts = {
  'instrumentAnalytic': [new LusidSdk.InstrumentAnalytic()] // [InstrumentAnalytic] | The analytic data being inserted
};
apiInstance.setAnalytics(scope, year, month, day, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the data being stored | 
 **year** | **Number**| The year component of the date for the data | 
 **month** | **Number**| The month component of the date for the data | 
 **day** | **Number**| The day component of the date for the data | 
 **instrumentAnalytic** | [**[InstrumentAnalytic]**](Array.md)| The analytic data being inserted | [optional] 

### Return type

[**AnalyticStore**](AnalyticStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

