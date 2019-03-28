# LusidSdk.PropertyDefinitionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPropertyDefinition**](PropertyDefinitionsApi.md#createPropertyDefinition) | **POST** /api/propertydefinitions | Define a new property
[**deletePropertyDefinition**](PropertyDefinitionsApi.md#deletePropertyDefinition) | **DELETE** /api/propertydefinitions/{domain}/{scope}/{code} | Delete property definition
[**getMultiplePropertyDefinitions**](PropertyDefinitionsApi.md#getMultiplePropertyDefinitions) | **GET** /api/propertydefinitions | Get multiple property definitions
[**getPropertyDefinition**](PropertyDefinitionsApi.md#getPropertyDefinition) | **GET** /api/propertydefinitions/{domain}/{scope}/{code} | Get property definition
[**updatePropertyDefinition**](PropertyDefinitionsApi.md#updatePropertyDefinition) | **PUT** /api/propertydefinitions/{domain}/{scope}/{code} | Update the definition of the specified existing property


<a name="createPropertyDefinition"></a>
# **createPropertyDefinition**
> PropertyDefinition createPropertyDefinition(opts)

Define a new property

Create a new property definition

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PropertyDefinitionsApi();
var opts = {
  'createPropertyDefinitionRequest': new LusidSdk.CreatePropertyDefinitionRequest() // CreatePropertyDefinitionRequest | The definition of the new property
};
apiInstance.createPropertyDefinition(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPropertyDefinitionRequest** | [**CreatePropertyDefinitionRequest**](CreatePropertyDefinitionRequest.md)| The definition of the new property | [optional] 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="deletePropertyDefinition"></a>
# **deletePropertyDefinition**
> DeletedEntityResponse deletePropertyDefinition(domain, scope, code)

Delete property definition

Delete the definition of the specified property

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PropertyDefinitionsApi();
var domain = "domain_example"; // String | The Property Domain of the property to be deleted
var scope = "scope_example"; // String | The scope of the property to be deleted
var code = "code_example"; // String | The code of the property to be deleted
apiInstance.deletePropertyDefinition(domain, scope, code).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| The Property Domain of the property to be deleted | 
 **scope** | **String**| The scope of the property to be deleted | 
 **code** | **String**| The code of the property to be deleted | 

### Return type

[**DeletedEntityResponse**](DeletedEntityResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getMultiplePropertyDefinitions"></a>
# **getMultiplePropertyDefinitions**
> ResourceListOfPropertyDefinition getMultiplePropertyDefinitions(opts)

Get multiple property definitions

Get one or more property definitions

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PropertyDefinitionsApi();
var opts = {
  'propertyKeys': ["null"], // [String] | One or more keys for properties for which the schema should be returned
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example" // String | Optional. Expression to filter the result set
};
apiInstance.getMultiplePropertyDefinitions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyKeys** | [**[String]**](String.md)| One or more keys for properties for which the schema should be returned | [optional] 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 

### Return type

[**ResourceListOfPropertyDefinition**](ResourceListOfPropertyDefinition.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getPropertyDefinition"></a>
# **getPropertyDefinition**
> PropertyDefinition getPropertyDefinition(domain, scope, code, opts)

Get property definition

Retrieve the definition for the identified property

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PropertyDefinitionsApi();
var domain = "domain_example"; // String | The Property Domain of the requested property
var scope = "scope_example"; // String | The scope of the requested property
var code = "code_example"; // String | The code of the requested property
var opts = {
  'asAt': new Date("2013-10-20T19:20:30+01:00") // Date | Optional. The AsAt date of the data
};
apiInstance.getPropertyDefinition(domain, scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| The Property Domain of the requested property | 
 **scope** | **String**| The scope of the requested property | 
 **code** | **String**| The code of the requested property | 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="updatePropertyDefinition"></a>
# **updatePropertyDefinition**
> PropertyDefinition updatePropertyDefinition(domain, scope, code, opts)

Update the definition of the specified existing property

Not all elements within a property definition are modifiable due to the potential implications for data  already stored against these properties

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PropertyDefinitionsApi();
var domain = "domain_example"; // String | The Property Domain of the property being updated
var scope = "scope_example"; // String | The scope of the property to be updated
var code = "code_example"; // String | The code of the property to be updated
var opts = {
  'updatePropertyDefinitionRequest': new LusidSdk.UpdatePropertyDefinitionRequest() // UpdatePropertyDefinitionRequest | The updated definition of the property
};
apiInstance.updatePropertyDefinition(domain, scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| The Property Domain of the property being updated | 
 **scope** | **String**| The scope of the property to be updated | 
 **code** | **String**| The code of the property to be updated | 
 **updatePropertyDefinitionRequest** | [**UpdatePropertyDefinitionRequest**](UpdatePropertyDefinitionRequest.md)| The updated definition of the property | [optional] 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

