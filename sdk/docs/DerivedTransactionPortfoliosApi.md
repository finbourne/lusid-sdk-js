# LusidSdk.DerivedTransactionPortfoliosApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDerivedPortfolio**](DerivedTransactionPortfoliosApi.md#createDerivedPortfolio) | **POST** /api/derivedtransactionportfolios/{scope} | Create derived transaction portfolio
[**deleteDerivedPortfolioDetails**](DerivedTransactionPortfoliosApi.md#deleteDerivedPortfolioDetails) | **DELETE** /api/derivedtransactionportfolios/{scope}/{code}/details | Delete portfolio details


<a name="createDerivedPortfolio"></a>
# **createDerivedPortfolio**
> Portfolio createDerivedPortfolio(scope, opts)

Create derived transaction portfolio

Creates a transaction portfolio that derives from an existing transaction portfolio. In a derived portfolio, parts of the portfolio can either be specific to this portfolio, or can be inherited from a \&quot;parent\&quot;. Different parts of the portfolio (e.g. transactions or properties) are combined in different ways. The portfolio details are either overridden in entirety, or not at all. The same is true for properties. Transactions on a derived portfolio are merged with its parent portfolio&#39;s transactions. If the parent portfolio is itself a derived portfolio, transactions from that parent are also merged (and that parent&#39;s portfolio&#39;s, if it is also a derived portfolio, and so on).

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.DerivedTransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope into which to create the new derived portfolio
var opts = {
  'createDerivedTransactionPortfolioRequest': new LusidSdk.CreateDerivedTransactionPortfolioRequest() // CreateDerivedTransactionPortfolioRequest | The root object of the new derived portfolio, containing a populated reference portfolio id and reference scope
};
apiInstance.createDerivedPortfolio(scope, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope into which to create the new derived portfolio | 
 **createDerivedTransactionPortfolioRequest** | [**CreateDerivedTransactionPortfolioRequest**](CreateDerivedTransactionPortfolioRequest.md)| The root object of the new derived portfolio, containing a populated reference portfolio id and reference scope | [optional] 

### Return type

[**Portfolio**](Portfolio.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="deleteDerivedPortfolioDetails"></a>
# **deleteDerivedPortfolioDetails**
> DeletedEntityResponse deleteDerivedPortfolioDetails(scope, code, opts)

Delete portfolio details

Deletes the portfolio details for the specified derived transaction portfolio

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.DerivedTransactionPortfoliosApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00") // Date | The effective date of the change
};
apiInstance.deleteDerivedPortfolioDetails(scope, code, opts).then(function(data) {
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
 **effectiveAt** | **Date**| The effective date of the change | [optional] 

### Return type

[**DeletedEntityResponse**](DeletedEntityResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

