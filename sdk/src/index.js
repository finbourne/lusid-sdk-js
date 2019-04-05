/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](https://api.lusid.com/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages :  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python)  # Data Model  The LUSID API has a relatively lightweight but extremely powerful data model.   One of the goals of LUSID was not to enforce on clients a single rigid data model but rather to provide a flexible foundation onto which clients can streamline their data.   One of the primary tools to extend the data model is through using properties.  Properties can be associated with amongst others: - * Transactions * Instruments * Portfolios   The LUSID data model is exposed through the LUSID APIs.  The APIs provide access to both business objects and the meta data used to configure the systems behaviours.   The key business entities are: - * **Portfolios** A portfolio is the primary container for transactions and holdings.  * **Derived Portfolios** Derived portfolios allow portfolios to be created based on other portfolios, by overriding or overlaying specific items * **Holdings** A holding is a position account for a instrument within a portfolio.  Holdings can only be adjusted via transactions. * **Transactions** A Transaction is a source of transactions used to manipulate holdings.  * **Corporate Actions** A corporate action is a market event which occurs to a instrument, for example a stock split * **Instruments**  A instrument represents a currency, tradable instrument or OTC contract that is attached to a transaction and a holding. * **Properties** Several entities allow additional user defined properties to be associated with them.   For example, a Portfolio manager may be associated with a portfolio  Meta data includes: - * **Transaction Types** Transactions are booked with a specific transaction type.  The types are client defined and are used to map the Transaction to a series of movements which update the portfolio holdings.  * **Properties Types** Types of user defined properties used within the system.  This section describes the data model that LUSID exposes via the APIs.  ## Scope  All data in LUSID is segregated at the client level.  Entities in LUSID are identifiable by a unique code.  Every entity lives within a logical data partition known as a Scope.  Scope is an identity namespace allowing two entities with the same unique code to co-exist within individual address spaces.  For example, prices for equities from different vendors may be uploaded into different scopes such as `client/vendor1` and `client/vendor2`.  A portfolio may then be valued using either of the price sources by referencing the appropriate scope.  LUSID Clients cannot access scopes of other clients.  ## Schema  A detailed description of the entities used by the API and parameters for endpoints which take a JSON document can be retrieved via the `schema` endpoint.  ## Instruments  LUSID has its own built-in instrument master which you can use to master your own instrument universe.  Every instrument must be created with one or more unique market identifiers, such as [FIGI](https://openfigi.com/) or RIC code. For any non-listed instruments (eg OTCs), you can upload an instrument against a custom ID of your choosing.  In addition, LUSID will allocate each instrument a unique 'LUSID instrument identifier'. The LUSID instrument identifier is what is used when uploading transactions, holdings, prices, etc. The API exposes an `instrument/lookup` endpoint which can be used to lookup these LUSID identifiers using their market identifiers.  Cash can be referenced using the ISO currency code prefixed with \"`CCY_`\" e.g. `CCY_GBP`  ## Instrument Prices (Analytics)  Instrument prices are stored in LUSID's Analytics Store  | Field|Type|Description | | ---|---|--- | | InstrumentUid|string|Unique instrument identifier | | Value|decimal|Value of the analytic, eg price | | Denomination|string|Underlying unit of the analytic, eg currency, EPS etc. |   ## Instrument Data  Instrument data can be uploaded to the system using the [Instrument Properties](#tag/InstrumentProperties) endpoint.  | Field|Type|Description | | ---|---|--- |   ## Portfolios  Portfolios are the top-level entity containers within LUSID, containing transactions, corporate actions and holdings.    The transactions build up the portfolio holdings on which valuations, analytics profit & loss and risk can be calculated.     Properties can be associated with Portfolios to add in additional model data.  Portfolio properties can be changed over time as well.  For example, to allow a Portfolio Manager to be linked with a Portfolio.  Additionally, portfolios can be securitised and held by other portfolios, allowing LUSID to perform \"drill-through\" into underlying fund holdings  ### Reference Portfolios Reference portfolios are portfolios that contain only weights, as opposed to transactions, and are designed to represent entities such as indices.  ### Derived Portfolios  LUSID also allows for a portfolio to be composed of another portfolio via derived portfolios.  A derived portfolio can contain its own transactions and also inherits any transactions from its parent portfolio.  Any changes made to the parent portfolio are automatically reflected in derived portfolio.  Derived portfolios in conjunction with scopes are a powerful construct.  For example, to do pre-trade what-if analysis, a derived portfolio could be created a new namespace linked to the underlying live (parent) portfolio.  Analysis can then be undertaken on the derived portfolio without affecting the live portfolio.  ### Portfolio Groups Portfolio groups allow the construction of a hierarchy from portfolios and groups.  Portfolio operations on the group are executed on an aggregated set of portfolios in the hierarchy.   For example:   * Global Portfolios _(group)_   * APAC _(group)_     * Hong Kong _(portfolio)_     * Japan _(portfolio)_   * Europe _(group)_     * France _(portfolio)_     * Germany _(portfolio)_   * UK _(portfolio)_   In this example **Global Portfolios** is a group that consists of an aggregate of **Hong Kong**, **Japan**, **France**, **Germany** and **UK** portfolios.  ### Movements Engine The Movements engine sits on top of the immutable event store and is used to manage the relationship between input trading actions and their associated portfolio holdings.     The movements engine reads in the following entity types:- * Posting Transactions * Applying Corporate Actions  * Holding Adjustments  These are converted to one or more movements and used by the movements engine to calculate holdings.  At the same time it also calculates running balances, and realised P&L.  The outputs from the movements engine are holdings and transactions.  ## Transactions  A transaction represents an economic activity against a Portfolio.  Transactions are processed according to a configuration. This will tell the LUSID engine how to interpret the transaction and correctly update the holdings. LUSID comes with a set of transaction types you can use out of the box, or you can configure your own set(s) of transactions.  For more details see the [LUSID Getting Started Guide for transaction configuration.](https://support.finbourne.com/hc/en-us/articles/360016737511-Configuring-Transaction-Types)  | Field|Type|Description | | ---|---|--- | | TransactionId|string|Unique transaction identifier | | Type|string|LUSID transaction type code - Buy, Sell, StockIn, StockOut, etc | | InstrumentIdentifiers|IReadOnlyDictionary`2|Unique instrument identifiers. | | InstrumentUid|string|Unique instrument identifier | | TransactionDate|datetime|Transaction date | | SettlementDate|datetime|Settlement date | | Units|decimal|Quantity of transaction in units of the instrument | | TransactionPrice|tradeprice|Execution price for the transaction | | TotalConsideration|currencyandamount|Total value of the transaction in settlement currency | | ExchangeRate|decimal|Rate between transaction and settle currency | | TransactionCurrency|currency|Transaction currency | | CounterpartyId|string|Counterparty identifier | | Source|string|Where this transaction came from | | NettingSet|string|  |   From these fields, the following values can be calculated  * **Transaction value in Transaction currency**: TotalConsideration / ExchangeRate  * **Transaction value in Portfolio currency**: Transaction value in Transaction currency * TradeToPortfolioRate  ### Example Transactions  #### A Common Purchase Example Three example transactions are shown in the table below.   They represent a purchase of USD denominated IBM shares within a Sterling denominated portfolio.   * The first two transactions are for separate buy and fx trades    * Buying 500 IBM shares for $71,480.00    * A foreign exchange conversion to fund the IBM purchase. (Buy $71,480.00 for &#163;54,846.60)  * The third transaction is an alternate version of the above trades. Buying 500 IBM shares and settling directly in Sterling.  | Column |  Buy Trade | Fx Trade | Buy Trade with foreign Settlement | | ----- | ----- | ----- | ----- | | TransactionId | FBN00001 | FBN00002 | FBN00003 | | Type | Buy | FxBuy | Buy | | InstrumentUid | FIGI_BBG000BLNNH6 | CCY_USD | FIGI_BBG000BLNNH6 | | TransactionDate | 2018-08-02 | 2018-08-02 | 2018-08-02 | | SettlementDate | 2018-08-06 | 2018-08-06 | 2018-08-06 | | Units | 500 | 71480 | 500 | | TransactionPrice | 142.96 | 1 | 142.96 | | TradeCurrency | USD | USD | USD | | ExchangeRate | 1 | 0.7673 | 0.7673 | | TotalConsideration.Amount | 71480.00 | 54846.60 | 54846.60 | | TotalConsideration.Currency | USD | GBP | GBP | | Trade/default/TradeToPortfolioRate&ast; | 0.7673 | 0.7673 | 0.7673 |  [&ast; This is a property field]  #### A Forward FX Example  LUSID has a flexible transaction modelling system, and there are a number of different ways of modelling forward fx trades.  The default LUSID transaction types are FwdFxBuy and FwdFxSell. Other types and behaviours can be configured as required.  Using these transaction types, the holdings query will report two forward positions. One in each currency.   Since an FX trade is an exchange of one currency for another, the following two 6 month forward transactions are equivalent:  | Column |  Forward 'Sell' Trade | Forward 'Buy' Trade | | ----- | ----- | ----- | | TransactionId | FBN00004 | FBN00005 | | Type | FwdFxSell | FwdFxBuy | | InstrumentUid | CCY_GBP | CCY_USD | | TransactionDate | 2018-08-02 | 2018-08-02 | | SettlementDate | 2019-02-06 | 2019-02-06 | | Units | 10000.00 | 13142.00 | | TransactionPrice |1 | 1 | | TradeCurrency | GBP | USD | | ExchangeRate | 1.3142 | 0.760919 | | TotalConsideration.Amount | 13142.00 | 10000.00 | | TotalConsideration.Currency | USD | GBP | | Trade/default/TradeToPortfolioRate | 1.0 | 0.760919 |  ## Holdings  A holding represents a position in a instrument or cash on a given date.  | Field|Type|Description | | ---|---|--- | | InstrumentUid|string|Unique instrument identifier | | HoldingType|string|Type of holding, eg Position, Balance, CashCommitment, Receivable, ForwardFX | | Units|decimal|Quantity of holding | | SettledUnits|decimal|Settled quantity of holding | | Cost|currencyandamount|Book cost of holding in transaction currency | | CostPortfolioCcy|currencyandamount|Book cost of holding in portfolio currency | | Transaction|Transaction|If this is commitment-type holding, the transaction behind it |   ## Corporate Actions  Corporate actions are represented within LUSID in terms of a set of instrument-specific 'transitions'.  These transitions are used to specify the participants of the corporate action, and the effect that the corporate action will have on holdings in those participants.  *Corporate action*  | Field|Type|Description | | ---|---|--- | | SourceId|id|  | | CorporateActionCode|code|  | | AnnouncementDate|datetime|  | | ExDate|datetime|  | | RecordDate|datetime|  | | PaymentDate|datetime|  |    *Transition*  | Field|Type|Description | | ---|---|--- |   ## Property  Properties are key-value pairs that can be applied to any entity within a domain (where a domain is `trade`, `portfolio`, `security` etc).  Properties must be defined before use with a `PropertyDefinition` and can then subsequently be added to entities.  # Schemas  The following headers are returned on all responses from LUSID  | Name | Purpose | | --- | --- | | lusid-meta-duration | Duration of the request | | lusid-meta-success | Whether or not LUSID considered the request to be successful | | lusid-meta-requestId | The unique identifier for the request | | lusid-schema-url | Url of the schema for the data being returned | | lusid-property-schema-url | Url of the schema for any properties |   # Error Codes  | Code|Name|Description | | ---|---|--- | | <a name=\"102\">102</a>|VersionNotFound|  | | <a name=\"104\">104</a>|InstrumentNotFound|  | | <a name=\"105\">105</a>|PropertyNotFound|  | | <a name=\"106\">106</a>|PortfolioRecursionDepth|  | | <a name=\"108\">108</a>|GroupNotFound|  | | <a name=\"109\">109</a>|PortfolioNotFound|  | | <a name=\"110\">110</a>|PropertySchemaNotFound|  | | <a name=\"111\">111</a>|PortfolioAncestryNotFound|  | | <a name=\"112\">112</a>|PortfolioWithIdAlreadyExists|  | | <a name=\"113\">113</a>|OrphanedPortfolio|  | | <a name=\"119\">119</a>|MissingBaseClaims|  | | <a name=\"121\">121</a>|PropertyNotDefined|  | | <a name=\"122\">122</a>|CannotDeleteSystemProperty|  | | <a name=\"123\">123</a>|CannotModifyImmutablePropertyField|  | | <a name=\"124\">124</a>|PropertyAlreadyExists|  | | <a name=\"125\">125</a>|InvalidPropertyLifeTime|  | | <a name=\"127\">127</a>|CannotModifyDefaultDataType|  | | <a name=\"128\">128</a>|GroupAlreadyExists|  | | <a name=\"129\">129</a>|NoSuchDataType|  | | <a name=\"132\">132</a>|ValidationError|  | | <a name=\"133\">133</a>|LoopDetectedInGroupHierarchy|  | | <a name=\"135\">135</a>|SubGroupAlreadyExists|  | | <a name=\"138\">138</a>|PriceSourceNotFound|  | | <a name=\"139\">139</a>|AnalyticStoreNotFound|  | | <a name=\"141\">141</a>|AnalyticStoreAlreadyExists|  | | <a name=\"143\">143</a>|ClientInstrumentAlreadyExists|  | | <a name=\"144\">144</a>|DuplicateInParameterSet|  | | <a name=\"147\">147</a>|ResultsNotFound|  | | <a name=\"148\">148</a>|OrderFieldNotInResultSet|  | | <a name=\"149\">149</a>|OperationFailed|  | | <a name=\"150\">150</a>|ElasticSearchError|  | | <a name=\"151\">151</a>|InvalidParameterValue|  | | <a name=\"153\">153</a>|CommandProcessingFailure|  | | <a name=\"154\">154</a>|EntityStateConstructionFailure|  | | <a name=\"155\">155</a>|EntityTimelineDoesNotExist|  | | <a name=\"156\">156</a>|EventPublishFailure|  | | <a name=\"157\">157</a>|InvalidRequestFailure|  | | <a name=\"158\">158</a>|EventPublishUnknown|  | | <a name=\"159\">159</a>|EventQueryFailure|  | | <a name=\"160\">160</a>|BlobDidNotExistFailure|  | | <a name=\"162\">162</a>|SubSystemRequestFailure|  | | <a name=\"163\">163</a>|SubSystemConfigurationFailure|  | | <a name=\"165\">165</a>|FailedToDelete|  | | <a name=\"166\">166</a>|UpsertClientInstrumentFailure|  | | <a name=\"167\">167</a>|IllegalAsAtInterval|  | | <a name=\"168\">168</a>|IllegalBitemporalQuery|  | | <a name=\"169\">169</a>|InvalidAlternateId|  | | <a name=\"170\">170</a>|CannotAddSourcePortfolioPropertyExplicitly|  | | <a name=\"171\">171</a>|EntityAlreadyExistsInGroup|  | | <a name=\"173\">173</a>|EntityWithIdAlreadyExists|  | | <a name=\"174\">174</a>|DerivedPortfolioDetailsDoNotExist|  | | <a name=\"176\">176</a>|PortfolioWithNameAlreadyExists|  | | <a name=\"177\">177</a>|InvalidTransactions|  | | <a name=\"178\">178</a>|ReferencePortfolioNotFound|  | | <a name=\"179\">179</a>|DuplicateIdFailure|  | | <a name=\"180\">180</a>|CommandRetrievalFailure|  | | <a name=\"181\">181</a>|DataFilterApplicationFailure|  | | <a name=\"182\">182</a>|SearchFailed|  | | <a name=\"183\">183</a>|MovementsEngineConfigurationKeyFailure|  | | <a name=\"184\">184</a>|FxRateSourceNotFound|  | | <a name=\"185\">185</a>|AccrualSourceNotFound|  | | <a name=\"186\">186</a>|EntitlementsFailure|  | | <a name=\"187\">187</a>|InvalidIdentityToken|  | | <a name=\"188\">188</a>|InvalidRequestHeaders|  | | <a name=\"189\">189</a>|PriceNotFound|  | | <a name=\"190\">190</a>|InvalidSubHoldingKeysProvided|  | | <a name=\"191\">191</a>|DuplicateSubHoldingKeysProvided|  | | <a name=\"192\">192</a>|CutDefinitionNotFound|  | | <a name=\"193\">193</a>|CutDefinitionInvalid|  | | <a name=\"200\">200</a>|InvalidUnitForDataType|  | | <a name=\"201\">201</a>|InvalidTypeForDataType|  | | <a name=\"202\">202</a>|InvalidValueForDataType|  | | <a name=\"203\">203</a>|UnitNotDefinedForDataType|  | | <a name=\"204\">204</a>|UnitsNotSupportedOnDataType|  | | <a name=\"205\">205</a>|CannotSpecifyUnitsOnDataType|  | | <a name=\"206\">206</a>|UnitSchemaInconsistentWithDataType|  | | <a name=\"207\">207</a>|UnitDefinitionNotSpecified|  | | <a name=\"208\">208</a>|DuplicateUnitDefinitionsSpecified|  | | <a name=\"209\">209</a>|InvalidUnitsDefinition|  | | <a name=\"210\">210</a>|InvalidInstrumentIdentifierUnit|  | | <a name=\"211\">211</a>|HoldingsAdjustmentDoesNotExist|  | | <a name=\"212\">212</a>|CouldNotBuildExcelUrl|  | | <a name=\"213\">213</a>|CouldNotGetExcelVersion|  | | <a name=\"214\">214</a>|InstrumentByCodeNotFound|  | | <a name=\"215\">215</a>|EntitySchemaDoesNotExist|  | | <a name=\"216\">216</a>|FeatureNotSupportedOnPortfolioType|  | | <a name=\"217\">217</a>|QuoteNotFoundFailure|  | | <a name=\"219\">219</a>|InvalidInstrumentDefinition|  | | <a name=\"221\">221</a>|InstrumentUpsertFailure|  | | <a name=\"222\">222</a>|ReferencePortfolioRequestNotSupported|  | | <a name=\"223\">223</a>|TransactionPortfolioRequestNotSupported|  | | <a name=\"224\">224</a>|InvalidPropertyValueAssignment|  | | <a name=\"230\">230</a>|TransactionTypeNotFound|  | | <a name=\"231\">231</a>|TransactionTypeDuplication|  | | <a name=\"232\">232</a>|PortfolioDoesNotExistAtGivenDate|  | | <a name=\"233\">233</a>|QueryParserFailure|  | | <a name=\"234\">234</a>|DuplicateConstituentFailure|  | | <a name=\"235\">235</a>|UnresolvedInstrumentConstituentFailure|  | | <a name=\"236\">236</a>|UnresolvedInstrumentInTransitionFailure|  | | <a name=\"300\">300</a>|MissingRecipeFailure|  | | <a name=\"301\">301</a>|DependenciesFailure|  | | <a name=\"304\">304</a>|PortfolioPreprocessFailure|  | | <a name=\"310\">310</a>|ValuationEngineFailure|  | | <a name=\"311\">311</a>|TaskFactoryFailure|  | | <a name=\"312\">312</a>|TaskEvaluationFailure|  | | <a name=\"350\">350</a>|InstrumentFailure|  | | <a name=\"351\">351</a>|CashFlowsFailure|  | | <a name=\"370\">370</a>|ResultRetrievalFailure|  | | <a name=\"371\">371</a>|ResultProcessingFailure|  | | <a name=\"372\">372</a>|VendorResultProcessingFailure|  | | <a name=\"373\">373</a>|CannotSupplyTimesWithPortfoliosQuery|  | | <a name=\"374\">374</a>|AttemptToUpsertDuplicateQuotes|  | | <a name=\"375\">375</a>|CorporateActionSourceDoesNotExist|  | | <a name=\"376\">376</a>|InstrumentIdentifierAlreadyInUse|  | | <a name=\"-10\">-10</a>|ServerConfigurationError|  | | <a name=\"-1\">-1</a>|Unknown error|  | 
 *
 * OpenAPI spec version: 0.9.228
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddTransactionPropertyResponse', 'model/AdjustHolding', 'model/AdjustHoldingRequest', 'model/AggregateSpec', 'model/AggregationContext', 'model/AggregationOptions', 'model/AggregationRequest', 'model/AggregationResponseNode', 'model/AnalyticStore', 'model/AnalyticStoreKey', 'model/CompletePortfolio', 'model/ConfigurationRecipe', 'model/ConstituentsAdjustmentHeader', 'model/CorporateAction', 'model/CorporateActionSource', 'model/CorporateActionTransition', 'model/CorporateActionTransitionComponent', 'model/CorporateActionTransitionComponentRequest', 'model/CorporateActionTransitionRequest', 'model/CreateAnalyticStoreRequest', 'model/CreateCorporateAction', 'model/CreateCorporateActionSourceRequest', 'model/CreateDataTypeRequest', 'model/CreateDerivedTransactionPortfolioRequest', 'model/CreatePortfolioDetails', 'model/CreatePortfolioGroupRequest', 'model/CreatePropertyDefinitionRequest', 'model/CreateReferencePortfolioRequest', 'model/CreateResults', 'model/CreateTransactionPortfolioRequest', 'model/CreateUnitDefinition', 'model/CurrencyAndAmount', 'model/DataType', 'model/DeleteInstrumentPropertyRequest', 'model/DeleteInstrumentResponse', 'model/DeleteQuoteRequest', 'model/DeleteQuotesResponse', 'model/DeletedEntityResponse', 'model/ErrorDetail', 'model/ErrorDetailBase', 'model/ErrorResponse', 'model/ExecutionRequest', 'model/ExpandedGroup', 'model/FieldSchema', 'model/FileResponse', 'model/GetInstrumentsResponse', 'model/GetQuotesResponse', 'model/GetReferencePortfolioConstituentsResponse', 'model/HoldingAdjustment', 'model/HoldingsAdjustment', 'model/HoldingsAdjustmentHeader', 'model/IUnitDefinitionDto', 'model/Instrument', 'model/InstrumentAnalytic', 'model/InstrumentDefinition', 'model/InstrumentEconomicDefinition', 'model/InstrumentMatch', 'model/InstrumentProperty', 'model/InstrumentSearchProperty', 'model/Link', 'model/ListAggregationResponse', 'model/MarketContext', 'model/MarketContextSuppliers', 'model/MarketDataKeyRule', 'model/MarketOptions', 'model/MatchInstrumentsResponse', 'model/MetricValue', 'model/ModelSelection', 'model/NestedAggregationResponse', 'model/OutputTransaction', 'model/PerpetualProperty', 'model/PerpetualPropertyValue', 'model/Portfolio', 'model/PortfolioDetails', 'model/PortfolioGroup', 'model/PortfolioHolding', 'model/PortfolioProperties', 'model/PortfolioReconciliationRequest', 'model/PortfolioSearchResult', 'model/PortfoliosReconciliationRequest', 'model/PricingContext', 'model/PricingOptions', 'model/ProcessedCommand', 'model/Property', 'model/PropertyDefinition', 'model/PropertyFilter', 'model/PropertySchema', 'model/PropertyValue', 'model/Quote', 'model/QuoteId', 'model/RealisedGainLoss', 'model/ReconciliationBreak', 'model/ReferencePortfolioConstituent', 'model/ReferencePortfolioConstituentRequest', 'model/ResourceId', 'model/ResourceListOfAnalyticStoreKey', 'model/ResourceListOfConstituentsAdjustmentHeader', 'model/ResourceListOfCorporateAction', 'model/ResourceListOfCorporateActionSource', 'model/ResourceListOfDataType', 'model/ResourceListOfHoldingsAdjustmentHeader', 'model/ResourceListOfIUnitDefinitionDto', 'model/ResourceListOfInstrument', 'model/ResourceListOfPortfolio', 'model/ResourceListOfPortfolioGroup', 'model/ResourceListOfPortfolioSearchResult', 'model/ResourceListOfProcessedCommand', 'model/ResourceListOfPropertyDefinition', 'model/ResourceListOfReconciliationBreak', 'model/ResourceListOfScopeDefinition', 'model/ResourceListOfString', 'model/ResourceListOfTransactionConfigurationData', 'model/ResourceListOfValueType', 'model/ResultDataSchema', 'model/Results', 'model/Schema', 'model/ScopeDefinition', 'model/Stream', 'model/TargetTaxLot', 'model/TargetTaxLotRequest', 'model/Transaction', 'model/TransactionConfigurationData', 'model/TransactionConfigurationDataRequest', 'model/TransactionConfigurationMovementData', 'model/TransactionConfigurationMovementDataRequest', 'model/TransactionConfigurationTypeAlias', 'model/TransactionPrice', 'model/TransactionPropertyMapping', 'model/TransactionPropertyMappingRequest', 'model/TransactionQueryParameters', 'model/TransactionRequest', 'model/UpdateDataTypeRequest', 'model/UpdateInstrumentIdentifierRequest', 'model/UpdatePortfolioGroupRequest', 'model/UpdatePortfolioRequest', 'model/UpdatePropertyDefinitionRequest', 'model/UpsertCorporateActionsResponse', 'model/UpsertInstrumentPropertiesResponse', 'model/UpsertInstrumentPropertyRequest', 'model/UpsertInstrumentsResponse', 'model/UpsertPortfolioExecutionsResponse', 'model/UpsertPortfolioTransactionsResponse', 'model/UpsertQuoteRequest', 'model/UpsertQuotesResponse', 'model/UpsertReferencePortfolioConstituentsRequest', 'model/UpsertReferencePortfolioConstituentsResponse', 'model/User', 'model/ValuationReconciliationRequest', 'model/ValuationsReconciliationRequest', 'model/VendorModelRule', 'model/Version', 'model/VersionSummaryDto', 'model/VersionedResourceListOfOutputTransaction', 'model/VersionedResourceListOfPortfolioHolding', 'model/VersionedResourceListOfTransaction', 'api/AggregationApi', 'api/AnalyticsStoresApi', 'api/ApplicationMetadataApi', 'api/CorporateActionSourcesApi', 'api/DataTypesApi', 'api/DerivedTransactionPortfoliosApi', 'api/InstrumentsApi', 'api/LoginApi', 'api/PortfolioGroupsApi', 'api/PortfoliosApi', 'api/PropertyDefinitionsApi', 'api/QuotesApi', 'api/ReconciliationsApi', 'api/ReferencePortfolioApi', 'api/ResultsApi', 'api/SchemasApi', 'api/ScopesApi', 'api/SearchApi', 'api/SystemConfigurationApi', 'api/TransactionPortfoliosApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AddTransactionPropertyResponse'), require('./model/AdjustHolding'), require('./model/AdjustHoldingRequest'), require('./model/AggregateSpec'), require('./model/AggregationContext'), require('./model/AggregationOptions'), require('./model/AggregationRequest'), require('./model/AggregationResponseNode'), require('./model/AnalyticStore'), require('./model/AnalyticStoreKey'), require('./model/CompletePortfolio'), require('./model/ConfigurationRecipe'), require('./model/ConstituentsAdjustmentHeader'), require('./model/CorporateAction'), require('./model/CorporateActionSource'), require('./model/CorporateActionTransition'), require('./model/CorporateActionTransitionComponent'), require('./model/CorporateActionTransitionComponentRequest'), require('./model/CorporateActionTransitionRequest'), require('./model/CreateAnalyticStoreRequest'), require('./model/CreateCorporateAction'), require('./model/CreateCorporateActionSourceRequest'), require('./model/CreateDataTypeRequest'), require('./model/CreateDerivedTransactionPortfolioRequest'), require('./model/CreatePortfolioDetails'), require('./model/CreatePortfolioGroupRequest'), require('./model/CreatePropertyDefinitionRequest'), require('./model/CreateReferencePortfolioRequest'), require('./model/CreateResults'), require('./model/CreateTransactionPortfolioRequest'), require('./model/CreateUnitDefinition'), require('./model/CurrencyAndAmount'), require('./model/DataType'), require('./model/DeleteInstrumentPropertyRequest'), require('./model/DeleteInstrumentResponse'), require('./model/DeleteQuoteRequest'), require('./model/DeleteQuotesResponse'), require('./model/DeletedEntityResponse'), require('./model/ErrorDetail'), require('./model/ErrorDetailBase'), require('./model/ErrorResponse'), require('./model/ExecutionRequest'), require('./model/ExpandedGroup'), require('./model/FieldSchema'), require('./model/FileResponse'), require('./model/GetInstrumentsResponse'), require('./model/GetQuotesResponse'), require('./model/GetReferencePortfolioConstituentsResponse'), require('./model/HoldingAdjustment'), require('./model/HoldingsAdjustment'), require('./model/HoldingsAdjustmentHeader'), require('./model/IUnitDefinitionDto'), require('./model/Instrument'), require('./model/InstrumentAnalytic'), require('./model/InstrumentDefinition'), require('./model/InstrumentEconomicDefinition'), require('./model/InstrumentMatch'), require('./model/InstrumentProperty'), require('./model/InstrumentSearchProperty'), require('./model/Link'), require('./model/ListAggregationResponse'), require('./model/MarketContext'), require('./model/MarketContextSuppliers'), require('./model/MarketDataKeyRule'), require('./model/MarketOptions'), require('./model/MatchInstrumentsResponse'), require('./model/MetricValue'), require('./model/ModelSelection'), require('./model/NestedAggregationResponse'), require('./model/OutputTransaction'), require('./model/PerpetualProperty'), require('./model/PerpetualPropertyValue'), require('./model/Portfolio'), require('./model/PortfolioDetails'), require('./model/PortfolioGroup'), require('./model/PortfolioHolding'), require('./model/PortfolioProperties'), require('./model/PortfolioReconciliationRequest'), require('./model/PortfolioSearchResult'), require('./model/PortfoliosReconciliationRequest'), require('./model/PricingContext'), require('./model/PricingOptions'), require('./model/ProcessedCommand'), require('./model/Property'), require('./model/PropertyDefinition'), require('./model/PropertyFilter'), require('./model/PropertySchema'), require('./model/PropertyValue'), require('./model/Quote'), require('./model/QuoteId'), require('./model/RealisedGainLoss'), require('./model/ReconciliationBreak'), require('./model/ReferencePortfolioConstituent'), require('./model/ReferencePortfolioConstituentRequest'), require('./model/ResourceId'), require('./model/ResourceListOfAnalyticStoreKey'), require('./model/ResourceListOfConstituentsAdjustmentHeader'), require('./model/ResourceListOfCorporateAction'), require('./model/ResourceListOfCorporateActionSource'), require('./model/ResourceListOfDataType'), require('./model/ResourceListOfHoldingsAdjustmentHeader'), require('./model/ResourceListOfIUnitDefinitionDto'), require('./model/ResourceListOfInstrument'), require('./model/ResourceListOfPortfolio'), require('./model/ResourceListOfPortfolioGroup'), require('./model/ResourceListOfPortfolioSearchResult'), require('./model/ResourceListOfProcessedCommand'), require('./model/ResourceListOfPropertyDefinition'), require('./model/ResourceListOfReconciliationBreak'), require('./model/ResourceListOfScopeDefinition'), require('./model/ResourceListOfString'), require('./model/ResourceListOfTransactionConfigurationData'), require('./model/ResourceListOfValueType'), require('./model/ResultDataSchema'), require('./model/Results'), require('./model/Schema'), require('./model/ScopeDefinition'), require('./model/Stream'), require('./model/TargetTaxLot'), require('./model/TargetTaxLotRequest'), require('./model/Transaction'), require('./model/TransactionConfigurationData'), require('./model/TransactionConfigurationDataRequest'), require('./model/TransactionConfigurationMovementData'), require('./model/TransactionConfigurationMovementDataRequest'), require('./model/TransactionConfigurationTypeAlias'), require('./model/TransactionPrice'), require('./model/TransactionPropertyMapping'), require('./model/TransactionPropertyMappingRequest'), require('./model/TransactionQueryParameters'), require('./model/TransactionRequest'), require('./model/UpdateDataTypeRequest'), require('./model/UpdateInstrumentIdentifierRequest'), require('./model/UpdatePortfolioGroupRequest'), require('./model/UpdatePortfolioRequest'), require('./model/UpdatePropertyDefinitionRequest'), require('./model/UpsertCorporateActionsResponse'), require('./model/UpsertInstrumentPropertiesResponse'), require('./model/UpsertInstrumentPropertyRequest'), require('./model/UpsertInstrumentsResponse'), require('./model/UpsertPortfolioExecutionsResponse'), require('./model/UpsertPortfolioTransactionsResponse'), require('./model/UpsertQuoteRequest'), require('./model/UpsertQuotesResponse'), require('./model/UpsertReferencePortfolioConstituentsRequest'), require('./model/UpsertReferencePortfolioConstituentsResponse'), require('./model/User'), require('./model/ValuationReconciliationRequest'), require('./model/ValuationsReconciliationRequest'), require('./model/VendorModelRule'), require('./model/Version'), require('./model/VersionSummaryDto'), require('./model/VersionedResourceListOfOutputTransaction'), require('./model/VersionedResourceListOfPortfolioHolding'), require('./model/VersionedResourceListOfTransaction'), require('./api/AggregationApi'), require('./api/AnalyticsStoresApi'), require('./api/ApplicationMetadataApi'), require('./api/CorporateActionSourcesApi'), require('./api/DataTypesApi'), require('./api/DerivedTransactionPortfoliosApi'), require('./api/InstrumentsApi'), require('./api/LoginApi'), require('./api/PortfolioGroupsApi'), require('./api/PortfoliosApi'), require('./api/PropertyDefinitionsApi'), require('./api/QuotesApi'), require('./api/ReconciliationsApi'), require('./api/ReferencePortfolioApi'), require('./api/ResultsApi'), require('./api/SchemasApi'), require('./api/ScopesApi'), require('./api/SearchApi'), require('./api/SystemConfigurationApi'), require('./api/TransactionPortfoliosApi'));
  }
}(function(ApiClient, AddTransactionPropertyResponse, AdjustHolding, AdjustHoldingRequest, AggregateSpec, AggregationContext, AggregationOptions, AggregationRequest, AggregationResponseNode, AnalyticStore, AnalyticStoreKey, CompletePortfolio, ConfigurationRecipe, ConstituentsAdjustmentHeader, CorporateAction, CorporateActionSource, CorporateActionTransition, CorporateActionTransitionComponent, CorporateActionTransitionComponentRequest, CorporateActionTransitionRequest, CreateAnalyticStoreRequest, CreateCorporateAction, CreateCorporateActionSourceRequest, CreateDataTypeRequest, CreateDerivedTransactionPortfolioRequest, CreatePortfolioDetails, CreatePortfolioGroupRequest, CreatePropertyDefinitionRequest, CreateReferencePortfolioRequest, CreateResults, CreateTransactionPortfolioRequest, CreateUnitDefinition, CurrencyAndAmount, DataType, DeleteInstrumentPropertyRequest, DeleteInstrumentResponse, DeleteQuoteRequest, DeleteQuotesResponse, DeletedEntityResponse, ErrorDetail, ErrorDetailBase, ErrorResponse, ExecutionRequest, ExpandedGroup, FieldSchema, FileResponse, GetInstrumentsResponse, GetQuotesResponse, GetReferencePortfolioConstituentsResponse, HoldingAdjustment, HoldingsAdjustment, HoldingsAdjustmentHeader, IUnitDefinitionDto, Instrument, InstrumentAnalytic, InstrumentDefinition, InstrumentEconomicDefinition, InstrumentMatch, InstrumentProperty, InstrumentSearchProperty, Link, ListAggregationResponse, MarketContext, MarketContextSuppliers, MarketDataKeyRule, MarketOptions, MatchInstrumentsResponse, MetricValue, ModelSelection, NestedAggregationResponse, OutputTransaction, PerpetualProperty, PerpetualPropertyValue, Portfolio, PortfolioDetails, PortfolioGroup, PortfolioHolding, PortfolioProperties, PortfolioReconciliationRequest, PortfolioSearchResult, PortfoliosReconciliationRequest, PricingContext, PricingOptions, ProcessedCommand, Property, PropertyDefinition, PropertyFilter, PropertySchema, PropertyValue, Quote, QuoteId, RealisedGainLoss, ReconciliationBreak, ReferencePortfolioConstituent, ReferencePortfolioConstituentRequest, ResourceId, ResourceListOfAnalyticStoreKey, ResourceListOfConstituentsAdjustmentHeader, ResourceListOfCorporateAction, ResourceListOfCorporateActionSource, ResourceListOfDataType, ResourceListOfHoldingsAdjustmentHeader, ResourceListOfIUnitDefinitionDto, ResourceListOfInstrument, ResourceListOfPortfolio, ResourceListOfPortfolioGroup, ResourceListOfPortfolioSearchResult, ResourceListOfProcessedCommand, ResourceListOfPropertyDefinition, ResourceListOfReconciliationBreak, ResourceListOfScopeDefinition, ResourceListOfString, ResourceListOfTransactionConfigurationData, ResourceListOfValueType, ResultDataSchema, Results, Schema, ScopeDefinition, Stream, TargetTaxLot, TargetTaxLotRequest, Transaction, TransactionConfigurationData, TransactionConfigurationDataRequest, TransactionConfigurationMovementData, TransactionConfigurationMovementDataRequest, TransactionConfigurationTypeAlias, TransactionPrice, TransactionPropertyMapping, TransactionPropertyMappingRequest, TransactionQueryParameters, TransactionRequest, UpdateDataTypeRequest, UpdateInstrumentIdentifierRequest, UpdatePortfolioGroupRequest, UpdatePortfolioRequest, UpdatePropertyDefinitionRequest, UpsertCorporateActionsResponse, UpsertInstrumentPropertiesResponse, UpsertInstrumentPropertyRequest, UpsertInstrumentsResponse, UpsertPortfolioExecutionsResponse, UpsertPortfolioTransactionsResponse, UpsertQuoteRequest, UpsertQuotesResponse, UpsertReferencePortfolioConstituentsRequest, UpsertReferencePortfolioConstituentsResponse, User, ValuationReconciliationRequest, ValuationsReconciliationRequest, VendorModelRule, Version, VersionSummaryDto, VersionedResourceListOfOutputTransaction, VersionedResourceListOfPortfolioHolding, VersionedResourceListOfTransaction, AggregationApi, AnalyticsStoresApi, ApplicationMetadataApi, CorporateActionSourcesApi, DataTypesApi, DerivedTransactionPortfoliosApi, InstrumentsApi, LoginApi, PortfolioGroupsApi, PortfoliosApi, PropertyDefinitionsApi, QuotesApi, ReconciliationsApi, ReferencePortfolioApi, ResultsApi, SchemasApi, ScopesApi, SearchApi, SystemConfigurationApi, TransactionPortfoliosApi) {
  'use strict';

  /**
   * _IntroductionThis_page_documents_the__LUSID_APIs_httpsapi_lusid_comswagger_which_allows_authorised_clients_to_query_and_update_their_data_within_the_LUSID_platform_SDKs_to_interact_with_the_LUSID_APIs_are_available_in_the_following_languages___C_httpsgithub_comfinbournelusid_sdk_csharp__Java_httpsgithub_comfinbournelusid_sdk_java__JavaScript_httpsgithub_comfinbournelusid_sdk_js__Python_httpsgithub_comfinbournelusid_sdk_python_Data_ModelThe_LUSID_API_has_a_relatively_lightweight_but_extremely_powerful_data_model____One_of_the_goals_of_LUSID_was_not_to_enforce_on_clients_a_single_rigid_data_model_but_rather_to_provide_a_flexible_foundation_onto_which_clients_can_streamline_their_data____One_of_the_primary_tools_to_extend_the_data_model_is_through_using_properties___Properties_can_be_associated_with_amongst_others___Transactions_Instruments_Portfolios_The_LUSID_data_model_is_exposed_through_the_LUSID_APIs___The_APIs_provide_access_to_both_business_objects_and_the_meta_data_used_to_configure_the_systems_behaviours____The_key_business_entities_are___PortfoliosA_portfolio_is_the_primary_container_for_transactions_and_holdings___Derived_PortfoliosDerived_portfolios_allow_portfolios_to_be_created_based_on_other_portfolios_by_overriding_or_overlaying_specific_items_HoldingsA_holding_is_a_position_account_for_a_instrument_within_a_portfolio___Holdings_can_only_be_adjusted_via_transactions__TransactionsA_Transaction_is_a_source_of_transactions_used_to_manipulate_holdings___Corporate_ActionsA_corporate_action_is_a_market_event_which_occurs_to_a_instrument_for_example_a_stock_split_Instruments_A_instrument_represents_a_currency_tradable_instrument_or_OTC_contract_that_is_attached_to_a_transaction_and_a_holding__PropertiesSeveral_entities_allow_additional_user_defined_properties_to_be_associated_with_them____For_example_a_Portfolio_manager_may_be_associated_with_a_portfolioMeta_data_includes___Transaction_TypesTransactions_are_booked_with_a_specific_transaction_type___The_types_are_client_defined_and_are_used_to_map_the_Transaction_to_a_series_of_movements_which_update_the_portfolio_holdings___Properties_TypesTypes_of_user_defined_properties_used_within_the_system_This_section_describes_the_data_model_that_LUSID_exposes_via_the_APIs__ScopeAll_data_in_LUSID_is_segregated_at_the_client_level___Entities_in_LUSID_are_identifiable_by_a_unique_code___Every_entity_lives_within_a_logical_data_partition_known_as_a_Scope___Scope_is_an_identity_namespace_allowing_two_entities_with_the_same_unique_code_to_co_exist_within_individual_address_spaces_For_example_prices_for_equities_from_different_vendors_may_be_uploaded_into_different_scopes_such_as_clientvendor1_and_clientvendor2___A_portfolio_may_then_be_valued_using_either_of_the_price_sources_by_referencing_the_appropriate_scope_LUSID_Clients_cannot_access_scopes_of_other_clients__SchemaA_detailed_description_of_the_entities_used_by_the_API_and_parameters_for_endpoints_which_take_a_JSON_document_can_be_retrieved_via_the_schema_endpoint__InstrumentsLUSID_has_its_own_built_in_instrument_master_which_you_can_use_to_master_your_own_instrument_universe_Every_instrument_must_be_created_with_one_or_more_unique_market_identifiers_such_as__FIGI_httpsopenfigi_com_or_RIC_code__For_any_non_listed_instruments__eg_OTCs_you_can_upload_an_instrument_against_a_custom_ID_of_your_choosing_In_addition_LUSID_will_allocate_each_instrument_a_unique_LUSID_instrument_identifier__The_LUSID_instrument_identifier_is_what_is_used_when_uploading_transactions_holdings_prices_etc__The_API_exposes_an_instrumentlookup_endpoint_which_can_be_used_to_lookup_these_LUSID_identifiers_using_their_market_identifiers_Cash_can_be_referenced_using_the_ISO_currency_code_prefixed_with_CCY__e_g__CCY_GBP_Instrument_Prices__AnalyticsInstrument_prices_are_stored_in_LUSIDs_Analytics_Store__Field_Type_Description___________________InstrumentUid_string_Unique_instrument_identifier____Value_decimal_Value_of_the_analytic_eg_price____Denomination_string_Underlying_unit_of_the_analytic_eg_currency_EPS_etc____Instrument_DataInstrument_data_can_be_uploaded_to_the_system_using_the__Instrument_Properties_tagInstrumentProperties_endpoint___Field_Type_Description__________________PortfoliosPortfolios_are_the_top_level_entity_containers_within_LUSID_containing_transactions_corporate_actions_and_holdings_____The_transactions_build_up_the_portfolio_holdings_on_which_valuations_analytics_profit__loss_and_risk_can_be_calculated_____Properties_can_be_associated_with_Portfolios_to_add_in_additional_model_data___Portfolio_properties_can_be_changed_over_time_as_well___For_example_to_allow_a_Portfolio_Manager_to_be_linked_with_a_Portfolio_Additionally_portfolios_can_be_securitised_and_held_by_other_portfolios_allowing_LUSID_to_perform_drill_through_into_underlying_fund_holdings_Reference_PortfoliosReference_portfolios_are_portfolios_that_contain_only_weights_as_opposed_to_transactions_and_are_designed_to_represent_entities_such_as_indices__Derived_PortfoliosLUSID_also_allows_for_a_portfolio_to_be_composed_of_another_portfolio_via_derived_portfolios___A_derived_portfolio_can_contain_its_own_transactions_and_also_inherits_any_transactions_from_its_parent_portfolio___Any_changes_made_to_the_parent_portfolio_are_automatically_reflected_in_derived_portfolio_Derived_portfolios_in_conjunction_with_scopes_are_a_powerful_construct___For_example_to_do_pre_trade_what_if_analysis_a_derived_portfolio_could_be_created_a_new_namespace_linked_to_the_underlying_live__parent_portfolio___Analysis_can_then_be_undertaken_on_the_derived_portfolio_without_affecting_the_live_portfolio__Portfolio_GroupsPortfolio_groups_allow_the_construction_of_a_hierarchy_from_portfolios_and_groups___Portfolio_operations_on_the_group_are_executed_on_an_aggregated_set_of_portfolios_in_the_hierarchy__For_example__Global_Portfolios___group____APAC___group______Hong_Kong___portfolio______Japan___portfolio____Europe___group______France___portfolio______Germany___portfolio____UK___portfolio__In_this_example_Global_Portfolios_is_a_group_that_consists_of_an_aggregate_of_Hong_Kong_Japan_France_Germany_and_UK_portfolios__Movements_EngineThe_Movements_engine_sits_on_top_of_the_immutable_event_store_and_is_used_to_manage_the_relationship_between_input_trading_actions_and_their_associated_portfolio_holdings____The_movements_engine_reads_in_the_following_entity_types__Posting_Transactions_Applying_Corporate_Actions__Holding_AdjustmentsThese_are_converted_to_one_or_more_movements_and_used_by_the_movements_engine_to_calculate_holdings___At_the_same_time_it_also_calculates_running_balances_and_realised_PL___The_outputs_from_the_movements_engine_are_holdings_and_transactions__TransactionsA_transaction_represents_an_economic_activity_against_a_Portfolio_Transactions_are_processed_according_to_a_configuration__This_will_tell_the_LUSID_engine_how_to_interpret_the_transaction_and_correctly_update_the_holdings__LUSID_comes_with_a_set_of_transaction_types_you_can_use_out_of_the_box_or_you_can_configure_your_own_set_s_of_transactions_For_more_details_see_the__LUSID_Getting_Started_Guide_for_transaction_configuration__httpssupport_finbourne_comhcen_usarticles360016737511_Configuring_Transaction_Types__Field_Type_Description___________________TransactionId_string_Unique_transaction_identifier____Type_string_LUSID_transaction_type_code___Buy_Sell_StockIn_StockOut_etc____InstrumentIdentifiers_IReadOnlyDictionary2_Unique_instrument_identifiers_____InstrumentUid_string_Unique_instrument_identifier____TransactionDate_datetime_Transaction_date____SettlementDate_datetime_Settlement_date____Units_decimal_Quantity_of_transaction_in_units_of_the_instrument____TransactionPrice_tradeprice_Execution_price_for_the_transaction____TotalConsideration_currencyandamount_Total_value_of_the_transaction_in_settlement_currency____ExchangeRate_decimal_Rate_between_transaction_and_settle_currency____TransactionCurrency_currency_Transaction_currency____CounterpartyId_string_Counterparty_identifier____Source_string_Where_this_transaction_came_from____NettingSet_string____From_these_fields_the_following_values_can_be_calculated__Transaction_value_in_Transaction_currency_TotalConsideration__ExchangeRate__Transaction_value_in_Portfolio_currency_Transaction_value_in_Transaction_currency__TradeToPortfolioRate_Example_Transactions_A_Common_Purchase_ExampleThree_example_transactions_are_shown_in_the_table_below__They_represent_a_purchase_of_USD_denominated_IBM_shares_within_a_Sterling_denominated_portfolio___The_first_two_transactions_are_for_separate_buy_and_fx_trades____Buying_500_IBM_shares_for_71480_00____A_foreign_exchange_conversion_to_fund_the_IBM_purchase___Buy_71480_00_for_16354846_60__The_third_transaction_is_an_alternate_version_of_the_above_trades__Buying_500_IBM_shares_and_settling_directly_in_Sterling___Column____Buy_Trade___Fx_Trade___Buy_Trade_with_foreign_Settlement_____________________________________TransactionId___FBN00001___FBN00002___FBN00003____Type___Buy___FxBuy___Buy____InstrumentUid___FIGI_BBG000BLNNH6___CCY_USD___FIGI_BBG000BLNNH6____TransactionDate___2018_08_02___2018_08_02___2018_08_02____SettlementDate___2018_08_06___2018_08_06___2018_08_06____Units___500___71480___500____TransactionPrice___142_96___1___142_96____TradeCurrency___USD___USD___USD____ExchangeRate___1___0_7673___0_7673____TotalConsideration_Amount___71480_00___54846_60___54846_60____TotalConsideration_Currency___USD___GBP___GBP____TradedefaultTradeToPortfolioRateast___0_7673___0_7673___0_7673___ast_This_is_a_property_field_A_Forward_FX_ExampleLUSID_has_a_flexible_transaction_modelling_system_and_there_are_a_number_of_different_ways_of_modelling_forward_fx_trades_The_default_LUSID_transaction_types_are_FwdFxBuy_and_FwdFxSell__Other_types_and_behaviours_can_be_configured_as_required_Using_these_transaction_types_the_holdings_query_will_report_two_forward_positions__One_in_each_currency__Since_an_FX_trade_is_an_exchange_of_one_currency_for_another_the_following_two_6_month_forward_transactions_are_equivalent__Column____Forward_Sell_Trade___Forward_Buy_Trade_____________________________TransactionId___FBN00004___FBN00005____Type___FwdFxSell___FwdFxBuy____InstrumentUid___CCY_GBP___CCY_USD____TransactionDate___2018_08_02___2018_08_02____SettlementDate___2019_02_06___2019_02_06____Units___10000_00___13142_00____TransactionPrice__1___1____TradeCurrency___GBP___USD____ExchangeRate___1_3142___0_760919____TotalConsideration_Amount___13142_00___10000_00____TotalConsideration_Currency___USD___GBP____TradedefaultTradeToPortfolioRate___1_0___0_760919___HoldingsA_holding_represents_a_position_in_a_instrument_or_cash_on_a_given_date___Field_Type_Description___________________InstrumentUid_string_Unique_instrument_identifier____HoldingType_string_Type_of_holding_eg_Position_Balance_CashCommitment_Receivable_ForwardFX____Units_decimal_Quantity_of_holding____SettledUnits_decimal_Settled_quantity_of_holding____Cost_currencyandamount_Book_cost_of_holding_in_transaction_currency____CostPortfolioCcy_currencyandamount_Book_cost_of_holding_in_portfolio_currency____Transaction_Transaction_If_this_is_commitment_type_holding_the_transaction_behind_it___Corporate_ActionsCorporate_actions_are_represented_within_LUSID_in_terms_of_a_set_of_instrument_specific_transitions___These_transitions_are_used_to_specify_the_participants_of_the_corporate_action_and_the_effect_that_the_corporate_action_will_have_on_holdings_in_those_participants_Corporate_action__Field_Type_Description___________________SourceId_id______CorporateActionCode_code______AnnouncementDate_datetime______ExDate_datetime______RecordDate_datetime______PaymentDate_datetime____Transition__Field_Type_Description__________________PropertyProperties_are_key_value_pairs_that_can_be_applied_to_any_entity_within_a_domain__where_a_domain_is_trade_portfolio_security_etc___Properties_must_be_defined_before_use_with_a_PropertyDefinition_and_can_then_subsequently_be_added_to_entities__SchemasThe_following_headers_are_returned_on_all_responses_from_LUSID__Name___Purpose_________________lusid_meta_duration___Duration_of_the_request____lusid_meta_success___Whether_or_not_LUSID_considered_the_request_to_be_successful____lusid_meta_requestId___The_unique_identifier_for_the_request____lusid_schema_url___Url_of_the_schema_for_the_data_being_returned____lusid_property_schema_url___Url_of_the_schema_for_any_properties___Error_Codes__Code_Name_Description___________________a_name102102a_VersionNotFound______a_name104104a_InstrumentNotFound______a_name105105a_PropertyNotFound______a_name106106a_PortfolioRecursionDepth______a_name108108a_GroupNotFound______a_name109109a_PortfolioNotFound______a_name110110a_PropertySchemaNotFound______a_name111111a_PortfolioAncestryNotFound______a_name112112a_PortfolioWithIdAlreadyExists______a_name113113a_OrphanedPortfolio______a_name119119a_MissingBaseClaims______a_name121121a_PropertyNotDefined______a_name122122a_CannotDeleteSystemProperty______a_name123123a_CannotModifyImmutablePropertyField______a_name124124a_PropertyAlreadyExists______a_name125125a_InvalidPropertyLifeTime______a_name127127a_CannotModifyDefaultDataType______a_name128128a_GroupAlreadyExists______a_name129129a_NoSuchDataType______a_name132132a_ValidationError______a_name133133a_LoopDetectedInGroupHierarchy______a_name135135a_SubGroupAlreadyExists______a_name138138a_PriceSourceNotFound______a_name139139a_AnalyticStoreNotFound______a_name141141a_AnalyticStoreAlreadyExists______a_name143143a_ClientInstrumentAlreadyExists______a_name144144a_DuplicateInParameterSet______a_name147147a_ResultsNotFound______a_name148148a_OrderFieldNotInResultSet______a_name149149a_OperationFailed______a_name150150a_ElasticSearchError______a_name151151a_InvalidParameterValue______a_name153153a_CommandProcessingFailure______a_name154154a_EntityStateConstructionFailure______a_name155155a_EntityTimelineDoesNotExist______a_name156156a_EventPublishFailure______a_name157157a_InvalidRequestFailure______a_name158158a_EventPublishUnknown______a_name159159a_EventQueryFailure______a_name160160a_BlobDidNotExistFailure______a_name162162a_SubSystemRequestFailure______a_name163163a_SubSystemConfigurationFailure______a_name165165a_FailedToDelete______a_name166166a_UpsertClientInstrumentFailure______a_name167167a_IllegalAsAtInterval______a_name168168a_IllegalBitemporalQuery______a_name169169a_InvalidAlternateId______a_name170170a_CannotAddSourcePortfolioPropertyExplicitly______a_name171171a_EntityAlreadyExistsInGroup______a_name173173a_EntityWithIdAlreadyExists______a_name174174a_DerivedPortfolioDetailsDoNotExist______a_name176176a_PortfolioWithNameAlreadyExists______a_name177177a_InvalidTransactions______a_name178178a_ReferencePortfolioNotFound______a_name179179a_DuplicateIdFailure______a_name180180a_CommandRetrievalFailure______a_name181181a_DataFilterApplicationFailure______a_name182182a_SearchFailed______a_name183183a_MovementsEngineConfigurationKeyFailure______a_name184184a_FxRateSourceNotFound______a_name185185a_AccrualSourceNotFound______a_name186186a_EntitlementsFailure______a_name187187a_InvalidIdentityToken______a_name188188a_InvalidRequestHeaders______a_name189189a_PriceNotFound______a_name190190a_InvalidSubHoldingKeysProvided______a_name191191a_DuplicateSubHoldingKeysProvided______a_name192192a_CutDefinitionNotFound______a_name193193a_CutDefinitionInvalid______a_name200200a_InvalidUnitForDataType______a_name201201a_InvalidTypeForDataType______a_name202202a_InvalidValueForDataType______a_name203203a_UnitNotDefinedForDataType______a_name204204a_UnitsNotSupportedOnDataType______a_name205205a_CannotSpecifyUnitsOnDataType______a_name206206a_UnitSchemaInconsistentWithDataType______a_name207207a_UnitDefinitionNotSpecified______a_name208208a_DuplicateUnitDefinitionsSpecified______a_name209209a_InvalidUnitsDefinition______a_name210210a_InvalidInstrumentIdentifierUnit______a_name211211a_HoldingsAdjustmentDoesNotExist______a_name212212a_CouldNotBuildExcelUrl______a_name213213a_CouldNotGetExcelVersion______a_name214214a_InstrumentByCodeNotFound______a_name215215a_EntitySchemaDoesNotExist______a_name216216a_FeatureNotSupportedOnPortfolioType______a_name217217a_QuoteNotFoundFailure______a_name219219a_InvalidInstrumentDefinition______a_name221221a_InstrumentUpsertFailure______a_name222222a_ReferencePortfolioRequestNotSupported______a_name223223a_TransactionPortfolioRequestNotSupported______a_name224224a_InvalidPropertyValueAssignment______a_name230230a_TransactionTypeNotFound______a_name231231a_TransactionTypeDuplication______a_name232232a_PortfolioDoesNotExistAtGivenDate______a_name233233a_QueryParserFailure______a_name234234a_DuplicateConstituentFailure______a_name235235a_UnresolvedInstrumentConstituentFailure______a_name236236a_UnresolvedInstrumentInTransitionFailure______a_name300300a_MissingRecipeFailure______a_name301301a_DependenciesFailure______a_name304304a_PortfolioPreprocessFailure______a_name310310a_ValuationEngineFailure______a_name311311a_TaskFactoryFailure______a_name312312a_TaskEvaluationFailure______a_name350350a_InstrumentFailure______a_name351351a_CashFlowsFailure______a_name370370a_ResultRetrievalFailure______a_name371371a_ResultProcessingFailure______a_name372372a_VendorResultProcessingFailure______a_name373373a_CannotSupplyTimesWithPortfoliosQuery______a_name374374a_AttemptToUpsertDuplicateQuotes______a_name375375a_CorporateActionSourceDoesNotExist______a_name376376a_InstrumentIdentifierAlreadyInUse______a_name_10_10a_ServerConfigurationError______a_name_1_1a_Unknown_error____.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var LusidSdk = require('index'); // See note below*.
   * var xxxSvc = new LusidSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new LusidSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new LusidSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new LusidSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.9.228
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AddTransactionPropertyResponse model constructor.
     * @property {module:model/AddTransactionPropertyResponse}
     */
    AddTransactionPropertyResponse: AddTransactionPropertyResponse,
    /**
     * The AdjustHolding model constructor.
     * @property {module:model/AdjustHolding}
     */
    AdjustHolding: AdjustHolding,
    /**
     * The AdjustHoldingRequest model constructor.
     * @property {module:model/AdjustHoldingRequest}
     */
    AdjustHoldingRequest: AdjustHoldingRequest,
    /**
     * The AggregateSpec model constructor.
     * @property {module:model/AggregateSpec}
     */
    AggregateSpec: AggregateSpec,
    /**
     * The AggregationContext model constructor.
     * @property {module:model/AggregationContext}
     */
    AggregationContext: AggregationContext,
    /**
     * The AggregationOptions model constructor.
     * @property {module:model/AggregationOptions}
     */
    AggregationOptions: AggregationOptions,
    /**
     * The AggregationRequest model constructor.
     * @property {module:model/AggregationRequest}
     */
    AggregationRequest: AggregationRequest,
    /**
     * The AggregationResponseNode model constructor.
     * @property {module:model/AggregationResponseNode}
     */
    AggregationResponseNode: AggregationResponseNode,
    /**
     * The AnalyticStore model constructor.
     * @property {module:model/AnalyticStore}
     */
    AnalyticStore: AnalyticStore,
    /**
     * The AnalyticStoreKey model constructor.
     * @property {module:model/AnalyticStoreKey}
     */
    AnalyticStoreKey: AnalyticStoreKey,
    /**
     * The CompletePortfolio model constructor.
     * @property {module:model/CompletePortfolio}
     */
    CompletePortfolio: CompletePortfolio,
    /**
     * The ConfigurationRecipe model constructor.
     * @property {module:model/ConfigurationRecipe}
     */
    ConfigurationRecipe: ConfigurationRecipe,
    /**
     * The ConstituentsAdjustmentHeader model constructor.
     * @property {module:model/ConstituentsAdjustmentHeader}
     */
    ConstituentsAdjustmentHeader: ConstituentsAdjustmentHeader,
    /**
     * The CorporateAction model constructor.
     * @property {module:model/CorporateAction}
     */
    CorporateAction: CorporateAction,
    /**
     * The CorporateActionSource model constructor.
     * @property {module:model/CorporateActionSource}
     */
    CorporateActionSource: CorporateActionSource,
    /**
     * The CorporateActionTransition model constructor.
     * @property {module:model/CorporateActionTransition}
     */
    CorporateActionTransition: CorporateActionTransition,
    /**
     * The CorporateActionTransitionComponent model constructor.
     * @property {module:model/CorporateActionTransitionComponent}
     */
    CorporateActionTransitionComponent: CorporateActionTransitionComponent,
    /**
     * The CorporateActionTransitionComponentRequest model constructor.
     * @property {module:model/CorporateActionTransitionComponentRequest}
     */
    CorporateActionTransitionComponentRequest: CorporateActionTransitionComponentRequest,
    /**
     * The CorporateActionTransitionRequest model constructor.
     * @property {module:model/CorporateActionTransitionRequest}
     */
    CorporateActionTransitionRequest: CorporateActionTransitionRequest,
    /**
     * The CreateAnalyticStoreRequest model constructor.
     * @property {module:model/CreateAnalyticStoreRequest}
     */
    CreateAnalyticStoreRequest: CreateAnalyticStoreRequest,
    /**
     * The CreateCorporateAction model constructor.
     * @property {module:model/CreateCorporateAction}
     */
    CreateCorporateAction: CreateCorporateAction,
    /**
     * The CreateCorporateActionSourceRequest model constructor.
     * @property {module:model/CreateCorporateActionSourceRequest}
     */
    CreateCorporateActionSourceRequest: CreateCorporateActionSourceRequest,
    /**
     * The CreateDataTypeRequest model constructor.
     * @property {module:model/CreateDataTypeRequest}
     */
    CreateDataTypeRequest: CreateDataTypeRequest,
    /**
     * The CreateDerivedTransactionPortfolioRequest model constructor.
     * @property {module:model/CreateDerivedTransactionPortfolioRequest}
     */
    CreateDerivedTransactionPortfolioRequest: CreateDerivedTransactionPortfolioRequest,
    /**
     * The CreatePortfolioDetails model constructor.
     * @property {module:model/CreatePortfolioDetails}
     */
    CreatePortfolioDetails: CreatePortfolioDetails,
    /**
     * The CreatePortfolioGroupRequest model constructor.
     * @property {module:model/CreatePortfolioGroupRequest}
     */
    CreatePortfolioGroupRequest: CreatePortfolioGroupRequest,
    /**
     * The CreatePropertyDefinitionRequest model constructor.
     * @property {module:model/CreatePropertyDefinitionRequest}
     */
    CreatePropertyDefinitionRequest: CreatePropertyDefinitionRequest,
    /**
     * The CreateReferencePortfolioRequest model constructor.
     * @property {module:model/CreateReferencePortfolioRequest}
     */
    CreateReferencePortfolioRequest: CreateReferencePortfolioRequest,
    /**
     * The CreateResults model constructor.
     * @property {module:model/CreateResults}
     */
    CreateResults: CreateResults,
    /**
     * The CreateTransactionPortfolioRequest model constructor.
     * @property {module:model/CreateTransactionPortfolioRequest}
     */
    CreateTransactionPortfolioRequest: CreateTransactionPortfolioRequest,
    /**
     * The CreateUnitDefinition model constructor.
     * @property {module:model/CreateUnitDefinition}
     */
    CreateUnitDefinition: CreateUnitDefinition,
    /**
     * The CurrencyAndAmount model constructor.
     * @property {module:model/CurrencyAndAmount}
     */
    CurrencyAndAmount: CurrencyAndAmount,
    /**
     * The DataType model constructor.
     * @property {module:model/DataType}
     */
    DataType: DataType,
    /**
     * The DeleteInstrumentPropertyRequest model constructor.
     * @property {module:model/DeleteInstrumentPropertyRequest}
     */
    DeleteInstrumentPropertyRequest: DeleteInstrumentPropertyRequest,
    /**
     * The DeleteInstrumentResponse model constructor.
     * @property {module:model/DeleteInstrumentResponse}
     */
    DeleteInstrumentResponse: DeleteInstrumentResponse,
    /**
     * The DeleteQuoteRequest model constructor.
     * @property {module:model/DeleteQuoteRequest}
     */
    DeleteQuoteRequest: DeleteQuoteRequest,
    /**
     * The DeleteQuotesResponse model constructor.
     * @property {module:model/DeleteQuotesResponse}
     */
    DeleteQuotesResponse: DeleteQuotesResponse,
    /**
     * The DeletedEntityResponse model constructor.
     * @property {module:model/DeletedEntityResponse}
     */
    DeletedEntityResponse: DeletedEntityResponse,
    /**
     * The ErrorDetail model constructor.
     * @property {module:model/ErrorDetail}
     */
    ErrorDetail: ErrorDetail,
    /**
     * The ErrorDetailBase model constructor.
     * @property {module:model/ErrorDetailBase}
     */
    ErrorDetailBase: ErrorDetailBase,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The ExecutionRequest model constructor.
     * @property {module:model/ExecutionRequest}
     */
    ExecutionRequest: ExecutionRequest,
    /**
     * The ExpandedGroup model constructor.
     * @property {module:model/ExpandedGroup}
     */
    ExpandedGroup: ExpandedGroup,
    /**
     * The FieldSchema model constructor.
     * @property {module:model/FieldSchema}
     */
    FieldSchema: FieldSchema,
    /**
     * The FileResponse model constructor.
     * @property {module:model/FileResponse}
     */
    FileResponse: FileResponse,
    /**
     * The GetInstrumentsResponse model constructor.
     * @property {module:model/GetInstrumentsResponse}
     */
    GetInstrumentsResponse: GetInstrumentsResponse,
    /**
     * The GetQuotesResponse model constructor.
     * @property {module:model/GetQuotesResponse}
     */
    GetQuotesResponse: GetQuotesResponse,
    /**
     * The GetReferencePortfolioConstituentsResponse model constructor.
     * @property {module:model/GetReferencePortfolioConstituentsResponse}
     */
    GetReferencePortfolioConstituentsResponse: GetReferencePortfolioConstituentsResponse,
    /**
     * The HoldingAdjustment model constructor.
     * @property {module:model/HoldingAdjustment}
     */
    HoldingAdjustment: HoldingAdjustment,
    /**
     * The HoldingsAdjustment model constructor.
     * @property {module:model/HoldingsAdjustment}
     */
    HoldingsAdjustment: HoldingsAdjustment,
    /**
     * The HoldingsAdjustmentHeader model constructor.
     * @property {module:model/HoldingsAdjustmentHeader}
     */
    HoldingsAdjustmentHeader: HoldingsAdjustmentHeader,
    /**
     * The IUnitDefinitionDto model constructor.
     * @property {module:model/IUnitDefinitionDto}
     */
    IUnitDefinitionDto: IUnitDefinitionDto,
    /**
     * The Instrument model constructor.
     * @property {module:model/Instrument}
     */
    Instrument: Instrument,
    /**
     * The InstrumentAnalytic model constructor.
     * @property {module:model/InstrumentAnalytic}
     */
    InstrumentAnalytic: InstrumentAnalytic,
    /**
     * The InstrumentDefinition model constructor.
     * @property {module:model/InstrumentDefinition}
     */
    InstrumentDefinition: InstrumentDefinition,
    /**
     * The InstrumentEconomicDefinition model constructor.
     * @property {module:model/InstrumentEconomicDefinition}
     */
    InstrumentEconomicDefinition: InstrumentEconomicDefinition,
    /**
     * The InstrumentMatch model constructor.
     * @property {module:model/InstrumentMatch}
     */
    InstrumentMatch: InstrumentMatch,
    /**
     * The InstrumentProperty model constructor.
     * @property {module:model/InstrumentProperty}
     */
    InstrumentProperty: InstrumentProperty,
    /**
     * The InstrumentSearchProperty model constructor.
     * @property {module:model/InstrumentSearchProperty}
     */
    InstrumentSearchProperty: InstrumentSearchProperty,
    /**
     * The Link model constructor.
     * @property {module:model/Link}
     */
    Link: Link,
    /**
     * The ListAggregationResponse model constructor.
     * @property {module:model/ListAggregationResponse}
     */
    ListAggregationResponse: ListAggregationResponse,
    /**
     * The MarketContext model constructor.
     * @property {module:model/MarketContext}
     */
    MarketContext: MarketContext,
    /**
     * The MarketContextSuppliers model constructor.
     * @property {module:model/MarketContextSuppliers}
     */
    MarketContextSuppliers: MarketContextSuppliers,
    /**
     * The MarketDataKeyRule model constructor.
     * @property {module:model/MarketDataKeyRule}
     */
    MarketDataKeyRule: MarketDataKeyRule,
    /**
     * The MarketOptions model constructor.
     * @property {module:model/MarketOptions}
     */
    MarketOptions: MarketOptions,
    /**
     * The MatchInstrumentsResponse model constructor.
     * @property {module:model/MatchInstrumentsResponse}
     */
    MatchInstrumentsResponse: MatchInstrumentsResponse,
    /**
     * The MetricValue model constructor.
     * @property {module:model/MetricValue}
     */
    MetricValue: MetricValue,
    /**
     * The ModelSelection model constructor.
     * @property {module:model/ModelSelection}
     */
    ModelSelection: ModelSelection,
    /**
     * The NestedAggregationResponse model constructor.
     * @property {module:model/NestedAggregationResponse}
     */
    NestedAggregationResponse: NestedAggregationResponse,
    /**
     * The OutputTransaction model constructor.
     * @property {module:model/OutputTransaction}
     */
    OutputTransaction: OutputTransaction,
    /**
     * The PerpetualProperty model constructor.
     * @property {module:model/PerpetualProperty}
     */
    PerpetualProperty: PerpetualProperty,
    /**
     * The PerpetualPropertyValue model constructor.
     * @property {module:model/PerpetualPropertyValue}
     */
    PerpetualPropertyValue: PerpetualPropertyValue,
    /**
     * The Portfolio model constructor.
     * @property {module:model/Portfolio}
     */
    Portfolio: Portfolio,
    /**
     * The PortfolioDetails model constructor.
     * @property {module:model/PortfolioDetails}
     */
    PortfolioDetails: PortfolioDetails,
    /**
     * The PortfolioGroup model constructor.
     * @property {module:model/PortfolioGroup}
     */
    PortfolioGroup: PortfolioGroup,
    /**
     * The PortfolioHolding model constructor.
     * @property {module:model/PortfolioHolding}
     */
    PortfolioHolding: PortfolioHolding,
    /**
     * The PortfolioProperties model constructor.
     * @property {module:model/PortfolioProperties}
     */
    PortfolioProperties: PortfolioProperties,
    /**
     * The PortfolioReconciliationRequest model constructor.
     * @property {module:model/PortfolioReconciliationRequest}
     */
    PortfolioReconciliationRequest: PortfolioReconciliationRequest,
    /**
     * The PortfolioSearchResult model constructor.
     * @property {module:model/PortfolioSearchResult}
     */
    PortfolioSearchResult: PortfolioSearchResult,
    /**
     * The PortfoliosReconciliationRequest model constructor.
     * @property {module:model/PortfoliosReconciliationRequest}
     */
    PortfoliosReconciliationRequest: PortfoliosReconciliationRequest,
    /**
     * The PricingContext model constructor.
     * @property {module:model/PricingContext}
     */
    PricingContext: PricingContext,
    /**
     * The PricingOptions model constructor.
     * @property {module:model/PricingOptions}
     */
    PricingOptions: PricingOptions,
    /**
     * The ProcessedCommand model constructor.
     * @property {module:model/ProcessedCommand}
     */
    ProcessedCommand: ProcessedCommand,
    /**
     * The Property model constructor.
     * @property {module:model/Property}
     */
    Property: Property,
    /**
     * The PropertyDefinition model constructor.
     * @property {module:model/PropertyDefinition}
     */
    PropertyDefinition: PropertyDefinition,
    /**
     * The PropertyFilter model constructor.
     * @property {module:model/PropertyFilter}
     */
    PropertyFilter: PropertyFilter,
    /**
     * The PropertySchema model constructor.
     * @property {module:model/PropertySchema}
     */
    PropertySchema: PropertySchema,
    /**
     * The PropertyValue model constructor.
     * @property {module:model/PropertyValue}
     */
    PropertyValue: PropertyValue,
    /**
     * The Quote model constructor.
     * @property {module:model/Quote}
     */
    Quote: Quote,
    /**
     * The QuoteId model constructor.
     * @property {module:model/QuoteId}
     */
    QuoteId: QuoteId,
    /**
     * The RealisedGainLoss model constructor.
     * @property {module:model/RealisedGainLoss}
     */
    RealisedGainLoss: RealisedGainLoss,
    /**
     * The ReconciliationBreak model constructor.
     * @property {module:model/ReconciliationBreak}
     */
    ReconciliationBreak: ReconciliationBreak,
    /**
     * The ReferencePortfolioConstituent model constructor.
     * @property {module:model/ReferencePortfolioConstituent}
     */
    ReferencePortfolioConstituent: ReferencePortfolioConstituent,
    /**
     * The ReferencePortfolioConstituentRequest model constructor.
     * @property {module:model/ReferencePortfolioConstituentRequest}
     */
    ReferencePortfolioConstituentRequest: ReferencePortfolioConstituentRequest,
    /**
     * The ResourceId model constructor.
     * @property {module:model/ResourceId}
     */
    ResourceId: ResourceId,
    /**
     * The ResourceListOfAnalyticStoreKey model constructor.
     * @property {module:model/ResourceListOfAnalyticStoreKey}
     */
    ResourceListOfAnalyticStoreKey: ResourceListOfAnalyticStoreKey,
    /**
     * The ResourceListOfConstituentsAdjustmentHeader model constructor.
     * @property {module:model/ResourceListOfConstituentsAdjustmentHeader}
     */
    ResourceListOfConstituentsAdjustmentHeader: ResourceListOfConstituentsAdjustmentHeader,
    /**
     * The ResourceListOfCorporateAction model constructor.
     * @property {module:model/ResourceListOfCorporateAction}
     */
    ResourceListOfCorporateAction: ResourceListOfCorporateAction,
    /**
     * The ResourceListOfCorporateActionSource model constructor.
     * @property {module:model/ResourceListOfCorporateActionSource}
     */
    ResourceListOfCorporateActionSource: ResourceListOfCorporateActionSource,
    /**
     * The ResourceListOfDataType model constructor.
     * @property {module:model/ResourceListOfDataType}
     */
    ResourceListOfDataType: ResourceListOfDataType,
    /**
     * The ResourceListOfHoldingsAdjustmentHeader model constructor.
     * @property {module:model/ResourceListOfHoldingsAdjustmentHeader}
     */
    ResourceListOfHoldingsAdjustmentHeader: ResourceListOfHoldingsAdjustmentHeader,
    /**
     * The ResourceListOfIUnitDefinitionDto model constructor.
     * @property {module:model/ResourceListOfIUnitDefinitionDto}
     */
    ResourceListOfIUnitDefinitionDto: ResourceListOfIUnitDefinitionDto,
    /**
     * The ResourceListOfInstrument model constructor.
     * @property {module:model/ResourceListOfInstrument}
     */
    ResourceListOfInstrument: ResourceListOfInstrument,
    /**
     * The ResourceListOfPortfolio model constructor.
     * @property {module:model/ResourceListOfPortfolio}
     */
    ResourceListOfPortfolio: ResourceListOfPortfolio,
    /**
     * The ResourceListOfPortfolioGroup model constructor.
     * @property {module:model/ResourceListOfPortfolioGroup}
     */
    ResourceListOfPortfolioGroup: ResourceListOfPortfolioGroup,
    /**
     * The ResourceListOfPortfolioSearchResult model constructor.
     * @property {module:model/ResourceListOfPortfolioSearchResult}
     */
    ResourceListOfPortfolioSearchResult: ResourceListOfPortfolioSearchResult,
    /**
     * The ResourceListOfProcessedCommand model constructor.
     * @property {module:model/ResourceListOfProcessedCommand}
     */
    ResourceListOfProcessedCommand: ResourceListOfProcessedCommand,
    /**
     * The ResourceListOfPropertyDefinition model constructor.
     * @property {module:model/ResourceListOfPropertyDefinition}
     */
    ResourceListOfPropertyDefinition: ResourceListOfPropertyDefinition,
    /**
     * The ResourceListOfReconciliationBreak model constructor.
     * @property {module:model/ResourceListOfReconciliationBreak}
     */
    ResourceListOfReconciliationBreak: ResourceListOfReconciliationBreak,
    /**
     * The ResourceListOfScopeDefinition model constructor.
     * @property {module:model/ResourceListOfScopeDefinition}
     */
    ResourceListOfScopeDefinition: ResourceListOfScopeDefinition,
    /**
     * The ResourceListOfString model constructor.
     * @property {module:model/ResourceListOfString}
     */
    ResourceListOfString: ResourceListOfString,
    /**
     * The ResourceListOfTransactionConfigurationData model constructor.
     * @property {module:model/ResourceListOfTransactionConfigurationData}
     */
    ResourceListOfTransactionConfigurationData: ResourceListOfTransactionConfigurationData,
    /**
     * The ResourceListOfValueType model constructor.
     * @property {module:model/ResourceListOfValueType}
     */
    ResourceListOfValueType: ResourceListOfValueType,
    /**
     * The ResultDataSchema model constructor.
     * @property {module:model/ResultDataSchema}
     */
    ResultDataSchema: ResultDataSchema,
    /**
     * The Results model constructor.
     * @property {module:model/Results}
     */
    Results: Results,
    /**
     * The Schema model constructor.
     * @property {module:model/Schema}
     */
    Schema: Schema,
    /**
     * The ScopeDefinition model constructor.
     * @property {module:model/ScopeDefinition}
     */
    ScopeDefinition: ScopeDefinition,
    /**
     * The Stream model constructor.
     * @property {module:model/Stream}
     */
    Stream: Stream,
    /**
     * The TargetTaxLot model constructor.
     * @property {module:model/TargetTaxLot}
     */
    TargetTaxLot: TargetTaxLot,
    /**
     * The TargetTaxLotRequest model constructor.
     * @property {module:model/TargetTaxLotRequest}
     */
    TargetTaxLotRequest: TargetTaxLotRequest,
    /**
     * The Transaction model constructor.
     * @property {module:model/Transaction}
     */
    Transaction: Transaction,
    /**
     * The TransactionConfigurationData model constructor.
     * @property {module:model/TransactionConfigurationData}
     */
    TransactionConfigurationData: TransactionConfigurationData,
    /**
     * The TransactionConfigurationDataRequest model constructor.
     * @property {module:model/TransactionConfigurationDataRequest}
     */
    TransactionConfigurationDataRequest: TransactionConfigurationDataRequest,
    /**
     * The TransactionConfigurationMovementData model constructor.
     * @property {module:model/TransactionConfigurationMovementData}
     */
    TransactionConfigurationMovementData: TransactionConfigurationMovementData,
    /**
     * The TransactionConfigurationMovementDataRequest model constructor.
     * @property {module:model/TransactionConfigurationMovementDataRequest}
     */
    TransactionConfigurationMovementDataRequest: TransactionConfigurationMovementDataRequest,
    /**
     * The TransactionConfigurationTypeAlias model constructor.
     * @property {module:model/TransactionConfigurationTypeAlias}
     */
    TransactionConfigurationTypeAlias: TransactionConfigurationTypeAlias,
    /**
     * The TransactionPrice model constructor.
     * @property {module:model/TransactionPrice}
     */
    TransactionPrice: TransactionPrice,
    /**
     * The TransactionPropertyMapping model constructor.
     * @property {module:model/TransactionPropertyMapping}
     */
    TransactionPropertyMapping: TransactionPropertyMapping,
    /**
     * The TransactionPropertyMappingRequest model constructor.
     * @property {module:model/TransactionPropertyMappingRequest}
     */
    TransactionPropertyMappingRequest: TransactionPropertyMappingRequest,
    /**
     * The TransactionQueryParameters model constructor.
     * @property {module:model/TransactionQueryParameters}
     */
    TransactionQueryParameters: TransactionQueryParameters,
    /**
     * The TransactionRequest model constructor.
     * @property {module:model/TransactionRequest}
     */
    TransactionRequest: TransactionRequest,
    /**
     * The UpdateDataTypeRequest model constructor.
     * @property {module:model/UpdateDataTypeRequest}
     */
    UpdateDataTypeRequest: UpdateDataTypeRequest,
    /**
     * The UpdateInstrumentIdentifierRequest model constructor.
     * @property {module:model/UpdateInstrumentIdentifierRequest}
     */
    UpdateInstrumentIdentifierRequest: UpdateInstrumentIdentifierRequest,
    /**
     * The UpdatePortfolioGroupRequest model constructor.
     * @property {module:model/UpdatePortfolioGroupRequest}
     */
    UpdatePortfolioGroupRequest: UpdatePortfolioGroupRequest,
    /**
     * The UpdatePortfolioRequest model constructor.
     * @property {module:model/UpdatePortfolioRequest}
     */
    UpdatePortfolioRequest: UpdatePortfolioRequest,
    /**
     * The UpdatePropertyDefinitionRequest model constructor.
     * @property {module:model/UpdatePropertyDefinitionRequest}
     */
    UpdatePropertyDefinitionRequest: UpdatePropertyDefinitionRequest,
    /**
     * The UpsertCorporateActionsResponse model constructor.
     * @property {module:model/UpsertCorporateActionsResponse}
     */
    UpsertCorporateActionsResponse: UpsertCorporateActionsResponse,
    /**
     * The UpsertInstrumentPropertiesResponse model constructor.
     * @property {module:model/UpsertInstrumentPropertiesResponse}
     */
    UpsertInstrumentPropertiesResponse: UpsertInstrumentPropertiesResponse,
    /**
     * The UpsertInstrumentPropertyRequest model constructor.
     * @property {module:model/UpsertInstrumentPropertyRequest}
     */
    UpsertInstrumentPropertyRequest: UpsertInstrumentPropertyRequest,
    /**
     * The UpsertInstrumentsResponse model constructor.
     * @property {module:model/UpsertInstrumentsResponse}
     */
    UpsertInstrumentsResponse: UpsertInstrumentsResponse,
    /**
     * The UpsertPortfolioExecutionsResponse model constructor.
     * @property {module:model/UpsertPortfolioExecutionsResponse}
     */
    UpsertPortfolioExecutionsResponse: UpsertPortfolioExecutionsResponse,
    /**
     * The UpsertPortfolioTransactionsResponse model constructor.
     * @property {module:model/UpsertPortfolioTransactionsResponse}
     */
    UpsertPortfolioTransactionsResponse: UpsertPortfolioTransactionsResponse,
    /**
     * The UpsertQuoteRequest model constructor.
     * @property {module:model/UpsertQuoteRequest}
     */
    UpsertQuoteRequest: UpsertQuoteRequest,
    /**
     * The UpsertQuotesResponse model constructor.
     * @property {module:model/UpsertQuotesResponse}
     */
    UpsertQuotesResponse: UpsertQuotesResponse,
    /**
     * The UpsertReferencePortfolioConstituentsRequest model constructor.
     * @property {module:model/UpsertReferencePortfolioConstituentsRequest}
     */
    UpsertReferencePortfolioConstituentsRequest: UpsertReferencePortfolioConstituentsRequest,
    /**
     * The UpsertReferencePortfolioConstituentsResponse model constructor.
     * @property {module:model/UpsertReferencePortfolioConstituentsResponse}
     */
    UpsertReferencePortfolioConstituentsResponse: UpsertReferencePortfolioConstituentsResponse,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The ValuationReconciliationRequest model constructor.
     * @property {module:model/ValuationReconciliationRequest}
     */
    ValuationReconciliationRequest: ValuationReconciliationRequest,
    /**
     * The ValuationsReconciliationRequest model constructor.
     * @property {module:model/ValuationsReconciliationRequest}
     */
    ValuationsReconciliationRequest: ValuationsReconciliationRequest,
    /**
     * The VendorModelRule model constructor.
     * @property {module:model/VendorModelRule}
     */
    VendorModelRule: VendorModelRule,
    /**
     * The Version model constructor.
     * @property {module:model/Version}
     */
    Version: Version,
    /**
     * The VersionSummaryDto model constructor.
     * @property {module:model/VersionSummaryDto}
     */
    VersionSummaryDto: VersionSummaryDto,
    /**
     * The VersionedResourceListOfOutputTransaction model constructor.
     * @property {module:model/VersionedResourceListOfOutputTransaction}
     */
    VersionedResourceListOfOutputTransaction: VersionedResourceListOfOutputTransaction,
    /**
     * The VersionedResourceListOfPortfolioHolding model constructor.
     * @property {module:model/VersionedResourceListOfPortfolioHolding}
     */
    VersionedResourceListOfPortfolioHolding: VersionedResourceListOfPortfolioHolding,
    /**
     * The VersionedResourceListOfTransaction model constructor.
     * @property {module:model/VersionedResourceListOfTransaction}
     */
    VersionedResourceListOfTransaction: VersionedResourceListOfTransaction,
    /**
     * The AggregationApi service constructor.
     * @property {module:api/AggregationApi}
     */
    AggregationApi: AggregationApi,
    /**
     * The AnalyticsStoresApi service constructor.
     * @property {module:api/AnalyticsStoresApi}
     */
    AnalyticsStoresApi: AnalyticsStoresApi,
    /**
     * The ApplicationMetadataApi service constructor.
     * @property {module:api/ApplicationMetadataApi}
     */
    ApplicationMetadataApi: ApplicationMetadataApi,
    /**
     * The CorporateActionSourcesApi service constructor.
     * @property {module:api/CorporateActionSourcesApi}
     */
    CorporateActionSourcesApi: CorporateActionSourcesApi,
    /**
     * The DataTypesApi service constructor.
     * @property {module:api/DataTypesApi}
     */
    DataTypesApi: DataTypesApi,
    /**
     * The DerivedTransactionPortfoliosApi service constructor.
     * @property {module:api/DerivedTransactionPortfoliosApi}
     */
    DerivedTransactionPortfoliosApi: DerivedTransactionPortfoliosApi,
    /**
     * The InstrumentsApi service constructor.
     * @property {module:api/InstrumentsApi}
     */
    InstrumentsApi: InstrumentsApi,
    /**
     * The LoginApi service constructor.
     * @property {module:api/LoginApi}
     */
    LoginApi: LoginApi,
    /**
     * The PortfolioGroupsApi service constructor.
     * @property {module:api/PortfolioGroupsApi}
     */
    PortfolioGroupsApi: PortfolioGroupsApi,
    /**
     * The PortfoliosApi service constructor.
     * @property {module:api/PortfoliosApi}
     */
    PortfoliosApi: PortfoliosApi,
    /**
     * The PropertyDefinitionsApi service constructor.
     * @property {module:api/PropertyDefinitionsApi}
     */
    PropertyDefinitionsApi: PropertyDefinitionsApi,
    /**
     * The QuotesApi service constructor.
     * @property {module:api/QuotesApi}
     */
    QuotesApi: QuotesApi,
    /**
     * The ReconciliationsApi service constructor.
     * @property {module:api/ReconciliationsApi}
     */
    ReconciliationsApi: ReconciliationsApi,
    /**
     * The ReferencePortfolioApi service constructor.
     * @property {module:api/ReferencePortfolioApi}
     */
    ReferencePortfolioApi: ReferencePortfolioApi,
    /**
     * The ResultsApi service constructor.
     * @property {module:api/ResultsApi}
     */
    ResultsApi: ResultsApi,
    /**
     * The SchemasApi service constructor.
     * @property {module:api/SchemasApi}
     */
    SchemasApi: SchemasApi,
    /**
     * The ScopesApi service constructor.
     * @property {module:api/ScopesApi}
     */
    ScopesApi: ScopesApi,
    /**
     * The SearchApi service constructor.
     * @property {module:api/SearchApi}
     */
    SearchApi: SearchApi,
    /**
     * The SystemConfigurationApi service constructor.
     * @property {module:api/SystemConfigurationApi}
     */
    SystemConfigurationApi: SystemConfigurationApi,
    /**
     * The TransactionPortfoliosApi service constructor.
     * @property {module:api/TransactionPortfoliosApi}
     */
    TransactionPortfoliosApi: TransactionPortfoliosApi
  };

  return exports;
}));
