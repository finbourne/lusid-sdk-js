"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./addTransactionPropertyResponse"));
__export(require("./adjustHolding"));
__export(require("./adjustHoldingRequest"));
__export(require("./aggregateSpec"));
__export(require("./aggregationContext"));
__export(require("./aggregationOptions"));
__export(require("./aggregationRequest"));
__export(require("./aggregationResponseNode"));
__export(require("./analyticStore"));
__export(require("./analyticStoreKey"));
__export(require("./completePortfolio"));
__export(require("./configurationRecipe"));
__export(require("./constituentsAdjustmentHeader"));
__export(require("./corporateAction"));
__export(require("./corporateActionSource"));
__export(require("./corporateActionTransition"));
__export(require("./corporateActionTransitionComponent"));
__export(require("./corporateActionTransitionComponentRequest"));
__export(require("./corporateActionTransitionRequest"));
__export(require("./createAnalyticStoreRequest"));
__export(require("./createCorporateAction"));
__export(require("./createCorporateActionSourceRequest"));
__export(require("./createDataTypeRequest"));
__export(require("./createDerivedTransactionPortfolioRequest"));
__export(require("./createPortfolioDetails"));
__export(require("./createPortfolioGroupRequest"));
__export(require("./createPropertyDefinitionRequest"));
__export(require("./createReferencePortfolioRequest"));
__export(require("./createResults"));
__export(require("./createTransactionPortfolioRequest"));
__export(require("./createUnitDefinition"));
__export(require("./currencyAndAmount"));
__export(require("./dataType"));
__export(require("./deleteInstrumentPropertyRequest"));
__export(require("./deleteInstrumentResponse"));
__export(require("./deleteQuoteRequest"));
__export(require("./deleteQuotesResponse"));
__export(require("./deletedEntityResponse"));
__export(require("./errorDetail"));
__export(require("./errorDetailBase"));
__export(require("./errorResponse"));
__export(require("./executionRequest"));
__export(require("./expandedGroup"));
__export(require("./fieldSchema"));
__export(require("./fileResponse"));
__export(require("./getInstrumentsResponse"));
__export(require("./getQuotesResponse"));
__export(require("./getReferencePortfolioConstituentsResponse"));
__export(require("./holdingAdjustment"));
__export(require("./holdingsAdjustment"));
__export(require("./holdingsAdjustmentHeader"));
__export(require("./iUnitDefinitionDto"));
__export(require("./instrument"));
__export(require("./instrumentAnalytic"));
__export(require("./instrumentDefinition"));
__export(require("./instrumentEconomicDefinition"));
__export(require("./instrumentMatch"));
__export(require("./instrumentProperty"));
__export(require("./instrumentSearchProperty"));
__export(require("./link"));
__export(require("./listAggregationResponse"));
__export(require("./marketContext"));
__export(require("./marketContextSuppliers"));
__export(require("./marketDataKeyRule"));
__export(require("./marketOptions"));
__export(require("./matchInstrumentsResponse"));
__export(require("./metricValue"));
__export(require("./modelSelection"));
__export(require("./nestedAggregationResponse"));
__export(require("./outputTransaction"));
__export(require("./perpetualProperty"));
__export(require("./perpetualPropertyValue"));
__export(require("./portfolio"));
__export(require("./portfolioDetails"));
__export(require("./portfolioGroup"));
__export(require("./portfolioHolding"));
__export(require("./portfolioProperties"));
__export(require("./portfolioReconciliationRequest"));
__export(require("./portfolioSearchResult"));
__export(require("./portfoliosReconciliationRequest"));
__export(require("./pricingContext"));
__export(require("./pricingOptions"));
__export(require("./processedCommand"));
__export(require("./property"));
__export(require("./propertyDefinition"));
__export(require("./propertyFilter"));
__export(require("./propertySchema"));
__export(require("./propertyValue"));
__export(require("./quote"));
__export(require("./quoteId"));
__export(require("./realisedGainLoss"));
__export(require("./reconciliationBreak"));
__export(require("./referencePortfolioConstituent"));
__export(require("./referencePortfolioConstituentRequest"));
__export(require("./resourceId"));
__export(require("./resourceListOfAnalyticStoreKey"));
__export(require("./resourceListOfConstituentsAdjustmentHeader"));
__export(require("./resourceListOfCorporateAction"));
__export(require("./resourceListOfCorporateActionSource"));
__export(require("./resourceListOfDataType"));
__export(require("./resourceListOfHoldingsAdjustmentHeader"));
__export(require("./resourceListOfIUnitDefinitionDto"));
__export(require("./resourceListOfInstrument"));
__export(require("./resourceListOfPortfolio"));
__export(require("./resourceListOfPortfolioGroup"));
__export(require("./resourceListOfPortfolioSearchResult"));
__export(require("./resourceListOfProcessedCommand"));
__export(require("./resourceListOfPropertyDefinition"));
__export(require("./resourceListOfReconciliationBreak"));
__export(require("./resourceListOfScopeDefinition"));
__export(require("./resourceListOfString"));
__export(require("./resourceListOfTransactionConfigurationData"));
__export(require("./resourceListOfValueType"));
__export(require("./resultDataSchema"));
__export(require("./results"));
__export(require("./schema"));
__export(require("./scopeDefinition"));
__export(require("./stream"));
__export(require("./targetTaxLot"));
__export(require("./targetTaxLotRequest"));
__export(require("./transaction"));
__export(require("./transactionConfigurationData"));
__export(require("./transactionConfigurationDataRequest"));
__export(require("./transactionConfigurationMovementData"));
__export(require("./transactionConfigurationMovementDataRequest"));
__export(require("./transactionConfigurationTypeAlias"));
__export(require("./transactionPrice"));
__export(require("./transactionPropertyMapping"));
__export(require("./transactionPropertyMappingRequest"));
__export(require("./transactionQueryParameters"));
__export(require("./transactionRequest"));
__export(require("./updateDataTypeRequest"));
__export(require("./updateInstrumentIdentifierRequest"));
__export(require("./updatePortfolioGroupRequest"));
__export(require("./updatePortfolioRequest"));
__export(require("./updatePropertyDefinitionRequest"));
__export(require("./upsertCorporateActionsResponse"));
__export(require("./upsertInstrumentPropertiesResponse"));
__export(require("./upsertInstrumentPropertyRequest"));
__export(require("./upsertInstrumentsResponse"));
__export(require("./upsertPortfolioExecutionsResponse"));
__export(require("./upsertPortfolioTransactionsResponse"));
__export(require("./upsertQuoteRequest"));
__export(require("./upsertQuotesResponse"));
__export(require("./upsertReferencePortfolioConstituentsRequest"));
__export(require("./upsertReferencePortfolioConstituentsResponse"));
__export(require("./user"));
__export(require("./valuationReconciliationRequest"));
__export(require("./valuationsReconciliationRequest"));
__export(require("./vendorModelRule"));
__export(require("./version"));
__export(require("./versionSummaryDto"));
__export(require("./versionedResourceListOfOutputTransaction"));
__export(require("./versionedResourceListOfPortfolioHolding"));
__export(require("./versionedResourceListOfTransaction"));
var addTransactionPropertyResponse_1 = require("./addTransactionPropertyResponse");
var adjustHolding_1 = require("./adjustHolding");
var adjustHoldingRequest_1 = require("./adjustHoldingRequest");
var aggregateSpec_1 = require("./aggregateSpec");
var aggregationContext_1 = require("./aggregationContext");
var aggregationOptions_1 = require("./aggregationOptions");
var aggregationRequest_1 = require("./aggregationRequest");
var aggregationResponseNode_1 = require("./aggregationResponseNode");
var analyticStore_1 = require("./analyticStore");
var analyticStoreKey_1 = require("./analyticStoreKey");
var completePortfolio_1 = require("./completePortfolio");
var configurationRecipe_1 = require("./configurationRecipe");
var constituentsAdjustmentHeader_1 = require("./constituentsAdjustmentHeader");
var corporateAction_1 = require("./corporateAction");
var corporateActionSource_1 = require("./corporateActionSource");
var corporateActionTransition_1 = require("./corporateActionTransition");
var corporateActionTransitionComponent_1 = require("./corporateActionTransitionComponent");
var corporateActionTransitionComponentRequest_1 = require("./corporateActionTransitionComponentRequest");
var corporateActionTransitionRequest_1 = require("./corporateActionTransitionRequest");
var createAnalyticStoreRequest_1 = require("./createAnalyticStoreRequest");
var createCorporateAction_1 = require("./createCorporateAction");
var createCorporateActionSourceRequest_1 = require("./createCorporateActionSourceRequest");
var createDataTypeRequest_1 = require("./createDataTypeRequest");
var createDerivedTransactionPortfolioRequest_1 = require("./createDerivedTransactionPortfolioRequest");
var createPortfolioDetails_1 = require("./createPortfolioDetails");
var createPortfolioGroupRequest_1 = require("./createPortfolioGroupRequest");
var createPropertyDefinitionRequest_1 = require("./createPropertyDefinitionRequest");
var createReferencePortfolioRequest_1 = require("./createReferencePortfolioRequest");
var createResults_1 = require("./createResults");
var createTransactionPortfolioRequest_1 = require("./createTransactionPortfolioRequest");
var createUnitDefinition_1 = require("./createUnitDefinition");
var currencyAndAmount_1 = require("./currencyAndAmount");
var dataType_1 = require("./dataType");
var deleteInstrumentPropertyRequest_1 = require("./deleteInstrumentPropertyRequest");
var deleteInstrumentResponse_1 = require("./deleteInstrumentResponse");
var deleteQuoteRequest_1 = require("./deleteQuoteRequest");
var deleteQuotesResponse_1 = require("./deleteQuotesResponse");
var deletedEntityResponse_1 = require("./deletedEntityResponse");
var errorDetail_1 = require("./errorDetail");
var errorDetailBase_1 = require("./errorDetailBase");
var errorResponse_1 = require("./errorResponse");
var executionRequest_1 = require("./executionRequest");
var expandedGroup_1 = require("./expandedGroup");
var fieldSchema_1 = require("./fieldSchema");
var fileResponse_1 = require("./fileResponse");
var getInstrumentsResponse_1 = require("./getInstrumentsResponse");
var getQuotesResponse_1 = require("./getQuotesResponse");
var getReferencePortfolioConstituentsResponse_1 = require("./getReferencePortfolioConstituentsResponse");
var holdingAdjustment_1 = require("./holdingAdjustment");
var holdingsAdjustment_1 = require("./holdingsAdjustment");
var holdingsAdjustmentHeader_1 = require("./holdingsAdjustmentHeader");
var iUnitDefinitionDto_1 = require("./iUnitDefinitionDto");
var instrument_1 = require("./instrument");
var instrumentAnalytic_1 = require("./instrumentAnalytic");
var instrumentDefinition_1 = require("./instrumentDefinition");
var instrumentEconomicDefinition_1 = require("./instrumentEconomicDefinition");
var instrumentMatch_1 = require("./instrumentMatch");
var instrumentProperty_1 = require("./instrumentProperty");
var instrumentSearchProperty_1 = require("./instrumentSearchProperty");
var link_1 = require("./link");
var listAggregationResponse_1 = require("./listAggregationResponse");
var marketContext_1 = require("./marketContext");
var marketContextSuppliers_1 = require("./marketContextSuppliers");
var marketDataKeyRule_1 = require("./marketDataKeyRule");
var marketOptions_1 = require("./marketOptions");
var matchInstrumentsResponse_1 = require("./matchInstrumentsResponse");
var metricValue_1 = require("./metricValue");
var modelSelection_1 = require("./modelSelection");
var nestedAggregationResponse_1 = require("./nestedAggregationResponse");
var outputTransaction_1 = require("./outputTransaction");
var perpetualProperty_1 = require("./perpetualProperty");
var perpetualPropertyValue_1 = require("./perpetualPropertyValue");
var portfolio_1 = require("./portfolio");
var portfolioDetails_1 = require("./portfolioDetails");
var portfolioGroup_1 = require("./portfolioGroup");
var portfolioHolding_1 = require("./portfolioHolding");
var portfolioProperties_1 = require("./portfolioProperties");
var portfolioReconciliationRequest_1 = require("./portfolioReconciliationRequest");
var portfolioSearchResult_1 = require("./portfolioSearchResult");
var portfoliosReconciliationRequest_1 = require("./portfoliosReconciliationRequest");
var pricingContext_1 = require("./pricingContext");
var pricingOptions_1 = require("./pricingOptions");
var processedCommand_1 = require("./processedCommand");
var property_1 = require("./property");
var propertyDefinition_1 = require("./propertyDefinition");
var propertyFilter_1 = require("./propertyFilter");
var propertySchema_1 = require("./propertySchema");
var propertyValue_1 = require("./propertyValue");
var quote_1 = require("./quote");
var quoteId_1 = require("./quoteId");
var realisedGainLoss_1 = require("./realisedGainLoss");
var reconciliationBreak_1 = require("./reconciliationBreak");
var referencePortfolioConstituent_1 = require("./referencePortfolioConstituent");
var referencePortfolioConstituentRequest_1 = require("./referencePortfolioConstituentRequest");
var resourceId_1 = require("./resourceId");
var resourceListOfAnalyticStoreKey_1 = require("./resourceListOfAnalyticStoreKey");
var resourceListOfConstituentsAdjustmentHeader_1 = require("./resourceListOfConstituentsAdjustmentHeader");
var resourceListOfCorporateAction_1 = require("./resourceListOfCorporateAction");
var resourceListOfCorporateActionSource_1 = require("./resourceListOfCorporateActionSource");
var resourceListOfDataType_1 = require("./resourceListOfDataType");
var resourceListOfHoldingsAdjustmentHeader_1 = require("./resourceListOfHoldingsAdjustmentHeader");
var resourceListOfIUnitDefinitionDto_1 = require("./resourceListOfIUnitDefinitionDto");
var resourceListOfInstrument_1 = require("./resourceListOfInstrument");
var resourceListOfPortfolio_1 = require("./resourceListOfPortfolio");
var resourceListOfPortfolioGroup_1 = require("./resourceListOfPortfolioGroup");
var resourceListOfPortfolioSearchResult_1 = require("./resourceListOfPortfolioSearchResult");
var resourceListOfProcessedCommand_1 = require("./resourceListOfProcessedCommand");
var resourceListOfPropertyDefinition_1 = require("./resourceListOfPropertyDefinition");
var resourceListOfReconciliationBreak_1 = require("./resourceListOfReconciliationBreak");
var resourceListOfScopeDefinition_1 = require("./resourceListOfScopeDefinition");
var resourceListOfString_1 = require("./resourceListOfString");
var resourceListOfTransactionConfigurationData_1 = require("./resourceListOfTransactionConfigurationData");
var resourceListOfValueType_1 = require("./resourceListOfValueType");
var resultDataSchema_1 = require("./resultDataSchema");
var results_1 = require("./results");
var schema_1 = require("./schema");
var scopeDefinition_1 = require("./scopeDefinition");
var stream_1 = require("./stream");
var targetTaxLot_1 = require("./targetTaxLot");
var targetTaxLotRequest_1 = require("./targetTaxLotRequest");
var transaction_1 = require("./transaction");
var transactionConfigurationData_1 = require("./transactionConfigurationData");
var transactionConfigurationDataRequest_1 = require("./transactionConfigurationDataRequest");
var transactionConfigurationMovementData_1 = require("./transactionConfigurationMovementData");
var transactionConfigurationMovementDataRequest_1 = require("./transactionConfigurationMovementDataRequest");
var transactionConfigurationTypeAlias_1 = require("./transactionConfigurationTypeAlias");
var transactionPrice_1 = require("./transactionPrice");
var transactionPropertyMapping_1 = require("./transactionPropertyMapping");
var transactionPropertyMappingRequest_1 = require("./transactionPropertyMappingRequest");
var transactionQueryParameters_1 = require("./transactionQueryParameters");
var transactionRequest_1 = require("./transactionRequest");
var updateDataTypeRequest_1 = require("./updateDataTypeRequest");
var updateInstrumentIdentifierRequest_1 = require("./updateInstrumentIdentifierRequest");
var updatePortfolioGroupRequest_1 = require("./updatePortfolioGroupRequest");
var updatePortfolioRequest_1 = require("./updatePortfolioRequest");
var updatePropertyDefinitionRequest_1 = require("./updatePropertyDefinitionRequest");
var upsertCorporateActionsResponse_1 = require("./upsertCorporateActionsResponse");
var upsertInstrumentPropertiesResponse_1 = require("./upsertInstrumentPropertiesResponse");
var upsertInstrumentPropertyRequest_1 = require("./upsertInstrumentPropertyRequest");
var upsertInstrumentsResponse_1 = require("./upsertInstrumentsResponse");
var upsertPortfolioExecutionsResponse_1 = require("./upsertPortfolioExecutionsResponse");
var upsertPortfolioTransactionsResponse_1 = require("./upsertPortfolioTransactionsResponse");
var upsertQuoteRequest_1 = require("./upsertQuoteRequest");
var upsertQuotesResponse_1 = require("./upsertQuotesResponse");
var upsertReferencePortfolioConstituentsRequest_1 = require("./upsertReferencePortfolioConstituentsRequest");
var upsertReferencePortfolioConstituentsResponse_1 = require("./upsertReferencePortfolioConstituentsResponse");
var user_1 = require("./user");
var valuationReconciliationRequest_1 = require("./valuationReconciliationRequest");
var valuationsReconciliationRequest_1 = require("./valuationsReconciliationRequest");
var vendorModelRule_1 = require("./vendorModelRule");
var version_1 = require("./version");
var versionSummaryDto_1 = require("./versionSummaryDto");
var versionedResourceListOfOutputTransaction_1 = require("./versionedResourceListOfOutputTransaction");
var versionedResourceListOfPortfolioHolding_1 = require("./versionedResourceListOfPortfolioHolding");
var versionedResourceListOfTransaction_1 = require("./versionedResourceListOfTransaction");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "AggregateSpec.OpEnum": aggregateSpec_1.AggregateSpec.OpEnum,
    "CompletePortfolio.TypeEnum": completePortfolio_1.CompletePortfolio.TypeEnum,
    "CreateDataTypeRequest.TypeValueRangeEnum": createDataTypeRequest_1.CreateDataTypeRequest.TypeValueRangeEnum,
    "CreateDataTypeRequest.ValueTypeEnum": createDataTypeRequest_1.CreateDataTypeRequest.ValueTypeEnum,
    "CreateDataTypeRequest.UnitSchemaEnum": createDataTypeRequest_1.CreateDataTypeRequest.UnitSchemaEnum,
    "CreateDerivedTransactionPortfolioRequest.AccountingMethodEnum": createDerivedTransactionPortfolioRequest_1.CreateDerivedTransactionPortfolioRequest.AccountingMethodEnum,
    "CreatePropertyDefinitionRequest.DomainEnum": createPropertyDefinitionRequest_1.CreatePropertyDefinitionRequest.DomainEnum,
    "CreatePropertyDefinitionRequest.LifeTimeEnum": createPropertyDefinitionRequest_1.CreatePropertyDefinitionRequest.LifeTimeEnum,
    "CreatePropertyDefinitionRequest.TypeEnum": createPropertyDefinitionRequest_1.CreatePropertyDefinitionRequest.TypeEnum,
    "CreateResults.FormatEnum": createResults_1.CreateResults.FormatEnum,
    "CreateTransactionPortfolioRequest.AccountingMethodEnum": createTransactionPortfolioRequest_1.CreateTransactionPortfolioRequest.AccountingMethodEnum,
    "DataType.TypeValueRangeEnum": dataType_1.DataType.TypeValueRangeEnum,
    "DataType.ValueTypeEnum": dataType_1.DataType.ValueTypeEnum,
    "DataType.UnitSchemaEnum": dataType_1.DataType.UnitSchemaEnum,
    "ErrorResponse.CodeEnum": errorResponse_1.ErrorResponse.CodeEnum,
    "FieldSchema.TypeEnum": fieldSchema_1.FieldSchema.TypeEnum,
    "GetReferencePortfolioConstituentsResponse.WeightTypeEnum": getReferencePortfolioConstituentsResponse_1.GetReferencePortfolioConstituentsResponse.WeightTypeEnum,
    "GetReferencePortfolioConstituentsResponse.PeriodTypeEnum": getReferencePortfolioConstituentsResponse_1.GetReferencePortfolioConstituentsResponse.PeriodTypeEnum,
    "HoldingsAdjustment.UnmatchedHoldingMethodEnum": holdingsAdjustment_1.HoldingsAdjustment.UnmatchedHoldingMethodEnum,
    "HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum": holdingsAdjustmentHeader_1.HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum,
    "IUnitDefinitionDto.SchemaEnum": iUnitDefinitionDto_1.IUnitDefinitionDto.SchemaEnum,
    "Instrument.StateEnum": instrument_1.Instrument.StateEnum,
    "Link.RelationEnum": link_1.Link.RelationEnum,
    "Link.MethodEnum": link_1.Link.MethodEnum,
    "MarketContextSuppliers.FxEnum": marketContextSuppliers_1.MarketContextSuppliers.FxEnum,
    "MarketContextSuppliers.RatesEnum": marketContextSuppliers_1.MarketContextSuppliers.RatesEnum,
    "MarketContextSuppliers.CommodityEnum": marketContextSuppliers_1.MarketContextSuppliers.CommodityEnum,
    "MarketContextSuppliers.CreditEnum": marketContextSuppliers_1.MarketContextSuppliers.CreditEnum,
    "MarketContextSuppliers.EquityEnum": marketContextSuppliers_1.MarketContextSuppliers.EquityEnum,
    "MarketDataKeyRule.SupplierEnum": marketDataKeyRule_1.MarketDataKeyRule.SupplierEnum,
    "MarketDataKeyRule.QuoteTypeEnum": marketDataKeyRule_1.MarketDataKeyRule.QuoteTypeEnum,
    "MarketDataKeyRule.PriceSideEnum": marketDataKeyRule_1.MarketDataKeyRule.PriceSideEnum,
    "MarketOptions.DefaultSupplierEnum": marketOptions_1.MarketOptions.DefaultSupplierEnum,
    "MarketOptions.DefaultInstrumentCodeTypeEnum": marketOptions_1.MarketOptions.DefaultInstrumentCodeTypeEnum,
    "ModelSelection.LibraryEnum": modelSelection_1.ModelSelection.LibraryEnum,
    "ModelSelection.ModelEnum": modelSelection_1.ModelSelection.ModelEnum,
    "OutputTransaction.TransactionStatusEnum": outputTransaction_1.OutputTransaction.TransactionStatusEnum,
    "Portfolio.TypeEnum": portfolio_1.Portfolio.TypeEnum,
    "PortfolioSearchResult.TypeEnum": portfolioSearchResult_1.PortfolioSearchResult.TypeEnum,
    "PropertyDefinition.ValueTypeEnum": propertyDefinition_1.PropertyDefinition.ValueTypeEnum,
    "PropertyDefinition.LifeTimeEnum": propertyDefinition_1.PropertyDefinition.LifeTimeEnum,
    "PropertyDefinition.TypeEnum": propertyDefinition_1.PropertyDefinition.TypeEnum,
    "PropertyDefinition.UnitSchemaEnum": propertyDefinition_1.PropertyDefinition.UnitSchemaEnum,
    "PropertyDefinition.DomainEnum": propertyDefinition_1.PropertyDefinition.DomainEnum,
    "PropertyFilter.OperatorEnum": propertyFilter_1.PropertyFilter.OperatorEnum,
    "PropertyFilter.RightOperandTypeEnum": propertyFilter_1.PropertyFilter.RightOperandTypeEnum,
    "QuoteId.InstrumentIdTypeEnum": quoteId_1.QuoteId.InstrumentIdTypeEnum,
    "QuoteId.QuoteTypeEnum": quoteId_1.QuoteId.QuoteTypeEnum,
    "QuoteId.PriceSideEnum": quoteId_1.QuoteId.PriceSideEnum,
    "ResourceListOfValueType.ValuesEnum": resourceListOfValueType_1.ResourceListOfValueType.ValuesEnum,
    "Results.FormatEnum": results_1.Results.FormatEnum,
    "TransactionConfigurationMovementData.MovementTypesEnum": transactionConfigurationMovementData_1.TransactionConfigurationMovementData.MovementTypesEnum,
    "TransactionConfigurationMovementData.SideEnum": transactionConfigurationMovementData_1.TransactionConfigurationMovementData.SideEnum,
    "TransactionConfigurationMovementDataRequest.MovementTypesEnum": transactionConfigurationMovementDataRequest_1.TransactionConfigurationMovementDataRequest.MovementTypesEnum,
    "TransactionConfigurationMovementDataRequest.SideEnum": transactionConfigurationMovementDataRequest_1.TransactionConfigurationMovementDataRequest.SideEnum,
    "TransactionConfigurationTypeAlias.TransactionRolesEnum": transactionConfigurationTypeAlias_1.TransactionConfigurationTypeAlias.TransactionRolesEnum,
    "TransactionPrice.TypeEnum": transactionPrice_1.TransactionPrice.TypeEnum,
    "TransactionQueryParameters.QueryModeEnum": transactionQueryParameters_1.TransactionQueryParameters.QueryModeEnum,
    "UpdateDataTypeRequest.TypeValueRangeEnum": updateDataTypeRequest_1.UpdateDataTypeRequest.TypeValueRangeEnum,
    "UpdateDataTypeRequest.ValueTypeEnum": updateDataTypeRequest_1.UpdateDataTypeRequest.ValueTypeEnum,
    "UpdateDataTypeRequest.UnitSchemaEnum": updateDataTypeRequest_1.UpdateDataTypeRequest.UnitSchemaEnum,
    "UpdatePropertyDefinitionRequest.LifeTimeEnum": updatePropertyDefinitionRequest_1.UpdatePropertyDefinitionRequest.LifeTimeEnum,
    "UpdatePropertyDefinitionRequest.TypeEnum": updatePropertyDefinitionRequest_1.UpdatePropertyDefinitionRequest.TypeEnum,
    "UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum": upsertReferencePortfolioConstituentsRequest_1.UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum,
    "UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum": upsertReferencePortfolioConstituentsRequest_1.UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum,
    "VendorModelRule.SupplierEnum": vendorModelRule_1.VendorModelRule.SupplierEnum,
};
var typeMap = {
    "AddTransactionPropertyResponse": addTransactionPropertyResponse_1.AddTransactionPropertyResponse,
    "AdjustHolding": adjustHolding_1.AdjustHolding,
    "AdjustHoldingRequest": adjustHoldingRequest_1.AdjustHoldingRequest,
    "AggregateSpec": aggregateSpec_1.AggregateSpec,
    "AggregationContext": aggregationContext_1.AggregationContext,
    "AggregationOptions": aggregationOptions_1.AggregationOptions,
    "AggregationRequest": aggregationRequest_1.AggregationRequest,
    "AggregationResponseNode": aggregationResponseNode_1.AggregationResponseNode,
    "AnalyticStore": analyticStore_1.AnalyticStore,
    "AnalyticStoreKey": analyticStoreKey_1.AnalyticStoreKey,
    "CompletePortfolio": completePortfolio_1.CompletePortfolio,
    "ConfigurationRecipe": configurationRecipe_1.ConfigurationRecipe,
    "ConstituentsAdjustmentHeader": constituentsAdjustmentHeader_1.ConstituentsAdjustmentHeader,
    "CorporateAction": corporateAction_1.CorporateAction,
    "CorporateActionSource": corporateActionSource_1.CorporateActionSource,
    "CorporateActionTransition": corporateActionTransition_1.CorporateActionTransition,
    "CorporateActionTransitionComponent": corporateActionTransitionComponent_1.CorporateActionTransitionComponent,
    "CorporateActionTransitionComponentRequest": corporateActionTransitionComponentRequest_1.CorporateActionTransitionComponentRequest,
    "CorporateActionTransitionRequest": corporateActionTransitionRequest_1.CorporateActionTransitionRequest,
    "CreateAnalyticStoreRequest": createAnalyticStoreRequest_1.CreateAnalyticStoreRequest,
    "CreateCorporateAction": createCorporateAction_1.CreateCorporateAction,
    "CreateCorporateActionSourceRequest": createCorporateActionSourceRequest_1.CreateCorporateActionSourceRequest,
    "CreateDataTypeRequest": createDataTypeRequest_1.CreateDataTypeRequest,
    "CreateDerivedTransactionPortfolioRequest": createDerivedTransactionPortfolioRequest_1.CreateDerivedTransactionPortfolioRequest,
    "CreatePortfolioDetails": createPortfolioDetails_1.CreatePortfolioDetails,
    "CreatePortfolioGroupRequest": createPortfolioGroupRequest_1.CreatePortfolioGroupRequest,
    "CreatePropertyDefinitionRequest": createPropertyDefinitionRequest_1.CreatePropertyDefinitionRequest,
    "CreateReferencePortfolioRequest": createReferencePortfolioRequest_1.CreateReferencePortfolioRequest,
    "CreateResults": createResults_1.CreateResults,
    "CreateTransactionPortfolioRequest": createTransactionPortfolioRequest_1.CreateTransactionPortfolioRequest,
    "CreateUnitDefinition": createUnitDefinition_1.CreateUnitDefinition,
    "CurrencyAndAmount": currencyAndAmount_1.CurrencyAndAmount,
    "DataType": dataType_1.DataType,
    "DeleteInstrumentPropertyRequest": deleteInstrumentPropertyRequest_1.DeleteInstrumentPropertyRequest,
    "DeleteInstrumentResponse": deleteInstrumentResponse_1.DeleteInstrumentResponse,
    "DeleteQuoteRequest": deleteQuoteRequest_1.DeleteQuoteRequest,
    "DeleteQuotesResponse": deleteQuotesResponse_1.DeleteQuotesResponse,
    "DeletedEntityResponse": deletedEntityResponse_1.DeletedEntityResponse,
    "ErrorDetail": errorDetail_1.ErrorDetail,
    "ErrorDetailBase": errorDetailBase_1.ErrorDetailBase,
    "ErrorResponse": errorResponse_1.ErrorResponse,
    "ExecutionRequest": executionRequest_1.ExecutionRequest,
    "ExpandedGroup": expandedGroup_1.ExpandedGroup,
    "FieldSchema": fieldSchema_1.FieldSchema,
    "FileResponse": fileResponse_1.FileResponse,
    "GetInstrumentsResponse": getInstrumentsResponse_1.GetInstrumentsResponse,
    "GetQuotesResponse": getQuotesResponse_1.GetQuotesResponse,
    "GetReferencePortfolioConstituentsResponse": getReferencePortfolioConstituentsResponse_1.GetReferencePortfolioConstituentsResponse,
    "HoldingAdjustment": holdingAdjustment_1.HoldingAdjustment,
    "HoldingsAdjustment": holdingsAdjustment_1.HoldingsAdjustment,
    "HoldingsAdjustmentHeader": holdingsAdjustmentHeader_1.HoldingsAdjustmentHeader,
    "IUnitDefinitionDto": iUnitDefinitionDto_1.IUnitDefinitionDto,
    "Instrument": instrument_1.Instrument,
    "InstrumentAnalytic": instrumentAnalytic_1.InstrumentAnalytic,
    "InstrumentDefinition": instrumentDefinition_1.InstrumentDefinition,
    "InstrumentEconomicDefinition": instrumentEconomicDefinition_1.InstrumentEconomicDefinition,
    "InstrumentMatch": instrumentMatch_1.InstrumentMatch,
    "InstrumentProperty": instrumentProperty_1.InstrumentProperty,
    "InstrumentSearchProperty": instrumentSearchProperty_1.InstrumentSearchProperty,
    "Link": link_1.Link,
    "ListAggregationResponse": listAggregationResponse_1.ListAggregationResponse,
    "MarketContext": marketContext_1.MarketContext,
    "MarketContextSuppliers": marketContextSuppliers_1.MarketContextSuppliers,
    "MarketDataKeyRule": marketDataKeyRule_1.MarketDataKeyRule,
    "MarketOptions": marketOptions_1.MarketOptions,
    "MatchInstrumentsResponse": matchInstrumentsResponse_1.MatchInstrumentsResponse,
    "MetricValue": metricValue_1.MetricValue,
    "ModelSelection": modelSelection_1.ModelSelection,
    "NestedAggregationResponse": nestedAggregationResponse_1.NestedAggregationResponse,
    "OutputTransaction": outputTransaction_1.OutputTransaction,
    "PerpetualProperty": perpetualProperty_1.PerpetualProperty,
    "PerpetualPropertyValue": perpetualPropertyValue_1.PerpetualPropertyValue,
    "Portfolio": portfolio_1.Portfolio,
    "PortfolioDetails": portfolioDetails_1.PortfolioDetails,
    "PortfolioGroup": portfolioGroup_1.PortfolioGroup,
    "PortfolioHolding": portfolioHolding_1.PortfolioHolding,
    "PortfolioProperties": portfolioProperties_1.PortfolioProperties,
    "PortfolioReconciliationRequest": portfolioReconciliationRequest_1.PortfolioReconciliationRequest,
    "PortfolioSearchResult": portfolioSearchResult_1.PortfolioSearchResult,
    "PortfoliosReconciliationRequest": portfoliosReconciliationRequest_1.PortfoliosReconciliationRequest,
    "PricingContext": pricingContext_1.PricingContext,
    "PricingOptions": pricingOptions_1.PricingOptions,
    "ProcessedCommand": processedCommand_1.ProcessedCommand,
    "Property": property_1.Property,
    "PropertyDefinition": propertyDefinition_1.PropertyDefinition,
    "PropertyFilter": propertyFilter_1.PropertyFilter,
    "PropertySchema": propertySchema_1.PropertySchema,
    "PropertyValue": propertyValue_1.PropertyValue,
    "Quote": quote_1.Quote,
    "QuoteId": quoteId_1.QuoteId,
    "RealisedGainLoss": realisedGainLoss_1.RealisedGainLoss,
    "ReconciliationBreak": reconciliationBreak_1.ReconciliationBreak,
    "ReferencePortfolioConstituent": referencePortfolioConstituent_1.ReferencePortfolioConstituent,
    "ReferencePortfolioConstituentRequest": referencePortfolioConstituentRequest_1.ReferencePortfolioConstituentRequest,
    "ResourceId": resourceId_1.ResourceId,
    "ResourceListOfAnalyticStoreKey": resourceListOfAnalyticStoreKey_1.ResourceListOfAnalyticStoreKey,
    "ResourceListOfConstituentsAdjustmentHeader": resourceListOfConstituentsAdjustmentHeader_1.ResourceListOfConstituentsAdjustmentHeader,
    "ResourceListOfCorporateAction": resourceListOfCorporateAction_1.ResourceListOfCorporateAction,
    "ResourceListOfCorporateActionSource": resourceListOfCorporateActionSource_1.ResourceListOfCorporateActionSource,
    "ResourceListOfDataType": resourceListOfDataType_1.ResourceListOfDataType,
    "ResourceListOfHoldingsAdjustmentHeader": resourceListOfHoldingsAdjustmentHeader_1.ResourceListOfHoldingsAdjustmentHeader,
    "ResourceListOfIUnitDefinitionDto": resourceListOfIUnitDefinitionDto_1.ResourceListOfIUnitDefinitionDto,
    "ResourceListOfInstrument": resourceListOfInstrument_1.ResourceListOfInstrument,
    "ResourceListOfPortfolio": resourceListOfPortfolio_1.ResourceListOfPortfolio,
    "ResourceListOfPortfolioGroup": resourceListOfPortfolioGroup_1.ResourceListOfPortfolioGroup,
    "ResourceListOfPortfolioSearchResult": resourceListOfPortfolioSearchResult_1.ResourceListOfPortfolioSearchResult,
    "ResourceListOfProcessedCommand": resourceListOfProcessedCommand_1.ResourceListOfProcessedCommand,
    "ResourceListOfPropertyDefinition": resourceListOfPropertyDefinition_1.ResourceListOfPropertyDefinition,
    "ResourceListOfReconciliationBreak": resourceListOfReconciliationBreak_1.ResourceListOfReconciliationBreak,
    "ResourceListOfScopeDefinition": resourceListOfScopeDefinition_1.ResourceListOfScopeDefinition,
    "ResourceListOfString": resourceListOfString_1.ResourceListOfString,
    "ResourceListOfTransactionConfigurationData": resourceListOfTransactionConfigurationData_1.ResourceListOfTransactionConfigurationData,
    "ResourceListOfValueType": resourceListOfValueType_1.ResourceListOfValueType,
    "ResultDataSchema": resultDataSchema_1.ResultDataSchema,
    "Results": results_1.Results,
    "Schema": schema_1.Schema,
    "ScopeDefinition": scopeDefinition_1.ScopeDefinition,
    "Stream": stream_1.Stream,
    "TargetTaxLot": targetTaxLot_1.TargetTaxLot,
    "TargetTaxLotRequest": targetTaxLotRequest_1.TargetTaxLotRequest,
    "Transaction": transaction_1.Transaction,
    "TransactionConfigurationData": transactionConfigurationData_1.TransactionConfigurationData,
    "TransactionConfigurationDataRequest": transactionConfigurationDataRequest_1.TransactionConfigurationDataRequest,
    "TransactionConfigurationMovementData": transactionConfigurationMovementData_1.TransactionConfigurationMovementData,
    "TransactionConfigurationMovementDataRequest": transactionConfigurationMovementDataRequest_1.TransactionConfigurationMovementDataRequest,
    "TransactionConfigurationTypeAlias": transactionConfigurationTypeAlias_1.TransactionConfigurationTypeAlias,
    "TransactionPrice": transactionPrice_1.TransactionPrice,
    "TransactionPropertyMapping": transactionPropertyMapping_1.TransactionPropertyMapping,
    "TransactionPropertyMappingRequest": transactionPropertyMappingRequest_1.TransactionPropertyMappingRequest,
    "TransactionQueryParameters": transactionQueryParameters_1.TransactionQueryParameters,
    "TransactionRequest": transactionRequest_1.TransactionRequest,
    "UpdateDataTypeRequest": updateDataTypeRequest_1.UpdateDataTypeRequest,
    "UpdateInstrumentIdentifierRequest": updateInstrumentIdentifierRequest_1.UpdateInstrumentIdentifierRequest,
    "UpdatePortfolioGroupRequest": updatePortfolioGroupRequest_1.UpdatePortfolioGroupRequest,
    "UpdatePortfolioRequest": updatePortfolioRequest_1.UpdatePortfolioRequest,
    "UpdatePropertyDefinitionRequest": updatePropertyDefinitionRequest_1.UpdatePropertyDefinitionRequest,
    "UpsertCorporateActionsResponse": upsertCorporateActionsResponse_1.UpsertCorporateActionsResponse,
    "UpsertInstrumentPropertiesResponse": upsertInstrumentPropertiesResponse_1.UpsertInstrumentPropertiesResponse,
    "UpsertInstrumentPropertyRequest": upsertInstrumentPropertyRequest_1.UpsertInstrumentPropertyRequest,
    "UpsertInstrumentsResponse": upsertInstrumentsResponse_1.UpsertInstrumentsResponse,
    "UpsertPortfolioExecutionsResponse": upsertPortfolioExecutionsResponse_1.UpsertPortfolioExecutionsResponse,
    "UpsertPortfolioTransactionsResponse": upsertPortfolioTransactionsResponse_1.UpsertPortfolioTransactionsResponse,
    "UpsertQuoteRequest": upsertQuoteRequest_1.UpsertQuoteRequest,
    "UpsertQuotesResponse": upsertQuotesResponse_1.UpsertQuotesResponse,
    "UpsertReferencePortfolioConstituentsRequest": upsertReferencePortfolioConstituentsRequest_1.UpsertReferencePortfolioConstituentsRequest,
    "UpsertReferencePortfolioConstituentsResponse": upsertReferencePortfolioConstituentsResponse_1.UpsertReferencePortfolioConstituentsResponse,
    "User": user_1.User,
    "ValuationReconciliationRequest": valuationReconciliationRequest_1.ValuationReconciliationRequest,
    "ValuationsReconciliationRequest": valuationsReconciliationRequest_1.ValuationsReconciliationRequest,
    "VendorModelRule": vendorModelRule_1.VendorModelRule,
    "Version": version_1.Version,
    "VersionSummaryDto": versionSummaryDto_1.VersionSummaryDto,
    "VersionedResourceListOfOutputTransaction": versionedResourceListOfOutputTransaction_1.VersionedResourceListOfOutputTransaction,
    "VersionedResourceListOfPortfolioHolding": versionedResourceListOfPortfolioHolding_1.VersionedResourceListOfPortfolioHolding,
    "VersionedResourceListOfTransaction": versionedResourceListOfTransaction_1.VersionedResourceListOfTransaction,
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
