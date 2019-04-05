# LusidSdk.ErrorResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Number** |  | [optional] 
**code** | **String** |  | [optional] 
**message** | **String** |  | [optional] 
**detailedMessage** | **String** |  | [optional] 
**items** | [**[ErrorDetailBase]**](ErrorDetailBase.md) |  | [optional] 
**moreInfo** | **String** |  | [optional] 


<a name="CodeEnum"></a>
## Enum: CodeEnum


* `Unknown` (value: `"Unknown"`)

* `VersionNotFound` (value: `"VersionNotFound"`)

* `InstrumentNotFound` (value: `"InstrumentNotFound"`)

* `PropertyNotFound` (value: `"PropertyNotFound"`)

* `PortfolioRecursionDepth` (value: `"PortfolioRecursionDepth"`)

* `GroupNotFound` (value: `"GroupNotFound"`)

* `PortfolioNotFound` (value: `"PortfolioNotFound"`)

* `PropertySchemaNotFound` (value: `"PropertySchemaNotFound"`)

* `PortfolioAncestryNotFound` (value: `"PortfolioAncestryNotFound"`)

* `PortfolioWithIdAlreadyExists` (value: `"PortfolioWithIdAlreadyExists"`)

* `OrphanedPortfolio` (value: `"OrphanedPortfolio"`)

* `MissingBaseClaims` (value: `"MissingBaseClaims"`)

* `PropertyNotDefined` (value: `"PropertyNotDefined"`)

* `CannotDeleteSystemProperty` (value: `"CannotDeleteSystemProperty"`)

* `CannotModifyImmutablePropertyField` (value: `"CannotModifyImmutablePropertyField"`)

* `PropertyAlreadyExists` (value: `"PropertyAlreadyExists"`)

* `InvalidPropertyLifeTime` (value: `"InvalidPropertyLifeTime"`)

* `CannotModifyDefaultDataType` (value: `"CannotModifyDefaultDataType"`)

* `GroupAlreadyExists` (value: `"GroupAlreadyExists"`)

* `NoSuchDataType` (value: `"NoSuchDataType"`)

* `ValidationError` (value: `"ValidationError"`)

* `LoopDetectedInGroupHierarchy` (value: `"LoopDetectedInGroupHierarchy"`)

* `SubGroupAlreadyExists` (value: `"SubGroupAlreadyExists"`)

* `PriceSourceNotFound` (value: `"PriceSourceNotFound"`)

* `AnalyticStoreNotFound` (value: `"AnalyticStoreNotFound"`)

* `AnalyticStoreAlreadyExists` (value: `"AnalyticStoreAlreadyExists"`)

* `ClientInstrumentAlreadyExists` (value: `"ClientInstrumentAlreadyExists"`)

* `DuplicateInParameterSet` (value: `"DuplicateInParameterSet"`)

* `ResultsNotFound` (value: `"ResultsNotFound"`)

* `OrderFieldNotInResultSet` (value: `"OrderFieldNotInResultSet"`)

* `OperationFailed` (value: `"OperationFailed"`)

* `ElasticSearchError` (value: `"ElasticSearchError"`)

* `InvalidParameterValue` (value: `"InvalidParameterValue"`)

* `CommandProcessingFailure` (value: `"CommandProcessingFailure"`)

* `EntityStateConstructionFailure` (value: `"EntityStateConstructionFailure"`)

* `EntityTimelineDoesNotExist` (value: `"EntityTimelineDoesNotExist"`)

* `EventPublishFailure` (value: `"EventPublishFailure"`)

* `InvalidRequestFailure` (value: `"InvalidRequestFailure"`)

* `EventPublishUnknown` (value: `"EventPublishUnknown"`)

* `EventQueryFailure` (value: `"EventQueryFailure"`)

* `BlobDidNotExistFailure` (value: `"BlobDidNotExistFailure"`)

* `SubSystemRequestFailure` (value: `"SubSystemRequestFailure"`)

* `SubSystemConfigurationFailure` (value: `"SubSystemConfigurationFailure"`)

* `FailedToDelete` (value: `"FailedToDelete"`)

* `UpsertClientInstrumentFailure` (value: `"UpsertClientInstrumentFailure"`)

* `IllegalAsAtInterval` (value: `"IllegalAsAtInterval"`)

* `IllegalBitemporalQuery` (value: `"IllegalBitemporalQuery"`)

* `InvalidAlternateId` (value: `"InvalidAlternateId"`)

* `CannotAddSourcePortfolioPropertyExplicitly` (value: `"CannotAddSourcePortfolioPropertyExplicitly"`)

* `EntityAlreadyExistsInGroup` (value: `"EntityAlreadyExistsInGroup"`)

* `EntityWithIdAlreadyExists` (value: `"EntityWithIdAlreadyExists"`)

* `DerivedPortfolioDetailsDoNotExist` (value: `"DerivedPortfolioDetailsDoNotExist"`)

* `PortfolioWithNameAlreadyExists` (value: `"PortfolioWithNameAlreadyExists"`)

* `InvalidTransactions` (value: `"InvalidTransactions"`)

* `ReferencePortfolioNotFound` (value: `"ReferencePortfolioNotFound"`)

* `DuplicateIdFailure` (value: `"DuplicateIdFailure"`)

* `CommandRetrievalFailure` (value: `"CommandRetrievalFailure"`)

* `DataFilterApplicationFailure` (value: `"DataFilterApplicationFailure"`)

* `SearchFailed` (value: `"SearchFailed"`)

