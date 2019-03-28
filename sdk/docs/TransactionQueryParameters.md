# LusidSdk.TransactionQueryParameters

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **Date** | The required set of transactions should begin from this date | [optional] 
**endDate** | **Date** | The required set of transactions should end at this date | [optional] 
**queryMode** | **String** | The method for date selection. Trade date or Settlement date | [optional] 
**showCancelledTransactions** | **Boolean** | Option to include cancelled transactions in the results | [optional] 


<a name="QueryModeEnum"></a>
## Enum: QueryModeEnum


* `None` (value: `"None"`)

* `TradeDate` (value: `"TradeDate"`)

* `SettleDate` (value: `"SettleDate"`)




