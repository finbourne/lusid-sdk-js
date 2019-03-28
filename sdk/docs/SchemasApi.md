# LusidSdk.SchemasApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEntitySchema**](SchemasApi.md#getEntitySchema) | **GET** /api/schemas/entities/{entity} | Get schema
[**getPropertySchema**](SchemasApi.md#getPropertySchema) | **GET** /api/schemas/properties | Get property schema
[**getValueTypes**](SchemasApi.md#getValueTypes) | **GET** /api/schemas/types | Get value types
[**listEntities**](SchemasApi.md#listEntities) | **GET** /api/schemas/entities | List entities


<a name="getEntitySchema"></a>
# **getEntitySchema**
> Schema getEntitySchema(entity)

Get schema

Gets the schema and meta-data for a given entity

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.SchemasApi();
var entity = "entity_example"; // String | The name of a valid entity
apiInstance.getEntitySchema(entity).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | **String**| The name of a valid entity | 

### Return type

[**Schema**](Schema.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getPropertySchema"></a>
# **getPropertySchema**
> PropertySchema getPropertySchema(opts)

Get property schema

Get the schemas for the provided list of property keys.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.SchemasApi();
var opts = {
  'propertyKeys': ["null"], // [String] | One or more property keys for which the schema is requested
  'asAt': new Date("2013-10-20T19:20:30+01:00") // Date | Optional. The AsAt date of the data
};
apiInstance.getPropertySchema(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyKeys** | [**[String]**](String.md)| One or more property keys for which the schema is requested | [optional] 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 

### Return type

[**PropertySchema**](PropertySchema.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getValueTypes"></a>
# **getValueTypes**
> ResourceListOfValueType getValueTypes(opts)

Get value types

Gets the available value types for which a schema is available.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.SchemasApi();
var opts = {
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56 // Number | Optional. When paginating, limit the number of returned results to this many.
};
apiInstance.getValueTypes(opts).then(function(data) {
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

### Return type

[**ResourceListOfValueType**](ResourceListOfValueType.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="listEntities"></a>
# **listEntities**
> ResourceListOfString listEntities()

List entities

List all available entities for which schema information is available.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.SchemasApi();
apiInstance.listEntities().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResourceListOfString**](ResourceListOfString.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

