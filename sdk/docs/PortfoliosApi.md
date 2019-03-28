# LusidSdk.PortfoliosApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePortfolio**](PortfoliosApi.md#deletePortfolio) | **DELETE** /api/portfolios/{scope}/{code} | Delete portfolio
[**deletePortfolioProperties**](PortfoliosApi.md#deletePortfolioProperties) | **DELETE** /api/portfolios/{scope}/{code}/properties | Delete portfolio properties
[**getPortfolio**](PortfoliosApi.md#getPortfolio) | **GET** /api/portfolios/{scope}/{code} | Get portfolio definition
[**getPortfolioCommands**](PortfoliosApi.md#getPortfolioCommands) | **GET** /api/portfolios/{scope}/{code}/commands | Get commands
[**getPortfolioProperties**](PortfoliosApi.md#getPortfolioProperties) | **GET** /api/portfolios/{scope}/{code}/properties | Get portfolio properties
[**listPortfolios**](PortfoliosApi.md#listPortfolios) | **GET** /api/portfolios | List portfolios
[**listPortfoliosForScope**](PortfoliosApi.md#listPortfoliosForScope) | **GET** /api/portfolios/{scope} | List portfolios for scope
[**updatePortfolio**](PortfoliosApi.md#updatePortfolio) | **PUT** /api/portfolios/{scope}/{code} | Update portfolio definition
[**upsertPortfolioProperties**](PortfoliosApi.md#upsertPortfolioProperties) | **POST** /api/portfolios/{scope}/{code}/properties | Upsert properties


<a name="deletePortfolio"></a>
# **deletePortfolio**
> DeletedEntityResponse deletePortfolio(scope, code, opts)

Delete portfolio

Delete a portfolio at the specified effectiveAt

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00") // Date | Optional. The effective date of the deletion
};
apiInstance.deletePortfolio(scope, code, opts).then(function(data) {
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
 **effectiveAt** | **Date**| Optional. The effective date of the deletion | [optional] 

### Return type

[**DeletedEntityResponse**](DeletedEntityResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="deletePortfolioProperties"></a>
# **deletePortfolioProperties**
> DeletedEntityResponse deletePortfolioProperties(scope, code, opts)

Delete portfolio properties

Delete one, many or all property values from a portfolio for the specified effectiveAt                Specifying no effectiveAt will delete all properties

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | Code for the portfolio
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the deletion
  'portfolioPropertyKeys': ["null"] // [String] | Optional. The keys of the properties to be deleted. None specified indicates the intention to delete all properties from the portfolio
};
apiInstance.deletePortfolioProperties(scope, code, opts).then(function(data) {
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
 **effectiveAt** | **Date**| Optional. The effective date of the deletion | [optional] 
 **portfolioPropertyKeys** | [**[String]**](String.md)| Optional. The keys of the properties to be deleted. None specified indicates the intention to delete all properties from the portfolio | [optional] 

### Return type

[**DeletedEntityResponse**](DeletedEntityResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getPortfolio"></a>
# **getPortfolio**
> Portfolio getPortfolio(scope, code, opts)

Get portfolio definition

Retrieves the basic set of information about a portfolio using the specified scope and code.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the data
  'asAt': new Date("2013-10-20T19:20:30+01:00") // Date | Optional. The AsAt date of the data
};
apiInstance.getPortfolio(scope, code, opts).then(function(data) {
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

[**Portfolio**](Portfolio.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getPortfolioCommands"></a>
# **getPortfolioCommands**
> ResourceListOfProcessedCommand getPortfolioCommands(scope, code, opts)

Get commands

Gets all commands that modified a specific portfolio, including any input transactions.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'fromAsAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. Filters commands by those that were processed at or after this date and time
  'toAsAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. Filters commands by those that were processed at or before this date and time
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example" // String | Optional. Expression to filter the result set
};
apiInstance.getPortfolioCommands(scope, code, opts).then(function(data) {
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
 **fromAsAt** | **Date**| Optional. Filters commands by those that were processed at or after this date and time | [optional] 
 **toAsAt** | **Date**| Optional. Filters commands by those that were processed at or before this date and time | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 

### Return type

[**ResourceListOfProcessedCommand**](ResourceListOfProcessedCommand.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getPortfolioProperties"></a>
# **getPortfolioProperties**
> PortfolioProperties getPortfolioProperties(scope, code, opts)

Get portfolio properties

Get the properties of a portfolio

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the data
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56 // Number | Optional. When paginating, limit the number of returned results to this many.
};
apiInstance.getPortfolioProperties(scope, code, opts).then(function(data) {
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
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 

### Return type

[**PortfolioProperties**](PortfolioProperties.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="listPortfolios"></a>
# **listPortfolios**
> ResourceListOfPortfolio listPortfolios(opts)

List portfolios

List all portfolios matching the specified criteria.                Example query syntax for the query parameter:                - To see which portfolios have holdings in the specified instruments:                    instrument.identifiers in ((&#39;LusidInstrumentId&#39;, &#39;LUID_PPA8HI6M&#39;), (&#39;Figi&#39;, &#39;BBG000BLNNH6&#39;))                * Note that if a query is specified then it is executed for the current EffectiveAt and AsAt  Specifying EffectiveAt or AsAt in addition to the query is not supported  Also note that copy/pasting above examples results in incorrect single quote character

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfoliosApi();
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the data
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example", // String | Optional. Expression to filter the result set
  'query': "query_example" // String | Optional. Expression specifying the criteria that the returned portfolios must meet
};
apiInstance.listPortfolios(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **effectiveAt** | **Date**| Optional. The effective date of the data | [optional] 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 
 **query** | **String**| Optional. Expression specifying the criteria that the returned portfolios must meet | [optional] 

### Return type

[**ResourceListOfPortfolio**](ResourceListOfPortfolio.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="listPortfoliosForScope"></a>
# **listPortfoliosForScope**
> ResourceListOfPortfolio listPortfoliosForScope(scope, opts)

List portfolios for scope

List all the portfolios in the specified scope

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfoliosApi();
var scope = "scope_example"; // String | The scope
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the data
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example" // String | Optional. Expression to filter the result set
};
apiInstance.listPortfoliosForScope(scope, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope | 
 **effectiveAt** | **Date**| Optional. The effective date of the data | [optional] 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 

### Return type

[**ResourceListOfPortfolio**](ResourceListOfPortfolio.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="updatePortfolio"></a>
# **updatePortfolio**
> Portfolio updatePortfolio(scope, code, opts)

Update portfolio definition

Update the definition of a specific portfolio. Note, some parts of a portfolio definition are not available for modification after the initial creation.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date for the change
  'updatePortfolioRequest': new LusidSdk.UpdatePortfolioRequest() // UpdatePortfolioRequest | The updated portfolio definition
};
apiInstance.updatePortfolio(scope, code, opts).then(function(data) {
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
 **effectiveAt** | **Date**| Optional. The effective date for the change | [optional] 
 **updatePortfolioRequest** | [**UpdatePortfolioRequest**](UpdatePortfolioRequest.md)| The updated portfolio definition | [optional] 

### Return type

[**Portfolio**](Portfolio.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="upsertPortfolioProperties"></a>
# **upsertPortfolioProperties**
> PortfolioProperties upsertPortfolioProperties(scope, code, opts)

Upsert properties

Upsert one or more property values to a portfolio for the specified effectiveAt. All properties must be of the domain Portfolio.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the change
  'requestBody': {key: new LusidSdk.PropertyValue()} // {String: PropertyValue} | The property values to be upserted to the portfolio
};
apiInstance.upsertPortfolioProperties(scope, code, opts).then(function(data) {
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
 **requestBody** | [**{String: PropertyValue}**](PropertyValue.md)| The property values to be upserted to the portfolio | [optional] 

### Return type

[**PortfolioProperties**](PortfolioProperties.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

