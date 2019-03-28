# LusidSdk.HoldingsAdjustmentHeader

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effectiveAt** | **Date** | There can be at most one holdings adjustment for a portfolio at a  specific effective time so this uniquely identifies the adjustment. | [optional] 
**version** | [**Version**](Version.md) |  | [optional] 
**unmatchedHoldingMethod** | **String** |  | [optional] 
**links** | [**[Link]**](Link.md) |  | [optional] 


<a name="UnmatchedHoldingMethodEnum"></a>
## Enum: UnmatchedHoldingMethodEnum


* `PositionToZero` (value: `"PositionToZero"`)

* `KeepTheSame` (value: `"KeepTheSame"`)




