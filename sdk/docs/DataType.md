# LusidSdk.DataType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **String** |  | [optional] 
**typeValueRange** | **String** |  | [optional] 
**id** | [**ResourceId**](ResourceId.md) |  | [optional] 
**displayName** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**valueType** | **String** |  | [optional] 
**acceptableValues** | **[Object]** |  | [optional] 
**unitSchema** | **String** |  | [optional] 
**acceptableUnits** | [**[IUnitDefinitionDto]**](IUnitDefinitionDto.md) |  | [optional] 
**links** | [**[Link]**](Link.md) |  | [optional] 


<a name="TypeValueRangeEnum"></a>
## Enum: TypeValueRangeEnum


* `Open` (value: `"Open"`)

* `Closed` (value: `"Closed"`)




<a name="ValueTypeEnum"></a>
## Enum: ValueTypeEnum


* `String` (value: `"String"`)

* `Int` (value: `"Int"`)

* `Decimal` (value: `"Decimal"`)

* `DateTime` (value: `"DateTime"`)

* `Boolean` (value: `"Boolean"`)

* `Map` (value: `"Map"`)

* `List` (value: `"List"`)

* `PropertyArray` (value: `"PropertyArray"`)

* `Percentage` (value: `"Percentage"`)

* `BenchmarkType` (value: `"BenchmarkType"`)

* `Code` (value: `"Code"`)

* `Id` (value: `"Id"`)

* `Uri` (value: `"Uri"`)

* `ArrayOfIds` (value: `"ArrayOfIds"`)

* `ArrayOfTransactionAliases` (value: `"ArrayOfTransactionAliases"`)

* `ArrayofTransactionMovements` (value: `"ArrayofTransactionMovements"`)

* `ArrayofUnits` (value: `"ArrayofUnits"`)

* `StringArray` (value: `"StringArray"`)

* `CurrencyAndAmount` (value: `"CurrencyAndAmount"`)

* `TradePrice` (value: `"TradePrice"`)

* `UnitCreation` (value: `"UnitCreation"`)

* `Currency` (value: `"Currency"`)

* `UserId` (value: `"UserId"`)

* `MetricValue` (value: `"MetricValue"`)

* `QuoteId` (value: `"QuoteId"`)

* `QuoteLineage` (value: `"QuoteLineage"`)

* `ArrayOfQuoteIds` (value: `"ArrayOfQuoteIds"`)

* `ResourceId` (value: `"ResourceId"`)

* `ResultValue` (value: `"ResultValue"`)




<a name="UnitSchemaEnum"></a>
## Enum: UnitSchemaEnum


* `NoUnits` (value: `"NoUnits"`)

* `Basic` (value: `"Basic"`)

* `Iso4217Currency` (value: `"Iso4217Currency"`)




