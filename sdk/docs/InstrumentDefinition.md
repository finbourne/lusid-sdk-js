# LusidSdk.InstrumentDefinition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Required. The name of the instrument | 
**identifiers** | **{String: String}** | Required. A set of identifiers that uniquely identify this instrument (e.g FIGI, RIC) | 
**properties** | [**[InstrumentProperty]**](InstrumentProperty.md) | Optional. A collection of properties to upsert on the instrument. | [optional] 
**lookThroughPortfolioId** | [**ResourceId**](ResourceId.md) |  | [optional] 
**definition** | [**InstrumentEconomicDefinition**](InstrumentEconomicDefinition.md) |  | [optional] 


