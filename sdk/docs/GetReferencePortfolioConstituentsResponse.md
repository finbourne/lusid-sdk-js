# LusidSdk.GetReferencePortfolioConstituentsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effectiveFrom** | **Date** |  | 
**weightType** | **String** |  | 
**periodType** | **String** |  | [optional] 
**periodCount** | **Number** |  | [optional] 
**constituents** | [**[ReferencePortfolioConstituent]**](ReferencePortfolioConstituent.md) | Set of constituents (instrument/weight pairings) | 
**href** | **String** | The Uri that returns the same result as the original request,  but may include resolved as at time(s). | [optional] 
**links** | [**[Link]**](Link.md) |  | [optional] 


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




