# LusidSdk.TransactionPortfoliosApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTransactionProperty**](TransactionPortfoliosApi.md#addTransactionProperty) | **POST** /api/transactionportfolios/{scope}/{code}/transactions/{transactionId}/properties | Add transaction properties
[**adjustHoldings**](TransactionPortfoliosApi.md#adjustHoldings) | **POST** /api/transactionportfolios/{scope}/{code}/holdings/{effectiveAt} | Adjust holdings
[**buildTransactions**](TransactionPortfoliosApi.md#buildTransactions) | **POST** /api/transactionportfolios/{scope}/{code}/transactions/$build | Build output transactions
[**cancelAdjustHoldings**](TransactionPortfoliosApi.md#cancelAdjustHoldings) | **DELETE** /api/transactionportfolios/{scope}/{code}/holdings/{effectiveAt} | Cancel holdings adjustments
[**createPortfolio**](TransactionPortfoliosApi.md#createPortfolio) | **POST** /api/transactionportfolios/{scope} | Create transaction portfolio
[**deleteExecutions**](TransactionPortfoliosApi.md#deleteExecutions) | **DELETE** /api/transactionportfolios/{scope}/{code}/executions | Delete executions
[**deletePropertyFromTransaction**](TransactionPortfoliosApi.md#deletePropertyFromTransaction) | **DELETE** /api/transactionportfolios/{scope}/{code}/transactions/{transactionId}/properties | Delete transaction property
[**deleteTransactions**](TransactionPortfoliosApi.md#deleteTransactions) | **DELETE** /api/transactionportfolios/{scope}/{code}/transactions | Delete transactions
[**getDetails**](TransactionPortfoliosApi.md#getDetails) | **GET** /api/transactionportfolios/{scope}/{code}/details | Get portfolio details
[**getHoldings**](TransactionPortfoliosApi.md#getHoldings) | **GET** /api/transactionportfolios/{scope}/{code}/holdings | Get holdings
[**getHoldingsAdjustment**](TransactionPortfoliosApi.md#getHoldingsAdjustment) | **GET** /api/transactionportfolios/{scope}/{code}/holdingsadjustments/{effectiveAt} | Get holding adjustment
[**getTransactions**](TransactionPortfoliosApi.md#getTransactions) | **GET** /api/transactionportfolios/{scope}/{code}/transactions | Get transactions
[**listHoldingsAdjustments**](TransactionPortfoliosApi.md#listHoldingsAdjustments) | **GET** /api/transactionportfolios/{scope}/{code}/holdingsadjustments | List holdings adjustments
[**setHoldings**](TransactionPortfoliosApi.md#setHoldings) | **PUT** /api/transactionportfolios/{scope}/{code}/holdings/{effectiveAt} | Set all holdings on a transaction portfolio
[**upsertExecutions**](TransactionPortfoliosApi.md#upsertExecutions) | **POST** /api/transactionportfolios/{scope}/{code}/executions | Upsert executions
[**upsertPortfolioDetails**](TransactionPortfoliosApi.md#upsertPortfolioDetails) | **POST** /api/transactionportfolios/{scope}/{code}/details | Upsert details
[**upsertTransactions**](TransactionPortfoliosApi.md#upsertTransactions) | **POST** /api/transactionportfolios/{scope}/{code}/transactions | Upsert transactions into the specified transaction portfolio


<a name="addTransactionProperty"></a>
# **addTransactionProperty**
> AddTransactionPropertyResponse addTransactionProperty(scope, code, transactionId, opts)

Add transaction properties

Upsert one or more transaction properties to a single transaction in a portfolio

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var transactionId = "transactionId_example"; // String | Id of transaction
var opts = {
  'requestBody': {key: new LusidSdk.PerpetualPropertyValue()} // {String: PerpetualPropertyValue} | Transaction properties values
};
apiInstance.addTransactionProperty(scope, code, transactionId, opts).then(function(data) {
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
 **transactionId** | **String**| Id of transaction | 
 **requestBody** | [**{String: PerpetualPropertyValue}**](PerpetualPropertyValue.md)| Transaction properties values | [optional] 

### Return type

[**AddTransactionPropertyResponse**](AddTransactionPropertyResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="adjustHoldings"></a>
# **adjustHoldings**
> AdjustHolding adjustHoldings(scope, code, effectiveAt, opts)

Adjust holdings

Adjust one or more holdings in a transaction portfolio    Prompt the creation of transactions in a specific transaction portfolio to bring selected holdings to the specified targets

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var effectiveAt = new Date("2013-10-20T19:20:30+01:00"); // Date | The effective date of the change
var opts = {
  'adjustHoldingRequest': [new LusidSdk.AdjustHoldingRequest()] // [AdjustHoldingRequest] | The selected set of holdings adjustments
};
apiInstance.adjustHoldings(scope, code, effectiveAt, opts).then(function(data) {
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
 **effectiveAt** | **Date**| The effective date of the change | 
 **adjustHoldingRequest** | [**[AdjustHoldingRequest]**](Array.md)| The selected set of holdings adjustments | [optional] 

### Return type

[**AdjustHolding**](AdjustHolding.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="buildTransactions"></a>
# **buildTransactions**
> VersionedResourceListOfOutputTransaction buildTransactions(scope, code, opts)

Build output transactions

Builds and returns the collection of all types of transactions that affect the holdings of a portfolio in to a set of output transactions

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'instrumentPropertyKeys': ["null"], // [String] | Optional. Keys for the instrument property values to be decorated onto the transactions
  'filter': "filter_example", // String | Optional. Expression to filter the result set
  'transactionQueryParameters': new LusidSdk.TransactionQueryParameters() // TransactionQueryParameters | Optional. Transaction query parameters
};
apiInstance.buildTransactions(scope, code, opts).then(function(data) {
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
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 
 **instrumentPropertyKeys** | [**[String]**](String.md)| Optional. Keys for the instrument property values to be decorated onto the transactions | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 
 **transactionQueryParameters** | [**TransactionQueryParameters**](TransactionQueryParameters.md)| Optional. Transaction query parameters | [optional] 

### Return type

[**VersionedResourceListOfOutputTransaction**](VersionedResourceListOfOutputTransaction.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="cancelAdjustHoldings"></a>
# **cancelAdjustHoldings**
> DeletedEntityResponse cancelAdjustHoldings(scope, code, effectiveAt)

Cancel holdings adjustments

Cancel previous adjust-holdings for the portfolio for a specific date

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var effectiveAt = new Date("2013-10-20T19:20:30+01:00"); // Date | The effective date of the change
apiInstance.cancelAdjustHoldings(scope, code, effectiveAt).then(function(data) {
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
 **effectiveAt** | **Date**| The effective date of the change | 

### Return type

[**DeletedEntityResponse**](DeletedEntityResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="createPortfolio"></a>
# **createPortfolio**
> Portfolio createPortfolio(scope, opts)

Create transaction portfolio

Create a transaction portfolio in a specific scope

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope into which the transaction portfolio will be created
var opts = {
  'createTransactionPortfolioRequest': new LusidSdk.CreateTransactionPortfolioRequest() // CreateTransactionPortfolioRequest | The transaction portfolio definition
};
apiInstance.createPortfolio(scope, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope into which the transaction portfolio will be created | 
 **createTransactionPortfolioRequest** | [**CreateTransactionPortfolioRequest**](CreateTransactionPortfolioRequest.md)| The transaction portfolio definition | [optional] 

### Return type

[**Portfolio**](Portfolio.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="deleteExecutions"></a>
# **deleteExecutions**
> DeletedEntityResponse deleteExecutions(scope, code, opts)

Delete executions

Delete one or more executions from a transaction portfolio

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'executionIds': ["null"] // [String] | Ids of executions to delete
};
apiInstance.deleteExecutions(scope, code, opts).then(function(data) {
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
 **executionIds** | [**[String]**](String.md)| Ids of executions to delete | [optional] 

### Return type

[**DeletedEntityResponse**](DeletedEntityResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="deletePropertyFromTransaction"></a>
# **deletePropertyFromTransaction**
> DeletedEntityResponse deletePropertyFromTransaction(scope, code, transactionId, opts)

Delete transaction property

Delete a property value from a single transaction in a portfolio

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | Code for the portfolio
var transactionId = "transactionId_example"; // String | Id of the transaction to delete the property from
var opts = {
  'transactionPropertyKey': "transactionPropertyKey_example" // String | The key of the property to be deleted
};
apiInstance.deletePropertyFromTransaction(scope, code, transactionId, opts).then(function(data) {
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
 **transactionId** | **String**| Id of the transaction to delete the property from | 
 **transactionPropertyKey** | **String**| The key of the property to be deleted | [optional] 

### Return type

[**DeletedEntityResponse**](DeletedEntityResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="deleteTransactions"></a>
# **deleteTransactions**
> DeletedEntityResponse deleteTransactions(scope, code, opts)

Delete transactions

Delete one or more transactions from a transaction portfolio

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'transactionIds': ["null"] // [String] | Ids of transactions to delete
};
apiInstance.deleteTransactions(scope, code, opts).then(function(data) {
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
 **transactionIds** | [**[String]**](String.md)| Ids of transactions to delete | [optional] 

### Return type

[**DeletedEntityResponse**](DeletedEntityResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getDetails"></a>
# **getDetails**
> PortfolioDetails getDetails(scope, code, opts)

Get portfolio details

Get the details document associated with a transaction portfolio                When requesting details from a derived transaction portfolio, the returned set of details could come from a different transaction portfolio

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the data
  'asAt': new Date("2013-10-20T19:20:30+01:00") // Date | Optional. The AsAt date of the data
};
apiInstance.getDetails(scope, code, opts).then(function(data) {
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
 **effectiveAt** | **Date**| Optional. The effective date of the data | [optional] 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 

### Return type

[**PortfolioDetails**](PortfolioDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getHoldings"></a>
# **getHoldings**
> VersionedResourceListOfPortfolioHolding getHoldings(scope, code, opts)

Get holdings

Get the aggregate holdings of a transaction portfolio.  If no effectiveAt or asAt  are supplied then values will be defaulted to the latest system time.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'byTaxlots': true, // Boolean | Option to expand holdings to return the underlying tax-lots
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the portfolio
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example", // String | Optional. Expression to filter the result set
  'instrumentPropertyKeys': ["null"] // [String] | Optional. Keys for the instrument property values to be decorated onto the holdings
};
apiInstance.getHoldings(scope, code, opts).then(function(data) {
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
 **byTaxlots** | **Boolean**| Option to expand holdings to return the underlying tax-lots | [optional] 
 **effectiveAt** | **Date**| Optional. The effective date of the portfolio | [optional] 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 
 **instrumentPropertyKeys** | [**[String]**](String.md)| Optional. Keys for the instrument property values to be decorated onto the holdings | [optional] 

### Return type

[**VersionedResourceListOfPortfolioHolding**](VersionedResourceListOfPortfolioHolding.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getHoldingsAdjustment"></a>
# **getHoldingsAdjustment**
> HoldingsAdjustment getHoldingsAdjustment(scope, code, effectiveAt, opts)

Get holding adjustment

Get a holdings adjustment for a transaction portfolio at a specific effective time.    A holdings adjustment definition will only be returned if one exists for the specified effective time

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var effectiveAt = new Date("2013-10-20T19:20:30+01:00"); // Date | The effective time of the holdings adjustment
var opts = {
  'asAt': new Date("2013-10-20T19:20:30+01:00") // Date | Optional. The AsAt date of the data
};
apiInstance.getHoldingsAdjustment(scope, code, effectiveAt, opts).then(function(data) {
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
 **effectiveAt** | **Date**| The effective time of the holdings adjustment | 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 

### Return type

[**HoldingsAdjustment**](HoldingsAdjustment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getTransactions"></a>
# **getTransactions**
> VersionedResourceListOfTransaction getTransactions(scope, code, opts)

Get transactions

Get the transactions from a transaction portfolio    When the requested portfolio is a derived transaction portfolio, the returned set of transactions is the union set of all transactions of the parent (and ancestors) and the specified portfolio.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'fromTransactionDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. Limit the returned transactions to those with a transaction date equal or later than this date
  'toTransactionDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. Limit the returned transactions to those with a transaction date equal or before this date
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'instrumentPropertyKeys': ["null"], // [String] | Optional. Keys for the instrument property values that will be decorated onto the transactions
  'filter': "filter_example" // String | Optional. Expression to filter the result set
};
apiInstance.getTransactions(scope, code, opts).then(function(data) {
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
 **fromTransactionDate** | **Date**| Optional. Limit the returned transactions to those with a transaction date equal or later than this date | [optional] 
 **toTransactionDate** | **Date**| Optional. Limit the returned transactions to those with a transaction date equal or before this date | [optional] 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 
 **instrumentPropertyKeys** | [**[String]**](String.md)| Optional. Keys for the instrument property values that will be decorated onto the transactions | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 

### Return type

[**VersionedResourceListOfTransaction**](VersionedResourceListOfTransaction.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="listHoldingsAdjustments"></a>
# **listHoldingsAdjustments**
> ResourceListOfHoldingsAdjustmentHeader listHoldingsAdjustments(scope, code, opts)

List holdings adjustments

Get holdings adjustments from a transaction portfolio in an interval of effective time.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | Code for the portfolio
var opts = {
  'fromEffectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Holdings adjustments between this time (inclusive) and the toEffectiveAt are returned.
  'toEffectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Holdings adjustments between this time (inclusive) and the fromEffectiveAt are returned.
  'asAt': new Date("2013-10-20T19:20:30+01:00") // Date | Optional. The AsAt date of the data
};
apiInstance.listHoldingsAdjustments(scope, code, opts).then(function(data) {
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
 **fromEffectiveAt** | **Date**| Holdings adjustments between this time (inclusive) and the toEffectiveAt are returned. | [optional] 
 **toEffectiveAt** | **Date**| Holdings adjustments between this time (inclusive) and the fromEffectiveAt are returned. | [optional] 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 

### Return type

[**ResourceListOfHoldingsAdjustmentHeader**](ResourceListOfHoldingsAdjustmentHeader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="setHoldings"></a>
# **setHoldings**
> AdjustHolding setHoldings(scope, code, effectiveAt, opts)

Set all holdings on a transaction portfolio

Prompt the creation of transactions in a specific transaction portfolio to bring all holdings to the specified targets

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the transaction portfolio
var code = "code_example"; // String | The code of the transaction portfolio
var effectiveAt = new Date("2013-10-20T19:20:30+01:00"); // Date | The effective date of the change
var opts = {
  'adjustHoldingRequest': [new LusidSdk.AdjustHoldingRequest()] // [AdjustHoldingRequest] | The complete set of holdings adjustments for the portfolio
};
apiInstance.setHoldings(scope, code, effectiveAt, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the transaction portfolio | 
 **code** | **String**| The code of the transaction portfolio | 
 **effectiveAt** | **Date**| The effective date of the change | 
 **adjustHoldingRequest** | [**[AdjustHoldingRequest]**](Array.md)| The complete set of holdings adjustments for the portfolio | [optional] 

### Return type

[**AdjustHolding**](AdjustHolding.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="upsertExecutions"></a>
# **upsertExecutions**
> UpsertPortfolioExecutionsResponse upsertExecutions(scope, code, opts)

Upsert executions

Inserts new executions, or updates those already present

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'executionRequest': [new LusidSdk.ExecutionRequest()] // [ExecutionRequest] | The executions to be updated
};
apiInstance.upsertExecutions(scope, code, opts).then(function(data) {
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
 **executionRequest** | [**[ExecutionRequest]**](Array.md)| The executions to be updated | [optional] 

### Return type

[**UpsertPortfolioExecutionsResponse**](UpsertPortfolioExecutionsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="upsertPortfolioDetails"></a>
# **upsertPortfolioDetails**
> PortfolioDetails upsertPortfolioDetails(scope, code, opts)

Upsert details

Update the portfolio details for the specified transaction portfolios or add if it doesn&#39;t already exist (in the case of a derived transaction portfolio).

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the change
  'createPortfolioDetails': new LusidSdk.CreatePortfolioDetails() // CreatePortfolioDetails | The set of details for the portfolio
};
apiInstance.upsertPortfolioDetails(scope, code, opts).then(function(data) {
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
 **effectiveAt** | **Date**| Optional. The effective date of the change | [optional] 
 **createPortfolioDetails** | [**CreatePortfolioDetails**](CreatePortfolioDetails.md)| The set of details for the portfolio | [optional] 

### Return type

[**PortfolioDetails**](PortfolioDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="upsertTransactions"></a>
# **upsertTransactions**
> UpsertPortfolioTransactionsResponse upsertTransactions(scope, code, opts)

Upsert transactions into the specified transaction portfolio

Upsert transactions

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.TransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code for the portfolio
var opts = {
  'transactionRequest': [new LusidSdk.TransactionRequest()] // [TransactionRequest] | The transactions to be upserted
};
apiInstance.upsertTransactions(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the portfolio | 
 **code** | **String**| The code for the portfolio | 
 **transactionRequest** | [**[TransactionRequest]**](Array.md)| The transactions to be upserted | [optional] 

### Return type

[**UpsertPortfolioTransactionsResponse**](UpsertPortfolioTransactionsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

