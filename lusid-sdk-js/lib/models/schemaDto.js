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
 * Class representing a SchemaDto.
 */
class SchemaDto {
  /**
   * Create a SchemaDto.
   * @member {string} [entity] Possible values include: 'PropertyKey',
   * 'FieldSchema', 'Personalisation', 'Security', 'Property',
   * 'CreatePropertyRequest', 'CreatePerpetualPropertyRequest',
   * 'PerpetualProperty', 'Login', 'PropertyDefinition', 'PropertyDataFormat',
   * 'AggregationResponseNode', 'Portfolio', 'CompletePortfolio',
   * 'PortfolioSearchResult', 'PortfolioDetails', 'PortfolioProperties',
   * 'Version', 'AddTradeProperty', 'AnalyticStore', 'AnalyticStoreKey',
   * 'UpsertPortfolioTrades', 'Group', 'Constituent', 'Trade',
   * 'UpsertPortfolioTradesRequest', 'PortfolioHolding', 'AdjustHolding',
   * 'ErrorDetail', 'ErrorResponse', 'InstrumentDefinition',
   * 'ProcessedCommand', 'CreatePortfolio', 'CreateAnalyticStore',
   * 'CreateClientSecurity', 'CreateDerivedPortfolio', 'CreateGroup',
   * 'CreatePropertyDataFormat', 'CreatePropertyDefinition', 'UpdatePortfolio',
   * 'UpdateGroup', 'UpdatePropertyDataFormat', 'UpdatePropertyDefinition',
   * 'SecurityAnalytic', 'AggregationRequest', 'Aggregation',
   * 'NestedAggregation', 'ResultDataSchema', 'Classification',
   * 'SecurityClassification', 'WebLogMessage', 'UpsertPersonalisation',
   * 'CreatePortfolioDetails', 'UpsertConstituent', 'CreateResults', 'Results',
   * 'TryAddClientSecurities', 'TryDeleteClientSecurities',
   * 'TryLookupSecuritiesFromCodes', 'ExpandedGroup', 'CreateCorporateAction',
   * 'CorporateAction', 'CorporateActionTransition', 'ReconciliationRequest',
   * 'ReconciliationBreak', 'TransactionConfigurationData',
   * 'TransactionConfigurationMovementData',
   * 'TransactionConfigurationTypeAlias', 'TryUpsertCorporateActions',
   * 'Iso4217CurrencyUnit', 'BasicUnit', 'CorporateActionTransitionComponent'
   * @member {string} [href]
   * @member {array} [values]
   */
  constructor() {
  }

  /**
   * Defines the metadata of SchemaDto
   *
   * @returns {object} metadata of SchemaDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SchemaDto',
      type: {
        name: 'Composite',
        className: 'SchemaDto',
        modelProperties: {
          entity: {
            required: false,
            serializedName: 'entity',
            type: {
              name: 'String'
            }
          },
          href: {
            required: false,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          },
          values: {
            required: false,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'KeyValuePairStringFieldSchemaElementType',
                  type: {
                    name: 'Composite',
                    className: 'KeyValuePairStringFieldSchema'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SchemaDto;
