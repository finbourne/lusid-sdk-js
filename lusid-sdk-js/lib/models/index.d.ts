/*
 * Copyright © 2018 FINBOURNE TECHNOLOGY LTD
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import * as moment from "moment";

export interface CreateAnalyticStoreRequest {
  scope?: string;
  date?: Date;
}

export interface AnalyticStoreKey {
  scope?: string;
  date?: Date;
}

export interface Link {
  /**
   * Possible values include: 'Root', 'Properties', 'Transactions', 'Details', 'Constituents',
   * 'Holdings', 'Commands', 'HoldingsAdjustments', 'Parent', 'PropertySchema', 'EntitySchema',
   * 'Quote', 'ConstituentsAdjustments'
  */
  relation: string;
  href: string;
  description?: string;
  /**
   * Possible values include: 'POST', 'GET', 'PATCH', 'DELETE'
  */
  method: string;
}

export interface AnalyticStore {
  key?: AnalyticStoreKey;
  href?: string;
  links?: Link[];
}

export interface ErrorDetailBase {
  id?: string;
  type?: string;
  detail?: string;
}

export interface ErrorResponse {
  readonly status?: number;
  /**
   * Possible values include: 'Unknown', 'VersionNotFound', 'InstrumentNotFound',
   * 'PropertyNotFound', 'PortfolioRecursionDepth', 'GroupNotFound', 'PortfolioNotFound',
   * 'PropertySchemaNotFound', 'PortfolioAncestryNotFound', 'PortfolioWithIdAlreadyExists',
   * 'OrphanedPortfolio', 'MissingBaseClaims', 'PropertyNotDefined', 'CannotDeleteSystemProperty',
   * 'CannotModifyImmutablePropertyField', 'PropertyAlreadyExists', 'InvalidPropertyLifeTime',
   * 'CannotModifyDefaultDataType', 'GroupAlreadyExists', 'NoSuchDataType', 'ValidationError',
   * 'LoopDetectedInGroupHierarchy', 'SubGroupAlreadyExists', 'PriceSourceNotFound',
   * 'AnalyticStoreNotFound', 'AnalyticStoreAlreadyExists', 'ClientInstrumentAlreadyExists',
   * 'DuplicateInParameterSet', 'ResultsNotFound', 'OrderFieldNotInResultSet', 'OperationFailed',
   * 'ElasticSearchError', 'InvalidParameterValue', 'CommandProcessingFailure',
   * 'EntityStateConstructionFailure', 'EntityTimelineDoesNotExist', 'EventPublishFailure',
   * 'InvalidRequestFailure', 'EventPublishUnknown', 'EventQueryFailure', 'BlobDidNotExistFailure',
   * 'SubSystemRequestFailure', 'SubSystemConfigurationFailure', 'FailedToDelete',
   * 'UpsertClientInstrumentFailure', 'IllegalAsAtInterval', 'IllegalBitemporalQuery',
   * 'InvalidAlternateId', 'CannotAddSourcePortfolioPropertyExplicitly',
   * 'EntityAlreadyExistsInGroup', 'EntityWithIdAlreadyExists', 'PortfolioDetailsDoNotExist',
   * 'PortfolioWithNameAlreadyExists', 'InvalidTransactions', 'ReferencePortfolioNotFound',
   * 'DuplicateIdFailure', 'CommandRetrievalFailure', 'DataFilterApplicationFailure',
   * 'SearchFailed', 'MovementsEngineConfigurationKeyFailure', 'FxRateSourceNotFound',
   * 'AccrualSourceNotFound', 'EntitlementsFailure', 'InvalidIdentityToken',
   * 'InvalidRequestHeaders', 'PriceNotFound', 'InvalidSubHoldingKeysProvided',
   * 'DuplicateSubHoldingKeysProvided', 'CutDefinitionNotFound', 'CutDefinitionInvalid',
   * 'ServerConfigurationError', 'InvalidUnitForDataType', 'InvalidTypeForDataType',
   * 'InvalidValueForDataType', 'UnitNotDefinedForDataType', 'UnitsNotSupportedOnDataType',
   * 'CannotSpecifyUnitsOnDataType', 'UnitSchemaInconsistentWithDataType',
   * 'UnitDefinitionNotSpecified', 'DuplicateUnitDefinitionsSpecified', 'InvalidUnitsDefinition',
   * 'InvalidInstrumentIdentifierUnit', 'HoldingsAdjustmentDoesNotExist', 'CouldNotBuildExcelUrl',
   * 'CouldNotGetExcelVersion', 'InstrumentByCodeNotFound', 'EntitySchemaDoesNotExist',
   * 'FeatureNotSupportedOnPortfolioType', 'QuoteNotFoundFailure',
   * 'ReferencePortfolioRequestNotSupported', 'TransactionPortfolioRequestNotSupported',
   * 'InvalidInstrumentDefinition', 'InstrumentUpsertFailure', 'TransactionTypeNotFound',
   * 'TransactionTypeDuplication', 'InvalidPropertyValueAssignment',
   * 'PortfolioDoesNotExistAtGivenDate', 'QueryParserFailure', 'DependenciesFailure',
   * 'PortfolioPreprocessFailure', 'ValuationEngineFailure', 'TaskFactoryFailure',
   * 'TaskEvaluationFailure', 'InstrumentFailure', 'CashFlowsFailure', 'ResultRetrievalFailure',
   * 'ResultProcessingFailure', 'VendorResultProcessingFailure',
   * 'CannotSupplyTimesWithPortfoliosQuery', 'AttemptToUpsertDuplicateQuotes'
  */
  readonly code?: string;
  readonly message?: string;
  readonly detailedMessage?: string;
  items?: ErrorDetailBase[];
  readonly moreInfo?: string;
}

