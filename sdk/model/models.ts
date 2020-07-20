export * from './accessControlledAction';
export * from './accessControlledResource';
export * from './actionId';
export * from './adjustHolding';
export * from './adjustHoldingRequest';
export * from './completePortfolio';
export * from './constituentsAdjustmentHeader';
export * from './createCutLabelDefinitionRequest';
export * from './createDerivedTransactionPortfolioRequest';
export * from './createPortfolioDetails';
export * from './createPortfolioGroupRequest';
export * from './createPropertyDefinitionRequest';
export * from './createReferencePortfolioRequest';
export * from './createTransactionPortfolioRequest';
export * from './currencyAndAmount';
export * from './cutLabelDefinition';
export * from './cutLocalTime';
export * from './dataType';
export * from './deleteInstrumentResponse';
export * from './deletedEntityResponse';
export * from './errorDetail';
export * from './executionRequest';
export * from './expandedGroup';
export * from './fileResponse';
export * from './getInstrumentsResponse';
export * from './getReferencePortfolioConstituentsResponse';
export * from './holdingAdjustment';
export * from './holdingsAdjustment';
export * from './holdingsAdjustmentHeader';
export * from './iUnitDefinitionDto';
export * from './idSelectorDefinition';
export * from './identifierPartSchema';
export * from './instrument';
export * from './instrumentDefinition';
export * from './instrumentEconomicDefinition';
export * from './instrumentIdTypeDescriptor';
export * from './instrumentIdValue';
export * from './labelValueSet';
export * from './link';
export * from './lusidProblemDetails';
export * from './lusidValidationProblemDetails';
export * from './metricValue';
export * from './outputTransaction';
export * from './pagedResourceListOfInstrument';
export * from './perpetualProperty';
export * from './portfolio';
export * from './portfolioDetails';
export * from './portfolioGroup';
export * from './portfolioGroupProperties';
export * from './portfolioHolding';
export * from './portfolioProperties';
export * from './portfolioReconciliationRequest';
export * from './portfolioSearchResult';
export * from './portfoliosReconciliationRequest';
export * from './processedCommand';
export * from './property';
export * from './propertyDefinition';
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
export * from './resourceListOfConstituentsAdjustmentHeader';
export * from './resourceListOfCutLabelDefinition';
export * from './resourceListOfDataType';
export * from './resourceListOfHoldingsAdjustmentHeader';
export * from './resourceListOfIUnitDefinitionDto';
export * from './resourceListOfInstrumentIdTypeDescriptor';
export * from './resourceListOfPortfolio';
export * from './resourceListOfPortfolioGroup';
export * from './resourceListOfPortfolioSearchResult';
export * from './resourceListOfProcessedCommand';
export * from './resourceListOfPropertyDefinition';
export * from './resourceListOfQuote';
export * from './resourceListOfReconciliationBreak';
export * from './resourceListOfScopeDefinition';
export * from './scopeDefinition';
export * from './sideConfigurationData';
export * from './stream';
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
export * from './transactionSetConfigurationData';
export * from './updateCutLabelDefinitionRequest';
export * from './updateInstrumentIdentifierRequest';
export * from './updatePortfolioGroupRequest';
export * from './updatePortfolioRequest';
export * from './updatePropertyDefinitionRequest';
export * from './upsertInstrumentPropertiesResponse';
export * from './upsertInstrumentPropertyRequest';
export * from './upsertInstrumentsResponse';
export * from './upsertPortfolioExecutionsResponse';
export * from './upsertPortfolioTransactionsResponse';
export * from './upsertReferencePortfolioConstituentsRequest';
export * from './upsertReferencePortfolioConstituentsResponse';
export * from './upsertTransactionPropertiesResponse';
export * from './user';
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
import { CompletePortfolio } from './completePortfolio';
import { ConstituentsAdjustmentHeader } from './constituentsAdjustmentHeader';
import { CreateCutLabelDefinitionRequest } from './createCutLabelDefinitionRequest';
import { CreateDerivedTransactionPortfolioRequest } from './createDerivedTransactionPortfolioRequest';
import { CreatePortfolioDetails } from './createPortfolioDetails';
import { CreatePortfolioGroupRequest } from './createPortfolioGroupRequest';
import { CreatePropertyDefinitionRequest } from './createPropertyDefinitionRequest';
import { CreateReferencePortfolioRequest } from './createReferencePortfolioRequest';
import { CreateTransactionPortfolioRequest } from './createTransactionPortfolioRequest';
import { CurrencyAndAmount } from './currencyAndAmount';
import { CutLabelDefinition } from './cutLabelDefinition';
import { CutLocalTime } from './cutLocalTime';
import { DataType } from './dataType';
import { DeleteInstrumentResponse } from './deleteInstrumentResponse';
import { DeletedEntityResponse } from './deletedEntityResponse';
import { ErrorDetail } from './errorDetail';
import { ExecutionRequest } from './executionRequest';
import { ExpandedGroup } from './expandedGroup';
import { FileResponse } from './fileResponse';
import { GetInstrumentsResponse } from './getInstrumentsResponse';
import { GetReferencePortfolioConstituentsResponse } from './getReferencePortfolioConstituentsResponse';
import { HoldingAdjustment } from './holdingAdjustment';
import { HoldingsAdjustment } from './holdingsAdjustment';
import { HoldingsAdjustmentHeader } from './holdingsAdjustmentHeader';
import { IUnitDefinitionDto } from './iUnitDefinitionDto';
import { IdSelectorDefinition } from './idSelectorDefinition';
import { IdentifierPartSchema } from './identifierPartSchema';
import { Instrument } from './instrument';
import { InstrumentDefinition } from './instrumentDefinition';
import { InstrumentEconomicDefinition } from './instrumentEconomicDefinition';
import { InstrumentIdTypeDescriptor } from './instrumentIdTypeDescriptor';
import { InstrumentIdValue } from './instrumentIdValue';
import { LabelValueSet } from './labelValueSet';
import { Link } from './link';
import { LusidProblemDetails } from './lusidProblemDetails';
import { LusidValidationProblemDetails } from './lusidValidationProblemDetails';
import { MetricValue } from './metricValue';
import { OutputTransaction } from './outputTransaction';
import { PagedResourceListOfInstrument } from './pagedResourceListOfInstrument';
import { PerpetualProperty } from './perpetualProperty';
import { Portfolio } from './portfolio';
import { PortfolioDetails } from './portfolioDetails';
import { PortfolioGroup } from './portfolioGroup';
import { PortfolioGroupProperties } from './portfolioGroupProperties';
import { PortfolioHolding } from './portfolioHolding';
import { PortfolioProperties } from './portfolioProperties';
import { PortfolioReconciliationRequest } from './portfolioReconciliationRequest';
import { PortfolioSearchResult } from './portfolioSearchResult';
import { PortfoliosReconciliationRequest } from './portfoliosReconciliationRequest';
import { ProcessedCommand } from './processedCommand';
import { Property } from './property';
import { PropertyDefinition } from './propertyDefinition';
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
import { ResourceListOfConstituentsAdjustmentHeader } from './resourceListOfConstituentsAdjustmentHeader';
import { ResourceListOfCutLabelDefinition } from './resourceListOfCutLabelDefinition';
import { ResourceListOfDataType } from './resourceListOfDataType';
import { ResourceListOfHoldingsAdjustmentHeader } from './resourceListOfHoldingsAdjustmentHeader';
import { ResourceListOfIUnitDefinitionDto } from './resourceListOfIUnitDefinitionDto';
import { ResourceListOfInstrumentIdTypeDescriptor } from './resourceListOfInstrumentIdTypeDescriptor';
import { ResourceListOfPortfolio } from './resourceListOfPortfolio';
import { ResourceListOfPortfolioGroup } from './resourceListOfPortfolioGroup';
import { ResourceListOfPortfolioSearchResult } from './resourceListOfPortfolioSearchResult';
import { ResourceListOfProcessedCommand } from './resourceListOfProcessedCommand';
import { ResourceListOfPropertyDefinition } from './resourceListOfPropertyDefinition';
import { ResourceListOfQuote } from './resourceListOfQuote';
import { ResourceListOfReconciliationBreak } from './resourceListOfReconciliationBreak';
import { ResourceListOfScopeDefinition } from './resourceListOfScopeDefinition';
import { ScopeDefinition } from './scopeDefinition';
import { SideConfigurationData } from './sideConfigurationData';
import { Stream } from './stream';
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
import { TransactionSetConfigurationData } from './transactionSetConfigurationData';
import { UpdateCutLabelDefinitionRequest } from './updateCutLabelDefinitionRequest';
import { UpdateInstrumentIdentifierRequest } from './updateInstrumentIdentifierRequest';
import { UpdatePortfolioGroupRequest } from './updatePortfolioGroupRequest';
import { UpdatePortfolioRequest } from './updatePortfolioRequest';
import { UpdatePropertyDefinitionRequest } from './updatePropertyDefinitionRequest';
import { UpsertInstrumentPropertiesResponse } from './upsertInstrumentPropertiesResponse';
import { UpsertInstrumentPropertyRequest } from './upsertInstrumentPropertyRequest';
import { UpsertInstrumentsResponse } from './upsertInstrumentsResponse';
import { UpsertPortfolioExecutionsResponse } from './upsertPortfolioExecutionsResponse';
import { UpsertPortfolioTransactionsResponse } from './upsertPortfolioTransactionsResponse';
import { UpsertReferencePortfolioConstituentsRequest } from './upsertReferencePortfolioConstituentsRequest';
import { UpsertReferencePortfolioConstituentsResponse } from './upsertReferencePortfolioConstituentsResponse';
import { UpsertTransactionPropertiesResponse } from './upsertTransactionPropertiesResponse';
import { User } from './user';
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
        "CompletePortfolio.TypeEnum": CompletePortfolio.TypeEnum,
        "CreateDerivedTransactionPortfolioRequest.AccountingMethodEnum": CreateDerivedTransactionPortfolioRequest.AccountingMethodEnum,
        "CreatePropertyDefinitionRequest.DomainEnum": CreatePropertyDefinitionRequest.DomainEnum,
        "CreatePropertyDefinitionRequest.LifeTimeEnum": CreatePropertyDefinitionRequest.LifeTimeEnum,
        "CreateTransactionPortfolioRequest.AccountingMethodEnum": CreateTransactionPortfolioRequest.AccountingMethodEnum,
        "DataType.TypeValueRangeEnum": DataType.TypeValueRangeEnum,
        "DataType.ValueTypeEnum": DataType.ValueTypeEnum,
        "DataType.UnitSchemaEnum": DataType.UnitSchemaEnum,
        "GetReferencePortfolioConstituentsResponse.WeightTypeEnum": GetReferencePortfolioConstituentsResponse.WeightTypeEnum,
        "GetReferencePortfolioConstituentsResponse.PeriodTypeEnum": GetReferencePortfolioConstituentsResponse.PeriodTypeEnum,
        "HoldingsAdjustment.UnmatchedHoldingMethodEnum": HoldingsAdjustment.UnmatchedHoldingMethodEnum,
        "HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum": HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum,
        "IUnitDefinitionDto.SchemaEnum": IUnitDefinitionDto.SchemaEnum,
        "Instrument.StateEnum": Instrument.StateEnum,
        "OutputTransaction.TransactionStatusEnum": OutputTransaction.TransactionStatusEnum,
        "Portfolio.TypeEnum": Portfolio.TypeEnum,
        "PortfolioSearchResult.TypeEnum": PortfolioSearchResult.TypeEnum,
        "PropertyDefinition.ValueTypeEnum": PropertyDefinition.ValueTypeEnum,
        "PropertyDefinition.LifeTimeEnum": PropertyDefinition.LifeTimeEnum,
        "PropertyDefinition.TypeEnum": PropertyDefinition.TypeEnum,
        "PropertyDefinition.UnitSchemaEnum": PropertyDefinition.UnitSchemaEnum,
        "PropertyDefinition.DomainEnum": PropertyDefinition.DomainEnum,
        "QuoteSeriesId.InstrumentIdTypeEnum": QuoteSeriesId.InstrumentIdTypeEnum,
        "QuoteSeriesId.QuoteTypeEnum": QuoteSeriesId.QuoteTypeEnum,
        "TransactionConfigurationMovementData.MovementTypesEnum": TransactionConfigurationMovementData.MovementTypesEnum,
        "TransactionConfigurationMovementDataRequest.MovementTypesEnum": TransactionConfigurationMovementDataRequest.MovementTypesEnum,
        "TransactionConfigurationTypeAlias.TransactionRolesEnum": TransactionConfigurationTypeAlias.TransactionRolesEnum,
        "TransactionPrice.TypeEnum": TransactionPrice.TypeEnum,
        "TransactionQueryParameters.QueryModeEnum": TransactionQueryParameters.QueryModeEnum,
        "UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum": UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum,
        "UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum": UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AccessControlledAction": AccessControlledAction,
    "AccessControlledResource": AccessControlledResource,
    "ActionId": ActionId,
    "AdjustHolding": AdjustHolding,
    "AdjustHoldingRequest": AdjustHoldingRequest,
    "CompletePortfolio": CompletePortfolio,
    "ConstituentsAdjustmentHeader": ConstituentsAdjustmentHeader,
    "CreateCutLabelDefinitionRequest": CreateCutLabelDefinitionRequest,
    "CreateDerivedTransactionPortfolioRequest": CreateDerivedTransactionPortfolioRequest,
    "CreatePortfolioDetails": CreatePortfolioDetails,
    "CreatePortfolioGroupRequest": CreatePortfolioGroupRequest,
    "CreatePropertyDefinitionRequest": CreatePropertyDefinitionRequest,
    "CreateReferencePortfolioRequest": CreateReferencePortfolioRequest,
    "CreateTransactionPortfolioRequest": CreateTransactionPortfolioRequest,
    "CurrencyAndAmount": CurrencyAndAmount,
    "CutLabelDefinition": CutLabelDefinition,
    "CutLocalTime": CutLocalTime,
    "DataType": DataType,
    "DeleteInstrumentResponse": DeleteInstrumentResponse,
    "DeletedEntityResponse": DeletedEntityResponse,
    "ErrorDetail": ErrorDetail,
    "ExecutionRequest": ExecutionRequest,
    "ExpandedGroup": ExpandedGroup,
    "FileResponse": FileResponse,
    "GetInstrumentsResponse": GetInstrumentsResponse,
    "GetReferencePortfolioConstituentsResponse": GetReferencePortfolioConstituentsResponse,
    "HoldingAdjustment": HoldingAdjustment,
    "HoldingsAdjustment": HoldingsAdjustment,
    "HoldingsAdjustmentHeader": HoldingsAdjustmentHeader,
    "IUnitDefinitionDto": IUnitDefinitionDto,
    "IdSelectorDefinition": IdSelectorDefinition,
    "IdentifierPartSchema": IdentifierPartSchema,
    "Instrument": Instrument,
    "InstrumentDefinition": InstrumentDefinition,
    "InstrumentEconomicDefinition": InstrumentEconomicDefinition,
    "InstrumentIdTypeDescriptor": InstrumentIdTypeDescriptor,
    "InstrumentIdValue": InstrumentIdValue,
    "LabelValueSet": LabelValueSet,
    "Link": Link,
    "LusidProblemDetails": LusidProblemDetails,
    "LusidValidationProblemDetails": LusidValidationProblemDetails,
    "MetricValue": MetricValue,
    "OutputTransaction": OutputTransaction,
    "PagedResourceListOfInstrument": PagedResourceListOfInstrument,
    "PerpetualProperty": PerpetualProperty,
    "Portfolio": Portfolio,
    "PortfolioDetails": PortfolioDetails,
    "PortfolioGroup": PortfolioGroup,
    "PortfolioGroupProperties": PortfolioGroupProperties,
    "PortfolioHolding": PortfolioHolding,
    "PortfolioProperties": PortfolioProperties,
    "PortfolioReconciliationRequest": PortfolioReconciliationRequest,
    "PortfolioSearchResult": PortfolioSearchResult,
    "PortfoliosReconciliationRequest": PortfoliosReconciliationRequest,
    "ProcessedCommand": ProcessedCommand,
    "Property": Property,
    "PropertyDefinition": PropertyDefinition,
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
    "ResourceListOfConstituentsAdjustmentHeader": ResourceListOfConstituentsAdjustmentHeader,
    "ResourceListOfCutLabelDefinition": ResourceListOfCutLabelDefinition,
    "ResourceListOfDataType": ResourceListOfDataType,
    "ResourceListOfHoldingsAdjustmentHeader": ResourceListOfHoldingsAdjustmentHeader,
    "ResourceListOfIUnitDefinitionDto": ResourceListOfIUnitDefinitionDto,
    "ResourceListOfInstrumentIdTypeDescriptor": ResourceListOfInstrumentIdTypeDescriptor,
    "ResourceListOfPortfolio": ResourceListOfPortfolio,
    "ResourceListOfPortfolioGroup": ResourceListOfPortfolioGroup,
    "ResourceListOfPortfolioSearchResult": ResourceListOfPortfolioSearchResult,
    "ResourceListOfProcessedCommand": ResourceListOfProcessedCommand,
    "ResourceListOfPropertyDefinition": ResourceListOfPropertyDefinition,
    "ResourceListOfQuote": ResourceListOfQuote,
    "ResourceListOfReconciliationBreak": ResourceListOfReconciliationBreak,
    "ResourceListOfScopeDefinition": ResourceListOfScopeDefinition,
    "ScopeDefinition": ScopeDefinition,
    "SideConfigurationData": SideConfigurationData,
    "Stream": Stream,
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
    "TransactionSetConfigurationData": TransactionSetConfigurationData,
    "UpdateCutLabelDefinitionRequest": UpdateCutLabelDefinitionRequest,
    "UpdateInstrumentIdentifierRequest": UpdateInstrumentIdentifierRequest,
    "UpdatePortfolioGroupRequest": UpdatePortfolioGroupRequest,
    "UpdatePortfolioRequest": UpdatePortfolioRequest,
    "UpdatePropertyDefinitionRequest": UpdatePropertyDefinitionRequest,
    "UpsertInstrumentPropertiesResponse": UpsertInstrumentPropertiesResponse,
    "UpsertInstrumentPropertyRequest": UpsertInstrumentPropertyRequest,
    "UpsertInstrumentsResponse": UpsertInstrumentsResponse,
    "UpsertPortfolioExecutionsResponse": UpsertPortfolioExecutionsResponse,
    "UpsertPortfolioTransactionsResponse": UpsertPortfolioTransactionsResponse,
    "UpsertReferencePortfolioConstituentsRequest": UpsertReferencePortfolioConstituentsRequest,
    "UpsertReferencePortfolioConstituentsResponse": UpsertReferencePortfolioConstituentsResponse,
    "UpsertTransactionPropertiesResponse": UpsertTransactionPropertiesResponse,
    "User": User,
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