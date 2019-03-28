# LusidSdk.ReconciliationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reconcileHoldings**](ReconciliationsApi.md#reconcileHoldings) | **POST** /api/portfolios/$reconcileholdings | Reconcile portfolio holdings
[**reconcileValuation**](ReconciliationsApi.md#reconcileValuation) | **POST** /api/portfolios/$reconcileValuation | Reconcile valuations performed on one or two sets of holdings using one or two configuration recipes.


<a name="reconcileHoldings"></a>
# **reconcileHoldings**
> ResourceListOfReconciliationBreak reconcileHoldings(opts)

Reconcile portfolio holdings

Reconcile the holdings of two portfolios.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.ReconciliationsApi();
var opts = {
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example", // String | Optional. Expression to filter the result set
  'portfoliosReconciliationRequest': new LusidSdk.PortfoliosReconciliationRequest() // PortfoliosReconciliationRequest | The specifications of the inputs to the reconciliation
};
apiInstance.reconcileHoldings(opts).then(function(data) {
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
 **portfoliosReconciliationRequest** | [**PortfoliosReconciliationRequest**](PortfoliosReconciliationRequest.md)| The specifications of the inputs to the reconciliation | [optional] 

### Return type

[**ResourceListOfReconciliationBreak**](ResourceListOfReconciliationBreak.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="reconcileValuation"></a>
# **reconcileValuation**
> ResourceListOfReconciliationBreak reconcileValuation(opts)

Reconcile valuations performed on one or two sets of holdings using one or two configuration recipes.

Perform valuation of one or two set of holdings using different one or two configuration recipes. Produce a breakdown of the resulting differences in valuation.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.ReconciliationsApi();
var opts = {
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example", // String | Optional. Expression to filter the result set
  'valuationsReconciliationRequest': new LusidSdk.ValuationsReconciliationRequest() // ValuationsReconciliationRequest | The specifications of the inputs to the reconciliation
};
apiInstance.reconcileValuation(opts).then(function(data) {
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
 **valuationsReconciliationRequest** | [**ValuationsReconciliationRequest**](ValuationsReconciliationRequest.md)| The specifications of the inputs to the reconciliation | [optional] 

### Return type

[**ResourceListOfReconciliationBreak**](ResourceListOfReconciliationBreak.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

