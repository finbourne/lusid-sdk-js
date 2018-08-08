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

'use strict';

const models = require('./index');

/**
 * Class representing a ErrorResponse.
 */
class ErrorResponse {
  /**
   * Create a ErrorResponse.
   * @member {number} [status]
   * @member {string} [code] Possible values include: 'Unknown',
   * 'PersonalisationNotFound', 'NonRecursivePersonalisation',
   * 'VersionNotFound', 'SecurityNotFound', 'PropertyNotFound',
   * 'PortfolioRecursionDepth', 'GroupNotFound', 'PortfolioNotFound',
   * 'PropertySchemaNotFound', 'PortfolioWithIdAlreadyExists',
   * 'OrphanedPortfolio', 'MissingBaseClaims', 'PropertyNotDefined',
   * 'CannotDeleteSystemProperty', 'CannotModifyImmutablePropertyField',
   * 'PropertyAlreadyExists', 'InvalidPropertyLifeTime',
   * 'CannotModifyDefaultPropertyFormat', 'GroupAlreadyExists',
   * 'NoSuchPropertyDataFormat', 'ValidationError',
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
   * 'CannotAddSourcePortfolioPropertyExplicitly',
   * 'EntityAlreadyExistsInGroup', 'EntityWithIdAlreadyExists',
   * 'PortfolioDetailsDoNotExist', 'PortfolioWithNameAlreadyExists',
   * 'InvalidTrades', 'ReferencePortfolioNotFound', 'DuplicateIdFailure',
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
  constructor() {
  }

  /**
   * Defines the metadata of ErrorResponse
   *
   * @returns {object} metadata of ErrorResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorResponse',
      type: {
        name: 'Composite',
        className: 'ErrorResponse',
        modelProperties: {
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'Number'
            }
          },
          code: {
            required: false,
            readOnly: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          detailedMessage: {
            required: false,
            readOnly: true,
            serializedName: 'detailedMessage',
            type: {
              name: 'String'
            }
          },
          items: {
            required: false,
            serializedName: 'items',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorDetailBaseElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorDetailBase'
                  }
              }
            }
          },
          moreInfo: {
            required: false,
            readOnly: true,
            serializedName: 'moreInfo',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorResponse;
