export * from './accessControlledAction';
export * from './accessControlledResource';
export * from './actionId';
export * from './adjustHolding';
export * from './adjustHoldingRequest';
export * from './aggregateSpec';
export * from './aggregationContext';
export * from './aggregationOptions';
export * from './aggregationRequest';
export * from './aggregationResponseNodeOfDictionaryOfStringToObject';
export * from './analyticStore';
export * from './analyticStoreKey';
export * from './annulQuotesResponse';
export * from './annulStructuredDataResponse';
export * from './change';
export * from './completePortfolio';
export * from './configurationRecipe';
export * from './constituentsAdjustmentHeader';
export * from './corporateAction';
export * from './corporateActionSource';
export * from './corporateActionTransition';
export * from './corporateActionTransitionComponent';
export * from './corporateActionTransitionComponentRequest';
export * from './corporateActionTransitionRequest';
export * from './createAnalyticStoreRequest';
export * from './createCorporateActionSourceRequest';
export * from './createCutLabelDefinitionRequest';
export * from './createDataTypeRequest';
export * from './createDerivedTransactionPortfolioRequest';
export * from './createPortfolioDetails';
export * from './createPortfolioGroupRequest';
export * from './createPropertyDefinitionRequest';
export * from './createReferencePortfolioRequest';
export * from './createResults';
export * from './createTransactionPortfolioRequest';
export * from './createUnitDefinition';
export * from './currencyAndAmount';
export * from './cutLabelDefinition';
export * from './cutLocalTime';
export * from './dataType';
export * from './deleteInstrumentPropertiesResponse';
export * from './deleteInstrumentResponse';
export * from './deletedEntityResponse';
export * from './errorDetail';
export * from './executionRequest';
export * from './expandedGroup';
export * from './fieldSchema';
export * from './fileResponse';
export * from './getInstrumentsResponse';
export * from './getQuotesResponse';
export * from './getReferencePortfolioConstituentsResponse';
export * from './getStructuredMarketDataResponse';
export * from './holdingAdjustment';
export * from './holdingsAdjustment';
export * from './holdingsAdjustmentHeader';
export * from './iUnitDefinitionDto';
export * from './idSelectorDefinition';
export * from './identifierPartSchema';
export * from './instrument';
export * from './instrumentAnalytic';
export * from './instrumentDefinition';
export * from './instrumentEconomicDefinition';
export * from './instrumentIdTypeDescriptor';
export * from './instrumentIdValue';
export * from './instrumentMatch';
export * from './instrumentSearchProperty';
export * from './link';
export * from './listAggregationResponse';
export * from './lusidProblemDetails';
export * from './lusidValidationProblemDetails';
export * from './marketContext';
export * from './marketContextSuppliers';
export * from './marketDataKeyRule';
export * from './marketOptions';
export * from './metricValue';
export * from './modelSelection';
export * from './nestedAggregationResponse';
export * from './orderBySpec';
export * from './outputTransaction';
export * from './pagedResourceListOfPortfolioSearchResult';
export * from './pagedResourceListOfPropertyDefinition';
export * from './perpetualProperty';
export * from './portfolio';
export * from './portfolioDetails';
export * from './portfolioGroup';
export * from './portfolioHolding';
export * from './portfolioProperties';
export * from './portfolioReconciliationRequest';
export * from './portfolioSearchResult';
export * from './portfoliosReconciliationRequest';
export * from './pricingContext';
export * from './pricingOptions';
export * from './processedCommand';
export * from './property';
export * from './propertyDefinition';
export * from './propertyFilter';
export * from './propertySchema';
export * from './propertyValue';
export * from './quote';
export * from './quoteId';
export * from './quoteSeriesId';
export * from './realisedGainLoss';
export * from './reconciliationBreak';
export * from './referencePortfolioConstituent';
export * from './referencePortfolioConstituentRequest';
export * from './resourceId';
export * from './resourceListOfAccessControlledResource';
export * from './resourceListOfAnalyticStoreKey';
export * from './resourceListOfChange';
export * from './resourceListOfConstituentsAdjustmentHeader';
export * from './resourceListOfCorporateAction';
export * from './resourceListOfCorporateActionSource';
export * from './resourceListOfCutLabelDefinition';
export * from './resourceListOfDataType';
export * from './resourceListOfHoldingsAdjustmentHeader';
export * from './resourceListOfIUnitDefinitionDto';
export * from './resourceListOfInstrument';
export * from './resourceListOfInstrumentIdTypeDescriptor';
export * from './resourceListOfPortfolio';
export * from './resourceListOfPortfolioGroup';
export * from './resourceListOfPortfolioSearchResult';
export * from './resourceListOfProcessedCommand';
export * from './resourceListOfPropertyDefinition';
export * from './resourceListOfQuote';
export * from './resourceListOfReconciliationBreak';
export * from './resourceListOfScopeDefinition';
export * from './resourceListOfString';
export * from './resourceListOfTransactionConfigurationData';
export * from './resourceListOfValueType';
export * from './resultDataSchema';
export * from './results';
export * from './schema';
export * from './scopeDefinition';
export * from './stream';
export * from './structuredMarketData';
export * from './structuredMarketDataId';
export * from './targetTaxLot';
export * from './targetTaxLotRequest';
export * from './transaction';
export * from './transactionConfigurationData';
export * from './transactionConfigurationDataRequest';
export * from './transactionConfigurationMovementData';
export * from './transactionConfigurationMovementDataRequest';
export * from './transactionConfigurationTypeAlias';
export * from './transactionPrice';
export * from './transactionPropertyMapping';
export * from './transactionPropertyMappingRequest';
export * from './transactionQueryParameters';
export * from './transactionRequest';
export * from './updateCutLabelDefinitionRequest';
export * from './updateDataTypeRequest';
export * from './updateInstrumentIdentifierRequest';
export * from './updatePortfolioGroupRequest';
export * from './updatePortfolioRequest';
export * from './updatePropertyDefinitionRequest';
export * from './upsertCorporateActionRequest';
export * from './upsertCorporateActionsResponse';
export * from './upsertInstrumentPropertiesResponse';
export * from './upsertInstrumentPropertyRequest';
export * from './upsertInstrumentsResponse';
export * from './upsertPortfolioExecutionsResponse';
export * from './upsertPortfolioTransactionsResponse';
export * from './upsertQuoteRequest';
export * from './upsertQuotesResponse';
export * from './upsertReferencePortfolioConstituentsRequest';
export * from './upsertReferencePortfolioConstituentsResponse';
export * from './upsertStructuredDataResponse';
export * from './upsertStructuredMarketDataRequest';
export * from './upsertTransactionPropertiesResponse';
export * from './user';
export * from './valuationReconciliationRequest';
export * from './valuationsReconciliationRequest';
export * from './vendorModelRule';
export * from './version';
export * from './versionSummaryDto';
export * from './versionedResourceListOfOutputTransaction';
export * from './versionedResourceListOfPortfolioHolding';
export * from './versionedResourceListOfTransaction';

