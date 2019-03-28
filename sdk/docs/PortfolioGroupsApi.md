# LusidSdk.PortfolioGroupsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPortfolioToGroup**](PortfolioGroupsApi.md#addPortfolioToGroup) | **POST** /api/portfoliogroups/{scope}/{code}/portfolios | Add portfolio to group
[**addSubGroupToGroup**](PortfolioGroupsApi.md#addSubGroupToGroup) | **POST** /api/portfoliogroups/{scope}/{code}/subgroups | Add group to group
[**createPortfolioGroup**](PortfolioGroupsApi.md#createPortfolioGroup) | **POST** /api/portfoliogroups/{scope} | Create group
[**deletePortfolioFromGroup**](PortfolioGroupsApi.md#deletePortfolioFromGroup) | **DELETE** /api/portfoliogroups/{scope}/{code}/portfolios/{portfolioScope}/{portfolioCode} | Remove portfolio from group
[**deletePortfolioGroup**](PortfolioGroupsApi.md#deletePortfolioGroup) | **DELETE** /api/portfoliogroups/{scope}/{code} | Delete group
[**deleteSubGroupFromGroup**](PortfolioGroupsApi.md#deleteSubGroupFromGroup) | **DELETE** /api/portfoliogroups/{scope}/{code}/subgroups/{subgroupScope}/{subgroupCode} | Remove group from group
[**getPortfolioGroup**](PortfolioGroupsApi.md#getPortfolioGroup) | **GET** /api/portfoliogroups/{scope}/{code} | Get portfolio group
[**getPortfolioGroupCommands**](PortfolioGroupsApi.md#getPortfolioGroupCommands) | **GET** /api/portfoliogroups/{scope}/{code}/commands | Get commands
[**getPortfolioGroupExpansion**](PortfolioGroupsApi.md#getPortfolioGroupExpansion) | **GET** /api/portfoliogroups/{scope}/{code}/expansion | Get a full expansion of a portfolio group
[**listPortfolioGroups**](PortfolioGroupsApi.md#listPortfolioGroups) | **GET** /api/portfoliogroups/{scope} | List groups in scope
[**updatePortfolioGroup**](PortfolioGroupsApi.md#updatePortfolioGroup) | **PUT** /api/portfoliogroups/{scope}/{code} | Update group


<a name="addPortfolioToGroup"></a>
# **addPortfolioToGroup**
> PortfolioGroup addPortfolioToGroup(scope, code, opts)

Add portfolio to group

Adds a portfolio to a previously defined portfolio group

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfolioGroupsApi();
var scope = "scope_example"; // String | The scope of the portfolio group to which a portfolio is being added
var code = "code_example"; // String | The code of the portfolio group to which a portfolio is being added
var opts = {
  'resourceId': new LusidSdk.ResourceId() // ResourceId | The id of the portfolio
};
apiInstance.addPortfolioToGroup(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the portfolio group to which a portfolio is being added | 
 **code** | **String**| The code of the portfolio group to which a portfolio is being added | 
 **resourceId** | [**ResourceId**](ResourceId.md)| The id of the portfolio | [optional] 

### Return type

[**PortfolioGroup**](PortfolioGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="addSubGroupToGroup"></a>
# **addSubGroupToGroup**
> PortfolioGroup addSubGroupToGroup(scope, code, opts)

Add group to group

Adds a portfolio group, as a sub-group, to an existing portfolio group

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfolioGroupsApi();
var scope = "scope_example"; // String | The scope of the portfolio group to which a sub-group is being added
var code = "code_example"; // String | The code of the portfolio group to which a sub-group is being added
var opts = {
  'resourceId': new LusidSdk.ResourceId() // ResourceId | The id of the portfolio group being added as a sub-group
};
apiInstance.addSubGroupToGroup(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the portfolio group to which a sub-group is being added | 
 **code** | **String**| The code of the portfolio group to which a sub-group is being added | 
 **resourceId** | [**ResourceId**](ResourceId.md)| The id of the portfolio group being added as a sub-group | [optional] 

### Return type

[**PortfolioGroup**](PortfolioGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="createPortfolioGroup"></a>
# **createPortfolioGroup**
> PortfolioGroup createPortfolioGroup(scope, opts)

Create group

Create a new portfolio group.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfolioGroupsApi();
var scope = "scope_example"; // String | The scope into which the portfolio group will be created
var opts = {
  'createPortfolioGroupRequest': new LusidSdk.CreatePortfolioGroupRequest() // CreatePortfolioGroupRequest | The definition of the new portfolio group
};
apiInstance.createPortfolioGroup(scope, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope into which the portfolio group will be created | 
 **createPortfolioGroupRequest** | [**CreatePortfolioGroupRequest**](CreatePortfolioGroupRequest.md)| The definition of the new portfolio group | [optional] 

### Return type

[**PortfolioGroup**](PortfolioGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="deletePortfolioFromGroup"></a>
# **deletePortfolioFromGroup**
> PortfolioGroup deletePortfolioFromGroup(scope, code, portfolioScope, portfolioCode)

Remove portfolio from group

Removes a portfolio from a portfolio group

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfolioGroupsApi();
var scope = "scope_example"; // String | The scope of the portfolio group
var code = "code_example"; // String | The code of the portfolio group
var portfolioScope = "portfolioScope_example"; // String | The scope of the portfolio being removed
var portfolioCode = "portfolioCode_example"; // String | The code of the portfolio being removed
apiInstance.deletePortfolioFromGroup(scope, code, portfolioScope, portfolioCode).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the portfolio group | 
 **code** | **String**| The code of the portfolio group | 
 **portfolioScope** | **String**| The scope of the portfolio being removed | 
 **portfolioCode** | **String**| The code of the portfolio being removed | 

### Return type

[**PortfolioGroup**](PortfolioGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="deletePortfolioGroup"></a>
# **deletePortfolioGroup**
> DeletedEntityResponse deletePortfolioGroup(scope, code)

Delete group

Deletes the definition of the specified portfolio group

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfolioGroupsApi();
var scope = "scope_example"; // String | The scope of the portfolio group
var code = "code_example"; // String | The code of the portfolio group
apiInstance.deletePortfolioGroup(scope, code).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the portfolio group | 
 **code** | **String**| The code of the portfolio group | 

### Return type

[**DeletedEntityResponse**](DeletedEntityResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="deleteSubGroupFromGroup"></a>
# **deleteSubGroupFromGroup**
> PortfolioGroup deleteSubGroupFromGroup(scope, code, subgroupScope, subgroupCode)

Remove group from group

Remove a portfolio group (sub-group) from a parent portfolio group

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfolioGroupsApi();
var scope = "scope_example"; // String | The scope of the portfolio group
var code = "code_example"; // String | The code of the portfolio group
var subgroupScope = "subgroupScope_example"; // String | The scope of the sub-group being removed
var subgroupCode = "subgroupCode_example"; // String | The code of the sub-group being removed
apiInstance.deleteSubGroupFromGroup(scope, code, subgroupScope, subgroupCode).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the portfolio group | 
 **code** | **String**| The code of the portfolio group | 
 **subgroupScope** | **String**| The scope of the sub-group being removed | 
 **subgroupCode** | **String**| The code of the sub-group being removed | 

### Return type

[**PortfolioGroup**](PortfolioGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getPortfolioGroup"></a>
# **getPortfolioGroup**
> PortfolioGroup getPortfolioGroup(scope, code, opts)

Get portfolio group

Get the definition of the specified portfolio group

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfolioGroupsApi();
var scope = "scope_example"; // String | The scope of the portfolio group
var code = "code_example"; // String | The code of the portfolio group
var opts = {
  'asAt': new Date("2013-10-20T19:20:30+01:00") // Date | Optional. The AsAt date of the data
};
apiInstance.getPortfolioGroup(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the portfolio group | 
 **code** | **String**| The code of the portfolio group | 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 

### Return type

[**PortfolioGroup**](PortfolioGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getPortfolioGroupCommands"></a>
# **getPortfolioGroupCommands**
> ResourceListOfProcessedCommand getPortfolioGroupCommands(scope, code, opts)

Get commands

Gets all commands that modified a specific portfolio group

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfolioGroupsApi();
var scope = "scope_example"; // String | The scope of the portfolio group
var code = "code_example"; // String | The code of the portfolio group
var opts = {
  'fromAsAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. Filters commands by those that were processed at or after this date and time
  'toAsAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. Filters commands by those that were processed at or before this date and time
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example" // String | Optional. Expression to filter the result set
};
apiInstance.getPortfolioGroupCommands(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the portfolio group | 
 **code** | **String**| The code of the portfolio group | 
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

<a name="getPortfolioGroupExpansion"></a>
# **getPortfolioGroupExpansion**
> ExpandedGroup getPortfolioGroupExpansion(scope, code, opts)

Get a full expansion of a portfolio group

Lists all portfolios in a group, and all sub groups. Portfolios are decorated with their properties.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfolioGroupsApi();
var scope = "scope_example"; // String | The scope of the portfolio
var code = "code_example"; // String | The code of the portfolio
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the data
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'propertyFilter': ["null"] // [String] | Optional. The restricted set of properties that should be returned
};
apiInstance.getPortfolioGroupExpansion(scope, code, opts).then(function(data) {
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
 **propertyFilter** | [**[String]**](String.md)| Optional. The restricted set of properties that should be returned | [optional] 

### Return type

[**ExpandedGroup**](ExpandedGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="listPortfolioGroups"></a>
# **listPortfolioGroups**
> ResourceListOfPortfolioGroup listPortfolioGroups(scope, opts)

List groups in scope

Lists all portfolio groups in a specified scope

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfolioGroupsApi();
var scope = "scope_example"; // String | The scope
var opts = {
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the data
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many.
  'filter': "filter_example" // String | Optional. Expression to filter the result set
};
apiInstance.listPortfolioGroups(scope, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope | 
 **asAt** | **Date**| Optional. The AsAt date of the data | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many. | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set | [optional] 

### Return type

[**ResourceListOfPortfolioGroup**](ResourceListOfPortfolioGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="updatePortfolioGroup"></a>
# **updatePortfolioGroup**
> PortfolioGroup updatePortfolioGroup(scope, code, opts)

Update group

Update the definition of the specified existing portfolio group.    Not all elements within a portfolio group definition are modifiable after creation.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.PortfolioGroupsApi();
var scope = "scope_example"; // String | The scope of the portfolio group
var code = "code_example"; // String | The code of the portfolio group
var opts = {
  'updatePortfolioGroupRequest': new LusidSdk.UpdatePortfolioGroupRequest() // UpdatePortfolioGroupRequest | The updated definition of the portfolio group
};
apiInstance.updatePortfolioGroup(scope, code, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope of the portfolio group | 
 **code** | **String**| The code of the portfolio group | 
 **updatePortfolioGroupRequest** | [**UpdatePortfolioGroupRequest**](UpdatePortfolioGroupRequest.md)| The updated definition of the portfolio group | [optional] 

### Return type

[**PortfolioGroup**](PortfolioGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

