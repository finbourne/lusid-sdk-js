# LusidSdk.ApplicationMetadataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExcelAddin**](ApplicationMetadataApi.md#getExcelAddin) | **GET** /api/metadata/downloads/exceladdin | Download Excel Addin
[**getExcelDownloadUrl**](ApplicationMetadataApi.md#getExcelDownloadUrl) | **GET** /api/metadata/downloads/excel | Get Excel download url
[**getLusidVersions**](ApplicationMetadataApi.md#getLusidVersions) | **GET** /api/metadata/versions | Get LUSID versions


<a name="getExcelAddin"></a>
# **getExcelAddin**
> FileResponse getExcelAddin(opts)

Download Excel Addin

Download the LUSID Excel Addin for Microsoft Excel. Not providing a specific value will return the latest version being returned

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.ApplicationMetadataApi();
var opts = {
  'version': "version_example" // String | The requested version of the Excel plugin
};
apiInstance.getExcelAddin(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| The requested version of the Excel plugin | [optional] 

### Return type

[**FileResponse**](FileResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getExcelDownloadUrl"></a>
# **getExcelDownloadUrl**
> String getExcelDownloadUrl(opts)

Get Excel download url

Request an authorised url for an Excel client version

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.ApplicationMetadataApi();
var opts = {
  'version': "version_example" // String | The requested version of the Excel plugin
};
apiInstance.getExcelDownloadUrl(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| The requested version of the Excel plugin | [optional] 

### Return type

**String**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getLusidVersions"></a>
# **getLusidVersions**
> VersionSummaryDto getLusidVersions()

Get LUSID versions

Get the semantic versions associated with LUSID and its ecosystem

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.ApplicationMetadataApi();
apiInstance.getLusidVersions().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**VersionSummaryDto**](VersionSummaryDto.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

