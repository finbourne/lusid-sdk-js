# LusidSdk.UpsertReferencePortfolioConstituentsRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effectiveFrom** | **Date** |  | 
**weightType** | **String** |  | 
**periodType** | **String** |  | [optional] 
**periodCount** | **Number** |  | [optional] 
**constituents** | [**[ReferencePortfolioConstituentRequest]**](ReferencePortfolioConstituentRequest.md) | Set of constituents (instrument/weight pairings) | 


<a name="WeightTypeEnum"></a>
## Enum: WeightTypeEnum


* `Static` (value: `"Static"`)

* `Floating` (value: `"Floating"`)

* `Periodical` (value: `"Periodical"`)




<a name="PeriodTypeEnum"></a>
## Enum: PeriodTypeEnum


* `Daily` (value: `"Daily"`)

* `Weekly` (value: `"Weekly"`)

* `Monthly` (value: `"Monthly"`)

* `Quarterly` (value: `"Quarterly"`)

* `Annually` (value: `"Annually"`)




