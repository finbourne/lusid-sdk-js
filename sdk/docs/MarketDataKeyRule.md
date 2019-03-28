# LusidSdk.MarketDataKeyRule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | The market data key pattern which this is a rule for. A dot separated string (A.B.C.D.*) | 
**supplier** | **String** | the market data supplier (where the data comes from) | 
**dataScope** | **String** | the scope in which the data should be found when using this rule. | 
**quoteType** | **String** | is the quote to be looked for a price, yield etc. | [optional] 
**priceSide** | **String** | the conceptual qualification for the field. Something like Bid, Ask or Mid. | [optional] 


<a name="SupplierEnum"></a>
## Enum: SupplierEnum


* `DataScope` (value: `"DataScope"`)

* `Lusid` (value: `"Lusid"`)




<a name="QuoteTypeEnum"></a>
## Enum: QuoteTypeEnum


* `Price` (value: `"Price"`)

* `Spread` (value: `"Spread"`)

* `Rate` (value: `"Rate"`)




<a name="PriceSideEnum"></a>
## Enum: PriceSideEnum


* `Bid` (value: `"Bid"`)

* `Mid` (value: `"Mid"`)

* `Ask` (value: `"Ask"`)




