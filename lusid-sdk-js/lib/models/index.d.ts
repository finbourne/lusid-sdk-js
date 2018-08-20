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

import * as moment from "moment";


/**
 * @class
 * Initializes a new instance of the ClearEntityCachesDto class.
 * @constructor
 * @member {number} numberOfItemsCleared The total number of items cleared from
 * all instances of the caches on this machine instance
 */
export interface ClearEntityCachesDto {
  numberOfItemsCleared: number;
}

/**
 * @class
 * Initializes a new instance of the ErrorDetailBase class.
 * @constructor
 * @member {string} [id]
 * @member {string} [type]
 * @member {string} [detail]
 */
export interface ErrorDetailBase {
  id?: string;
  type?: string;
  detail?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * @member {number} [status]
 * @member {string} [code] Possible values include: 'Unknown',
 * 'PersonalisationNotFound', 'NonRecursivePersonalisation', 'VersionNotFound',
 * 'SecurityNotFound', 'PropertyNotFound', 'PortfolioRecursionDepth',
 * 'GroupNotFound', 'PortfolioNotFound', 'PropertySchemaNotFound',
 * 'PortfolioWithIdAlreadyExists', 'OrphanedPortfolio', 'MissingBaseClaims',
 * 'PropertyNotDefined', 'CannotDeleteSystemProperty',
 * 'CannotModifyImmutablePropertyField', 'PropertyAlreadyExists',
 * 'InvalidPropertyLifeTime', 'CannotModifyDefaultPropertyFormat',
 * 'GroupAlreadyExists', 'NoSuchPropertyDataFormat', 'ValidationError',
 * 'LoopDetectedInGroupHierarchy', 'SubGroupAlreadyExists',
 * 'PriceSourceNotFound', 'AnalyticStoreNotFound',
 * 'AnalyticStoreAlreadyExists', 'ClientSecurityAlreadyExists',
 * 'DuplicateInParameterSet', 'ResultsNotFound', 'OrderFieldNotInResultSet',
 * 'OperationFailed', 'ElasticSearchError', 'InvalidParameterValue',
 * 'CommandProcessingFailure', 'EntityStateConstructionFailure',
 * 'EntityTimelineDoesNotExist', 'EventPublishFailure',
 * 'InvalidRequestFailure', 'EventPublishUnknown', 'EventQueryFailure',
 * 'BlobDidNotExistFailure', 'SubSystemRequestFailure',
 * 'SubSystemConfigurationFailure', 'FailedToDelete',
 * 'UpsertClientSecurityFailure', 'IllegalAsAtInterval',
 * 'IllegalBitemporalQuery', 'InvalidAlternateId',
 * 'CannotAddSourcePortfolioPropertyExplicitly', 'EntityAlreadyExistsInGroup',
 * 'EntityWithIdAlreadyExists', 'PortfolioDetailsDoNotExist',
 * 'PortfolioWithNameAlreadyExists', 'InvalidTrades',
 * 'ReferencePortfolioNotFound', 'DuplicateIdFailure',
 * 'SecurityByCodeNotFound', 'CommandRetrievalFailure',
 * 'DataFilterApplicationFailure', 'SearchFailed',
 * 'MovementsEngineConfigurationKeyFailure', 'FxRateSourceNotFound',
 * 'AccrualSourceNotFound', 'EntitlementsFailure', 'InvalidIdentityToken',
 * 'InvalidRequestHeaders', 'PriceNotFound', 'InvalidSubHoldingKeysProvided',
 * 'DuplicateSubHoldingKeysProvided', 'ServerConfigurationError',
 * 'InvalidUnitForDataType', 'InvalidTypeForDataType',
 * 'InvalidValueForDataType', 'UnitNotDefinedForDataType',
 * 'UnitsNotSupportedOnDataType', 'CannotSpecifyUnitsOnDataType',
 * 'UnitSchemaInconsistentWithDataType', 'UnitDefinitionNotSpecified',
 * 'DuplicateUnitDefinitionsSpecified', 'InvalidUnitsDefinition',
 * 'InvalidSecurityIdentifierUnit'
 * @member {string} [message]
 * @member {string} [detailedMessage]
 * @member {array} [items]
 * @member {string} [moreInfo]
 */
export interface ErrorResponse {
  readonly status?: number;
  readonly code?: string;
  readonly message?: string;
  readonly detailedMessage?: string;
  items?: ErrorDetailBase[];
  readonly moreInfo?: string;
}

/**
 * @class
 * Initializes a new instance of the AggregateSpec class.
 * @constructor
 * @member {string} [key]
 * @member {string} [op] Possible values include: 'Sum', 'Proportion'
 */
export interface AggregateSpec {
  key?: string;
  op?: string;
}

/**
 * @class
 * Initializes a new instance of the PropertyFilter class.
 * @constructor
 * @member {string} [left]
 * @member {string} [operator] Possible values include: 'Equals', 'NotEquals',
 * 'GreaterThan', 'GreaterThanOrEqualTo', 'LessThan', 'LessThanOrEqualTo', 'In'
 * @member {object} [right]
 * @member {string} [rightOperandType] Possible values include: 'Absolute',
 * 'Property'
 */
export interface PropertyFilter {
  left?: string;
  operator?: string;
  right?: any;
  rightOperandType?: string;
}

/**
 * @class
 * Initializes a new instance of the AggregationRequest class.
 * @constructor
 * Specification object for the parameters of an aggregation
 *
 * @member {string} [recipeScope]
 * @member {string} [recipeKey]
 * @member {boolean} [loadReferencePortfolio]
 * @member {date} [asAt] The asAt date to use
 * @member {date} [effectiveAt]
 * @member {array} [metrics]
 * @member {array} [groupBy]
 * @member {array} [filters]
 * @member {number} [limit]
 * @member {string} [sort]
 */
export interface AggregationRequest {
  recipeScope?: string;
  recipeKey?: string;
  loadReferencePortfolio?: boolean;
  asAt?: Date;
  effectiveAt?: Date;
  metrics?: AggregateSpec[];
  groupBy?: string[];
  filters?: PropertyFilter[];
  limit?: number;
  sort?: string;
}

/**
 * @class
 * Initializes a new instance of the FieldSchema class.
 * @constructor
 * @member {string} [scope]
 * @member {string} [name]
 * @member {string} [displayName]
 * @member {string} [type] Possible values include: 'String', 'Int', 'Decimal',
 * 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray', 'Percentage',
 * 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds', 'ArrayOfTxnAliases',
 * 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray', 'UnitCreation'
 * @member {boolean} [isMetric]
 * @member {number} [displayOrder]
 * @member {object} [propertySchema]
 */
export interface FieldSchema {
  scope?: string;
  name?: string;
  displayName?: string;
  type?: string;
  isMetric?: boolean;
  displayOrder?: number;
  propertySchema?: { [propertyName: string]: FieldSchema };
}

/**
 * @class
 * Initializes a new instance of the KeyValuePairPropertyKeyFieldSchema class.
 * @constructor
 * @member {string} [key]
 * @member {object} [value]
 * @member {string} [value.scope]
 * @member {string} [value.name]
 * @member {string} [value.displayName]
 * @member {string} [value.type] Possible values include: 'String', 'Int',
 * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
 * 'UnitCreation'
 * @member {boolean} [value.isMetric]
 * @member {number} [value.displayOrder]
 * @member {object} [value.propertySchema]
 */
export interface KeyValuePairPropertyKeyFieldSchema {
  readonly key?: string;
  readonly value?: FieldSchema;
}

/**
 * @class
 * Initializes a new instance of the ResultDataSchema class.
 * @constructor
 * @member {array} [nodeValueSchema]
 * @member {object} [propertySchema]
 */
export interface ResultDataSchema {
  nodeValueSchema?: KeyValuePairPropertyKeyFieldSchema[];
  propertySchema?: { [propertyName: string]: FieldSchema };
}

/**
 * @class
 * Initializes a new instance of the ListAggregationResponse class.
 * @constructor
 * @member {string} [href]
 * @member {array} [data]
 * @member {string} [aggregationCurrency]
 * @member {object} [dataSchema]
 * @member {array} [dataSchema.nodeValueSchema]
 * @member {object} [dataSchema.propertySchema]
 */
export interface ListAggregationResponse {
  href?: string;
  data?: { [propertyName: string]: any }[];
  aggregationCurrency?: string;
  dataSchema?: ResultDataSchema;
}

/**
 * @class
 * Initializes a new instance of the AggregationResponseNodeDictionaryStringObject class.
 * @constructor
 * @member {string} [groupPropertyKey]
 * @member {string} [groupPropertyValue]
 * @member {number} [idx]
 * @member {object} [properties]
 * @member {array} [children]
 */
export interface AggregationResponseNodeDictionaryStringObject {
  groupPropertyKey?: string;
  groupPropertyValue?: string;
  idx?: number;
  properties?: { [propertyName: string]: any };
  children?: AggregationResponseNodeDictionaryStringObject[];
}

/**
 * @class
 * Initializes a new instance of the NestedAggregationResponse class.
 * @constructor
 * @member {string} [href]
 * @member {object} [data]
 * @member {string} [data.groupPropertyKey]
 * @member {string} [data.groupPropertyValue]
 * @member {number} [data.idx]
 * @member {object} [data.properties]
 * @member {array} [data.children]
 * @member {string} [aggregationCurrency]
 * @member {object} [dataSchema]
 * @member {array} [dataSchema.nodeValueSchema]
 * @member {object} [dataSchema.propertySchema]
 */
export interface NestedAggregationResponse {
  href?: string;
  data?: AggregationResponseNodeDictionaryStringObject;
  aggregationCurrency?: string;
  dataSchema?: ResultDataSchema;
}

/**
 * @class
 * Initializes a new instance of the CreateAnalyticStoreRequest class.
 * @constructor
 * @member {string} [scope]
 * @member {date} [date]
 */
export interface CreateAnalyticStoreRequest {
  scope?: string;
  date?: Date;
}

/**
 * @class
 * Initializes a new instance of the AnalyticStoreKeyDto class.
 * @constructor
 * @member {string} [scope]
 * @member {date} [date]
 */
export interface AnalyticStoreKeyDto {
  scope?: string;
  date?: Date;
}

/**
 * @class
 * Initializes a new instance of the AnalyticStoreDto class.
 * @constructor
 * @member {object} [key]
 * @member {string} [key.scope]
 * @member {date} [key.date]
 * @member {string} [href]
 */
export interface AnalyticStoreDto {
  key?: AnalyticStoreKeyDto;
  href?: string;
}

/**
 * @class
 * Initializes a new instance of the Link class.
 * @constructor
 * @member {string} relation Possible values include: 'Root', 'Properties',
 * 'Trades', 'Details', 'Constituents'
 * @member {string} href
 * @member {string} [description]
 * @member {string} method Possible values include: 'POST', 'GET', 'PATCH',
 * 'DELETE'
 */
export interface Link {
  relation: string;
  href: string;
  description?: string;
  method: string;
}

/**
 * @class
 * Initializes a new instance of the DeletedEntityResponse class.
 * @constructor
 * @member {string} [href]
 * @member {date} [asAt]
 */
export interface DeletedEntityResponse {
  href?: string;
  asAt?: Date;
}

/**
 * @class
 * Initializes a new instance of the SecurityAnalyticDataDto class.
 * @constructor
 * @member {string} [id] Unique security identifier
 * @member {number} [value] Value of the analytic, eg price
 * @member {string} [denomination] Underlying unit of the analytic, eg
 * currency, EPS etc.
 */
export interface SecurityAnalyticDataDto {
  id?: string;
  value?: number;
  denomination?: string;
}

/**
 * @class
 * Initializes a new instance of the AnalyticsItemDto class.
 * @constructor
 * @member {string} label
 * @member {string} securityUid
 * @member {date} analyticDate
 * @member {string} [recipeScope]
 * @member {string} recipeKey
 * @member {object} metricKey
 * @member {object} value
 */
export interface AnalyticsItemDto {
  label: string;
  securityUid: string;
  analyticDate: Date;
  recipeScope?: string;
  recipeKey: string;
  metricKey: { [propertyName: string]: any };
  value: { [propertyName: string]: any };
}

/**
 * @class
 * Initializes a new instance of the AnalyticsStorageRequest class.
 * @constructor
 * @member {array} [items]
 */
export interface AnalyticsStorageRequest {
  items?: AnalyticsItemDto[];
}

/**
 * @class
 * Initializes a new instance of the CreatePropertyRequest class.
 * @constructor
 * @member {string} [scope]
 * @member {string} [name]
 * @member {object} value
 * @member {date} [effectiveFrom] Date for which the property is effective from
 * @member {string} [unit]
 */
export interface CreatePropertyRequest {
  scope?: string;
  name?: string;
  value: any;
  effectiveFrom?: Date;
  readonly unit?: string;
}

/**
 * @class
 * Initializes a new instance of the SecurityClassificationDto class.
 * @constructor
 * @member {string} [uid] Unique security identifier
 * @member {array} [properties]
 */
export interface SecurityClassificationDto {
  uid?: string;
  properties?: CreatePropertyRequest[];
}

/**
 * @class
 * Initializes a new instance of the ClassificationsDto class.
 * @constructor
 * @member {string} [href]
 */
export interface ClassificationsDto {
  href?: string;
}

/**
 * @class
 * Initializes a new instance of the TxnTypeAliasDto class.
 * @constructor
 * @member {string} type The transaction type
 * @member {string} description Brief description of the transaction
 * @member {string} txnClass Relates types of a similar class. E.g. Buy/Sell,
 * StockIn/StockOut
 * @member {string} txnGroup Group is a set of codes related to a source, or
 * sync
 * @member {string} txnRoles Transactions role within a class. E.g. Increase a
 * long position. Possible values include: 'None', 'LongLonger', 'LongShorter',
 * 'ShortShorter', 'ShortLonger', 'Longer', 'Shorter', 'AllRoles'
 */
export interface TxnTypeAliasDto {
  type: string;
  description: string;
  txnClass: string;
  txnGroup: string;
  txnRoles: string;
}

/**
 * @class
 * Initializes a new instance of the PropertyDto class.
 * @constructor
 * @member {string} key
 * @member {object} value
 * @member {string} [unit]
 * @member {date} [effectiveFrom] Date for which the property is effective from
 */
export interface PropertyDto {
  key: string;
  value: any;
  unit?: string;
  effectiveFrom?: Date;
}

/**
 * @class
 * Initializes a new instance of the TxnPropertyMappingDto class.
 * @constructor
 * @member {string} propertyKey The Side
 * @member {string} [mapFrom] The Side
 * @member {object} [setTo] The Side
 */
export interface TxnPropertyMappingDto {
  propertyKey: string;
  mapFrom?: string;
  setTo?: any;
}

/**
 * @class
 * Initializes a new instance of the TxnMovementMetaDataDto class.
 * @constructor
 * @member {string} movementTypes The Movement Types. Possible values include:
 * 'Settlement', 'Traded', 'ForwardFx', 'Commitment', 'Receivable',
 * 'CashSettlement', 'Accrual', 'UnsettledCashTypes'
 * @member {string} side The Movement Side. Possible values include: 'Side1',
 * 'Side2', 'BondInt'
 * @member {number} direction The Movement direction
 * @member {array} [properties]
 * @member {array} [mappings]
 */
export interface TxnMovementMetaDataDto {
  movementTypes: string;
  side: string;
  direction: number;
  properties?: PropertyDto[];
  mappings?: TxnPropertyMappingDto[];
}

/**
 * @class
 * Initializes a new instance of the TxnMetaDataDto class.
 * @constructor
 * @member {array} aliases List of transaction codes that map to this specific
 * transaction model
 * @member {array} movements Movement data for the transaction code
 * @member {array} [properties]
 */
export interface TxnMetaDataDto {
  aliases: TxnTypeAliasDto[];
  movements: TxnMovementMetaDataDto[];
  properties?: PropertyDto[];
}

/**
 * @class
 * Initializes a new instance of the CorporateActionTransitionComponentDto class.
 * @constructor
 * @member {string} securityUid
 * @member {number} unitsFactor
 * @member {number} costFactor
 */
export interface CorporateActionTransitionComponentDto {
  securityUid: string;
  unitsFactor: number;
  costFactor: number;
}

/**
 * @class
 * Initializes a new instance of the CorporateActionTransitionDto class.
 * @constructor
 * A 'transition' within a corporate action, representing a set of output
 * movements paired to a single input position
 *
 * @member {object} [inputTransition]
 * @member {string} [inputTransition.securityUid]
 * @member {number} [inputTransition.unitsFactor]
 * @member {number} [inputTransition.costFactor]
 * @member {array} [outputTransitions]
 */
export interface CorporateActionTransitionDto {
  inputTransition?: CorporateActionTransitionComponentDto;
  outputTransitions?: CorporateActionTransitionComponentDto[];
}

/**
 * @class
 * Initializes a new instance of the UpsertCorporateActionRequest class.
 * @constructor
 * @member {string} corporateActionId
 * @member {date} announcementDate
 * @member {date} exDate
 * @member {date} recordDate
 * @member {date} paymentDate
 * @member {array} transitions
 */
export interface UpsertCorporateActionRequest {
  corporateActionId: string;
  announcementDate: Date;
  exDate: Date;
  recordDate: Date;
  paymentDate: Date;
  transitions: CorporateActionTransitionDto[];
}

/**
 * @class
 * Initializes a new instance of the ResourceId class.
 * @constructor
 * @member {string} [scope]
 * @member {string} [code]
 */
export interface ResourceId {
  scope?: string;
  code?: string;
}

/**
 * @class
 * Initializes a new instance of the CorporateActionEventDto class.
 * @constructor
 * A corporate action
 *
 * @member {object} sourceId
 * @member {string} [sourceId.scope]
 * @member {string} [sourceId.code]
 * @member {string} corporateActionId
 * @member {date} [announcementDate]
 * @member {date} [exDate]
 * @member {date} [recordDate]
 * @member {date} [paymentDate]
 * @member {array} [transitions]
 */
export interface CorporateActionEventDto {
  sourceId: ResourceId;
  corporateActionId: string;
  announcementDate?: Date;
  exDate?: Date;
  recordDate?: Date;
  paymentDate?: Date;
  transitions?: CorporateActionTransitionDto[];
}

/**
 * @class
 * Initializes a new instance of the ErrorDetail class.
 * @constructor
 * @member {string} [id]
 * @member {string} [type]
 * @member {string} [detail]
 */
export interface ErrorDetail {
  id?: string;
  type?: string;
  detail?: string;
}

/**
 * @class
 * Initializes a new instance of the TryUpsertCorporateActionsDto class.
 * @constructor
 * @member {string} [href]
 * @member {array} [values]
 * @member {array} [failed]
 */
export interface TryUpsertCorporateActionsDto {
  href?: string;
  values?: CorporateActionEventDto[];
  failed?: ErrorDetail[];
}

/**
 * @class
 * Initializes a new instance of the CreateGroupRequest class.
 * @constructor
 * @member {string} id
 * @member {array} [values]
 * @member {array} [subGroups]
 * @member {string} name
 * @member {string} [description]
 */
export interface CreateGroupRequest {
  id: string;
  values?: ResourceId[];
  subGroups?: ResourceId[];
  name: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the VersionDto class.
 * @constructor
 * Describes the version metadata of an entity.
 *
 * @member {date} [effectiveFrom]
 * @member {date} [asAtDate]
 * @member {string} [updatedBy]
 * @member {string} [href]
 */
export interface VersionDto {
  effectiveFrom?: Date;
  asAtDate?: Date;
  updatedBy?: string;
  href?: string;
}

/**
 * @class
 * Initializes a new instance of the GroupDto class.
 * @constructor
 * @member {string} [href]
 * @member {object} [id]
 * @member {string} [id.scope]
 * @member {string} [id.code]
 * @member {string} [name]
 * @member {string} [description]
 * @member {array} [values]
 * @member {array} [subGroups]
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.updatedBy]
 * @member {string} [version.href]
 * @member {array} [_links]
 */
export interface GroupDto {
  href?: string;
  id?: ResourceId;
  name?: string;
  description?: string;
  values?: ResourceId[];
  subGroups?: ResourceId[];
  version?: VersionDto;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ProcessedCommandDto class.
 * @constructor
 * @member {string} [description]
 * @member {string} [path]
 * @member {string} [userId] The user that issued the command.
 * @member {object} [processedTime] The as at time of the events published by
 * the processing of
 * this command.
 */
export interface ProcessedCommandDto {
  description?: string;
  path?: string;
  userId?: string;
  processedTime?: any;
}

/**
 * @class
 * Initializes a new instance of the CompletePortfolioDto class.
 * @constructor
 * @member {object} [id]
 * @member {string} [id.scope]
 * @member {string} [id.code]
 * @member {string} [href]
 * @member {string} [description]
 * @member {string} [name]
 * @member {date} [created]
 * @member {object} [parentPortfolioId]
 * @member {string} [parentPortfolioId.scope]
 * @member {string} [parentPortfolioId.code]
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.updatedBy]
 * @member {string} [version.href]
 * @member {array} [properties]
 * @member {string} [baseCurrency]
 * @member {array} [_links]
 */
export interface CompletePortfolioDto {
  id?: ResourceId;
  href?: string;
  description?: string;
  name?: string;
  created?: Date;
  parentPortfolioId?: ResourceId;
  version?: VersionDto;
  properties?: PropertyDto[];
  baseCurrency?: string;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ExpandedGroupDto class.
 * @constructor
 * @member {string} [href]
 * @member {object} [id]
 * @member {string} [id.scope]
 * @member {string} [id.code]
 * @member {string} [name]
 * @member {string} [description]
 * @member {array} [values]
 * @member {array} [subGroups]
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.updatedBy]
 * @member {string} [version.href]
 * @member {array} [_links]
 */
export interface ExpandedGroupDto {
  href?: string;
  id?: ResourceId;
  name?: string;
  description?: string;
  values?: CompletePortfolioDto[];
  subGroups?: ExpandedGroupDto[];
  version?: VersionDto;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the UpdateGroupRequest class.
 * @constructor
 * @member {string} name
 * @member {string} [description]
 */
export interface UpdateGroupRequest {
  name: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the LoginResponse class.
 * @constructor
 * @member {string} [name]
 * @member {string} [firstName]
 * @member {string} [defaultScope]
 * @member {string} [sessionContextId]
 * @member {string} [logoUri]
 * @member {string} [valueCurrencyCode]
 * @member {string} [valueCurrencySymbol]
 */
export interface LoginResponse {
  name?: string;
  firstName?: string;
  defaultScope?: string;
  sessionContextId?: string;
  logoUri?: string;
  valueCurrencyCode?: string;
  valueCurrencySymbol?: string;
}

/**
 * @class
 * Initializes a new instance of the WebLogMessage class.
 * @constructor
 * A log message structured for provision by a web project
 *
 * @member {string} [version] The semantic version of the remote application
 * submitting the log
 * @member {string} [url] The url of the resource from which the message
 * originated
 * @member {string} [message] The body of the message
 * @member {string} [context] Context as to the occurance of the message
 * @member {string} [severity] The severity of the message. Possible values
 * include: 'Warn', 'Error'
 * @member {string} [stacktrace] Any stacktrace that may be relavent
 * @member {string} [browser] Any browser/user-agent/os related context
 */
export interface WebLogMessage {
  version?: string;
  url?: string;
  message?: string;
  context?: string;
  severity?: string;
  stacktrace?: string;
  browser?: string;
}

/**
 * @class
 * Initializes a new instance of the PersonalisationDto class.
 * @constructor
 * @member {string} [scope] Possible values include: 'User', 'Group',
 * 'Default', 'All'
 * @member {string} [scopeValue]
 * @member {string} [settingKey]
 * @member {string} [settingValue]
 * @member {string} [dataType]
 * @member {string} [href]
 */
export interface PersonalisationDto {
  scope?: string;
  scopeValue?: string;
  settingKey?: string;
  settingValue?: string;
  dataType?: string;
  href?: string;
}

/**
 * @class
 * Initializes a new instance of the UpsertPersonalisationsResponse class.
 * @constructor
 * @member {string} [href]
 */
export interface UpsertPersonalisationsResponse {
  href?: string;
}

/**
 * @class
 * Initializes a new instance of the CreatePortfolioRequest class.
 * @constructor
 * @member {string} name
 * @member {string} code
 * @member {date} [created]
 * @member {string} baseCurrency
 * @member {object} [corporateActionSourceId]
 * @member {string} [corporateActionSourceId.scope]
 * @member {string} [corporateActionSourceId.code]
 * @member {string} [accountingMethod] Possible values include: 'Default',
 * 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut', 'HighestCostFirst',
 * 'LowestCostFirst'
 * @member {array} [subHoldingKeys]
 * @member {array} [properties] Portfolio properties to add to the portfolio
 */
export interface CreatePortfolioRequest {
  name: string;
  code: string;
  created?: Date;
  baseCurrency: string;
  corporateActionSourceId?: ResourceId;
  accountingMethod?: string;
  subHoldingKeys?: string[];
  properties?: CreatePropertyRequest[];
}

/**
 * @class
 * Initializes a new instance of the PortfolioDto class.
 * @constructor
 * @member {string} [href] Link to retrieve the current entity
 * @member {object} [id] Identifier for the portfolio
 * @member {string} [id.scope]
 * @member {string} [id.code]
 * @member {string} [name] Name of the portfolio
 * @member {date} [created] Portfolio creation time in UTC
 * @member {object} [parentPortfolioId] If this is a derived portfolio, the
 * identifier of the portfolio from which it is derived
 * @member {string} [parentPortfolioId.scope]
 * @member {string} [parentPortfolioId.code]
 * @member {object} [version] The version of the portfolio
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.updatedBy]
 * @member {string} [version.href]
 * @member {array} [_links]
 */
export interface PortfolioDto {
  href?: string;
  id?: ResourceId;
  name?: string;
  created?: Date;
  parentPortfolioId?: ResourceId;
  version?: VersionDto;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the UpdatePortfolioRequest class.
 * @constructor
 * @member {string} name
 * @member {date} [created]
 */
export interface UpdatePortfolioRequest {
  name: string;
  created?: Date;
}

/**
 * @class
 * Initializes a new instance of the PortfolioDetailsDto class.
 * @constructor
 * @member {string} [href]
 * @member {object} [originPortfolioId]
 * @member {string} [originPortfolioId.scope]
 * @member {string} [originPortfolioId.code]
 * @member {object} [version] The version of the portfolio
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.updatedBy]
 * @member {string} [version.href]
 * @member {string} [baseCurrency]
 * @member {array} [_links]
 */
export interface PortfolioDetailsDto {
  href?: string;
  originPortfolioId?: ResourceId;
  version?: VersionDto;
  baseCurrency?: string;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the PortfolioDetailsRequest class.
 * @constructor
 * @member {string} [baseCurrency]
 */
export interface PortfolioDetailsRequest {
  baseCurrency?: string;
}

/**
 * @class
 * Initializes a new instance of the PerpetualPropertyDto class.
 * @constructor
 * This is intended to be the external facing unitemporal property
 * specification data type.
 *
 * @member {string} key
 * @member {object} value
 * @member {string} [unit]
 */
export interface PerpetualPropertyDto {
  key: string;
  value: any;
  readonly unit?: string;
}

/**
 * @class
 * Initializes a new instance of the TradeDto class.
 * @constructor
 * @member {string} tradeId Unique trade identifier
 * @member {string} type LUSID transaction type code - Buy, Sell, StockIn,
 * StockOut, etc
 * @member {string} securityUid Unique security identifier
 * @member {date} tradeDate Trade date
 * @member {date} settlementDate Settlement date
 * @member {number} units Quantity of trade in units of the security
 * @member {number} tradePrice Execution price for the trade
 * @member {number} totalConsideration Total value of the trade
 * @member {number} [exchangeRate] Rate between trade and settle currency
 * @member {string} settlementCurrency Settlement currency
 * @member {string} [tradeCurrency] Trade currency
 * @member {array} [properties]
 * @member {string} [counterpartyId] Counterparty identifier
 * @member {string} source Where this trade came from, either Client or System.
 * Possible values include: 'System', 'Client'
 * @member {string} [dividendState] Possible values include: 'Default',
 * 'ExDividend', 'CumDividend'
 * @member {string} [tradePriceType] Possible values include: 'Price', 'Yield',
 * 'Spread'
 * @member {string} [unitType] Possible values include: 'Nominal', 'Shares',
 * 'FaceValue', 'Contracts'
 * @member {string} [nettingSet]
 */
export interface TradeDto {
  tradeId: string;
  type: string;
  securityUid: string;
  tradeDate: Date;
  settlementDate: Date;
  units: number;
  tradePrice: number;
  totalConsideration: number;
  exchangeRate?: number;
  settlementCurrency: string;
  tradeCurrency?: string;
  properties?: PerpetualPropertyDto[];
  counterpartyId?: string;
  source: string;
  dividendState?: string;
  tradePriceType?: string;
  unitType?: string;
  nettingSet?: string;
}

/**
 * @class
 * Initializes a new instance of the HoldingDto class.
 * @constructor
 * @member {string} securityUid Unique security identifier
 * @member {array} [properties]
 * @member {string} holdingType Type of holding, eg Position, Balance,
 * CashCommitment, Receivable, ForwardFX
 * @member {number} units Quantity of holding
 * @member {number} settledUnits Settled quantity of holding
 * @member {number} cost Book cost of holding in trade currency
 * @member {number} costPortfolioCcy Book cost of holding in portfolio currency
 * @member {object} [transaction] If this is commitment-type holding, the
 * transaction behind it
 * @member {string} [transaction.tradeId] Unique trade identifier
 * @member {string} [transaction.type] LUSID transaction type code - Buy, Sell,
 * StockIn, StockOut, etc
 * @member {string} [transaction.securityUid] Unique security identifier
 * @member {date} [transaction.tradeDate] Trade date
 * @member {date} [transaction.settlementDate] Settlement date
 * @member {number} [transaction.units] Quantity of trade in units of the
 * security
 * @member {number} [transaction.tradePrice] Execution price for the trade
 * @member {number} [transaction.totalConsideration] Total value of the trade
 * @member {number} [transaction.exchangeRate] Rate between trade and settle
 * currency
 * @member {string} [transaction.settlementCurrency] Settlement currency
 * @member {string} [transaction.tradeCurrency] Trade currency
 * @member {array} [transaction.properties]
 * @member {string} [transaction.counterpartyId] Counterparty identifier
 * @member {string} [transaction.source] Where this trade came from, either
 * Client or System. Possible values include: 'System', 'Client'
 * @member {string} [transaction.dividendState] Possible values include:
 * 'Default', 'ExDividend', 'CumDividend'
 * @member {string} [transaction.tradePriceType] Possible values include:
 * 'Price', 'Yield', 'Spread'
 * @member {string} [transaction.unitType] Possible values include: 'Nominal',
 * 'Shares', 'FaceValue', 'Contracts'
 * @member {string} [transaction.nettingSet]
 */
export interface HoldingDto {
  securityUid: string;
  properties?: PropertyDto[];
  holdingType: string;
  units: number;
  settledUnits: number;
  cost: number;
  costPortfolioCcy: number;
  transaction?: TradeDto;
}

/**
 * @class
 * Initializes a new instance of the CreatePerpetualPropertyRequest class.
 * @constructor
 * @member {string} [scope]
 * @member {string} [name]
 * @member {object} value
 * @member {string} [unit]
 */
export interface CreatePerpetualPropertyRequest {
  scope?: string;
  name?: string;
  value: any;
  readonly unit?: string;
}

/**
 * @class
 * Initializes a new instance of the TargetTaxLotDto class.
 * @constructor
 * Used to specify holdings target amounts at the tax-lot level
 *
 * @member {number} units Quantity of holding
 * @member {number} [cost] Book cost of holding in trade currency
 * @member {number} [portfolioCost] Book cost of holding in portfolio currency
 * @member {number} [price] Purchase price. Part of the unique key required for
 * multiple taxlots
 * @member {date} [purchaseDate] Purchase Date. Part of the unique key required
 * for multiple taxlots
 * @member {date} [settlementDate] Original settlement date of the tax-lot's
 * opening transaction.
 */
export interface TargetTaxLotDto {
  units: number;
  cost?: number;
  portfolioCost?: number;
  price?: number;
  purchaseDate?: Date;
  settlementDate?: Date;
}

/**
 * @class
 * Initializes a new instance of the AdjustHoldingRequest class.
 * @constructor
 * This 'dto' contains target holdings. i.e. holding data that the
 * system should match. When processed by the movement
 * engine, it will create 'true-up' adjustments on the fly.
 *
 * @member {string} securityUid Unique security identifier
 * @member {array} [subHoldingKeys] Key fields to uniquely index the sub
 * holdings of a security
 * @member {array} taxLots 1 or more quantity amounts
 */
export interface AdjustHoldingRequest {
  securityUid: string;
  subHoldingKeys?: CreatePerpetualPropertyRequest[];
  taxLots: TargetTaxLotDto[];
}

/**
 * @class
 * Initializes a new instance of the AdjustHoldingsDto class.
 * @constructor
 * The response given from the AdjustHoldings Api call
 *
 * @member {string} [href]
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.updatedBy]
 * @member {string} [version.href]
 * @member {array} [_links]
 */
export interface AdjustHoldingsDto {
  href?: string;
  version?: VersionDto;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the PortfolioPropertiesDto class.
 * @constructor
 * @member {string} [href]
 * @member {object} [originPortfolioId]
 * @member {string} [originPortfolioId.scope]
 * @member {string} [originPortfolioId.code]
 * @member {array} [properties]
 * @member {object} [version] The version of the portfolio
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.updatedBy]
 * @member {string} [version.href]
 * @member {array} [_links]
 */
export interface PortfolioPropertiesDto {
  href?: string;
  originPortfolioId?: ResourceId;
  properties?: PropertyDto[];
  version?: VersionDto;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the UpsertPortfolioTradeRequest class.
 * @constructor
 * @member {string} tradeId Unique trade identifier
 * @member {string} type LUSID transaction type code - Buy, Sell, StockIn,
 * StockOut, etc
 * @member {string} securityUid Unique security identifier
 * @member {date} tradeDate Trade date
 * @member {date} settlementDate Settlement date
 * @member {number} units Quantity of trade in units of the security
 * @member {number} tradePrice Execution price for the trade
 * @member {number} totalConsideration Total value of the trade
 * @member {number} [exchangeRate] Rate between trade and settle currency
 * @member {string} settlementCurrency Settlement currency
 * @member {string} [tradeCurrency] Trade currency
 * @member {array} [properties]
 * @member {string} [counterpartyId] Counterparty identifier
 * @member {string} source Where this trade came from, either Client or System.
 * Possible values include: 'System', 'Client'
 * @member {string} [dividendState] Possible values include: 'Default',
 * 'ExDividend', 'CumDividend'
 * @member {string} [tradePriceType] Possible values include: 'Price', 'Yield',
 * 'Spread'
 * @member {string} [unitType] Possible values include: 'Nominal', 'Shares',
 * 'FaceValue', 'Contracts'
 * @member {string} [nettingSet]
 */
export interface UpsertPortfolioTradeRequest {
  tradeId: string;
  type: string;
  securityUid: string;
  tradeDate: Date;
  settlementDate: Date;
  units: number;
  tradePrice: number;
  totalConsideration: number;
  exchangeRate?: number;
  settlementCurrency: string;
  tradeCurrency?: string;
  properties?: CreatePerpetualPropertyRequest[];
  counterpartyId?: string;
  source: string;
  dividendState?: string;
  tradePriceType?: string;
  unitType?: string;
  nettingSet?: string;
}

/**
 * @class
 * Initializes a new instance of the UpsertPortfolioTradesDto class.
 * @constructor
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.updatedBy]
 * @member {string} [version.href]
 * @member {string} [href]
 * @member {array} [_links]
 */
export interface UpsertPortfolioTradesDto {
  version?: VersionDto;
  href?: string;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the AddTradePropertyDto class.
 * @constructor
 * @member {string} [href]
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.updatedBy]
 * @member {string} [version.href]
 * @member {array} [_links]
 */
export interface AddTradePropertyDto {
  href?: string;
  version?: VersionDto;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the CreateDerivedPortfolioRequest class.
 * @constructor
 * @member {string} name
 * @member {string} [id]
 * @member {object} [parentPortfolio]
 * @member {string} [parentPortfolio.scope]
 * @member {string} [parentPortfolio.code]
 * @member {date} [created]
 */
export interface CreateDerivedPortfolioRequest {
  name: string;
  id?: string;
  parentPortfolio?: ResourceId;
  created?: Date;
}

/**
 * @class
 * Initializes a new instance of the PortfolioSearchResult class.
 * @constructor
 * @member {object} [id]
 * @member {string} [id.scope]
 * @member {string} [id.code]
 * @member {string} [href]
 * @member {string} [description]
 * @member {string} [name]
 * @member {boolean} [isDerived]
 * @member {date} [created]
 * @member {object} [parentPortfolioId]
 * @member {string} [parentPortfolioId.scope]
 * @member {string} [parentPortfolioId.code]
 * @member {array} [properties]
 * @member {array} [_links]
 */
export interface PortfolioSearchResult {
  id?: ResourceId;
  href?: string;
  description?: string;
  name?: string;
  isDerived?: boolean;
  created?: Date;
  parentPortfolioId?: ResourceId;
  properties?: PropertyDto[];
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the PropertyDefinitionDto class.
 * @constructor
 * @member {string} [href]
 * @member {string} [key]
 * @member {string} [valueType] Possible values include: 'String', 'Int',
 * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
 * 'UnitCreation'
 * @member {boolean} [valueRequired]
 * @member {string} [displayName]
 * @member {object} [dataFormatId]
 * @member {string} [dataFormatId.scope]
 * @member {string} [dataFormatId.code]
 * @member {string} [sort]
 * @member {string} [lifeTime] Possible values include: 'Perpetual',
 * 'TimeVariant'
 * @member {string} [type] Possible values include: 'Label', 'Metric'
 * @member {string} [unitSchema] Possible values include: 'NoUnits', 'Basic',
 * 'Iso4217Currency'
 * @member {array} [_links]
 */
export interface PropertyDefinitionDto {
  href?: string;
  key?: string;
  valueType?: string;
  valueRequired?: boolean;
  displayName?: string;
  dataFormatId?: ResourceId;
  sort?: string;
  lifeTime?: string;
  type?: string;
  unitSchema?: string;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the CreatePropertyDefinitionRequest class.
 * @constructor
 * @member {string} [domain] Possible values include: 'Trade', 'Portfolio',
 * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
 * @member {string} [scope]
 * @member {string} [name]
 * @member {boolean} [valueRequired]
 * @member {string} [displayName]
 * @member {object} [dataFormatId]
 * @member {string} [dataFormatId.scope]
 * @member {string} [dataFormatId.code]
 * @member {string} [sort]
 * @member {string} [lifeTime] Possible values include: 'Perpetual',
 * 'TimeVariant'
 * @member {string} [type] Possible values include: 'Label', 'Metric'
 */
export interface CreatePropertyDefinitionRequest {
  domain?: string;
  scope?: string;
  name?: string;
  valueRequired?: boolean;
  displayName?: string;
  dataFormatId?: ResourceId;
  sort?: string;
  lifeTime?: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the UpdatePropertyDefinitionRequest class.
 * @constructor
 * @member {boolean} [valueRequired]
 * @member {string} [displayName]
 * @member {object} [dataFormatId]
 * @member {string} [dataFormatId.scope]
 * @member {string} [dataFormatId.code]
 * @member {string} [sort]
 * @member {string} [lifeTime] Possible values include: 'Perpetual',
 * 'TimeVariant'
 * @member {string} [type] Possible values include: 'Label', 'Metric'
 */
export interface UpdatePropertyDefinitionRequest {
  valueRequired?: boolean;
  displayName?: string;
  dataFormatId?: ResourceId;
  sort?: string;
  lifeTime?: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the CreateUnitDefinition class.
 * @constructor
 * @member {string} code
 * @member {string} displayName
 * @member {string} description
 * @member {object} [details]
 */
export interface CreateUnitDefinition {
  code: string;
  displayName: string;
  description: string;
  readonly details?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the CreatePropertyDataFormatRequest class.
 * @constructor
 * @member {string} scope
 * @member {string} code
 * @member {string} formatType Possible values include: 'Open', 'Closed'
 * @member {number} order
 * @member {string} displayName
 * @member {string} description
 * @member {string} valueType Possible values include: 'String', 'Int',
 * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
 * 'UnitCreation'
 * @member {array} [acceptableValues]
 * @member {string} [unitSchema] Possible values include: 'NoUnits', 'Basic',
 * 'Iso4217Currency'
 * @member {array} [acceptableUnits]
 */
export interface CreatePropertyDataFormatRequest {
  scope: string;
  code: string;
  formatType: string;
  order: number;
  displayName: string;
  description: string;
  valueType: string;
  acceptableValues?: any[];
  readonly unitSchema?: string;
  readonly acceptableUnits?: CreateUnitDefinition[];
}

/**
 * @class
 * Initializes a new instance of the IUnitDefinitionDto class.
 * @constructor
 * @member {string} [schema] Possible values include: 'NoUnits', 'Basic',
 * 'Iso4217Currency'
 * @member {string} [code]
 * @member {string} [displayName]
 * @member {string} [description]
 */
export interface IUnitDefinitionDto {
  readonly schema?: string;
  readonly code?: string;
  readonly displayName?: string;
  readonly description?: string;
}

/**
 * @class
 * Initializes a new instance of the PropertyDataFormatDto class.
 * @constructor
 * @member {string} [href]
 * @member {string} [formatType] Possible values include: 'Open', 'Closed'
 * @member {object} [id]
 * @member {string} [id.scope]
 * @member {string} [id.code]
 * @member {number} [order]
 * @member {string} [displayName]
 * @member {string} [description]
 * @member {string} [valueType] Possible values include: 'String', 'Int',
 * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
 * 'UnitCreation'
 * @member {array} [acceptableValues]
 * @member {string} [unitSchema] Possible values include: 'NoUnits', 'Basic',
 * 'Iso4217Currency'
 * @member {array} [acceptableUnits]
 */
export interface PropertyDataFormatDto {
  href?: string;
  formatType?: string;
  id?: ResourceId;
  order?: number;
  displayName?: string;
  description?: string;
  valueType?: string;
  acceptableValues?: any[];
  unitSchema?: string;
  acceptableUnits?: IUnitDefinitionDto[];
}

/**
 * @class
 * Initializes a new instance of the UpdatePropertyDataFormatRequest class.
 * @constructor
 * @member {string} formatType Possible values include: 'Open', 'Closed'
 * @member {number} order
 * @member {string} displayName
 * @member {string} description
 * @member {string} valueType Possible values include: 'String', 'Int',
 * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
 * 'UnitCreation'
 * @member {array} [acceptableValues]
 * @member {string} [unitSchema] Possible values include: 'NoUnits', 'Basic',
 * 'Iso4217Currency'
 * @member {array} [acceptableUnits]
 */
export interface UpdatePropertyDataFormatRequest {
  formatType: string;
  order: number;
  displayName: string;
  description: string;
  valueType: string;
  acceptableValues?: any[];
  readonly unitSchema?: string;
  readonly acceptableUnits?: CreateUnitDefinition[];
}

/**
 * @class
 * Initializes a new instance of the ReconciliationRequest class.
 * @constructor
 * @member {string} [leftScope]
 * @member {string} [leftCode]
 * @member {date} [leftEffectiveAt]
 * @member {date} [leftAsAt]
 * @member {string} [rightScope]
 * @member {string} [rightCode]
 * @member {date} [rightEffectiveAt]
 * @member {date} [rightAsAt]
 */
export interface ReconciliationRequest {
  leftScope?: string;
  leftCode?: string;
  leftEffectiveAt?: Date;
  leftAsAt?: Date;
  rightScope?: string;
  rightCode?: string;
  rightEffectiveAt?: Date;
  rightAsAt?: Date;
}

/**
 * @class
 * Initializes a new instance of the ReconciliationBreakDto class.
 * @constructor
 * A reconciliation break
 *
 * @member {string} securityUid Unique security identifier
 * @member {array} [properties]
 * @member {number} [unitsDifference] Difference in units
 * @member {number} [costDifference] Difference in cost
 */
export interface ReconciliationBreakDto {
  securityUid: string;
  properties?: PropertyDto[];
  unitsDifference?: number;
  costDifference?: number;
}

/**
 * @class
 * Initializes a new instance of the ReferencePortfolioConstituentDto class.
 * @constructor
 * @member {string} [id]
 * @member {array} [properties]
 * @member {number} [quantity]
 * @member {string} [type] Possible values include: 'Shares', 'Weight',
 * 'Nominal'
 */
export interface ReferencePortfolioConstituentDto {
  id?: string;
  properties?: PropertyDto[];
  quantity?: number;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the UpsertReferencePortfolioConstituentsDto class.
 * @constructor
 * @member {string} [href]
 */
export interface UpsertReferencePortfolioConstituentsDto {
  href?: string;
}

/**
 * @class
 * Initializes a new instance of the CreateResultsRequest class.
 * @constructor
 * @member {object} [data]
 * @member {string} [scope]
 * @member {string} [key]
 * @member {date} [date]
 */
export interface CreateResultsRequest {
  data?: any;
  scope?: string;
  key?: string;
  date?: Date;
}

/**
 * @class
 * Initializes a new instance of the ResultsDto class.
 * @constructor
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.updatedBy]
 * @member {string} [version.href]
 * @member {string} [href]
 * @member {object} [values]
 */
export interface ResultsDto {
  version?: VersionDto;
  href?: string;
  values?: any;
}

/**
 * @class
 * Initializes a new instance of the KeyValuePairStringFieldSchema class.
 * @constructor
 * @member {string} [key]
 * @member {object} [value]
 * @member {string} [value.scope]
 * @member {string} [value.name]
 * @member {string} [value.displayName]
 * @member {string} [value.type] Possible values include: 'String', 'Int',
 * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
 * 'UnitCreation'
 * @member {boolean} [value.isMetric]
 * @member {number} [value.displayOrder]
 * @member {object} [value.propertySchema]
 */
export interface KeyValuePairStringFieldSchema {
  readonly key?: string;
  readonly value?: FieldSchema;
}

/**
 * @class
 * Initializes a new instance of the SchemaDto class.
 * @constructor
 * @member {string} [entity] Possible values include: 'PropertyKey',
 * 'FieldSchema', 'Personalisation', 'Security', 'Property',
 * 'CreatePropertyRequest', 'CreatePerpetualPropertyRequest',
 * 'PerpetualProperty', 'Login', 'PropertyDefinition', 'PropertyDataFormat',
 * 'AggregationResponseNode', 'Portfolio', 'CompletePortfolio',
 * 'PortfolioSearchResult', 'PortfolioDetails', 'PortfolioProperties',
 * 'Version', 'AddTradeProperty', 'AnalyticStore', 'AnalyticStoreKey',
 * 'UpsertPortfolioTrades', 'Group', 'Constituent', 'Trade',
 * 'UpsertPortfolioTradesRequest', 'PortfolioHolding', 'AdjustHolding',
 * 'ErrorDetail', 'ErrorResponse', 'InstrumentDefinition', 'ProcessedCommand',
 * 'CreatePortfolio', 'CreateAnalyticStore', 'CreateClientSecurity',
 * 'CreateDerivedPortfolio', 'CreateGroup', 'CreatePropertyDataFormat',
 * 'CreatePropertyDefinition', 'UpdatePortfolio', 'UpdateGroup',
 * 'UpdatePropertyDataFormat', 'UpdatePropertyDefinition', 'SecurityAnalytic',
 * 'AggregationRequest', 'Aggregation', 'NestedAggregation',
 * 'ResultDataSchema', 'Classification', 'SecurityClassification',
 * 'WebLogMessage', 'UpsertPersonalisation', 'CreatePortfolioDetails',
 * 'UpsertConstituent', 'CreateResults', 'Results', 'TryAddClientSecurities',
 * 'TryDeleteClientSecurities', 'TryLookupSecuritiesFromCodes',
 * 'ExpandedGroup', 'CreateCorporateAction', 'CorporateAction',
 * 'CorporateActionTransition', 'ReconciliationRequest', 'ReconciliationBreak',
 * 'TransactionConfigurationData', 'TransactionConfigurationMovementData',
 * 'TransactionConfigurationTypeAlias', 'TryUpsertCorporateActions',
 * 'Iso4217CurrencyUnit', 'BasicUnit', 'CorporateActionTransitionComponent',
 * 'TargetTaxlot', 'AdjustHoldingRequest'
 * @member {string} [href]
 * @member {array} [values]
 */
export interface SchemaDto {
  entity?: string;
  href?: string;
  values?: KeyValuePairStringFieldSchema[];
}

/**
 * @class
 * Initializes a new instance of the PropertySchemaDto class.
 * @constructor
 * @member {string} [href]
 * @member {array} [values]
 */
export interface PropertySchemaDto {
  href?: string;
  values?: KeyValuePairPropertyKeyFieldSchema[];
}

/**
 * @class
 * Initializes a new instance of the InstrumentDefinitionDto class.
 * @constructor
 * An opaque instrument definition.
 * Understood by some analytics library.
 *
 * @member {string} [content]
 */
export interface InstrumentDefinitionDto {
  readonly content?: string;
}

/**
 * @class
 * Initializes a new instance of the CreateClientSecurityRequest class.
 * @constructor
 * @member {string} clientSecurityId
 * @member {string} name
 * @member {array} properties
 * @member {object} [lookThroughPortfolioId]
 * @member {string} [lookThroughPortfolioId.scope]
 * @member {string} [lookThroughPortfolioId.code]
 * @member {object} [instrument] There could be multiple underlying instrument
 * definitions (same
 * instrument but different format), but for now store one.
 * @member {string} [instrument.content]
 */
export interface CreateClientSecurityRequest {
  clientSecurityId: string;
  name: string;
  properties: PropertyDto[];
  lookThroughPortfolioId?: ResourceId;
  instrument?: InstrumentDefinitionDto;
}

/**
 * @class
 * Initializes a new instance of the SecurityDto class.
 * @constructor
 * @member {string} [href]
 * @member {string} [uid]
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.updatedBy]
 * @member {string} [version.href]
 * @member {string} [commonName]
 * @member {object} [aliases]
 * @member {array} [properties]
 * @member {string} [marketIdentifierCode]
 * @member {array} [_links]
 */
export interface SecurityDto {
  href?: string;
  uid?: string;
  version?: VersionDto;
  commonName?: string;
  aliases?: { [propertyName: string]: string };
  properties?: PropertyDto[];
  marketIdentifierCode?: string;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the TryAddClientSecuritiesDto class.
 * @constructor
 * @member {string} [href]
 * @member {array} [values]
 * @member {array} [failed]
 */
export interface TryAddClientSecuritiesDto {
  href?: string;
  values?: SecurityDto[];
  failed?: ErrorDetail[];
}

/**
 * @class
 * Initializes a new instance of the TryDeleteClientSecuritiesDto class.
 * @constructor
 * @member {string} [href]
 * @member {array} [failed]
 */
export interface TryDeleteClientSecuritiesDto {
  href?: string;
  failed?: ErrorDetail[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListSecurityDto class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListSecurityDto {
  values?: SecurityDto[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the TryLookupSecuritiesFromCodesDto class.
 * @constructor
 * @member {string} [href]
 * @member {array} [values]
 * @member {array} [failed]
 */
export interface TryLookupSecuritiesFromCodesDto {
  href?: string;
  values?: ResourceListSecurityDto[];
  failed?: ErrorDetail[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListAnalyticStoreKeyDto class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListAnalyticStoreKeyDto {
  values?: AnalyticStoreKeyDto[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListTxnMetaDataDto class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListTxnMetaDataDto {
  values?: TxnMetaDataDto[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListGroupDto class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListGroupDto {
  values?: GroupDto[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListProcessedCommandDto class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListProcessedCommandDto {
  values?: ProcessedCommandDto[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListPersonalisationDto class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListPersonalisationDto {
  values?: PersonalisationDto[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListScope class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListScope {
  values?: string[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListPortfolioDto class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListPortfolioDto {
  values?: PortfolioDto[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the VersionedResourceListHoldingDto class.
 * @constructor
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.updatedBy]
 * @member {string} [version.href]
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface VersionedResourceListHoldingDto {
  version?: VersionDto;
  values?: HoldingDto[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the VersionedResourceListTradeDto class.
 * @constructor
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.updatedBy]
 * @member {string} [version.href]
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface VersionedResourceListTradeDto {
  version?: VersionDto;
  values?: TradeDto[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListPortfolioSearchResult class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListPortfolioSearchResult {
  values?: PortfolioSearchResult[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListPropertyDefinitionDto class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListPropertyDefinitionDto {
  values?: PropertyDefinitionDto[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListPropertyDomain class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListPropertyDomain {
  values?: string[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListPropertyKey class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListPropertyKey {
  values?: string[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListPropertyDataFormatDto class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListPropertyDataFormatDto {
  values?: PropertyDataFormatDto[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListReconciliationBreakDto class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListReconciliationBreakDto {
  values?: ReconciliationBreakDto[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListReferencePortfolioConstituentDto class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListReferencePortfolioConstituentDto {
  values?: ReferencePortfolioConstituentDto[];
  href?: string;
  count?: number;
  _links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListUiDataType class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [_links]
 */
export interface ResourceListUiDataType {
  values?: string[];
  href?: string;
  count?: number;
  _links?: Link[];
}
