# LusidSdk.CreatePropertyDefinitionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **String** |  | [optional] 
**scope** | **String** |  | [optional] 
**code** | **String** |  | [optional] 
**valueRequired** | **Boolean** |  | [optional] 
**displayName** | **String** |  | [optional] 
**dataTypeId** | [**ResourceId**](ResourceId.md) |  | [optional] 
**lifeTime** | **String** |  | [optional] 
**type** | **String** |  | [optional] 


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




<a name="LifeTimeEnum"></a>
## Enum: LifeTimeEnum


* `Perpetual` (value: `"Perpetual"`)

* `TimeVariant` (value: `"TimeVariant"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `Label` (value: `"Label"`)

* `Metric` (value: `"Metric"`)

* `Information` (value: `"Information"`)




