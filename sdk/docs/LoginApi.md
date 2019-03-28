# LusidSdk.LoginApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSamlIdentityProviderId**](LoginApi.md#getSamlIdentityProviderId) | **GET** /api/login/saml/{domain} | Get SAML Identity Provider


<a name="getSamlIdentityProviderId"></a>
# **getSamlIdentityProviderId**
> String getSamlIdentityProviderId(domain)

Get SAML Identity Provider

Get the unique identifier for the SAML 2.0 Identity Provider to be used for domain.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.LoginApi();
var domain = "domain_example"; // String | The domain that the user will be logging in to
apiInstance.getSamlIdentityProviderId(domain).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| The domain that the user will be logging in to | 

### Return type

**String**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

