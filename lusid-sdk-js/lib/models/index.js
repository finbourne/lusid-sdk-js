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
exports.KeyValuePairPropertyKeyFieldSchema = require('./keyValuePairPropertyKeyFieldSchema');
exports.ResultDataSchema = require('./resultDataSchema');
exports.ListAggregationResponse = require('./listAggregationResponse');
exports.AggregationResponseNodeDictionaryStringObject = require('./aggregationResponseNodeDictionaryStringObject');
exports.NestedAggregationResponse = require('./nestedAggregationResponse');
exports.CreateAnalyticStoreRequest = require('./createAnalyticStoreRequest');
exports.AnalyticStoreKeyDto = require('./analyticStoreKeyDto');
exports.AnalyticStoreDto = require('./analyticStoreDto');
exports.Link = require('./link');
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
exports.CorporateActionTransitionDto = require('./corporateActionTransitionDto');
exports.UpsertCorporateActionRequest = require('./upsertCorporateActionRequest');
exports.ResourceId = require('./resourceId');
exports.CorporateActionEventDto = require('./corporateActionEventDto');
exports.ErrorDetail = require('./errorDetail');
exports.TryUpsertCorporateActionsDto = require('./tryUpsertCorporateActionsDto');
exports.CreateGroupRequest = require('./createGroupRequest');
exports.VersionDto = require('./versionDto');
exports.GroupDto = require('./groupDto');
exports.ProcessedCommandDto = require('./processedCommandDto');
exports.CompletePortfolioDto = require('./completePortfolioDto');
exports.ExpandedGroupDto = require('./expandedGroupDto');
exports.UpdateGroupRequest = require('./updateGroupRequest');
exports.LoginResponse = require('./loginResponse');
exports.WebLogMessage = require('./webLogMessage');
exports.PersonalisationDto = require('./personalisationDto');
exports.UpsertPersonalisationsResponse = require('./upsertPersonalisationsResponse');
exports.CreatePortfolioRequest = require('./createPortfolioRequest');
exports.PortfolioDto = require('./portfolioDto');
exports.UpdatePortfolioRequest = require('./updatePortfolioRequest');
exports.PortfolioDetailsDto = require('./portfolioDetailsDto');
exports.PortfolioDetailsRequest = require('./portfolioDetailsRequest');
exports.PerpetualPropertyDto = require('./perpetualPropertyDto');
exports.TradeDto = require('./tradeDto');
exports.HoldingDto = require('./holdingDto');
exports.HoldingAdjustmentDto = require('./holdingAdjustmentDto');
exports.UpsertPortfolioTradesDto = require('./upsertPortfolioTradesDto');
exports.PortfolioPropertiesDto = require('./portfolioPropertiesDto');
exports.CreatePerpetualPropertyRequest = require('./createPerpetualPropertyRequest');
exports.UpsertPortfolioTradeRequest = require('./upsertPortfolioTradeRequest');
exports.AddTradePropertyDto = require('./addTradePropertyDto');
exports.CreateDerivedPortfolioRequest = require('./createDerivedPortfolioRequest');
exports.PortfolioSearchResult = require('./portfolioSearchResult');
exports.PropertyDefinitionDto = require('./propertyDefinitionDto');
exports.CreatePropertyDefinitionRequest = require('./createPropertyDefinitionRequest');
exports.UpdatePropertyDefinitionRequest = require('./updatePropertyDefinitionRequest');
exports.CreatePropertyDataFormatRequest = require('./createPropertyDataFormatRequest');
exports.PropertyDataFormatDto = require('./propertyDataFormatDto');
exports.UpdatePropertyDataFormatRequest = require('./updatePropertyDataFormatRequest');
exports.ReconciliationRequest = require('./reconciliationRequest');
exports.ReconciliationBreakDto = require('./reconciliationBreakDto');
exports.ReferencePortfolioConstituentDto = require('./referencePortfolioConstituentDto');
exports.UpsertReferencePortfolioConstituentsDto = require('./upsertReferencePortfolioConstituentsDto');
exports.CreateResultsRequest = require('./createResultsRequest');
exports.ResultsDto = require('./resultsDto');
exports.KeyValuePairStringFieldSchema = require('./keyValuePairStringFieldSchema');
exports.SchemaDto = require('./schemaDto');
exports.PropertySchemaDto = require('./propertySchemaDto');
exports.KeyValuePairCodeTypeString = require('./keyValuePairCodeTypeString');
exports.InstrumentDefinitionDto = require('./instrumentDefinitionDto');
exports.CreateClientSecurityRequest = require('./createClientSecurityRequest');
exports.SecurityDto = require('./securityDto');
exports.TryAddClientSecuritiesDto = require('./tryAddClientSecuritiesDto');
exports.TryDeleteClientSecuritiesDto = require('./tryDeleteClientSecuritiesDto');
exports.ResourceListSecurityDto = require('./resourceListSecurityDto');
exports.TryLookupSecuritiesFromCodesDto = require('./tryLookupSecuritiesFromCodesDto');
exports.ResourceListAnalyticStoreKeyDto = require('./resourceListAnalyticStoreKeyDto');
exports.ResourceListTxnMetaDataDto = require('./resourceListTxnMetaDataDto');
exports.ResourceListGroupDto = require('./resourceListGroupDto');
exports.ResourceListProcessedCommandDto = require('./resourceListProcessedCommandDto');
exports.ResourceListPersonalisationDto = require('./resourceListPersonalisationDto');
exports.ResourceListScope = require('./resourceListScope');
exports.ResourceListPortfolioDto = require('./resourceListPortfolioDto');
exports.VersionedResourceListHoldingDto = require('./versionedResourceListHoldingDto');
exports.VersionedResourceListTradeDto = require('./versionedResourceListTradeDto');
exports.ResourceListPortfolioSearchResult = require('./resourceListPortfolioSearchResult');
exports.ResourceListPropertyDefinitionDto = require('./resourceListPropertyDefinitionDto');
exports.ResourceListPropertyDomain = require('./resourceListPropertyDomain');
exports.ResourceListPropertyKey = require('./resourceListPropertyKey');
exports.ResourceListPropertyDataFormatDto = require('./resourceListPropertyDataFormatDto');
exports.ResourceListReconciliationBreakDto = require('./resourceListReconciliationBreakDto');
exports.ResourceListReferencePortfolioConstituentDto = require('./resourceListReferencePortfolioConstituentDto');
exports.ResourceListUiDataType = require('./resourceListUiDataType');