import localVarRequest = require('request');

import { AccessControlledAction } from './accessControlledAction';
import { AccessControlledResource } from './accessControlledResource';
import { ActionId } from './actionId';
import { AdjustHolding } from './adjustHolding';
import { AdjustHoldingRequest } from './adjustHoldingRequest';
import { AggregateSpec } from './aggregateSpec';
import { AggregationContext } from './aggregationContext';
import { AggregationOptions } from './aggregationOptions';
import { AggregationRequest } from './aggregationRequest';
import { AggregationResponseNodeOfDictionaryOfStringToObject } from './aggregationResponseNodeOfDictionaryOfStringToObject';
import { AnalyticStore } from './analyticStore';
import { AnalyticStoreKey } from './analyticStoreKey';
import { AnnulQuotesResponse } from './annulQuotesResponse';
import { AnnulStructuredDataResponse } from './annulStructuredDataResponse';
import { Change } from './change';
import { CompletePortfolio } from './completePortfolio';
import { ConfigurationRecipe } from './configurationRecipe';
import { ConstituentsAdjustmentHeader } from './constituentsAdjustmentHeader';
import { CorporateAction } from './corporateAction';
import { CorporateActionSource } from './corporateActionSource';
import { CorporateActionTransition } from './corporateActionTransition';
import { CorporateActionTransitionComponent } from './corporateActionTransitionComponent';
import { CorporateActionTransitionComponentRequest } from './corporateActionTransitionComponentRequest';
import { CorporateActionTransitionRequest } from './corporateActionTransitionRequest';
import { CreateAnalyticStoreRequest } from './createAnalyticStoreRequest';
import { CreateCorporateActionSourceRequest } from './createCorporateActionSourceRequest';
import { CreateCutLabelDefinitionRequest } from './createCutLabelDefinitionRequest';
import { CreateDataTypeRequest } from './createDataTypeRequest';
import { CreateDerivedTransactionPortfolioRequest } from './createDerivedTransactionPortfolioRequest';
import { CreatePortfolioDetails } from './createPortfolioDetails';
import { CreatePortfolioGroupRequest } from './createPortfolioGroupRequest';
import { CreatePropertyDefinitionRequest } from './createPropertyDefinitionRequest';
import { CreateReferencePortfolioRequest } from './createReferencePortfolioRequest';
import { CreateResults } from './createResults';
import { CreateTransactionPortfolioRequest } from './createTransactionPortfolioRequest';
import { CreateUnitDefinition } from './createUnitDefinition';
import { CurrencyAndAmount } from './currencyAndAmount';
import { CutLabelDefinition } from './cutLabelDefinition';
import { CutLocalTime } from './cutLocalTime';
import { DataType } from './dataType';
import { DeleteInstrumentPropertiesResponse } from './deleteInstrumentPropertiesResponse';
import { DeleteInstrumentResponse } from './deleteInstrumentResponse';
import { DeletedEntityResponse } from './deletedEntityResponse';
import { ErrorDetail } from './errorDetail';
import { ExecutionRequest } from './executionRequest';
import { ExpandedGroup } from './expandedGroup';
import { FieldSchema } from './fieldSchema';
import { FileResponse } from './fileResponse';
import { GetInstrumentsResponse } from './getInstrumentsResponse';
import { GetQuotesResponse } from './getQuotesResponse';
import { GetReferencePortfolioConstituentsResponse } from './getReferencePortfolioConstituentsResponse';
import { GetStructuredMarketDataResponse } from './getStructuredMarketDataResponse';
import { HoldingAdjustment } from './holdingAdjustment';
import { HoldingsAdjustment } from './holdingsAdjustment';
import { HoldingsAdjustmentHeader } from './holdingsAdjustmentHeader';
import { IUnitDefinitionDto } from './iUnitDefinitionDto';
import { IdSelectorDefinition } from './idSelectorDefinition';
import { IdentifierPartSchema } from './identifierPartSchema';
import { Instrument } from './instrument';
import { InstrumentAnalytic } from './instrumentAnalytic';
import { InstrumentDefinition } from './instrumentDefinition';
import { InstrumentEconomicDefinition } from './instrumentEconomicDefinition';
import { InstrumentIdTypeDescriptor } from './instrumentIdTypeDescriptor';
import { InstrumentIdValue } from './instrumentIdValue';
import { InstrumentMatch } from './instrumentMatch';
import { InstrumentSearchProperty } from './instrumentSearchProperty';
import { Link } from './link';
import { ListAggregationResponse } from './listAggregationResponse';
import { LusidProblemDetails } from './lusidProblemDetails';
import { LusidValidationProblemDetails } from './lusidValidationProblemDetails';
import { MarketContext } from './marketContext';
import { MarketContextSuppliers } from './marketContextSuppliers';
import { MarketDataKeyRule } from './marketDataKeyRule';
import { MarketOptions } from './marketOptions';
import { MetricValue } from './metricValue';
import { ModelSelection } from './modelSelection';
import { NestedAggregationResponse } from './nestedAggregationResponse';
import { OrderBySpec } from './orderBySpec';
import { OutputTransaction } from './outputTransaction';
import { PagedResourceListOfPortfolioSearchResult } from './pagedResourceListOfPortfolioSearchResult';
import { PagedResourceListOfPropertyDefinition } from './pagedResourceListOfPropertyDefinition';
import { PerpetualProperty } from './perpetualProperty';
import { Portfolio } from './portfolio';
import { PortfolioDetails } from './portfolioDetails';
import { PortfolioGroup } from './portfolioGroup';
import { PortfolioHolding } from './portfolioHolding';
import { PortfolioProperties } from './portfolioProperties';
import { PortfolioReconciliationRequest } from './portfolioReconciliationRequest';
import { PortfolioSearchResult } from './portfolioSearchResult';
import { PortfoliosReconciliationRequest } from './portfoliosReconciliationRequest';
import { PricingContext } from './pricingContext';
import { PricingOptions } from './pricingOptions';
import { ProcessedCommand } from './processedCommand';
import { Property } from './property';
import { PropertyDefinition } from './propertyDefinition';
import { PropertyFilter } from './propertyFilter';
import { PropertySchema } from './propertySchema';
import { PropertyValue } from './propertyValue';
import { Quote } from './quote';
import { QuoteId } from './quoteId';
import { QuoteSeriesId } from './quoteSeriesId';
import { RealisedGainLoss } from './realisedGainLoss';
import { ReconciliationBreak } from './reconciliationBreak';
import { ReferencePortfolioConstituent } from './referencePortfolioConstituent';
import { ReferencePortfolioConstituentRequest } from './referencePortfolioConstituentRequest';
import { ResourceId } from './resourceId';
import { ResourceListOfAccessControlledResource } from './resourceListOfAccessControlledResource';
import { ResourceListOfAnalyticStoreKey } from './resourceListOfAnalyticStoreKey';
import { ResourceListOfChange } from './resourceListOfChange';
import { ResourceListOfConstituentsAdjustmentHeader } from './resourceListOfConstituentsAdjustmentHeader';
import { ResourceListOfCorporateAction } from './resourceListOfCorporateAction';
import { ResourceListOfCorporateActionSource } from './resourceListOfCorporateActionSource';
import { ResourceListOfCutLabelDefinition } from './resourceListOfCutLabelDefinition';
import { ResourceListOfDataType } from './resourceListOfDataType';
import { ResourceListOfHoldingsAdjustmentHeader } from './resourceListOfHoldingsAdjustmentHeader';
import { ResourceListOfIUnitDefinitionDto } from './resourceListOfIUnitDefinitionDto';
import { ResourceListOfInstrument } from './resourceListOfInstrument';
import { ResourceListOfInstrumentIdTypeDescriptor } from './resourceListOfInstrumentIdTypeDescriptor';
import { ResourceListOfPortfolio } from './resourceListOfPortfolio';
import { ResourceListOfPortfolioGroup } from './resourceListOfPortfolioGroup';
import { ResourceListOfPortfolioSearchResult } from './resourceListOfPortfolioSearchResult';
import { ResourceListOfProcessedCommand } from './resourceListOfProcessedCommand';
import { ResourceListOfPropertyDefinition } from './resourceListOfPropertyDefinition';
import { ResourceListOfQuote } from './resourceListOfQuote';
import { ResourceListOfReconciliationBreak } from './resourceListOfReconciliationBreak';
import { ResourceListOfScopeDefinition } from './resourceListOfScopeDefinition';
import { ResourceListOfString } from './resourceListOfString';
import { ResourceListOfTransactionConfigurationData } from './resourceListOfTransactionConfigurationData';
import { ResourceListOfValueType } from './resourceListOfValueType';
import { ResultDataSchema } from './resultDataSchema';
import { Results } from './results';
import { Schema } from './schema';
import { ScopeDefinition } from './scopeDefinition';
import { Stream } from './stream';
import { StructuredMarketData } from './structuredMarketData';
import { StructuredMarketDataId } from './structuredMarketDataId';
import { TargetTaxLot } from './targetTaxLot';
import { TargetTaxLotRequest } from './targetTaxLotRequest';
import { Transaction } from './transaction';
import { TransactionConfigurationData } from './transactionConfigurationData';
import { TransactionConfigurationDataRequest } from './transactionConfigurationDataRequest';
import { TransactionConfigurationMovementData } from './transactionConfigurationMovementData';
import { TransactionConfigurationMovementDataRequest } from './transactionConfigurationMovementDataRequest';
import { TransactionConfigurationTypeAlias } from './transactionConfigurationTypeAlias';
import { TransactionPrice } from './transactionPrice';
import { TransactionPropertyMapping } from './transactionPropertyMapping';
import { TransactionPropertyMappingRequest } from './transactionPropertyMappingRequest';
import { TransactionQueryParameters } from './transactionQueryParameters';
import { TransactionRequest } from './transactionRequest';
import { UpdateCutLabelDefinitionRequest } from './updateCutLabelDefinitionRequest';
import { UpdateDataTypeRequest } from './updateDataTypeRequest';
import { UpdateInstrumentIdentifierRequest } from './updateInstrumentIdentifierRequest';
import { UpdatePortfolioGroupRequest } from './updatePortfolioGroupRequest';
import { UpdatePortfolioRequest } from './updatePortfolioRequest';
import { UpdatePropertyDefinitionRequest } from './updatePropertyDefinitionRequest';
import { UpsertCorporateActionRequest } from './upsertCorporateActionRequest';
import { UpsertCorporateActionsResponse } from './upsertCorporateActionsResponse';
import { UpsertInstrumentPropertiesResponse } from './upsertInstrumentPropertiesResponse';
import { UpsertInstrumentPropertyRequest } from './upsertInstrumentPropertyRequest';
import { UpsertInstrumentsResponse } from './upsertInstrumentsResponse';
import { UpsertPortfolioExecutionsResponse } from './upsertPortfolioExecutionsResponse';
import { UpsertPortfolioTransactionsResponse } from './upsertPortfolioTransactionsResponse';
import { UpsertQuoteRequest } from './upsertQuoteRequest';
import { UpsertQuotesResponse } from './upsertQuotesResponse';
import { UpsertReferencePortfolioConstituentsRequest } from './upsertReferencePortfolioConstituentsRequest';
import { UpsertReferencePortfolioConstituentsResponse } from './upsertReferencePortfolioConstituentsResponse';
import { UpsertStructuredDataResponse } from './upsertStructuredDataResponse';
import { UpsertStructuredMarketDataRequest } from './upsertStructuredMarketDataRequest';
import { UpsertTransactionPropertiesResponse } from './upsertTransactionPropertiesResponse';
import { User } from './user';
import { ValuationReconciliationRequest } from './valuationReconciliationRequest';
import { ValuationsReconciliationRequest } from './valuationsReconciliationRequest';
import { VendorModelRule } from './vendorModelRule';
import { Version } from './version';
import { VersionSummaryDto } from './versionSummaryDto';
import { VersionedResourceListOfOutputTransaction } from './versionedResourceListOfOutputTransaction';
import { VersionedResourceListOfPortfolioHolding } from './versionedResourceListOfPortfolioHolding';
import { VersionedResourceListOfTransaction } from './versionedResourceListOfTransaction';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];
                 