export interface ResourceListOfAnalyticStoreKey {
  values?: AnalyticStoreKey[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface DeletedEntityResponse {
  href?: string;
  effectiveFrom?: Date;
  asAt?: Date;
  links?: Link[];
}

export interface InstrumentAnalytic {
  /**
   * Unique instrument identifier
  */
  instrumentUid?: string;
  /**
   * Value of the analytic, eg price
  */
  value?: number;
  /**
   * Underlying unit of the analytic, eg currency, EPS etc.
  */
  denomination?: string;
}

export interface CreateCorporateActionSourceRequest {
  scope?: string;
  code?: string;
}

export interface ResourceId {
  scope?: string;
  code?: string;
}

/**
 * Describes the version metadata of an entity.
*/
export interface Version {
  readonly effectiveFrom?: Date;
  readonly asAtDate?: Date;
}

export interface CorporateActionSource {
  href?: string;
  id?: ResourceId;
  version?: Version;
  links?: Link[];
}

export interface ResourceListOfCorporateActionSource {
  values?: CorporateActionSource[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface CorporateActionTransitionComponent {
  instrumentUid: string;
  unitsFactor: number;
  costFactor: number;
}

/**
 * A 'transition' within a corporate action, representing a set of output movements paired to a
 * single input position
*/
export interface CorporateActionTransition {
  inputTransition?: CorporateActionTransitionComponent;
  outputTransitions?: CorporateActionTransitionComponent[];
}

export interface CreateCorporateAction {
  corporateActionCode: string;
  announcementDate: Date;
  exDate: Date;
  recordDate: Date;
  paymentDate: Date;
  transitions: CorporateActionTransition[];
}

/**
 * A corporate action
*/
export interface CorporateAction {
  sourceId: ResourceId;
  corporateActionCode: string;
  announcementDate?: Date;
  exDate?: Date;
  recordDate?: Date;
  paymentDate?: Date;
  transitions?: CorporateActionTransition[];
}

export interface ErrorDetail {
  id?: string;
  type?: string;
  detail?: string;
}

export interface UpsertCorporateActionsResponse {
  href?: string;
  values?: { [propertyName: string]: CorporateAction };
  failed?: { [propertyName: string]: ErrorDetail };
  links?: Link[];
}

export interface ResourceListOfCorporateAction {
  values?: CorporateAction[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface CreateUnitDefinition {
  code: string;
  displayName: string;
  description: string;
  details?: { [propertyName: string]: string };
}

export interface CreateDataTypeRequest {
  scope: string;
  code: string;
  /**
   * Possible values include: 'Open', 'Closed'
  */
  typeValueRange: string;
  displayName: string;
  description: string;
  /**
   * Possible values include: 'String', 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List',
   * 'PropertyArray', 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits', 'StringArray',
   * 'CurrencyAndAmount', 'TradePrice', 'UnitCreation', 'Currency', 'UserId', 'MetricValue',
   * 'QuoteId', 'QuoteLineage', 'ArrayOfQuoteIds', 'ResourceId'
  */
  valueType: string;
  acceptableValues?: any[];
  /**
   * Possible values include: 'NoUnits', 'Basic', 'Iso4217Currency'
  */
  unitSchema?: string;
  acceptableUnits?: CreateUnitDefinition[];
}

export interface IUnitDefinitionDto {
  /**
   * Possible values include: 'NoUnits', 'Basic', 'Iso4217Currency'
  */
  readonly schema?: string;
  readonly code?: string;
  readonly displayName?: string;
  readonly description?: string;
}

export interface DataType {
  href?: string;
  /**
   * Possible values include: 'Open', 'Closed'
  */
  typeValueRange?: string;
  id?: ResourceId;
  displayName?: string;
  description?: string;
  /**
   * Possible values include: 'String', 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List',
   * 'PropertyArray', 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits', 'StringArray',
   * 'CurrencyAndAmount', 'TradePrice', 'UnitCreation', 'Currency', 'UserId', 'MetricValue',
   * 'QuoteId', 'QuoteLineage', 'ArrayOfQuoteIds', 'ResourceId'
  */
  valueType?: string;
  acceptableValues?: any[];
  /**
   * Possible values include: 'NoUnits', 'Basic', 'Iso4217Currency'
  */
  unitSchema?: string;
  acceptableUnits?: IUnitDefinitionDto[];
  links?: Link[];
}

export interface ResourceListOfDataType {
  values?: DataType[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface UpdateDataTypeRequest {
  /**
   * Possible values include: 'Open', 'Closed'
  */
  typeValueRange: string;
  displayName: string;
  description: string;
  /**
   * Possible values include: 'String', 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List',
   * 'PropertyArray', 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits', 'StringArray',
   * 'CurrencyAndAmount', 'TradePrice', 'UnitCreation', 'Currency', 'UserId', 'MetricValue',
   * 'QuoteId', 'QuoteLineage', 'ArrayOfQuoteIds', 'ResourceId'
  */
  valueType: string;
  acceptableValues?: any[];
  /**
   * Possible values include: 'NoUnits', 'Basic', 'Iso4217Currency'
  */
  unitSchema?: string;
  acceptableUnits?: CreateUnitDefinition[];
}

export interface ResourceListOfIUnitDefinitionDto {
  values?: IUnitDefinitionDto[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface CreateDerivedTransactionPortfolioRequest {
  displayName: string;
  description?: string;
  code?: string;
  parentPortfolioId?: ResourceId;
  created?: Date;
  corporateActionSourceId?: ResourceId;
  /**
   * Possible values include: 'Default', 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut',
   * 'HighestCostFirst', 'LowestCostFirst'
  */
  accountingMethod?: string;
  subHoldingKeys?: string[];
}

export interface Portfolio {
  /**
   * Link to retrieve the current entity
  */
  readonly href?: string;
  /**
   * Identifier for the portfolio
  */
  readonly id?: ResourceId;
  /**
   * The type of portfolio this is (e.g. Transaction Portfolio, Reference  Portfolio). Possible
   * values include: 'Transaction', 'Reference', 'DerivedTransaction'
  */
  readonly type?: string;
  /**
   * Display name of the portfolio
  */
  readonly displayName?: string;
  /**
   * Description of the portfolio
  */
  readonly description?: string;
  /**
   * Portfolio creation time in UTC
  */
  readonly created?: Date;
  /**
   * If this is a derived portfolio, the identifier of the portfolio from which it is derived
  */
  readonly parentPortfolioId?: ResourceId;
  /**
   * The version of the portfolio
  */
  readonly version?: Version;
  readonly isDerived?: boolean;
  links?: Link[];
}

export interface MetricValue {
  value?: number;
  unit?: string;
}

export interface PropertyValue {
  labelValue?: string;
  metricValue?: MetricValue;
  /**
   * Date for which the property is effective from
  */
  effectiveFrom?: Date;
}

export interface InstrumentProperty {
  /**
   * The property key of the property, e.g, 'Instrument/default/Isin'
  */
  key?: string;
  /**
   * The value of the property, which must not be empty or null. e.g, 'US0378331005'
  */
  value?: PropertyValue;
}

/**
 * Expanded instrument definition - in the case of OTC instruments
 * this contains the definition of the non-exchange traded instrument.
 * The format for this can be client-defined, but in order to transparently use
 * vendor libraries it must conform to a format that LUSID understands.
*/
export interface InstrumentEconomicDefinition {
  instrumentFormat: string;
  content: string;
}

export interface InstrumentDefinition {
  /**
   * Required. The name of the instrument
  */
  name: string;
  /**
   * Required. A set of identifiers that uniquely identify this instrument (e.g FIGI, RIC)
  */
  identifiers: { [propertyName: string]: string };
  /**
   * Optional. A collection of properties to upsert on the instrument.
  */
  properties?: InstrumentProperty[];
  /**
   * Optional. The identifier of the portfolio that represents this instrument
  */
  lookThroughPortfolioId?: ResourceId;
  /**
   * Expanded instrument definition - in the case of OTC instruments
   * this contains the definition of the non-exchange traded instrument.
   * The format for this can be client-defined, but in order to transparently use
   * vendor libraries it must conform to a format that LUSID understands.
  */
  definition?: InstrumentEconomicDefinition;
}

export interface Property {
  key: string;
  value: any;
  unit?: string;
  /**
   * Date for which the property is effective from
  */
  effectiveFrom?: Date;
}

export interface Instrument {
  href?: string;
  /**
   * The lusid instrument id (LUID) of the instrument
  */
  lusidInstrumentId?: string;
  /**
   * The version of the instrument
  */
  version?: Version;
  /**
   * The name of the instrument
  */
  name?: string;
  /**
   * The set of identifiers that can be used to uniquely identify the instrument
  */
  identifiers?: { [propertyName: string]: string };
  /**
   * Any requested instrument properties. If no property can be found for the instrument, then
   * a value of 'Unknown' will be returned
  */
  properties?: Property[];
  /**
   * The lookthrough portfolio of the instrument (if any).
  */
  lookthroughPortfolio?: ResourceId;
  links?: Link[];
}

export interface UpsertInstrumentsResponse {
  href?: string;
  /**
   * The collection of upserted instruments with their latest parameters.
  */
  values?: { [propertyName: string]: Instrument };
  /**
   * If any instruments failed to be upserted, they will be listed in 'Failed', along
   * with a reason why.
  */
  failed?: { [propertyName: string]: ErrorDetail };
  links?: Link[];
}

export interface ResourceListOfInstrument {
  values?: Instrument[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface UpdateInstrumentIdentifierRequest {
  /**
   * The type of the identifier to upsert. This must be one of the code types marked as
   * allowable for instrument identifiers.
  */
  type?: string;
  /**
   * The value of the identifier. If set to `null`, this will remove the identifier completely.
   * Note that, if an instrument only has one identifier, it is an error to remove this.
  */
  value?: string;
  /**
   * The date at which the identifier modification is to be effective from. If unset, will
   * default to `now`.
  */
  effectiveAt?: Date;
}

export interface DeleteInstrumentResponse {
  href?: string;
  /**
   * The 'as at' time that the instrument was deleted at. As at times preceding this can
   * still be used to query the instrument.
  */
  asAt?: Date;
  links?: Link[];
}

export interface GetInstrumentsResponse {
  href?: string;
  /**
   * The instruments, keyed by their requested identifier. Only instruments that were found
   * will be contained in this collection.
  */
  values?: { [propertyName: string]: Instrument };
  /**
   * If any instruments were not found, then they will be listed in as 'Failed', along with the
   * nature
   * of their failure.
  */
  failed?: { [propertyName: string]: ErrorDetail };
  links?: Link[];
}

export interface MatchInstrumentsResponse {
  href?: string;
  /**
   * A dictionary of instruments that are keyed by the search criteria supplied in the
   * matching request. If no match was found, then there will be no values in the collection
   * for that key.
  */
  values?: { [propertyName: string]: InstrumentDefinition[] };
  links?: Link[];
}

export interface DeleteInstrumentPropertyRequest {
  /**
   * The property key of the property to be removed from the instrument, e.g
   * 'Instrument/default/Cusip`
  */
  instrumentPropertyKey?: string;
  /**
   * The date at which the property removal should be effective from. If no value is set, then
   * 'now' is used.
  */
  effectiveFrom?: Date;
}

export interface UpsertInstrumentPropertyRequest {
  /**
   * Unique instrument identifier
  */
  lusidInstrumentId?: string;
  /**
   * A collection of properties to create or update
  */
  properties?: InstrumentProperty[];
  /**
   * A collection of property keys to remove property values from, if any are set for the
   * instrument
  */
  deletedProperties?: DeleteInstrumentPropertyRequest[];
}

export interface UpsertInstrumentPropertiesResponse {
  href?: string;
  /**
   * A list of any values that failed to be upserted.
  */
  readonly failed?: ErrorDetail[];
  links?: Link[];
}

export interface ResourceListOfString {
  values?: string[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface Stream {
  readonly canRead?: boolean;
  readonly canSeek?: boolean;
  readonly canTimeout?: boolean;
  readonly canWrite?: boolean;
  readonly length?: number;
  position?: number;
  readTimeout?: number;
  writeTimeout?: number;
}

/**
 * Allows a file (represented as a stream) to be returned from an Api call
*/
export interface FileResponse {
  readonly fileStream?: Stream;
  readonly contentType?: string;
  readonly downloadedFilename?: string;
}

export interface VersionSummaryDto {
  readonly apiVersion?: string;
  readonly buildVersion?: string;
  readonly excelVersion?: string;
  links?: Link[];
}

export interface CreatePortfolioGroupRequest {
  id: string;
  values?: ResourceId[];
  subGroups?: ResourceId[];
  displayName: string;
  description?: string;
}

export interface PortfolioGroup {
  href?: string;
  id?: ResourceId;
  displayName?: string;
  description?: string;
  portfolios?: ResourceId[];
  subGroups?: ResourceId[];
  version?: Version;
  links?: Link[];
}

export interface ResourceListOfPortfolioGroup {
  values?: PortfolioGroup[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface UpdatePortfolioGroupRequest {
  displayName: string;
  description?: string;
}

export interface AggregateSpec {
  key: string;
  /**
   * Possible values include: 'Sum', 'Proportion', 'Average', 'Count', 'Min', 'Max', 'Value'
  */
  op: string;
}

export interface PropertyFilter {
  left?: string;
  /**
   * Possible values include: 'Equals', 'NotEquals', 'GreaterThan', 'GreaterThanOrEqualTo',
   * 'LessThan', 'LessThanOrEqualTo', 'In'
  */
  operator?: string;
  right?: any;
  /**
   * Possible values include: 'Absolute', 'Property'
  */
  rightOperandType?: string;
}

/**
 * Specification object for the parameters of an aggregation
*/
export interface AggregationRequest {
  recipeId: ResourceId;
  /**
   * The asAt date to use
  */
  asAt?: Date;
  effectiveAt: Date;
  metrics: AggregateSpec[];
  groupBy?: string[];
  filters?: PropertyFilter[];
  limit?: number;
  sort?: string;
}

export interface FieldSchema {
  scope?: string;
  name?: string;
  displayName?: string;
  /**
   * Possible values include: 'String', 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List',
   * 'PropertyArray', 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits', 'StringArray',
   * 'CurrencyAndAmount', 'TradePrice', 'UnitCreation', 'Currency', 'UserId', 'MetricValue',
   * 'QuoteId', 'QuoteLineage', 'ArrayOfQuoteIds', 'ResourceId'
  */
  type?: string;
  isMetric?: boolean;
  displayOrder?: number;
  propertySchema?: { [propertyName: string]: FieldSchema };
}

export interface ResultDataSchema {
  nodeValueSchema?: { [propertyName: string]: FieldSchema };
  propertySchema?: { [propertyName: string]: FieldSchema };
}

export interface ListAggregationResponse {
  href?: string;
  data?: { [propertyName: string]: any }[];
  aggregationCurrency?: string;
  dataSchema?: ResultDataSchema;
  links?: Link[];
}

export interface AggregationResponseNode {
  key?: string;
  value?: string;
  depth?: number;
  properties?: { [propertyName: string]: any };
  children?: AggregationResponseNode[];
}

export interface NestedAggregationResponse {
  href?: string;
  data?: AggregationResponseNode;
  aggregationCurrency?: string;
  dataSchema?: ResultDataSchema;
  links?: Link[];
}

export interface User {
  readonly id?: string;
}

export interface ProcessedCommand {
  description?: string;
  path?: string;
  /**
   * The user that issued the command.
  */
  userId?: User;
  /**
   * The as at time of the events published by the processing of
   * this command.
  */
  processedTime?: any;
}

export interface ResourceListOfProcessedCommand {
  values?: ProcessedCommand[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface CompletePortfolio {
  readonly id?: ResourceId;
  readonly href?: string;
  readonly description?: string;
  readonly displayName?: string;
  readonly created?: Date;
  readonly parentPortfolioId?: ResourceId;
  readonly isDerived?: boolean;
  /**
   * Possible values include: 'Transaction', 'Reference', 'DerivedTransaction'
  */
  readonly type?: string;
  version?: Version;
  properties?: Property[];
  baseCurrency?: string;
  links?: Link[];
}

export interface ExpandedGroup {
  href?: string;
  id?: ResourceId;
  name?: string;
  description?: string;
  values?: CompletePortfolio[];
  subGroups?: ExpandedGroup[];
  version?: Version;
  links?: Link[];
}

export interface ResourceListOfPortfolio {
  values?: Portfolio[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface UpdatePortfolioRequest {
  displayName: string;
  description?: string;
  created?: Date;
}

export interface PortfolioProperties {
  href?: string;
  originPortfolioId?: ResourceId;
  properties?: Property[];
  /**
   * The version of the portfolio
  */
  version?: Version;
  links?: Link[];
}

export interface PortfolioReconciliationRequest {
  /**
   * The id of the portfolio to be reconciled
  */
  portfolioId: ResourceId;
  /**
   * The effective date of the portfolio
  */
  effectiveAt: Date;
  /**
   * Optional. The AsAt date of the portfolio
  */
  asAt?: Date;
}

export interface PortfoliosReconciliationRequest {
  /**
   * The specification of the left hand side of the portfolio reconciliation
  */
  left: PortfolioReconciliationRequest;
  /**
   * The specification of the right hand side of the portfolio reconciliation
  */
  right: PortfolioReconciliationRequest;
  /**
   * Instrument properties to be included with any identified breaks. These properties will be in
   * the effective and AsAt dates of the left portfolio
  */
  instrumentPropertyKeys: string[];
}

/**
 * This is intended to be the external facing unitemporal property specification data type.
*/
export interface PerpetualProperty {
  key: string;
  value: any;
  readonly unit?: string;
}

export interface CurrencyAndAmount {
  amount?: number;
  currency?: string;
}

/**
 * A reconciliation break
*/
export interface ReconciliationBreak {
  /**
   * Unique instrument identifier
  */
  instrumentUid: string;
  /**
   * Any other properties that comprise the Sub-Holding Key
  */
  subHoldingKeys: PerpetualProperty[];
  /**
   * Units from the left hand side
  */
  leftUnits: number;
  /**
   * Units from the right hand side
  */
  rightUnits: number;
  /**
   * Difference in units
  */
  differenceUnits: number;
  /**
   * Cost from the left hand side
  */
  leftCost: CurrencyAndAmount;
  /**
   * Cost from the right hand side
  */
  rightCost: CurrencyAndAmount;
  /**
   * Difference in cost
  */
  differenceCost: CurrencyAndAmount;
  /**
   * Additional features relating to the security
  */
  instrumentProperties: Property[];
}

export interface ResourceListOfReconciliationBreak {
  values?: ReconciliationBreak[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface ValuationReconciliationRequest {
  /**
   * The id of the portfolio on which to run the aggregation request
  */
  portfolioId: ResourceId;
  /**
   * The specification of the aggregation request to be used to obtain the risk
  */
  aggregation: AggregationRequest;
}

export interface ValuationsReconciliationRequest {
  /**
   * The specification of the left hand side of the valuation (risk) reconciliation
  */
  left: ValuationReconciliationRequest;
  /**
   * The specification of the right hand side of the valuation (risk) reconciliation
  */
  right: ValuationReconciliationRequest;
  /**
   * Instrument properties to be included with any identified breaks. These properties will be in
   * the effective and AsAt dates of the left portfolio
  */
  instrumentPropertyKeys: string[];
}

export interface CreatePropertyDefinitionRequest {
  /**
   * Possible values include: 'Trade', 'Portfolio', 'Holding', 'ReferenceHolding',
   * 'TransactionConfiguration', 'Instrument', 'CutDefinition'
  */
  domain?: string;
  scope?: string;
  code?: string;
  valueRequired?: boolean;
  displayName?: string;
  dataTypeId?: ResourceId;
  /**
   * Possible values include: 'Perpetual', 'TimeVariant'
  */
  lifeTime?: string;
  /**
   * Possible values include: 'Label', 'Metric'
  */
  type?: string;
}

export interface PropertyDefinition {
  href?: string;
  key?: string;
  /**
   * Possible values include: 'String', 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List',
   * 'PropertyArray', 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits', 'StringArray',
   * 'CurrencyAndAmount', 'TradePrice', 'UnitCreation', 'Currency', 'UserId', 'MetricValue',
   * 'QuoteId', 'QuoteLineage', 'ArrayOfQuoteIds', 'ResourceId'
  */
  valueType?: string;
  valueRequired?: boolean;
  displayName?: string;
  dataTypeId?: ResourceId;
  /**
   * Possible values include: 'Perpetual', 'TimeVariant'
  */
  lifeTime?: string;
  /**
   * Possible values include: 'Label', 'Metric'
  */
  type?: string;
  /**
   * Possible values include: 'NoUnits', 'Basic', 'Iso4217Currency'
  */
  unitSchema?: string;
  /**
   * Possible values include: 'Trade', 'Portfolio', 'Holding', 'ReferenceHolding',
   * 'TransactionConfiguration', 'Instrument', 'CutDefinition'
  */
  readonly domain?: string;
  readonly scope?: string;
  readonly code?: string;
  links?: Link[];
}

export interface ResourceListOfPropertyDefinition {
  values?: PropertyDefinition[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface UpdatePropertyDefinitionRequest {
  valueRequired?: boolean;
  displayName?: string;
  dataTypeId?: ResourceId;
  /**
   * Possible values include: 'Perpetual', 'TimeVariant'
  */
  lifeTime?: string;
  /**
   * Possible values include: 'Label', 'Metric'
  */
  type?: string;
}

export interface QuoteId {
  instrumentId: string;
  /**
   * Possible values include: 'LusidInstrumentId', 'Figi', 'RIC', 'QuotePermId', 'Isin',
   * 'CurrencyPair'
  */
  instrumentIdType: string;
  /**
   * Possible values include: 'Price', 'Spread', 'Rate'
  */
  quoteType: string;
  /**
   * Possible values include: 'Bid', 'Mid', 'Ask'
  */
  priceSide: string;
}

export interface QuoteLineage {
  dataVendor: string;
  contributor: string;
}

export interface UpsertQuoteRequest {
  quoteId: QuoteId;
  metricValue: MetricValue;
  quoteLineage: QuoteLineage;
  effectiveAt?: Date;
}

/**
 * The response given from the UpsertQuotes Api call
*/
export interface UpsertQuotesResponse {
  asAtDate: Date;
  links?: Link[];
}

export interface DeleteQuoteRequest {
  quoteId: QuoteId;
  effectiveAt: Date;
}

/**
 * The response given from the DeleteQuotes Api call
*/
export interface DeleteQuotesResponse {
  asAtDate: Date;
  links?: Link[];
}

export interface Quote {
  quoteId: QuoteId;
  metricValue: MetricValue;
  quoteLineage: QuoteLineage;
  effectiveAtDate?: Date;
  asAtDate?: Date;
}

export interface GetQuotesResponse {
  found?: Quote[];
  notFound?: QuoteId[];
}

export interface PerpetualPropertyValue {
  labelValue?: string;
  metricValue?: MetricValue;
}

export interface CreateReferencePortfolioRequest {
  displayName: string;
  description?: string;
  code: string;
  created?: Date;
  /**
   * Portfolio properties to add to the portfolio
  */
  properties?: { [propertyName: string]: PerpetualPropertyValue };
}

export interface ReferencePortfolioConstituent {
  instrumentUid: string;
  currency: string;
  /**
   * Properties associated with the constituent
  */
  properties?: Property[];
  weight: number;
  floatingWeight?: number;
}

export interface GetReferencePortfolioConstituentsResponse {
  effectiveFrom: Date;
  /**
   * Possible values include: 'Static', 'Floating', 'Periodical'
  */
  weightType: string;
  /**
   * Possible values include: 'Daily', 'Weekly', 'Monthly', 'Quarterly', 'Annually'
  */
  periodType?: string;
  periodCount?: number;
  /**
   * Set of constituents (instrument/weight pairings)
  */
  constituents: ReferencePortfolioConstituent[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  links?: Link[];
}

export interface ReferencePortfolioConstituentRequest {
  instrumentUid?: string;
  properties?: { [propertyName: string]: PerpetualPropertyValue };
  weight?: number;
  currency?: string;
}

export interface UpsertReferencePortfolioConstituentsRequest {
  effectiveFrom: Date;
  /**
   * Possible values include: 'Static', 'Floating', 'Periodical'
  */
  weightType: string;
  /**
   * Possible values include: 'Daily', 'Weekly', 'Monthly', 'Quarterly', 'Annually'
  */
  periodType?: string;
  periodCount?: number;
  /**
   * Set of constituents (instrument/weight pairings)
  */
  constituents: ReferencePortfolioConstituentRequest[];
}

export interface UpsertReferencePortfolioConstituentsResponse {
  href?: string;
  version?: Version;
  links?: Link[];
}

export interface ConstituentsAdjustmentHeader {
  /**
   * There can be at most one holdings adjustment for a portfolio at a
   * specific effective time so this uniquely identifies the adjustment.
  */
  effectiveAt?: Date;
  version?: Version;
  links?: Link[];
}

export interface ResourceListOfConstituentsAdjustmentHeader {
  values?: ConstituentsAdjustmentHeader[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface CreateResults {
  data?: string;
  scope?: string;
  /**
   * The key is a unique point in 'run' space. For a given scope and time point, one would wish to
   * identify a unique result set for a given recipe. In essence, this key is the unique identifier
   * for the tuple (recipe,portfolios)
   * However, that only matters when one is trying to use it automatically to retrieve them.
   * A question becomes whether we would wish to store groups of protfolio results together, or
   * only single ones.
   * Also, whether we would accept uploading of groups and then split them apart.
  */
  key?: string;
  date?: Date;
  /**
   * Possible values include: 'DataReader', 'Portfolio'
  */
  format?: string;
}

export interface Results {
  version?: Version;
  href?: string;
  values?: string;
  /**
   * Possible values include: 'DataReader', 'Portfolio'
  */
  format?: string;
  links?: Link[];
}

export interface Schema {
  entity?: string;
  href?: string;
  values?: { [propertyName: string]: FieldSchema };
  links?: Link[];
}

export interface PropertySchema {
  href?: string;
  values?: { [propertyName: string]: FieldSchema };
  links?: Link[];
}

export interface ResourceListOfValueType {
  values?: string[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

/**
 * Defines a scope
*/
export interface ScopeDefinition {
  scope: string;
}

export interface ResourceListOfScopeDefinition {
  values?: ScopeDefinition[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface InstrumentSearchProperty {
  /**
   * The property key of the property, e.g, 'Instrument/default/Isin'
  */
  key?: string;
  /**
   * The value of the property, which must not be empty or null. e.g, 'US0378331005'
  */
  value?: string;
}

/**
 * A collection of instrument search results
*/
export interface InstrumentMatch {
  /**
   * A collection of instruments that have met some criteria that have been previously
   * mastered within LUSID
  */
  masteredInstruments?: InstrumentDefinition[];
  /**
   * A collection of instruments that have met some criteria, but that have not been
   * mastered within LUSID.
  */
  externalInstruments?: InstrumentDefinition[];
}

export interface PortfolioSearchResult {
  readonly id?: ResourceId;
  /**
   * Possible values include: 'Transaction', 'Reference', 'DerivedTransaction'
  */
  readonly type?: string;
  readonly href?: string;
  readonly description?: string;
  readonly displayName?: string;
  readonly isDerived?: boolean;
  readonly created?: Date;
  readonly parentPortfolioId?: ResourceId;
  readonly properties?: Property[];
  links?: Link[];
}

export interface ResourceListOfPortfolioSearchResult {
  values?: PortfolioSearchResult[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface TransactionConfigurationTypeAlias {
  /**
   * The transaction type
  */
  type: string;
  /**
   * Brief description of the transaction
  */
  description: string;
  /**
   * Relates types of a similar class. E.g. Buy/Sell, StockIn/StockOut
  */
  transactionClass: string;
  /**
   * Group is a set of codes related to a source, or sync
  */
  transactionGroup: string;
  /**
   * Transactions role within a class. E.g. Increase a long position. Possible values include:
   * 'None', 'LongLonger', 'LongShorter', 'ShortShorter', 'ShortLonger', 'Longer', 'Shorter',
   * 'AllRoles'
  */
  transactionRoles: string;
}

export interface TransactionPropertyMappingRequest {
  /**
   * The Side
  */
  propertyKey: string;
  /**
   * The Side
  */
  mapFrom?: string;
  /**
   * The Side
  */
  setTo?: any;
}

export interface TransactionConfigurationMovementDataRequest {
  /**
   * The Movement Types. Possible values include: 'Settlement', 'Traded', 'ForwardFx',
   * 'Commitment', 'Receivable', 'CashSettlement', 'Accrual', 'UnsettledCashTypes'
  */
  movementTypes: string;
  /**
   * The Movement Side. Possible values include: 'Side1', 'Side2', 'BondInt'
  */
  side: string;
  /**
   * The Movement direction
  */
  direction: number;
  properties?: { [propertyName: string]: PerpetualPropertyValue };
  mappings?: TransactionPropertyMappingRequest[];
}

export interface TransactionConfigurationDataRequest {
  /**
   * List of transaction codes that map to this specific transaction model
  */
  aliases: TransactionConfigurationTypeAlias[];
  /**
   * Movement data for the transaction code
  */
  movements: TransactionConfigurationMovementDataRequest[];
  readonly properties?: { [propertyName: string]: PerpetualPropertyValue };
}

export interface TransactionPropertyMapping {
  /**
   * The Side
  */
  propertyKey: string;
  /**
   * The Side
  */
  mapFrom?: string;
  /**
   * The Side
  */
  setTo?: any;
}

export interface TransactionConfigurationMovementData {
  /**
   * The Movement Types. Possible values include: 'Settlement', 'Traded', 'ForwardFx',
   * 'Commitment', 'Receivable', 'CashSettlement', 'Accrual', 'UnsettledCashTypes'
  */
  movementTypes: string;
  /**
   * The Movement Side. Possible values include: 'Side1', 'Side2', 'BondInt'
  */
  side: string;
  /**
   * The Movement direction
  */
  direction: number;
  properties?: PerpetualProperty[];
  mappings?: TransactionPropertyMapping[];
}

export interface TransactionConfigurationData {
  /**
   * List of transaction codes that map to this specific transaction model
  */
  aliases: TransactionConfigurationTypeAlias[];
  /**
   * Movement data for the transaction code
  */
  movements: TransactionConfigurationMovementData[];
  properties?: PerpetualProperty[];
}

export interface ResourceListOfTransactionConfigurationData {
  values?: TransactionConfigurationData[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface CreateTransactionPortfolioRequest {
  displayName: string;
  description?: string;
  code: string;
  created?: Date;
  baseCurrency: string;
  corporateActionSourceId?: ResourceId;
  /**
   * Possible values include: 'Default', 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut',
   * 'HighestCostFirst', 'LowestCostFirst'
  */
  accountingMethod?: string;
  subHoldingKeys?: string[];
  /**
   * Portfolio properties to add to the portfolio
  */
  properties?: { [propertyName: string]: PropertyValue };
}

export interface PortfolioDetails {
  href?: string;
  originPortfolioId?: ResourceId;
  /**
   * The version of the portfolio
  */
  version?: Version;
  baseCurrency?: string;
  links?: Link[];
}

export interface CreatePortfolioDetails {
  baseCurrency?: string;
}

export interface ExecutionRequest {
  /**
   * FIX Field 17.  Unique execution identifier.
  */
  executionId: string;
  /**
   * FIX Field 54.
  */
  side: string;
  /**
   * Unique instrument identifiers.
  */
  instrumentIdentifiers: { [propertyName: string]: string };
  /**
   * FIX field 60.  Time the transaction represented by this ExecutionReport occurred.
  */
  transactionTime: Date;
  /**
   * FIX field 38.  Order quantity.
  */
  orderQty: number;
  /**
   * FIX field 44.
  */
  price: number;
  /**
   * FIX field 15.
  */
  currency: string;
}

export interface UpsertPortfolioExecutionsResponse {
  version?: Version;
  href?: string;
  links?: Link[];
}

/**
 * A price with its associated type
*/
export interface TransactionPrice {
  price?: number;
  /**
   * Possible values include: 'Price', 'Yield', 'Spread'
  */
  type?: string;
}

export interface Transaction {
  /**
   * Unique transaction identifier
  */
  transactionId: string;
  /**
   * LUSID transaction type code - Buy, Sell, StockIn, StockOut, etc
  */
  type: string;
  /**
   * Unique instrument identifier
  */
  instrumentUid: string;
  /**
   * Transaction date
  */
  transactionDate: Date;
  /**
   * Settlement date
  */
  settlementDate: Date;
  /**
   * Quantity of transaction in units of the instrument
  */
  units: number;
  /**
   * Execution price for the transaction
  */
  transactionPrice: TransactionPrice;
  /**
   * Total value of the transaction in settlement currency
  */
  totalConsideration: CurrencyAndAmount;
  /**
   * Rate between transaction and settle currency
  */
  exchangeRate?: number;
  /**
   * Transaction currency
  */
  transactionCurrency?: string;
  properties?: PerpetualProperty[];
  /**
   * Counterparty identifier
  */
  counterpartyId?: string;
  /**
   * Where this transaction came from. Possible values include: 'System', 'Client'
  */
  source: string;
  nettingSet?: string;
}

export interface PortfolioHolding {
  /**
   * Unique instrument identifier
  */
  instrumentUid: string;
  subHoldingKeys?: PerpetualProperty[];
  properties?: Property[];
  /**
   * Type of holding, eg Position, Balance, CashCommitment, Receivable, ForwardFX
  */
  holdingType: string;
  /**
   * Quantity of holding
  */
  units: number;
  /**
   * Settled quantity of holding
  */
  settledUnits: number;
  /**
   * Book cost of holding in transaction currency
  */
  cost: CurrencyAndAmount;
  /**
   * Book cost of holding in portfolio currency
  */
  costPortfolioCcy: CurrencyAndAmount;
  /**
   * If this is commitment-type holding, the transaction behind it
  */
  transaction?: Transaction;
}

export interface VersionedResourceListOfPortfolioHolding {
  version?: Version;
  values?: PortfolioHolding[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface TargetTaxLotRequest {
  /**
   * Quantity of holding
  */
  units: number;
  /**
   * Book cost of holding in transaction currency
  */
  cost?: CurrencyAndAmount;
  /**
   * Book cost of holding in portfolio currency
  */
  portfolioCost?: number;
  /**
   * Purchase price. Part of the unique key required for multiple taxlots
  */
  price?: number;
  /**
   * Purchase Date. Part of the unique key required for multiple taxlots
  */
  purchaseDate?: Date;
  /**
   * Original settlement date of the tax-lot's opening transaction.
  */
  settlementDate?: Date;
}

/**
 * This request specifies target holdings. i.e. holding data that the
 * system should match. When processed by the movement
 * engine, it will create 'true-up' adjustments on the fly.
*/
export interface AdjustHoldingRequest {
  /**
   * Unique instrument identifier
  */
  instrumentUid: string;
  /**
   * Key fields to uniquely index the sub holdings of a instrument
  */
  subHoldingKeys?: { [propertyName: string]: PerpetualPropertyValue };
  /**
   * Arbitrary properties to store with the holding
  */
  properties?: { [propertyName: string]: PerpetualPropertyValue };
  /**
   * 1 or more quantity amounts
  */
  taxLots: TargetTaxLotRequest[];
}

/**
 * The response given from the AdjustHoldings Api call
*/
export interface AdjustHolding {
  href?: string;
  version?: Version;
  links?: Link[];
}

/**
 * Summary information of a holdings adjustment for a single portfolio and effective date.
*/
export interface HoldingsAdjustmentHeader {
  /**
   * There can be at most one holdings adjustment for a portfolio at a
   * specific effective time so this uniquely identifies the adjustment.
  */
  effectiveAt?: Date;
  version?: Version;
  /**
   * Possible values include: 'PositionToZero', 'KeepTheSame'
  */
  unmatchedHoldingMethod?: string;
  links?: Link[];
}

export interface ResourceListOfHoldingsAdjustmentHeader {
  values?: HoldingsAdjustmentHeader[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

/**
 * Used to specify holdings target amounts at the tax-lot level
*/
export interface TargetTaxLot {
  /**
   * Quantity of holding
  */
  units: number;
  /**
   * Book cost of holding in transaction currency
  */
  cost?: CurrencyAndAmount;
  /**
   * Book cost of holding in portfolio currency
  */
  portfolioCost?: number;
  /**
   * Purchase price. Part of the unique key required for multiple taxlots
  */
  price?: number;
  /**
   * Purchase Date. Part of the unique key required for multiple taxlots
  */
  purchaseDate?: Date;
  /**
   * Original settlement date of the tax-lot's opening transaction.
  */
  settlementDate?: Date;
}

/**
 * This 'dto' contains target holdings. i.e. holding data that the
 * system should match. When processed by the movement
 * engine, it will create 'true-up' adjustments on the fly.
*/
export interface HoldingAdjustment {
  /**
   * Unique instrument identifier
  */
  instrumentUid: string;
  /**
   * Key fields to uniquely index the sub holdings of a instrument
  */
  subHoldingKeys?: PerpetualProperty[];
  /**
   * Arbitrary properties to store with the holding
  */
  properties?: PerpetualProperty[];
  /**
   * 1 or more quantity amounts
  */
  taxLots: TargetTaxLot[];
}

/**
 * Full content of a holdings adjustment for a single portfolio and effective date.
*/
export interface HoldingsAdjustment {
  /**
   * There can be at most one holdings adjustment for a portfolio at a
   * specific effective time so this uniquely identifies the adjustment.
  */
  effectiveAt?: Date;
  version?: Version;
  /**
   * Possible values include: 'PositionToZero', 'KeepTheSame'
  */
  unmatchedHoldingMethod?: string;
  adjustments?: HoldingAdjustment[];
  links?: Link[];
}

export interface VersionedResourceListOfTransaction {
  version?: Version;
  values?: Transaction[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}

export interface TransactionRequest {
  /**
   * Unique transaction identifier
  */
  transactionId: string;
  /**
   * LUSID transaction type code - Buy, Sell, StockIn, StockOut, etc
  */
  type: string;
  /**
   * Unique instrument identifier
  */
  instrumentUid: string;
  /**
   * Transaction date
  */
  transactionDate: Date;
  /**
   * Settlement date
  */
  settlementDate: Date;
  /**
   * Quantity of transaction in units of the instrument
  */
  units: number;
  /**
   * Execution price for the transaction
  */
  transactionPrice: TransactionPrice;
  /**
   * Total value of the transaction, in settlement currency
  */
  totalConsideration: CurrencyAndAmount;
  /**
   * Rate between transaction and settle currency
  */
  exchangeRate?: number;
  /**
   * Transaction currency
  */
  transactionCurrency?: string;
  properties?: { [propertyName: string]: PerpetualPropertyValue };
  /**
   * Counterparty identifier
  */
  counterpartyId?: string;
  /**
   * Where this transaction came from, either Client or System. Possible values include: 'System',
   * 'Client'
  */
  source: string;
  nettingSet?: string;
}

export interface UpsertPortfolioTransactionsResponse {
  version?: Version;
  href?: string;
  links?: Link[];
}

export interface AddTransactionPropertyResponse {
  href?: string;
  version?: Version;
  links?: Link[];
}

export interface TransactionQueryParameters {
  /**
   * The required set of transactions should begin from this date
  */
  startDate?: Date;
  /**
   * The required set of transactions should end at this date
  */
  endDate?: Date;
  /**
   * The method for date selection. Trade date or Settlement date. Possible values include: 'None',
   * 'TradeDate', 'SettleDate'
  */
  queryMode?: string;
  /**
   * Option to include cancelled transactions in the results
  */
  showCancelledTransactions?: boolean;
}

export interface RealisedGainLoss {
  /**
   * Unique instrument identifier
  */
  readonly instrumentUid?: string;
  /**
   * Quantity against which gain has been made in units of the instrument
  */
  readonly units?: number;
  /**
   * Date the position was originally purchased
  */
  readonly purchaseTradeDate?: Date;
  /**
   * Date the position originally settled
  */
  readonly purchaseSettlementDate?: Date;
  /**
   * Price the instrument was purchased at
  */
  readonly purchasePrice?: number;
  /**
   * Purchase cost in the trade currency
  */
  readonly costTradeCcy?: CurrencyAndAmount;
  /**
   * Purchase cost in the trade currency
  */
  readonly costPortfolioCcy?: CurrencyAndAmount;
  /**
   * Gains or losses in the trade currency
  */
  readonly realisedTradeCcy?: CurrencyAndAmount;
  /**
   * Total gains or losses in the portfolio currency
  */
  readonly realisedTotal?: CurrencyAndAmount;
  /**
   * Market gains or losses in the portfolio currency
  */
  readonly realisedMarket?: CurrencyAndAmount;
  /**
   * Currency gains or losses in the portfolio currency
  */
  readonly realisedCurrency?: CurrencyAndAmount;
}

export interface OutputTransaction {
  /**
   * Unique transaction identifier
  */
  readonly transactionId?: string;
  /**
   * LUSID transaction type code - Buy, Sell, StockIn, StockOut, etc
  */
  readonly type?: string;
  /**
   * LUSID transaction description
  */
  readonly description?: string;
  /**
   * Unique instrument identifier
  */
  readonly instrumentUid?: string;
  /**
   * Transaction date
  */
  readonly transactionDate?: Date;
  /**
   * Settlement date
  */
  readonly settlementDate?: Date;
  /**
   * Quantity of trade in units of the instrument
  */
  readonly units?: number;
  /**
   * Execution price for the transaction
  */
  readonly transactionPrice?: TransactionPrice;
  /**
   * Total value of the transaction in settlement currency
  */
  readonly totalConsideration?: CurrencyAndAmount;
  /**
   * Rate between transaction and settlement currency
  */
  readonly exchangeRate?: number;
  /**
   * Rate between transaction and portfolio currency
  */
  readonly transactionToPortfolioRate?: number;
  /**
   * Transaction currency
  */
  readonly transactionCurrency?: string;
  readonly properties?: PerpetualProperty[];
  /**
   * Counterparty identifier
  */
  readonly counterpartyId?: string;
  /**
   * Where this transaction came from, either Client or System. Possible values include: 'System',
   * 'Client'
  */
  readonly source?: string;
  readonly nettingSet?: string;
  /**
   * Transaction status (active, amended or cancelled). Possible values include: 'Active',
   * 'Amended', 'Cancelled'
  */
  readonly transactionStatus?: string;
  /**
   * Date/Time the transaction was booked into LUSID
  */
  readonly entryDateTime?: Date;
  /**
   * Date/Time the cancellation was booked into LUSID
  */
  readonly cancelDateTime?: Date;
  /**
   * Collection of gains or losses
  */
  readonly realisedGainLoss?: RealisedGainLoss[];
}

export interface VersionedResourceListOfOutputTransaction {
  version?: Version;
  values?: OutputTransaction[];
  /**
   * The Uri that returns the same result as the original request,
   * but may include resolved as at time(s).
  */
  href?: string;
  /**
   * The total number of records returned in the set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero until the values
   * are evaluated. This is due to lazy evaluation.
  */
  count?: number;
  links?: Link[];
}
