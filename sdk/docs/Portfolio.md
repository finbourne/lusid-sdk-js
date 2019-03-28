# LusidSdk.Portfolio

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **String** | Link to retrieve the current entity | [optional] 
**id** | [**ResourceId**](ResourceId.md) |  | [optional] 
**type** | **String** | The type of portfolio this is (e.g. Transaction Portfolio, Reference  Portfolio) | [optional] 
**displayName** | **String** | Display name of the portfolio | [optional] 
**description** | **String** | Description of the portfolio | [optional] 
**created** | **Date** | Portfolio creation time in UTC | [optional] 
**parentPortfolioId** | [**ResourceId**](ResourceId.md) |  | [optional] 
**version** | [**Version**](Version.md) |  | [optional] 
**isDerived** | **Boolean** |  | [optional] 
**links** | [**[Link]**](Link.md) |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `Transaction` (value: `"Transaction"`)

* `Reference` (value: `"Reference"`)

* `DerivedTransaction` (value: `"DerivedTransaction"`)




