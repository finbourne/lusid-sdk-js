# LusidSdk.CreateTransactionPortfolioRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | 
**description** | **String** |  | [optional] 
**code** | **String** |  | 
**created** | **Date** |  | [optional] 
**baseCurrency** | **String** |  | 
**corporateActionSourceId** | [**ResourceId**](ResourceId.md) |  | [optional] 
**accountingMethod** | **String** |  | [optional] 
**subHoldingKeys** | **[String]** |  | [optional] 
**properties** | [**{String: PropertyValue}**](PropertyValue.md) | Portfolio properties to add to the portfolio | [optional] 


<a name="AccountingMethodEnum"></a>
## Enum: AccountingMethodEnum


* `Default` (value: `"Default"`)

* `AverageCost` (value: `"AverageCost"`)

* `FirstInFirstOut` (value: `"FirstInFirstOut"`)

* `LastInFirstOut` (value: `"LastInFirstOut"`)

* `HighestCostFirst` (value: `"HighestCostFirst"`)

* `LowestCostFirst` (value: `"LowestCostFirst"`)




