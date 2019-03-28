# LusidSdk.Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | Unique transaction identifier | 
**type** | **String** | LUSID transaction type code - Buy, Sell, StockIn, StockOut, etc | 
**instrumentIdentifiers** | **{String: String}** | Unique instrument identifiers. | [optional] 
**instrumentUid** | **String** | Unique instrument identifier | 
**transactionDate** | **Date** | Transaction date | 
**settlementDate** | **Date** | Settlement date | 
**units** | **Number** | Quantity of transaction in units of the instrument | 
**transactionPrice** | [**TransactionPrice**](TransactionPrice.md) |  | 
**totalConsideration** | [**CurrencyAndAmount**](CurrencyAndAmount.md) |  | 
**exchangeRate** | **Number** | Rate between transaction and settle currency | [optional] 
**transactionCurrency** | **String** | Transaction currency | [optional] 
**properties** | [**[PerpetualProperty]**](PerpetualProperty.md) |  | [optional] 
**counterpartyId** | **String** | Counterparty identifier | [optional] 
**source** | **String** | Where this transaction came from | 
**nettingSet** | **String** |  | [optional] 


