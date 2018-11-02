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
 * Initializes a new instance of the AnalyticStoreKey class.
 * @constructor
 * @member {string} [scope]
 * @member {date} [date]
 */
export interface AnalyticStoreKey {
  scope?: string;
  date?: Date;
}

/**
 * @class
 * Initializes a new instance of the Link class.
 * @constructor
 * @member {string} relation Possible values include: 'Root', 'Properties',
 * 'Transactions', 'Details', 'Constituents', 'Holdings', 'Commands',
 * 'HoldingsAdjustments', 'Parent', 'PropertySchema', 'EntitySchema', 'Quote'
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
 * Initializes a new instance of the AnalyticStore class.
 * @constructor
 * @member {object} [key]
 * @member {string} [key.scope]
 * @member {date} [key.date]
 * @member {string} [href]
 * @member {array} [links]
 */
export interface AnalyticStore {
  key?: AnalyticStoreKey;
  href?: string;
  links?: Link[];
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
 * 'InstrumentNotFound', 'PropertyNotFound', 'PortfolioRecursionDepth',
 * 'GroupNotFound', 'PortfolioNotFound', 'PropertySchemaNotFound',
 * 'PortfolioAncestryNotFound', 'PortfolioWithIdAlreadyExists',
 * 'OrphanedPortfolio', 'MissingBaseClaims', 'PropertyNotDefined',
 * 'CannotDeleteSystemProperty', 'CannotModifyImmutablePropertyField',
 * 'PropertyAlreadyExists', 'InvalidPropertyLifeTime',
 * 'CannotModifyDefaultDataType', 'GroupAlreadyExists', 'NoSuchDataType',
 * 'ValidationError', 'LoopDetectedInGroupHierarchy', 'SubGroupAlreadyExists',
 * 'PriceSourceNotFound', 'AnalyticStoreNotFound',
 * 'AnalyticStoreAlreadyExists', 'ClientInstrumentAlreadyExists',
 * 'DuplicateInParameterSet', 'ResultsNotFound', 'OrderFieldNotInResultSet',
 * 'OperationFailed', 'ElasticSearchError', 'InvalidParameterValue',
 * 'CommandProcessingFailure', 'EntityStateConstructionFailure',
 * 'EntityTimelineDoesNotExist', 'EventPublishFailure',
 * 'InvalidRequestFailure', 'EventPublishUnknown', 'EventQueryFailure',
 * 'BlobDidNotExistFailure', 'SubSystemRequestFailure',
 * 'SubSystemConfigurationFailure', 'FailedToDelete',
 * 'UpsertClientInstrumentFailure', 'IllegalAsAtInterval',
 * 'IllegalBitemporalQuery', 'InvalidAlternateId',
 * 'CannotAddSourcePortfolioPropertyExplicitly', 'EntityAlreadyExistsInGroup',
 * 'EntityWithIdAlreadyExists', 'PortfolioDetailsDoNotExist',
 * 'PortfolioWithNameAlreadyExists', 'InvalidTransactions',
 * 'ReferencePortfolioNotFound', 'DuplicateIdFailure',
 * 'CommandRetrievalFailure', 'DataFilterApplicationFailure', 'SearchFailed',
 * 'MovementsEngineConfigurationKeyFailure', 'FxRateSourceNotFound',
 * 'AccrualSourceNotFound', 'EntitlementsFailure', 'InvalidIdentityToken',
 * 'InvalidRequestHeaders', 'PriceNotFound', 'InvalidSubHoldingKeysProvided',
 * 'DuplicateSubHoldingKeysProvided', 'CutDefinitionNotFound',
 * 'CutDefinitionInvalid', 'ServerConfigurationError',
 * 'InvalidUnitForDataType', 'InvalidTypeForDataType',
 * 'InvalidValueForDataType', 'UnitNotDefinedForDataType',
 * 'UnitsNotSupportedOnDataType', 'CannotSpecifyUnitsOnDataType',
 * 'UnitSchemaInconsistentWithDataType', 'UnitDefinitionNotSpecified',
 * 'DuplicateUnitDefinitionsSpecified', 'InvalidUnitsDefinition',
 * 'InvalidInstrumentIdentifierUnit', 'HoldingsAdjustmentDoesNotExist',
 * 'CouldNotBuildExcelUrl', 'CouldNotGetExcelVersion',
 * 'InstrumentByCodeNotFound', 'EntitySchemaDoesNotExist',
 * 'FeatureNotSupportedOnPortfolioType', 'QuoteNotFoundFailure',
 * 'ReferencePortfolioRequestNotSupported',
 * 'TransactionPortfolioRequestNotSupported', 'InvalidInstrumentDefinition',
 * 'InstrumentUpsertFailure', 'TransactionTypeNotFound',
 * 'TransactionTypeDuplication', 'InvalidPropertyValueAssignment'
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
 * Initializes a new instance of the ResourceListOfAnalyticStoreKey class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfAnalyticStoreKey {
  values?: AnalyticStoreKey[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the DeletedEntityResponse class.
 * @constructor
 * @member {string} [href]
 * @member {date} [effectiveFrom]
 * @member {date} [asAt]
 * @member {array} [links]
 */
export interface DeletedEntityResponse {
  href?: string;
  effectiveFrom?: Date;
  asAt?: Date;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the InstrumentAnalytic class.
 * @constructor
 * @member {string} [instrumentUid] Unique instrument identifier
 * @member {number} [value] Value of the analytic, eg price
 * @member {string} [denomination] Underlying unit of the analytic, eg
 * currency, EPS etc.
 */
export interface InstrumentAnalytic {
  instrumentUid?: string;
  value?: number;
  denomination?: string;
}

/**
 * @class
 * Initializes a new instance of the CorporateActionTransitionComponent class.
 * @constructor
 * @member {string} instrumentUid
 * @member {number} unitsFactor
 * @member {number} costFactor
 */
export interface CorporateActionTransitionComponent {
  instrumentUid: string;
  unitsFactor: number;
  costFactor: number;
}

/**
 * @class
 * Initializes a new instance of the CorporateActionTransition class.
 * @constructor
 * A 'transition' within a corporate action, representing a set of output
 * movements paired to a single input position
 *
 * @member {object} [inputTransition]
 * @member {string} [inputTransition.instrumentUid]
 * @member {number} [inputTransition.unitsFactor]
 * @member {number} [inputTransition.costFactor]
 * @member {array} [outputTransitions]
 */
export interface CorporateActionTransition {
  inputTransition?: CorporateActionTransitionComponent;
  outputTransitions?: CorporateActionTransitionComponent[];
}

/**
 * @class
 * Initializes a new instance of the CreateCorporateAction class.
 * @constructor
 * @member {string} corporateActionCode
 * @member {date} announcementDate
 * @member {date} exDate
 * @member {date} recordDate
 * @member {date} paymentDate
 * @member {array} transitions
 */
export interface CreateCorporateAction {
  corporateActionCode: string;
  announcementDate: Date;
  exDate: Date;
  recordDate: Date;
  paymentDate: Date;
  transitions: CorporateActionTransition[];
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
 * Initializes a new instance of the CorporateAction class.
 * @constructor
 * A corporate action
 *
 * @member {object} sourceId
 * @member {string} [sourceId.scope]
 * @member {string} [sourceId.code]
 * @member {string} corporateActionCode
 * @member {date} [announcementDate]
 * @member {date} [exDate]
 * @member {date} [recordDate]
 * @member {date} [paymentDate]
 * @member {array} [transitions]
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
 * Initializes a new instance of the UpsertCorporateActionsResponse class.
 * @constructor
 * @member {string} [href]
 * @member {object} [values]
 * @member {object} [failed]
 * @member {array} [links]
 */
export interface UpsertCorporateActionsResponse {
  href?: string;
  values?: { [propertyName: string]: CorporateAction };
  failed?: { [propertyName: string]: ErrorDetail };
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListOfCorporateActionEvent class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfCorporateActionEvent {
  values?: CorporateAction[];
  href?: string;
  count?: number;
  links?: Link[];
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
  details?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the CreateDataTypeRequest class.
 * @constructor
 * @member {string} scope
 * @member {string} code
 * @member {string} typeValueRange Possible values include: 'Open', 'Closed'
 * @member {string} displayName
 * @member {string} description
 * @member {string} valueType Possible values include: 'String', 'Int',
 * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits',
 * 'StringArray', 'CurrencyAndAmount', 'TradePrice', 'UnitCreation',
 * 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
 * @member {array} [acceptableValues]
 * @member {string} [unitSchema] Possible values include: 'NoUnits', 'Basic',
 * 'Iso4217Currency'
 * @member {array} [acceptableUnits]
 */
export interface CreateDataTypeRequest {
  scope: string;
  code: string;
  typeValueRange: string;
  displayName: string;
  description: string;
  valueType: string;
  acceptableValues?: any[];
  unitSchema?: string;
  acceptableUnits?: CreateUnitDefinition[];
}

/**
 * @class
 * Initializes a new instance of the IUnitDefinition class.
 * @constructor
 * @member {string} [schema] Possible values include: 'NoUnits', 'Basic',
 * 'Iso4217Currency'
 * @member {string} [code]
 * @member {string} [displayName]
 * @member {string} [description]
 */
export interface IUnitDefinition {
  readonly schema?: string;
  readonly code?: string;
  readonly displayName?: string;
  readonly description?: string;
}

/**
 * @class
 * Initializes a new instance of the DataType class.
 * @constructor
 * @member {string} [href]
 * @member {string} [typeValueRange] Possible values include: 'Open', 'Closed'
 * @member {object} [id]
 * @member {string} [id.scope]
 * @member {string} [id.code]
 * @member {string} [displayName]
 * @member {string} [description]
 * @member {string} [valueType] Possible values include: 'String', 'Int',
 * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits',
 * 'StringArray', 'CurrencyAndAmount', 'TradePrice', 'UnitCreation',
 * 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
 * @member {array} [acceptableValues]
 * @member {string} [unitSchema] Possible values include: 'NoUnits', 'Basic',
 * 'Iso4217Currency'
 * @member {array} [acceptableUnits]
 * @member {array} [links]
 */
export interface DataType {
  href?: string;
  typeValueRange?: string;
  id?: ResourceId;
  displayName?: string;
  description?: string;
  valueType?: string;
  acceptableValues?: any[];
  unitSchema?: string;
  acceptableUnits?: IUnitDefinition[];
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListOfDataType class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfDataType {
  values?: DataType[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the UpdateDataTypeRequest class.
 * @constructor
 * @member {string} typeValueRange Possible values include: 'Open', 'Closed'
 * @member {string} displayName
 * @member {string} description
 * @member {string} valueType Possible values include: 'String', 'Int',
 * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits',
 * 'StringArray', 'CurrencyAndAmount', 'TradePrice', 'UnitCreation',
 * 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
 * @member {array} [acceptableValues]
 * @member {string} [unitSchema] Possible values include: 'NoUnits', 'Basic',
 * 'Iso4217Currency'
 * @member {array} [acceptableUnits]
 */
export interface UpdateDataTypeRequest {
  typeValueRange: string;
  displayName: string;
  description: string;
  valueType: string;
  acceptableValues?: any[];
  unitSchema?: string;
  acceptableUnits?: CreateUnitDefinition[];
}

/**
 * @class
 * Initializes a new instance of the CreateDerivedTransactionPortfolioRequest class.
 * @constructor
 * @member {string} displayName
 * @member {string} [description]
 * @member {string} [code]
 * @member {object} [parentPortfolioId]
 * @member {string} [parentPortfolioId.scope]
 * @member {string} [parentPortfolioId.code]
 * @member {date} [created]
 * @member {object} [corporateActionSourceId]
 * @member {string} [corporateActionSourceId.scope]
 * @member {string} [corporateActionSourceId.code]
 * @member {string} [accountingMethod] Possible values include: 'Default',
 * 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut', 'HighestCostFirst',
 * 'LowestCostFirst'
 * @member {array} [subHoldingKeys]
 */
export interface CreateDerivedTransactionPortfolioRequest {
  displayName: string;
  description?: string;
  code?: string;
  parentPortfolioId?: ResourceId;
  created?: Date;
  corporateActionSourceId?: ResourceId;
  accountingMethod?: string;
  subHoldingKeys?: string[];
}

/**
 * @class
 * Initializes a new instance of the Version class.
 * @constructor
 * Describes the version metadata of an entity.
 *
 * @member {date} [effectiveFrom]
 * @member {date} [asAtDate]
 * @member {string} [href]
 */
export interface Version {
  readonly effectiveFrom?: Date;
  readonly asAtDate?: Date;
  readonly href?: string;
}

/**
 * @class
 * Initializes a new instance of the Portfolio class.
 * @constructor
 * @member {string} [href] Link to retrieve the current entity
 * @member {object} [id] Identifier for the portfolio
 * @member {string} [id.scope]
 * @member {string} [id.code]
 * @member {string} [type] The type of portfolio this is (e.g. Transaction
 * Portfolio, Reference  Portfolio). Possible values include: 'Transaction',
 * 'Reference', 'DerivedTransaction'
 * @member {string} [displayName] Display name of the portfolio
 * @member {string} [description] Description of the portfolio
 * @member {date} [created] Portfolio creation time in UTC
 * @member {object} [parentPortfolioId] If this is a derived portfolio, the
 * identifier of the portfolio from which it is derived
 * @member {string} [parentPortfolioId.scope]
 * @member {string} [parentPortfolioId.code]
 * @member {object} [version] The version of the portfolio
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {boolean} [isDerived]
 * @member {array} [links]
 */
export interface Portfolio {
  readonly href?: string;
  readonly id?: ResourceId;
  readonly type?: string;
  readonly displayName?: string;
  readonly description?: string;
  readonly created?: Date;
  readonly parentPortfolioId?: ResourceId;
  readonly version?: Version;
  readonly isDerived?: boolean;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the InstrumentDefinition class.
 * @constructor
 * Expanded instrument definition - in the case of OTC instruments
 * this contains the definition of the non-exchange traded instrument.
 * The format for this can be client-defined, but in order to transparently use
 * vendor libraries it must conform to a format that LUSID understands.
 *
 * @member {string} instrumentFormat
 * @member {string} content
 */
export interface InstrumentDefinition {
  instrumentFormat: string;
  content: string;
}

/**
 * @class
 * Initializes a new instance of the CreateClientInstrumentRequest class.
 * @constructor
 * @member {string} clientInstrumentId
 * @member {string} name
 * @member {object} [lookThroughPortfolioId]
 * @member {string} [lookThroughPortfolioId.scope]
 * @member {string} [lookThroughPortfolioId.code]
 * @member {object} [instrument] Expanded instrument definition - in the case
 * of OTC instruments
 * this contains the definition of the non-exchange traded instrument.
 * The format for this can be client-defined, but in order to transparently use
 * vendor libraries it must conform to a format that LUSID understands.
 * @member {string} [instrument.instrumentFormat]
 * @member {string} [instrument.content]
 */
export interface CreateClientInstrumentRequest {
  clientInstrumentId: string;
  name: string;
  lookThroughPortfolioId?: ResourceId;
  instrument?: InstrumentDefinition;
}

/**
 * @class
 * Initializes a new instance of the Property class.
 * @constructor
 * @member {string} key
 * @member {object} value
 * @member {string} [unit]
 * @member {date} [effectiveFrom] Date for which the property is effective from
 */
export interface Property {
  key: string;
  value: any;
  unit?: string;
  effectiveFrom?: Date;
}

/**
 * @class
 * Initializes a new instance of the Instrument class.
 * @constructor
 * @member {string} [href]
 * @member {string} [uid]
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {string} [commonName]
 * @member {object} [aliases]
 * @member {array} [properties]
 * @member {string} [marketIdentifierCode]
 * @member {object} [lookthroughPortfolio]
 * @member {string} [lookthroughPortfolio.scope]
 * @member {string} [lookthroughPortfolio.code]
 * @member {array} [links]
 */
export interface Instrument {
  href?: string;
  uid?: string;
  version?: Version;
  commonName?: string;
  aliases?: { [propertyName: string]: string };
  properties?: Property[];
  marketIdentifierCode?: string;
  lookthroughPortfolio?: ResourceId;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the TryAddClientInstruments class.
 * @constructor
 * @member {string} [href]
 * @member {object} [values]
 * @member {object} [failed]
 * @member {array} [links]
 */
export interface TryAddClientInstruments {
  href?: string;
  values?: { [propertyName: string]: Instrument };
  failed?: { [propertyName: string]: ErrorDetail };
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the DeleteClientInstrumentsResponse class.
 * @constructor
 * @member {string} [href]
 * @member {object} [failed]
 * @member {array} [links]
 */
export interface DeleteClientInstrumentsResponse {
  href?: string;
  failed?: { [propertyName: string]: ErrorDetail };
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the LookupInstrumentsFromCodesResponse class.
 * @constructor
 * @member {string} [href]
 * @member {object} [values]
 * @member {object} [failed]
 * @member {array} [links]
 */
export interface LookupInstrumentsFromCodesResponse {
  href?: string;
  values?: { [propertyName: string]: Instrument[] };
  failed?: { [propertyName: string]: ErrorDetail };
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the MetricValue class.
 * @constructor
 * @member {number} [value]
 * @member {string} [unit]
 */
export interface MetricValue {
  value?: number;
  unit?: string;
}

/**
 * @class
 * Initializes a new instance of the PropertyValue class.
 * @constructor
 * @member {string} [labelValue]
 * @member {object} [metricValue]
 * @member {number} [metricValue.value]
 * @member {string} [metricValue.unit]
 * @member {date} [effectiveFrom] Date for which the property is effective from
 */
export interface PropertyValue {
  labelValue?: string;
  metricValue?: MetricValue;
  effectiveFrom?: Date;
}

/**
 * @class
 * Initializes a new instance of the CreateInstrumentPropertyRequest class.
 * @constructor
 * @member {string} [instrumentPropertyKey]
 * @member {object} [property]
 * @member {string} [property.labelValue]
 * @member {object} [property.metricValue]
 * @member {number} [property.metricValue.value]
 * @member {string} [property.metricValue.unit]
 * @member {date} [property.effectiveFrom] Date for which the property is
 * effective from
 */
export interface CreateInstrumentPropertyRequest {
  instrumentPropertyKey?: string;
  property?: PropertyValue;
}

/**
 * @class
 * Initializes a new instance of the InstrumentProperty class.
 * @constructor
 * @member {string} [instrumentUid] Unique instrument identifier
 * @member {array} [properties]
 */
export interface InstrumentProperty {
  instrumentUid?: string;
  properties?: CreateInstrumentPropertyRequest[];
}

/**
 * @class
 * Initializes a new instance of the UpsertInstrumentPropertiesResponse class.
 * @constructor
 * @member {string} [href]
 * @member {array} [links]
 */
export interface UpsertInstrumentPropertiesResponse {
  href?: string;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the VersionSummary class.
 * @constructor
 * @member {string} [apiVersion]
 * @member {string} [buildVersion]
 * @member {string} [excelVersion]
 * @member {array} [links]
 */
export interface VersionSummary {
  readonly apiVersion?: string;
  readonly buildVersion?: string;
  readonly excelVersion?: string;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the Personalisation class.
 * @constructor
 * @member {string} [scope] Possible values include: 'User', 'Group',
 * 'Default', 'All'
 * @member {string} [scopeValue]
 * @member {string} [settingKey]
 * @member {string} [settingValue]
 * @member {string} [dataType]
 * @member {string} [href]
 */
export interface Personalisation {
  scope?: string;
  scopeValue?: string;
  settingKey?: string;
  settingValue?: string;
  dataType?: string;
  href?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceListOfPersonalisation class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfPersonalisation {
  values?: Personalisation[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the UpsertPersonalisationResponse class.
 * @constructor
 * @member {string} [href]
 * @member {array} [links]
 */
export interface UpsertPersonalisationResponse {
  href?: string;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the CreatePortfolioGroupRequest class.
 * @constructor
 * @member {string} id
 * @member {array} [values]
 * @member {array} [subGroups]
 * @member {string} displayName
 * @member {string} [description]
 */
export interface CreatePortfolioGroupRequest {
  id: string;
  values?: ResourceId[];
  subGroups?: ResourceId[];
  displayName: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the PortfolioGroup class.
 * @constructor
 * @member {string} [href]
 * @member {object} [id]
 * @member {string} [id.scope]
 * @member {string} [id.code]
 * @member {string} [displayName]
 * @member {string} [description]
 * @member {array} [portfolios]
 * @member {array} [subGroups]
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {array} [links]
 */
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

/**
 * @class
 * Initializes a new instance of the ResourceListOfPortfolioGroup class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfPortfolioGroup {
  values?: PortfolioGroup[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the UpdatePortfolioGroupRequest class.
 * @constructor
 * @member {string} displayName
 * @member {string} [description]
 */
export interface UpdatePortfolioGroupRequest {
  displayName: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the AggregateSpec class.
 * @constructor
 * @member {string} key
 * @member {string} op Possible values include: 'Sum', 'Proportion'
 */
export interface AggregateSpec {
  key: string;
  op: string;
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
 * @member {object} recipeId
 * @member {string} [recipeId.scope]
 * @member {string} [recipeId.code]
 * @member {boolean} [loadReferencePortfolio]
 * @member {date} [asAt] The asAt date to use
 * @member {date} effectiveAt
 * @member {array} metrics
 * @member {array} [groupBy]
 * @member {array} [filters]
 * @member {number} [limit]
 * @member {string} [sort]
 */
export interface AggregationRequest {
  recipeId: ResourceId;
  loadReferencePortfolio?: boolean;
  asAt?: Date;
  effectiveAt: Date;
  metrics: AggregateSpec[];
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
 * 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits',
 * 'StringArray', 'CurrencyAndAmount', 'TradePrice', 'UnitCreation',
 * 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
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
 * Initializes a new instance of the KeyValuePairOfPropertyKeyToFieldSchema class.
 * @constructor
 * @member {string} [key]
 * @member {object} [value]
 * @member {string} [value.scope]
 * @member {string} [value.name]
 * @member {string} [value.displayName]
 * @member {string} [value.type] Possible values include: 'String', 'Int',
 * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits',
 * 'StringArray', 'CurrencyAndAmount', 'TradePrice', 'UnitCreation',
 * 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
 * @member {boolean} [value.isMetric]
 * @member {number} [value.displayOrder]
 * @member {object} [value.propertySchema]
 */
export interface KeyValuePairOfPropertyKeyToFieldSchema {
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
  nodeValueSchema?: KeyValuePairOfPropertyKeyToFieldSchema[];
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
 * @member {array} [links]
 */
export interface ListAggregationResponse {
  href?: string;
  data?: { [propertyName: string]: any }[];
  aggregationCurrency?: string;
  dataSchema?: ResultDataSchema;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the AggregationResponseNode class.
 * @constructor
 * @member {string} [key]
 * @member {string} [value]
 * @member {number} [depth]
 * @member {object} [properties]
 * @member {array} [children]
 */
export interface AggregationResponseNode {
  key?: string;
  value?: string;
  depth?: number;
  properties?: { [propertyName: string]: any };
  children?: AggregationResponseNode[];
}

/**
 * @class
 * Initializes a new instance of the NestedAggregationResponse class.
 * @constructor
 * @member {string} [href]
 * @member {object} [data]
 * @member {string} [data.key]
 * @member {string} [data.value]
 * @member {number} [data.depth]
 * @member {object} [data.properties]
 * @member {array} [data.children]
 * @member {string} [aggregationCurrency]
 * @member {object} [dataSchema]
 * @member {array} [dataSchema.nodeValueSchema]
 * @member {object} [dataSchema.propertySchema]
 * @member {array} [links]
 */
export interface NestedAggregationResponse {
  href?: string;
  data?: AggregationResponseNode;
  aggregationCurrency?: string;
  dataSchema?: ResultDataSchema;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the User class.
 * @constructor
 * @member {string} [id]
 */
export interface User {
  readonly id?: string;
}

/**
 * @class
 * Initializes a new instance of the ProcessedCommand class.
 * @constructor
 * @member {string} [description]
 * @member {string} [path]
 * @member {object} [userId] The user that issued the command.
 * @member {string} [userId.id]
 * @member {object} [processedTime] The as at time of the events published by
 * the processing of
 * this command.
 */
export interface ProcessedCommand {
  description?: string;
  path?: string;
  userId?: User;
  processedTime?: any;
}

/**
 * @class
 * Initializes a new instance of the ResourceListOfProcessedCommand class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfProcessedCommand {
  values?: ProcessedCommand[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the CompletePortfolio class.
 * @constructor
 * @member {object} [id]
 * @member {string} [id.scope]
 * @member {string} [id.code]
 * @member {string} [href]
 * @member {string} [description]
 * @member {string} [displayName]
 * @member {date} [created]
 * @member {object} [parentPortfolioId]
 * @member {string} [parentPortfolioId.scope]
 * @member {string} [parentPortfolioId.code]
 * @member {boolean} [isDerived]
 * @member {string} [type] Possible values include: 'Transaction', 'Reference',
 * 'DerivedTransaction'
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {array} [properties]
 * @member {string} [baseCurrency]
 * @member {array} [links]
 */
export interface CompletePortfolio {
  readonly id?: ResourceId;
  readonly href?: string;
  readonly description?: string;
  readonly displayName?: string;
  readonly created?: Date;
  readonly parentPortfolioId?: ResourceId;
  readonly isDerived?: boolean;
  readonly type?: string;
  version?: Version;
  properties?: Property[];
  baseCurrency?: string;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ExpandedGroup class.
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
 * @member {string} [version.href]
 * @member {array} [links]
 */
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

/**
 * @class
 * Initializes a new instance of the ResourceListOfScope class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfScope {
  values?: string[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListOfPortfolio class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfPortfolio {
  values?: Portfolio[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the UpdatePortfolioRequest class.
 * @constructor
 * @member {string} displayName
 * @member {string} [description]
 * @member {date} [created]
 */
export interface UpdatePortfolioRequest {
  displayName: string;
  description?: string;
  created?: Date;
}

/**
 * @class
 * Initializes a new instance of the PortfolioProperties class.
 * @constructor
 * @member {string} [href]
 * @member {object} [originPortfolioId]
 * @member {string} [originPortfolioId.scope]
 * @member {string} [originPortfolioId.code]
 * @member {array} [properties]
 * @member {object} [version] The version of the portfolio
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {array} [links]
 */
export interface PortfolioProperties {
  href?: string;
  originPortfolioId?: ResourceId;
  properties?: Property[];
  version?: Version;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the PortfolioReconciliationRequest class.
 * @constructor
 * @member {object} portfolioId The id of the portfolio to be reconciled
 * @member {string} [portfolioId.scope]
 * @member {string} [portfolioId.code]
 * @member {date} effectiveAt The effective date of the portfolio
 * @member {date} [asAt] Optional. The AsAt date of the portfolio
 */
export interface PortfolioReconciliationRequest {
  portfolioId: ResourceId;
  effectiveAt: Date;
  asAt?: Date;
}

/**
 * @class
 * Initializes a new instance of the PortfoliosReconciliationRequest class.
 * @constructor
 * @member {object} left The specification of the left hand side of the
 * portfolio reconciliation
 * @member {object} [left.portfolioId] The id of the portfolio to be reconciled
 * @member {string} [left.portfolioId.scope]
 * @member {string} [left.portfolioId.code]
 * @member {date} [left.effectiveAt] The effective date of the portfolio
 * @member {date} [left.asAt] Optional. The AsAt date of the portfolio
 * @member {object} right The specification of the right hand side of the
 * portfolio reconciliation
 * @member {object} [right.portfolioId] The id of the portfolio to be
 * reconciled
 * @member {string} [right.portfolioId.scope]
 * @member {string} [right.portfolioId.code]
 * @member {date} [right.effectiveAt] The effective date of the portfolio
 * @member {date} [right.asAt] Optional. The AsAt date of the portfolio
 * @member {array} instrumentPropertyKeys Instrument properties to be included
 * with any identified breaks. These properties will be in the effective and
 * AsAt dates of the left portfolio
 */
export interface PortfoliosReconciliationRequest {
  left: PortfolioReconciliationRequest;
  right: PortfolioReconciliationRequest;
  instrumentPropertyKeys: string[];
}

/**
 * @class
 * Initializes a new instance of the PerpetualProperty class.
 * @constructor
 * This is intended to be the external facing unitemporal property
 * specification data type.
 *
 * @member {string} key
 * @member {object} value
 * @member {string} [unit]
 */
export interface PerpetualProperty {
  key: string;
  value: any;
  readonly unit?: string;
}

/**
 * @class
 * Initializes a new instance of the CurrencyAndAmount class.
 * @constructor
 * @member {number} [amount]
 * @member {string} [currency]
 */
export interface CurrencyAndAmount {
  amount?: number;
  currency?: string;
}

/**
 * @class
 * Initializes a new instance of the ReconciliationBreak class.
 * @constructor
 * A reconciliation break
 *
 * @member {string} instrumentUid Unique instrument identifier
 * @member {array} subHoldingKeys Any other properties that comprise the
 * Sub-Holding Key
 * @member {number} leftUnits Units from the left hand side
 * @member {number} rightUnits Units from the right hand side
 * @member {number} differenceUnits Difference in units
 * @member {object} leftCost Cost from the left hand side
 * @member {number} [leftCost.amount]
 * @member {string} [leftCost.currency]
 * @member {object} rightCost Cost from the right hand side
 * @member {number} [rightCost.amount]
 * @member {string} [rightCost.currency]
 * @member {object} differenceCost Difference in cost
 * @member {number} [differenceCost.amount]
 * @member {string} [differenceCost.currency]
 * @member {array} instrumentProperties Additional features relating to the
 * security
 */
export interface ReconciliationBreak {
  instrumentUid: string;
  subHoldingKeys: PerpetualProperty[];
  leftUnits: number;
  rightUnits: number;
  differenceUnits: number;
  leftCost: CurrencyAndAmount;
  rightCost: CurrencyAndAmount;
  differenceCost: CurrencyAndAmount;
  instrumentProperties: Property[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListOfReconciliationBreak class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfReconciliationBreak {
  values?: ReconciliationBreak[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the CreatePropertyDefinitionRequest class.
 * @constructor
 * @member {string} [domain] Possible values include: 'Trade', 'Portfolio',
 * 'Security', 'Holding', 'ReferenceHolding', 'TxnType', 'Instrument'
 * @member {string} [scope]
 * @member {string} [code]
 * @member {boolean} [valueRequired]
 * @member {string} [displayName]
 * @member {object} [dataTypeId]
 * @member {string} [dataTypeId.scope]
 * @member {string} [dataTypeId.code]
 * @member {string} [lifeTime] Possible values include: 'Perpetual',
 * 'TimeVariant'
 * @member {string} [type] Possible values include: 'Label', 'Metric'
 */
export interface CreatePropertyDefinitionRequest {
  domain?: string;
  scope?: string;
  code?: string;
  valueRequired?: boolean;
  displayName?: string;
  dataTypeId?: ResourceId;
  lifeTime?: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the PropertyDefinition class.
 * @constructor
 * @member {string} [href]
 * @member {string} [key]
 * @member {string} [valueType] Possible values include: 'String', 'Int',
 * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits',
 * 'StringArray', 'CurrencyAndAmount', 'TradePrice', 'UnitCreation',
 * 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
 * @member {boolean} [valueRequired]
 * @member {string} [displayName]
 * @member {object} [dataTypeId]
 * @member {string} [dataTypeId.scope]
 * @member {string} [dataTypeId.code]
 * @member {string} [lifeTime] Possible values include: 'Perpetual',
 * 'TimeVariant'
 * @member {string} [type] Possible values include: 'Label', 'Metric'
 * @member {string} [unitSchema] Possible values include: 'NoUnits', 'Basic',
 * 'Iso4217Currency'
 * @member {string} [domain] Possible values include: 'Trade', 'Portfolio',
 * 'Security', 'Holding', 'ReferenceHolding', 'TxnType', 'Instrument'
 * @member {string} [scope]
 * @member {string} [code]
 * @member {array} [links]
 */
export interface PropertyDefinition {
  href?: string;
  key?: string;
  valueType?: string;
  valueRequired?: boolean;
  displayName?: string;
  dataTypeId?: ResourceId;
  lifeTime?: string;
  type?: string;
  unitSchema?: string;
  readonly domain?: string;
  readonly scope?: string;
  readonly code?: string;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListOfPropertyDefinition class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfPropertyDefinition {
  values?: PropertyDefinition[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the UpdatePropertyDefinitionRequest class.
 * @constructor
 * @member {boolean} [valueRequired]
 * @member {string} [displayName]
 * @member {object} [dataTypeId]
 * @member {string} [dataTypeId.scope]
 * @member {string} [dataTypeId.code]
 * @member {string} [lifeTime] Possible values include: 'Perpetual',
 * 'TimeVariant'
 * @member {string} [type] Possible values include: 'Label', 'Metric'
 */
export interface UpdatePropertyDefinitionRequest {
  valueRequired?: boolean;
  displayName?: string;
  dataTypeId?: ResourceId;
  lifeTime?: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the Quote class.
 * @constructor
 * @member {string} id
 * @member {object} metricValue
 * @member {number} [metricValue.value]
 * @member {string} [metricValue.unit]
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 */
export interface Quote {
  id: string;
  metricValue: MetricValue;
  version?: Version;
}

/**
 * @class
 * Initializes a new instance of the ResourceListOfQuote class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfQuote {
  values?: Quote[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the UpsertQuoteRequest class.
 * @constructor
 * @member {string} id
 * @member {object} metricValue
 * @member {number} [metricValue.value]
 * @member {string} [metricValue.unit]
 */
export interface UpsertQuoteRequest {
  id: string;
  metricValue: MetricValue;
}

/**
 * @class
 * Initializes a new instance of the UpsertQuotesResponse class.
 * @constructor
 * The response given from the UpsertQuotes Api call
 *
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {array} [links]
 */
export interface UpsertQuotesResponse {
  version?: Version;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the DeleteQuotesResponse class.
 * @constructor
 * The response given from the DeleteQuotes Api call
 *
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {array} [links]
 */
export interface DeleteQuotesResponse {
  version?: Version;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the PerpetualPropertyValue class.
 * @constructor
 * @member {string} [labelValue]
 * @member {object} [metricValue]
 * @member {number} [metricValue.value]
 * @member {string} [metricValue.unit]
 */
export interface PerpetualPropertyValue {
  labelValue?: string;
  metricValue?: MetricValue;
}

/**
 * @class
 * Initializes a new instance of the CreateReferencePortfolioRequest class.
 * @constructor
 * @member {string} displayName
 * @member {string} [description]
 * @member {string} code
 * @member {date} [created]
 * @member {object} [properties] Portfolio properties to add to the portfolio
 */
export interface CreateReferencePortfolioRequest {
  displayName: string;
  description?: string;
  code: string;
  created?: Date;
  properties?: { [propertyName: string]: PerpetualPropertyValue };
}

/**
 * @class
 * Initializes a new instance of the ReferencePortfolioConstituentRequest class.
 * @constructor
 * @member {string} [instrumentUid]
 * @member {object} [properties]
 * @member {number} [weight]
 * @member {string} [currency]
 */
export interface ReferencePortfolioConstituentRequest {
  instrumentUid?: string;
  properties?: { [propertyName: string]: PerpetualPropertyValue };
  weight?: number;
  currency?: string;
}

/**
 * @class
 * Initializes a new instance of the UpsertReferencePortfolioConstituentsResponse class.
 * @constructor
 * @member {string} [href]
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {array} [links]
 */
export interface UpsertReferencePortfolioConstituentsResponse {
  href?: string;
  version?: Version;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ReferencePortfolioConstituent class.
 * @constructor
 * @member {string} [instrumentUid]
 * @member {array} [properties]
 * @member {number} [weight]
 * @member {string} [currency]
 */
export interface ReferencePortfolioConstituent {
  instrumentUid?: string;
  properties?: Property[];
  weight?: number;
  currency?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceListOfReferencePortfolioConstituent class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfReferencePortfolioConstituent {
  values?: ReferencePortfolioConstituent[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the CreateResults class.
 * @constructor
 * @member {object} [data]
 * @member {string} [scope]
 * @member {string} [key]
 * @member {date} [date]
 */
export interface CreateResults {
  data?: any;
  scope?: string;
  key?: string;
  date?: Date;
}

/**
 * @class
 * Initializes a new instance of the Results class.
 * @constructor
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {string} [href]
 * @member {object} [values]
 * @member {array} [links]
 */
export interface Results {
  version?: Version;
  href?: string;
  values?: any;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListOfString class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfString {
  values?: string[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the KeyValuePairOfStringToFieldSchema class.
 * @constructor
 * @member {string} [key]
 * @member {object} [value]
 * @member {string} [value.scope]
 * @member {string} [value.name]
 * @member {string} [value.displayName]
 * @member {string} [value.type] Possible values include: 'String', 'Int',
 * 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
 * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
 * 'ArrayOfTransactionAliases', 'ArrayofTransactionMovements', 'ArrayofUnits',
 * 'StringArray', 'CurrencyAndAmount', 'TradePrice', 'UnitCreation',
 * 'Currency', 'UserId', 'MetricValue', 'ArrayOfQuotes'
 * @member {boolean} [value.isMetric]
 * @member {number} [value.displayOrder]
 * @member {object} [value.propertySchema]
 */
export interface KeyValuePairOfStringToFieldSchema {
  readonly key?: string;
  readonly value?: FieldSchema;
}

/**
 * @class
 * Initializes a new instance of the Schema class.
 * @constructor
 * @member {string} [entity]
 * @member {string} [href]
 * @member {array} [values]
 * @member {array} [links]
 */
export interface Schema {
  entity?: string;
  href?: string;
  values?: KeyValuePairOfStringToFieldSchema[];
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the PropertySchema class.
 * @constructor
 * @member {string} [href]
 * @member {array} [values]
 * @member {array} [links]
 */
export interface PropertySchema {
  href?: string;
  values?: KeyValuePairOfPropertyKeyToFieldSchema[];
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListOfValueType class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfValueType {
  values?: string[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the PortfolioSearchResult class.
 * @constructor
 * @member {object} [id]
 * @member {string} [id.scope]
 * @member {string} [id.code]
 * @member {string} [type] Possible values include: 'Transaction', 'Reference',
 * 'DerivedTransaction'
 * @member {string} [href]
 * @member {string} [description]
 * @member {string} [displayName]
 * @member {boolean} [isDerived]
 * @member {date} [created]
 * @member {object} [parentPortfolioId]
 * @member {string} [parentPortfolioId.scope]
 * @member {string} [parentPortfolioId.code]
 * @member {array} [properties]
 * @member {array} [links]
 */
export interface PortfolioSearchResult {
  readonly id?: ResourceId;
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

/**
 * @class
 * Initializes a new instance of the ResourceListOfPortfolioSearchResult class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfPortfolioSearchResult {
  values?: PortfolioSearchResult[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the TransactionConfigurationTypeAlias class.
 * @constructor
 * @member {string} type The transaction type
 * @member {string} description Brief description of the transaction
 * @member {string} transactionClass Relates types of a similar class. E.g.
 * Buy/Sell, StockIn/StockOut
 * @member {string} transactionGroup Group is a set of codes related to a
 * source, or sync
 * @member {string} transactionRoles Transactions role within a class. E.g.
 * Increase a long position. Possible values include: 'None', 'LongLonger',
 * 'LongShorter', 'ShortShorter', 'ShortLonger', 'Longer', 'Shorter',
 * 'AllRoles'
 */
export interface TransactionConfigurationTypeAlias {
  type: string;
  description: string;
  transactionClass: string;
  transactionGroup: string;
  transactionRoles: string;
}

/**
 * @class
 * Initializes a new instance of the TransactionPropertyMappingRequest class.
 * @constructor
 * @member {string} propertyKey The Side
 * @member {string} [mapFrom] The Side
 * @member {object} [setTo] The Side
 */
export interface TransactionPropertyMappingRequest {
  propertyKey: string;
  mapFrom?: string;
  setTo?: any;
}

/**
 * @class
 * Initializes a new instance of the TransactionConfigurationMovementDataRequest class.
 * @constructor
 * @member {string} movementTypes The Movement Types. Possible values include:
 * 'Settlement', 'Traded', 'ForwardFx', 'Commitment', 'Receivable',
 * 'CashSettlement', 'Accrual', 'UnsettledCashTypes'
 * @member {string} side The Movement Side. Possible values include: 'Side1',
 * 'Side2', 'BondInt'
 * @member {number} direction The Movement direction
 * @member {object} [properties]
 * @member {array} [mappings]
 */
export interface TransactionConfigurationMovementDataRequest {
  movementTypes: string;
  side: string;
  direction: number;
  properties?: { [propertyName: string]: PropertyValue };
  mappings?: TransactionPropertyMappingRequest[];
}

/**
 * @class
 * Initializes a new instance of the TransactionConfigurationDataRequest class.
 * @constructor
 * @member {array} aliases List of transaction codes that map to this specific
 * transaction model
 * @member {array} movements Movement data for the transaction code
 * @member {object} [properties]
 */
export interface TransactionConfigurationDataRequest {
  aliases: TransactionConfigurationTypeAlias[];
  movements: TransactionConfigurationMovementDataRequest[];
  readonly properties?: { [propertyName: string]: PropertyValue };
}

/**
 * @class
 * Initializes a new instance of the TransactionPropertyMapping class.
 * @constructor
 * @member {string} propertyKey The Side
 * @member {string} [mapFrom] The Side
 * @member {object} [setTo] The Side
 */
export interface TransactionPropertyMapping {
  propertyKey: string;
  mapFrom?: string;
  setTo?: any;
}

/**
 * @class
 * Initializes a new instance of the TransactionConfigurationMovementData class.
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
export interface TransactionConfigurationMovementData {
  movementTypes: string;
  side: string;
  direction: number;
  properties?: Property[];
  mappings?: TransactionPropertyMapping[];
}

/**
 * @class
 * Initializes a new instance of the TransactionConfigurationData class.
 * @constructor
 * @member {array} aliases List of transaction codes that map to this specific
 * transaction model
 * @member {array} movements Movement data for the transaction code
 * @member {array} [properties]
 */
export interface TransactionConfigurationData {
  aliases: TransactionConfigurationTypeAlias[];
  movements: TransactionConfigurationMovementData[];
  properties?: Property[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListOfTransactionMetaData class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfTransactionMetaData {
  values?: TransactionConfigurationData[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the CreateTransactionPortfolioRequest class.
 * @constructor
 * @member {string} displayName
 * @member {string} [description]
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
 * @member {object} [properties] Portfolio properties to add to the portfolio
 */
export interface CreateTransactionPortfolioRequest {
  displayName: string;
  description?: string;
  code: string;
  created?: Date;
  baseCurrency: string;
  corporateActionSourceId?: ResourceId;
  accountingMethod?: string;
  subHoldingKeys?: string[];
  properties?: { [propertyName: string]: PropertyValue };
}

/**
 * @class
 * Initializes a new instance of the PortfolioDetails class.
 * @constructor
 * @member {string} [href]
 * @member {object} [originPortfolioId]
 * @member {string} [originPortfolioId.scope]
 * @member {string} [originPortfolioId.code]
 * @member {object} [version] The version of the portfolio
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {string} [baseCurrency]
 * @member {array} [links]
 */
export interface PortfolioDetails {
  href?: string;
  originPortfolioId?: ResourceId;
  version?: Version;
  baseCurrency?: string;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the CreatePortfolioDetails class.
 * @constructor
 * @member {string} [baseCurrency]
 */
export interface CreatePortfolioDetails {
  baseCurrency?: string;
}

/**
 * @class
 * Initializes a new instance of the ExecutionRequest class.
 * @constructor
 * @member {string} executionId FIX Field 17.  Unique execution identifier.
 * @member {string} side FIX Field 54.
 * @member {string} instrumentUid Unique instrument identifier.
 * @member {date} transactTime FIX field 60.  Time the transaction represented
 * by this ExecutionReport occurred.
 * @member {number} orderQty FIX field 38.  Order quantity.
 * @member {number} price FIX field 44.
 * @member {string} currency FIX field 15.
 */
export interface ExecutionRequest {
  executionId: string;
  side: string;
  instrumentUid: string;
  transactTime: Date;
  orderQty: number;
  price: number;
  currency: string;
}

/**
 * @class
 * Initializes a new instance of the UpsertPortfolioExecutionsResponse class.
 * @constructor
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {string} [href]
 * @member {array} [links]
 */
export interface UpsertPortfolioExecutionsResponse {
  version?: Version;
  href?: string;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the TransactionPrice class.
 * @constructor
 * A price with its associated type
 *
 * @member {number} [price]
 * @member {string} [type] Possible values include: 'Price', 'Yield', 'Spread'
 */
export interface TransactionPrice {
  price?: number;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the Transaction class.
 * @constructor
 * @member {string} transactionId Unique transaction identifier
 * @member {string} type LUSID transaction type code - Buy, Sell, StockIn,
 * StockOut, etc
 * @member {string} instrumentUid Unique instrument identifier
 * @member {date} transactionDate Transaction date
 * @member {date} settlementDate Settlement date
 * @member {number} units Quantity of transaction in units of the instrument
 * @member {object} transactionPrice Execution price for the transaction
 * @member {number} [transactionPrice.price]
 * @member {string} [transactionPrice.type] Possible values include: 'Price',
 * 'Yield', 'Spread'
 * @member {object} totalConsideration Total value of the transaction
 * @member {number} [totalConsideration.amount]
 * @member {string} [totalConsideration.currency]
 * @member {number} [exchangeRate] Rate between transaction and settle currency
 * @member {string} [transactionCurrency] Transaction currency
 * @member {array} [properties]
 * @member {string} [counterpartyId] Counterparty identifier
 * @member {string} source Where this transaction came from. Possible values
 * include: 'System', 'Client'
 * @member {string} [nettingSet]
 */
export interface Transaction {
  transactionId: string;
  type: string;
  instrumentUid: string;
  transactionDate: Date;
  settlementDate: Date;
  units: number;
  transactionPrice: TransactionPrice;
  totalConsideration: CurrencyAndAmount;
  exchangeRate?: number;
  transactionCurrency?: string;
  properties?: PerpetualProperty[];
  counterpartyId?: string;
  source: string;
  nettingSet?: string;
}

/**
 * @class
 * Initializes a new instance of the PortfolioHolding class.
 * @constructor
 * @member {string} instrumentUid Unique instrument identifier
 * @member {array} [subHoldingKeys]
 * @member {array} [properties]
 * @member {string} holdingType Type of holding, eg Position, Balance,
 * CashCommitment, Receivable, ForwardFX
 * @member {number} units Quantity of holding
 * @member {number} settledUnits Settled quantity of holding
 * @member {object} cost Book cost of holding in transaction currency
 * @member {number} [cost.amount]
 * @member {string} [cost.currency]
 * @member {object} costPortfolioCcy Book cost of holding in portfolio currency
 * @member {number} [costPortfolioCcy.amount]
 * @member {string} [costPortfolioCcy.currency]
 * @member {object} [transaction] If this is commitment-type holding, the
 * transaction behind it
 * @member {string} [transaction.transactionId] Unique transaction identifier
 * @member {string} [transaction.type] LUSID transaction type code - Buy, Sell,
 * StockIn, StockOut, etc
 * @member {string} [transaction.instrumentUid] Unique instrument identifier
 * @member {date} [transaction.transactionDate] Transaction date
 * @member {date} [transaction.settlementDate] Settlement date
 * @member {number} [transaction.units] Quantity of transaction in units of the
 * instrument
 * @member {object} [transaction.transactionPrice] Execution price for the
 * transaction
 * @member {number} [transaction.transactionPrice.price]
 * @member {string} [transaction.transactionPrice.type] Possible values
 * include: 'Price', 'Yield', 'Spread'
 * @member {object} [transaction.totalConsideration] Total value of the
 * transaction
 * @member {number} [transaction.totalConsideration.amount]
 * @member {string} [transaction.totalConsideration.currency]
 * @member {number} [transaction.exchangeRate] Rate between transaction and
 * settle currency
 * @member {string} [transaction.transactionCurrency] Transaction currency
 * @member {array} [transaction.properties]
 * @member {string} [transaction.counterpartyId] Counterparty identifier
 * @member {string} [transaction.source] Where this transaction came from.
 * Possible values include: 'System', 'Client'
 * @member {string} [transaction.nettingSet]
 */
export interface PortfolioHolding {
  instrumentUid: string;
  subHoldingKeys?: PerpetualProperty[];
  properties?: Property[];
  holdingType: string;
  units: number;
  settledUnits: number;
  cost: CurrencyAndAmount;
  costPortfolioCcy: CurrencyAndAmount;
  transaction?: Transaction;
}

/**
 * @class
 * Initializes a new instance of the VersionedResourceListOfHolding class.
 * @constructor
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface VersionedResourceListOfHolding {
  version?: Version;
  values?: PortfolioHolding[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the TargetTaxLotRequest class.
 * @constructor
 * @member {number} units Quantity of holding
 * @member {object} [cost] Book cost of holding in transaction currency
 * @member {number} [cost.amount]
 * @member {string} [cost.currency]
 * @member {number} [portfolioCost] Book cost of holding in portfolio currency
 * @member {number} [price] Purchase price. Part of the unique key required for
 * multiple taxlots
 * @member {date} [purchaseDate] Purchase Date. Part of the unique key required
 * for multiple taxlots
 * @member {date} [settlementDate] Original settlement date of the tax-lot's
 * opening transaction.
 */
export interface TargetTaxLotRequest {
  units: number;
  cost?: CurrencyAndAmount;
  portfolioCost?: number;
  price?: number;
  purchaseDate?: Date;
  settlementDate?: Date;
}

/**
 * @class
 * Initializes a new instance of the AdjustHoldingRequest class.
 * @constructor
 * This request specifies target holdings. i.e. holding data that the
 * system should match. When processed by the movement
 * engine, it will create 'true-up' adjustments on the fly.
 *
 * @member {string} instrumentUid Unique instrument identifier
 * @member {object} [subHoldingKeys] Key fields to uniquely index the sub
 * holdings of a instrument
 * @member {object} [properties] Arbitrary properties to store with the holding
 * @member {array} taxLots 1 or more quantity amounts
 */
export interface AdjustHoldingRequest {
  instrumentUid: string;
  subHoldingKeys?: { [propertyName: string]: PerpetualPropertyValue };
  properties?: { [propertyName: string]: PerpetualPropertyValue };
  taxLots: TargetTaxLotRequest[];
}

/**
 * @class
 * Initializes a new instance of the AdjustHolding class.
 * @constructor
 * The response given from the AdjustHoldings Api call
 *
 * @member {string} [href]
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {array} [links]
 */
export interface AdjustHolding {
  href?: string;
  version?: Version;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the HoldingsAdjustmentHeader class.
 * @constructor
 * Summary information of a holdings adjustment for a single portfolio and
 * effective date.
 *
 * @member {date} [effectiveAt] There can be at most one holdings adjustment
 * for a portfolio at a
 * specific effective time so this uniquely identifies the adjustment.
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {string} [unmatchedHoldingMethod] Possible values include:
 * 'PositionToZero', 'KeepTheSame'
 * @member {array} [links]
 */
export interface HoldingsAdjustmentHeader {
  effectiveAt?: Date;
  version?: Version;
  unmatchedHoldingMethod?: string;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListOfHoldingsAdjustmentHeader class.
 * @constructor
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface ResourceListOfHoldingsAdjustmentHeader {
  values?: HoldingsAdjustmentHeader[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the TargetTaxLot class.
 * @constructor
 * Used to specify holdings target amounts at the tax-lot level
 *
 * @member {number} units Quantity of holding
 * @member {object} [cost] Book cost of holding in transaction currency
 * @member {number} [cost.amount]
 * @member {string} [cost.currency]
 * @member {number} [portfolioCost] Book cost of holding in portfolio currency
 * @member {number} [price] Purchase price. Part of the unique key required for
 * multiple taxlots
 * @member {date} [purchaseDate] Purchase Date. Part of the unique key required
 * for multiple taxlots
 * @member {date} [settlementDate] Original settlement date of the tax-lot's
 * opening transaction.
 */
export interface TargetTaxLot {
  units: number;
  cost?: CurrencyAndAmount;
  portfolioCost?: number;
  price?: number;
  purchaseDate?: Date;
  settlementDate?: Date;
}

/**
 * @class
 * Initializes a new instance of the HoldingAdjustment class.
 * @constructor
 * This 'dto' contains target holdings. i.e. holding data that the
 * system should match. When processed by the movement
 * engine, it will create 'true-up' adjustments on the fly.
 *
 * @member {string} instrumentUid Unique instrument identifier
 * @member {array} [subHoldingKeys] Key fields to uniquely index the sub
 * holdings of a instrument
 * @member {array} [properties] Arbitrary properties to store with the holding
 * @member {array} taxLots 1 or more quantity amounts
 */
export interface HoldingAdjustment {
  instrumentUid: string;
  subHoldingKeys?: PerpetualProperty[];
  properties?: PerpetualProperty[];
  taxLots: TargetTaxLot[];
}

/**
 * @class
 * Initializes a new instance of the HoldingsAdjustment class.
 * @constructor
 * Full content of a holdings adjustment for a single portfolio and effective
 * date.
 *
 * @member {date} [effectiveAt] There can be at most one holdings adjustment
 * for a portfolio at a
 * specific effective time so this uniquely identifies the adjustment.
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {string} [unmatchedHoldingMethod] Possible values include:
 * 'PositionToZero', 'KeepTheSame'
 * @member {array} [adjustments]
 * @member {array} [links]
 */
export interface HoldingsAdjustment {
  effectiveAt?: Date;
  version?: Version;
  unmatchedHoldingMethod?: string;
  adjustments?: HoldingAdjustment[];
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the VersionedResourceListOfTransaction class.
 * @constructor
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface VersionedResourceListOfTransaction {
  version?: Version;
  values?: Transaction[];
  href?: string;
  count?: number;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the TransactionRequest class.
 * @constructor
 * @member {string} transactionId Unique transaction identifier
 * @member {string} type LUSID transaction type code - Buy, Sell, StockIn,
 * StockOut, etc
 * @member {string} instrumentUid Unique instrument identifier
 * @member {date} transactionDate Transaction date
 * @member {date} settlementDate Settlement date
 * @member {number} units Quantity of transaction in units of the instrument
 * @member {object} transactionPrice Execution price for the transaction
 * @member {number} [transactionPrice.price]
 * @member {string} [transactionPrice.type] Possible values include: 'Price',
 * 'Yield', 'Spread'
 * @member {object} totalConsideration Total value of the transaction, in
 * settlement currency
 * @member {number} [totalConsideration.amount]
 * @member {string} [totalConsideration.currency]
 * @member {number} [exchangeRate] Rate between transaction and settle currency
 * @member {string} [transactionCurrency] Transaction currency
 * @member {object} [properties]
 * @member {string} [counterpartyId] Counterparty identifier
 * @member {string} source Where this transaction came from, either Client or
 * System. Possible values include: 'System', 'Client'
 * @member {string} [nettingSet]
 */
export interface TransactionRequest {
  transactionId: string;
  type: string;
  instrumentUid: string;
  transactionDate: Date;
  settlementDate: Date;
  units: number;
  transactionPrice: TransactionPrice;
  totalConsideration: CurrencyAndAmount;
  exchangeRate?: number;
  transactionCurrency?: string;
  properties?: { [propertyName: string]: PerpetualPropertyValue };
  counterpartyId?: string;
  source: string;
  nettingSet?: string;
}

/**
 * @class
 * Initializes a new instance of the UpsertPortfolioTransactionsResponse class.
 * @constructor
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {string} [href]
 * @member {array} [links]
 */
export interface UpsertPortfolioTransactionsResponse {
  version?: Version;
  href?: string;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the AddTransactionPropertyResponse class.
 * @constructor
 * @member {string} [href]
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {array} [links]
 */
export interface AddTransactionPropertyResponse {
  href?: string;
  version?: Version;
  links?: Link[];
}

/**
 * @class
 * Initializes a new instance of the TransactionQueryParameters class.
 * @constructor
 * @member {date} [startDate] The required set of transactions should begin
 * from this date
 * @member {date} [endDate] The required set of transactions should end at this
 * date
 * @member {string} [queryMode] The method for date selection. Trade date or
 * Settlement date. Possible values include: 'None', 'TradeDate', 'SettleDate'
 * @member {boolean} [showCancelledTransactions] Option to include cancelled
 * transactions in the results
 */
export interface TransactionQueryParameters {
  startDate?: Date;
  endDate?: Date;
  queryMode?: string;
  showCancelledTransactions?: boolean;
}

/**
 * @class
 * Initializes a new instance of the RealisedGainLoss class.
 * @constructor
 * @member {string} [instrumentUid] Unique instrument identifier
 * @member {number} [units] Quantity against which gain has been made in units
 * of the instrument
 * @member {date} [purchaseTradeDate] Date the position was originally
 * purchased
 * @member {date} [purchaseSettlementDate] Date the position originally settled
 * @member {number} [purchasePrice] Price the instrument was purchased at
 * @member {object} [costTradeCcy] Purchase cost in the trade currency
 * @member {number} [costTradeCcy.amount]
 * @member {string} [costTradeCcy.currency]
 * @member {object} [costPortfolioCcy] Purchase cost in the trade currency
 * @member {number} [costPortfolioCcy.amount]
 * @member {string} [costPortfolioCcy.currency]
 * @member {object} [realisedTradeCcy] Gains or losses in the trade currency
 * @member {number} [realisedTradeCcy.amount]
 * @member {string} [realisedTradeCcy.currency]
 * @member {object} [realisedTotal] Total gains or losses in the portfolio
 * currency
 * @member {number} [realisedTotal.amount]
 * @member {string} [realisedTotal.currency]
 * @member {object} [realisedMarket] Market gains or losses in the portfolio
 * currency
 * @member {number} [realisedMarket.amount]
 * @member {string} [realisedMarket.currency]
 * @member {object} [realisedCurrency] Currency gains or losses in the
 * portfolio currency
 * @member {number} [realisedCurrency.amount]
 * @member {string} [realisedCurrency.currency]
 */
export interface RealisedGainLoss {
  readonly instrumentUid?: string;
  readonly units?: number;
  readonly purchaseTradeDate?: Date;
  readonly purchaseSettlementDate?: Date;
  readonly purchasePrice?: number;
  readonly costTradeCcy?: CurrencyAndAmount;
  readonly costPortfolioCcy?: CurrencyAndAmount;
  readonly realisedTradeCcy?: CurrencyAndAmount;
  readonly realisedTotal?: CurrencyAndAmount;
  readonly realisedMarket?: CurrencyAndAmount;
  readonly realisedCurrency?: CurrencyAndAmount;
}

/**
 * @class
 * Initializes a new instance of the OutputTransaction class.
 * @constructor
 * @member {string} [transactionId] Unique transaction identifier
 * @member {string} [type] LUSID transaction type code - Buy, Sell, StockIn,
 * StockOut, etc
 * @member {string} [description] LUSID transaction description
 * @member {string} [instrumentUid] Unique instrument identifier
 * @member {date} [transactionDate] Transaction date
 * @member {date} [settlementDate] Settlement date
 * @member {number} [units] Quantity of trade in units of the instrument
 * @member {object} [transactionPrice] Execution price for the transaction
 * @member {number} [transactionPrice.price]
 * @member {string} [transactionPrice.type] Possible values include: 'Price',
 * 'Yield', 'Spread'
 * @member {object} [totalConsideration] Total value of the transaction in
 * settlement currency
 * @member {number} [totalConsideration.amount]
 * @member {string} [totalConsideration.currency]
 * @member {number} [exchangeRate] Rate between transaction and settlement
 * currency
 * @member {number} [transactionToPortfolioRate] Rate between transaction and
 * portfolio currency
 * @member {string} [transactionCurrency] Transaction currency
 * @member {array} [properties]
 * @member {string} [counterpartyId] Counterparty identifier
 * @member {string} [source] Where this transaction came from, either Client or
 * System. Possible values include: 'System', 'Client'
 * @member {string} [nettingSet]
 * @member {string} [transactionStatus] Transaction status (active, amended or
 * cancelled). Possible values include: 'Active', 'Amended', 'Cancelled'
 * @member {date} [entryDateTime] Date/Time the transaction was booked into
 * LUSID
 * @member {date} [cancelDateTime] Date/Time the cancellation was booked into
 * LUSID
 * @member {array} [realisedGainLoss] Collection of gains or losses
 */
export interface OutputTransaction {
  readonly transactionId?: string;
  readonly type?: string;
  readonly description?: string;
  readonly instrumentUid?: string;
  readonly transactionDate?: Date;
  readonly settlementDate?: Date;
  readonly units?: number;
  readonly transactionPrice?: TransactionPrice;
  readonly totalConsideration?: CurrencyAndAmount;
  readonly exchangeRate?: number;
  readonly transactionToPortfolioRate?: number;
  readonly transactionCurrency?: string;
  readonly properties?: PerpetualProperty[];
  readonly counterpartyId?: string;
  readonly source?: string;
  readonly nettingSet?: string;
  readonly transactionStatus?: string;
  readonly entryDateTime?: Date;
  readonly cancelDateTime?: Date;
  readonly realisedGainLoss?: RealisedGainLoss[];
}

/**
 * @class
 * Initializes a new instance of the VersionedResourceListOfOutputTransaction class.
 * @constructor
 * @member {object} [version]
 * @member {date} [version.effectiveFrom]
 * @member {date} [version.asAtDate]
 * @member {string} [version.href]
 * @member {array} [values]
 * @member {string} [href] The Uri that returns the same result as the original
 * request,
 * but may include resolved as at time(s).
 * @member {number} [count] The total number of records returned in the set
 * @member {array} [links]
 */
export interface VersionedResourceListOfOutputTransaction {
  version?: Version;
  values?: OutputTransaction[];
  href?: string;
  count?: number;
  links?: Link[];
}
