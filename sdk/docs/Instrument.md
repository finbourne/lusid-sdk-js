# LusidSdk.Instrument

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **String** |  | [optional] 
**lusidInstrumentId** | **String** | The lusid instrument id (LUID) of the instrument | [optional] 
**version** | [**Version**](Version.md) |  | [optional] 
**name** | **String** | The name of the instrument | [optional] 
**identifiers** | **{String: String}** | The set of identifiers that can be used to uniquely identify the instrument | [optional] 
**properties** | [**[Property]**](Property.md) | Any requested instrument properties. If no property can be found for the instrument, then  a value of &#39;Unknown&#39; will be returned | [optional] 
**lookthroughPortfolio** | [**ResourceId**](ResourceId.md) |  | [optional] 
**instrumentDefinition** | [**InstrumentEconomicDefinition**](InstrumentEconomicDefinition.md) |  | [optional] 
**state** | **String** |  | 
**links** | [**[Link]**](Link.md) |  | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `Active` (value: `"Active"`)

* `Inactive` (value: `"Inactive"`)




