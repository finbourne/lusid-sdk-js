import {AggregationApi} from '../api/aggregationApi';
import {AnalyticsStoresApi} from '../api/analyticsStoresApi';
import {ApplicationMetadataApi} from '../api/applicationMetadataApi';
import {CorporateActionSourcesApi} from '../api/corporateActionSourcesApi';
import {CutLabelDefinitionsApi} from '../api/cutLabelDefinitionsApi';
import {DataTypesApi} from '../api/dataTypesApi';
import {DerivedTransactionPortfoliosApi} from '../api/derivedTransactionPortfoliosApi';
import {EntitiesApi} from '../api/entitiesApi';
import {InstrumentsApi} from '../api/instrumentsApi';
import {LoginApi} from '../api/loginApi';
import {PortfolioGroupsApi} from '../api/portfolioGroupsApi';
import {PortfoliosApi} from '../api/portfoliosApi';
import {PropertyDefinitionsApi} from '../api/propertyDefinitionsApi';
import {QuotesApi} from '../api/quotesApi';
import {ReconciliationsApi} from '../api/reconciliationsApi';
import {ReferencePortfolioApi} from '../api/referencePortfolioApi';
import {ResultsApi} from '../api/resultsApi';
import {SchemasApi} from '../api/schemasApi';
import {ScopesApi} from '../api/scopesApi';
import {SearchApi} from '../api/searchApi';
import {StructuredMarketDataApi} from '../api/structuredMarketDataApi';
import {SystemConfigurationApi} from '../api/systemConfigurationApi';
import {TransactionPortfoliosApi} from '../api/transactionPortfoliosApi';

export class Api {
    public aggregation:  AggregationApi
    public analyticsStores:  AnalyticsStoresApi
    public applicationMetadata:  ApplicationMetadataApi
    public corporateActionSources:  CorporateActionSourcesApi
    public cutLabelDefinitions:  CutLabelDefinitionsApi
    public dataTypes:  DataTypesApi
    public derivedTransactionPortfolios:  DerivedTransactionPortfoliosApi
    public entities:  EntitiesApi
    public instruments:  InstrumentsApi
    public login:  LoginApi
    public portfolioGroups:  PortfolioGroupsApi
    public portfolios:  PortfoliosApi
    public propertyDefinitions:  PropertyDefinitionsApi
    public quotes:  QuotesApi
    public reconciliations:  ReconciliationsApi
    public referencePortfolio:  ReferencePortfolioApi
    public results:  ResultsApi
    public schemas:  SchemasApi
    public scopes:  ScopesApi
    public search:  SearchApi
    public structuredMarketData:  StructuredMarketDataApi
    public systemConfiguration:  SystemConfigurationApi
    public transactionPortfolios:  TransactionPortfoliosApi
}
