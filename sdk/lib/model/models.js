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
__export(require("./completePortfolio"));
__export(require("./constituentsAdjustmentHeader"));
__export(require("./createCutLabelDefinitionRequest"));
__export(require("./createDerivedTransactionPortfolioRequest"));
__export(require("./createPortfolioDetails"));
__export(require("./createPortfolioGroupRequest"));
__export(require("./createPropertyDefinitionRequest"));
__export(require("./createReferencePortfolioRequest"));
__export(require("./createTransactionPortfolioRequest"));
__export(require("./currencyAndAmount"));
__export(require("./cutLabelDefinition"));
__export(require("./cutLocalTime"));
__export(require("./dataType"));
__export(require("./deleteInstrumentPropertyRequest"));
__export(require("./deleteInstrumentResponse"));
__export(require("./deletedEntityResponse"));
__export(require("./errorDetail"));
__export(require("./executionRequest"));
__export(require("./expandedGroup"));
__export(require("./fileResponse"));
__export(require("./getInstrumentsResponse"));
__export(require("./getReferencePortfolioConstituentsResponse"));
__export(require("./holdingAdjustment"));
__export(require("./holdingsAdjustment"));
__export(require("./holdingsAdjustmentHeader"));
__export(require("./iUnitDefinitionDto"));
__export(require("./idSelectorDefinition"));
__export(require("./identifierPartSchema"));
__export(require("./instrument"));
__export(require("./instrumentDefinition"));
__export(require("./instrumentEconomicDefinition"));
__export(require("./instrumentIdTypeDescriptor"));
__export(require("./instrumentIdValue"));
__export(require("./link"));
__export(require("./lusidProblemDetails"));
__export(require("./lusidValidationProblemDetails"));
__export(require("./metricValue"));
__export(require("./outputTransaction"));
__export(require("./perpetualProperty"));
__export(require("./portfolio"));
__export(require("./portfolioDetails"));
__export(require("./portfolioGroup"));
__export(require("./portfolioHolding"));
__export(require("./portfolioProperties"));
__export(require("./portfolioReconciliationRequest"));
__export(require("./portfoliosReconciliationRequest"));
__export(require("./processedCommand"));
__export(require("./property"));
__export(require("./propertyDefinition"));
__export(require("./propertyValue"));
__export(require("./realisedGainLoss"));
__export(require("./reconciliationBreak"));
__export(require("./referencePortfolioConstituent"));
__export(require("./referencePortfolioConstituentRequest"));
__export(require("./resourceId"));
__export(require("./resourceListOfAccessControlledResource"));
__export(require("./resourceListOfConstituentsAdjustmentHeader"));
__export(require("./resourceListOfCutLabelDefinition"));
__export(require("./resourceListOfDataType"));
__export(require("./resourceListOfHoldingsAdjustmentHeader"));
__export(require("./resourceListOfIUnitDefinitionDto"));
__export(require("./resourceListOfInstrument"));
__export(require("./resourceListOfInstrumentIdTypeDescriptor"));
__export(require("./resourceListOfPortfolio"));
__export(require("./resourceListOfPortfolioGroup"));
__export(require("./resourceListOfProcessedCommand"));
__export(require("./resourceListOfPropertyDefinition"));
__export(require("./resourceListOfReconciliationBreak"));
__export(require("./resourceListOfScopeDefinition"));
__export(require("./resourceListOfTransactionConfigurationData"));
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
__export(require("./updateCutLabelDefinitionRequest"));
__export(require("./updateInstrumentIdentifierRequest"));
__export(require("./updatePortfolioGroupRequest"));
__export(require("./updatePortfolioRequest"));
__export(require("./updatePropertyDefinitionRequest"));
__export(require("./upsertInstrumentPropertiesResponse"));
__export(require("./upsertInstrumentPropertyRequest"));
__export(require("./upsertInstrumentsResponse"));
__export(require("./upsertPortfolioExecutionsResponse"));
__export(require("./upsertPortfolioTransactionsResponse"));
__export(require("./upsertReferencePortfolioConstituentsRequest"));
__export(require("./upsertReferencePortfolioConstituentsResponse"));
__export(require("./upsertTransactionPropertiesResponse"));
__export(require("./user"));
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
var completePortfolio_1 = require("./completePortfolio");
var constituentsAdjustmentHeader_1 = require("./constituentsAdjustmentHeader");
var createCutLabelDefinitionRequest_1 = require("./createCutLabelDefinitionRequest");
var createDerivedTransactionPortfolioRequest_1 = require("./createDerivedTransactionPortfolioRequest");
var createPortfolioDetails_1 = require("./createPortfolioDetails");
var createPortfolioGroupRequest_1 = require("./createPortfolioGroupRequest");
var createPropertyDefinitionRequest_1 = require("./createPropertyDefinitionRequest");
var createReferencePortfolioRequest_1 = require("./createReferencePortfolioRequest");
var createTransactionPortfolioRequest_1 = require("./createTransactionPortfolioRequest");
var currencyAndAmount_1 = require("./currencyAndAmount");
var cutLabelDefinition_1 = require("./cutLabelDefinition");
var cutLocalTime_1 = require("./cutLocalTime");
var dataType_1 = require("./dataType");
var deleteInstrumentPropertyRequest_1 = require("./deleteInstrumentPropertyRequest");
var deleteInstrumentResponse_1 = require("./deleteInstrumentResponse");
var deletedEntityResponse_1 = require("./deletedEntityResponse");
var errorDetail_1 = require("./errorDetail");
var executionRequest_1 = require("./executionRequest");
var expandedGroup_1 = require("./expandedGroup");
var fileResponse_1 = require("./fileResponse");
var getInstrumentsResponse_1 = require("./getInstrumentsResponse");
var getReferencePortfolioConstituentsResponse_1 = require("./getReferencePortfolioConstituentsResponse");
var holdingAdjustment_1 = require("./holdingAdjustment");
var holdingsAdjustment_1 = require("./holdingsAdjustment");
var holdingsAdjustmentHeader_1 = require("./holdingsAdjustmentHeader");
var iUnitDefinitionDto_1 = require("./iUnitDefinitionDto");
var idSelectorDefinition_1 = require("./idSelectorDefinition");
var identifierPartSchema_1 = require("./identifierPartSchema");
var instrument_1 = require("./instrument");
var instrumentDefinition_1 = require("./instrumentDefinition");
var instrumentEconomicDefinition_1 = require("./instrumentEconomicDefinition");
var instrumentIdTypeDescriptor_1 = require("./instrumentIdTypeDescriptor");
var instrumentIdValue_1 = require("./instrumentIdValue");
var link_1 = require("./link");
var lusidProblemDetails_1 = require("./lusidProblemDetails");
var lusidValidationProblemDetails_1 = require("./lusidValidationProblemDetails");
var metricValue_1 = require("./metricValue");
var outputTransaction_1 = require("./outputTransaction");
var perpetualProperty_1 = require("./perpetualProperty");
var portfolio_1 = require("./portfolio");
var portfolioDetails_1 = require("./portfolioDetails");
var portfolioGroup_1 = require("./portfolioGroup");
var portfolioHolding_1 = require("./portfolioHolding");
var portfolioProperties_1 = require("./portfolioProperties");
var portfolioReconciliationRequest_1 = require("./portfolioReconciliationRequest");
var portfoliosReconciliationRequest_1 = require("./portfoliosReconciliationRequest");
var processedCommand_1 = require("./processedCommand");
var property_1 = require("./property");
var propertyDefinition_1 = require("./propertyDefinition");
var propertyValue_1 = require("./propertyValue");
var realisedGainLoss_1 = require("./realisedGainLoss");
var reconciliationBreak_1 = require("./reconciliationBreak");
var referencePortfolioConstituent_1 = require("./referencePortfolioConstituent");
var referencePortfolioConstituentRequest_1 = require("./referencePortfolioConstituentRequest");
var resourceId_1 = require("./resourceId");
var resourceListOfAccessControlledResource_1 = require("./resourceListOfAccessControlledResource");
var resourceListOfConstituentsAdjustmentHeader_1 = require("./resourceListOfConstituentsAdjustmentHeader");
var resourceListOfCutLabelDefinition_1 = require("./resourceListOfCutLabelDefinition");
var resourceListOfDataType_1 = require("./resourceListOfDataType");
var resourceListOfHoldingsAdjustmentHeader_1 = require("./resourceListOfHoldingsAdjustmentHeader");
var resourceListOfIUnitDefinitionDto_1 = require("./resourceListOfIUnitDefinitionDto");
var resourceListOfInstrument_1 = require("./resourceListOfInstrument");
var resourceListOfInstrumentIdTypeDescriptor_1 = require("./resourceListOfInstrumentIdTypeDescriptor");
var resourceListOfPortfolio_1 = require("./resourceListOfPortfolio");
var resourceListOfPortfolioGroup_1 = require("./resourceListOfPortfolioGroup");
var resourceListOfProcessedCommand_1 = require("./resourceListOfProcessedCommand");
var resourceListOfPropertyDefinition_1 = require("./resourceListOfPropertyDefinition");
var resourceListOfReconciliationBreak_1 = require("./resourceListOfReconciliationBreak");
var resourceListOfScopeDefinition_1 = require("./resourceListOfScopeDefinition");
var resourceListOfTransactionConfigurationData_1 = require("./resourceListOfTransactionConfigurationData");
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
var updateCutLabelDefinitionRequest_1 = require("./updateCutLabelDefinitionRequest");
var updateInstrumentIdentifierRequest_1 = require("./updateInstrumentIdentifierRequest");
var updatePortfolioGroupRequest_1 = require("./updatePortfolioGroupRequest");
var updatePortfolioRequest_1 = require("./updatePortfolioRequest");
var updatePropertyDefinitionRequest_1 = require("./updatePropertyDefinitionRequest");
var upsertInstrumentPropertiesResponse_1 = require("./upsertInstrumentPropertiesResponse");
var upsertInstrumentPropertyRequest_1 = require("./upsertInstrumentPropertyRequest");
var upsertInstrumentsResponse_1 = require("./upsertInstrumentsResponse");
var upsertPortfolioExecutionsResponse_1 = require("./upsertPortfolioExecutionsResponse");
var upsertPortfolioTransactionsResponse_1 = require("./upsertPortfolioTransactionsResponse");
var upsertReferencePortfolioConstituentsRequest_1 = require("./upsertReferencePortfolioConstituentsRequest");
var upsertReferencePortfolioConstituentsResponse_1 = require("./upsertReferencePortfolioConstituentsResponse");
var upsertTransactionPropertiesResponse_1 = require("./upsertTransactionPropertiesResponse");
var user_1 = require("./user");
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
    "CompletePortfolio.TypeEnum": completePortfolio_1.CompletePortfolio.TypeEnum,
    "CreateDerivedTransactionPortfolioRequest.AccountingMethodEnum": createDerivedTransactionPortfolioRequest_1.CreateDerivedTransactionPortfolioRequest.AccountingMethodEnum,
    "CreatePropertyDefinitionRequest.DomainEnum": createPropertyDefinitionRequest_1.CreatePropertyDefinitionRequest.DomainEnum,
    "CreatePropertyDefinitionRequest.LifeTimeEnum": createPropertyDefinitionRequest_1.CreatePropertyDefinitionRequest.LifeTimeEnum,
    "CreateTransactionPortfolioRequest.AccountingMethodEnum": createTransactionPortfolioRequest_1.CreateTransactionPortfolioRequest.AccountingMethodEnum,
    "DataType.TypeValueRangeEnum": dataType_1.DataType.TypeValueRangeEnum,
    "DataType.ValueTypeEnum": dataType_1.DataType.ValueTypeEnum,
    "DataType.UnitSchemaEnum": dataType_1.DataType.UnitSchemaEnum,
    "GetReferencePortfolioConstituentsResponse.WeightTypeEnum": getReferencePortfolioConstituentsResponse_1.GetReferencePortfolioConstituentsResponse.WeightTypeEnum,
    "GetReferencePortfolioConstituentsResponse.PeriodTypeEnum": getReferencePortfolioConstituentsResponse_1.GetReferencePortfolioConstituentsResponse.PeriodTypeEnum,
    "HoldingsAdjustment.UnmatchedHoldingMethodEnum": holdingsAdjustment_1.HoldingsAdjustment.UnmatchedHoldingMethodEnum,
    "HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum": holdingsAdjustmentHeader_1.HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum,
    "IUnitDefinitionDto.SchemaEnum": iUnitDefinitionDto_1.IUnitDefinitionDto.SchemaEnum,
    "Instrument.StateEnum": instrument_1.Instrument.StateEnum,
    "Link.RelationEnum": link_1.Link.RelationEnum,
    "Link.MethodEnum": link_1.Link.MethodEnum,
    "OutputTransaction.TransactionStatusEnum": outputTransaction_1.OutputTransaction.TransactionStatusEnum,
    "Portfolio.TypeEnum": portfolio_1.Portfolio.TypeEnum,
    "PropertyDefinition.ValueTypeEnum": propertyDefinition_1.PropertyDefinition.ValueTypeEnum,
    "PropertyDefinition.LifeTimeEnum": propertyDefinition_1.PropertyDefinition.LifeTimeEnum,
    "PropertyDefinition.TypeEnum": propertyDefinition_1.PropertyDefinition.TypeEnum,
    "PropertyDefinition.UnitSchemaEnum": propertyDefinition_1.PropertyDefinition.UnitSchemaEnum,
    "PropertyDefinition.DomainEnum": propertyDefinition_1.PropertyDefinition.DomainEnum,
    "TransactionConfigurationMovementData.MovementTypesEnum": transactionConfigurationMovementData_1.TransactionConfigurationMovementData.MovementTypesEnum,
    "TransactionConfigurationMovementData.SideEnum": transactionConfigurationMovementData_1.TransactionConfigurationMovementData.SideEnum,
    "TransactionConfigurationMovementDataRequest.MovementTypesEnum": transactionConfigurationMovementDataRequest_1.TransactionConfigurationMovementDataRequest.MovementTypesEnum,
    "TransactionConfigurationMovementDataRequest.SideEnum": transactionConfigurationMovementDataRequest_1.TransactionConfigurationMovementDataRequest.SideEnum,
    "TransactionConfigurationTypeAlias.TransactionRolesEnum": transactionConfigurationTypeAlias_1.TransactionConfigurationTypeAlias.TransactionRolesEnum,
    "TransactionPrice.TypeEnum": transactionPrice_1.TransactionPrice.TypeEnum,
    "TransactionQueryParameters.QueryModeEnum": transactionQueryParameters_1.TransactionQueryParameters.QueryModeEnum,
    "UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum": upsertReferencePortfolioConstituentsRequest_1.UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum,
    "UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum": upsertReferencePortfolioConstituentsRequest_1.UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum,
};
var typeMap = {
    "AccessControlledAction": accessControlledAction_1.AccessControlledAction,
    "AccessControlledResource": accessControlledResource_1.AccessControlledResource,
    "ActionId": actionId_1.ActionId,
    "AdjustHolding": adjustHolding_1.AdjustHolding,
    "AdjustHoldingRequest": adjustHoldingRequest_1.AdjustHoldingRequest,
    "CompletePortfolio": completePortfolio_1.CompletePortfolio,
    "ConstituentsAdjustmentHeader": constituentsAdjustmentHeader_1.ConstituentsAdjustmentHeader,
    "CreateCutLabelDefinitionRequest": createCutLabelDefinitionRequest_1.CreateCutLabelDefinitionRequest,
    "CreateDerivedTransactionPortfolioRequest": createDerivedTransactionPortfolioRequest_1.CreateDerivedTransactionPortfolioRequest,
    "CreatePortfolioDetails": createPortfolioDetails_1.CreatePortfolioDetails,
    "CreatePortfolioGroupRequest": createPortfolioGroupRequest_1.CreatePortfolioGroupRequest,
    "CreatePropertyDefinitionRequest": createPropertyDefinitionRequest_1.CreatePropertyDefinitionRequest,
    "CreateReferencePortfolioRequest": createReferencePortfolioRequest_1.CreateReferencePortfolioRequest,
    "CreateTransactionPortfolioRequest": createTransactionPortfolioRequest_1.CreateTransactionPortfolioRequest,
    "CurrencyAndAmount": currencyAndAmount_1.CurrencyAndAmount,
    "CutLabelDefinition": cutLabelDefinition_1.CutLabelDefinition,
    "CutLocalTime": cutLocalTime_1.CutLocalTime,
    "DataType": dataType_1.DataType,
    "DeleteInstrumentPropertyRequest": deleteInstrumentPropertyRequest_1.DeleteInstrumentPropertyRequest,
    "DeleteInstrumentResponse": deleteInstrumentResponse_1.DeleteInstrumentResponse,
    "DeletedEntityResponse": deletedEntityResponse_1.DeletedEntityResponse,
    "ErrorDetail": errorDetail_1.ErrorDetail,
    "ExecutionRequest": executionRequest_1.ExecutionRequest,
    "ExpandedGroup": expandedGroup_1.ExpandedGroup,
    "FileResponse": fileResponse_1.FileResponse,
    "GetInstrumentsResponse": getInstrumentsResponse_1.GetInstrumentsResponse,
    "GetReferencePortfolioConstituentsResponse": getReferencePortfolioConstituentsResponse_1.GetReferencePortfolioConstituentsResponse,
    "HoldingAdjustment": holdingAdjustment_1.HoldingAdjustment,
    "HoldingsAdjustment": holdingsAdjustment_1.HoldingsAdjustment,
    "HoldingsAdjustmentHeader": holdingsAdjustmentHeader_1.HoldingsAdjustmentHeader,
    "IUnitDefinitionDto": iUnitDefinitionDto_1.IUnitDefinitionDto,
    "IdSelectorDefinition": idSelectorDefinition_1.IdSelectorDefinition,
    "IdentifierPartSchema": identifierPartSchema_1.IdentifierPartSchema,
    "Instrument": instrument_1.Instrument,
    "InstrumentDefinition": instrumentDefinition_1.InstrumentDefinition,
    "InstrumentEconomicDefinition": instrumentEconomicDefinition_1.InstrumentEconomicDefinition,
    "InstrumentIdTypeDescriptor": instrumentIdTypeDescriptor_1.InstrumentIdTypeDescriptor,
    "InstrumentIdValue": instrumentIdValue_1.InstrumentIdValue,
    "Link": link_1.Link,
    "LusidProblemDetails": lusidProblemDetails_1.LusidProblemDetails,
    "LusidValidationProblemDetails": lusidValidationProblemDetails_1.LusidValidationProblemDetails,
    "MetricValue": metricValue_1.MetricValue,
    "OutputTransaction": outputTransaction_1.OutputTransaction,
    "PerpetualProperty": perpetualProperty_1.PerpetualProperty,
    "Portfolio": portfolio_1.Portfolio,
    "PortfolioDetails": portfolioDetails_1.PortfolioDetails,
    "PortfolioGroup": portfolioGroup_1.PortfolioGroup,
    "PortfolioHolding": portfolioHolding_1.PortfolioHolding,
    "PortfolioProperties": portfolioProperties_1.PortfolioProperties,
    "PortfolioReconciliationRequest": portfolioReconciliationRequest_1.PortfolioReconciliationRequest,
    "PortfoliosReconciliationRequest": portfoliosReconciliationRequest_1.PortfoliosReconciliationRequest,
    "ProcessedCommand": processedCommand_1.ProcessedCommand,
    "Property": property_1.Property,
    "PropertyDefinition": propertyDefinition_1.PropertyDefinition,
    "PropertyValue": propertyValue_1.PropertyValue,
    "RealisedGainLoss": realisedGainLoss_1.RealisedGainLoss,
    "ReconciliationBreak": reconciliationBreak_1.ReconciliationBreak,
    "ReferencePortfolioConstituent": referencePortfolioConstituent_1.ReferencePortfolioConstituent,
    "ReferencePortfolioConstituentRequest": referencePortfolioConstituentRequest_1.ReferencePortfolioConstituentRequest,
    "ResourceId": resourceId_1.ResourceId,
    "ResourceListOfAccessControlledResource": resourceListOfAccessControlledResource_1.ResourceListOfAccessControlledResource,
    "ResourceListOfConstituentsAdjustmentHeader": resourceListOfConstituentsAdjustmentHeader_1.ResourceListOfConstituentsAdjustmentHeader,
    "ResourceListOfCutLabelDefinition": resourceListOfCutLabelDefinition_1.ResourceListOfCutLabelDefinition,
    "ResourceListOfDataType": resourceListOfDataType_1.ResourceListOfDataType,
    "ResourceListOfHoldingsAdjustmentHeader": resourceListOfHoldingsAdjustmentHeader_1.ResourceListOfHoldingsAdjustmentHeader,
    "ResourceListOfIUnitDefinitionDto": resourceListOfIUnitDefinitionDto_1.ResourceListOfIUnitDefinitionDto,
    "ResourceListOfInstrument": resourceListOfInstrument_1.ResourceListOfInstrument,
    "ResourceListOfInstrumentIdTypeDescriptor": resourceListOfInstrumentIdTypeDescriptor_1.ResourceListOfInstrumentIdTypeDescriptor,
    "ResourceListOfPortfolio": resourceListOfPortfolio_1.ResourceListOfPortfolio,
    "ResourceListOfPortfolioGroup": resourceListOfPortfolioGroup_1.ResourceListOfPortfolioGroup,
    "ResourceListOfProcessedCommand": resourceListOfProcessedCommand_1.ResourceListOfProcessedCommand,
    "ResourceListOfPropertyDefinition": resourceListOfPropertyDefinition_1.ResourceListOfPropertyDefinition,
    "ResourceListOfReconciliationBreak": resourceListOfReconciliationBreak_1.ResourceListOfReconciliationBreak,
    "ResourceListOfScopeDefinition": resourceListOfScopeDefinition_1.ResourceListOfScopeDefinition,
    "ResourceListOfTransactionConfigurationData": resourceListOfTransactionConfigurationData_1.ResourceListOfTransactionConfigurationData,
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
    "UpdateCutLabelDefinitionRequest": updateCutLabelDefinitionRequest_1.UpdateCutLabelDefinitionRequest,
    "UpdateInstrumentIdentifierRequest": updateInstrumentIdentifierRequest_1.UpdateInstrumentIdentifierRequest,
    "UpdatePortfolioGroupRequest": updatePortfolioGroupRequest_1.UpdatePortfolioGroupRequest,
    "UpdatePortfolioRequest": updatePortfolioRequest_1.UpdatePortfolioRequest,
    "UpdatePropertyDefinitionRequest": updatePropertyDefinitionRequest_1.UpdatePropertyDefinitionRequest,
    "UpsertInstrumentPropertiesResponse": upsertInstrumentPropertiesResponse_1.UpsertInstrumentPropertiesResponse,
    "UpsertInstrumentPropertyRequest": upsertInstrumentPropertyRequest_1.UpsertInstrumentPropertyRequest,
    "UpsertInstrumentsResponse": upsertInstrumentsResponse_1.UpsertInstrumentsResponse,
    "UpsertPortfolioExecutionsResponse": upsertPortfolioExecutionsResponse_1.UpsertPortfolioExecutionsResponse,
    "UpsertPortfolioTransactionsResponse": upsertPortfolioTransactionsResponse_1.UpsertPortfolioTransactionsResponse,
    "UpsertReferencePortfolioConstituentsRequest": upsertReferencePortfolioConstituentsRequest_1.UpsertReferencePortfolioConstituentsRequest,
    "UpsertReferencePortfolioConstituentsResponse": upsertReferencePortfolioConstituentsResponse_1.UpsertReferencePortfolioConstituentsResponse,
    "UpsertTransactionPropertiesResponse": upsertTransactionPropertiesResponse_1.UpsertTransactionPropertiesResponse,
    "User": user_1.User,
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