let enumsMap: {[index: string]: any} = {
        "AggregateSpec.OpEnum": AggregateSpec.OpEnum,
        "CompletePortfolio.TypeEnum": CompletePortfolio.TypeEnum,
        "CreateDataTypeRequest.TypeValueRangeEnum": CreateDataTypeRequest.TypeValueRangeEnum,
        "CreateDataTypeRequest.ValueTypeEnum": CreateDataTypeRequest.ValueTypeEnum,
        "CreateDataTypeRequest.UnitSchemaEnum": CreateDataTypeRequest.UnitSchemaEnum,
        "CreateDerivedTransactionPortfolioRequest.AccountingMethodEnum": CreateDerivedTransactionPortfolioRequest.AccountingMethodEnum,
        "CreatePropertyDefinitionRequest.DomainEnum": CreatePropertyDefinitionRequest.DomainEnum,
        "CreatePropertyDefinitionRequest.LifeTimeEnum": CreatePropertyDefinitionRequest.LifeTimeEnum,
        "CreateResults.FormatEnum": CreateResults.FormatEnum,
        "CreateTransactionPortfolioRequest.AccountingMethodEnum": CreateTransactionPortfolioRequest.AccountingMethodEnum,
        "DataType.TypeValueRangeEnum": DataType.TypeValueRangeEnum,
        "DataType.ValueTypeEnum": DataType.ValueTypeEnum,
        "DataType.UnitSchemaEnum": DataType.UnitSchemaEnum,
        "FieldSchema.TypeEnum": FieldSchema.TypeEnum,
        "GetReferencePortfolioConstituentsResponse.WeightTypeEnum": GetReferencePortfolioConstituentsResponse.WeightTypeEnum,
        "GetReferencePortfolioConstituentsResponse.PeriodTypeEnum": GetReferencePortfolioConstituentsResponse.PeriodTypeEnum,
        "HoldingsAdjustment.UnmatchedHoldingMethodEnum": HoldingsAdjustment.UnmatchedHoldingMethodEnum,
        "HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum": HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum,
        "IUnitDefinitionDto.SchemaEnum": IUnitDefinitionDto.SchemaEnum,
        "Instrument.StateEnum": Instrument.StateEnum,
        "Link.RelationEnum": Link.RelationEnum,
        "Link.MethodEnum": Link.MethodEnum,
        "MarketContextSuppliers.CommodityEnum": MarketContextSuppliers.CommodityEnum,
        "MarketContextSuppliers.CreditEnum": MarketContextSuppliers.CreditEnum,
        "MarketContextSuppliers.EquityEnum": MarketContextSuppliers.EquityEnum,
        "MarketContextSuppliers.FxEnum": MarketContextSuppliers.FxEnum,
        "MarketContextSuppliers.RatesEnum": MarketContextSuppliers.RatesEnum,
        "MarketDataKeyRule.SupplierEnum": MarketDataKeyRule.SupplierEnum,
        "MarketDataKeyRule.QuoteTypeEnum": MarketDataKeyRule.QuoteTypeEnum,
        "MarketOptions.DefaultSupplierEnum": MarketOptions.DefaultSupplierEnum,
        "MarketOptions.DefaultInstrumentCodeTypeEnum": MarketOptions.DefaultInstrumentCodeTypeEnum,
        "ModelSelection.LibraryEnum": ModelSelection.LibraryEnum,
        "ModelSelection.ModelEnum": ModelSelection.ModelEnum,
        "OrderBySpec.SortOrderEnum": OrderBySpec.SortOrderEnum,
        "OutputTransaction.TransactionStatusEnum": OutputTransaction.TransactionStatusEnum,
        "Portfolio.TypeEnum": Portfolio.TypeEnum,
        "PortfolioSearchResult.TypeEnum": PortfolioSearchResult.TypeEnum,
        "PropertyDefinition.ValueTypeEnum": PropertyDefinition.ValueTypeEnum,
        "PropertyDefinition.LifeTimeEnum": PropertyDefinition.LifeTimeEnum,
        "PropertyDefinition.TypeEnum": PropertyDefinition.TypeEnum,
        "PropertyDefinition.UnitSchemaEnum": PropertyDefinition.UnitSchemaEnum,
        "PropertyDefinition.DomainEnum": PropertyDefinition.DomainEnum,
        "PropertyFilter.OperatorEnum": PropertyFilter.OperatorEnum,
        "PropertyFilter.RightOperandTypeEnum": PropertyFilter.RightOperandTypeEnum,
        "QuoteSeriesId.InstrumentIdTypeEnum": QuoteSeriesId.InstrumentIdTypeEnum,
        "QuoteSeriesId.QuoteTypeEnum": QuoteSeriesId.QuoteTypeEnum,
        "ResourceListOfValueType.ValuesEnum": ResourceListOfValueType.ValuesEnum,
        "Results.FormatEnum": Results.FormatEnum,
        "TransactionConfigurationMovementData.MovementTypesEnum": TransactionConfigurationMovementData.MovementTypesEnum,
        "TransactionConfigurationMovementData.SideEnum": TransactionConfigurationMovementData.SideEnum,
        "TransactionConfigurationMovementDataRequest.MovementTypesEnum": TransactionConfigurationMovementDataRequest.MovementTypesEnum,
        "TransactionConfigurationMovementDataRequest.SideEnum": TransactionConfigurationMovementDataRequest.SideEnum,
        "TransactionConfigurationTypeAlias.TransactionRolesEnum": TransactionConfigurationTypeAlias.TransactionRolesEnum,
        "TransactionPrice.TypeEnum": TransactionPrice.TypeEnum,
        "TransactionQueryParameters.QueryModeEnum": TransactionQueryParameters.QueryModeEnum,
        "UpdateDataTypeRequest.TypeValueRangeEnum": UpdateDataTypeRequest.TypeValueRangeEnum,
        "UpdateDataTypeRequest.ValueTypeEnum": UpdateDataTypeRequest.ValueTypeEnum,
        "UpdateDataTypeRequest.UnitSchemaEnum": UpdateDataTypeRequest.UnitSchemaEnum,
        "UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum": UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum,
        "UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum": UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum,
        "VendorModelRule.SupplierEnum": VendorModelRule.SupplierEnum,
}

