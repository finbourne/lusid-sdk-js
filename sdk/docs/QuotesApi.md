# LusidSdk.QuotesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteQuotes**](QuotesApi.md#deleteQuotes) | **POST** /api/quotes/{scope}/$delete | Delete a quote
[**getQuotes**](QuotesApi.md#getQuotes) | **POST** /api/quotes/{scope}/$get | Get quotes
[**upsertQuotes**](QuotesApi.md#upsertQuotes) | **POST** /api/quotes/{scope} | Upsert quotes


<a name="deleteQuotes"></a>
# **deleteQuotes**
> DeleteQuotesResponse deleteQuotes(scope, opts)

Delete a quote

Delete the specified quotes. In order for a quote to be deleted the id and effectiveFrom date must exactly match.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.QuotesApi();
var scope = "scope_example"; // String | The scope of the quote
var opts = {
  'deleteQuoteRequest': [new LusidSdk.DeleteQuoteRequest()] // [DeleteQuoteRequest] | The quotes to delete
};
apiInstance.deleteQuotes(scope, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the quote | 
 **deleteQuoteRequest** | [**[DeleteQuoteRequest]**](Array.md)| The quotes to delete | [optional] 

### Return type

[**DeleteQuotesResponse**](DeleteQuotesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="getQuotes"></a>
# **getQuotes**
> GetQuotesResponse getQuotes(scope, opts)

Get quotes

Get quotes effective at the specified date/time (if any). An optional maximum age of quotes can be specified, and is infinite by default.  Quotes which are older than this at the time of the effective date/time will not be returned.  MaxAge is a duration of time represented in an ISO8601 format, eg. P1Y2M3DT4H30M (1 year, 2 months, 3 days, 4 hours and 30 minutes).  The results are paged, and by default the 1st page of results is returned with a limit of 100 results per page

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.QuotesApi();
var scope = "scope_example"; // String | The scope of the quotes
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The date/time from which the quotes are effective
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The 'AsAt' date/time
  'maxAge': "maxAge_example", // String | Optional. The quote staleness tolerance
  'page': 56, // Number | Optional. The page of results to return
  'limit': 56, // Number | Optional. The number of results per page
  'quoteId': [new LusidSdk.QuoteId()] // [QuoteId] | The ids of the quotes
};
apiInstance.getQuotes(scope, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the quotes | 
 **effectiveAt** | **Date**| Optional. The date/time from which the quotes are effective | [optional] 
 **asAt** | **Date**| Optional. The &#39;AsAt&#39; date/time | [optional] 
 **maxAge** | **String**| Optional. The quote staleness tolerance | [optional] 
 **page** | **Number**| Optional. The page of results to return | [optional] 
 **limit** | **Number**| Optional. The number of results per page | [optional] 
 **quoteId** | [**[QuoteId]**](Array.md)| The ids of the quotes | [optional] 

### Return type

[**GetQuotesResponse**](GetQuotesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="upsertQuotes"></a>
# **upsertQuotes**
> UpsertQuotesResponse upsertQuotes(scope, opts)

Upsert quotes

Upsert quotes effective at the specified time. If a quote is added with the same id (and is effective at the same time) as an existing quote, then the more recently added quote will be returned when queried

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.QuotesApi();
var scope = "scope_example"; // String | The scope of the quotes
var opts = {
  'upsertQuoteRequest': [new LusidSdk.UpsertQuoteRequest()] // [UpsertQuoteRequest] | The quotes to upsert
};
apiInstance.upsertQuotes(scope, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the quotes | 
 **upsertQuoteRequest** | [**[UpsertQuoteRequest]**](Array.md)| The quotes to upsert | [optional] 

### Return type

[**UpsertQuotesResponse**](UpsertQuotesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

