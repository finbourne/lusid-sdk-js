/*
 * Copyright © 2018 FINBOURNE TECHNOLOGY LTD
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

exports.CreateAnalyticStoreRequest = require('./createAnalyticStoreRequest');
exports.AnalyticStoreKey = require('./analyticStoreKey');
exports.Link = require('./link');
exports.AnalyticStore = require('./analyticStore');
exports.ErrorDetailBase = require('./errorDetailBase');
exports.ErrorResponse = require('./errorResponse');
exports.ResourceListOfAnalyticStoreKey = require('./resourceListOfAnalyticStoreKey');
exports.DeletedEntityResponse = require('./deletedEntityResponse');
exports.InstrumentAnalytic = require('./instrumentAnalytic');
exports.CreateCorporateActionSourceRequest = require('./createCorporateActionSourceRequest');
exports.ResourceId = require('./resourceId');
exports.Version = require('./version');
exports.CorporateActionSource = require('./corporateActionSource');
exports.ResourceListOfCorporateActionSource = require('./resourceListOfCorporateActionSource');
exports.CorporateActionTransitionComponent = require('./corporateActionTransitionComponent');
exports.CorporateActionTransition = require('./corporateActionTransition');
exports.CreateCorporateAction = require('./createCorporateAction');
exports.CorporateAction = require('./corporateAction');
exports.ErrorDetail = require('./errorDetail');
exports.UpsertCorporateActionsResponse = require('./upsertCorporateActionsResponse');
exports.ResourceListOfCorporateAction = require('./resourceListOfCorporateAction');
exports.CreateUnitDefinition = require('./createUnitDefinition');
exports.CreateDataTypeRequest = require('./createDataTypeRequest');
exports.IUnitDefinitionDto = require('./iUnitDefinitionDto');
exports.DataType = require('./dataType');
exports.ResourceListOfDataType = require('./resourceListOfDataType');
exports.UpdateDataTypeRequest = require('./updateDataTypeRequest');
exports.ResourceListOfIUnitDefinitionDto = require('./resourceListOfIUnitDefinitionDto');
exports.CreateDerivedTransactionPortfolioRequest = require('./createDerivedTransactionPortfolioRequest');
exports.Portfolio = require('./portfolio');
exports.MetricValue = require('./metricValue');
exports.PropertyValue = require('./propertyValue');
exports.InstrumentProperty = require('./instrumentProperty');
exports.InstrumentEconomicDefinition = require('./instrumentEconomicDefinition');
exports.InstrumentDefinition = require('./instrumentDefinition');
exports.Property = require('./property');
exports.Instrument = require('./instrument');
exports.UpsertInstrumentsResponse = require('./upsertInstrumentsResponse');
exports.ResourceListOfInstrument = require('./resourceListOfInstrument');
exports.UpdateInstrumentIdentifierRequest = require('./updateInstrumentIdentifierRequest');
exports.DeleteInstrumentResponse = require('./deleteInstrumentResponse');
exports.GetInstrumentsResponse = require('./getInstrumentsResponse');
exports.MatchInstrumentsResponse = require('./matchInstrumentsResponse');
exports.DeleteInstrumentPropertyRequest = require('./deleteInstrumentPropertyRequest');
exports.UpsertInstrumentPropertyRequest = require('./upsertInstrumentPropertyRequest');
exports.UpsertInstrumentPropertiesResponse = require('./upsertInstrumentPropertiesResponse');
exports.ResourceListOfCodeType = require('./resourceListOfCodeType');
exports.Stream = require('./stream');
exports.FileResponse = require('./fileResponse');
exports.VersionSummaryDto = require('./versionSummaryDto');
exports.CreatePortfolioGroupRequest = require('./createPortfolioGroupRequest');
exports.PortfolioGroup = require('./portfolioGroup');
exports.ResourceListOfPortfolioGroup = require('./resourceListOfPortfolioGroup');
exports.UpdatePortfolioGroupRequest = require('./updatePortfolioGroupRequest');
exports.AggregateSpec = require('./aggregateSpec');
exports.PropertyFilter = require('./propertyFilter');
exports.AggregationRequest = require('./aggregationRequest');
exports.FieldSchema = require('./fieldSchema');
exports.KeyValuePairOfPropertyKeyToFieldSchema = require('./keyValuePairOfPropertyKeyToFieldSchema');
exports.ResultDataSchema = require('./resultDataSchema');
exports.ListAggregationResponse = require('./listAggregationResponse');
exports.AggregationResponseNode = require('./aggregationResponseNode');
exports.NestedAggregationResponse = require('./nestedAggregationResponse');
exports.User = require('./user');
exports.ProcessedCommand = require('./processedCommand');
exports.ResourceListOfProcessedCommand = require('./resourceListOfProcessedCommand');
exports.CompletePortfolio = require('./completePortfolio');
exports.ExpandedGroup = require('./expandedGroup');
exports.ResourceListOfPortfolio = require('./resourceListOfPortfolio');
exports.UpdatePortfolioRequest = require('./updatePortfolioRequest');
exports.PortfolioProperties = require('./portfolioProperties');
exports.PortfolioReconciliationRequest = require('./portfolioReconciliationRequest');
exports.PortfoliosReconciliationRequest = require('./portfoliosReconciliationRequest');
exports.PerpetualProperty = require('./perpetualProperty');
exports.CurrencyAndAmount = require('./currencyAndAmount');
exports.ReconciliationBreak = require('./reconciliationBreak');
exports.ResourceListOfReconciliationBreak = require('./resourceListOfReconciliationBreak');
exports.ValuationReconciliationRequest = require('./valuationReconciliationRequest');
exports.ValuationsReconciliationRequest = require('./valuationsReconciliationRequest');
exports.CreatePropertyDefinitionRequest = require('./createPropertyDefinitionRequest');
exports.PropertyDefinition = require('./propertyDefinition');
exports.ResourceListOfPropertyDefinition = require('./resourceListOfPropertyDefinition');
exports.UpdatePropertyDefinitionRequest = require('./updatePropertyDefinitionRequest');
exports.QuoteId = require('./quoteId');
exports.UpsertQuoteRequest = require('./upsertQuoteRequest');
exports.UpsertQuotesResponse = require('./upsertQuotesResponse');
exports.DeleteQuoteRequest = require('./deleteQuoteRequest');
exports.DeleteQuotesResponse = require('./deleteQuotesResponse');
exports.Quote = require('./quote');
exports.GetQuotesResponse = require('./getQuotesResponse');
exports.PerpetualPropertyValue = require('./perpetualPropertyValue');
exports.CreateReferencePortfolioRequest = require('./createReferencePortfolioRequest');
exports.ReferencePortfolioConstituent = require('./referencePortfolioConstituent');
exports.GetReferencePortfolioConstituentsResponse = require('./getReferencePortfolioConstituentsResponse');
exports.ReferencePortfolioConstituentRequest = require('./referencePortfolioConstituentRequest');
exports.UpsertReferencePortfolioConstituentsRequest = require('./upsertReferencePortfolioConstituentsRequest');
exports.UpsertReferencePortfolioConstituentsResponse = require('./upsertReferencePortfolioConstituentsResponse');
exports.CreateResults = require('./createResults');
exports.Results = require('./results');
exports.ResourceListOfString = require('./resourceListOfString');
exports.KeyValuePairOfStringToFieldSchema = require('./keyValuePairOfStringToFieldSchema');
exports.Schema = require('./schema');
exports.PropertySchema = require('./propertySchema');
exports.ResourceListOfValueType = require('./resourceListOfValueType');
exports.InstrumentSearchProperty = require('./instrumentSearchProperty');
exports.InstrumentMatch = require('./instrumentMatch');
exports.PortfolioSearchResult = require('./portfolioSearchResult');
exports.ResourceListOfPortfolioSearchResult = require('./resourceListOfPortfolioSearchResult');
exports.TransactionConfigurationTypeAlias = require('./transactionConfigurationTypeAlias');
exports.TransactionPropertyMappingRequest = require('./transactionPropertyMappingRequest');
exports.TransactionConfigurationMovementDataRequest = require('./transactionConfigurationMovementDataRequest');
exports.TransactionConfigurationDataRequest = require('./transactionConfigurationDataRequest');
exports.TransactionPropertyMapping = require('./transactionPropertyMapping');
exports.TransactionConfigurationMovementData = require('./transactionConfigurationMovementData');
exports.TransactionConfigurationData = require('./transactionConfigurationData');
exports.ResourceListOfTransactionConfigurationData = require('./resourceListOfTransactionConfigurationData');
exports.CreateTransactionPortfolioRequest = require('./createTransactionPortfolioRequest');
exports.PortfolioDetails = require('./portfolioDetails');
exports.CreatePortfolioDetails = require('./createPortfolioDetails');
exports.ExecutionRequest = require('./executionRequest');
exports.UpsertPortfolioExecutionsResponse = require('./upsertPortfolioExecutionsResponse');
exports.TransactionPrice = require('./transactionPrice');
exports.Transaction = require('./transaction');
exports.PortfolioHolding = require('./portfolioHolding');
exports.VersionedResourceListOfPortfolioHolding = require('./versionedResourceListOfPortfolioHolding');
exports.TargetTaxLotRequest = require('./targetTaxLotRequest');
exports.AdjustHoldingRequest = require('./adjustHoldingRequest');
exports.AdjustHolding = require('./adjustHolding');
exports.HoldingsAdjustmentHeader = require('./holdingsAdjustmentHeader');
exports.ResourceListOfHoldingsAdjustmentHeader = require('./resourceListOfHoldingsAdjustmentHeader');
exports.TargetTaxLot = require('./targetTaxLot');
exports.HoldingAdjustment = require('./holdingAdjustment');
exports.HoldingsAdjustment = require('./holdingsAdjustment');
exports.VersionedResourceListOfTransaction = require('./versionedResourceListOfTransaction');
exports.TransactionRequest = require('./transactionRequest');
exports.UpsertPortfolioTransactionsResponse = require('./upsertPortfolioTransactionsResponse');
exports.AddTransactionPropertyResponse = require('./addTransactionPropertyResponse');
exports.TransactionQueryParameters = require('./transactionQueryParameters');
exports.RealisedGainLoss = require('./realisedGainLoss');
exports.OutputTransaction = require('./outputTransaction');
exports.VersionedResourceListOfOutputTransaction = require('./versionedResourceListOfOutputTransaction');
