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
export * from './deleteInstrumentPropertyRequest';
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
export * from './link';
export * from './lusidProblemDetails';
export * from './lusidValidationProblemDetails';
export * from './metricValue';
export * from './outputTransaction';
export * from './perpetualProperty';
export * from './portfolio';
export * from './portfolioDetails';
export * from './portfolioGroup';
export * from './portfolioHolding';
export * from './portfolioProperties';
export * from './portfolioReconciliationRequest';
export * from './portfoliosReconciliationRequest';
export * from './processedCommand';
export * from './property';
export * from './propertyDefinition';
export * from './propertyValue';
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
export * from './resourceListOfInstrument';
export * from './resourceListOfInstrumentIdTypeDescriptor';
export * from './resourceListOfPortfolio';
export * from './resourceListOfPortfolioGroup';
export * from './resourceListOfProcessedCommand';
export * from './resourceListOfPropertyDefinition';
export * from './resourceListOfReconciliationBreak';
export * from './resourceListOfScopeDefinition';
export * from './resourceListOfTransactionConfigurationData';
export * from './scopeDefinition';
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
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
