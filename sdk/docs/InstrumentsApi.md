# LusidSdk.InstrumentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteInstrument**](InstrumentsApi.md#deleteInstrument) | **DELETE** /api/instruments/{identifierType}/{identifier} | Delete instrument
[**findInstruments**](InstrumentsApi.md#findInstruments) | **POST** /api/instruments/$find | Search instrument definition
[**getInstrument**](InstrumentsApi.md#getInstrument) | **GET** /api/instruments/{identifierType}/{identifier} | Get instrument definition
[**getInstrumentIdentifiers**](InstrumentsApi.md#getInstrumentIdentifiers) | **GET** /api/instruments/identifiers | Get allowable instrument identifiers
[**getInstruments**](InstrumentsApi.md#getInstruments) | **POST** /api/instruments/$get | Get instrument definition
[**listInstruments**](InstrumentsApi.md#listInstruments) | **GET** /api/instruments | Get all of the currently mastered instruments in LUSID
[**matchInstruments**](InstrumentsApi.md#matchInstruments) | **POST** /api/instruments/$match | Find externally mastered instruments
[**updateInstrumentIdentifier**](InstrumentsApi.md#updateInstrumentIdentifier) | **POST** /api/instruments/{identifierType}/{identifier} | Update instrument identifier
[**upsertInstruments**](InstrumentsApi.md#upsertInstruments) | **POST** /api/instruments | Upsert instruments
[**upsertInstrumentsProperties**](InstrumentsApi.md#upsertInstrumentsProperties) | **POST** /api/instruments/$upsertproperties | Upsert instrument properties


<a name="deleteInstrument"></a>
# **deleteInstrument**
> DeleteInstrumentResponse deleteInstrument(identifierType, identifier)

Delete instrument

Attempt to delete one or more \&quot;client\&quot; instruments.    The response will include those instruments that could not be deleted (as well as any available details).                It is important to always check the &#39;Failed&#39; set for any unsuccessful results.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.InstrumentsApi();
var identifierType = "identifierType_example"; // String | The type of identifier being supplied
var identifier = "identifier_example"; // String | The instrument identifier
apiInstance.deleteInstrument(identifierType, identifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifierType** | **String**| The type of identifier being supplied | 
 **identifier** | **String**| The instrument identifier | 

### Return type

[**DeleteInstrumentResponse**](DeleteInstrumentResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="findInstruments"></a>
# **findInstruments**
> ResourceListOfInstrument findInstruments(opts)

Search instrument definition

Get a collection of instruments by a set of identifiers. Optionally, it is possible to decorate each instrument with specified property data.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.InstrumentsApi();
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the query
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the query
  'instrumentPropertyKeys': ["null"], // [String] | Optional. Keys of the properties to be decorated on to the instrument
  'property': [new LusidSdk.Property()] // [Property] | The list of market aliases (e.g ISIN, Ticker) to find instruments by.
};
apiInstance.findInstruments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **effectiveAt** | **Date**| Optional. The effective date of the query | [optional] 
 **asAt** | **Date**| Optional. The AsAt date of the query | [optional] 
 **instrumentPropertyKeys** | [**[String]**](String.md)| Optional. Keys of the properties to be decorated on to the instrument | [optional] 
 **property** | [**[Property]**](Array.md)| The list of market aliases (e.g ISIN, Ticker) to find instruments by. | [optional] 

### Return type

[**ResourceListOfInstrument**](ResourceListOfInstrument.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="getInstrument"></a>
# **getInstrument**
> Instrument getInstrument(identifierType, identifier, opts)

Get instrument definition

Get an individual instrument by the one of its unique instrument identifiers. Optionally, it is possible to decorate each instrument with specified property data.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.InstrumentsApi();
var identifierType = "identifierType_example"; // String | The type of identifier being supplied
var identifier = "identifier_example"; // String | The identifier of the requested instrument
var opts = {
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the query
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt date of the query
  'instrumentPropertyKeys': ["null"] // [String] | Optional. Keys of the properties to be decorated on to the instrument
};
apiInstance.getInstrument(identifierType, identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifierType** | **String**| The type of identifier being supplied | 
 **identifier** | **String**| The identifier of the requested instrument | 
 **effectiveAt** | **Date**| Optional. The effective date of the query | [optional] 
 **asAt** | **Date**| Optional. The AsAt date of the query | [optional] 
 **instrumentPropertyKeys** | [**[String]**](String.md)| Optional. Keys of the properties to be decorated on to the instrument | [optional] 

### Return type

[**Instrument**](Instrument.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getInstrumentIdentifiers"></a>
# **getInstrumentIdentifiers**
> ResourceListOfString getInstrumentIdentifiers()

Get allowable instrument identifiers

Gets the set of identifiers that have been configured as unique identifiers for instruments.     Only CodeTypes returned from this end point can be used as identifiers for instruments.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.InstrumentsApi();
apiInstance.getInstrumentIdentifiers().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResourceListOfString**](ResourceListOfString.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getInstruments"></a>
# **getInstruments**
> GetInstrumentsResponse getInstruments(opts)

Get instrument definition

Get a collection of instruments by a set of identifiers. Optionally, it is possible to decorate each instrument with specified property data.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.InstrumentsApi();
var opts = {
  'identifierType': "identifierType_example", // String | The type of identifiers being supplied
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the request
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The as at date of the request
  'instrumentPropertyKeys': ["null"], // [String] | Optional. Keys of the properties to be decorated on to the instrument
  'requestBody': ["null"] // [String] | The identifiers of the instruments to get
};
apiInstance.getInstruments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifierType** | **String**| The type of identifiers being supplied | [optional] 
 **effectiveAt** | **Date**| Optional. The effective date of the request | [optional] 
 **asAt** | **Date**| Optional. The as at date of the request | [optional] 
 **instrumentPropertyKeys** | [**[String]**](String.md)| Optional. Keys of the properties to be decorated on to the instrument | [optional] 
 **requestBody** | [**[String]**](Array.md)| The identifiers of the instruments to get | [optional] 

### Return type

[**GetInstrumentsResponse**](GetInstrumentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="listInstruments"></a>
# **listInstruments**
> ResourceListOfInstrument listInstruments(opts)

Get all of the currently mastered instruments in LUSID

Lists all instruments that have been mastered within LUSID.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.InstrumentsApi();
var opts = {
  'asAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The AsAt time
  'effectiveAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional. The effective date of the query
  'sortBy': ["null"], // [String] | Optional. Order the results by these fields. Use use the '-' sign to denote descending order e.g. -MyFieldName
  'start': 56, // Number | Optional. When paginating, skip this number of results
  'limit': 56, // Number | Optional. When paginating, limit the number of returned results to this many
  'filter': "'State eq 'Active''", // String | Optional. Expression to filter the result set - the default filter returns only instruments in the Active state
  'instrumentPropertyKeys': ["null"] // [String] | Optional. Keys of the properties to be decorated on to the instrument
};
apiInstance.listInstruments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asAt** | **Date**| Optional. The AsAt time | [optional] 
 **effectiveAt** | **Date**| Optional. The effective date of the query | [optional] 
 **sortBy** | [**[String]**](String.md)| Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName | [optional] 
 **start** | **Number**| Optional. When paginating, skip this number of results | [optional] 
 **limit** | **Number**| Optional. When paginating, limit the number of returned results to this many | [optional] 
 **filter** | **String**| Optional. Expression to filter the result set - the default filter returns only instruments in the Active state | [optional] [default to &#39;State eq &#39;Active&#39;&#39;]
 **instrumentPropertyKeys** | [**[String]**](String.md)| Optional. Keys of the properties to be decorated on to the instrument | [optional] 

### Return type

[**ResourceListOfInstrument**](ResourceListOfInstrument.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="matchInstruments"></a>
# **matchInstruments**
> MatchInstrumentsResponse matchInstruments(opts)

Find externally mastered instruments

Search for a set of instruments from an external instrument mastering service

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.InstrumentsApi();
var opts = {
  'identifierType': "identifierType_example", // String | The type of identifiers being supplied
  'requestBody': ["null"] // [String] | The identifiers of the instruments to get
};
apiInstance.matchInstruments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifierType** | **String**| The type of identifiers being supplied | [optional] 
 **requestBody** | [**[String]**](Array.md)| The identifiers of the instruments to get | [optional] 

### Return type

[**MatchInstrumentsResponse**](MatchInstrumentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="updateInstrumentIdentifier"></a>
# **updateInstrumentIdentifier**
> Instrument updateInstrumentIdentifier(identifierType, identifier, opts)

Update instrument identifier

Adds, updates, or removes an identifier on an instrument

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.InstrumentsApi();
var identifierType = "identifierType_example"; // String | The type of identifier being supplied
var identifier = "identifier_example"; // String | The instrument identifier
var opts = {
  'updateInstrumentIdentifierRequest': new LusidSdk.UpdateInstrumentIdentifierRequest() // UpdateInstrumentIdentifierRequest | The identifier to add, update, or remove
};
apiInstance.updateInstrumentIdentifier(identifierType, identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifierType** | **String**| The type of identifier being supplied | 
 **identifier** | **String**| The instrument identifier | 
 **updateInstrumentIdentifierRequest** | [**UpdateInstrumentIdentifierRequest**](UpdateInstrumentIdentifierRequest.md)| The identifier to add, update, or remove | [optional] 

### Return type

[**Instrument**](Instrument.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="upsertInstruments"></a>
# **upsertInstruments**
> UpsertInstrumentsResponse upsertInstruments(opts)

Upsert instruments

Attempt to master one or more instruments in LUSID&#39;s instrument master. Each instrument is keyed by some unique key. This key is unimportant, and serves only as a method to identify created instruments in the response.    The response will return both the collection of successfully created instruments, as well as those that were rejected and why their creation failed. They will be keyed against the key supplied in the  request.                It is important to always check the &#39;Failed&#39; set for any unsuccessful results.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.InstrumentsApi();
var opts = {
  'requestBody': {key: new LusidSdk.InstrumentDefinition()} // {String: InstrumentDefinition} | The instrument definitions
};
apiInstance.upsertInstruments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | [**{String: InstrumentDefinition}**](InstrumentDefinition.md)| The instrument definitions | [optional] 

### Return type

[**UpsertInstrumentsResponse**](UpsertInstrumentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="upsertInstrumentsProperties"></a>
# **upsertInstrumentsProperties**
> UpsertInstrumentPropertiesResponse upsertInstrumentsProperties(opts)

Upsert instrument properties

Attempt to upsert property data for one or more instruments, properties, and effective dates.    The response will include the details of any failures that occurred during data storage.                It is important to always check the &#39;Failed&#39; collection for any unsuccessful results.

### Example
```javascript
var LusidSdk = require('lusid-sdk');
var defaultClient = LusidSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LusidSdk.InstrumentsApi();
var opts = {
  'upsertInstrumentPropertyRequest': [new LusidSdk.UpsertInstrumentPropertyRequest()] // [UpsertInstrumentPropertyRequest] | The instrument property data
};
apiInstance.upsertInstrumentsProperties(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upsertInstrumentPropertyRequest** | [**[UpsertInstrumentPropertyRequest]**](Array.md)| The instrument property data | [optional] 

### Return type

[**UpsertInstrumentPropertiesResponse**](UpsertInstrumentPropertiesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