* `MovementsEngineConfigurationKeyFailure` (value: `"MovementsEngineConfigurationKeyFailure"`)

* `FxRateSourceNotFound` (value: `"FxRateSourceNotFound"`)

* `AccrualSourceNotFound` (value: `"AccrualSourceNotFound"`)

* `EntitlementsFailure` (value: `"EntitlementsFailure"`)

* `InvalidIdentityToken` (value: `"InvalidIdentityToken"`)

* `InvalidRequestHeaders` (value: `"InvalidRequestHeaders"`)

* `PriceNotFound` (value: `"PriceNotFound"`)

* `InvalidSubHoldingKeysProvided` (value: `"InvalidSubHoldingKeysProvided"`)

* `DuplicateSubHoldingKeysProvided` (value: `"DuplicateSubHoldingKeysProvided"`)

* `CutDefinitionNotFound` (value: `"CutDefinitionNotFound"`)

* `CutDefinitionInvalid` (value: `"CutDefinitionInvalid"`)

* `ServerConfigurationError` (value: `"ServerConfigurationError"`)

* `InvalidUnitForDataType` (value: `"InvalidUnitForDataType"`)

* `InvalidTypeForDataType` (value: `"InvalidTypeForDataType"`)

* `InvalidValueForDataType` (value: `"InvalidValueForDataType"`)

* `UnitNotDefinedForDataType` (value: `"UnitNotDefinedForDataType"`)

* `UnitsNotSupportedOnDataType` (value: `"UnitsNotSupportedOnDataType"`)

* `CannotSpecifyUnitsOnDataType` (value: `"CannotSpecifyUnitsOnDataType"`)

* `UnitSchemaInconsistentWithDataType` (value: `"UnitSchemaInconsistentWithDataType"`)

* `UnitDefinitionNotSpecified` (value: `"UnitDefinitionNotSpecified"`)

* `DuplicateUnitDefinitionsSpecified` (value: `"DuplicateUnitDefinitionsSpecified"`)

* `InvalidUnitsDefinition` (value: `"InvalidUnitsDefinition"`)

* `InvalidInstrumentIdentifierUnit` (value: `"InvalidInstrumentIdentifierUnit"`)

* `HoldingsAdjustmentDoesNotExist` (value: `"HoldingsAdjustmentDoesNotExist"`)

* `CouldNotBuildExcelUrl` (value: `"CouldNotBuildExcelUrl"`)

* `CouldNotGetExcelVersion` (value: `"CouldNotGetExcelVersion"`)

* `InstrumentByCodeNotFound` (value: `"InstrumentByCodeNotFound"`)

* `EntitySchemaDoesNotExist` (value: `"EntitySchemaDoesNotExist"`)

* `FeatureNotSupportedOnPortfolioType` (value: `"FeatureNotSupportedOnPortfolioType"`)

* `QuoteNotFoundFailure` (value: `"QuoteNotFoundFailure"`)

* `ReferencePortfolioRequestNotSupported` (value: `"ReferencePortfolioRequestNotSupported"`)

* `TransactionPortfolioRequestNotSupported` (value: `"TransactionPortfolioRequestNotSupported"`)

* `InvalidInstrumentDefinition` (value: `"InvalidInstrumentDefinition"`)

* `InstrumentUpsertFailure` (value: `"InstrumentUpsertFailure"`)

* `TransactionTypeNotFound` (value: `"TransactionTypeNotFound"`)

* `TransactionTypeDuplication` (value: `"TransactionTypeDuplication"`)

* `InvalidPropertyValueAssignment` (value: `"InvalidPropertyValueAssignment"`)

* `PortfolioDoesNotExistAtGivenDate` (value: `"PortfolioDoesNotExistAtGivenDate"`)

* `QueryParserFailure` (value: `"QueryParserFailure"`)

* `DuplicateConstituentFailure` (value: `"DuplicateConstituentFailure"`)

* `UnresolvedInstrumentConstituentFailure` (value: `"UnresolvedInstrumentConstituentFailure"`)

* `UnresolvedInstrumentInTransitionFailure` (value: `"UnresolvedInstrumentInTransitionFailure"`)

* `MissingRecipeFailure` (value: `"MissingRecipeFailure"`)

* `DependenciesFailure` (value: `"DependenciesFailure"`)

* `PortfolioPreprocessFailure` (value: `"PortfolioPreprocessFailure"`)

* `ValuationEngineFailure` (value: `"ValuationEngineFailure"`)

* `TaskFactoryFailure` (value: `"TaskFactoryFailure"`)

* `TaskEvaluationFailure` (value: `"TaskEvaluationFailure"`)

* `InstrumentFailure` (value: `"InstrumentFailure"`)

* `CashFlowsFailure` (value: `"CashFlowsFailure"`)

* `ResultRetrievalFailure` (value: `"ResultRetrievalFailure"`)

* `ResultProcessingFailure` (value: `"ResultProcessingFailure"`)

* `VendorResultProcessingFailure` (value: `"VendorResultProcessingFailure"`)

* `CannotSupplyTimesWithPortfoliosQuery` (value: `"CannotSupplyTimesWithPortfoliosQuery"`)

* `AttemptToUpsertDuplicateQuotes` (value: `"AttemptToUpsertDuplicateQuotes"`)

* `CorporateActionSourceDoesNotExist` (value: `"CorporateActionSourceDoesNotExist"`)

* `InstrumentIdentifierAlreadyInUse` (value: `"InstrumentIdentifierAlreadyInUse"`)




