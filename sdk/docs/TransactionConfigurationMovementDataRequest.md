# LusidSdk.TransactionConfigurationMovementDataRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**movementTypes** | **String** | The Movement Types | 
**side** | **String** | The Movement Side | 
**direction** | **Number** | The Movement direction | 
**properties** | [**{String: PerpetualPropertyValue}**](PerpetualPropertyValue.md) |  | [optional] 
**mappings** | [**[TransactionPropertyMappingRequest]**](TransactionPropertyMappingRequest.md) |  | [optional] 


<a name="MovementTypesEnum"></a>
## Enum: MovementTypesEnum


* `Settlement` (value: `"Settlement"`)

* `Traded` (value: `"Traded"`)

* `ForwardFx` (value: `"ForwardFx"`)

* `Commitment` (value: `"Commitment"`)

* `Receivable` (value: `"Receivable"`)

* `CashSettlement` (value: `"CashSettlement"`)

* `Accrual` (value: `"Accrual"`)

* `UnsettledCashTypes` (value: `"UnsettledCashTypes"`)




<a name="SideEnum"></a>
## Enum: SideEnum


* `Side1` (value: `"Side1"`)

* `Side2` (value: `"Side2"`)

* `BondInt` (value: `"BondInt"`)




