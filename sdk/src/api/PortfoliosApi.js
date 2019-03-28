/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](https://api.lusid.com/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages :  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python)  # Data Model  The LUSID API has a relatively lightweight but extremely powerful data model.   One of the goals of LUSID was not to enforce on clients a single rigid data model but rather to provide a flexible foundation onto which clients can streamline their data.   One of the primary tools to extend the data model is through using properties.  Properties can be associated with amongst others: - * Transactions * Instruments * Portfolios   The LUSID data model is exposed through the LUSID APIs.  The APIs provide access to both business objects and the meta data used to configure the systems behaviours.   The key business entities are: - * **Portfolios** A portfolio is the primary container for transactions and holdings.  * **Derived Portfolios** Derived portfolios allow portfolios to be created based on other portfolios, by overriding or overlaying specific items * **Holdings** A holding is a position account for a instrument within a portfolio.  Holdings can only be adjusted via transactions. * **Transactions** A Transaction is a source of transactions used to manipulate holdings.  * **Corporate Actions** A corporate action is a market event which occurs to a instrument, for example a stock split * **Instruments**  A instrument represents a currency, tradable instrument or OTC contract that is attached to a transaction and a holding. * **Properties** Several entities allow additional user defined properties to be associated with them.   For example, a Portfolio manager may be associated with a portfolio  Meta data includes: - * **Transaction Types** Transactions are booked with a specific transaction type.  The types are client defined and are used to map the Transaction to a series of movements which update the portfolio holdings.  * **Properties Types** Types of user defined properties used within the system.  This section describes the data model that LUSID exposes via the APIs.  ## Scope  All data in LUSID is segregated at the client level.  Entities in LUSID are identifiable by a unique code.  Every entity lives within a logical data partition known as a Scope.  Scope is an identity namespace allowing two entities with the same unique code to co-exist within individual address spaces.  For example, prices for equities from different vendors may be uploaded into different scopes such as `client/vendor1` and `client/vendor2`.  A portfolio may then be valued using either of the price sources by referencing the appropriate scope.  LUSID Clients cannot access scopes of other clients.  ## Schema  A detailed description of the entities used by the API and parameters for endpoints which take a JSON document can be retrieved via the `schema` endpoint.  ## Instruments  LUSID has its own built-in instrument master which you can use to master your own instrument universe.  Every instrument must be created with one or more unique market identifiers, such as [FIGI](https://openfigi.com/) or RIC code. For any non-listed instruments (eg OTCs), you can upload an instrument against a custom ID of your choosing.  In addition, LUSID will allocate each instrument a unique 'LUSID instrument identifier'. The LUSID instrument identifier is what is used when uploading transactions, holdings, prices, etc. The API exposes an `instrument/lookup` endpoint which can be used to lookup these LUSID identifiers using their market identifiers.  Cash can be referenced using the ISO currency code prefixed with \"`CCY_`\" e.g. `CCY_GBP`  ## Instrument Prices (Analytics)  Instrument prices are stored in LUSID's Analytics Store  | Field|Type|Description | | ---|---|--- | | InstrumentUid|string|Unique instrument identifier | | Value|decimal|Value of the analytic, eg price | | Denomination|string|Underlying unit of the analytic, eg currency, EPS etc. |   ## Instrument Data  Instrument data can be uploaded to the system using the [Instrument Properties](#tag/InstrumentProperties) endpoint.  | Field|Type|Description | | ---|---|--- |   ## Portfolios  Portfolios are the top-level entity containers within LUSID, containing transactions, corporate actions and holdings.    The transactions build up the portfolio holdings on which valuations, analytics profit & loss and risk can be calculated.     Properties can be associated with Portfolios to add in additional model data.  Portfolio properties can be changed over time as well.  For example, to allow a Portfolio Manager to be linked with a Portfolio.  Additionally, portfolios can be securitised and held by other portfolios, allowing LUSID to perform \"drill-through\" into underlying fund holdings  ### Reference Portfolios Reference portfolios are portfolios that contain only weights, as opposed to transactions, and are designed to represent entities such as indices.  ### Derived Portfolios  LUSID also allows for a portfolio to be composed of another portfolio via derived portfolios.  A derived portfolio can contain its own transactions and also inherits any transactions from its parent portfolio.  Any changes made to the parent portfolio are automatically reflected in derived portfolio.  Derived portfolios in conjunction with scopes are a powerful construct.  For example, to do pre-trade what-if analysis, a derived portfolio could be created a new namespace linked to the underlying live (parent) portfolio.  Analysis can then be undertaken on the derived portfolio without affecting the live portfolio.  ### Portfolio Groups Portfolio groups allow the construction of a hierarchy from portfolios and groups.  Portfolio operations on the group are executed on an aggregated set of portfolios in the hierarchy.   For example:   * Global Portfolios _(group)_   * APAC _(group)_     * Hong Kong _(portfolio)_     * Japan _(portfolio)_   * Europe _(group)_     * France _(portfolio)_     * Germany _(portfolio)_   * UK _(portfolio)_   In this example **Global Portfolios** is a group that consists of an aggregate of **Hong Kong**, **Japan**, **France**, **Germany** and **UK** portfolios.  ### Movements Engine The Movements engine sits on top of the immutable event store and is used to manage the relationship between input trading actions and their associated portfolio holdings.     The movements engine reads in the following entity types:- * Posting Transactions * Applying Corporate Actions  * Holding Adjustments  These are converted to one or more movements and used by the movements engine to calculate holdings.  At the same time it also calculates running balances, and realised P&L.  The outputs from the movements engine are holdings and transactions.  ## Transactions  A transaction represents an economic activity against a Portfolio.  Transactions are processed according to a configuration. This will tell the LUSID engine how to interpret the transaction and correctly update the holdings. LUSID comes with a set of transaction types you can use out of the box, or you can configure your own set(s) of transactions.  For more details see the [LUSID Getting Started Guide for transaction configuration.](https://support.finbourne.com/hc/en-us/articles/360016737511-Configuring-Transaction-Types)  | Field|Type|Description | | ---|---|--- | | TransactionId|string|Unique transaction identifier | | Type|string|LUSID transaction type code - Buy, Sell, StockIn, StockOut, etc | | InstrumentIdentifiers|IReadOnlyDictionary`2|Unique instrument identifiers. | | InstrumentUid|string|Unique instrument identifier | | TransactionDate|datetime|Transaction date | | SettlementDate|datetime|Settlement date | | Units|decimal|Quantity of transaction in units of the instrument | | TransactionPrice|tradeprice|Execution price for the transaction | | TotalConsideration|currencyandamount|Total value of the transaction in settlement currency | | ExchangeRate|decimal|Rate between transaction and settle currency | | TransactionCurrency|currency|Transaction currency | | CounterpartyId|string|Counterparty identifier | | Source|string|Where this transaction came from | | NettingSet|string|  |   From these fields, the following values can be calculated  * **Transaction value in Transaction currency**: TotalConsideration / ExchangeRate  * **Transaction value in Portfolio currency**: Transaction value in Transaction currency * TradeToPortfolioRate  ### Example Transactions  #### A Common Purchase Example Three example transactions are shown in the table below.   They represent a purchase of USD denominated IBM shares within a Sterling denominated portfolio.   * The first two transactions are for separate buy and fx trades    * Buying 500 IBM shares for $71,480.00    * A foreign exchange conversion to fund the IBM purchase. (Buy $71,480.00 for &#163;54,846.60)  * The third transaction is an alternate version of the above trades. Buying 500 IBM shares and settling directly in Sterling.  | Column |  Buy Trade | Fx Trade | Buy Trade with foreign Settlement | | ----- | ----- | ----- | ----- | | TransactionId | FBN00001 | FBN00002 | FBN00003 | | Type | Buy | FxBuy | Buy | | InstrumentUid | FIGI_BBG000BLNNH6 | CCY_USD | FIGI_BBG000BLNNH6 | | TransactionDate | 2018-08-02 | 2018-08-02 | 2018-08-02 | | SettlementDate | 2018-08-06 | 2018-08-06 | 2018-08-06 | | Units | 500 | 71480 | 500 | | TransactionPrice | 142.96 | 1 | 142.96 | | TradeCurrency | USD | USD | USD | | ExchangeRate | 1 | 0.7673 | 0.7673 | | TotalConsideration.Amount | 71480.00 | 54846.60 | 54846.60 | | TotalConsideration.Currency | USD | GBP | GBP | | Trade/default/TradeToPortfolioRate&ast; | 0.7673 | 0.7673 | 0.7673 |  [&ast; This is a property field]  #### A Forward FX Example  LUSID has a flexible transaction modelling system, and there are a number of different ways of modelling forward fx trades.  The default LUSID transaction types are FwdFxBuy and FwdFxSell. Other types and behaviours can be configured as required.  Using these transaction types, the holdings query will report two forward positions. One in each currency.   Since an FX trade is an exchange of one currency for another, the following two 6 month forward transactions are equivalent:  | Column |  Forward 'Sell' Trade | Forward 'Buy' Trade | | ----- | ----- | ----- | | TransactionId | FBN00004 | FBN00005 | | Type | FwdFxSell | FwdFxBuy | | InstrumentUid | CCY_GBP | CCY_USD | | TransactionDate | 2018-08-02 | 2018-08-02 | | SettlementDate | 2019-02-06 | 2019-02-06 | | Units | 10000.00 | 13142.00 | | TransactionPrice |1 | 1 | | TradeCurrency | GBP | USD | | ExchangeRate | 1.3142 | 0.760919 | | TotalConsideration.Amount | 13142.00 | 10000.00 | | TotalConsideration.Currency | USD | GBP | | Trade/default/TradeToPortfolioRate | 1.0 | 0.760919 |  ## Holdings  A holding represents a position in a instrument or cash on a given date.  | Field|Type|Description | | ---|---|--- | | InstrumentUid|string|Unique instrument identifier | | HoldingType|string|Type of holding, eg Position, Balance, CashCommitment, Receivable, ForwardFX | | Units|decimal|Quantity of holding | | SettledUnits|decimal|Settled quantity of holding | | Cost|currencyandamount|Book cost of holding in transaction currency | | CostPortfolioCcy|currencyandamount|Book cost of holding in portfolio currency | | Transaction|Transaction|If this is commitment-type holding, the transaction behind it |   ## Corporate Actions  Corporate actions are represented within LUSID in terms of a set of instrument-specific 'transitions'.  These transitions are used to specify the participants of the corporate action, and the effect that the corporate action will have on holdings in those participants.  *Corporate action*  | Field|Type|Description | | ---|---|--- | | SourceId|id|  | | CorporateActionCode|code|  | | AnnouncementDate|datetime|  | | ExDate|datetime|  | | RecordDate|datetime|  | | PaymentDate|datetime|  |    *Transition*  | Field|Type|Description | | ---|---|--- |   ## Property  Properties are key-value pairs that can be applied to any entity within a domain (where a domain is `trade`, `portfolio`, `security` etc).  Properties must be defined before use with a `PropertyDefinition` and can then subsequently be added to entities.  # Schemas  The following headers are returned on all responses from LUSID  | Name | Purpose | | --- | --- | | lusid-meta-duration | Duration of the request | | lusid-meta-success | Whether or not LUSID considered the request to be successful | | lusid-meta-requestId | The unique identifier for the request | | lusid-schema-url | Url of the schema for the data being returned | | lusid-property-schema-url | Url of the schema for any properties |   # Error Codes  | Code|Name|Description | | ---|---|--- | | <a name=\"102\">102</a>|VersionNotFound|  | | <a name=\"104\">104</a>|InstrumentNotFound|  | | <a name=\"105\">105</a>|PropertyNotFound|  | | <a name=\"106\">106</a>|PortfolioRecursionDepth|  | | <a name=\"108\">108</a>|GroupNotFound|  | | <a name=\"109\">109</a>|PortfolioNotFound|  | | <a name=\"110\">110</a>|PropertySchemaNotFound|  | | <a name=\"111\">111</a>|PortfolioAncestryNotFound|  | | <a name=\"112\">112</a>|PortfolioWithIdAlreadyExists|  | | <a name=\"113\">113</a>|OrphanedPortfolio|  | | <a name=\"119\">119</a>|MissingBaseClaims|  | | <a name=\"121\">121</a>|PropertyNotDefined|  | | <a name=\"122\">122</a>|CannotDeleteSystemProperty|  | | <a name=\"123\">123</a>|CannotModifyImmutablePropertyField|  | | <a name=\"124\">124</a>|PropertyAlreadyExists|  | | <a name=\"125\">125</a>|InvalidPropertyLifeTime|  | | <a name=\"127\">127</a>|CannotModifyDefaultDataType|  | | <a name=\"128\">128</a>|GroupAlreadyExists|  | | <a name=\"129\">129</a>|NoSuchDataType|  | | <a name=\"132\">132</a>|ValidationError|  | | <a name=\"133\">133</a>|LoopDetectedInGroupHierarchy|  | | <a name=\"135\">135</a>|SubGroupAlreadyExists|  | | <a name=\"138\">138</a>|PriceSourceNotFound|  | | <a name=\"139\">139</a>|AnalyticStoreNotFound|  | | <a name=\"141\">141</a>|AnalyticStoreAlreadyExists|  | | <a name=\"143\">143</a>|ClientInstrumentAlreadyExists|  | | <a name=\"144\">144</a>|DuplicateInParameterSet|  | | <a name=\"147\">147</a>|ResultsNotFound|  | | <a name=\"148\">148</a>|OrderFieldNotInResultSet|  | | <a name=\"149\">149</a>|OperationFailed|  | | <a name=\"150\">150</a>|ElasticSearchError|  | | <a name=\"151\">151</a>|InvalidParameterValue|  | | <a name=\"153\">153</a>|CommandProcessingFailure|  | | <a name=\"154\">154</a>|EntityStateConstructionFailure|  | | <a name=\"155\">155</a>|EntityTimelineDoesNotExist|  | | <a name=\"156\">156</a>|EventPublishFailure|  | | <a name=\"157\">157</a>|InvalidRequestFailure|  | | <a name=\"158\">158</a>|EventPublishUnknown|  | | <a name=\"159\">159</a>|EventQueryFailure|  | | <a name=\"160\">160</a>|BlobDidNotExistFailure|  | | <a name=\"162\">162</a>|SubSystemRequestFailure|  | | <a name=\"163\">163</a>|SubSystemConfigurationFailure|  | | <a name=\"165\">165</a>|FailedToDelete|  | | <a name=\"166\">166</a>|UpsertClientInstrumentFailure|  | | <a name=\"167\">167</a>|IllegalAsAtInterval|  | | <a name=\"168\">168</a>|IllegalBitemporalQuery|  | | <a name=\"169\">169</a>|InvalidAlternateId|  | | <a name=\"170\">170</a>|CannotAddSourcePortfolioPropertyExplicitly|  | | <a name=\"171\">171</a>|EntityAlreadyExistsInGroup|  | | <a name=\"173\">173</a>|EntityWithIdAlreadyExists|  | | <a name=\"174\">174</a>|PortfolioDetailsDoNotExist|  | | <a name=\"176\">176</a>|PortfolioWithNameAlreadyExists|  | | <a name=\"177\">177</a>|InvalidTransactions|  | | <a name=\"178\">178</a>|ReferencePortfolioNotFound|  | | <a name=\"179\">179</a>|DuplicateIdFailure|  | | <a name=\"180\">180</a>|CommandRetrievalFailure|  | | <a name=\"181\">181</a>|DataFilterApplicationFailure|  | | <a name=\"182\">182</a>|SearchFailed|  | | <a name=\"183\">183</a>|MovementsEngineConfigurationKeyFailure|  | | <a name=\"184\">184</a>|FxRateSourceNotFound|  | | <a name=\"185\">185</a>|AccrualSourceNotFound|  | | <a name=\"186\">186</a>|EntitlementsFailure|  | | <a name=\"187\">187</a>|InvalidIdentityToken|  | | <a name=\"188\">188</a>|InvalidRequestHeaders|  | | <a name=\"189\">189</a>|PriceNotFound|  | | <a name=\"190\">190</a>|InvalidSubHoldingKeysProvided|  | | <a name=\"191\">191</a>|DuplicateSubHoldingKeysProvided|  | | <a name=\"192\">192</a>|CutDefinitionNotFound|  | | <a name=\"193\">193</a>|CutDefinitionInvalid|  | | <a name=\"200\">200</a>|InvalidUnitForDataType|  | | <a name=\"201\">201</a>|InvalidTypeForDataType|  | | <a name=\"202\">202</a>|InvalidValueForDataType|  | | <a name=\"203\">203</a>|UnitNotDefinedForDataType|  | | <a name=\"204\">204</a>|UnitsNotSupportedOnDataType|  | | <a name=\"205\">205</a>|CannotSpecifyUnitsOnDataType|  | | <a name=\"206\">206</a>|UnitSchemaInconsistentWithDataType|  | | <a name=\"207\">207</a>|UnitDefinitionNotSpecified|  | | <a name=\"208\">208</a>|DuplicateUnitDefinitionsSpecified|  | | <a name=\"209\">209</a>|InvalidUnitsDefinition|  | | <a name=\"210\">210</a>|InvalidInstrumentIdentifierUnit|  | | <a name=\"211\">211</a>|HoldingsAdjustmentDoesNotExist|  | | <a name=\"212\">212</a>|CouldNotBuildExcelUrl|  | | <a name=\"213\">213</a>|CouldNotGetExcelVersion|  | | <a name=\"214\">214</a>|InstrumentByCodeNotFound|  | | <a name=\"215\">215</a>|EntitySchemaDoesNotExist|  | | <a name=\"216\">216</a>|FeatureNotSupportedOnPortfolioType|  | | <a name=\"217\">217</a>|QuoteNotFoundFailure|  | | <a name=\"219\">219</a>|InvalidInstrumentDefinition|  | | <a name=\"221\">221</a>|InstrumentUpsertFailure|  | | <a name=\"222\">222</a>|ReferencePortfolioRequestNotSupported|  | | <a name=\"223\">223</a>|TransactionPortfolioRequestNotSupported|  | | <a name=\"224\">224</a>|InvalidPropertyValueAssignment|  | | <a name=\"230\">230</a>|TransactionTypeNotFound|  | | <a name=\"231\">231</a>|TransactionTypeDuplication|  | | <a name=\"232\">232</a>|PortfolioDoesNotExistAtGivenDate|  | | <a name=\"233\">233</a>|QueryParserFailure|  | | <a name=\"234\">234</a>|DuplicateConstituentFailure|  | | <a name=\"235\">235</a>|UnresolvedInstrumentConstituentFailure|  | | <a name=\"236\">236</a>|UnresolvedInstrumentInTransitionFailure|  | | <a name=\"300\">300</a>|MissingRecipeFailure|  | | <a name=\"301\">301</a>|DependenciesFailure|  | | <a name=\"304\">304</a>|PortfolioPreprocessFailure|  | | <a name=\"310\">310</a>|ValuationEngineFailure|  | | <a name=\"311\">311</a>|TaskFactoryFailure|  | | <a name=\"312\">312</a>|TaskEvaluationFailure|  | | <a name=\"350\">350</a>|InstrumentFailure|  | | <a name=\"351\">351</a>|CashFlowsFailure|  | | <a name=\"370\">370</a>|ResultRetrievalFailure|  | | <a name=\"371\">371</a>|ResultProcessingFailure|  | | <a name=\"372\">372</a>|VendorResultProcessingFailure|  | | <a name=\"373\">373</a>|CannotSupplyTimesWithPortfoliosQuery|  | | <a name=\"374\">374</a>|AttemptToUpsertDuplicateQuotes|  | | <a name=\"-10\">-10</a>|ServerConfigurationError|  | | <a name=\"-1\">-1</a>|Unknown error|  | 
 *
 * OpenAPI spec version: 0.9.189
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DeletedEntityResponse', 'model/ErrorResponse', 'model/Portfolio', 'model/PortfolioProperties', 'model/ResourceListOfPortfolio', 'model/ResourceListOfProcessedCommand', 'model/UpdatePortfolioRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeletedEntityResponse'), require('../model/ErrorResponse'), require('../model/Portfolio'), require('../model/PortfolioProperties'), require('../model/ResourceListOfPortfolio'), require('../model/ResourceListOfProcessedCommand'), require('../model/UpdatePortfolioRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.LusidSdk) {
      root.LusidSdk = {};
    }
    root.LusidSdk.PortfoliosApi = factory(root.LusidSdk.ApiClient, root.LusidSdk.DeletedEntityResponse, root.LusidSdk.ErrorResponse, root.LusidSdk.Portfolio, root.LusidSdk.PortfolioProperties, root.LusidSdk.ResourceListOfPortfolio, root.LusidSdk.ResourceListOfProcessedCommand, root.LusidSdk.UpdatePortfolioRequest);
  }
}(this, function(ApiClient, DeletedEntityResponse, ErrorResponse, Portfolio, PortfolioProperties, ResourceListOfPortfolio, ResourceListOfProcessedCommand, UpdatePortfolioRequest) {
  'use strict';

  /**
   * Portfolios service.
   * @module api/PortfoliosApi
   * @version 0.9.189
   */

  /**
   * Constructs a new PortfoliosApi. 
   * @alias module:api/PortfoliosApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete portfolio
     * Delete a portfolio at the specified effectiveAt
     * @param {String} scope The scope of the portfolio
     * @param {String} code The code of the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the deletion
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeletedEntityResponse} and HTTP response
     */
    this.deletePortfolioWithHttpInfo = function(scope, code, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'scope' is set
      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling deletePortfolio");
      }

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling deletePortfolio");
      }


      var pathParams = {
        'scope': scope,
        'code': code
      };
      var queryParams = {
        'effectiveAt': opts['effectiveAt'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = DeletedEntityResponse;

      return this.apiClient.callApi(
        '/api/portfolios/{scope}/{code}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete portfolio
     * Delete a portfolio at the specified effectiveAt
     * @param {String} scope The scope of the portfolio
     * @param {String} code The code of the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the deletion
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeletedEntityResponse}
     */
    this.deletePortfolio = function(scope, code, opts) {
      return this.deletePortfolioWithHttpInfo(scope, code, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete portfolio properties
     * Delete one, many or all property values from a portfolio for the specified effectiveAt                Specifying no effectiveAt will delete all properties
     * @param {String} scope The scope of the portfolio
     * @param {String} code Code for the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the deletion
     * @param {Array.<String>} opts.portfolioPropertyKeys Optional. The keys of the properties to be deleted. None specified indicates the intention to delete all properties from the portfolio
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeletedEntityResponse} and HTTP response
     */
    this.deletePortfolioPropertiesWithHttpInfo = function(scope, code, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'scope' is set
      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling deletePortfolioProperties");
      }

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling deletePortfolioProperties");
      }


      var pathParams = {
        'scope': scope,
        'code': code
      };
      var queryParams = {
        'effectiveAt': opts['effectiveAt'],
      };
      var collectionQueryParams = {
        'portfolioPropertyKeys': {
          value: opts['portfolioPropertyKeys'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = DeletedEntityResponse;

      return this.apiClient.callApi(
        '/api/portfolios/{scope}/{code}/properties', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete portfolio properties
     * Delete one, many or all property values from a portfolio for the specified effectiveAt                Specifying no effectiveAt will delete all properties
     * @param {String} scope The scope of the portfolio
     * @param {String} code Code for the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the deletion
     * @param {Array.<String>} opts.portfolioPropertyKeys Optional. The keys of the properties to be deleted. None specified indicates the intention to delete all properties from the portfolio
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeletedEntityResponse}
     */
    this.deletePortfolioProperties = function(scope, code, opts) {
      return this.deletePortfolioPropertiesWithHttpInfo(scope, code, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get portfolio definition
     * Retrieves the basic set of information about a portfolio using the specified scope and code.
     * @param {String} scope The scope of the portfolio
     * @param {String} code The code of the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the data
     * @param {Date} opts.asAt Optional. The AsAt date of the data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Portfolio} and HTTP response
     */
    this.getPortfolioWithHttpInfo = function(scope, code, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'scope' is set
      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling getPortfolio");
      }

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getPortfolio");
      }


      var pathParams = {
        'scope': scope,
        'code': code
      };
      var queryParams = {
        'effectiveAt': opts['effectiveAt'],
        'asAt': opts['asAt'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = Portfolio;

      return this.apiClient.callApi(
        '/api/portfolios/{scope}/{code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get portfolio definition
     * Retrieves the basic set of information about a portfolio using the specified scope and code.
     * @param {String} scope The scope of the portfolio
     * @param {String} code The code of the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the data
     * @param {Date} opts.asAt Optional. The AsAt date of the data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Portfolio}
     */
    this.getPortfolio = function(scope, code, opts) {
      return this.getPortfolioWithHttpInfo(scope, code, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get commands
     * Gets all commands that modified a specific portfolio, including any input transactions.
     * @param {String} scope The scope of the portfolio
     * @param {String} code The code of the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromAsAt Optional. Filters commands by those that were processed at or after this date and time
     * @param {Date} opts.toAsAt Optional. Filters commands by those that were processed at or before this date and time
     * @param {Array.<String>} opts.sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param {Number} opts.start Optional. When paginating, skip this number of results
     * @param {Number} opts.limit Optional. When paginating, limit the number of returned results to this many.
     * @param {String} opts.filter Optional. Expression to filter the result set
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceListOfProcessedCommand} and HTTP response
     */
    this.getPortfolioCommandsWithHttpInfo = function(scope, code, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'scope' is set
      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling getPortfolioCommands");
      }

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getPortfolioCommands");
      }


      var pathParams = {
        'scope': scope,
        'code': code
      };
      var queryParams = {
        'fromAsAt': opts['fromAsAt'],
        'toAsAt': opts['toAsAt'],
        'start': opts['start'],
        'limit': opts['limit'],
        'filter': opts['filter'],
      };
      var collectionQueryParams = {
        'sortBy': {
          value: opts['sortBy'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = ResourceListOfProcessedCommand;

      return this.apiClient.callApi(
        '/api/portfolios/{scope}/{code}/commands', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get commands
     * Gets all commands that modified a specific portfolio, including any input transactions.
     * @param {String} scope The scope of the portfolio
     * @param {String} code The code of the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromAsAt Optional. Filters commands by those that were processed at or after this date and time
     * @param {Date} opts.toAsAt Optional. Filters commands by those that were processed at or before this date and time
     * @param {Array.<String>} opts.sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param {Number} opts.start Optional. When paginating, skip this number of results
     * @param {Number} opts.limit Optional. When paginating, limit the number of returned results to this many.
     * @param {String} opts.filter Optional. Expression to filter the result set
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceListOfProcessedCommand}
     */
    this.getPortfolioCommands = function(scope, code, opts) {
      return this.getPortfolioCommandsWithHttpInfo(scope, code, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get portfolio properties
     * Get the properties of a portfolio
     * @param {String} scope The scope of the portfolio
     * @param {String} code The code of the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the data
     * @param {Date} opts.asAt Optional. The AsAt date of the data
     * @param {Array.<String>} opts.sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param {Number} opts.start Optional. When paginating, skip this number of results
     * @param {Number} opts.limit Optional. When paginating, limit the number of returned results to this many.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PortfolioProperties} and HTTP response
     */
    this.getPortfolioPropertiesWithHttpInfo = function(scope, code, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'scope' is set
      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling getPortfolioProperties");
      }

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getPortfolioProperties");
      }


      var pathParams = {
        'scope': scope,
        'code': code
      };
      var queryParams = {
        'effectiveAt': opts['effectiveAt'],
        'asAt': opts['asAt'],
        'start': opts['start'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
        'sortBy': {
          value: opts['sortBy'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = PortfolioProperties;

      return this.apiClient.callApi(
        '/api/portfolios/{scope}/{code}/properties', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get portfolio properties
     * Get the properties of a portfolio
     * @param {String} scope The scope of the portfolio
     * @param {String} code The code of the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the data
     * @param {Date} opts.asAt Optional. The AsAt date of the data
     * @param {Array.<String>} opts.sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param {Number} opts.start Optional. When paginating, skip this number of results
     * @param {Number} opts.limit Optional. When paginating, limit the number of returned results to this many.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioProperties}
     */
    this.getPortfolioProperties = function(scope, code, opts) {
      return this.getPortfolioPropertiesWithHttpInfo(scope, code, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List portfolios
     * List all portfolios matching the specified criteria.                Example query syntax for the query parameter:                - To see which portfolios have holdings in the specified instruments:                    instrument.identifiers in ((&#39;LusidInstrumentId&#39;, &#39;LUID_PPA8HI6M&#39;), (&#39;Figi&#39;, &#39;BBG000BLNNH6&#39;))                * Note that if a query is specified then it is executed for the current EffectiveAt and AsAt  Specifying EffectiveAt or AsAt in addition to the query is not supported  Also note that copy/pasting above examples results in incorrect single quote character
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the data
     * @param {Date} opts.asAt Optional. The AsAt date of the data
     * @param {Array.<String>} opts.sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param {Number} opts.start Optional. When paginating, skip this number of results
     * @param {Number} opts.limit Optional. When paginating, limit the number of returned results to this many.
     * @param {String} opts.filter Optional. Expression to filter the result set
     * @param {String} opts.query Optional. Expression specifying the criteria that the returned portfolios must meet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceListOfPortfolio} and HTTP response
     */
    this.listPortfoliosWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'effectiveAt': opts['effectiveAt'],
        'asAt': opts['asAt'],
        'start': opts['start'],
        'limit': opts['limit'],
        'filter': opts['filter'],
        'query': opts['query'],
      };
      var collectionQueryParams = {
        'sortBy': {
          value: opts['sortBy'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = ResourceListOfPortfolio;

      return this.apiClient.callApi(
        '/api/portfolios', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List portfolios
     * List all portfolios matching the specified criteria.                Example query syntax for the query parameter:                - To see which portfolios have holdings in the specified instruments:                    instrument.identifiers in ((&#39;LusidInstrumentId&#39;, &#39;LUID_PPA8HI6M&#39;), (&#39;Figi&#39;, &#39;BBG000BLNNH6&#39;))                * Note that if a query is specified then it is executed for the current EffectiveAt and AsAt  Specifying EffectiveAt or AsAt in addition to the query is not supported  Also note that copy/pasting above examples results in incorrect single quote character
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the data
     * @param {Date} opts.asAt Optional. The AsAt date of the data
     * @param {Array.<String>} opts.sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param {Number} opts.start Optional. When paginating, skip this number of results
     * @param {Number} opts.limit Optional. When paginating, limit the number of returned results to this many.
     * @param {String} opts.filter Optional. Expression to filter the result set
     * @param {String} opts.query Optional. Expression specifying the criteria that the returned portfolios must meet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceListOfPortfolio}
     */
    this.listPortfolios = function(opts) {
      return this.listPortfoliosWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List portfolios for scope
     * List all the portfolios in the specified scope
     * @param {String} scope The scope
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the data
     * @param {Date} opts.asAt Optional. The AsAt date of the data
     * @param {Array.<String>} opts.sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param {Number} opts.start Optional. When paginating, skip this number of results
     * @param {Number} opts.limit Optional. When paginating, limit the number of returned results to this many.
     * @param {String} opts.filter Optional. Expression to filter the result set
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceListOfPortfolio} and HTTP response
     */
    this.listPortfoliosForScopeWithHttpInfo = function(scope, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'scope' is set
      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling listPortfoliosForScope");
      }


      var pathParams = {
        'scope': scope
      };
      var queryParams = {
        'effectiveAt': opts['effectiveAt'],
        'asAt': opts['asAt'],
        'start': opts['start'],
        'limit': opts['limit'],
        'filter': opts['filter'],
      };
      var collectionQueryParams = {
        'sortBy': {
          value: opts['sortBy'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = ResourceListOfPortfolio;

      return this.apiClient.callApi(
        '/api/portfolios/{scope}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List portfolios for scope
     * List all the portfolios in the specified scope
     * @param {String} scope The scope
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the data
     * @param {Date} opts.asAt Optional. The AsAt date of the data
     * @param {Array.<String>} opts.sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param {Number} opts.start Optional. When paginating, skip this number of results
     * @param {Number} opts.limit Optional. When paginating, limit the number of returned results to this many.
     * @param {String} opts.filter Optional. Expression to filter the result set
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceListOfPortfolio}
     */
    this.listPortfoliosForScope = function(scope, opts) {
      return this.listPortfoliosForScopeWithHttpInfo(scope, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update portfolio definition
     * Update the definition of a specific portfolio. Note, some parts of a portfolio definition are not available for modification after the initial creation.
     * @param {String} scope The scope of the portfolio
     * @param {String} code The code of the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date for the change
     * @param {module:model/UpdatePortfolioRequest} opts.updatePortfolioRequest The updated portfolio definition
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Portfolio} and HTTP response
     */
    this.updatePortfolioWithHttpInfo = function(scope, code, opts) {
      opts = opts || {};
      var postBody = opts['updatePortfolioRequest'];

      // verify the required parameter 'scope' is set
      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling updatePortfolio");
      }

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling updatePortfolio");
      }


      var pathParams = {
        'scope': scope,
        'code': code
      };
      var queryParams = {
        'effectiveAt': opts['effectiveAt'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = Portfolio;

      return this.apiClient.callApi(
        '/api/portfolios/{scope}/{code}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update portfolio definition
     * Update the definition of a specific portfolio. Note, some parts of a portfolio definition are not available for modification after the initial creation.
     * @param {String} scope The scope of the portfolio
     * @param {String} code The code of the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date for the change
     * @param {module:model/UpdatePortfolioRequest} opts.updatePortfolioRequest The updated portfolio definition
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Portfolio}
     */
    this.updatePortfolio = function(scope, code, opts) {
      return this.updatePortfolioWithHttpInfo(scope, code, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upsert properties
     * Upsert one or more property values to a portfolio for the specified effectiveAt. All properties must be of the domain Portfolio.
     * @param {String} scope The scope of the portfolio
     * @param {String} code The code of the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the change
     * @param {Object.<String, module:model/{String: PropertyValue}>} opts.requestBody The property values to be upserted to the portfolio
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PortfolioProperties} and HTTP response
     */
    this.upsertPortfolioPropertiesWithHttpInfo = function(scope, code, opts) {
      opts = opts || {};
      var postBody = opts['requestBody'];

      // verify the required parameter 'scope' is set
      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling upsertPortfolioProperties");
      }

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling upsertPortfolioProperties");
      }


      var pathParams = {
        'scope': scope,
        'code': code
      };
      var queryParams = {
        'effectiveAt': opts['effectiveAt'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = PortfolioProperties;

      return this.apiClient.callApi(
        '/api/portfolios/{scope}/{code}/properties', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upsert properties
     * Upsert one or more property values to a portfolio for the specified effectiveAt. All properties must be of the domain Portfolio.
     * @param {String} scope The scope of the portfolio
     * @param {String} code The code of the portfolio
     * @param {Object} opts Optional parameters
     * @param {Date} opts.effectiveAt Optional. The effective date of the change
     * @param {Object.<String, module:model/{String: PropertyValue}>} opts.requestBody The property values to be upserted to the portfolio
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioProperties}
     */
    this.upsertPortfolioProperties = function(scope, code, opts) {
      return this.upsertPortfolioPropertiesWithHttpInfo(scope, code, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
