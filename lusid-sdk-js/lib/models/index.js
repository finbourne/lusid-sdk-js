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

exports.ClearEntityCachesDto = require('./clearEntityCachesDto');
exports.ErrorDetailBase = require('./errorDetailBase');
exports.ErrorResponse = require('./errorResponse');
exports.AggregateSpec = require('./aggregateSpec');
exports.PropertyFilter = require('./propertyFilter');
exports.AggregationRequest = require('./aggregationRequest');
exports.FieldSchema = require('./fieldSchema');
exports.KeyValuePairOfPropertyKeyToFieldSchema = require('./keyValuePairOfPropertyKeyToFieldSchema');
exports.ResultDataSchema = require('./resultDataSchema');
exports.ListAggregationResponse = require('./listAggregationResponse');
exports.AggregationResponseNodeOfDictionaryOfStringToObject = require('./aggregationResponseNodeOfDictionaryOfStringToObject');
exports.NestedAggregationResponse = require('./nestedAggregationResponse');
exports.CreateAnalyticStoreRequest = require('./createAnalyticStoreRequest');
exports.AnalyticStoreKeyDto = require('./analyticStoreKeyDto');
exports.AnalyticStoreDto = require('./analyticStoreDto');
exports.Link = require('./link');
exports.ResourceListOfAnalyticStoreKeyDto = require('./resourceListOfAnalyticStoreKeyDto');
exports.DeletedEntityResponse = require('./deletedEntityResponse');
exports.SecurityAnalyticDataDto = require('./securityAnalyticDataDto');
exports.AnalyticsItemDto = require('./analyticsItemDto');
exports.AnalyticsStorageRequest = require('./analyticsStorageRequest');
exports.CreatePropertyRequest = require('./createPropertyRequest');
exports.SecurityClassificationDto = require('./securityClassificationDto');
exports.ClassificationsDto = require('./classificationsDto');
exports.TxnTypeAliasDto = require('./txnTypeAliasDto');
exports.PropertyDto = require('./propertyDto');
exports.TxnPropertyMappingDto = require('./txnPropertyMappingDto');
exports.TxnMovementMetaDataDto = require('./txnMovementMetaDataDto');
exports.TxnMetaDataDto = require('./txnMetaDataDto');
exports.ResourceListOfTxnMetaDataDto = require('./resourceListOfTxnMetaDataDto');
exports.CorporateActionTransitionComponentDto = require('./corporateActionTransitionComponentDto');
exports.CorporateActionTransitionDto = require('./corporateActionTransitionDto');
exports.UpsertCorporateActionRequest = require('./upsertCorporateActionRequest');
exports.ResourceId = require('./resourceId');
exports.CorporateActionEventDto = require('./corporateActionEventDto');
exports.ErrorDetail = require('./errorDetail');
exports.TryUpsertCorporateActionsDto = require('./tryUpsertCorporateActionsDto');
exports.CreateGroupRequest = require('./createGroupRequest');
exports.VersionDto = require('./versionDto');
exports.GroupDto = require('./groupDto');
exports.ResourceListOfGroupDto = require('./resourceListOfGroupDto');
exports.ProcessedCommandDto = require('./processedCommandDto');
exports.ResourceListOfProcessedCommandDto = require('./resourceListOfProcessedCommandDto');
exports.CompletePortfolioDto = require('./completePortfolioDto');
exports.ExpandedGroupDto = require('./expandedGroupDto');
exports.UpdateGroupRequest = require('./updateGroupRequest');
exports.LoginResponse = require('./loginResponse');
exports.WebLogMessage = require('./webLogMessage');
exports.PersonalisationDto = require('./personalisationDto');
exports.ResourceListOfPersonalisationDto = require('./resourceListOfPersonalisationDto');
exports.UpsertPersonalisationsResponse = require('./upsertPersonalisationsResponse');
exports.ResourceListOfScope = require('./resourceListOfScope');
exports.CreatePortfolioRequest = require('./createPortfolioRequest');
exports.PortfolioDto = require('./portfolioDto');
exports.ResourceListOfPortfolioDto = require('./resourceListOfPortfolioDto');
exports.UpdatePortfolioRequest = require('./updatePortfolioRequest');
exports.PortfolioDetailsDto = require('./portfolioDetailsDto');
exports.PortfolioDetailsRequest = require('./portfolioDetailsRequest');
exports.PerpetualPropertyDto = require('./perpetualPropertyDto');
exports.TradeDto = require('./tradeDto');
exports.HoldingDto = require('./holdingDto');
exports.VersionedResourceListOfHoldingDto = require('./versionedResourceListOfHoldingDto');
exports.CreatePerpetualPropertyRequest = require('./createPerpetualPropertyRequest');
exports.TargetTaxLotDto = require('./targetTaxLotDto');
exports.AdjustHoldingRequest = require('./adjustHoldingRequest');
exports.AdjustHoldingsDto = require('./adjustHoldingsDto');
exports.HoldingsAdjustmentHeaderDto = require('./holdingsAdjustmentHeaderDto');
exports.ResourceListOfHoldingsAdjustmentHeaderDto = require('./resourceListOfHoldingsAdjustmentHeaderDto');
exports.HoldingsAdjustmentDto = require('./holdingsAdjustmentDto');
exports.PortfolioPropertiesDto = require('./portfolioPropertiesDto');
exports.VersionedResourceListOfTradeDto = require('./versionedResourceListOfTradeDto');
exports.UpsertPortfolioTradeRequest = require('./upsertPortfolioTradeRequest');
exports.UpsertPortfolioTradesDto = require('./upsertPortfolioTradesDto');
exports.AddTradePropertyDto = require('./addTradePropertyDto');
exports.TransactionQueryParameters = require('./transactionQueryParameters');
exports.TradePrice = require('./tradePrice');
exports.CurrencyAndAmount = require('./currencyAndAmount');
exports.RealisedGainLossDto = require('./realisedGainLossDto');
exports.OutputTransactionDto = require('./outputTransactionDto');
exports.VersionedResourceListOfOutputTransactionDto = require('./versionedResourceListOfOutputTransactionDto');
exports.CreateDerivedPortfolioRequest = require('./createDerivedPortfolioRequest');
exports.PortfolioSearchResult = require('./portfolioSearchResult');
exports.ResourceListOfPortfolioSearchResult = require('./resourceListOfPortfolioSearchResult');
exports.PropertyDefinitionDto = require('./propertyDefinitionDto');
exports.ResourceListOfPropertyDefinitionDto = require('./resourceListOfPropertyDefinitionDto');
exports.CreatePropertyDefinitionRequest = require('./createPropertyDefinitionRequest');
exports.ResourceListOfPropertyDomain = require('./resourceListOfPropertyDomain');
exports.ResourceListOfPropertyKey = require('./resourceListOfPropertyKey');
exports.UpdatePropertyDefinitionRequest = require('./updatePropertyDefinitionRequest');
exports.CreateUnitDefinition = require('./createUnitDefinition');
exports.CreatePropertyDataFormatRequest = require('./createPropertyDataFormatRequest');
exports.IUnitDefinitionDto = require('./iUnitDefinitionDto');
exports.PropertyDataFormatDto = require('./propertyDataFormatDto');
exports.UpdatePropertyDataFormatRequest = require('./updatePropertyDataFormatRequest');
exports.ResourceListOfPropertyDataFormatDto = require('./resourceListOfPropertyDataFormatDto');
exports.ReconciliationRequest = require('./reconciliationRequest');
exports.ReconciliationBreakDto = require('./reconciliationBreakDto');
exports.ResourceListOfReconciliationBreakDto = require('./resourceListOfReconciliationBreakDto');
exports.ReferencePortfolioConstituentDto = require('./referencePortfolioConstituentDto');
exports.ResourceListOfReferencePortfolioConstituentDto = require('./resourceListOfReferencePortfolioConstituentDto');
exports.UpsertReferencePortfolioConstituentsDto = require('./upsertReferencePortfolioConstituentsDto');
exports.CreateResultsRequest = require('./createResultsRequest');
exports.ResultsDto = require('./resultsDto');
exports.KeyValuePairOfStringToFieldSchema = require('./keyValuePairOfStringToFieldSchema');
exports.SchemaDto = require('./schemaDto');
exports.PropertySchemaDto = require('./propertySchemaDto');
exports.ResourceListOfUiDataType = require('./resourceListOfUiDataType');
exports.InstrumentDefinitionDto = require('./instrumentDefinitionDto');
exports.CreateClientSecurityRequest = require('./createClientSecurityRequest');
exports.SecurityDto = require('./securityDto');
exports.TryAddClientSecuritiesDto = require('./tryAddClientSecuritiesDto');
exports.TryDeleteClientSecuritiesDto = require('./tryDeleteClientSecuritiesDto');
exports.ResourceListOfSecurityDto = require('./resourceListOfSecurityDto');
exports.TryLookupSecuritiesFromCodesDto = require('./tryLookupSecuritiesFromCodesDto');
