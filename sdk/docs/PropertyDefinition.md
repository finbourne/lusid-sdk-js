# LusidSdk.PropertyDefinition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **String** |  | [optional] 
**key** | **String** |  | [optional] 
**valueType** | **String** |  | [optional] 
**valueRequired** | **Boolean** |  | [optional] 
**displayName** | **String** |  | [optional] 
**dataTypeId** | [**ResourceId**](ResourceId.md) |  | [optional] 
**lifeTime** | **String** |  | [optional] 
**type** | **String** |  | [optional] 
**unitSchema** | **String** |  | [optional] 
**domain** | **String** |  | [optional] 
**scope** | **String** |  | [optional] 
**code** | **String** |  | [optional] 
**links** | [**[Link]**](Link.md) |  | [optional] 


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

* `ArrayOfQuoteIds` (value: `"ArrayOfQuoteIds"`)

* `ResourceId` (value: `"ResourceId"`)

* `ResultValue` (value: `"ResultValue"`)




<a name="LifeTimeEnum"></a>
## Enum: LifeTimeEnum


* `Perpetual` (value: `"Perpetual"`)

* `TimeVariant` (value: `"TimeVariant"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `Label` (value: `"Label"`)

* `Metric` (value: `"Metric"`)

* `Information` (value: `"Information"`)




<a name="UnitSchemaEnum"></a>
## Enum: UnitSchemaEnum


* `NoUnits` (value: `"NoUnits"`)

* `Basic` (value: `"Basic"`)

* `Iso4217Currency` (value: `"Iso4217Currency"`)




<a name="DomainEnum"></a>
## Enum: DomainEnum


* `Trade` (value: `"Trade"`)

* `Portfolio` (value: `"Portfolio"`)

* `Holding` (value: `"Holding"`)

* `ReferenceHolding` (value: `"ReferenceHolding"`)

* `TransactionConfiguration` (value: `"TransactionConfiguration"`)

* `Instrument` (value: `"Instrument"`)

* `CutDefinition` (value: `"CutDefinition"`)

* `Analytic` (value: `"Analytic"`)




