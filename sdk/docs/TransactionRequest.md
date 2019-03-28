# LusidSdk.TransactionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | Unique transaction identifier | 
**type** | **String** | LUSID transaction type code - Buy, Sell, StockIn, StockOut, etc | 
**instrumentIdentifiers** | **{String: String}** | Unique instrument identifiers. | 
**transactionDate** | **Date** | Transaction date | 
**settlementDate** | **Date** | Settlement date | 
**units** | **Number** | Quantity of transaction in units of the instrument | 
**transactionPrice** | [**TransactionPrice**](TransactionPrice.md) |  | 
**totalConsideration** | [**CurrencyAndAmount**](CurrencyAndAmount.md) |  | 
**exchangeRate** | **Number** | Rate between transaction and settle currency | [optional] 
**transactionCurrency** | **String** | Transaction currency | [optional] 
**properties** | [**{String: PerpetualPropertyValue}**](PerpetualPropertyValue.md) |  | [optional] 
**counterpartyId** | **String** | Counterparty identifier | [optional] 
**source** | **String** | Where this transaction came from | [optional] 
**nettingSet** | **String** |  | [optional] 


