# LusidSdk.DataTypesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDataType**](DataTypesApi.md#createDataType) | **POST** /api/datatypes | Create data type definition
[**getDataType**](DataTypesApi.md#getDataType) | **GET** /api/datatypes/{scope}/{code} | Get data type definition
[**getUnitsFromDataType**](DataTypesApi.md#getUnitsFromDataType) | **GET** /api/datatypes/{scope}/{code}/units | Get units from data type
[**listDataTypes**](DataTypesApi.md#listDataTypes) | **GET** /api/datatypes/{scope} | List data types
[**updateDataType**](DataTypesApi.md#updateDataType) | **PUT** /api/datatypes/{scope}/{code} | Update data type definition


<a name="createDataType"></a>
# **createDataType**
> DataType createDataType(opts)

Create data type definition

Create a new data type definition    Data types cannot be created in either the \&quot;default\&quot; or \&quot;system\&quot; scopes.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.DataTypesApi();
var opts = {
  'createDataTypeRequest': new LusidSdk.CreateDataTypeRequest() // CreateDataTypeRequest | The definition of the new data type
};
apiInstance.createDataType(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDataTypeRequest** | [**CreateDataTypeRequest**](CreateDataTypeRequest.md)| The definition of the new data type | [optional] 

### Return type

[**DataType**](DataType.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="getDataType"></a>
# **getDataType**
> DataType getDataType(scope, code)

Get data type definition

Get the definition of a specified data type

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.DataTypesApi();
var scope = "scope_example"; // String | The scope of the data type
var code = "code_example"; // String | The code of the data type
apiInstance.getDataType(scope, code).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the data type | 
 **code** | **String**| The code of the data type | 

### Return type

[**DataType**](DataType.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getUnitsFromDataType"></a>
# **getUnitsFromDataType**
> ResourceListOfIUnitDefinitionDto getUnitsFromDataType(scope, code, opts)

Get units from data type

Get the definitions of the specified units associated bound to a specific data type

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.DataTypesApi();
var scope = "scope_example"; // String | The scope of the data type
var code = "code_example"; // String | The code of the data type
var opts = {
  'units': ["null"], // [String] | One or more unit identifiers for which the definition is being requested
  'filter': "filter_example" // String | Optional. Expression to filter the result set
};
apiInstance.getUnitsFromDataType(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the data type | 
 **code** | **String**| The code of the data type | 
 **units** | [**[String]**](String.md)| One or more unit identifiers for which the definition is being requested | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 

### Return type

[**ResourceListOfIUnitDefinitionDto**](ResourceListOfIUnitDefinitionDto.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="listDataTypes"></a>
# **listDataTypes**
> ResourceListOfDataType listDataTypes(scope, opts)

List data types

List all data types in a specified scope

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.DataTypesApi();
var scope = "scope_example"; // String | The requested scope of the data types
var opts = {
  'includeDefault': true, // Boolean | Whether to additionally include those data types in the \"default\" scope
  'includeSystem': true, // Boolean | Whether to additionally include those data types in the \"system\" scope
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example" // String | Optional. Expression to filter the result set
};
apiInstance.listDataTypes(scope, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The requested scope of the data types | 
 **includeDefault** | **Boolean**| Whether to additionally include those data types in the \&quot;default\&quot; scope | [optional] 
 **includeSystem** | **Boolean**| Whether to additionally include those data types in the \&quot;system\&quot; scope | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 

### Return type

[**ResourceListOfDataType**](ResourceListOfDataType.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="updateDataType"></a>
# **updateDataType**
> DataType updateDataType(scope, code, opts)

Update data type definition

Update the definition of the specified existing data type    Not all elements within a data type definition are modifiable due to the potential implications for data  already stored against the types

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.DataTypesApi();
var scope = "scope_example"; // String | The scope of the data type
var code = "code_example"; // String | The code of the data type
var opts = {
  'updateDataTypeRequest': new LusidSdk.UpdateDataTypeRequest() // UpdateDataTypeRequest | The updated definition of the data type
};
apiInstance.updateDataType(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the data type | 
 **code** | **String**| The code of the data type | 
 **updateDataTypeRequest** | [**UpdateDataTypeRequest**](UpdateDataTypeRequest.md)| The updated definition of the data type | [optional] 

### Return type

[**DataType**](DataType.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

