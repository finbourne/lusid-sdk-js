# LusidSdk.MarketOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultSupplier** | **String** | The default supplier of data. This controls which &#39;dialect&#39; is used to find particular market data. e.g. one supplier might address data by RIC, another by PermId | [optional] 
**defaultInstrumentCodeType** | **String** | when instrument quotes are searched for, what identifier should be used by default | [optional] 
**defaultScope** | **String** | for default rules, which scope should data be searched for in | [optional] 


<a name="DefaultSupplierEnum"></a>
## Enum: DefaultSupplierEnum


* `DataScope` (value: `"DataScope"`)

* `Lusid` (value: `"Lusid"`)




<a name="DefaultInstrumentCodeTypeEnum"></a>
## Enum: DefaultInstrumentCodeTypeEnum


* `LusidInstrumentId` (value: `"LusidInstrumentId"`)

* `Figi` (value: `"Figi"`)

* `RIC` (value: `"RIC"`)

* `QuotePermId` (value: `"QuotePermId"`)

* `Isin` (value: `"Isin"`)

* `CurrencyPair` (value: `"CurrencyPair"`)




