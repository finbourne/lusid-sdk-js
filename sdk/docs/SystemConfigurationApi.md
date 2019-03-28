# LusidSdk.SystemConfigurationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConfigurationTransactionType**](SystemConfigurationApi.md#createConfigurationTransactionType) | **POST** /api/systemconfiguration/transactiontypes | Create transaction type
[**listConfigurationTransactionTypes**](SystemConfigurationApi.md#listConfigurationTransactionTypes) | **GET** /api/systemconfiguration/transactiontypes | List transaction types
[**setConfigurationTransactionTypes**](SystemConfigurationApi.md#setConfigurationTransactionTypes) | **PUT** /api/systemconfiguration/transactiontypes | Set transaction types


<a name="createConfigurationTransactionType"></a>
# **createConfigurationTransactionType**
> ResourceListOfTransactionConfigurationData createConfigurationTransactionType(opts)

Create transaction type

Create a new transaction type by specifying a definition and the mappings to movements

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.SystemConfigurationApi();
var opts = {
  'transactionConfigurationDataRequest': new LusidSdk.TransactionConfigurationDataRequest() // TransactionConfigurationDataRequest | A transaction type definition
};
apiInstance.createConfigurationTransactionType(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionConfigurationDataRequest** | [**TransactionConfigurationDataRequest**](TransactionConfigurationDataRequest.md)| A transaction type definition | [optional] 

### Return type

[**ResourceListOfTransactionConfigurationData**](ResourceListOfTransactionConfigurationData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="listConfigurationTransactionTypes"></a>
# **listConfigurationTransactionTypes**
> ResourceListOfTransactionConfigurationData listConfigurationTransactionTypes()

List transaction types

Get the list of persisted transaction types

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.SystemConfigurationApi();
apiInstance.listConfigurationTransactionTypes().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResourceListOfTransactionConfigurationData**](ResourceListOfTransactionConfigurationData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="setConfigurationTransactionTypes"></a>
# **setConfigurationTransactionTypes**
> ResourceListOfTransactionConfigurationData setConfigurationTransactionTypes(opts)

Set transaction types

Set all transaction types to be used by the movements engine, for the organisation                WARNING! Changing these mappings will have a material impact on how data, new and old, is processed and aggregated by LUSID. This will affect your whole organisation. Only change if you are fully aware of the implications of the change.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.SystemConfigurationApi();
var opts = {
  'transactionConfigurationDataRequest': [new LusidSdk.TransactionConfigurationDataRequest()] // [TransactionConfigurationDataRequest] | The complete set of transaction type definitions
};
apiInstance.setConfigurationTransactionTypes(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionConfigurationDataRequest** | [**[TransactionConfigurationDataRequest]**](Array.md)| The complete set of transaction type definitions | [optional] 

### Return type

[**ResourceListOfTransactionConfigurationData**](ResourceListOfTransactionConfigurationData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

