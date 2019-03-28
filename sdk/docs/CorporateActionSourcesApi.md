# LusidSdk.CorporateActionSourcesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchUpsertCorporateActions**](CorporateActionSourcesApi.md#batchUpsertCorporateActions) | **POST** /api/corporateactionsources/{scope}/{code}/corporateactions | Upsert corporate actions
[**createCorporateActionSource**](CorporateActionSourcesApi.md#createCorporateActionSource) | **POST** /api/corporateactionsources | Create Corporate Action Source
[**deleteCorporateActionSource**](CorporateActionSourcesApi.md#deleteCorporateActionSource) | **DELETE** /api/corporateactionsources/{scope}/{code} | Delete a corporate action source
[**getCorporateActions**](CorporateActionSourcesApi.md#getCorporateActions) | **GET** /api/corporateactionsources/{scope}/{code}/corporateactions | Get corporate actions
[**listCorporateActionSources**](CorporateActionSourcesApi.md#listCorporateActionSources) | **GET** /api/corporateactionsources | Get corporate action sources


<a name="batchUpsertCorporateActions"></a>
# **batchUpsertCorporateActions**
> UpsertCorporateActionsResponse batchUpsertCorporateActions(scope, code, opts)

Upsert corporate actions

Attempt to create/update one or more corporate action in a specified corporate action source. Failed actions will be identified in the body of the response.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.CorporateActionSourcesApi();
var scope = "scope_example"; // String | The scope of corporate action source
var code = "code_example"; // String | The code of the corporate action source
var opts = {
  'createCorporateAction': [new LusidSdk.CreateCorporateAction()] // [CreateCorporateAction] | The corporate action definitions
};
apiInstance.batchUpsertCorporateActions(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of corporate action source | 
 **code** | **String**| The code of the corporate action source | 
 **createCorporateAction** | [**[CreateCorporateAction]**](Array.md)| The corporate action definitions | [optional] 

### Return type

[**UpsertCorporateActionsResponse**](UpsertCorporateActionsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="createCorporateActionSource"></a>
# **createCorporateActionSource**
> CorporateActionSource createCorporateActionSource(createCorporateActionSourceRequest)

Create Corporate Action Source

Attempt to create a corporate action source.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.CorporateActionSourcesApi();
var createCorporateActionSourceRequest = new LusidSdk.CreateCorporateActionSourceRequest(); // CreateCorporateActionSourceRequest | The corporate action source definition
apiInstance.createCorporateActionSource(createCorporateActionSourceRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCorporateActionSourceRequest** | [**CreateCorporateActionSourceRequest**](CreateCorporateActionSourceRequest.md)| The corporate action source definition | 

### Return type

[**CorporateActionSource**](CorporateActionSource.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="deleteCorporateActionSource"></a>
# **deleteCorporateActionSource**
> DeletedEntityResponse deleteCorporateActionSource(scope, code, opts)

Delete a corporate action source

Deletes a single corporate action source

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.CorporateActionSourcesApi();
var scope = "scope_example"; // String | The Scope of the Corporate Action Source to be deleted
var code = "code_example"; // String | The Code of the Corporate Action Source to be deleted
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00") // Date | Optional. The start effective date of the data
};
apiInstance.deleteCorporateActionSource(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The Scope of the Corporate Action Source to be deleted | 
 **code** | **String**| The Code of the Corporate Action Source to be deleted | 
 **effectiveAt** | **Date**| Optional. The start effective date of the data | [optional] 

### Return type

[**DeletedEntityResponse**](DeletedEntityResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getCorporateActions"></a>
# **getCorporateActions**
> ResourceListOfCorporateAction getCorporateActions(scope, code, opts)

Get corporate actions

Gets corporate actions from a specific corporate action source

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.CorporateActionSourcesApi();
var scope = "scope_example"; // String | The scope of the corporate action source
var code = "code_example"; // String | The code of the corporate action source
var opts = {
  'fromEffectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The start effective date of the data range
  'toEffectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The end effective date of the data range
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many
  'filter': "filter_example" // String | Optional. Expression to filter the result set
};
apiInstance.getCorporateActions(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the corporate action source | 
 **code** | **String**| The code of the corporate action source | 
 **fromEffectiveAt** | **Date**| Optional. The start effective date of the data range | [optional] 
 **toEffectiveAt** | **Date**| Optional. The end effective date of the data range | [optional] 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 

### Return type

[**ResourceListOfCorporateAction**](ResourceListOfCorporateAction.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="listCorporateActionSources"></a>
# **listCorporateActionSources**
> ResourceListOfCorporateActionSource listCorporateActionSources(opts)

Get corporate action sources

Gets a list of all corporate action sources

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.CorporateActionSourcesApi();
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The start effective date of the data range
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many
  'filter': "filter_example" // String | Optional. Expression to filter the result set
};
apiInstance.listCorporateActionSources(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **effectiveAt** | **Date**| Optional. The start effective date of the data range | [optional] 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 

### Return type

[**ResourceListOfCorporateActionSource**](ResourceListOfCorporateActionSource.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

