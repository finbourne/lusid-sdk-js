# LusidSdk.PortfolioHolding

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instrumentUid** | **String** | Unique instrument identifier | 
**subHoldingKeys** | [**[PerpetualProperty]**](PerpetualProperty.md) |  | [optional] 
**properties** | [**[Property]**](Property.md) |  | [optional] 
**holdingType** | **String** | Type of holding, eg Position, Balance, CashCommitment, Receivable, ForwardFX | 
**units** | **Number** | Quantity of holding | 
**settledUnits** | **Number** | Settled quantity of holding | 
**cost** | [**CurrencyAndAmount**](CurrencyAndAmount.md) |  | 
**costPortfolioCcy** | [**CurrencyAndAmount**](CurrencyAndAmount.md) |  | 
**transaction** | [**Transaction**](Transaction.md) |  | [optional] 


