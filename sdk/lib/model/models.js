"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./accessControlledAction"));
__export(require("./accessControlledResource"));
__export(require("./actionId"));
__export(require("./adjustHolding"));
__export(require("./adjustHoldingRequest"));
__export(require("./aggregateSpec"));
__export(require("./aggregationContext"));
__export(require("./aggregationOptions"));
__export(require("./aggregationRequest"));
__export(require("./aggregationResponseNodeOfDictionaryOfStringToObject"));
__export(require("./analyticStore"));
__export(require("./analyticStoreKey"));
__export(require("./annulQuotesResponse"));
__export(require("./annulStructuredDataResponse"));
__export(require("./change"));
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
__export(require("./createCorporateActionSourceRequest"));
__export(require("./createCutLabelDefinitionRequest"));
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
__export(require("./cutLabelDefinition"));
__export(require("./cutLocalTime"));
__export(require("./dataType"));
__export(require("./deleteInstrumentPropertiesResponse"));
__export(require("./deleteInstrumentResponse"));
__export(require("./deletedEntityResponse"));
__export(require("./errorDetail"));
__export(require("./executionRequest"));
__export(require("./expandedGroup"));
__export(require("./fieldSchema"));
__export(require("./fileResponse"));
__export(require("./getInstrumentsResponse"));
__export(require("./getQuotesResponse"));
__export(require("./getReferencePortfolioConstituentsResponse"));
__export(require("./getStructuredMarketDataResponse"));
__export(require("./holdingAdjustment"));
__export(require("./holdingsAdjustment"));
__export(require("./holdingsAdjustmentHeader"));
__export(require("./iUnitDefinitionDto"));
__export(require("./idSelectorDefinition"));
__export(require("./identifierPartSchema"));
__export(require("./instrument"));
__export(require("./instrumentAnalytic"));
__export(require("./instrumentDefinition"));
__export(require("./instrumentEconomicDefinition"));
__export(require("./instrumentIdTypeDescriptor"));
__export(require("./instrumentIdValue"));
__export(require("./instrumentMatch"));
__export(require("./instrumentSearchProperty"));
__export(require("./link"));
__export(require("./listAggregationResponse"));
__export(require("./lusidProblemDetails"));
__export(require("./lusidValidationProblemDetails"));
__export(require("./marketContext"));
__export(require("./marketContextSuppliers"));
__export(require("./marketDataKeyRule"));
__export(require("./marketOptions"));
__export(require("./metricValue"));
__export(require("./modelSelection"));
__export(require("./nestedAggregationResponse"));
__export(require("./orderBySpec"));
__export(require("./outputTransaction"));
__export(require("./pagedResourceListOfPortfolioSearchResult"));
__export(require("./pagedResourceListOfPropertyDefinition"));
__export(require("./perpetualProperty"));
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
__export(require("./quoteSeriesId"));
__export(require("./realisedGainLoss"));
__export(require("./reconciliationBreak"));
__export(require("./referencePortfolioConstituent"));
__export(require("./referencePortfolioConstituentRequest"));
__export(require("./resourceId"));
__export(require("./resourceListOfAccessControlledResource"));
__export(require("./resourceListOfAnalyticStoreKey"));
__export(require("./resourceListOfChange"));
__export(require("./resourceListOfConstituentsAdjustmentHeader"));
__export(require("./resourceListOfCorporateAction"));
__export(require("./resourceListOfCorporateActionSource"));
__export(require("./resourceListOfCutLabelDefinition"));
__export(require("./resourceListOfDataType"));
__export(require("./resourceListOfHoldingsAdjustmentHeader"));
__export(require("./resourceListOfIUnitDefinitionDto"));
__export(require("./resourceListOfInstrument"));
__export(require("./resourceListOfInstrumentIdTypeDescriptor"));
__export(require("./resourceListOfPortfolio"));
__export(require("./resourceListOfPortfolioGroup"));
__export(require("./resourceListOfPortfolioSearchResult"));
__export(require("./resourceListOfProcessedCommand"));
__export(require("./resourceListOfPropertyDefinition"));
__export(require("./resourceListOfQuote"));
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
__export(require("./structuredMarketData"));
__export(require("./structuredMarketDataId"));
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
__export(require("./updateCutLabelDefinitionRequest"));
__export(require("./updateDataTypeRequest"));
__export(require("./updateInstrumentIdentifierRequest"));
__export(require("./updatePortfolioGroupRequest"));
__export(require("./updatePortfolioRequest"));
__export(require("./updatePropertyDefinitionRequest"));
__export(require("./upsertCorporateActionRequest"));
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
__export(require("./upsertStructuredDataResponse"));
__export(require("./upsertStructuredMarketDataRequest"));
__export(require("./upsertTransactionPropertiesResponse"));
__export(require("./user"));
__export(require("./valuationReconciliationRequest"));
__export(require("./valuationsReconciliationRequest"));
__export(require("./vendorModelRule"));
__export(require("./version"));
__export(require("./versionSummaryDto"));
__export(require("./versionedResourceListOfOutputTransaction"));
__export(require("./versionedResourceListOfPortfolioHolding"));
__export(require("./versionedResourceListOfTransaction"));
var accessControlledAction_1 = require("./accessControlledAction");
var accessControlledResource_1 = require("./accessControlledResource");
var actionId_1 = require("./actionId");
var adjustHolding_1 = require("./adjustHolding");
var adjustHoldingRequest_1 = require("./adjustHoldingRequest");
var aggregateSpec_1 = require("./aggregateSpec");
var aggregationContext_1 = require("./aggregationContext");
var aggregationOptions_1 = require("./aggregationOptions");
var aggregationRequest_1 = require("./aggregationRequest");
var aggregationResponseNodeOfDictionaryOfStringToObject_1 = require("./aggregationResponseNodeOfDictionaryOfStringToObject");
var analyticStore_1 = require("./analyticStore");
var analyticStoreKey_1 = require("./analyticStoreKey");
var annulQuotesResponse_1 = require("./annulQuotesResponse");
var annulStructuredDataResponse_1 = require("./annulStructuredDataResponse");
var change_1 = require("./change");
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
var createCorporateActionSourceRequest_1 = require("./createCorporateActionSourceRequest");
var createCutLabelDefinitionRequest_1 = require("./createCutLabelDefinitionRequest");
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
var cutLabelDefinition_1 = require("./cutLabelDefinition");
var cutLocalTime_1 = require("./cutLocalTime");
var dataType_1 = require("./dataType");
var deleteInstrumentPropertiesResponse_1 = require("./deleteInstrumentPropertiesResponse");
var deleteInstrumentResponse_1 = require("./deleteInstrumentResponse");
var deletedEntityResponse_1 = require("./deletedEntityResponse");
var errorDetail_1 = require("./errorDetail");
var executionRequest_1 = require("./executionRequest");
var expandedGroup_1 = require("./expandedGroup");
var fieldSchema_1 = require("./fieldSchema");
var fileResponse_1 = require("./fileResponse");
var getInstrumentsResponse_1 = require("./getInstrumentsResponse");
var getQuotesResponse_1 = require("./getQuotesResponse");
var getReferencePortfolioConstituentsResponse_1 = require("./getReferencePortfolioConstituentsResponse");
var getStructuredMarketDataResponse_1 = require("./getStructuredMarketDataResponse");
var holdingAdjustment_1 = require("./holdingAdjustment");
var holdingsAdjustment_1 = require("./holdingsAdjustment");
var holdingsAdjustmentHeader_1 = require("./holdingsAdjustmentHeader");
var iUnitDefinitionDto_1 = require("./iUnitDefinitionDto");
var idSelectorDefinition_1 = require("./idSelectorDefinition");
var identifierPartSchema_1 = require("./identifierPartSchema");
var instrument_1 = require("./instrument");
var instrumentAnalytic_1 = require("./instrumentAnalytic");
var instrumentDefinition_1 = require("./instrumentDefinition");
var instrumentEconomicDefinition_1 = require("./instrumentEconomicDefinition");
var instrumentIdTypeDescriptor_1 = require("./instrumentIdTypeDescriptor");
var instrumentIdValue_1 = require("./instrumentIdValue");
var instrumentMatch_1 = require("./instrumentMatch");
var instrumentSearchProperty_1 = require("./instrumentSearchProperty");
var link_1 = require("./link");
var listAggregationResponse_1 = require("./listAggregationResponse");
var lusidProblemDetails_1 = require("./lusidProblemDetails");
var lusidValidationProblemDetails_1 = require("./lusidValidationProblemDetails");
var marketContext_1 = require("./marketContext");
var marketContextSuppliers_1 = require("./marketContextSuppliers");
var marketDataKeyRule_1 = require("./marketDataKeyRule");
var marketOptions_1 = require("./marketOptions");
var metricValue_1 = require("./metricValue");
var modelSelection_1 = require("./modelSelection");
var nestedAggregationResponse_1 = require("./nestedAggregationResponse");
var orderBySpec_1 = require("./orderBySpec");
var outputTransaction_1 = require("./outputTransaction");
var pagedResourceListOfPortfolioSearchResult_1 = require("./pagedResourceListOfPortfolioSearchResult");
var pagedResourceListOfPropertyDefinition_1 = require("./pagedResourceListOfPropertyDefinition");
var perpetualProperty_1 = require("./perpetualProperty");
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
var quoteSeriesId_1 = require("./quoteSeriesId");
var realisedGainLoss_1 = require("./realisedGainLoss");
var reconciliationBreak_1 = require("./reconciliationBreak");
var referencePortfolioConstituent_1 = require("./referencePortfolioConstituent");
var referencePortfolioConstituentRequest_1 = require("./referencePortfolioConstituentRequest");
var resourceId_1 = require("./resourceId");
var resourceListOfAccessControlledResource_1 = require("./resourceListOfAccessControlledResource");
var resourceListOfAnalyticStoreKey_1 = require("./resourceListOfAnalyticStoreKey");
var resourceListOfChange_1 = require("./resourceListOfChange");
var resourceListOfConstituentsAdjustmentHeader_1 = require("./resourceListOfConstituentsAdjustmentHeader");
var resourceListOfCorporateAction_1 = require("./resourceListOfCorporateAction");
var resourceListOfCorporateActionSource_1 = require("./resourceListOfCorporateActionSource");
var resourceListOfCutLabelDefinition_1 = require("./resourceListOfCutLabelDefinition");
var resourceListOfDataType_1 = require("./resourceListOfDataType");
var resourceListOfHoldingsAdjustmentHeader_1 = require("./resourceListOfHoldingsAdjustmentHeader");
var resourceListOfIUnitDefinitionDto_1 = require("./resourceListOfIUnitDefinitionDto");
var resourceListOfInstrument_1 = require("./resourceListOfInstrument");
var resourceListOfInstrumentIdTypeDescriptor_1 = require("./resourceListOfInstrumentIdTypeDescriptor");
var resourceListOfPortfolio_1 = require("./resourceListOfPortfolio");
var resourceListOfPortfolioGroup_1 = require("./resourceListOfPortfolioGroup");
var resourceListOfPortfolioSearchResult_1 = require("./resourceListOfPortfolioSearchResult");
var resourceListOfProcessedCommand_1 = require("./resourceListOfProcessedCommand");
var resourceListOfPropertyDefinition_1 = require("./resourceListOfPropertyDefinition");
var resourceListOfQuote_1 = require("./resourceListOfQuote");
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
var structuredMarketData_1 = require("./structuredMarketData");
var structuredMarketDataId_1 = require("./structuredMarketDataId");
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
var updateCutLabelDefinitionRequest_1 = require("./updateCutLabelDefinitionRequest");
var updateDataTypeRequest_1 = require("./updateDataTypeRequest");
var updateInstrumentIdentifierRequest_1 = require("./updateInstrumentIdentifierRequest");
var updatePortfolioGroupRequest_1 = require("./updatePortfolioGroupRequest");
var updatePortfolioRequest_1 = require("./updatePortfolioRequest");
var updatePropertyDefinitionRequest_1 = require("./updatePropertyDefinitionRequest");
var upsertCorporateActionRequest_1 = require("./upsertCorporateActionRequest");
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
var upsertStructuredDataResponse_1 = require("./upsertStructuredDataResponse");
var upsertStructuredMarketDataRequest_1 = require("./upsertStructuredMarketDataRequest");
var upsertTransactionPropertiesResponse_1 = require("./upsertTransactionPropertiesResponse");
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
    "CreateResults.FormatEnum": createResults_1.CreateResults.FormatEnum,
    "CreateTransactionPortfolioRequest.AccountingMethodEnum": createTransactionPortfolioRequest_1.CreateTransactionPortfolioRequest.AccountingMethodEnum,
    "DataType.TypeValueRangeEnum": dataType_1.DataType.TypeValueRangeEnum,
    "DataType.ValueTypeEnum": dataType_1.DataType.ValueTypeEnum,
    "DataType.UnitSchemaEnum": dataType_1.DataType.UnitSchemaEnum,
    "FieldSchema.TypeEnum": fieldSchema_1.FieldSchema.TypeEnum,
    "GetReferencePortfolioConstituentsResponse.WeightTypeEnum": getReferencePortfolioConstituentsResponse_1.GetReferencePortfolioConstituentsResponse.WeightTypeEnum,
    "GetReferencePortfolioConstituentsResponse.PeriodTypeEnum": getReferencePortfolioConstituentsResponse_1.GetReferencePortfolioConstituentsResponse.PeriodTypeEnum,
    "HoldingsAdjustment.UnmatchedHoldingMethodEnum": holdingsAdjustment_1.HoldingsAdjustment.UnmatchedHoldingMethodEnum,
    "HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum": holdingsAdjustmentHeader_1.HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum,
    "IUnitDefinitionDto.SchemaEnum": iUnitDefinitionDto_1.IUnitDefinitionDto.SchemaEnum,
    "Instrument.StateEnum": instrument_1.Instrument.StateEnum,
    "Link.RelationEnum": link_1.Link.RelationEnum,
    "Link.MethodEnum": link_1.Link.MethodEnum,
    "MarketContextSuppliers.CommodityEnum": marketContextSuppliers_1.MarketContextSuppliers.CommodityEnum,
    "MarketContextSuppliers.CreditEnum": marketContextSuppliers_1.MarketContextSuppliers.CreditEnum,
    "MarketContextSuppliers.EquityEnum": marketContextSuppliers_1.MarketContextSuppliers.EquityEnum,
    "MarketContextSuppliers.FxEnum": marketContextSuppliers_1.MarketContextSuppliers.FxEnum,
    "MarketContextSuppliers.RatesEnum": marketContextSuppliers_1.MarketContextSuppliers.RatesEnum,
    "MarketDataKeyRule.SupplierEnum": marketDataKeyRule_1.MarketDataKeyRule.SupplierEnum,
    "MarketDataKeyRule.QuoteTypeEnum": marketDataKeyRule_1.MarketDataKeyRule.QuoteTypeEnum,
    "MarketOptions.DefaultSupplierEnum": marketOptions_1.MarketOptions.DefaultSupplierEnum,
    "MarketOptions.DefaultInstrumentCodeTypeEnum": marketOptions_1.MarketOptions.DefaultInstrumentCodeTypeEnum,
    "ModelSelection.LibraryEnum": modelSelection_1.ModelSelection.LibraryEnum,
    "ModelSelection.ModelEnum": modelSelection_1.ModelSelection.ModelEnum,
    "OrderBySpec.SortOrderEnum": orderBySpec_1.OrderBySpec.SortOrderEnum,
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
    "QuoteSeriesId.InstrumentIdTypeEnum": quoteSeriesId_1.QuoteSeriesId.InstrumentIdTypeEnum,
    "QuoteSeriesId.QuoteTypeEnum": quoteSeriesId_1.QuoteSeriesId.QuoteTypeEnum,
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
    "UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum": upsertReferencePortfolioConstituentsRequest_1.UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum,
    "UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum": upsertReferencePortfolioConstituentsRequest_1.UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum,
    "VendorModelRule.SupplierEnum": vendorModelRule_1.VendorModelRule.SupplierEnum,
};
var typeMap = {
    "AccessControlledAction": accessControlledAction_1.AccessControlledAction,
    "AccessControlledResource": accessControlledResource_1.AccessControlledResource,
    "ActionId": actionId_1.ActionId,
    "AdjustHolding": adjustHolding_1.AdjustHolding,
    "AdjustHoldingRequest": adjustHoldingRequest_1.AdjustHoldingRequest,
    "AggregateSpec": aggregateSpec_1.AggregateSpec,
    "AggregationContext": aggregationContext_1.AggregationContext,
    "AggregationOptions": aggregationOptions_1.AggregationOptions,
    "AggregationRequest": aggregationRequest_1.AggregationRequest,
    "AggregationResponseNodeOfDictionaryOfStringToObject": aggregationResponseNodeOfDictionaryOfStringToObject_1.AggregationResponseNodeOfDictionaryOfStringToObject,
    "AnalyticStore": analyticStore_1.AnalyticStore,
    "AnalyticStoreKey": analyticStoreKey_1.AnalyticStoreKey,
    "AnnulQuotesResponse": annulQuotesResponse_1.AnnulQuotesResponse,
    "AnnulStructuredDataResponse": annulStructuredDataResponse_1.AnnulStructuredDataResponse,
    "Change": change_1.Change,
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
    "CreateCorporateActionSourceRequest": createCorporateActionSourceRequest_1.CreateCorporateActionSourceRequest,
    "CreateCutLabelDefinitionRequest": createCutLabelDefinitionRequest_1.CreateCutLabelDefinitionRequest,
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
    "CutLabelDefinition": cutLabelDefinition_1.CutLabelDefinition,
    "CutLocalTime": cutLocalTime_1.CutLocalTime,
    "DataType": dataType_1.DataType,
    "DeleteInstrumentPropertiesResponse": deleteInstrumentPropertiesResponse_1.DeleteInstrumentPropertiesResponse,
    "DeleteInstrumentResponse": deleteInstrumentResponse_1.DeleteInstrumentResponse,
    "DeletedEntityResponse": deletedEntityResponse_1.DeletedEntityResponse,
    "ErrorDetail": errorDetail_1.ErrorDetail,
    "ExecutionRequest": executionRequest_1.ExecutionRequest,
    "ExpandedGroup": expandedGroup_1.ExpandedGroup,
    "FieldSchema": fieldSchema_1.FieldSchema,
    "FileResponse": fileResponse_1.FileResponse,
    "GetInstrumentsResponse": getInstrumentsResponse_1.GetInstrumentsResponse,
    "GetQuotesResponse": getQuotesResponse_1.GetQuotesResponse,
    "GetReferencePortfolioConstituentsResponse": getReferencePortfolioConstituentsResponse_1.GetReferencePortfolioConstituentsResponse,
    "GetStructuredMarketDataResponse": getStructuredMarketDataResponse_1.GetStructuredMarketDataResponse,
    "HoldingAdjustment": holdingAdjustment_1.HoldingAdjustment,
    "HoldingsAdjustment": holdingsAdjustment_1.HoldingsAdjustment,
    "HoldingsAdjustmentHeader": holdingsAdjustmentHeader_1.HoldingsAdjustmentHeader,
    "IUnitDefinitionDto": iUnitDefinitionDto_1.IUnitDefinitionDto,
    "IdSelectorDefinition": idSelectorDefinition_1.IdSelectorDefinition,
    "IdentifierPartSchema": identifierPartSchema_1.IdentifierPartSchema,
    "Instrument": instrument_1.Instrument,
    "InstrumentAnalytic": instrumentAnalytic_1.InstrumentAnalytic,
    "InstrumentDefinition": instrumentDefinition_1.InstrumentDefinition,
    "InstrumentEconomicDefinition": instrumentEconomicDefinition_1.InstrumentEconomicDefinition,
    "InstrumentIdTypeDescriptor": instrumentIdTypeDescriptor_1.InstrumentIdTypeDescriptor,
    "InstrumentIdValue": instrumentIdValue_1.InstrumentIdValue,
    "InstrumentMatch": instrumentMatch_1.InstrumentMatch,
    "InstrumentSearchProperty": instrumentSearchProperty_1.InstrumentSearchProperty,
    "Link": link_1.Link,
    "ListAggregationResponse": listAggregationResponse_1.ListAggregationResponse,
    "LusidProblemDetails": lusidProblemDetails_1.LusidProblemDetails,
    "LusidValidationProblemDetails": lusidValidationProblemDetails_1.LusidValidationProblemDetails,
    "MarketContext": marketContext_1.MarketContext,
    "MarketContextSuppliers": marketContextSuppliers_1.MarketContextSuppliers,
    "MarketDataKeyRule": marketDataKeyRule_1.MarketDataKeyRule,
    "MarketOptions": marketOptions_1.MarketOptions,
    "MetricValue": metricValue_1.MetricValue,
    "ModelSelection": modelSelection_1.ModelSelection,
    "NestedAggregationResponse": nestedAggregationResponse_1.NestedAggregationResponse,
    "OrderBySpec": orderBySpec_1.OrderBySpec,
    "OutputTransaction": outputTransaction_1.OutputTransaction,
    "PagedResourceListOfPortfolioSearchResult": pagedResourceListOfPortfolioSearchResult_1.PagedResourceListOfPortfolioSearchResult,
    "PagedResourceListOfPropertyDefinition": pagedResourceListOfPropertyDefinition_1.PagedResourceListOfPropertyDefinition,
    "PerpetualProperty": perpetualProperty_1.PerpetualProperty,
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
    "QuoteSeriesId": quoteSeriesId_1.QuoteSeriesId,
    "RealisedGainLoss": realisedGainLoss_1.RealisedGainLoss,
    "ReconciliationBreak": reconciliationBreak_1.ReconciliationBreak,
    "ReferencePortfolioConstituent": referencePortfolioConstituent_1.ReferencePortfolioConstituent,
    "ReferencePortfolioConstituentRequest": referencePortfolioConstituentRequest_1.ReferencePortfolioConstituentRequest,
    "ResourceId": resourceId_1.ResourceId,
    "ResourceListOfAccessControlledResource": resourceListOfAccessControlledResource_1.ResourceListOfAccessControlledResource,
    "ResourceListOfAnalyticStoreKey": resourceListOfAnalyticStoreKey_1.ResourceListOfAnalyticStoreKey,
    "ResourceListOfChange": resourceListOfChange_1.ResourceListOfChange,
    "ResourceListOfConstituentsAdjustmentHeader": resourceListOfConstituentsAdjustmentHeader_1.ResourceListOfConstituentsAdjustmentHeader,
    "ResourceListOfCorporateAction": resourceListOfCorporateAction_1.ResourceListOfCorporateAction,
    "ResourceListOfCorporateActionSource": resourceListOfCorporateActionSource_1.ResourceListOfCorporateActionSource,
    "ResourceListOfCutLabelDefinition": resourceListOfCutLabelDefinition_1.ResourceListOfCutLabelDefinition,
    "ResourceListOfDataType": resourceListOfDataType_1.ResourceListOfDataType,
    "ResourceListOfHoldingsAdjustmentHeader": resourceListOfHoldingsAdjustmentHeader_1.ResourceListOfHoldingsAdjustmentHeader,
    "ResourceListOfIUnitDefinitionDto": resourceListOfIUnitDefinitionDto_1.ResourceListOfIUnitDefinitionDto,
    "ResourceListOfInstrument": resourceListOfInstrument_1.ResourceListOfInstrument,
    "ResourceListOfInstrumentIdTypeDescriptor": resourceListOfInstrumentIdTypeDescriptor_1.ResourceListOfInstrumentIdTypeDescriptor,
    "ResourceListOfPortfolio": resourceListOfPortfolio_1.ResourceListOfPortfolio,
    "ResourceListOfPortfolioGroup": resourceListOfPortfolioGroup_1.ResourceListOfPortfolioGroup,
    "ResourceListOfPortfolioSearchResult": resourceListOfPortfolioSearchResult_1.ResourceListOfPortfolioSearchResult,
    "ResourceListOfProcessedCommand": resourceListOfProcessedCommand_1.ResourceListOfProcessedCommand,
    "ResourceListOfPropertyDefinition": resourceListOfPropertyDefinition_1.ResourceListOfPropertyDefinition,
    "ResourceListOfQuote": resourceListOfQuote_1.ResourceListOfQuote,
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
    "StructuredMarketData": structuredMarketData_1.StructuredMarketData,
    "StructuredMarketDataId": structuredMarketDataId_1.StructuredMarketDataId,
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
    "UpdateCutLabelDefinitionRequest": updateCutLabelDefinitionRequest_1.UpdateCutLabelDefinitionRequest,
    "UpdateDataTypeRequest": updateDataTypeRequest_1.UpdateDataTypeRequest,
    "UpdateInstrumentIdentifierRequest": updateInstrumentIdentifierRequest_1.UpdateInstrumentIdentifierRequest,
    "UpdatePortfolioGroupRequest": updatePortfolioGroupRequest_1.UpdatePortfolioGroupRequest,
    "UpdatePortfolioRequest": updatePortfolioRequest_1.UpdatePortfolioRequest,
    "UpdatePropertyDefinitionRequest": updatePropertyDefinitionRequest_1.UpdatePropertyDefinitionRequest,
    "UpsertCorporateActionRequest": upsertCorporateActionRequest_1.UpsertCorporateActionRequest,
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
    "UpsertStructuredDataResponse": upsertStructuredDataResponse_1.UpsertStructuredDataResponse,
    "UpsertStructuredMarketDataRequest": upsertStructuredMarketDataRequest_1.UpsertStructuredMarketDataRequest,
    "UpsertTransactionPropertiesResponse": upsertTransactionPropertiesResponse_1.UpsertTransactionPropertiesResponse,
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
