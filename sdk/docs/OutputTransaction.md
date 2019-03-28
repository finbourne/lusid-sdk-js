# LusidSdk.OutputTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | Unique transaction identifier | [optional] 
**type** | **String** | LUSID transaction type code - Buy, Sell, StockIn, StockOut, etc | [optional] 
**description** | **String** | LUSID transaction description | [optional] 
**instrumentIdentifiers** | **{String: String}** | Unique instrument identifiers. | [optional] 
**instrumentUid** | **String** | Unique instrument identifier | [optional] 
**transactionDate** | **Date** | Transaction date | [optional] 
**settlementDate** | **Date** | Settlement date | [optional] 
**units** | **Number** | Quantity of trade in units of the instrument | [optional] 
**transactionPrice** | [**TransactionPrice**](TransactionPrice.md) |  | [optional] 
**totalConsideration** | [**CurrencyAndAmount**](CurrencyAndAmount.md) |  | [optional] 
**exchangeRate** | **Number** | Rate between transaction and settlement currency | [optional] 
**transactionToPortfolioRate** | **Number** | Rate between transaction and portfolio currency | [optional] 
**transactionCurrency** | **String** | Transaction currency | [optional] 
**properties** | [**[PerpetualProperty]**](PerpetualProperty.md) |  | [optional] 
**counterpartyId** | **String** | Counterparty identifier | [optional] 
**source** | **String** | Where this transaction came from | [optional] 
**nettingSet** | **String** |  | [optional] 
**transactionStatus** | **String** | Transaction status (active, amended or cancelled) | [optional] 
**entryDateTime** | **Date** | Date/Time the transaction was booked into LUSID | [optional] 
**cancelDateTime** | **Date** | Date/Time the cancellation was booked into LUSID | [optional] 
**realisedGainLoss** | [**[RealisedGainLoss]**](RealisedGainLoss.md) | Collection of gains or losses | [optional] 


<a name="TransactionStatusEnum"></a>
## Enum: TransactionStatusEnum


* `Active` (value: `"Active"`)

* `Amended` (value: `"Amended"`)

* `Cancelled` (value: `"Cancelled"`)