let typeMap: {[index: string]: any} = {
    "AccessControlledAction": AccessControlledAction,
    "AccessControlledResource": AccessControlledResource,
    "ActionId": ActionId,
    "AdjustHolding": AdjustHolding,
    "AdjustHoldingRequest": AdjustHoldingRequest,
    "AggregateSpec": AggregateSpec,
    "AggregationContext": AggregationContext,
    "AggregationOptions": AggregationOptions,
    "AggregationRequest": AggregationRequest,
    "AggregationResponseNodeOfDictionaryOfStringToObject": AggregationResponseNodeOfDictionaryOfStringToObject,
    "AnalyticStore": AnalyticStore,
    "AnalyticStoreKey": AnalyticStoreKey,
    "AnnulQuotesResponse": AnnulQuotesResponse,
    "AnnulStructuredDataResponse": AnnulStructuredDataResponse,
    "Change": Change,
    "CompletePortfolio": CompletePortfolio,
    "ConfigurationRecipe": ConfigurationRecipe,
    "ConstituentsAdjustmentHeader": ConstituentsAdjustmentHeader,
    "CorporateAction": CorporateAction,
    "CorporateActionSource": CorporateActionSource,
    "CorporateActionTransition": CorporateActionTransition,
    "CorporateActionTransitionComponent": CorporateActionTransitionComponent,
    "CorporateActionTransitionComponentRequest": CorporateActionTransitionComponentRequest,
    "CorporateActionTransitionRequest": CorporateActionTransitionRequest,
    "CreateAnalyticStoreRequest": CreateAnalyticStoreRequest,
    "CreateCorporateActionSourceRequest": CreateCorporateActionSourceRequest,
    "CreateCutLabelDefinitionRequest": CreateCutLabelDefinitionRequest,
    "CreateDataTypeRequest": CreateDataTypeRequest,
    "CreateDerivedTransactionPortfolioRequest": CreateDerivedTransactionPortfolioRequest,
    "CreatePortfolioDetails": CreatePortfolioDetails,
    "CreatePortfolioGroupRequest": CreatePortfolioGroupRequest,
    "CreatePropertyDefinitionRequest": CreatePropertyDefinitionRequest,
    "CreateReferencePortfolioRequest": CreateReferencePortfolioRequest,
    "CreateResults": CreateResults,
    "CreateTransactionPortfolioRequest": CreateTransactionPortfolioRequest,
    "CreateUnitDefinition": CreateUnitDefinition,
    "CurrencyAndAmount": CurrencyAndAmount,
    "CutLabelDefinition": CutLabelDefinition,
    "CutLocalTime": CutLocalTime,
    "DataType": DataType,
    "DeleteInstrumentPropertiesResponse": DeleteInstrumentPropertiesResponse,
    "DeleteInstrumentResponse": DeleteInstrumentResponse,
    "DeletedEntityResponse": DeletedEntityResponse,
    "ErrorDetail": ErrorDetail,
    "ExecutionRequest": ExecutionRequest,
    "ExpandedGroup": ExpandedGroup,
    "FieldSchema": FieldSchema,
    "FileResponse": FileResponse,
    "GetInstrumentsResponse": GetInstrumentsResponse,
    "GetQuotesResponse": GetQuotesResponse,
    "GetReferencePortfolioConstituentsResponse": GetReferencePortfolioConstituentsResponse,
    "GetStructuredMarketDataResponse": GetStructuredMarketDataResponse,
    "HoldingAdjustment": HoldingAdjustment,
    "HoldingsAdjustment": HoldingsAdjustment,
    "HoldingsAdjustmentHeader": HoldingsAdjustmentHeader,
    "IUnitDefinitionDto": IUnitDefinitionDto,
    "IdSelectorDefinition": IdSelectorDefinition,
    "IdentifierPartSchema": IdentifierPartSchema,
    "Instrument": Instrument,
    "InstrumentAnalytic": InstrumentAnalytic,
    "InstrumentDefinition": InstrumentDefinition,
    "InstrumentEconomicDefinition": InstrumentEconomicDefinition,
    "InstrumentIdTypeDescriptor": InstrumentIdTypeDescriptor,
    "InstrumentIdValue": InstrumentIdValue,
    "InstrumentMatch": InstrumentMatch,
    "InstrumentSearchProperty": InstrumentSearchProperty,
    "Link": Link,
    "ListAggregationResponse": ListAggregationResponse,
    "LusidProblemDetails": LusidProblemDetails,
    "LusidValidationProblemDetails": LusidValidationProblemDetails,
    "MarketContext": MarketContext,
    "MarketContextSuppliers": MarketContextSuppliers,
    "MarketDataKeyRule": MarketDataKeyRule,
    "MarketOptions": MarketOptions,
    "MetricValue": MetricValue,
    "ModelSelection": ModelSelection,
    "NestedAggregationResponse": NestedAggregationResponse,
    "OrderBySpec": OrderBySpec,
    "OutputTransaction": OutputTransaction,
    "PagedResourceListOfPortfolioSearchResult": PagedResourceListOfPortfolioSearchResult,
    "PagedResourceListOfPropertyDefinition": PagedResourceListOfPropertyDefinition,
    "PerpetualProperty": PerpetualProperty,
    "Portfolio": Portfolio,
    "PortfolioDetails": PortfolioDetails,
    "PortfolioGroup": PortfolioGroup,
    "PortfolioHolding": PortfolioHolding,
    "PortfolioProperties": PortfolioProperties,
    "PortfolioReconciliationRequest": PortfolioReconciliationRequest,
    "PortfolioSearchResult": PortfolioSearchResult,
    "PortfoliosReconciliationRequest": PortfoliosReconciliationRequest,
    "PricingContext": PricingContext,
    "PricingOptions": PricingOptions,
    "ProcessedCommand": ProcessedCommand,
    "Property": Property,
    "PropertyDefinition": PropertyDefinition,
    "PropertyFilter": PropertyFilter,
    "PropertySchema": PropertySchema,
    "PropertyValue": PropertyValue,
    "Quote": Quote,
    "QuoteId": QuoteId,
    "QuoteSeriesId": QuoteSeriesId,
    "RealisedGainLoss": RealisedGainLoss,
    "ReconciliationBreak": ReconciliationBreak,
    "ReferencePortfolioConstituent": ReferencePortfolioConstituent,
    "ReferencePortfolioConstituentRequest": ReferencePortfolioConstituentRequest,
    "ResourceId": ResourceId,
    "ResourceListOfAccessControlledResource": ResourceListOfAccessControlledResource,
    "ResourceListOfAnalyticStoreKey": ResourceListOfAnalyticStoreKey,
    "ResourceListOfChange": ResourceListOfChange,
    "ResourceListOfConstituentsAdjustmentHeader": ResourceListOfConstituentsAdjustmentHeader,
    "ResourceListOfCorporateAction": ResourceListOfCorporateAction,
    "ResourceListOfCorporateActionSource": ResourceListOfCorporateActionSource,
    "ResourceListOfCutLabelDefinition": ResourceListOfCutLabelDefinition,
    "ResourceListOfDataType": ResourceListOfDataType,
    "ResourceListOfHoldingsAdjustmentHeader": ResourceListOfHoldingsAdjustmentHeader,
    "ResourceListOfIUnitDefinitionDto": ResourceListOfIUnitDefinitionDto,
    "ResourceListOfInstrument": ResourceListOfInstrument,
    "ResourceListOfInstrumentIdTypeDescriptor": ResourceListOfInstrumentIdTypeDescriptor,
    "ResourceListOfPortfolio": ResourceListOfPortfolio,
    "ResourceListOfPortfolioGroup": ResourceListOfPortfolioGroup,
    "ResourceListOfPortfolioSearchResult": ResourceListOfPortfolioSearchResult,
    "ResourceListOfProcessedCommand": ResourceListOfProcessedCommand,
    "ResourceListOfPropertyDefinition": ResourceListOfPropertyDefinition,
    "ResourceListOfQuote": ResourceListOfQuote,
    "ResourceListOfReconciliationBreak": ResourceListOfReconciliationBreak,
    "ResourceListOfScopeDefinition": ResourceListOfScopeDefinition,
    "ResourceListOfString": ResourceListOfString,
    "ResourceListOfTransactionConfigurationData": ResourceListOfTransactionConfigurationData,
    "ResourceListOfValueType": ResourceListOfValueType,
    "ResultDataSchema": ResultDataSchema,
    "Results": Results,
    "Schema": Schema,
    "ScopeDefinition": ScopeDefinition,
    "Stream": Stream,
    "StructuredMarketData": StructuredMarketData,
    "StructuredMarketDataId": StructuredMarketDataId,
    "TargetTaxLot": TargetTaxLot,
    "TargetTaxLotRequest": TargetTaxLotRequest,
    "Transaction": Transaction,
    "TransactionConfigurationData": TransactionConfigurationData,
    "TransactionConfigurationDataRequest": TransactionConfigurationDataRequest,
    "TransactionConfigurationMovementData": TransactionConfigurationMovementData,
    "TransactionConfigurationMovementDataRequest": TransactionConfigurationMovementDataRequest,
    "TransactionConfigurationTypeAlias": TransactionConfigurationTypeAlias,
    "TransactionPrice": TransactionPrice,
    "TransactionPropertyMapping": TransactionPropertyMapping,
    "TransactionPropertyMappingRequest": TransactionPropertyMappingRequest,
    "TransactionQueryParameters": TransactionQueryParameters,
    "TransactionRequest": TransactionRequest,
    "UpdateCutLabelDefinitionRequest": UpdateCutLabelDefinitionRequest,
    "UpdateDataTypeRequest": UpdateDataTypeRequest,
    "UpdateInstrumentIdentifierRequest": UpdateInstrumentIdentifierRequest,
    "UpdatePortfolioGroupRequest": UpdatePortfolioGroupRequest,
    "UpdatePortfolioRequest": UpdatePortfolioRequest,
    "UpdatePropertyDefinitionRequest": UpdatePropertyDefinitionRequest,
    "UpsertCorporateActionRequest": UpsertCorporateActionRequest,
    "UpsertCorporateActionsResponse": UpsertCorporateActionsResponse,
    "UpsertInstrumentPropertiesResponse": UpsertInstrumentPropertiesResponse,
    "UpsertInstrumentPropertyRequest": UpsertInstrumentPropertyRequest,
    "UpsertInstrumentsResponse": UpsertInstrumentsResponse,
    "UpsertPortfolioExecutionsResponse": UpsertPortfolioExecutionsResponse,
    "UpsertPortfolioTransactionsResponse": UpsertPortfolioTransactionsResponse,
    "UpsertQuoteRequest": UpsertQuoteRequest,
    "UpsertQuotesResponse": UpsertQuotesResponse,
    "UpsertReferencePortfolioConstituentsRequest": UpsertReferencePortfolioConstituentsRequest,
    "UpsertReferencePortfolioConstituentsResponse": UpsertReferencePortfolioConstituentsResponse,
    "UpsertStructuredDataResponse": UpsertStructuredDataResponse,
    "UpsertStructuredMarketDataRequest": UpsertStructuredMarketDataRequest,
    "UpsertTransactionPropertiesResponse": UpsertTransactionPropertiesResponse,
    "User": User,
    "ValuationReconciliationRequest": ValuationReconciliationRequest,
    "ValuationsReconciliationRequest": ValuationsReconciliationRequest,
    "VendorModelRule": VendorModelRule,
    "Version": Version,
    "VersionSummaryDto": VersionSummaryDto,
    "VersionedResourceListOfOutputTransaction": VersionedResourceListOfOutputTransaction,
    "VersionedResourceListOfPortfolioHolding": VersionedResourceListOfPortfolioHolding,
    "VersionedResourceListOfTransaction": VersionedResourceListOfTransaction,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            
            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}