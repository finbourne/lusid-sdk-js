# LusidSdk.AdjustHoldingRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instrumentIdentifiers** | **{String: String}** | Unique instrument identifiers. | 
**subHoldingKeys** | [**{String: PerpetualPropertyValue}**](PerpetualPropertyValue.md) | Key fields to uniquely index the sub holdings of a instrument | [optional] 
**properties** | [**{String: PerpetualPropertyValue}**](PerpetualPropertyValue.md) | Arbitrary properties to store with the holding | [optional] 
**taxLots** | [**[TargetTaxLotRequest]**](TargetTaxLotRequest.md) | 1 or more quantity amounts | 


