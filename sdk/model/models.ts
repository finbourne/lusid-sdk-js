import localVarRequest from 'request';

export * from './a2BBreakdown';
export * from './a2BCategory';
export * from './a2BDataRecord';
export * from './a2BMovementRecord';
export * from './accessControlledAction';
export * from './accessControlledResource';
export * from './accessMetadataOperation';
export * from './accessMetadataValue';
export * from './accumulationEvent';
export * from './accumulationEventAllOf';
export * from './actionId';
export * from './actionResultOfPortfolio';
export * from './addBusinessDaysToDateRequest';
export * from './addBusinessDaysToDateResponse';
export * from './additionalPayment';
export * from './addressDefinition';
export * from './addressKeyComplianceParameter';
export * from './addressKeyComplianceParameterAllOf';
export * from './addressKeyDefinition';
export * from './addressKeyFilter';
export * from './addressKeyList';
export * from './addressKeyListAllOf';
export * from './addressKeyListComplianceParameter';
export * from './addressKeyListComplianceParameterAllOf';
export * from './addressKeyOptionDefinition';
export * from './adjustHolding';
export * from './adjustHoldingForDateRequest';
export * from './adjustHoldingRequest';
export * from './aggregateSpec';
export * from './aggregatedReturn';
export * from './aggregatedReturnsDispersionRequest';
export * from './aggregatedReturnsRequest';
export * from './aggregatedReturnsResponse';
export * from './aggregationContext';
export * from './aggregationMeasureFailureDetail';
export * from './aggregationOptions';
export * from './aggregationQuery';
export * from './allocation';
export * from './allocationRequest';
export * from './allocationSetRequest';
export * from './amortisationEvent';
export * from './amortisationEventAllOf';
export * from './annulQuotesResponse';
export * from './annulSingleStructuredDataResponse';
export * from './annulStructuredDataResponse';
export * from './assetLeg';
export * from './barrier';
export * from './basket';
export * from './basketAllOf';
export * from './basketIdentifier';
export * from './batchAdjustHoldingsResponse';
export * from './batchUpsertInstrumentPropertiesResponse';
export * from './batchUpsertPortfolioTransactionsResponse';
export * from './batchUpsertPropertyDefinitionPropertiesResponse';
export * from './block';
export * from './blockAndOrderIdRequest';
export * from './blockAndOrders';
export * from './blockAndOrdersCreateRequest';
export * from './blockAndOrdersRequest';
export * from './blockRequest';
export * from './blockSetRequest';
export * from './blockedOrderRequest';
export * from './bond';
export * from './bondAllOf';
export * from './bondCouponEvent';
export * from './bondCouponEventAllOf';
export * from './bondDefaultEvent';
export * from './bondDefaultEventAllOf';
export * from './bondPrincipalEvent';
export * from './bondPrincipalEventAllOf';
export * from './boolComplianceParameter';
export * from './boolComplianceParameterAllOf';
export * from './boolListComplianceParameter';
export * from './branchStep';
export * from './branchStepAllOf';
export * from './calendar';
export * from './calendarDate';
export * from './calendarDependency';
export * from './calendarDependencyAllOf';
export * from './capFloor';
export * from './capFloorAllOf';
export * from './cashDependency';
export * from './cashDependencyAllOf';
export * from './cashDividendEvent';
export * from './cashDividendEventAllOf';
export * from './cashElection';
export * from './cashFlowEvent';
export * from './cashFlowEventAllOf';
export * from './cashFlowLineage';
export * from './cashFlowValue';
export * from './cashFlowValueAllOf';
export * from './cashFlowValueSet';
export * from './cashFlowValueSetAllOf';
export * from './cashLadderRecord';
export * from './cashPerpetual';
export * from './cashPerpetualAllOf';
export * from './cdsFlowConventions';
export * from './cdsIndex';
export * from './cdsIndexAllOf';
export * from './cdsProtectionDetailSpecification';
export * from './change';
export * from './changeHistory';
export * from './changeItem';
export * from './checkStep';
export * from './checkStepAllOf';
export * from './closeEvent';
export * from './closeEventAllOf';
export * from './completePortfolio';
export * from './completeRelationship';
export * from './complexBond';
export * from './complexBondAllOf';
export * from './complexMarketData';
export * from './complexMarketDataId';
export * from './complianceParameter';
export * from './complianceRuleBreakdown';
export * from './complianceRuleBreakdownRequest';
export * from './complianceRuleResponse';
export * from './complianceRuleResultDetail';
export * from './complianceRuleResultPortfolioDetail';
export * from './complianceRuleResultV2';
export * from './complianceRunInfoV2';
export * from './complianceStep';
export * from './complianceSummaryRuleResult';
export * from './complianceSummaryRuleResultRequest';
export * from './complianceTemplate';
export * from './complianceTemplateParameter';
export * from './complianceTemplateVariation';
export * from './compositeBreakdown';
export * from './compositeBreakdownRequest';
export * from './compositeBreakdownResponse';
export * from './compositeDispersion';
export * from './compositeDispersionResponse';
export * from './compounding';
export * from './configurationRecipe';
export * from './constantVolatilitySurface';
export * from './constantVolatilitySurfaceAllOf';
export * from './constituentsAdjustmentHeader';
export * from './contractForDifference';
export * from './contractForDifferenceAllOf';
export * from './corporateAction';
export * from './corporateActionSource';
export * from './corporateActionTransition';
export * from './corporateActionTransitionComponent';
export * from './corporateActionTransitionComponentRequest';
export * from './corporateActionTransitionRequest';
export * from './counterpartyAgreement';
export * from './counterpartyRiskInformation';
export * from './counterpartySignatory';
export * from './createAddressKeyDefinitionRequest';
export * from './createCalendarRequest';
export * from './createCorporateActionSourceRequest';
export * from './createCustomEntityTypeRequest';
export * from './createCutLabelDefinitionRequest';
export * from './createDataTypeRequest';
export * from './createDateRequest';
export * from './createDerivedPropertyDefinitionRequest';
export * from './createDerivedTransactionPortfolioRequest';
export * from './createPortfolioDetails';
export * from './createPortfolioGroupRequest';
export * from './createPropertyDefinitionRequest';
export * from './createReferencePortfolioRequest';
export * from './createRelationshipDefinitionRequest';
export * from './createRelationshipRequest';
export * from './createSequenceRequest';
export * from './createTradeTicketsResponse';
export * from './createTransactionPortfolioRequest';
export * from './createUnitDefinition';
export * from './creditDefaultSwap';
export * from './creditDefaultSwapAllOf';
export * from './creditRating';
export * from './creditSpreadCurveData';
export * from './creditSpreadCurveDataAllOf';
export * from './creditSupportAnnex';
export * from './currencyAndAmount';
export * from './custodianAccount';
export * from './customEntityDefinition';
export * from './customEntityDefinitionRequest';
export * from './customEntityField';
export * from './customEntityFieldDefinition';
export * from './customEntityId';
export * from './customEntityRequest';
export * from './customEntityResponse';
export * from './customEntityType';
export * from './cutLabelDefinition';
export * from './cutLocalTime';
export * from './dataType';
export * from './dataTypeSummary';
export * from './dateAttributes';
export * from './dateRange';
export * from './dateTimeComplianceParameter';
export * from './dateTimeComplianceParameterAllOf';
export * from './dateTimeListComplianceParameter';
export * from './dayOfWeek';
export * from './decimalComplianceParameter';
export * from './decimalComplianceParameterAllOf';
export * from './decimalList';
export * from './decimalListAllOf';
export * from './decimalListComplianceParameter';
export * from './decoratedComplianceRunSummary';
export * from './deleteInstrumentPropertiesResponse';
export * from './deleteInstrumentResponse';
export * from './deleteInstrumentsResponse';
export * from './deleteRelationshipRequest';
export * from './deletedEntityResponse';
export * from './dependencySourceFilter';
export * from './dialect';
export * from './dialectId';
export * from './dialectSchema';
export * from './discountFactorCurveData';
export * from './discountFactorCurveDataAllOf';
export * from './discountingDependency';
export * from './discountingDependencyAllOf';
export * from './dividendOptionEvent';
export * from './dividendOptionEventAllOf';
export * from './dividendReinvestmentEvent';
export * from './dividendReinvestmentEventAllOf';
export * from './economicDependency';
export * from './economicDependencyWithComplexMarketData';
export * from './economicDependencyWithQuote';
export * from './emptyModelOptions';
export * from './emptyModelOptionsAllOf';
export * from './entityIdentifier';
export * from './equity';
export * from './equityAllOf';
export * from './equityAllOfIdentifiers';
export * from './equityCurveByPricesData';
export * from './equityCurveByPricesDataAllOf';
export * from './equityCurveDependency';
export * from './equityCurveDependencyAllOf';
export * from './equityModelOptions';
export * from './equityModelOptionsAllOf';
export * from './equityOption';
export * from './equityOptionAllOf';
export * from './equitySwap';
export * from './equitySwapAllOf';
export * from './equityVolDependency';
export * from './equityVolDependencyAllOf';
export * from './equityVolSurfaceData';
export * from './equityVolSurfaceDataAllOf';
export * from './errorDetail';
export * from './eventDateRange';
export * from './exDividendConfiguration';
export * from './exchangeTradedOption';
export * from './exchangeTradedOptionAllOf';
export * from './exchangeTradedOptionContractDetails';
export * from './execution';
export * from './executionRequest';
export * from './executionSetRequest';
export * from './exerciseEvent';
export * from './exerciseEventAllOf';
export * from './exoticInstrument';
export * from './exoticInstrumentAllOf';
export * from './expandedGroup';
export * from './fieldDefinition';
export * from './fieldSchema';
export * from './fieldValue';
export * from './fileResponse';
export * from './filterPredicateComplianceParameter';
export * from './filterPredicateComplianceParameterAllOf';
export * from './filterStep';
export * from './fixedLeg';
export * from './fixedLegAllOf';
export * from './fixedLegAllOfOverrides';
export * from './flexibleLoan';
export * from './flexibleLoanAllOf';
export * from './floatingLeg';
export * from './floatingLegAllOf';
export * from './flowConventionName';
export * from './flowConventions';
export * from './forwardRateAgreement';
export * from './forwardRateAgreementAllOf';
export * from './fundShareClass';
export * from './fundShareClassAllOf';
export * from './fundingLeg';
export * from './fundingLegAllOf';
export * from './future';
export * from './futureAllOf';
export * from './futuresContractDetails';
export * from './fxConventions';
export * from './fxDependency';
export * from './fxDependencyAllOf';
export * from './fxForward';
export * from './fxForwardAllOf';
export * from './fxForwardCurveByQuoteReference';
export * from './fxForwardCurveByQuoteReferenceAllOf';
export * from './fxForwardCurveData';
export * from './fxForwardCurveDataAllOf';
export * from './fxForwardModelOptions';
export * from './fxForwardModelOptionsAllOf';
export * from './fxForwardPipsCurveData';
export * from './fxForwardPipsCurveDataAllOf';
export * from './fxForwardSettlementEvent';
export * from './fxForwardSettlementEventAllOf';
export * from './fxForwardTenorCurveData';
export * from './fxForwardTenorCurveDataAllOf';
export * from './fxForwardTenorPipsCurveData';
export * from './fxForwardTenorPipsCurveDataAllOf';
export * from './fxForwardsDependency';
export * from './fxForwardsDependencyAllOf';
export * from './fxLinkedNotionalSchedule';
export * from './fxLinkedNotionalScheduleAllOf';
export * from './fxOption';
export * from './fxOptionAllOf';
export * from './fxSwap';
export * from './fxSwapAllOf';
export * from './fxTenorConvention';
export * from './fxVolDependency';
export * from './fxVolDependencyAllOf';
export * from './fxVolSurfaceData';
export * from './getComplexMarketDataResponse';
export * from './getCounterpartyAgreementResponse';
export * from './getCreditSupportAnnexResponse';
export * from './getInstrumentsResponse';
export * from './getQuotesResponse';
export * from './getRecipeResponse';
export * from './getReferencePortfolioConstituentsResponse';
export * from './groupBySelectorComplianceParameter';
export * from './groupByStep';
export * from './groupFilterPredicateComplianceParameter';
export * from './groupFilterStep';
export * from './groupOfMarketDataKeyRules';
export * from './holdingAdjustment';
export * from './holdingAdjustmentWithDate';
export * from './holdingContext';
export * from './holdingContributor';
export * from './holdingsAdjustment';
export * from './holdingsAdjustmentHeader';
export * from './iUnitDefinitionDto';
export * from './idSelectorDefinition';
export * from './identifierPartSchema';
export * from './indexConvention';
export * from './indexModelOptions';
export * from './indexModelOptionsAllOf';
export * from './indexProjectionDependency';
export * from './indexProjectionDependencyAllOf';
export * from './industryClassifier';
export * from './inflationFixingDependency';
export * from './inflationFixingDependencyAllOf';
export * from './inflationIndexConventions';
export * from './inflationLeg';
export * from './inflationLegAllOf';
export * from './inflationLinkedBond';
export * from './inflationLinkedBondAllOf';
export * from './inflationSwap';
export * from './inflationSwapAllOf';
export * from './informationalErrorEvent';
export * from './informationalErrorEventAllOf';
export * from './informationalEvent';
export * from './informationalEventAllOf';
export * from './inlineValuationRequest';
export * from './inlineValuationsReconciliationRequest';
export * from './inputTransition';
export * from './instrument';
export * from './instrumentDefinition';
export * from './instrumentDefinitionFormat';
export * from './instrumentEvent';
export * from './instrumentEventConfiguration';
export * from './instrumentEventHolder';
export * from './instrumentIdTypeDescriptor';
export * from './instrumentIdValue';
export * from './instrumentLeg';
export * from './instrumentLegAllOf';
export * from './instrumentList';
export * from './instrumentListAllOf';
export * from './instrumentListComplianceParameter';
export * from './instrumentMatch';
export * from './instrumentModels';
export * from './instrumentProperties';
export * from './instrumentSearchProperty';
export * from './interestRateSwap';
export * from './interestRateSwapAllOf';
export * from './interestRateSwaption';
export * from './interestRateSwaptionAllOf';
export * from './irVolCubeData';
export * from './irVolCubeDataAllOf';
export * from './irVolDependency';
export * from './irVolDependencyAllOf';
export * from './isBusinessDayResponse';
export * from './labelValueSet';
export * from './legDefinition';
export * from './legalEntity';
export * from './levelStep';
export * from './lifeCycleEventLineage';
export * from './lifeCycleEventValue';
export * from './lifeCycleEventValueAllOf';
export * from './lineageMember';
export * from './link';
export * from './listAggregationReconciliation';
export * from './listAggregationResponse';
export * from './loanPeriod';
export * from './lusidInstrument';
export * from './lusidProblemDetails';
export * from './lusidTradeTicket';
export * from './lusidUniqueId';
export * from './lusidValidationProblemDetails';
export * from './mappedString';
export * from './mapping';
export * from './mappingRule';
export * from './marketContext';
export * from './marketContextSuppliers';
export * from './marketDataKeyRule';
export * from './marketDataOptions';
export * from './marketDataOverrides';
export * from './marketDataSpecificRule';
export * from './marketOptions';
export * from './marketQuote';
export * from './maturityEvent';
export * from './maturityEventAllOf';
export * from './metricValue';
export * from './modelOptions';
export * from './modelSelection';
export * from './moveOrdersToDifferentBlocksRequest';
export * from './movedOrderToDifferentBlockResponse';
export * from './nextValueInSequenceResponse';
export * from './opaqueDependency';
export * from './opaqueDependencyAllOf';
export * from './opaqueMarketData';
export * from './opaqueMarketDataAllOf';
export * from './opaqueModelOptions';
export * from './opaqueModelOptionsAllOf';
export * from './openEvent';
export * from './openEventAllOf';
export * from './operation';
export * from './order';
export * from './orderBySpec';
export * from './orderFlowConfiguration';
export * from './orderGraphBlock';
export * from './orderGraphBlockAllocationDetail';
export * from './orderGraphBlockAllocationSynopsis';
export * from './orderGraphBlockExecutionDetail';
export * from './orderGraphBlockExecutionSynopsis';
export * from './orderGraphBlockOrderDetail';
export * from './orderGraphBlockOrderSynopsis';
export * from './orderGraphBlockPlacementDetail';
export * from './orderGraphBlockPlacementSynopsis';
export * from './orderGraphPlacement';
export * from './orderGraphPlacementAllocationDetail';
export * from './orderGraphPlacementAllocationSynopsis';
export * from './orderGraphPlacementChildPlacementDetail';
export * from './orderGraphPlacementExecutionDetail';
export * from './orderGraphPlacementExecutionSynopsis';
export * from './orderGraphPlacementOrderDetail';
export * from './orderGraphPlacementOrderSynopsis';
export * from './orderGraphPlacementPlacementSynopsis';
export * from './orderRequest';
export * from './orderSetRequest';
export * from './otcConfirmation';
export * from './outputTransaction';
export * from './outputTransition';
export * from './pagedResourceListOfAddressKeyDefinition';
export * from './pagedResourceListOfAllocation';
export * from './pagedResourceListOfBlock';
export * from './pagedResourceListOfCalendar';
export * from './pagedResourceListOfComplianceRuleResponse';
export * from './pagedResourceListOfComplianceRunInfoV2';
export * from './pagedResourceListOfComplianceTemplate';
export * from './pagedResourceListOfCorporateActionSource';
export * from './pagedResourceListOfCustomEntityDefinition';
export * from './pagedResourceListOfCustomEntityResponse';
export * from './pagedResourceListOfCustomEntityType';
export * from './pagedResourceListOfCutLabelDefinition';
export * from './pagedResourceListOfDataTypeSummary';
export * from './pagedResourceListOfDialectId';
export * from './pagedResourceListOfExecution';
export * from './pagedResourceListOfInstrument';
export * from './pagedResourceListOfInstrumentEventHolder';
export * from './pagedResourceListOfLegalEntity';
export * from './pagedResourceListOfOrder';
export * from './pagedResourceListOfOrderGraphBlock';
export * from './pagedResourceListOfOrderGraphPlacement';
export * from './pagedResourceListOfParticipation';
export * from './pagedResourceListOfPerson';
export * from './pagedResourceListOfPlacement';
export * from './pagedResourceListOfPortfolioGroup';
export * from './pagedResourceListOfPortfolioGroupSearchResult';
export * from './pagedResourceListOfPortfolioSearchResult';
export * from './pagedResourceListOfPropertyDefinition';
export * from './pagedResourceListOfPropertyDefinitionSearchResult';
export * from './pagedResourceListOfReferenceListResponse';
export * from './pagedResourceListOfRelationshipDefinition';
export * from './pagedResourceListOfSequenceDefinition';
export * from './pagedResourceListOfTranslationScriptId';
export * from './pagedResourceListOfVirtualRow';
export * from './participation';
export * from './participationRequest';
export * from './participationSetRequest';
export * from './performanceReturn';
export * from './performanceReturnsMetric';
export * from './perpetualProperty';
export * from './person';
export * from './placeBlocksRequest';
export * from './placement';
export * from './placementRequest';
export * from './placementSetRequest';
export * from './portfolio';
export * from './portfolioCashFlow';
export * from './portfolioCashLadder';
export * from './portfolioDetails';
export * from './portfolioEntityId';
export * from './portfolioGroup';
export * from './portfolioGroupIdComplianceParameter';
export * from './portfolioGroupIdList';
export * from './portfolioGroupIdListAllOf';
export * from './portfolioGroupIdListComplianceParameter';
export * from './portfolioGroupProperties';
export * from './portfolioGroupSearchResult';
export * from './portfolioHolding';
export * from './portfolioIdComplianceParameter';
export * from './portfolioIdList';
export * from './portfolioIdListComplianceParameter';
export * from './portfolioProperties';
export * from './portfolioReconciliationRequest';
export * from './portfolioResultDataKeyRule';
export * from './portfolioResultDataKeyRuleAllOf';
export * from './portfolioReturnBreakdown';
export * from './portfolioSearchResult';
export * from './portfoliosReconciliationRequest';
export * from './premium';
export * from './pricingContext';
export * from './pricingOptions';
export * from './processedCommand';
export * from './property';
export * from './propertyDefinition';
export * from './propertyDefinitionSearchResult';
export * from './propertyFilter';
export * from './propertyInterval';
export * from './propertyKeyComplianceParameter';
export * from './propertyKeyComplianceParameterAllOf';
export * from './propertyKeyListComplianceParameter';
export * from './propertySchema';
export * from './propertyValue';
export * from './quote';
export * from './quoteDependency';
export * from './quoteDependencyAllOf';
export * from './quoteId';
export * from './quoteSeriesId';
export * from './rawVendorEvent';
export * from './rawVendorEventAllOf';
export * from './realisedGainLoss';
export * from './recombineStep';
export * from './reconcileDateTimeRule';
export * from './reconcileDateTimeRuleAllOf';
export * from './reconcileNumericRule';
export * from './reconcileNumericRuleAllOf';
export * from './reconcileStringRule';
export * from './reconcileStringRuleAllOf';
export * from './reconciledTransaction';
export * from './reconciliationBreak';
export * from './reconciliationLeftRightAddressKeyPair';
export * from './reconciliationLine';
export * from './reconciliationRequest';
export * from './reconciliationResponse';
export * from './reconciliationRule';
export * from './referenceData';
export * from './referenceInstrument';
export * from './referenceInstrumentAllOf';
export * from './referenceList';
export * from './referenceListRequest';
export * from './referenceListResponse';
export * from './referencePortfolioConstituent';
export * from './referencePortfolioConstituentRequest';
export * from './relatedEntity';
export * from './relation';
export * from './relationship';
export * from './relationshipDefinition';
export * from './relativeDateOffset';
export * from './repo';
export * from './repoAllOf';
export * from './resetEvent';
export * from './resetEventAllOf';
export * from './resourceId';
export * from './resourceListOfAccessControlledResource';
export * from './resourceListOfAccessMetadataValueOf';
export * from './resourceListOfAddressKeyDefinition';
export * from './resourceListOfAggregationQuery';
export * from './resourceListOfAllocation';
export * from './resourceListOfBlock';
export * from './resourceListOfBlockAndOrders';
export * from './resourceListOfCalendarDate';
export * from './resourceListOfChange';
export * from './resourceListOfChangeHistory';
export * from './resourceListOfConstituentsAdjustmentHeader';
export * from './resourceListOfCorporateAction';
export * from './resourceListOfDataType';
export * from './resourceListOfExecution';
export * from './resourceListOfGetCounterpartyAgreementResponse';
export * from './resourceListOfGetCreditSupportAnnexResponse';
export * from './resourceListOfGetRecipeResponse';
export * from './resourceListOfHoldingsAdjustmentHeader';
export * from './resourceListOfIUnitDefinitionDto';
export * from './resourceListOfInstrumentIdTypeDescriptor';
export * from './resourceListOfLegalEntity';
export * from './resourceListOfMapping';
export * from './resourceListOfMovedOrderToDifferentBlockResponse';
export * from './resourceListOfOrder';
export * from './resourceListOfParticipation';
export * from './resourceListOfPerformanceReturn';
export * from './resourceListOfPerson';
export * from './resourceListOfPlacement';
export * from './resourceListOfPortfolio';
export * from './resourceListOfPortfolioCashFlow';
export * from './resourceListOfPortfolioCashLadder';
export * from './resourceListOfProcessedCommand';
export * from './resourceListOfProperty';
export * from './resourceListOfPropertyDefinition';
export * from './resourceListOfPropertyInterval';
export * from './resourceListOfQuote';
export * from './resourceListOfReconciliationBreak';
export * from './resourceListOfRelation';
export * from './resourceListOfRelationship';
export * from './resourceListOfScopeDefinition';
export * from './resourceListOfSideDefinition';
export * from './resourceListOfString';
export * from './resourceListOfTransactionType';
export * from './resourceListOfValueType';
export * from './responseMetaData';
export * from './resultDataKeyRule';
export * from './resultDataKeyRuleAllOf';
export * from './resultDataSchema';
export * from './resultKeyRule';
export * from './resultValue';
export * from './resultValue0D';
export * from './resultValue0DAllOf';
export * from './resultValueBool';
export * from './resultValueBoolAllOf';
export * from './resultValueCurrency';
export * from './resultValueCurrencyAllOf';
export * from './resultValueDateTimeOffset';
export * from './resultValueDateTimeOffsetAllOf';
export * from './resultValueDecimal';
export * from './resultValueDecimalAllOf';
export * from './resultValueDictionary';
export * from './resultValueDictionaryAllOf';
export * from './resultValueInt';
export * from './resultValueIntAllOf';
export * from './resultValueString';
export * from './resultValueStringAllOf';
export * from './roundingConfiguration';
export * from './roundingConfigurationComponent';
export * from './roundingConvention';
export * from './schedule';
export * from './schema';
export * from './scopeDefinition';
export * from './scriptMapReference';
export * from './securityElection';
export * from './sequenceDefinition';
export * from './setLegalEntityIdentifiersRequest';
export * from './setLegalEntityPropertiesRequest';
export * from './setPersonIdentifiersRequest';
export * from './setPersonPropertiesRequest';
export * from './sideConfigurationData';
export * from './sideDefinition';
export * from './sideDefinitionRequest';
export * from './sidesDefinitionRequest';
export * from './simpleCashFlowLoan';
export * from './simpleCashFlowLoanAllOf';
export * from './simpleInstrument';
export * from './simpleInstrumentAllOf';
export * from './stepSchedule';
export * from './stepScheduleAllOf';
export * from './stockSplitEvent';
export * from './stockSplitEventAllOf';
export * from './stream';
export * from './stringComplianceParameter';
export * from './stringList';
export * from './stringListComplianceParameter';
export * from './targetTaxLot';
export * from './targetTaxLotRequest';
export * from './termDeposit';
export * from './termDepositAllOf';
export * from './totalReturnSwap';
export * from './totalReturnSwapAllOf';
export * from './touch';
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
export * from './transactionReconciliationRequest';
export * from './transactionRequest';
export * from './transactionSetConfigurationData';
export * from './transactionType';
export * from './transactionTypeAlias';
export * from './transactionTypeCalculation';
export * from './transactionTypeMovement';
export * from './transactionTypePropertyMapping';
export * from './transactionTypeRequest';
export * from './transactionsReconciliationsResponse';
export * from './transitionEvent';
export * from './transitionEventAllOf';
export * from './translateEntitiesInlinedRequest';
export * from './translateEntitiesRequest';
export * from './translateEntitiesResponse';
export * from './translationContext';
export * from './translationInput';
export * from './translationResult';
export * from './translationScript';
export * from './translationScriptId';
export * from './triggerEvent';
export * from './triggerEventAllOf';
export * from './typedResourceId';
export * from './unitsRatio';
export * from './updateCalendarRequest';
export * from './updateCustomEntityDefinitionRequest';
export * from './updateCustomEntityTypeRequest';
export * from './updateCutLabelDefinitionRequest';
export * from './updateDataTypeRequest';
export * from './updateDerivedPropertyDefinitionRequest';
export * from './updateInstrumentIdentifierRequest';
export * from './updatePortfolioGroupRequest';
export * from './updatePortfolioRequest';
export * from './updatePropertyDefinitionRequest';
export * from './updateRelationshipDefinitionRequest';
export * from './updateUnitRequest';
export * from './upsertComplexMarketDataRequest';
export * from './upsertComplianceRuleRequest';
export * from './upsertComplianceRunSummaryRequest';
export * from './upsertComplianceRunSummaryResult';
export * from './upsertCorporateActionRequest';
export * from './upsertCorporateActionsResponse';
export * from './upsertCounterpartyAgreementRequest';
export * from './upsertCreditSupportAnnexRequest';
export * from './upsertCustomEntitiesResponse';
export * from './upsertCustomEntityAccessMetadataRequest';
export * from './upsertDialectRequest';
export * from './upsertInstrumentEventRequest';
export * from './upsertInstrumentEventsResponse';
export * from './upsertInstrumentPropertiesResponse';
export * from './upsertInstrumentPropertyRequest';
export * from './upsertInstrumentsResponse';
export * from './upsertLegalEntitiesResponse';
export * from './upsertLegalEntityAccessMetadataRequest';
export * from './upsertLegalEntityRequest';
export * from './upsertPersonAccessMetadataRequest';
export * from './upsertPersonRequest';
export * from './upsertPortfolioAccessMetadataRequest';
export * from './upsertPortfolioGroupAccessMetadataRequest';
export * from './upsertPortfolioTransactionsResponse';
export * from './upsertQuoteRequest';
export * from './upsertQuotesResponse';
export * from './upsertRecipeRequest';
export * from './upsertReferencePortfolioConstituentsRequest';
export * from './upsertReferencePortfolioConstituentsResponse';
export * from './upsertReturnsResponse';
export * from './upsertSingleStructuredDataResponse';
export * from './upsertStructuredDataResponse';
export * from './upsertTransactionPropertiesResponse';
export * from './upsertTranslationScriptRequest';
export * from './user';
export * from './valuationRequest';
export * from './valuationSchedule';
export * from './valuationsReconciliationRequest';
export * from './valueType';
export * from './vendorModelRule';
export * from './version';
export * from './versionSummaryDto';
export * from './versionedResourceListOfA2BDataRecord';
export * from './versionedResourceListOfA2BMovementRecord';
export * from './versionedResourceListOfHoldingContributor';
export * from './versionedResourceListOfOutputTransaction';
export * from './versionedResourceListOfPortfolioHolding';
export * from './versionedResourceListOfTransaction';
export * from './virtualRow';
export * from './weekendMask';
export * from './weightedInstrument';
export * from './weightedInstrumentInLineLookupIdentifiers';
export * from './weightedInstruments';
export * from './yieldCurveData';
export * from './yieldCurveDataAllOf';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { A2BBreakdown } from './a2BBreakdown';
import { A2BCategory } from './a2BCategory';
import { A2BDataRecord } from './a2BDataRecord';
import { A2BMovementRecord } from './a2BMovementRecord';
import { AccessControlledAction } from './accessControlledAction';
import { AccessControlledResource } from './accessControlledResource';
import { AccessMetadataOperation } from './accessMetadataOperation';
import { AccessMetadataValue } from './accessMetadataValue';
import { AccumulationEvent } from './accumulationEvent';
import { AccumulationEventAllOf } from './accumulationEventAllOf';
import { ActionId } from './actionId';
import { ActionResultOfPortfolio } from './actionResultOfPortfolio';
import { AddBusinessDaysToDateRequest } from './addBusinessDaysToDateRequest';
import { AddBusinessDaysToDateResponse } from './addBusinessDaysToDateResponse';
import { AdditionalPayment } from './additionalPayment';
import { AddressDefinition } from './addressDefinition';
import { AddressKeyComplianceParameter } from './addressKeyComplianceParameter';
import { AddressKeyComplianceParameterAllOf } from './addressKeyComplianceParameterAllOf';
import { AddressKeyDefinition } from './addressKeyDefinition';
import { AddressKeyFilter } from './addressKeyFilter';
import { AddressKeyList } from './addressKeyList';
import { AddressKeyListAllOf } from './addressKeyListAllOf';
import { AddressKeyListComplianceParameter } from './addressKeyListComplianceParameter';
import { AddressKeyListComplianceParameterAllOf } from './addressKeyListComplianceParameterAllOf';
import { AddressKeyOptionDefinition } from './addressKeyOptionDefinition';
import { AdjustHolding } from './adjustHolding';
import { AdjustHoldingForDateRequest } from './adjustHoldingForDateRequest';
import { AdjustHoldingRequest } from './adjustHoldingRequest';
import { AggregateSpec } from './aggregateSpec';
import { AggregatedReturn } from './aggregatedReturn';
import { AggregatedReturnsDispersionRequest } from './aggregatedReturnsDispersionRequest';
import { AggregatedReturnsRequest } from './aggregatedReturnsRequest';
import { AggregatedReturnsResponse } from './aggregatedReturnsResponse';
import { AggregationContext } from './aggregationContext';
import { AggregationMeasureFailureDetail } from './aggregationMeasureFailureDetail';
import { AggregationOptions } from './aggregationOptions';
import { AggregationQuery } from './aggregationQuery';
import { Allocation } from './allocation';
import { AllocationRequest } from './allocationRequest';
import { AllocationSetRequest } from './allocationSetRequest';
import { AmortisationEvent } from './amortisationEvent';
import { AmortisationEventAllOf } from './amortisationEventAllOf';
import { AnnulQuotesResponse } from './annulQuotesResponse';
import { AnnulSingleStructuredDataResponse } from './annulSingleStructuredDataResponse';
import { AnnulStructuredDataResponse } from './annulStructuredDataResponse';
import { AssetLeg } from './assetLeg';
import { Barrier } from './barrier';
import { Basket } from './basket';
import { BasketAllOf } from './basketAllOf';
import { BasketIdentifier } from './basketIdentifier';
import { BatchAdjustHoldingsResponse } from './batchAdjustHoldingsResponse';
import { BatchUpsertInstrumentPropertiesResponse } from './batchUpsertInstrumentPropertiesResponse';
import { BatchUpsertPortfolioTransactionsResponse } from './batchUpsertPortfolioTransactionsResponse';
import { BatchUpsertPropertyDefinitionPropertiesResponse } from './batchUpsertPropertyDefinitionPropertiesResponse';
import { Block } from './block';
import { BlockAndOrderIdRequest } from './blockAndOrderIdRequest';
import { BlockAndOrders } from './blockAndOrders';
import { BlockAndOrdersCreateRequest } from './blockAndOrdersCreateRequest';
import { BlockAndOrdersRequest } from './blockAndOrdersRequest';
import { BlockRequest } from './blockRequest';
import { BlockSetRequest } from './blockSetRequest';
import { BlockedOrderRequest } from './blockedOrderRequest';
import { Bond } from './bond';
import { BondAllOf } from './bondAllOf';
import { BondCouponEvent } from './bondCouponEvent';
import { BondCouponEventAllOf } from './bondCouponEventAllOf';
import { BondDefaultEvent } from './bondDefaultEvent';
import { BondDefaultEventAllOf } from './bondDefaultEventAllOf';
import { BondPrincipalEvent } from './bondPrincipalEvent';
import { BondPrincipalEventAllOf } from './bondPrincipalEventAllOf';
import { BoolComplianceParameter } from './boolComplianceParameter';
import { BoolComplianceParameterAllOf } from './boolComplianceParameterAllOf';
import { BoolListComplianceParameter } from './boolListComplianceParameter';
import { BranchStep } from './branchStep';
import { BranchStepAllOf } from './branchStepAllOf';
import { Calendar } from './calendar';
import { CalendarDate } from './calendarDate';
import { CalendarDependency } from './calendarDependency';
import { CalendarDependencyAllOf } from './calendarDependencyAllOf';
import { CapFloor } from './capFloor';
import { CapFloorAllOf } from './capFloorAllOf';
import { CashDependency } from './cashDependency';
import { CashDependencyAllOf } from './cashDependencyAllOf';
import { CashDividendEvent } from './cashDividendEvent';
import { CashDividendEventAllOf } from './cashDividendEventAllOf';
import { CashElection } from './cashElection';
import { CashFlowEvent } from './cashFlowEvent';
import { CashFlowEventAllOf } from './cashFlowEventAllOf';
import { CashFlowLineage } from './cashFlowLineage';
import { CashFlowValue } from './cashFlowValue';
import { CashFlowValueAllOf } from './cashFlowValueAllOf';
import { CashFlowValueSet } from './cashFlowValueSet';
import { CashFlowValueSetAllOf } from './cashFlowValueSetAllOf';
import { CashLadderRecord } from './cashLadderRecord';
import { CashPerpetual } from './cashPerpetual';
import { CashPerpetualAllOf } from './cashPerpetualAllOf';
import { CdsFlowConventions } from './cdsFlowConventions';
import { CdsIndex } from './cdsIndex';
import { CdsIndexAllOf } from './cdsIndexAllOf';
import { CdsProtectionDetailSpecification } from './cdsProtectionDetailSpecification';
import { Change } from './change';
import { ChangeHistory } from './changeHistory';
import { ChangeItem } from './changeItem';
import { CheckStep } from './checkStep';
import { CheckStepAllOf } from './checkStepAllOf';
import { CloseEvent } from './closeEvent';
import { CloseEventAllOf } from './closeEventAllOf';
import { CompletePortfolio } from './completePortfolio';
import { CompleteRelationship } from './completeRelationship';
import { ComplexBond } from './complexBond';
import { ComplexBondAllOf } from './complexBondAllOf';
import { ComplexMarketData } from './complexMarketData';
import { ComplexMarketDataId } from './complexMarketDataId';
import { ComplianceParameter } from './complianceParameter';
import { ComplianceRuleBreakdown } from './complianceRuleBreakdown';
import { ComplianceRuleBreakdownRequest } from './complianceRuleBreakdownRequest';
import { ComplianceRuleResponse } from './complianceRuleResponse';
import { ComplianceRuleResultDetail } from './complianceRuleResultDetail';
import { ComplianceRuleResultPortfolioDetail } from './complianceRuleResultPortfolioDetail';
import { ComplianceRuleResultV2 } from './complianceRuleResultV2';
import { ComplianceRunInfoV2 } from './complianceRunInfoV2';
import { ComplianceStep } from './complianceStep';
import { ComplianceSummaryRuleResult } from './complianceSummaryRuleResult';
import { ComplianceSummaryRuleResultRequest } from './complianceSummaryRuleResultRequest';
import { ComplianceTemplate } from './complianceTemplate';
import { ComplianceTemplateParameter } from './complianceTemplateParameter';
import { ComplianceTemplateVariation } from './complianceTemplateVariation';
import { CompositeBreakdown } from './compositeBreakdown';
import { CompositeBreakdownRequest } from './compositeBreakdownRequest';
import { CompositeBreakdownResponse } from './compositeBreakdownResponse';
import { CompositeDispersion } from './compositeDispersion';
import { CompositeDispersionResponse } from './compositeDispersionResponse';
import { Compounding } from './compounding';
import { ConfigurationRecipe } from './configurationRecipe';
import { ConstantVolatilitySurface } from './constantVolatilitySurface';
import { ConstantVolatilitySurfaceAllOf } from './constantVolatilitySurfaceAllOf';
import { ConstituentsAdjustmentHeader } from './constituentsAdjustmentHeader';
import { ContractForDifference } from './contractForDifference';
import { ContractForDifferenceAllOf } from './contractForDifferenceAllOf';
import { CorporateAction } from './corporateAction';
import { CorporateActionSource } from './corporateActionSource';
import { CorporateActionTransition } from './corporateActionTransition';
import { CorporateActionTransitionComponent } from './corporateActionTransitionComponent';
import { CorporateActionTransitionComponentRequest } from './corporateActionTransitionComponentRequest';
import { CorporateActionTransitionRequest } from './corporateActionTransitionRequest';
import { CounterpartyAgreement } from './counterpartyAgreement';
import { CounterpartyRiskInformation } from './counterpartyRiskInformation';
import { CounterpartySignatory } from './counterpartySignatory';
import { CreateAddressKeyDefinitionRequest } from './createAddressKeyDefinitionRequest';
import { CreateCalendarRequest } from './createCalendarRequest';
import { CreateCorporateActionSourceRequest } from './createCorporateActionSourceRequest';
import { CreateCustomEntityTypeRequest } from './createCustomEntityTypeRequest';
import { CreateCutLabelDefinitionRequest } from './createCutLabelDefinitionRequest';
import { CreateDataTypeRequest } from './createDataTypeRequest';
import { CreateDateRequest } from './createDateRequest';
import { CreateDerivedPropertyDefinitionRequest } from './createDerivedPropertyDefinitionRequest';
import { CreateDerivedTransactionPortfolioRequest } from './createDerivedTransactionPortfolioRequest';
import { CreatePortfolioDetails } from './createPortfolioDetails';
import { CreatePortfolioGroupRequest } from './createPortfolioGroupRequest';
import { CreatePropertyDefinitionRequest } from './createPropertyDefinitionRequest';
import { CreateReferencePortfolioRequest } from './createReferencePortfolioRequest';
import { CreateRelationshipDefinitionRequest } from './createRelationshipDefinitionRequest';
import { CreateRelationshipRequest } from './createRelationshipRequest';
import { CreateSequenceRequest } from './createSequenceRequest';
import { CreateTradeTicketsResponse } from './createTradeTicketsResponse';
import { CreateTransactionPortfolioRequest } from './createTransactionPortfolioRequest';
import { CreateUnitDefinition } from './createUnitDefinition';
import { CreditDefaultSwap } from './creditDefaultSwap';
import { CreditDefaultSwapAllOf } from './creditDefaultSwapAllOf';
import { CreditRating } from './creditRating';
import { CreditSpreadCurveData } from './creditSpreadCurveData';
import { CreditSpreadCurveDataAllOf } from './creditSpreadCurveDataAllOf';
import { CreditSupportAnnex } from './creditSupportAnnex';
import { CurrencyAndAmount } from './currencyAndAmount';
import { CustodianAccount } from './custodianAccount';
import { CustomEntityDefinition } from './customEntityDefinition';
import { CustomEntityDefinitionRequest } from './customEntityDefinitionRequest';
import { CustomEntityField } from './customEntityField';
import { CustomEntityFieldDefinition } from './customEntityFieldDefinition';
import { CustomEntityId } from './customEntityId';
import { CustomEntityRequest } from './customEntityRequest';
import { CustomEntityResponse } from './customEntityResponse';
import { CustomEntityType } from './customEntityType';
import { CutLabelDefinition } from './cutLabelDefinition';
import { CutLocalTime } from './cutLocalTime';
import { DataType } from './dataType';
import { DataTypeSummary } from './dataTypeSummary';
import { DateAttributes } from './dateAttributes';
import { DateRange } from './dateRange';
import { DateTimeComplianceParameter } from './dateTimeComplianceParameter';
import { DateTimeComplianceParameterAllOf } from './dateTimeComplianceParameterAllOf';
import { DateTimeListComplianceParameter } from './dateTimeListComplianceParameter';
import { DayOfWeek } from './dayOfWeek';
import { DecimalComplianceParameter } from './decimalComplianceParameter';
import { DecimalComplianceParameterAllOf } from './decimalComplianceParameterAllOf';
import { DecimalList } from './decimalList';
import { DecimalListAllOf } from './decimalListAllOf';
import { DecimalListComplianceParameter } from './decimalListComplianceParameter';
import { DecoratedComplianceRunSummary } from './decoratedComplianceRunSummary';
import { DeleteInstrumentPropertiesResponse } from './deleteInstrumentPropertiesResponse';
import { DeleteInstrumentResponse } from './deleteInstrumentResponse';
import { DeleteInstrumentsResponse } from './deleteInstrumentsResponse';
import { DeleteRelationshipRequest } from './deleteRelationshipRequest';
import { DeletedEntityResponse } from './deletedEntityResponse';
import { DependencySourceFilter } from './dependencySourceFilter';
import { Dialect } from './dialect';
import { DialectId } from './dialectId';
import { DialectSchema } from './dialectSchema';
import { DiscountFactorCurveData } from './discountFactorCurveData';
import { DiscountFactorCurveDataAllOf } from './discountFactorCurveDataAllOf';
import { DiscountingDependency } from './discountingDependency';
import { DiscountingDependencyAllOf } from './discountingDependencyAllOf';
import { DividendOptionEvent } from './dividendOptionEvent';
import { DividendOptionEventAllOf } from './dividendOptionEventAllOf';
import { DividendReinvestmentEvent } from './dividendReinvestmentEvent';
import { DividendReinvestmentEventAllOf } from './dividendReinvestmentEventAllOf';
import { EconomicDependency } from './economicDependency';
import { EconomicDependencyWithComplexMarketData } from './economicDependencyWithComplexMarketData';
import { EconomicDependencyWithQuote } from './economicDependencyWithQuote';
import { EmptyModelOptions } from './emptyModelOptions';
import { EmptyModelOptionsAllOf } from './emptyModelOptionsAllOf';
import { EntityIdentifier } from './entityIdentifier';
import { Equity } from './equity';
import { EquityAllOf } from './equityAllOf';
import { EquityAllOfIdentifiers } from './equityAllOfIdentifiers';
import { EquityCurveByPricesData } from './equityCurveByPricesData';
import { EquityCurveByPricesDataAllOf } from './equityCurveByPricesDataAllOf';
import { EquityCurveDependency } from './equityCurveDependency';
import { EquityCurveDependencyAllOf } from './equityCurveDependencyAllOf';
import { EquityModelOptions } from './equityModelOptions';
import { EquityModelOptionsAllOf } from './equityModelOptionsAllOf';
import { EquityOption } from './equityOption';
import { EquityOptionAllOf } from './equityOptionAllOf';
import { EquitySwap } from './equitySwap';
import { EquitySwapAllOf } from './equitySwapAllOf';
import { EquityVolDependency } from './equityVolDependency';
import { EquityVolDependencyAllOf } from './equityVolDependencyAllOf';
import { EquityVolSurfaceData } from './equityVolSurfaceData';
import { EquityVolSurfaceDataAllOf } from './equityVolSurfaceDataAllOf';
import { ErrorDetail } from './errorDetail';
import { EventDateRange } from './eventDateRange';
import { ExDividendConfiguration } from './exDividendConfiguration';
import { ExchangeTradedOption } from './exchangeTradedOption';
import { ExchangeTradedOptionAllOf } from './exchangeTradedOptionAllOf';
import { ExchangeTradedOptionContractDetails } from './exchangeTradedOptionContractDetails';
import { Execution } from './execution';
import { ExecutionRequest } from './executionRequest';
import { ExecutionSetRequest } from './executionSetRequest';
import { ExerciseEvent } from './exerciseEvent';
import { ExerciseEventAllOf } from './exerciseEventAllOf';
import { ExoticInstrument } from './exoticInstrument';
import { ExoticInstrumentAllOf } from './exoticInstrumentAllOf';
import { ExpandedGroup } from './expandedGroup';
import { FieldDefinition } from './fieldDefinition';
import { FieldSchema } from './fieldSchema';
import { FieldValue } from './fieldValue';
import { FileResponse } from './fileResponse';
import { FilterPredicateComplianceParameter } from './filterPredicateComplianceParameter';
import { FilterPredicateComplianceParameterAllOf } from './filterPredicateComplianceParameterAllOf';
import { FilterStep } from './filterStep';
import { FixedLeg } from './fixedLeg';
import { FixedLegAllOf } from './fixedLegAllOf';
import { FixedLegAllOfOverrides } from './fixedLegAllOfOverrides';
import { FlexibleLoan } from './flexibleLoan';
import { FlexibleLoanAllOf } from './flexibleLoanAllOf';
import { FloatingLeg } from './floatingLeg';
import { FloatingLegAllOf } from './floatingLegAllOf';
import { FlowConventionName } from './flowConventionName';
import { FlowConventions } from './flowConventions';
import { ForwardRateAgreement } from './forwardRateAgreement';
import { ForwardRateAgreementAllOf } from './forwardRateAgreementAllOf';
import { FundShareClass } from './fundShareClass';
import { FundShareClassAllOf } from './fundShareClassAllOf';
import { FundingLeg } from './fundingLeg';
import { FundingLegAllOf } from './fundingLegAllOf';
import { Future } from './future';
import { FutureAllOf } from './futureAllOf';
import { FuturesContractDetails } from './futuresContractDetails';
import { FxConventions } from './fxConventions';
import { FxDependency } from './fxDependency';
import { FxDependencyAllOf } from './fxDependencyAllOf';
import { FxForward } from './fxForward';
import { FxForwardAllOf } from './fxForwardAllOf';
import { FxForwardCurveByQuoteReference } from './fxForwardCurveByQuoteReference';
import { FxForwardCurveByQuoteReferenceAllOf } from './fxForwardCurveByQuoteReferenceAllOf';
import { FxForwardCurveData } from './fxForwardCurveData';
import { FxForwardCurveDataAllOf } from './fxForwardCurveDataAllOf';
import { FxForwardModelOptions } from './fxForwardModelOptions';
import { FxForwardModelOptionsAllOf } from './fxForwardModelOptionsAllOf';
import { FxForwardPipsCurveData } from './fxForwardPipsCurveData';
import { FxForwardPipsCurveDataAllOf } from './fxForwardPipsCurveDataAllOf';
import { FxForwardSettlementEvent } from './fxForwardSettlementEvent';
import { FxForwardSettlementEventAllOf } from './fxForwardSettlementEventAllOf';
import { FxForwardTenorCurveData } from './fxForwardTenorCurveData';
import { FxForwardTenorCurveDataAllOf } from './fxForwardTenorCurveDataAllOf';
import { FxForwardTenorPipsCurveData } from './fxForwardTenorPipsCurveData';
import { FxForwardTenorPipsCurveDataAllOf } from './fxForwardTenorPipsCurveDataAllOf';
import { FxForwardsDependency } from './fxForwardsDependency';
import { FxForwardsDependencyAllOf } from './fxForwardsDependencyAllOf';
import { FxLinkedNotionalSchedule } from './fxLinkedNotionalSchedule';
import { FxLinkedNotionalScheduleAllOf } from './fxLinkedNotionalScheduleAllOf';
import { FxOption } from './fxOption';
import { FxOptionAllOf } from './fxOptionAllOf';
import { FxSwap } from './fxSwap';
import { FxSwapAllOf } from './fxSwapAllOf';
import { FxTenorConvention } from './fxTenorConvention';
import { FxVolDependency } from './fxVolDependency';
import { FxVolDependencyAllOf } from './fxVolDependencyAllOf';
import { FxVolSurfaceData } from './fxVolSurfaceData';
import { GetComplexMarketDataResponse } from './getComplexMarketDataResponse';
import { GetCounterpartyAgreementResponse } from './getCounterpartyAgreementResponse';
import { GetCreditSupportAnnexResponse } from './getCreditSupportAnnexResponse';
import { GetInstrumentsResponse } from './getInstrumentsResponse';
import { GetQuotesResponse } from './getQuotesResponse';
import { GetRecipeResponse } from './getRecipeResponse';
import { GetReferencePortfolioConstituentsResponse } from './getReferencePortfolioConstituentsResponse';
import { GroupBySelectorComplianceParameter } from './groupBySelectorComplianceParameter';
import { GroupByStep } from './groupByStep';
import { GroupFilterPredicateComplianceParameter } from './groupFilterPredicateComplianceParameter';
import { GroupFilterStep } from './groupFilterStep';
import { GroupOfMarketDataKeyRules } from './groupOfMarketDataKeyRules';
import { HoldingAdjustment } from './holdingAdjustment';
import { HoldingAdjustmentWithDate } from './holdingAdjustmentWithDate';
import { HoldingContext } from './holdingContext';
import { HoldingContributor } from './holdingContributor';
import { HoldingsAdjustment } from './holdingsAdjustment';
import { HoldingsAdjustmentHeader } from './holdingsAdjustmentHeader';
import { IUnitDefinitionDto } from './iUnitDefinitionDto';
import { IdSelectorDefinition } from './idSelectorDefinition';
import { IdentifierPartSchema } from './identifierPartSchema';
import { IndexConvention } from './indexConvention';
import { IndexModelOptions } from './indexModelOptions';
import { IndexModelOptionsAllOf } from './indexModelOptionsAllOf';
import { IndexProjectionDependency } from './indexProjectionDependency';
import { IndexProjectionDependencyAllOf } from './indexProjectionDependencyAllOf';
import { IndustryClassifier } from './industryClassifier';
import { InflationFixingDependency } from './inflationFixingDependency';
import { InflationFixingDependencyAllOf } from './inflationFixingDependencyAllOf';
import { InflationIndexConventions } from './inflationIndexConventions';
import { InflationLeg } from './inflationLeg';
import { InflationLegAllOf } from './inflationLegAllOf';
import { InflationLinkedBond } from './inflationLinkedBond';
import { InflationLinkedBondAllOf } from './inflationLinkedBondAllOf';
import { InflationSwap } from './inflationSwap';
import { InflationSwapAllOf } from './inflationSwapAllOf';
import { InformationalErrorEvent } from './informationalErrorEvent';
import { InformationalErrorEventAllOf } from './informationalErrorEventAllOf';
import { InformationalEvent } from './informationalEvent';
import { InformationalEventAllOf } from './informationalEventAllOf';
import { InlineValuationRequest } from './inlineValuationRequest';
import { InlineValuationsReconciliationRequest } from './inlineValuationsReconciliationRequest';
import { InputTransition } from './inputTransition';
import { Instrument } from './instrument';
import { InstrumentDefinition } from './instrumentDefinition';
import { InstrumentDefinitionFormat } from './instrumentDefinitionFormat';
import { InstrumentEvent } from './instrumentEvent';
import { InstrumentEventConfiguration } from './instrumentEventConfiguration';
import { InstrumentEventHolder } from './instrumentEventHolder';
import { InstrumentIdTypeDescriptor } from './instrumentIdTypeDescriptor';
import { InstrumentIdValue } from './instrumentIdValue';
import { InstrumentLeg } from './instrumentLeg';
import { InstrumentLegAllOf } from './instrumentLegAllOf';
import { InstrumentList } from './instrumentList';
import { InstrumentListAllOf } from './instrumentListAllOf';
import { InstrumentListComplianceParameter } from './instrumentListComplianceParameter';
import { InstrumentMatch } from './instrumentMatch';
import { InstrumentModels } from './instrumentModels';
import { InstrumentProperties } from './instrumentProperties';
import { InstrumentSearchProperty } from './instrumentSearchProperty';
import { InterestRateSwap } from './interestRateSwap';
import { InterestRateSwapAllOf } from './interestRateSwapAllOf';
import { InterestRateSwaption } from './interestRateSwaption';
import { InterestRateSwaptionAllOf } from './interestRateSwaptionAllOf';
import { IrVolCubeData } from './irVolCubeData';
import { IrVolCubeDataAllOf } from './irVolCubeDataAllOf';
import { IrVolDependency } from './irVolDependency';
import { IrVolDependencyAllOf } from './irVolDependencyAllOf';
import { IsBusinessDayResponse } from './isBusinessDayResponse';
import { LabelValueSet } from './labelValueSet';
import { LegDefinition } from './legDefinition';
import { LegalEntity } from './legalEntity';
import { LevelStep } from './levelStep';
import { LifeCycleEventLineage } from './lifeCycleEventLineage';
import { LifeCycleEventValue } from './lifeCycleEventValue';
import { LifeCycleEventValueAllOf } from './lifeCycleEventValueAllOf';
import { LineageMember } from './lineageMember';
import { Link } from './link';
import { ListAggregationReconciliation } from './listAggregationReconciliation';
import { ListAggregationResponse } from './listAggregationResponse';
import { LoanPeriod } from './loanPeriod';
import { LusidInstrument } from './lusidInstrument';
import { LusidProblemDetails } from './lusidProblemDetails';
import { LusidTradeTicket } from './lusidTradeTicket';
import { LusidUniqueId } from './lusidUniqueId';
import { LusidValidationProblemDetails } from './lusidValidationProblemDetails';
import { MappedString } from './mappedString';
import { Mapping } from './mapping';
import { MappingRule } from './mappingRule';
import { MarketContext } from './marketContext';
import { MarketContextSuppliers } from './marketContextSuppliers';
import { MarketDataKeyRule } from './marketDataKeyRule';
import { MarketDataOptions } from './marketDataOptions';
import { MarketDataOverrides } from './marketDataOverrides';
import { MarketDataSpecificRule } from './marketDataSpecificRule';
import { MarketOptions } from './marketOptions';
import { MarketQuote } from './marketQuote';
import { MaturityEvent } from './maturityEvent';
import { MaturityEventAllOf } from './maturityEventAllOf';
import { MetricValue } from './metricValue';
import { ModelOptions } from './modelOptions';
import { ModelSelection } from './modelSelection';
import { MoveOrdersToDifferentBlocksRequest } from './moveOrdersToDifferentBlocksRequest';
import { MovedOrderToDifferentBlockResponse } from './movedOrderToDifferentBlockResponse';
import { NextValueInSequenceResponse } from './nextValueInSequenceResponse';
import { OpaqueDependency } from './opaqueDependency';
import { OpaqueDependencyAllOf } from './opaqueDependencyAllOf';
import { OpaqueMarketData } from './opaqueMarketData';
import { OpaqueMarketDataAllOf } from './opaqueMarketDataAllOf';
import { OpaqueModelOptions } from './opaqueModelOptions';
import { OpaqueModelOptionsAllOf } from './opaqueModelOptionsAllOf';
import { OpenEvent } from './openEvent';
import { OpenEventAllOf } from './openEventAllOf';
import { Operation } from './operation';
import { Order } from './order';
import { OrderBySpec } from './orderBySpec';
import { OrderFlowConfiguration } from './orderFlowConfiguration';
import { OrderGraphBlock } from './orderGraphBlock';
import { OrderGraphBlockAllocationDetail } from './orderGraphBlockAllocationDetail';
import { OrderGraphBlockAllocationSynopsis } from './orderGraphBlockAllocationSynopsis';
import { OrderGraphBlockExecutionDetail } from './orderGraphBlockExecutionDetail';
import { OrderGraphBlockExecutionSynopsis } from './orderGraphBlockExecutionSynopsis';
import { OrderGraphBlockOrderDetail } from './orderGraphBlockOrderDetail';
import { OrderGraphBlockOrderSynopsis } from './orderGraphBlockOrderSynopsis';
import { OrderGraphBlockPlacementDetail } from './orderGraphBlockPlacementDetail';
import { OrderGraphBlockPlacementSynopsis } from './orderGraphBlockPlacementSynopsis';
import { OrderGraphPlacement } from './orderGraphPlacement';
import { OrderGraphPlacementAllocationDetail } from './orderGraphPlacementAllocationDetail';
import { OrderGraphPlacementAllocationSynopsis } from './orderGraphPlacementAllocationSynopsis';
import { OrderGraphPlacementChildPlacementDetail } from './orderGraphPlacementChildPlacementDetail';
import { OrderGraphPlacementExecutionDetail } from './orderGraphPlacementExecutionDetail';
import { OrderGraphPlacementExecutionSynopsis } from './orderGraphPlacementExecutionSynopsis';
import { OrderGraphPlacementOrderDetail } from './orderGraphPlacementOrderDetail';
import { OrderGraphPlacementOrderSynopsis } from './orderGraphPlacementOrderSynopsis';
import { OrderGraphPlacementPlacementSynopsis } from './orderGraphPlacementPlacementSynopsis';
import { OrderRequest } from './orderRequest';
import { OrderSetRequest } from './orderSetRequest';
import { OtcConfirmation } from './otcConfirmation';
import { OutputTransaction } from './outputTransaction';
import { OutputTransition } from './outputTransition';
import { PagedResourceListOfAddressKeyDefinition } from './pagedResourceListOfAddressKeyDefinition';
import { PagedResourceListOfAllocation } from './pagedResourceListOfAllocation';
import { PagedResourceListOfBlock } from './pagedResourceListOfBlock';
import { PagedResourceListOfCalendar } from './pagedResourceListOfCalendar';
import { PagedResourceListOfComplianceRuleResponse } from './pagedResourceListOfComplianceRuleResponse';
import { PagedResourceListOfComplianceRunInfoV2 } from './pagedResourceListOfComplianceRunInfoV2';
import { PagedResourceListOfComplianceTemplate } from './pagedResourceListOfComplianceTemplate';
import { PagedResourceListOfCorporateActionSource } from './pagedResourceListOfCorporateActionSource';
import { PagedResourceListOfCustomEntityDefinition } from './pagedResourceListOfCustomEntityDefinition';
import { PagedResourceListOfCustomEntityResponse } from './pagedResourceListOfCustomEntityResponse';
import { PagedResourceListOfCustomEntityType } from './pagedResourceListOfCustomEntityType';
import { PagedResourceListOfCutLabelDefinition } from './pagedResourceListOfCutLabelDefinition';
import { PagedResourceListOfDataTypeSummary } from './pagedResourceListOfDataTypeSummary';
import { PagedResourceListOfDialectId } from './pagedResourceListOfDialectId';
import { PagedResourceListOfExecution } from './pagedResourceListOfExecution';
import { PagedResourceListOfInstrument } from './pagedResourceListOfInstrument';
import { PagedResourceListOfInstrumentEventHolder } from './pagedResourceListOfInstrumentEventHolder';
import { PagedResourceListOfLegalEntity } from './pagedResourceListOfLegalEntity';
import { PagedResourceListOfOrder } from './pagedResourceListOfOrder';
import { PagedResourceListOfOrderGraphBlock } from './pagedResourceListOfOrderGraphBlock';
import { PagedResourceListOfOrderGraphPlacement } from './pagedResourceListOfOrderGraphPlacement';
import { PagedResourceListOfParticipation } from './pagedResourceListOfParticipation';
import { PagedResourceListOfPerson } from './pagedResourceListOfPerson';
import { PagedResourceListOfPlacement } from './pagedResourceListOfPlacement';
import { PagedResourceListOfPortfolioGroup } from './pagedResourceListOfPortfolioGroup';
import { PagedResourceListOfPortfolioGroupSearchResult } from './pagedResourceListOfPortfolioGroupSearchResult';
import { PagedResourceListOfPortfolioSearchResult } from './pagedResourceListOfPortfolioSearchResult';
import { PagedResourceListOfPropertyDefinition } from './pagedResourceListOfPropertyDefinition';
import { PagedResourceListOfPropertyDefinitionSearchResult } from './pagedResourceListOfPropertyDefinitionSearchResult';
import { PagedResourceListOfReferenceListResponse } from './pagedResourceListOfReferenceListResponse';
import { PagedResourceListOfRelationshipDefinition } from './pagedResourceListOfRelationshipDefinition';
import { PagedResourceListOfSequenceDefinition } from './pagedResourceListOfSequenceDefinition';
import { PagedResourceListOfTranslationScriptId } from './pagedResourceListOfTranslationScriptId';
import { PagedResourceListOfVirtualRow } from './pagedResourceListOfVirtualRow';
import { Participation } from './participation';
import { ParticipationRequest } from './participationRequest';
import { ParticipationSetRequest } from './participationSetRequest';
import { PerformanceReturn } from './performanceReturn';
import { PerformanceReturnsMetric } from './performanceReturnsMetric';
import { PerpetualProperty } from './perpetualProperty';
import { Person } from './person';
import { PlaceBlocksRequest } from './placeBlocksRequest';
import { Placement } from './placement';
import { PlacementRequest } from './placementRequest';
import { PlacementSetRequest } from './placementSetRequest';
import { Portfolio } from './portfolio';
import { PortfolioCashFlow } from './portfolioCashFlow';
import { PortfolioCashLadder } from './portfolioCashLadder';
import { PortfolioDetails } from './portfolioDetails';
import { PortfolioEntityId } from './portfolioEntityId';
import { PortfolioGroup } from './portfolioGroup';
import { PortfolioGroupIdComplianceParameter } from './portfolioGroupIdComplianceParameter';
import { PortfolioGroupIdList } from './portfolioGroupIdList';
import { PortfolioGroupIdListAllOf } from './portfolioGroupIdListAllOf';
import { PortfolioGroupIdListComplianceParameter } from './portfolioGroupIdListComplianceParameter';
import { PortfolioGroupProperties } from './portfolioGroupProperties';
import { PortfolioGroupSearchResult } from './portfolioGroupSearchResult';
import { PortfolioHolding } from './portfolioHolding';
import { PortfolioIdComplianceParameter } from './portfolioIdComplianceParameter';
import { PortfolioIdList } from './portfolioIdList';
import { PortfolioIdListComplianceParameter } from './portfolioIdListComplianceParameter';
import { PortfolioProperties } from './portfolioProperties';
import { PortfolioReconciliationRequest } from './portfolioReconciliationRequest';
import { PortfolioResultDataKeyRule } from './portfolioResultDataKeyRule';
import { PortfolioResultDataKeyRuleAllOf } from './portfolioResultDataKeyRuleAllOf';
import { PortfolioReturnBreakdown } from './portfolioReturnBreakdown';
import { PortfolioSearchResult } from './portfolioSearchResult';
import { PortfoliosReconciliationRequest } from './portfoliosReconciliationRequest';
import { Premium } from './premium';
import { PricingContext } from './pricingContext';
import { PricingOptions } from './pricingOptions';
import { ProcessedCommand } from './processedCommand';
import { Property } from './property';
import { PropertyDefinition } from './propertyDefinition';
import { PropertyDefinitionSearchResult } from './propertyDefinitionSearchResult';
import { PropertyFilter } from './propertyFilter';
import { PropertyInterval } from './propertyInterval';
import { PropertyKeyComplianceParameter } from './propertyKeyComplianceParameter';
import { PropertyKeyComplianceParameterAllOf } from './propertyKeyComplianceParameterAllOf';
import { PropertyKeyListComplianceParameter } from './propertyKeyListComplianceParameter';
import { PropertySchema } from './propertySchema';
import { PropertyValue } from './propertyValue';
import { Quote } from './quote';
import { QuoteDependency } from './quoteDependency';
import { QuoteDependencyAllOf } from './quoteDependencyAllOf';
import { QuoteId } from './quoteId';
import { QuoteSeriesId } from './quoteSeriesId';
import { RawVendorEvent } from './rawVendorEvent';
import { RawVendorEventAllOf } from './rawVendorEventAllOf';
import { RealisedGainLoss } from './realisedGainLoss';
import { RecombineStep } from './recombineStep';
import { ReconcileDateTimeRule } from './reconcileDateTimeRule';
import { ReconcileDateTimeRuleAllOf } from './reconcileDateTimeRuleAllOf';
import { ReconcileNumericRule } from './reconcileNumericRule';
import { ReconcileNumericRuleAllOf } from './reconcileNumericRuleAllOf';
import { ReconcileStringRule } from './reconcileStringRule';
import { ReconcileStringRuleAllOf } from './reconcileStringRuleAllOf';
import { ReconciledTransaction } from './reconciledTransaction';
import { ReconciliationBreak } from './reconciliationBreak';
import { ReconciliationLeftRightAddressKeyPair } from './reconciliationLeftRightAddressKeyPair';
import { ReconciliationLine } from './reconciliationLine';
import { ReconciliationRequest } from './reconciliationRequest';
import { ReconciliationResponse } from './reconciliationResponse';
import { ReconciliationRule } from './reconciliationRule';
import { ReferenceData } from './referenceData';
import { ReferenceInstrument } from './referenceInstrument';
import { ReferenceInstrumentAllOf } from './referenceInstrumentAllOf';
import { ReferenceList } from './referenceList';
import { ReferenceListRequest } from './referenceListRequest';
import { ReferenceListResponse } from './referenceListResponse';
import { ReferencePortfolioConstituent } from './referencePortfolioConstituent';
import { ReferencePortfolioConstituentRequest } from './referencePortfolioConstituentRequest';
import { RelatedEntity } from './relatedEntity';
import { Relation } from './relation';
import { Relationship } from './relationship';
import { RelationshipDefinition } from './relationshipDefinition';
import { RelativeDateOffset } from './relativeDateOffset';
import { Repo } from './repo';
import { RepoAllOf } from './repoAllOf';
import { ResetEvent } from './resetEvent';
import { ResetEventAllOf } from './resetEventAllOf';
import { ResourceId } from './resourceId';
import { ResourceListOfAccessControlledResource } from './resourceListOfAccessControlledResource';
import { ResourceListOfAccessMetadataValueOf } from './resourceListOfAccessMetadataValueOf';
import { ResourceListOfAddressKeyDefinition } from './resourceListOfAddressKeyDefinition';
import { ResourceListOfAggregationQuery } from './resourceListOfAggregationQuery';
import { ResourceListOfAllocation } from './resourceListOfAllocation';
import { ResourceListOfBlock } from './resourceListOfBlock';
import { ResourceListOfBlockAndOrders } from './resourceListOfBlockAndOrders';
import { ResourceListOfCalendarDate } from './resourceListOfCalendarDate';
import { ResourceListOfChange } from './resourceListOfChange';
import { ResourceListOfChangeHistory } from './resourceListOfChangeHistory';
import { ResourceListOfConstituentsAdjustmentHeader } from './resourceListOfConstituentsAdjustmentHeader';
import { ResourceListOfCorporateAction } from './resourceListOfCorporateAction';
import { ResourceListOfDataType } from './resourceListOfDataType';
import { ResourceListOfExecution } from './resourceListOfExecution';
import { ResourceListOfGetCounterpartyAgreementResponse } from './resourceListOfGetCounterpartyAgreementResponse';
import { ResourceListOfGetCreditSupportAnnexResponse } from './resourceListOfGetCreditSupportAnnexResponse';
import { ResourceListOfGetRecipeResponse } from './resourceListOfGetRecipeResponse';
import { ResourceListOfHoldingsAdjustmentHeader } from './resourceListOfHoldingsAdjustmentHeader';
import { ResourceListOfIUnitDefinitionDto } from './resourceListOfIUnitDefinitionDto';
import { ResourceListOfInstrumentIdTypeDescriptor } from './resourceListOfInstrumentIdTypeDescriptor';
import { ResourceListOfLegalEntity } from './resourceListOfLegalEntity';
import { ResourceListOfMapping } from './resourceListOfMapping';
import { ResourceListOfMovedOrderToDifferentBlockResponse } from './resourceListOfMovedOrderToDifferentBlockResponse';
import { ResourceListOfOrder } from './resourceListOfOrder';
import { ResourceListOfParticipation } from './resourceListOfParticipation';
import { ResourceListOfPerformanceReturn } from './resourceListOfPerformanceReturn';
import { ResourceListOfPerson } from './resourceListOfPerson';
import { ResourceListOfPlacement } from './resourceListOfPlacement';
import { ResourceListOfPortfolio } from './resourceListOfPortfolio';
import { ResourceListOfPortfolioCashFlow } from './resourceListOfPortfolioCashFlow';
import { ResourceListOfPortfolioCashLadder } from './resourceListOfPortfolioCashLadder';
import { ResourceListOfProcessedCommand } from './resourceListOfProcessedCommand';
import { ResourceListOfProperty } from './resourceListOfProperty';
import { ResourceListOfPropertyDefinition } from './resourceListOfPropertyDefinition';
import { ResourceListOfPropertyInterval } from './resourceListOfPropertyInterval';
import { ResourceListOfQuote } from './resourceListOfQuote';
import { ResourceListOfReconciliationBreak } from './resourceListOfReconciliationBreak';
import { ResourceListOfRelation } from './resourceListOfRelation';
import { ResourceListOfRelationship } from './resourceListOfRelationship';
import { ResourceListOfScopeDefinition } from './resourceListOfScopeDefinition';
import { ResourceListOfSideDefinition } from './resourceListOfSideDefinition';
import { ResourceListOfString } from './resourceListOfString';
import { ResourceListOfTransactionType } from './resourceListOfTransactionType';
import { ResourceListOfValueType } from './resourceListOfValueType';
import { ResponseMetaData } from './responseMetaData';
import { ResultDataKeyRule } from './resultDataKeyRule';
import { ResultDataKeyRuleAllOf } from './resultDataKeyRuleAllOf';
import { ResultDataSchema } from './resultDataSchema';
import { ResultKeyRule } from './resultKeyRule';
import { ResultValue } from './resultValue';
import { ResultValue0D } from './resultValue0D';
import { ResultValue0DAllOf } from './resultValue0DAllOf';
import { ResultValueBool } from './resultValueBool';
import { ResultValueBoolAllOf } from './resultValueBoolAllOf';
import { ResultValueCurrency } from './resultValueCurrency';
import { ResultValueCurrencyAllOf } from './resultValueCurrencyAllOf';
import { ResultValueDateTimeOffset } from './resultValueDateTimeOffset';
import { ResultValueDateTimeOffsetAllOf } from './resultValueDateTimeOffsetAllOf';
import { ResultValueDecimal } from './resultValueDecimal';
import { ResultValueDecimalAllOf } from './resultValueDecimalAllOf';
import { ResultValueDictionary } from './resultValueDictionary';
import { ResultValueDictionaryAllOf } from './resultValueDictionaryAllOf';
import { ResultValueInt } from './resultValueInt';
import { ResultValueIntAllOf } from './resultValueIntAllOf';
import { ResultValueString } from './resultValueString';
import { ResultValueStringAllOf } from './resultValueStringAllOf';
import { RoundingConfiguration } from './roundingConfiguration';
import { RoundingConfigurationComponent } from './roundingConfigurationComponent';
import { RoundingConvention } from './roundingConvention';
import { Schedule } from './schedule';
import { Schema } from './schema';
import { ScopeDefinition } from './scopeDefinition';
import { ScriptMapReference } from './scriptMapReference';
import { SecurityElection } from './securityElection';
import { SequenceDefinition } from './sequenceDefinition';
import { SetLegalEntityIdentifiersRequest } from './setLegalEntityIdentifiersRequest';
import { SetLegalEntityPropertiesRequest } from './setLegalEntityPropertiesRequest';
import { SetPersonIdentifiersRequest } from './setPersonIdentifiersRequest';
import { SetPersonPropertiesRequest } from './setPersonPropertiesRequest';
import { SideConfigurationData } from './sideConfigurationData';
import { SideDefinition } from './sideDefinition';
import { SideDefinitionRequest } from './sideDefinitionRequest';
import { SidesDefinitionRequest } from './sidesDefinitionRequest';
import { SimpleCashFlowLoan } from './simpleCashFlowLoan';
import { SimpleCashFlowLoanAllOf } from './simpleCashFlowLoanAllOf';
import { SimpleInstrument } from './simpleInstrument';
import { SimpleInstrumentAllOf } from './simpleInstrumentAllOf';
import { StepSchedule } from './stepSchedule';
import { StepScheduleAllOf } from './stepScheduleAllOf';
import { StockSplitEvent } from './stockSplitEvent';
import { StockSplitEventAllOf } from './stockSplitEventAllOf';
import { Stream } from './stream';
import { StringComplianceParameter } from './stringComplianceParameter';
import { StringList } from './stringList';
import { StringListComplianceParameter } from './stringListComplianceParameter';
import { TargetTaxLot } from './targetTaxLot';
import { TargetTaxLotRequest } from './targetTaxLotRequest';
import { TermDeposit } from './termDeposit';
import { TermDepositAllOf } from './termDepositAllOf';
import { TotalReturnSwap } from './totalReturnSwap';
import { TotalReturnSwapAllOf } from './totalReturnSwapAllOf';
import { Touch } from './touch';
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
import { TransactionReconciliationRequest } from './transactionReconciliationRequest';
import { TransactionRequest } from './transactionRequest';
import { TransactionSetConfigurationData } from './transactionSetConfigurationData';
import { TransactionType } from './transactionType';
import { TransactionTypeAlias } from './transactionTypeAlias';
import { TransactionTypeCalculation } from './transactionTypeCalculation';
import { TransactionTypeMovement } from './transactionTypeMovement';
import { TransactionTypePropertyMapping } from './transactionTypePropertyMapping';
import { TransactionTypeRequest } from './transactionTypeRequest';
import { TransactionsReconciliationsResponse } from './transactionsReconciliationsResponse';
import { TransitionEvent } from './transitionEvent';
import { TransitionEventAllOf } from './transitionEventAllOf';
import { TranslateEntitiesInlinedRequest } from './translateEntitiesInlinedRequest';
import { TranslateEntitiesRequest } from './translateEntitiesRequest';
import { TranslateEntitiesResponse } from './translateEntitiesResponse';
import { TranslationContext } from './translationContext';
import { TranslationInput } from './translationInput';
import { TranslationResult } from './translationResult';
import { TranslationScript } from './translationScript';
import { TranslationScriptId } from './translationScriptId';
import { TriggerEvent } from './triggerEvent';
import { TriggerEventAllOf } from './triggerEventAllOf';
import { TypedResourceId } from './typedResourceId';
import { UnitsRatio } from './unitsRatio';
import { UpdateCalendarRequest } from './updateCalendarRequest';
import { UpdateCustomEntityDefinitionRequest } from './updateCustomEntityDefinitionRequest';
import { UpdateCustomEntityTypeRequest } from './updateCustomEntityTypeRequest';
import { UpdateCutLabelDefinitionRequest } from './updateCutLabelDefinitionRequest';
import { UpdateDataTypeRequest } from './updateDataTypeRequest';
import { UpdateDerivedPropertyDefinitionRequest } from './updateDerivedPropertyDefinitionRequest';
import { UpdateInstrumentIdentifierRequest } from './updateInstrumentIdentifierRequest';
import { UpdatePortfolioGroupRequest } from './updatePortfolioGroupRequest';
import { UpdatePortfolioRequest } from './updatePortfolioRequest';
import { UpdatePropertyDefinitionRequest } from './updatePropertyDefinitionRequest';
import { UpdateRelationshipDefinitionRequest } from './updateRelationshipDefinitionRequest';
import { UpdateUnitRequest } from './updateUnitRequest';
import { UpsertComplexMarketDataRequest } from './upsertComplexMarketDataRequest';
import { UpsertComplianceRuleRequest } from './upsertComplianceRuleRequest';
import { UpsertComplianceRunSummaryRequest } from './upsertComplianceRunSummaryRequest';
import { UpsertComplianceRunSummaryResult } from './upsertComplianceRunSummaryResult';
import { UpsertCorporateActionRequest } from './upsertCorporateActionRequest';
import { UpsertCorporateActionsResponse } from './upsertCorporateActionsResponse';
import { UpsertCounterpartyAgreementRequest } from './upsertCounterpartyAgreementRequest';
import { UpsertCreditSupportAnnexRequest } from './upsertCreditSupportAnnexRequest';
import { UpsertCustomEntitiesResponse } from './upsertCustomEntitiesResponse';
import { UpsertCustomEntityAccessMetadataRequest } from './upsertCustomEntityAccessMetadataRequest';
import { UpsertDialectRequest } from './upsertDialectRequest';
import { UpsertInstrumentEventRequest } from './upsertInstrumentEventRequest';
import { UpsertInstrumentEventsResponse } from './upsertInstrumentEventsResponse';
import { UpsertInstrumentPropertiesResponse } from './upsertInstrumentPropertiesResponse';
import { UpsertInstrumentPropertyRequest } from './upsertInstrumentPropertyRequest';
import { UpsertInstrumentsResponse } from './upsertInstrumentsResponse';
import { UpsertLegalEntitiesResponse } from './upsertLegalEntitiesResponse';
import { UpsertLegalEntityAccessMetadataRequest } from './upsertLegalEntityAccessMetadataRequest';
import { UpsertLegalEntityRequest } from './upsertLegalEntityRequest';
import { UpsertPersonAccessMetadataRequest } from './upsertPersonAccessMetadataRequest';
import { UpsertPersonRequest } from './upsertPersonRequest';
import { UpsertPortfolioAccessMetadataRequest } from './upsertPortfolioAccessMetadataRequest';
import { UpsertPortfolioGroupAccessMetadataRequest } from './upsertPortfolioGroupAccessMetadataRequest';
import { UpsertPortfolioTransactionsResponse } from './upsertPortfolioTransactionsResponse';
import { UpsertQuoteRequest } from './upsertQuoteRequest';
import { UpsertQuotesResponse } from './upsertQuotesResponse';
import { UpsertRecipeRequest } from './upsertRecipeRequest';
import { UpsertReferencePortfolioConstituentsRequest } from './upsertReferencePortfolioConstituentsRequest';
import { UpsertReferencePortfolioConstituentsResponse } from './upsertReferencePortfolioConstituentsResponse';
import { UpsertReturnsResponse } from './upsertReturnsResponse';
import { UpsertSingleStructuredDataResponse } from './upsertSingleStructuredDataResponse';
import { UpsertStructuredDataResponse } from './upsertStructuredDataResponse';
import { UpsertTransactionPropertiesResponse } from './upsertTransactionPropertiesResponse';
import { UpsertTranslationScriptRequest } from './upsertTranslationScriptRequest';
import { User } from './user';
import { ValuationRequest } from './valuationRequest';
import { ValuationSchedule } from './valuationSchedule';
import { ValuationsReconciliationRequest } from './valuationsReconciliationRequest';
import { ValueType } from './valueType';
import { VendorModelRule } from './vendorModelRule';
import { Version } from './version';
import { VersionSummaryDto } from './versionSummaryDto';
import { VersionedResourceListOfA2BDataRecord } from './versionedResourceListOfA2BDataRecord';
import { VersionedResourceListOfA2BMovementRecord } from './versionedResourceListOfA2BMovementRecord';
import { VersionedResourceListOfHoldingContributor } from './versionedResourceListOfHoldingContributor';
import { VersionedResourceListOfOutputTransaction } from './versionedResourceListOfOutputTransaction';
import { VersionedResourceListOfPortfolioHolding } from './versionedResourceListOfPortfolioHolding';
import { VersionedResourceListOfTransaction } from './versionedResourceListOfTransaction';
import { VirtualRow } from './virtualRow';
import { WeekendMask } from './weekendMask';
import { WeightedInstrument } from './weightedInstrument';
import { WeightedInstrumentInLineLookupIdentifiers } from './weightedInstrumentInLineLookupIdentifiers';
import { WeightedInstruments } from './weightedInstruments';
import { YieldCurveData } from './yieldCurveData';
import { YieldCurveDataAllOf } from './yieldCurveDataAllOf';

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
        "AccessMetadataOperation.OpEnum": AccessMetadataOperation.OpEnum,
        "AccumulationEvent.InstrumentEventTypeEnum": AccumulationEvent.InstrumentEventTypeEnum,
        "AccumulationEventAllOf.InstrumentEventTypeEnum": AccumulationEventAllOf.InstrumentEventTypeEnum,
        "AddressDefinition.TypeEnum": AddressDefinition.TypeEnum,
        "AddressKeyComplianceParameter.ComplianceParameterTypeEnum": AddressKeyComplianceParameter.ComplianceParameterTypeEnum,
        "AddressKeyComplianceParameterAllOf.ComplianceParameterTypeEnum": AddressKeyComplianceParameterAllOf.ComplianceParameterTypeEnum,
        "AddressKeyList.ReferenceListTypeEnum": AddressKeyList.ReferenceListTypeEnum,
        "AddressKeyListAllOf.ReferenceListTypeEnum": AddressKeyListAllOf.ReferenceListTypeEnum,
        "AddressKeyListComplianceParameter.ComplianceParameterTypeEnum": AddressKeyListComplianceParameter.ComplianceParameterTypeEnum,
        "AddressKeyListComplianceParameterAllOf.ComplianceParameterTypeEnum": AddressKeyListComplianceParameterAllOf.ComplianceParameterTypeEnum,
        "AggregateSpec.OpEnum": AggregateSpec.OpEnum,
        "AggregationQuery.TypeEnum": AggregationQuery.TypeEnum,
        "AggregationQuery.FlattenedTypeEnum": AggregationQuery.FlattenedTypeEnum,
        "AmortisationEvent.InstrumentEventTypeEnum": AmortisationEvent.InstrumentEventTypeEnum,
        "AmortisationEventAllOf.InstrumentEventTypeEnum": AmortisationEventAllOf.InstrumentEventTypeEnum,
        "Basket.InstrumentTypeEnum": Basket.InstrumentTypeEnum,
        "BasketAllOf.InstrumentTypeEnum": BasketAllOf.InstrumentTypeEnum,
        "Bond.InstrumentTypeEnum": Bond.InstrumentTypeEnum,
        "BondAllOf.InstrumentTypeEnum": BondAllOf.InstrumentTypeEnum,
        "BondCouponEvent.InstrumentEventTypeEnum": BondCouponEvent.InstrumentEventTypeEnum,
        "BondCouponEventAllOf.InstrumentEventTypeEnum": BondCouponEventAllOf.InstrumentEventTypeEnum,
        "BondDefaultEvent.InstrumentEventTypeEnum": BondDefaultEvent.InstrumentEventTypeEnum,
        "BondDefaultEventAllOf.InstrumentEventTypeEnum": BondDefaultEventAllOf.InstrumentEventTypeEnum,
        "BondPrincipalEvent.InstrumentEventTypeEnum": BondPrincipalEvent.InstrumentEventTypeEnum,
        "BondPrincipalEventAllOf.InstrumentEventTypeEnum": BondPrincipalEventAllOf.InstrumentEventTypeEnum,
        "BoolComplianceParameter.ComplianceParameterTypeEnum": BoolComplianceParameter.ComplianceParameterTypeEnum,
        "BoolComplianceParameterAllOf.ComplianceParameterTypeEnum": BoolComplianceParameterAllOf.ComplianceParameterTypeEnum,
        "BoolListComplianceParameter.ComplianceParameterTypeEnum": BoolListComplianceParameter.ComplianceParameterTypeEnum,
        "BranchStep.ComplianceStepTypeEnum": BranchStep.ComplianceStepTypeEnum,
        "BranchStepAllOf.ComplianceStepTypeEnum": BranchStepAllOf.ComplianceStepTypeEnum,
        "CalendarDependency.DependencyTypeEnum": CalendarDependency.DependencyTypeEnum,
        "CalendarDependencyAllOf.DependencyTypeEnum": CalendarDependencyAllOf.DependencyTypeEnum,
        "CapFloor.InstrumentTypeEnum": CapFloor.InstrumentTypeEnum,
        "CapFloorAllOf.InstrumentTypeEnum": CapFloorAllOf.InstrumentTypeEnum,
        "CashDependency.DependencyTypeEnum": CashDependency.DependencyTypeEnum,
        "CashDependencyAllOf.DependencyTypeEnum": CashDependencyAllOf.DependencyTypeEnum,
        "CashDividendEvent.InstrumentEventTypeEnum": CashDividendEvent.InstrumentEventTypeEnum,
        "CashDividendEventAllOf.InstrumentEventTypeEnum": CashDividendEventAllOf.InstrumentEventTypeEnum,
        "CashFlowEvent.InstrumentEventTypeEnum": CashFlowEvent.InstrumentEventTypeEnum,
        "CashFlowEventAllOf.InstrumentEventTypeEnum": CashFlowEventAllOf.InstrumentEventTypeEnum,
        "CashFlowValue.ResultValueTypeEnum": CashFlowValue.ResultValueTypeEnum,
        "CashFlowValueAllOf.ResultValueTypeEnum": CashFlowValueAllOf.ResultValueTypeEnum,
        "CashFlowValueSet.ResultValueTypeEnum": CashFlowValueSet.ResultValueTypeEnum,
        "CashFlowValueSetAllOf.ResultValueTypeEnum": CashFlowValueSetAllOf.ResultValueTypeEnum,
        "CashPerpetual.InstrumentTypeEnum": CashPerpetual.InstrumentTypeEnum,
        "CashPerpetualAllOf.InstrumentTypeEnum": CashPerpetualAllOf.InstrumentTypeEnum,
        "CdsIndex.InstrumentTypeEnum": CdsIndex.InstrumentTypeEnum,
        "CdsIndexAllOf.InstrumentTypeEnum": CdsIndexAllOf.InstrumentTypeEnum,
        "ChangeHistory.ActionEnum": ChangeHistory.ActionEnum,
        "CheckStep.ComplianceStepTypeEnum": CheckStep.ComplianceStepTypeEnum,
        "CheckStepAllOf.ComplianceStepTypeEnum": CheckStepAllOf.ComplianceStepTypeEnum,
        "CloseEvent.InstrumentEventTypeEnum": CloseEvent.InstrumentEventTypeEnum,
        "CloseEventAllOf.InstrumentEventTypeEnum": CloseEventAllOf.InstrumentEventTypeEnum,
        "CompletePortfolio.TypeEnum": CompletePortfolio.TypeEnum,
        "ComplexBond.InstrumentTypeEnum": ComplexBond.InstrumentTypeEnum,
        "ComplexBondAllOf.InstrumentTypeEnum": ComplexBondAllOf.InstrumentTypeEnum,
        "ComplexMarketData.MarketDataTypeEnum": ComplexMarketData.MarketDataTypeEnum,
        "ComplianceParameter.ComplianceParameterTypeEnum": ComplianceParameter.ComplianceParameterTypeEnum,
        "ComplianceStep.ComplianceStepTypeEnum": ComplianceStep.ComplianceStepTypeEnum,
        "ConstantVolatilitySurface.MarketDataTypeEnum": ConstantVolatilitySurface.MarketDataTypeEnum,
        "ConstantVolatilitySurfaceAllOf.MarketDataTypeEnum": ConstantVolatilitySurfaceAllOf.MarketDataTypeEnum,
        "ContractForDifference.InstrumentTypeEnum": ContractForDifference.InstrumentTypeEnum,
        "ContractForDifferenceAllOf.InstrumentTypeEnum": ContractForDifferenceAllOf.InstrumentTypeEnum,
        "CreateDataTypeRequest.TypeValueRangeEnum": CreateDataTypeRequest.TypeValueRangeEnum,
        "CreateDataTypeRequest.ValueTypeEnum": CreateDataTypeRequest.ValueTypeEnum,
        "CreateDataTypeRequest.UnitSchemaEnum": CreateDataTypeRequest.UnitSchemaEnum,
        "CreateDerivedPropertyDefinitionRequest.DomainEnum": CreateDerivedPropertyDefinitionRequest.DomainEnum,
        "CreateDerivedTransactionPortfolioRequest.AccountingMethodEnum": CreateDerivedTransactionPortfolioRequest.AccountingMethodEnum,
        "CreatePropertyDefinitionRequest.DomainEnum": CreatePropertyDefinitionRequest.DomainEnum,
        "CreatePropertyDefinitionRequest.LifeTimeEnum": CreatePropertyDefinitionRequest.LifeTimeEnum,
        "CreateTransactionPortfolioRequest.AccountingMethodEnum": CreateTransactionPortfolioRequest.AccountingMethodEnum,
        "CreditDefaultSwap.InstrumentTypeEnum": CreditDefaultSwap.InstrumentTypeEnum,
        "CreditDefaultSwapAllOf.InstrumentTypeEnum": CreditDefaultSwapAllOf.InstrumentTypeEnum,
        "CreditSpreadCurveData.MarketDataTypeEnum": CreditSpreadCurveData.MarketDataTypeEnum,
        "CreditSpreadCurveDataAllOf.MarketDataTypeEnum": CreditSpreadCurveDataAllOf.MarketDataTypeEnum,
        "DataType.TypeValueRangeEnum": DataType.TypeValueRangeEnum,
        "DataType.ValueTypeEnum": DataType.ValueTypeEnum,
        "DataType.UnitSchemaEnum": DataType.UnitSchemaEnum,
        "DataTypeSummary.TypeValueRangeEnum": DataTypeSummary.TypeValueRangeEnum,
        "DataTypeSummary.ValueTypeEnum": DataTypeSummary.ValueTypeEnum,
        "DataTypeSummary.UnitSchemaEnum": DataTypeSummary.UnitSchemaEnum,
        "DateTimeComplianceParameter.ComplianceParameterTypeEnum": DateTimeComplianceParameter.ComplianceParameterTypeEnum,
        "DateTimeComplianceParameterAllOf.ComplianceParameterTypeEnum": DateTimeComplianceParameterAllOf.ComplianceParameterTypeEnum,
        "DateTimeListComplianceParameter.ComplianceParameterTypeEnum": DateTimeListComplianceParameter.ComplianceParameterTypeEnum,
        "DayOfWeek": DayOfWeek,
        "DecimalComplianceParameter.ComplianceParameterTypeEnum": DecimalComplianceParameter.ComplianceParameterTypeEnum,
        "DecimalComplianceParameterAllOf.ComplianceParameterTypeEnum": DecimalComplianceParameterAllOf.ComplianceParameterTypeEnum,
        "DecimalList.ReferenceListTypeEnum": DecimalList.ReferenceListTypeEnum,
        "DecimalListAllOf.ReferenceListTypeEnum": DecimalListAllOf.ReferenceListTypeEnum,
        "DecimalListComplianceParameter.ComplianceParameterTypeEnum": DecimalListComplianceParameter.ComplianceParameterTypeEnum,
        "DiscountFactorCurveData.MarketDataTypeEnum": DiscountFactorCurveData.MarketDataTypeEnum,
        "DiscountFactorCurveDataAllOf.MarketDataTypeEnum": DiscountFactorCurveDataAllOf.MarketDataTypeEnum,
        "DiscountingDependency.DependencyTypeEnum": DiscountingDependency.DependencyTypeEnum,
        "DiscountingDependencyAllOf.DependencyTypeEnum": DiscountingDependencyAllOf.DependencyTypeEnum,
        "DividendOptionEvent.InstrumentEventTypeEnum": DividendOptionEvent.InstrumentEventTypeEnum,
        "DividendOptionEventAllOf.InstrumentEventTypeEnum": DividendOptionEventAllOf.InstrumentEventTypeEnum,
        "DividendReinvestmentEvent.InstrumentEventTypeEnum": DividendReinvestmentEvent.InstrumentEventTypeEnum,
        "DividendReinvestmentEventAllOf.InstrumentEventTypeEnum": DividendReinvestmentEventAllOf.InstrumentEventTypeEnum,
        "EconomicDependency.DependencyTypeEnum": EconomicDependency.DependencyTypeEnum,
        "EmptyModelOptions.ModelOptionsTypeEnum": EmptyModelOptions.ModelOptionsTypeEnum,
        "EmptyModelOptionsAllOf.ModelOptionsTypeEnum": EmptyModelOptionsAllOf.ModelOptionsTypeEnum,
        "Equity.InstrumentTypeEnum": Equity.InstrumentTypeEnum,
        "EquityAllOf.InstrumentTypeEnum": EquityAllOf.InstrumentTypeEnum,
        "EquityCurveByPricesData.MarketDataTypeEnum": EquityCurveByPricesData.MarketDataTypeEnum,
        "EquityCurveByPricesDataAllOf.MarketDataTypeEnum": EquityCurveByPricesDataAllOf.MarketDataTypeEnum,
        "EquityCurveDependency.DependencyTypeEnum": EquityCurveDependency.DependencyTypeEnum,
        "EquityCurveDependencyAllOf.DependencyTypeEnum": EquityCurveDependencyAllOf.DependencyTypeEnum,
        "EquityModelOptions.ModelOptionsTypeEnum": EquityModelOptions.ModelOptionsTypeEnum,
        "EquityModelOptionsAllOf.ModelOptionsTypeEnum": EquityModelOptionsAllOf.ModelOptionsTypeEnum,
        "EquityOption.InstrumentTypeEnum": EquityOption.InstrumentTypeEnum,
        "EquityOptionAllOf.InstrumentTypeEnum": EquityOptionAllOf.InstrumentTypeEnum,
        "EquitySwap.InstrumentTypeEnum": EquitySwap.InstrumentTypeEnum,
        "EquitySwapAllOf.InstrumentTypeEnum": EquitySwapAllOf.InstrumentTypeEnum,
        "EquityVolDependency.DependencyTypeEnum": EquityVolDependency.DependencyTypeEnum,
        "EquityVolDependencyAllOf.DependencyTypeEnum": EquityVolDependencyAllOf.DependencyTypeEnum,
        "EquityVolSurfaceData.MarketDataTypeEnum": EquityVolSurfaceData.MarketDataTypeEnum,
        "EquityVolSurfaceDataAllOf.MarketDataTypeEnum": EquityVolSurfaceDataAllOf.MarketDataTypeEnum,
        "ExchangeTradedOption.InstrumentTypeEnum": ExchangeTradedOption.InstrumentTypeEnum,
        "ExchangeTradedOptionAllOf.InstrumentTypeEnum": ExchangeTradedOptionAllOf.InstrumentTypeEnum,
        "ExerciseEvent.InstrumentEventTypeEnum": ExerciseEvent.InstrumentEventTypeEnum,
        "ExerciseEventAllOf.InstrumentEventTypeEnum": ExerciseEventAllOf.InstrumentEventTypeEnum,
        "ExoticInstrument.InstrumentTypeEnum": ExoticInstrument.InstrumentTypeEnum,
        "ExoticInstrumentAllOf.InstrumentTypeEnum": ExoticInstrumentAllOf.InstrumentTypeEnum,
        "FieldSchema.TypeEnum": FieldSchema.TypeEnum,
        "FilterPredicateComplianceParameter.ComplianceParameterTypeEnum": FilterPredicateComplianceParameter.ComplianceParameterTypeEnum,
        "FilterPredicateComplianceParameterAllOf.ComplianceParameterTypeEnum": FilterPredicateComplianceParameterAllOf.ComplianceParameterTypeEnum,
        "FilterStep.ComplianceStepTypeEnum": FilterStep.ComplianceStepTypeEnum,
        "FixedLeg.InstrumentTypeEnum": FixedLeg.InstrumentTypeEnum,
        "FixedLegAllOf.InstrumentTypeEnum": FixedLegAllOf.InstrumentTypeEnum,
        "FlexibleLoan.InstrumentTypeEnum": FlexibleLoan.InstrumentTypeEnum,
        "FlexibleLoanAllOf.InstrumentTypeEnum": FlexibleLoanAllOf.InstrumentTypeEnum,
        "FloatingLeg.InstrumentTypeEnum": FloatingLeg.InstrumentTypeEnum,
        "FloatingLegAllOf.InstrumentTypeEnum": FloatingLegAllOf.InstrumentTypeEnum,
        "ForwardRateAgreement.InstrumentTypeEnum": ForwardRateAgreement.InstrumentTypeEnum,
        "ForwardRateAgreementAllOf.InstrumentTypeEnum": ForwardRateAgreementAllOf.InstrumentTypeEnum,
        "FundShareClass.InstrumentTypeEnum": FundShareClass.InstrumentTypeEnum,
        "FundShareClassAllOf.InstrumentTypeEnum": FundShareClassAllOf.InstrumentTypeEnum,
        "FundingLeg.InstrumentTypeEnum": FundingLeg.InstrumentTypeEnum,
        "FundingLegAllOf.InstrumentTypeEnum": FundingLegAllOf.InstrumentTypeEnum,
        "Future.InstrumentTypeEnum": Future.InstrumentTypeEnum,
        "FutureAllOf.InstrumentTypeEnum": FutureAllOf.InstrumentTypeEnum,
        "FxDependency.DependencyTypeEnum": FxDependency.DependencyTypeEnum,
        "FxDependencyAllOf.DependencyTypeEnum": FxDependencyAllOf.DependencyTypeEnum,
        "FxForward.InstrumentTypeEnum": FxForward.InstrumentTypeEnum,
        "FxForwardAllOf.InstrumentTypeEnum": FxForwardAllOf.InstrumentTypeEnum,
        "FxForwardCurveByQuoteReference.MarketDataTypeEnum": FxForwardCurveByQuoteReference.MarketDataTypeEnum,
        "FxForwardCurveByQuoteReferenceAllOf.MarketDataTypeEnum": FxForwardCurveByQuoteReferenceAllOf.MarketDataTypeEnum,
        "FxForwardCurveData.MarketDataTypeEnum": FxForwardCurveData.MarketDataTypeEnum,
        "FxForwardCurveDataAllOf.MarketDataTypeEnum": FxForwardCurveDataAllOf.MarketDataTypeEnum,
        "FxForwardModelOptions.ForwardRateObservableTypeEnum": FxForwardModelOptions.ForwardRateObservableTypeEnum,
        "FxForwardModelOptions.DiscountingMethodEnum": FxForwardModelOptions.DiscountingMethodEnum,
        "FxForwardModelOptions.ModelOptionsTypeEnum": FxForwardModelOptions.ModelOptionsTypeEnum,
        "FxForwardModelOptionsAllOf.ForwardRateObservableTypeEnum": FxForwardModelOptionsAllOf.ForwardRateObservableTypeEnum,
        "FxForwardModelOptionsAllOf.DiscountingMethodEnum": FxForwardModelOptionsAllOf.DiscountingMethodEnum,
        "FxForwardModelOptionsAllOf.ModelOptionsTypeEnum": FxForwardModelOptionsAllOf.ModelOptionsTypeEnum,
        "FxForwardPipsCurveData.MarketDataTypeEnum": FxForwardPipsCurveData.MarketDataTypeEnum,
        "FxForwardPipsCurveDataAllOf.MarketDataTypeEnum": FxForwardPipsCurveDataAllOf.MarketDataTypeEnum,
        "FxForwardSettlementEvent.InstrumentEventTypeEnum": FxForwardSettlementEvent.InstrumentEventTypeEnum,
        "FxForwardSettlementEventAllOf.InstrumentEventTypeEnum": FxForwardSettlementEventAllOf.InstrumentEventTypeEnum,
        "FxForwardTenorCurveData.MarketDataTypeEnum": FxForwardTenorCurveData.MarketDataTypeEnum,
        "FxForwardTenorCurveDataAllOf.MarketDataTypeEnum": FxForwardTenorCurveDataAllOf.MarketDataTypeEnum,
        "FxForwardTenorPipsCurveData.MarketDataTypeEnum": FxForwardTenorPipsCurveData.MarketDataTypeEnum,
        "FxForwardTenorPipsCurveDataAllOf.MarketDataTypeEnum": FxForwardTenorPipsCurveDataAllOf.MarketDataTypeEnum,
        "FxForwardsDependency.DependencyTypeEnum": FxForwardsDependency.DependencyTypeEnum,
        "FxForwardsDependencyAllOf.DependencyTypeEnum": FxForwardsDependencyAllOf.DependencyTypeEnum,
        "FxLinkedNotionalSchedule.ScheduleTypeEnum": FxLinkedNotionalSchedule.ScheduleTypeEnum,
        "FxLinkedNotionalScheduleAllOf.ScheduleTypeEnum": FxLinkedNotionalScheduleAllOf.ScheduleTypeEnum,
        "FxOption.InstrumentTypeEnum": FxOption.InstrumentTypeEnum,
        "FxOptionAllOf.InstrumentTypeEnum": FxOptionAllOf.InstrumentTypeEnum,
        "FxSwap.InstrumentTypeEnum": FxSwap.InstrumentTypeEnum,
        "FxSwapAllOf.InstrumentTypeEnum": FxSwapAllOf.InstrumentTypeEnum,
        "FxVolDependency.DependencyTypeEnum": FxVolDependency.DependencyTypeEnum,
        "FxVolDependencyAllOf.DependencyTypeEnum": FxVolDependencyAllOf.DependencyTypeEnum,
        "FxVolSurfaceData.MarketDataTypeEnum": FxVolSurfaceData.MarketDataTypeEnum,
        "GetReferencePortfolioConstituentsResponse.WeightTypeEnum": GetReferencePortfolioConstituentsResponse.WeightTypeEnum,
        "GetReferencePortfolioConstituentsResponse.PeriodTypeEnum": GetReferencePortfolioConstituentsResponse.PeriodTypeEnum,
        "GroupBySelectorComplianceParameter.ComplianceParameterTypeEnum": GroupBySelectorComplianceParameter.ComplianceParameterTypeEnum,
        "GroupByStep.ComplianceStepTypeEnum": GroupByStep.ComplianceStepTypeEnum,
        "GroupFilterPredicateComplianceParameter.ComplianceParameterTypeEnum": GroupFilterPredicateComplianceParameter.ComplianceParameterTypeEnum,
        "GroupFilterStep.ComplianceStepTypeEnum": GroupFilterStep.ComplianceStepTypeEnum,
        "HoldingsAdjustment.UnmatchedHoldingMethodEnum": HoldingsAdjustment.UnmatchedHoldingMethodEnum,
        "HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum": HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum,
        "IUnitDefinitionDto.SchemaEnum": IUnitDefinitionDto.SchemaEnum,
        "IndexModelOptions.PortfolioScalingEnum": IndexModelOptions.PortfolioScalingEnum,
        "IndexModelOptions.ModelOptionsTypeEnum": IndexModelOptions.ModelOptionsTypeEnum,
        "IndexModelOptionsAllOf.PortfolioScalingEnum": IndexModelOptionsAllOf.PortfolioScalingEnum,
        "IndexModelOptionsAllOf.ModelOptionsTypeEnum": IndexModelOptionsAllOf.ModelOptionsTypeEnum,
        "IndexProjectionDependency.DependencyTypeEnum": IndexProjectionDependency.DependencyTypeEnum,
        "IndexProjectionDependencyAllOf.DependencyTypeEnum": IndexProjectionDependencyAllOf.DependencyTypeEnum,
        "InflationFixingDependency.DependencyTypeEnum": InflationFixingDependency.DependencyTypeEnum,
        "InflationFixingDependencyAllOf.DependencyTypeEnum": InflationFixingDependencyAllOf.DependencyTypeEnum,
        "InflationLeg.InstrumentTypeEnum": InflationLeg.InstrumentTypeEnum,
        "InflationLegAllOf.InstrumentTypeEnum": InflationLegAllOf.InstrumentTypeEnum,
        "InflationLinkedBond.InstrumentTypeEnum": InflationLinkedBond.InstrumentTypeEnum,
        "InflationLinkedBondAllOf.InstrumentTypeEnum": InflationLinkedBondAllOf.InstrumentTypeEnum,
        "InflationSwap.InstrumentTypeEnum": InflationSwap.InstrumentTypeEnum,
        "InflationSwapAllOf.InstrumentTypeEnum": InflationSwapAllOf.InstrumentTypeEnum,
        "InformationalErrorEvent.InstrumentEventTypeEnum": InformationalErrorEvent.InstrumentEventTypeEnum,
        "InformationalErrorEventAllOf.InstrumentEventTypeEnum": InformationalErrorEventAllOf.InstrumentEventTypeEnum,
        "InformationalEvent.InstrumentEventTypeEnum": InformationalEvent.InstrumentEventTypeEnum,
        "InformationalEventAllOf.InstrumentEventTypeEnum": InformationalEventAllOf.InstrumentEventTypeEnum,
        "Instrument.StateEnum": Instrument.StateEnum,
        "Instrument.AssetClassEnum": Instrument.AssetClassEnum,
        "InstrumentEvent.InstrumentEventTypeEnum": InstrumentEvent.InstrumentEventTypeEnum,
        "InstrumentLeg.InstrumentTypeEnum": InstrumentLeg.InstrumentTypeEnum,
        "InstrumentLegAllOf.InstrumentTypeEnum": InstrumentLegAllOf.InstrumentTypeEnum,
        "InstrumentList.ReferenceListTypeEnum": InstrumentList.ReferenceListTypeEnum,
        "InstrumentListAllOf.ReferenceListTypeEnum": InstrumentListAllOf.ReferenceListTypeEnum,
        "InstrumentListComplianceParameter.ComplianceParameterTypeEnum": InstrumentListComplianceParameter.ComplianceParameterTypeEnum,
        "InterestRateSwap.InstrumentTypeEnum": InterestRateSwap.InstrumentTypeEnum,
        "InterestRateSwapAllOf.InstrumentTypeEnum": InterestRateSwapAllOf.InstrumentTypeEnum,
        "InterestRateSwaption.InstrumentTypeEnum": InterestRateSwaption.InstrumentTypeEnum,
        "InterestRateSwaptionAllOf.InstrumentTypeEnum": InterestRateSwaptionAllOf.InstrumentTypeEnum,
        "IrVolCubeData.MarketDataTypeEnum": IrVolCubeData.MarketDataTypeEnum,
        "IrVolCubeDataAllOf.MarketDataTypeEnum": IrVolCubeDataAllOf.MarketDataTypeEnum,
        "IrVolDependency.DependencyTypeEnum": IrVolDependency.DependencyTypeEnum,
        "IrVolDependencyAllOf.DependencyTypeEnum": IrVolDependencyAllOf.DependencyTypeEnum,
        "LifeCycleEventValue.ResultValueTypeEnum": LifeCycleEventValue.ResultValueTypeEnum,
        "LifeCycleEventValueAllOf.ResultValueTypeEnum": LifeCycleEventValueAllOf.ResultValueTypeEnum,
        "LusidInstrument.InstrumentTypeEnum": LusidInstrument.InstrumentTypeEnum,
        "LusidTradeTicket.TradeTicketTypeEnum": LusidTradeTicket.TradeTicketTypeEnum,
        "MarketDataKeyRule.QuoteTypeEnum": MarketDataKeyRule.QuoteTypeEnum,
        "MarketDataOptions.MarketDataOptionsTypeEnum": MarketDataOptions.MarketDataOptionsTypeEnum,
        "MarketDataSpecificRule.QuoteTypeEnum": MarketDataSpecificRule.QuoteTypeEnum,
        "MarketQuote.QuoteTypeEnum": MarketQuote.QuoteTypeEnum,
        "MaturityEvent.InstrumentEventTypeEnum": MaturityEvent.InstrumentEventTypeEnum,
        "MaturityEventAllOf.InstrumentEventTypeEnum": MaturityEventAllOf.InstrumentEventTypeEnum,
        "ModelOptions.ModelOptionsTypeEnum": ModelOptions.ModelOptionsTypeEnum,
        "ModelSelection.LibraryEnum": ModelSelection.LibraryEnum,
        "ModelSelection.ModelEnum": ModelSelection.ModelEnum,
        "OpaqueDependency.DependencyTypeEnum": OpaqueDependency.DependencyTypeEnum,
        "OpaqueDependencyAllOf.DependencyTypeEnum": OpaqueDependencyAllOf.DependencyTypeEnum,
        "OpaqueMarketData.MarketDataTypeEnum": OpaqueMarketData.MarketDataTypeEnum,
        "OpaqueMarketDataAllOf.MarketDataTypeEnum": OpaqueMarketDataAllOf.MarketDataTypeEnum,
        "OpaqueModelOptions.ModelOptionsTypeEnum": OpaqueModelOptions.ModelOptionsTypeEnum,
        "OpaqueModelOptionsAllOf.ModelOptionsTypeEnum": OpaqueModelOptionsAllOf.ModelOptionsTypeEnum,
        "OpenEvent.InstrumentEventTypeEnum": OpenEvent.InstrumentEventTypeEnum,
        "OpenEventAllOf.InstrumentEventTypeEnum": OpenEventAllOf.InstrumentEventTypeEnum,
        "OrderBySpec.SortOrderEnum": OrderBySpec.SortOrderEnum,
        "OutputTransaction.TransactionStatusEnum": OutputTransaction.TransactionStatusEnum,
        "Portfolio.TypeEnum": Portfolio.TypeEnum,
        "Portfolio.AccountingMethodEnum": Portfolio.AccountingMethodEnum,
        "PortfolioDetails.AccountingMethodEnum": PortfolioDetails.AccountingMethodEnum,
        "PortfolioGroupIdComplianceParameter.ComplianceParameterTypeEnum": PortfolioGroupIdComplianceParameter.ComplianceParameterTypeEnum,
        "PortfolioGroupIdList.ReferenceListTypeEnum": PortfolioGroupIdList.ReferenceListTypeEnum,
        "PortfolioGroupIdListAllOf.ReferenceListTypeEnum": PortfolioGroupIdListAllOf.ReferenceListTypeEnum,
        "PortfolioGroupIdListComplianceParameter.ComplianceParameterTypeEnum": PortfolioGroupIdListComplianceParameter.ComplianceParameterTypeEnum,
        "PortfolioIdComplianceParameter.ComplianceParameterTypeEnum": PortfolioIdComplianceParameter.ComplianceParameterTypeEnum,
        "PortfolioIdList.ReferenceListTypeEnum": PortfolioIdList.ReferenceListTypeEnum,
        "PortfolioIdListComplianceParameter.ComplianceParameterTypeEnum": PortfolioIdListComplianceParameter.ComplianceParameterTypeEnum,
        "PortfolioResultDataKeyRule.ResultKeyRuleTypeEnum": PortfolioResultDataKeyRule.ResultKeyRuleTypeEnum,
        "PortfolioResultDataKeyRuleAllOf.ResultKeyRuleTypeEnum": PortfolioResultDataKeyRuleAllOf.ResultKeyRuleTypeEnum,
        "PortfolioSearchResult.TypeEnum": PortfolioSearchResult.TypeEnum,
        "PropertyDefinition.ValueTypeEnum": PropertyDefinition.ValueTypeEnum,
        "PropertyDefinition.TypeEnum": PropertyDefinition.TypeEnum,
        "PropertyDefinition.UnitSchemaEnum": PropertyDefinition.UnitSchemaEnum,
        "PropertyDefinition.DomainEnum": PropertyDefinition.DomainEnum,
        "PropertyDefinition.LifeTimeEnum": PropertyDefinition.LifeTimeEnum,
        "PropertyDefinition.PropertyDefinitionTypeEnum": PropertyDefinition.PropertyDefinitionTypeEnum,
        "PropertyDefinitionSearchResult.ValueTypeEnum": PropertyDefinitionSearchResult.ValueTypeEnum,
        "PropertyDefinitionSearchResult.TypeEnum": PropertyDefinitionSearchResult.TypeEnum,
        "PropertyDefinitionSearchResult.UnitSchemaEnum": PropertyDefinitionSearchResult.UnitSchemaEnum,
        "PropertyDefinitionSearchResult.DomainEnum": PropertyDefinitionSearchResult.DomainEnum,
        "PropertyDefinitionSearchResult.LifeTimeEnum": PropertyDefinitionSearchResult.LifeTimeEnum,
        "PropertyDefinitionSearchResult.PropertyDefinitionTypeEnum": PropertyDefinitionSearchResult.PropertyDefinitionTypeEnum,
        "PropertyFilter.OperatorEnum": PropertyFilter.OperatorEnum,
        "PropertyFilter.RightOperandTypeEnum": PropertyFilter.RightOperandTypeEnum,
        "PropertyKeyComplianceParameter.ComplianceParameterTypeEnum": PropertyKeyComplianceParameter.ComplianceParameterTypeEnum,
        "PropertyKeyComplianceParameterAllOf.ComplianceParameterTypeEnum": PropertyKeyComplianceParameterAllOf.ComplianceParameterTypeEnum,
        "PropertyKeyListComplianceParameter.ComplianceParameterTypeEnum": PropertyKeyListComplianceParameter.ComplianceParameterTypeEnum,
        "QuoteDependency.DependencyTypeEnum": QuoteDependency.DependencyTypeEnum,
        "QuoteDependencyAllOf.DependencyTypeEnum": QuoteDependencyAllOf.DependencyTypeEnum,
        "QuoteSeriesId.InstrumentIdTypeEnum": QuoteSeriesId.InstrumentIdTypeEnum,
        "QuoteSeriesId.QuoteTypeEnum": QuoteSeriesId.QuoteTypeEnum,
        "RawVendorEvent.InstrumentEventTypeEnum": RawVendorEvent.InstrumentEventTypeEnum,
        "RawVendorEventAllOf.InstrumentEventTypeEnum": RawVendorEventAllOf.InstrumentEventTypeEnum,
        "RecombineStep.ComplianceStepTypeEnum": RecombineStep.ComplianceStepTypeEnum,
        "ReconcileDateTimeRule.ComparisonTypeEnum": ReconcileDateTimeRule.ComparisonTypeEnum,
        "ReconcileDateTimeRule.RuleTypeEnum": ReconcileDateTimeRule.RuleTypeEnum,
        "ReconcileDateTimeRuleAllOf.ComparisonTypeEnum": ReconcileDateTimeRuleAllOf.ComparisonTypeEnum,
        "ReconcileDateTimeRuleAllOf.RuleTypeEnum": ReconcileDateTimeRuleAllOf.RuleTypeEnum,
        "ReconcileNumericRule.ComparisonTypeEnum": ReconcileNumericRule.ComparisonTypeEnum,
        "ReconcileNumericRule.RuleTypeEnum": ReconcileNumericRule.RuleTypeEnum,
        "ReconcileNumericRuleAllOf.ComparisonTypeEnum": ReconcileNumericRuleAllOf.ComparisonTypeEnum,
        "ReconcileNumericRuleAllOf.RuleTypeEnum": ReconcileNumericRuleAllOf.RuleTypeEnum,
        "ReconcileStringRule.ComparisonTypeEnum": ReconcileStringRule.ComparisonTypeEnum,
        "ReconcileStringRule.RuleTypeEnum": ReconcileStringRule.RuleTypeEnum,
        "ReconcileStringRuleAllOf.ComparisonTypeEnum": ReconcileStringRuleAllOf.ComparisonTypeEnum,
        "ReconcileStringRuleAllOf.RuleTypeEnum": ReconcileStringRuleAllOf.RuleTypeEnum,
        "ReconciliationRule.RuleTypeEnum": ReconciliationRule.RuleTypeEnum,
        "ReferenceInstrument.InstrumentTypeEnum": ReferenceInstrument.InstrumentTypeEnum,
        "ReferenceInstrumentAllOf.InstrumentTypeEnum": ReferenceInstrumentAllOf.InstrumentTypeEnum,
        "ReferenceList.ReferenceListTypeEnum": ReferenceList.ReferenceListTypeEnum,
        "Repo.InstrumentTypeEnum": Repo.InstrumentTypeEnum,
        "RepoAllOf.InstrumentTypeEnum": RepoAllOf.InstrumentTypeEnum,
        "ResetEvent.InstrumentEventTypeEnum": ResetEvent.InstrumentEventTypeEnum,
        "ResetEventAllOf.InstrumentEventTypeEnum": ResetEventAllOf.InstrumentEventTypeEnum,
        "ResultDataKeyRule.ResultKeyRuleTypeEnum": ResultDataKeyRule.ResultKeyRuleTypeEnum,
        "ResultDataKeyRuleAllOf.ResultKeyRuleTypeEnum": ResultDataKeyRuleAllOf.ResultKeyRuleTypeEnum,
        "ResultKeyRule.ResultKeyRuleTypeEnum": ResultKeyRule.ResultKeyRuleTypeEnum,
        "ResultValue.ResultValueTypeEnum": ResultValue.ResultValueTypeEnum,
        "ResultValue0D.ResultValueTypeEnum": ResultValue0D.ResultValueTypeEnum,
        "ResultValue0DAllOf.ResultValueTypeEnum": ResultValue0DAllOf.ResultValueTypeEnum,
        "ResultValueBool.ResultValueTypeEnum": ResultValueBool.ResultValueTypeEnum,
        "ResultValueBoolAllOf.ResultValueTypeEnum": ResultValueBoolAllOf.ResultValueTypeEnum,
        "ResultValueCurrency.ResultValueTypeEnum": ResultValueCurrency.ResultValueTypeEnum,
        "ResultValueCurrencyAllOf.ResultValueTypeEnum": ResultValueCurrencyAllOf.ResultValueTypeEnum,
        "ResultValueDateTimeOffset.ResultValueTypeEnum": ResultValueDateTimeOffset.ResultValueTypeEnum,
        "ResultValueDateTimeOffsetAllOf.ResultValueTypeEnum": ResultValueDateTimeOffsetAllOf.ResultValueTypeEnum,
        "ResultValueDecimal.ResultValueTypeEnum": ResultValueDecimal.ResultValueTypeEnum,
        "ResultValueDecimalAllOf.ResultValueTypeEnum": ResultValueDecimalAllOf.ResultValueTypeEnum,
        "ResultValueDictionary.ResultValueTypeEnum": ResultValueDictionary.ResultValueTypeEnum,
        "ResultValueDictionaryAllOf.ResultValueTypeEnum": ResultValueDictionaryAllOf.ResultValueTypeEnum,
        "ResultValueInt.ResultValueTypeEnum": ResultValueInt.ResultValueTypeEnum,
        "ResultValueIntAllOf.ResultValueTypeEnum": ResultValueIntAllOf.ResultValueTypeEnum,
        "ResultValueString.ResultValueTypeEnum": ResultValueString.ResultValueTypeEnum,
        "ResultValueStringAllOf.ResultValueTypeEnum": ResultValueStringAllOf.ResultValueTypeEnum,
        "Schedule.ScheduleTypeEnum": Schedule.ScheduleTypeEnum,
        "SimpleCashFlowLoan.InstrumentTypeEnum": SimpleCashFlowLoan.InstrumentTypeEnum,
        "SimpleCashFlowLoanAllOf.InstrumentTypeEnum": SimpleCashFlowLoanAllOf.InstrumentTypeEnum,
        "SimpleInstrument.AssetClassEnum": SimpleInstrument.AssetClassEnum,
        "SimpleInstrument.InstrumentTypeEnum": SimpleInstrument.InstrumentTypeEnum,
        "SimpleInstrumentAllOf.AssetClassEnum": SimpleInstrumentAllOf.AssetClassEnum,
        "SimpleInstrumentAllOf.InstrumentTypeEnum": SimpleInstrumentAllOf.InstrumentTypeEnum,
        "StepSchedule.ScheduleTypeEnum": StepSchedule.ScheduleTypeEnum,
        "StepScheduleAllOf.ScheduleTypeEnum": StepScheduleAllOf.ScheduleTypeEnum,
        "StockSplitEvent.InstrumentEventTypeEnum": StockSplitEvent.InstrumentEventTypeEnum,
        "StockSplitEventAllOf.InstrumentEventTypeEnum": StockSplitEventAllOf.InstrumentEventTypeEnum,
        "StringComplianceParameter.ComplianceParameterTypeEnum": StringComplianceParameter.ComplianceParameterTypeEnum,
        "StringList.ReferenceListTypeEnum": StringList.ReferenceListTypeEnum,
        "StringListComplianceParameter.ComplianceParameterTypeEnum": StringListComplianceParameter.ComplianceParameterTypeEnum,
        "TermDeposit.InstrumentTypeEnum": TermDeposit.InstrumentTypeEnum,
        "TermDepositAllOf.InstrumentTypeEnum": TermDepositAllOf.InstrumentTypeEnum,
        "TotalReturnSwap.InstrumentTypeEnum": TotalReturnSwap.InstrumentTypeEnum,
        "TotalReturnSwapAllOf.InstrumentTypeEnum": TotalReturnSwapAllOf.InstrumentTypeEnum,
        "Transaction.TransactionStatusEnum": Transaction.TransactionStatusEnum,
        "TransactionConfigurationMovementData.MovementTypesEnum": TransactionConfigurationMovementData.MovementTypesEnum,
        "TransactionConfigurationMovementDataRequest.MovementTypesEnum": TransactionConfigurationMovementDataRequest.MovementTypesEnum,
        "TransactionConfigurationTypeAlias.TransactionRolesEnum": TransactionConfigurationTypeAlias.TransactionRolesEnum,
        "TransactionPrice.TypeEnum": TransactionPrice.TypeEnum,
        "TransactionQueryParameters.QueryModeEnum": TransactionQueryParameters.QueryModeEnum,
        "TransitionEvent.InstrumentEventTypeEnum": TransitionEvent.InstrumentEventTypeEnum,
        "TransitionEventAllOf.InstrumentEventTypeEnum": TransitionEventAllOf.InstrumentEventTypeEnum,
        "TriggerEvent.InstrumentEventTypeEnum": TriggerEvent.InstrumentEventTypeEnum,
        "TriggerEventAllOf.InstrumentEventTypeEnum": TriggerEventAllOf.InstrumentEventTypeEnum,
        "UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum": UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum,
        "UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum": UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum,
        "ValueType": ValueType,
        "VendorModelRule.SupplierEnum": VendorModelRule.SupplierEnum,
        "YieldCurveData.MarketDataTypeEnum": YieldCurveData.MarketDataTypeEnum,
        "YieldCurveDataAllOf.MarketDataTypeEnum": YieldCurveDataAllOf.MarketDataTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "A2BBreakdown": A2BBreakdown,
    "A2BCategory": A2BCategory,
    "A2BDataRecord": A2BDataRecord,
    "A2BMovementRecord": A2BMovementRecord,
    "AccessControlledAction": AccessControlledAction,
    "AccessControlledResource": AccessControlledResource,
    "AccessMetadataOperation": AccessMetadataOperation,
    "AccessMetadataValue": AccessMetadataValue,
    "AccumulationEvent": AccumulationEvent,
    "AccumulationEventAllOf": AccumulationEventAllOf,
    "ActionId": ActionId,
    "ActionResultOfPortfolio": ActionResultOfPortfolio,
    "AddBusinessDaysToDateRequest": AddBusinessDaysToDateRequest,
    "AddBusinessDaysToDateResponse": AddBusinessDaysToDateResponse,
    "AdditionalPayment": AdditionalPayment,
    "AddressDefinition": AddressDefinition,
    "AddressKeyComplianceParameter": AddressKeyComplianceParameter,
    "AddressKeyComplianceParameterAllOf": AddressKeyComplianceParameterAllOf,
    "AddressKeyDefinition": AddressKeyDefinition,
    "AddressKeyFilter": AddressKeyFilter,
    "AddressKeyList": AddressKeyList,
    "AddressKeyListAllOf": AddressKeyListAllOf,
    "AddressKeyListComplianceParameter": AddressKeyListComplianceParameter,
    "AddressKeyListComplianceParameterAllOf": AddressKeyListComplianceParameterAllOf,
    "AddressKeyOptionDefinition": AddressKeyOptionDefinition,
    "AdjustHolding": AdjustHolding,
    "AdjustHoldingForDateRequest": AdjustHoldingForDateRequest,
    "AdjustHoldingRequest": AdjustHoldingRequest,
    "AggregateSpec": AggregateSpec,
    "AggregatedReturn": AggregatedReturn,
    "AggregatedReturnsDispersionRequest": AggregatedReturnsDispersionRequest,
    "AggregatedReturnsRequest": AggregatedReturnsRequest,
    "AggregatedReturnsResponse": AggregatedReturnsResponse,
    "AggregationContext": AggregationContext,
    "AggregationMeasureFailureDetail": AggregationMeasureFailureDetail,
    "AggregationOptions": AggregationOptions,
    "AggregationQuery": AggregationQuery,
    "Allocation": Allocation,
    "AllocationRequest": AllocationRequest,
    "AllocationSetRequest": AllocationSetRequest,
    "AmortisationEvent": AmortisationEvent,
    "AmortisationEventAllOf": AmortisationEventAllOf,
    "AnnulQuotesResponse": AnnulQuotesResponse,
    "AnnulSingleStructuredDataResponse": AnnulSingleStructuredDataResponse,
    "AnnulStructuredDataResponse": AnnulStructuredDataResponse,
    "AssetLeg": AssetLeg,
    "Barrier": Barrier,
    "Basket": Basket,
    "BasketAllOf": BasketAllOf,
    "BasketIdentifier": BasketIdentifier,
    "BatchAdjustHoldingsResponse": BatchAdjustHoldingsResponse,
    "BatchUpsertInstrumentPropertiesResponse": BatchUpsertInstrumentPropertiesResponse,
    "BatchUpsertPortfolioTransactionsResponse": BatchUpsertPortfolioTransactionsResponse,
    "BatchUpsertPropertyDefinitionPropertiesResponse": BatchUpsertPropertyDefinitionPropertiesResponse,
    "Block": Block,
    "BlockAndOrderIdRequest": BlockAndOrderIdRequest,
    "BlockAndOrders": BlockAndOrders,
    "BlockAndOrdersCreateRequest": BlockAndOrdersCreateRequest,
    "BlockAndOrdersRequest": BlockAndOrdersRequest,
    "BlockRequest": BlockRequest,
    "BlockSetRequest": BlockSetRequest,
    "BlockedOrderRequest": BlockedOrderRequest,
    "Bond": Bond,
    "BondAllOf": BondAllOf,
    "BondCouponEvent": BondCouponEvent,
    "BondCouponEventAllOf": BondCouponEventAllOf,
    "BondDefaultEvent": BondDefaultEvent,
    "BondDefaultEventAllOf": BondDefaultEventAllOf,
    "BondPrincipalEvent": BondPrincipalEvent,
    "BondPrincipalEventAllOf": BondPrincipalEventAllOf,
    "BoolComplianceParameter": BoolComplianceParameter,
    "BoolComplianceParameterAllOf": BoolComplianceParameterAllOf,
    "BoolListComplianceParameter": BoolListComplianceParameter,
    "BranchStep": BranchStep,
    "BranchStepAllOf": BranchStepAllOf,
    "Calendar": Calendar,
    "CalendarDate": CalendarDate,
    "CalendarDependency": CalendarDependency,
    "CalendarDependencyAllOf": CalendarDependencyAllOf,
    "CapFloor": CapFloor,
    "CapFloorAllOf": CapFloorAllOf,
    "CashDependency": CashDependency,
    "CashDependencyAllOf": CashDependencyAllOf,
    "CashDividendEvent": CashDividendEvent,
    "CashDividendEventAllOf": CashDividendEventAllOf,
    "CashElection": CashElection,
    "CashFlowEvent": CashFlowEvent,
    "CashFlowEventAllOf": CashFlowEventAllOf,
    "CashFlowLineage": CashFlowLineage,
    "CashFlowValue": CashFlowValue,
    "CashFlowValueAllOf": CashFlowValueAllOf,
    "CashFlowValueSet": CashFlowValueSet,
    "CashFlowValueSetAllOf": CashFlowValueSetAllOf,
    "CashLadderRecord": CashLadderRecord,
    "CashPerpetual": CashPerpetual,
    "CashPerpetualAllOf": CashPerpetualAllOf,
    "CdsFlowConventions": CdsFlowConventions,
    "CdsIndex": CdsIndex,
    "CdsIndexAllOf": CdsIndexAllOf,
    "CdsProtectionDetailSpecification": CdsProtectionDetailSpecification,
    "Change": Change,
    "ChangeHistory": ChangeHistory,
    "ChangeItem": ChangeItem,
    "CheckStep": CheckStep,
    "CheckStepAllOf": CheckStepAllOf,
    "CloseEvent": CloseEvent,
    "CloseEventAllOf": CloseEventAllOf,
    "CompletePortfolio": CompletePortfolio,
    "CompleteRelationship": CompleteRelationship,
    "ComplexBond": ComplexBond,
    "ComplexBondAllOf": ComplexBondAllOf,
    "ComplexMarketData": ComplexMarketData,
    "ComplexMarketDataId": ComplexMarketDataId,
    "ComplianceParameter": ComplianceParameter,
    "ComplianceRuleBreakdown": ComplianceRuleBreakdown,
    "ComplianceRuleBreakdownRequest": ComplianceRuleBreakdownRequest,
    "ComplianceRuleResponse": ComplianceRuleResponse,
    "ComplianceRuleResultDetail": ComplianceRuleResultDetail,
    "ComplianceRuleResultPortfolioDetail": ComplianceRuleResultPortfolioDetail,
    "ComplianceRuleResultV2": ComplianceRuleResultV2,
    "ComplianceRunInfoV2": ComplianceRunInfoV2,
    "ComplianceStep": ComplianceStep,
    "ComplianceSummaryRuleResult": ComplianceSummaryRuleResult,
    "ComplianceSummaryRuleResultRequest": ComplianceSummaryRuleResultRequest,
    "ComplianceTemplate": ComplianceTemplate,
    "ComplianceTemplateParameter": ComplianceTemplateParameter,
    "ComplianceTemplateVariation": ComplianceTemplateVariation,
    "CompositeBreakdown": CompositeBreakdown,
    "CompositeBreakdownRequest": CompositeBreakdownRequest,
    "CompositeBreakdownResponse": CompositeBreakdownResponse,
    "CompositeDispersion": CompositeDispersion,
    "CompositeDispersionResponse": CompositeDispersionResponse,
    "Compounding": Compounding,
    "ConfigurationRecipe": ConfigurationRecipe,
    "ConstantVolatilitySurface": ConstantVolatilitySurface,
    "ConstantVolatilitySurfaceAllOf": ConstantVolatilitySurfaceAllOf,
    "ConstituentsAdjustmentHeader": ConstituentsAdjustmentHeader,
    "ContractForDifference": ContractForDifference,
    "ContractForDifferenceAllOf": ContractForDifferenceAllOf,
    "CorporateAction": CorporateAction,
    "CorporateActionSource": CorporateActionSource,
    "CorporateActionTransition": CorporateActionTransition,
    "CorporateActionTransitionComponent": CorporateActionTransitionComponent,
    "CorporateActionTransitionComponentRequest": CorporateActionTransitionComponentRequest,
    "CorporateActionTransitionRequest": CorporateActionTransitionRequest,
    "CounterpartyAgreement": CounterpartyAgreement,
    "CounterpartyRiskInformation": CounterpartyRiskInformation,
    "CounterpartySignatory": CounterpartySignatory,
    "CreateAddressKeyDefinitionRequest": CreateAddressKeyDefinitionRequest,
    "CreateCalendarRequest": CreateCalendarRequest,
    "CreateCorporateActionSourceRequest": CreateCorporateActionSourceRequest,
    "CreateCustomEntityTypeRequest": CreateCustomEntityTypeRequest,
    "CreateCutLabelDefinitionRequest": CreateCutLabelDefinitionRequest,
    "CreateDataTypeRequest": CreateDataTypeRequest,
    "CreateDateRequest": CreateDateRequest,
    "CreateDerivedPropertyDefinitionRequest": CreateDerivedPropertyDefinitionRequest,
    "CreateDerivedTransactionPortfolioRequest": CreateDerivedTransactionPortfolioRequest,
    "CreatePortfolioDetails": CreatePortfolioDetails,
    "CreatePortfolioGroupRequest": CreatePortfolioGroupRequest,
    "CreatePropertyDefinitionRequest": CreatePropertyDefinitionRequest,
    "CreateReferencePortfolioRequest": CreateReferencePortfolioRequest,
    "CreateRelationshipDefinitionRequest": CreateRelationshipDefinitionRequest,
    "CreateRelationshipRequest": CreateRelationshipRequest,
    "CreateSequenceRequest": CreateSequenceRequest,
    "CreateTradeTicketsResponse": CreateTradeTicketsResponse,
    "CreateTransactionPortfolioRequest": CreateTransactionPortfolioRequest,
    "CreateUnitDefinition": CreateUnitDefinition,
    "CreditDefaultSwap": CreditDefaultSwap,
    "CreditDefaultSwapAllOf": CreditDefaultSwapAllOf,
    "CreditRating": CreditRating,
    "CreditSpreadCurveData": CreditSpreadCurveData,
    "CreditSpreadCurveDataAllOf": CreditSpreadCurveDataAllOf,
    "CreditSupportAnnex": CreditSupportAnnex,
    "CurrencyAndAmount": CurrencyAndAmount,
    "CustodianAccount": CustodianAccount,
    "CustomEntityDefinition": CustomEntityDefinition,
    "CustomEntityDefinitionRequest": CustomEntityDefinitionRequest,
    "CustomEntityField": CustomEntityField,
    "CustomEntityFieldDefinition": CustomEntityFieldDefinition,
    "CustomEntityId": CustomEntityId,
    "CustomEntityRequest": CustomEntityRequest,
    "CustomEntityResponse": CustomEntityResponse,
    "CustomEntityType": CustomEntityType,
    "CutLabelDefinition": CutLabelDefinition,
    "CutLocalTime": CutLocalTime,
    "DataType": DataType,
    "DataTypeSummary": DataTypeSummary,
    "DateAttributes": DateAttributes,
    "DateRange": DateRange,
    "DateTimeComplianceParameter": DateTimeComplianceParameter,
    "DateTimeComplianceParameterAllOf": DateTimeComplianceParameterAllOf,
    "DateTimeListComplianceParameter": DateTimeListComplianceParameter,
    "DecimalComplianceParameter": DecimalComplianceParameter,
    "DecimalComplianceParameterAllOf": DecimalComplianceParameterAllOf,
    "DecimalList": DecimalList,
    "DecimalListAllOf": DecimalListAllOf,
    "DecimalListComplianceParameter": DecimalListComplianceParameter,
    "DecoratedComplianceRunSummary": DecoratedComplianceRunSummary,
    "DeleteInstrumentPropertiesResponse": DeleteInstrumentPropertiesResponse,
    "DeleteInstrumentResponse": DeleteInstrumentResponse,
    "DeleteInstrumentsResponse": DeleteInstrumentsResponse,
    "DeleteRelationshipRequest": DeleteRelationshipRequest,
    "DeletedEntityResponse": DeletedEntityResponse,
    "DependencySourceFilter": DependencySourceFilter,
    "Dialect": Dialect,
    "DialectId": DialectId,
    "DialectSchema": DialectSchema,
    "DiscountFactorCurveData": DiscountFactorCurveData,
    "DiscountFactorCurveDataAllOf": DiscountFactorCurveDataAllOf,
    "DiscountingDependency": DiscountingDependency,
    "DiscountingDependencyAllOf": DiscountingDependencyAllOf,
    "DividendOptionEvent": DividendOptionEvent,
    "DividendOptionEventAllOf": DividendOptionEventAllOf,
    "DividendReinvestmentEvent": DividendReinvestmentEvent,
    "DividendReinvestmentEventAllOf": DividendReinvestmentEventAllOf,
    "EconomicDependency": EconomicDependency,
    "EconomicDependencyWithComplexMarketData": EconomicDependencyWithComplexMarketData,
    "EconomicDependencyWithQuote": EconomicDependencyWithQuote,
    "EmptyModelOptions": EmptyModelOptions,
    "EmptyModelOptionsAllOf": EmptyModelOptionsAllOf,
    "EntityIdentifier": EntityIdentifier,
    "Equity": Equity,
    "EquityAllOf": EquityAllOf,
    "EquityAllOfIdentifiers": EquityAllOfIdentifiers,
    "EquityCurveByPricesData": EquityCurveByPricesData,
    "EquityCurveByPricesDataAllOf": EquityCurveByPricesDataAllOf,
    "EquityCurveDependency": EquityCurveDependency,
    "EquityCurveDependencyAllOf": EquityCurveDependencyAllOf,
    "EquityModelOptions": EquityModelOptions,
    "EquityModelOptionsAllOf": EquityModelOptionsAllOf,
    "EquityOption": EquityOption,
    "EquityOptionAllOf": EquityOptionAllOf,
    "EquitySwap": EquitySwap,
    "EquitySwapAllOf": EquitySwapAllOf,
    "EquityVolDependency": EquityVolDependency,
    "EquityVolDependencyAllOf": EquityVolDependencyAllOf,
    "EquityVolSurfaceData": EquityVolSurfaceData,
    "EquityVolSurfaceDataAllOf": EquityVolSurfaceDataAllOf,
    "ErrorDetail": ErrorDetail,
    "EventDateRange": EventDateRange,
    "ExDividendConfiguration": ExDividendConfiguration,
    "ExchangeTradedOption": ExchangeTradedOption,
    "ExchangeTradedOptionAllOf": ExchangeTradedOptionAllOf,
    "ExchangeTradedOptionContractDetails": ExchangeTradedOptionContractDetails,
    "Execution": Execution,
    "ExecutionRequest": ExecutionRequest,
    "ExecutionSetRequest": ExecutionSetRequest,
    "ExerciseEvent": ExerciseEvent,
    "ExerciseEventAllOf": ExerciseEventAllOf,
    "ExoticInstrument": ExoticInstrument,
    "ExoticInstrumentAllOf": ExoticInstrumentAllOf,
    "ExpandedGroup": ExpandedGroup,
    "FieldDefinition": FieldDefinition,
    "FieldSchema": FieldSchema,
    "FieldValue": FieldValue,
    "FileResponse": FileResponse,
    "FilterPredicateComplianceParameter": FilterPredicateComplianceParameter,
    "FilterPredicateComplianceParameterAllOf": FilterPredicateComplianceParameterAllOf,
    "FilterStep": FilterStep,
    "FixedLeg": FixedLeg,
    "FixedLegAllOf": FixedLegAllOf,
    "FixedLegAllOfOverrides": FixedLegAllOfOverrides,
    "FlexibleLoan": FlexibleLoan,
    "FlexibleLoanAllOf": FlexibleLoanAllOf,
    "FloatingLeg": FloatingLeg,
    "FloatingLegAllOf": FloatingLegAllOf,
    "FlowConventionName": FlowConventionName,
    "FlowConventions": FlowConventions,
    "ForwardRateAgreement": ForwardRateAgreement,
    "ForwardRateAgreementAllOf": ForwardRateAgreementAllOf,
    "FundShareClass": FundShareClass,
    "FundShareClassAllOf": FundShareClassAllOf,
    "FundingLeg": FundingLeg,
    "FundingLegAllOf": FundingLegAllOf,
    "Future": Future,
    "FutureAllOf": FutureAllOf,
    "FuturesContractDetails": FuturesContractDetails,
    "FxConventions": FxConventions,
    "FxDependency": FxDependency,
    "FxDependencyAllOf": FxDependencyAllOf,
    "FxForward": FxForward,
    "FxForwardAllOf": FxForwardAllOf,
    "FxForwardCurveByQuoteReference": FxForwardCurveByQuoteReference,
    "FxForwardCurveByQuoteReferenceAllOf": FxForwardCurveByQuoteReferenceAllOf,
    "FxForwardCurveData": FxForwardCurveData,
    "FxForwardCurveDataAllOf": FxForwardCurveDataAllOf,
    "FxForwardModelOptions": FxForwardModelOptions,
    "FxForwardModelOptionsAllOf": FxForwardModelOptionsAllOf,
    "FxForwardPipsCurveData": FxForwardPipsCurveData,
    "FxForwardPipsCurveDataAllOf": FxForwardPipsCurveDataAllOf,
    "FxForwardSettlementEvent": FxForwardSettlementEvent,
    "FxForwardSettlementEventAllOf": FxForwardSettlementEventAllOf,
    "FxForwardTenorCurveData": FxForwardTenorCurveData,
    "FxForwardTenorCurveDataAllOf": FxForwardTenorCurveDataAllOf,
    "FxForwardTenorPipsCurveData": FxForwardTenorPipsCurveData,
    "FxForwardTenorPipsCurveDataAllOf": FxForwardTenorPipsCurveDataAllOf,
    "FxForwardsDependency": FxForwardsDependency,
    "FxForwardsDependencyAllOf": FxForwardsDependencyAllOf,
    "FxLinkedNotionalSchedule": FxLinkedNotionalSchedule,
    "FxLinkedNotionalScheduleAllOf": FxLinkedNotionalScheduleAllOf,
    "FxOption": FxOption,
    "FxOptionAllOf": FxOptionAllOf,
    "FxSwap": FxSwap,
    "FxSwapAllOf": FxSwapAllOf,
    "FxTenorConvention": FxTenorConvention,
    "FxVolDependency": FxVolDependency,
    "FxVolDependencyAllOf": FxVolDependencyAllOf,
    "FxVolSurfaceData": FxVolSurfaceData,
    "GetComplexMarketDataResponse": GetComplexMarketDataResponse,
    "GetCounterpartyAgreementResponse": GetCounterpartyAgreementResponse,
    "GetCreditSupportAnnexResponse": GetCreditSupportAnnexResponse,
    "GetInstrumentsResponse": GetInstrumentsResponse,
    "GetQuotesResponse": GetQuotesResponse,
    "GetRecipeResponse": GetRecipeResponse,
    "GetReferencePortfolioConstituentsResponse": GetReferencePortfolioConstituentsResponse,
    "GroupBySelectorComplianceParameter": GroupBySelectorComplianceParameter,
    "GroupByStep": GroupByStep,
    "GroupFilterPredicateComplianceParameter": GroupFilterPredicateComplianceParameter,
    "GroupFilterStep": GroupFilterStep,
    "GroupOfMarketDataKeyRules": GroupOfMarketDataKeyRules,
    "HoldingAdjustment": HoldingAdjustment,
    "HoldingAdjustmentWithDate": HoldingAdjustmentWithDate,
    "HoldingContext": HoldingContext,
    "HoldingContributor": HoldingContributor,
    "HoldingsAdjustment": HoldingsAdjustment,
    "HoldingsAdjustmentHeader": HoldingsAdjustmentHeader,
    "IUnitDefinitionDto": IUnitDefinitionDto,
    "IdSelectorDefinition": IdSelectorDefinition,
    "IdentifierPartSchema": IdentifierPartSchema,
    "IndexConvention": IndexConvention,
    "IndexModelOptions": IndexModelOptions,
    "IndexModelOptionsAllOf": IndexModelOptionsAllOf,
    "IndexProjectionDependency": IndexProjectionDependency,
    "IndexProjectionDependencyAllOf": IndexProjectionDependencyAllOf,
    "IndustryClassifier": IndustryClassifier,
    "InflationFixingDependency": InflationFixingDependency,
    "InflationFixingDependencyAllOf": InflationFixingDependencyAllOf,
    "InflationIndexConventions": InflationIndexConventions,
    "InflationLeg": InflationLeg,
    "InflationLegAllOf": InflationLegAllOf,
    "InflationLinkedBond": InflationLinkedBond,
    "InflationLinkedBondAllOf": InflationLinkedBondAllOf,
    "InflationSwap": InflationSwap,
    "InflationSwapAllOf": InflationSwapAllOf,
    "InformationalErrorEvent": InformationalErrorEvent,
    "InformationalErrorEventAllOf": InformationalErrorEventAllOf,
    "InformationalEvent": InformationalEvent,
    "InformationalEventAllOf": InformationalEventAllOf,
    "InlineValuationRequest": InlineValuationRequest,
    "InlineValuationsReconciliationRequest": InlineValuationsReconciliationRequest,
    "InputTransition": InputTransition,
    "Instrument": Instrument,
    "InstrumentDefinition": InstrumentDefinition,
    "InstrumentDefinitionFormat": InstrumentDefinitionFormat,
    "InstrumentEvent": InstrumentEvent,
    "InstrumentEventConfiguration": InstrumentEventConfiguration,
    "InstrumentEventHolder": InstrumentEventHolder,
    "InstrumentIdTypeDescriptor": InstrumentIdTypeDescriptor,
    "InstrumentIdValue": InstrumentIdValue,
    "InstrumentLeg": InstrumentLeg,
    "InstrumentLegAllOf": InstrumentLegAllOf,
    "InstrumentList": InstrumentList,
    "InstrumentListAllOf": InstrumentListAllOf,
    "InstrumentListComplianceParameter": InstrumentListComplianceParameter,
    "InstrumentMatch": InstrumentMatch,
    "InstrumentModels": InstrumentModels,
    "InstrumentProperties": InstrumentProperties,
    "InstrumentSearchProperty": InstrumentSearchProperty,
    "InterestRateSwap": InterestRateSwap,
    "InterestRateSwapAllOf": InterestRateSwapAllOf,
    "InterestRateSwaption": InterestRateSwaption,
    "InterestRateSwaptionAllOf": InterestRateSwaptionAllOf,
    "IrVolCubeData": IrVolCubeData,
    "IrVolCubeDataAllOf": IrVolCubeDataAllOf,
    "IrVolDependency": IrVolDependency,
    "IrVolDependencyAllOf": IrVolDependencyAllOf,
    "IsBusinessDayResponse": IsBusinessDayResponse,
    "LabelValueSet": LabelValueSet,
    "LegDefinition": LegDefinition,
    "LegalEntity": LegalEntity,
    "LevelStep": LevelStep,
    "LifeCycleEventLineage": LifeCycleEventLineage,
    "LifeCycleEventValue": LifeCycleEventValue,
    "LifeCycleEventValueAllOf": LifeCycleEventValueAllOf,
    "LineageMember": LineageMember,
    "Link": Link,
    "ListAggregationReconciliation": ListAggregationReconciliation,
    "ListAggregationResponse": ListAggregationResponse,
    "LoanPeriod": LoanPeriod,
    "LusidInstrument": LusidInstrument,
    "LusidProblemDetails": LusidProblemDetails,
    "LusidTradeTicket": LusidTradeTicket,
    "LusidUniqueId": LusidUniqueId,
    "LusidValidationProblemDetails": LusidValidationProblemDetails,
    "MappedString": MappedString,
    "Mapping": Mapping,
    "MappingRule": MappingRule,
    "MarketContext": MarketContext,
    "MarketContextSuppliers": MarketContextSuppliers,
    "MarketDataKeyRule": MarketDataKeyRule,
    "MarketDataOptions": MarketDataOptions,
    "MarketDataOverrides": MarketDataOverrides,
    "MarketDataSpecificRule": MarketDataSpecificRule,
    "MarketOptions": MarketOptions,
    "MarketQuote": MarketQuote,
    "MaturityEvent": MaturityEvent,
    "MaturityEventAllOf": MaturityEventAllOf,
    "MetricValue": MetricValue,
    "ModelOptions": ModelOptions,
    "ModelSelection": ModelSelection,
    "MoveOrdersToDifferentBlocksRequest": MoveOrdersToDifferentBlocksRequest,
    "MovedOrderToDifferentBlockResponse": MovedOrderToDifferentBlockResponse,
    "NextValueInSequenceResponse": NextValueInSequenceResponse,
    "OpaqueDependency": OpaqueDependency,
    "OpaqueDependencyAllOf": OpaqueDependencyAllOf,
    "OpaqueMarketData": OpaqueMarketData,
    "OpaqueMarketDataAllOf": OpaqueMarketDataAllOf,
    "OpaqueModelOptions": OpaqueModelOptions,
    "OpaqueModelOptionsAllOf": OpaqueModelOptionsAllOf,
    "OpenEvent": OpenEvent,
    "OpenEventAllOf": OpenEventAllOf,
    "Operation": Operation,
    "Order": Order,
    "OrderBySpec": OrderBySpec,
    "OrderFlowConfiguration": OrderFlowConfiguration,
    "OrderGraphBlock": OrderGraphBlock,
    "OrderGraphBlockAllocationDetail": OrderGraphBlockAllocationDetail,
    "OrderGraphBlockAllocationSynopsis": OrderGraphBlockAllocationSynopsis,
    "OrderGraphBlockExecutionDetail": OrderGraphBlockExecutionDetail,
    "OrderGraphBlockExecutionSynopsis": OrderGraphBlockExecutionSynopsis,
    "OrderGraphBlockOrderDetail": OrderGraphBlockOrderDetail,
    "OrderGraphBlockOrderSynopsis": OrderGraphBlockOrderSynopsis,
    "OrderGraphBlockPlacementDetail": OrderGraphBlockPlacementDetail,
    "OrderGraphBlockPlacementSynopsis": OrderGraphBlockPlacementSynopsis,
    "OrderGraphPlacement": OrderGraphPlacement,
    "OrderGraphPlacementAllocationDetail": OrderGraphPlacementAllocationDetail,
    "OrderGraphPlacementAllocationSynopsis": OrderGraphPlacementAllocationSynopsis,
    "OrderGraphPlacementChildPlacementDetail": OrderGraphPlacementChildPlacementDetail,
    "OrderGraphPlacementExecutionDetail": OrderGraphPlacementExecutionDetail,
    "OrderGraphPlacementExecutionSynopsis": OrderGraphPlacementExecutionSynopsis,
    "OrderGraphPlacementOrderDetail": OrderGraphPlacementOrderDetail,
    "OrderGraphPlacementOrderSynopsis": OrderGraphPlacementOrderSynopsis,
    "OrderGraphPlacementPlacementSynopsis": OrderGraphPlacementPlacementSynopsis,
    "OrderRequest": OrderRequest,
    "OrderSetRequest": OrderSetRequest,
    "OtcConfirmation": OtcConfirmation,
    "OutputTransaction": OutputTransaction,
    "OutputTransition": OutputTransition,
    "PagedResourceListOfAddressKeyDefinition": PagedResourceListOfAddressKeyDefinition,
    "PagedResourceListOfAllocation": PagedResourceListOfAllocation,
    "PagedResourceListOfBlock": PagedResourceListOfBlock,
    "PagedResourceListOfCalendar": PagedResourceListOfCalendar,
    "PagedResourceListOfComplianceRuleResponse": PagedResourceListOfComplianceRuleResponse,
    "PagedResourceListOfComplianceRunInfoV2": PagedResourceListOfComplianceRunInfoV2,
    "PagedResourceListOfComplianceTemplate": PagedResourceListOfComplianceTemplate,
    "PagedResourceListOfCorporateActionSource": PagedResourceListOfCorporateActionSource,
    "PagedResourceListOfCustomEntityDefinition": PagedResourceListOfCustomEntityDefinition,
    "PagedResourceListOfCustomEntityResponse": PagedResourceListOfCustomEntityResponse,
    "PagedResourceListOfCustomEntityType": PagedResourceListOfCustomEntityType,
    "PagedResourceListOfCutLabelDefinition": PagedResourceListOfCutLabelDefinition,
    "PagedResourceListOfDataTypeSummary": PagedResourceListOfDataTypeSummary,
    "PagedResourceListOfDialectId": PagedResourceListOfDialectId,
    "PagedResourceListOfExecution": PagedResourceListOfExecution,
    "PagedResourceListOfInstrument": PagedResourceListOfInstrument,
    "PagedResourceListOfInstrumentEventHolder": PagedResourceListOfInstrumentEventHolder,
    "PagedResourceListOfLegalEntity": PagedResourceListOfLegalEntity,
    "PagedResourceListOfOrder": PagedResourceListOfOrder,
    "PagedResourceListOfOrderGraphBlock": PagedResourceListOfOrderGraphBlock,
    "PagedResourceListOfOrderGraphPlacement": PagedResourceListOfOrderGraphPlacement,
    "PagedResourceListOfParticipation": PagedResourceListOfParticipation,
    "PagedResourceListOfPerson": PagedResourceListOfPerson,
    "PagedResourceListOfPlacement": PagedResourceListOfPlacement,
    "PagedResourceListOfPortfolioGroup": PagedResourceListOfPortfolioGroup,
    "PagedResourceListOfPortfolioGroupSearchResult": PagedResourceListOfPortfolioGroupSearchResult,
    "PagedResourceListOfPortfolioSearchResult": PagedResourceListOfPortfolioSearchResult,
    "PagedResourceListOfPropertyDefinition": PagedResourceListOfPropertyDefinition,
    "PagedResourceListOfPropertyDefinitionSearchResult": PagedResourceListOfPropertyDefinitionSearchResult,
    "PagedResourceListOfReferenceListResponse": PagedResourceListOfReferenceListResponse,
    "PagedResourceListOfRelationshipDefinition": PagedResourceListOfRelationshipDefinition,
    "PagedResourceListOfSequenceDefinition": PagedResourceListOfSequenceDefinition,
    "PagedResourceListOfTranslationScriptId": PagedResourceListOfTranslationScriptId,
    "PagedResourceListOfVirtualRow": PagedResourceListOfVirtualRow,
    "Participation": Participation,
    "ParticipationRequest": ParticipationRequest,
    "ParticipationSetRequest": ParticipationSetRequest,
    "PerformanceReturn": PerformanceReturn,
    "PerformanceReturnsMetric": PerformanceReturnsMetric,
    "PerpetualProperty": PerpetualProperty,
    "Person": Person,
    "PlaceBlocksRequest": PlaceBlocksRequest,
    "Placement": Placement,
    "PlacementRequest": PlacementRequest,
    "PlacementSetRequest": PlacementSetRequest,
    "Portfolio": Portfolio,
    "PortfolioCashFlow": PortfolioCashFlow,
    "PortfolioCashLadder": PortfolioCashLadder,
    "PortfolioDetails": PortfolioDetails,
    "PortfolioEntityId": PortfolioEntityId,
    "PortfolioGroup": PortfolioGroup,
    "PortfolioGroupIdComplianceParameter": PortfolioGroupIdComplianceParameter,
    "PortfolioGroupIdList": PortfolioGroupIdList,
    "PortfolioGroupIdListAllOf": PortfolioGroupIdListAllOf,
    "PortfolioGroupIdListComplianceParameter": PortfolioGroupIdListComplianceParameter,
    "PortfolioGroupProperties": PortfolioGroupProperties,
    "PortfolioGroupSearchResult": PortfolioGroupSearchResult,
    "PortfolioHolding": PortfolioHolding,
    "PortfolioIdComplianceParameter": PortfolioIdComplianceParameter,
    "PortfolioIdList": PortfolioIdList,
    "PortfolioIdListComplianceParameter": PortfolioIdListComplianceParameter,
    "PortfolioProperties": PortfolioProperties,
    "PortfolioReconciliationRequest": PortfolioReconciliationRequest,
    "PortfolioResultDataKeyRule": PortfolioResultDataKeyRule,
    "PortfolioResultDataKeyRuleAllOf": PortfolioResultDataKeyRuleAllOf,
    "PortfolioReturnBreakdown": PortfolioReturnBreakdown,
    "PortfolioSearchResult": PortfolioSearchResult,
    "PortfoliosReconciliationRequest": PortfoliosReconciliationRequest,
    "Premium": Premium,
    "PricingContext": PricingContext,
    "PricingOptions": PricingOptions,
    "ProcessedCommand": ProcessedCommand,
    "Property": Property,
    "PropertyDefinition": PropertyDefinition,
    "PropertyDefinitionSearchResult": PropertyDefinitionSearchResult,
    "PropertyFilter": PropertyFilter,
    "PropertyInterval": PropertyInterval,
    "PropertyKeyComplianceParameter": PropertyKeyComplianceParameter,
    "PropertyKeyComplianceParameterAllOf": PropertyKeyComplianceParameterAllOf,
    "PropertyKeyListComplianceParameter": PropertyKeyListComplianceParameter,
    "PropertySchema": PropertySchema,
    "PropertyValue": PropertyValue,
    "Quote": Quote,
    "QuoteDependency": QuoteDependency,
    "QuoteDependencyAllOf": QuoteDependencyAllOf,
    "QuoteId": QuoteId,
    "QuoteSeriesId": QuoteSeriesId,
    "RawVendorEvent": RawVendorEvent,
    "RawVendorEventAllOf": RawVendorEventAllOf,
    "RealisedGainLoss": RealisedGainLoss,
    "RecombineStep": RecombineStep,
    "ReconcileDateTimeRule": ReconcileDateTimeRule,
    "ReconcileDateTimeRuleAllOf": ReconcileDateTimeRuleAllOf,
    "ReconcileNumericRule": ReconcileNumericRule,
    "ReconcileNumericRuleAllOf": ReconcileNumericRuleAllOf,
    "ReconcileStringRule": ReconcileStringRule,
    "ReconcileStringRuleAllOf": ReconcileStringRuleAllOf,
    "ReconciledTransaction": ReconciledTransaction,
    "ReconciliationBreak": ReconciliationBreak,
    "ReconciliationLeftRightAddressKeyPair": ReconciliationLeftRightAddressKeyPair,
    "ReconciliationLine": ReconciliationLine,
    "ReconciliationRequest": ReconciliationRequest,
    "ReconciliationResponse": ReconciliationResponse,
    "ReconciliationRule": ReconciliationRule,
    "ReferenceData": ReferenceData,
    "ReferenceInstrument": ReferenceInstrument,
    "ReferenceInstrumentAllOf": ReferenceInstrumentAllOf,
    "ReferenceList": ReferenceList,
    "ReferenceListRequest": ReferenceListRequest,
    "ReferenceListResponse": ReferenceListResponse,
    "ReferencePortfolioConstituent": ReferencePortfolioConstituent,
    "ReferencePortfolioConstituentRequest": ReferencePortfolioConstituentRequest,
    "RelatedEntity": RelatedEntity,
    "Relation": Relation,
    "Relationship": Relationship,
    "RelationshipDefinition": RelationshipDefinition,
    "RelativeDateOffset": RelativeDateOffset,
    "Repo": Repo,
    "RepoAllOf": RepoAllOf,
    "ResetEvent": ResetEvent,
    "ResetEventAllOf": ResetEventAllOf,
    "ResourceId": ResourceId,
    "ResourceListOfAccessControlledResource": ResourceListOfAccessControlledResource,
    "ResourceListOfAccessMetadataValueOf": ResourceListOfAccessMetadataValueOf,
    "ResourceListOfAddressKeyDefinition": ResourceListOfAddressKeyDefinition,
    "ResourceListOfAggregationQuery": ResourceListOfAggregationQuery,
    "ResourceListOfAllocation": ResourceListOfAllocation,
    "ResourceListOfBlock": ResourceListOfBlock,
    "ResourceListOfBlockAndOrders": ResourceListOfBlockAndOrders,
    "ResourceListOfCalendarDate": ResourceListOfCalendarDate,
    "ResourceListOfChange": ResourceListOfChange,
    "ResourceListOfChangeHistory": ResourceListOfChangeHistory,
    "ResourceListOfConstituentsAdjustmentHeader": ResourceListOfConstituentsAdjustmentHeader,
    "ResourceListOfCorporateAction": ResourceListOfCorporateAction,
    "ResourceListOfDataType": ResourceListOfDataType,
    "ResourceListOfExecution": ResourceListOfExecution,
    "ResourceListOfGetCounterpartyAgreementResponse": ResourceListOfGetCounterpartyAgreementResponse,
    "ResourceListOfGetCreditSupportAnnexResponse": ResourceListOfGetCreditSupportAnnexResponse,
    "ResourceListOfGetRecipeResponse": ResourceListOfGetRecipeResponse,
    "ResourceListOfHoldingsAdjustmentHeader": ResourceListOfHoldingsAdjustmentHeader,
    "ResourceListOfIUnitDefinitionDto": ResourceListOfIUnitDefinitionDto,
    "ResourceListOfInstrumentIdTypeDescriptor": ResourceListOfInstrumentIdTypeDescriptor,
    "ResourceListOfLegalEntity": ResourceListOfLegalEntity,
    "ResourceListOfMapping": ResourceListOfMapping,
    "ResourceListOfMovedOrderToDifferentBlockResponse": ResourceListOfMovedOrderToDifferentBlockResponse,
    "ResourceListOfOrder": ResourceListOfOrder,
    "ResourceListOfParticipation": ResourceListOfParticipation,
    "ResourceListOfPerformanceReturn": ResourceListOfPerformanceReturn,
    "ResourceListOfPerson": ResourceListOfPerson,
    "ResourceListOfPlacement": ResourceListOfPlacement,
    "ResourceListOfPortfolio": ResourceListOfPortfolio,
    "ResourceListOfPortfolioCashFlow": ResourceListOfPortfolioCashFlow,
    "ResourceListOfPortfolioCashLadder": ResourceListOfPortfolioCashLadder,
    "ResourceListOfProcessedCommand": ResourceListOfProcessedCommand,
    "ResourceListOfProperty": ResourceListOfProperty,
    "ResourceListOfPropertyDefinition": ResourceListOfPropertyDefinition,
    "ResourceListOfPropertyInterval": ResourceListOfPropertyInterval,
    "ResourceListOfQuote": ResourceListOfQuote,
    "ResourceListOfReconciliationBreak": ResourceListOfReconciliationBreak,
    "ResourceListOfRelation": ResourceListOfRelation,
    "ResourceListOfRelationship": ResourceListOfRelationship,
    "ResourceListOfScopeDefinition": ResourceListOfScopeDefinition,
    "ResourceListOfSideDefinition": ResourceListOfSideDefinition,
    "ResourceListOfString": ResourceListOfString,
    "ResourceListOfTransactionType": ResourceListOfTransactionType,
    "ResourceListOfValueType": ResourceListOfValueType,
    "ResponseMetaData": ResponseMetaData,
    "ResultDataKeyRule": ResultDataKeyRule,
    "ResultDataKeyRuleAllOf": ResultDataKeyRuleAllOf,
    "ResultDataSchema": ResultDataSchema,
    "ResultKeyRule": ResultKeyRule,
    "ResultValue": ResultValue,
    "ResultValue0D": ResultValue0D,
    "ResultValue0DAllOf": ResultValue0DAllOf,
    "ResultValueBool": ResultValueBool,
    "ResultValueBoolAllOf": ResultValueBoolAllOf,
    "ResultValueCurrency": ResultValueCurrency,
    "ResultValueCurrencyAllOf": ResultValueCurrencyAllOf,
    "ResultValueDateTimeOffset": ResultValueDateTimeOffset,
    "ResultValueDateTimeOffsetAllOf": ResultValueDateTimeOffsetAllOf,
    "ResultValueDecimal": ResultValueDecimal,
    "ResultValueDecimalAllOf": ResultValueDecimalAllOf,
    "ResultValueDictionary": ResultValueDictionary,
    "ResultValueDictionaryAllOf": ResultValueDictionaryAllOf,
    "ResultValueInt": ResultValueInt,
    "ResultValueIntAllOf": ResultValueIntAllOf,
    "ResultValueString": ResultValueString,
    "ResultValueStringAllOf": ResultValueStringAllOf,
    "RoundingConfiguration": RoundingConfiguration,
    "RoundingConfigurationComponent": RoundingConfigurationComponent,
    "RoundingConvention": RoundingConvention,
    "Schedule": Schedule,
    "Schema": Schema,
    "ScopeDefinition": ScopeDefinition,
    "ScriptMapReference": ScriptMapReference,
    "SecurityElection": SecurityElection,
    "SequenceDefinition": SequenceDefinition,
    "SetLegalEntityIdentifiersRequest": SetLegalEntityIdentifiersRequest,
    "SetLegalEntityPropertiesRequest": SetLegalEntityPropertiesRequest,
    "SetPersonIdentifiersRequest": SetPersonIdentifiersRequest,
    "SetPersonPropertiesRequest": SetPersonPropertiesRequest,
    "SideConfigurationData": SideConfigurationData,
    "SideDefinition": SideDefinition,
    "SideDefinitionRequest": SideDefinitionRequest,
    "SidesDefinitionRequest": SidesDefinitionRequest,
    "SimpleCashFlowLoan": SimpleCashFlowLoan,
    "SimpleCashFlowLoanAllOf": SimpleCashFlowLoanAllOf,
    "SimpleInstrument": SimpleInstrument,
    "SimpleInstrumentAllOf": SimpleInstrumentAllOf,
    "StepSchedule": StepSchedule,
    "StepScheduleAllOf": StepScheduleAllOf,
    "StockSplitEvent": StockSplitEvent,
    "StockSplitEventAllOf": StockSplitEventAllOf,
    "Stream": Stream,
    "StringComplianceParameter": StringComplianceParameter,
    "StringList": StringList,
    "StringListComplianceParameter": StringListComplianceParameter,
    "TargetTaxLot": TargetTaxLot,
    "TargetTaxLotRequest": TargetTaxLotRequest,
    "TermDeposit": TermDeposit,
    "TermDepositAllOf": TermDepositAllOf,
    "TotalReturnSwap": TotalReturnSwap,
    "TotalReturnSwapAllOf": TotalReturnSwapAllOf,
    "Touch": Touch,
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
    "TransactionReconciliationRequest": TransactionReconciliationRequest,
    "TransactionRequest": TransactionRequest,
    "TransactionSetConfigurationData": TransactionSetConfigurationData,
    "TransactionType": TransactionType,
    "TransactionTypeAlias": TransactionTypeAlias,
    "TransactionTypeCalculation": TransactionTypeCalculation,
    "TransactionTypeMovement": TransactionTypeMovement,
    "TransactionTypePropertyMapping": TransactionTypePropertyMapping,
    "TransactionTypeRequest": TransactionTypeRequest,
    "TransactionsReconciliationsResponse": TransactionsReconciliationsResponse,
    "TransitionEvent": TransitionEvent,
    "TransitionEventAllOf": TransitionEventAllOf,
    "TranslateEntitiesInlinedRequest": TranslateEntitiesInlinedRequest,
    "TranslateEntitiesRequest": TranslateEntitiesRequest,
    "TranslateEntitiesResponse": TranslateEntitiesResponse,
    "TranslationContext": TranslationContext,
    "TranslationInput": TranslationInput,
    "TranslationResult": TranslationResult,
    "TranslationScript": TranslationScript,
    "TranslationScriptId": TranslationScriptId,
    "TriggerEvent": TriggerEvent,
    "TriggerEventAllOf": TriggerEventAllOf,
    "TypedResourceId": TypedResourceId,
    "UnitsRatio": UnitsRatio,
    "UpdateCalendarRequest": UpdateCalendarRequest,
    "UpdateCustomEntityDefinitionRequest": UpdateCustomEntityDefinitionRequest,
    "UpdateCustomEntityTypeRequest": UpdateCustomEntityTypeRequest,
    "UpdateCutLabelDefinitionRequest": UpdateCutLabelDefinitionRequest,
    "UpdateDataTypeRequest": UpdateDataTypeRequest,
    "UpdateDerivedPropertyDefinitionRequest": UpdateDerivedPropertyDefinitionRequest,
    "UpdateInstrumentIdentifierRequest": UpdateInstrumentIdentifierRequest,
    "UpdatePortfolioGroupRequest": UpdatePortfolioGroupRequest,
    "UpdatePortfolioRequest": UpdatePortfolioRequest,
    "UpdatePropertyDefinitionRequest": UpdatePropertyDefinitionRequest,
    "UpdateRelationshipDefinitionRequest": UpdateRelationshipDefinitionRequest,
    "UpdateUnitRequest": UpdateUnitRequest,
    "UpsertComplexMarketDataRequest": UpsertComplexMarketDataRequest,
    "UpsertComplianceRuleRequest": UpsertComplianceRuleRequest,
    "UpsertComplianceRunSummaryRequest": UpsertComplianceRunSummaryRequest,
    "UpsertComplianceRunSummaryResult": UpsertComplianceRunSummaryResult,
    "UpsertCorporateActionRequest": UpsertCorporateActionRequest,
    "UpsertCorporateActionsResponse": UpsertCorporateActionsResponse,
    "UpsertCounterpartyAgreementRequest": UpsertCounterpartyAgreementRequest,
    "UpsertCreditSupportAnnexRequest": UpsertCreditSupportAnnexRequest,
    "UpsertCustomEntitiesResponse": UpsertCustomEntitiesResponse,
    "UpsertCustomEntityAccessMetadataRequest": UpsertCustomEntityAccessMetadataRequest,
    "UpsertDialectRequest": UpsertDialectRequest,
    "UpsertInstrumentEventRequest": UpsertInstrumentEventRequest,
    "UpsertInstrumentEventsResponse": UpsertInstrumentEventsResponse,
    "UpsertInstrumentPropertiesResponse": UpsertInstrumentPropertiesResponse,
    "UpsertInstrumentPropertyRequest": UpsertInstrumentPropertyRequest,
    "UpsertInstrumentsResponse": UpsertInstrumentsResponse,
    "UpsertLegalEntitiesResponse": UpsertLegalEntitiesResponse,
    "UpsertLegalEntityAccessMetadataRequest": UpsertLegalEntityAccessMetadataRequest,
    "UpsertLegalEntityRequest": UpsertLegalEntityRequest,
    "UpsertPersonAccessMetadataRequest": UpsertPersonAccessMetadataRequest,
    "UpsertPersonRequest": UpsertPersonRequest,
    "UpsertPortfolioAccessMetadataRequest": UpsertPortfolioAccessMetadataRequest,
    "UpsertPortfolioGroupAccessMetadataRequest": UpsertPortfolioGroupAccessMetadataRequest,
    "UpsertPortfolioTransactionsResponse": UpsertPortfolioTransactionsResponse,
    "UpsertQuoteRequest": UpsertQuoteRequest,
    "UpsertQuotesResponse": UpsertQuotesResponse,
    "UpsertRecipeRequest": UpsertRecipeRequest,
    "UpsertReferencePortfolioConstituentsRequest": UpsertReferencePortfolioConstituentsRequest,
    "UpsertReferencePortfolioConstituentsResponse": UpsertReferencePortfolioConstituentsResponse,
    "UpsertReturnsResponse": UpsertReturnsResponse,
    "UpsertSingleStructuredDataResponse": UpsertSingleStructuredDataResponse,
    "UpsertStructuredDataResponse": UpsertStructuredDataResponse,
    "UpsertTransactionPropertiesResponse": UpsertTransactionPropertiesResponse,
    "UpsertTranslationScriptRequest": UpsertTranslationScriptRequest,
    "User": User,
    "ValuationRequest": ValuationRequest,
    "ValuationSchedule": ValuationSchedule,
    "ValuationsReconciliationRequest": ValuationsReconciliationRequest,
    "VendorModelRule": VendorModelRule,
    "Version": Version,
    "VersionSummaryDto": VersionSummaryDto,
    "VersionedResourceListOfA2BDataRecord": VersionedResourceListOfA2BDataRecord,
    "VersionedResourceListOfA2BMovementRecord": VersionedResourceListOfA2BMovementRecord,
    "VersionedResourceListOfHoldingContributor": VersionedResourceListOfHoldingContributor,
    "VersionedResourceListOfOutputTransaction": VersionedResourceListOfOutputTransaction,
    "VersionedResourceListOfPortfolioHolding": VersionedResourceListOfPortfolioHolding,
    "VersionedResourceListOfTransaction": VersionedResourceListOfTransaction,
    "VirtualRow": VirtualRow,
    "WeekendMask": WeekendMask,
    "WeightedInstrument": WeightedInstrument,
    "WeightedInstrumentInLineLookupIdentifiers": WeightedInstrumentInLineLookupIdentifiers,
    "WeightedInstruments": WeightedInstruments,
    "YieldCurveData": YieldCurveData,
    "YieldCurveDataAllOf": YieldCurveDataAllOf,
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
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
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
            for (let index = 0; index < attributeTypes.length; index++) {
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
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
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
            for (let index = 0; index < attributeTypes.length; index++) {
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
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
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

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
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
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
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

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
