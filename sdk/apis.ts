import {ApplicationMetadataApi} from './api/applicationMetadataApi';
import {CutLabelDefinitionsApi} from './api/cutLabelDefinitionsApi';
import {DataTypesApi} from './api/dataTypesApi';
import {DerivedTransactionPortfoliosApi} from './api/derivedTransactionPortfoliosApi';
import {EntitiesApi} from './api/entitiesApi';
import {InstrumentsApi} from './api/instrumentsApi';
import {LegalEntitiesApi} from './api/legalEntitiesApi';
import {LoginApi} from './api/loginApi';
import {PersonsApi} from './api/personsApi';
import {PortfolioGroupsApi} from './api/portfolioGroupsApi';
import {PortfoliosApi} from './api/portfoliosApi';
import {PropertyDefinitionsApi} from './api/propertyDefinitionsApi';
import {QuotesApi} from './api/quotesApi';
import {ReconciliationsApi} from './api/reconciliationsApi';
import {ReferencePortfolioApi} from './api/referencePortfolioApi';
import {RelationDefinitionsApi} from './api/relationDefinitionsApi';
import {RelationsApi} from './api/relationsApi';
import {ScopesApi} from './api/scopesApi';
import {SearchApi} from './api/searchApi';
import {SystemConfigurationApi} from './api/systemConfigurationApi';
import {TransactionPortfoliosApi} from './api/transactionPortfoliosApi';

export class Api {
    public applicationMetadata:  ApplicationMetadataApi
    public cutLabelDefinitions:  CutLabelDefinitionsApi
    public dataTypes:  DataTypesApi
    public derivedTransactionPortfolios:  DerivedTransactionPortfoliosApi
    public entities:  EntitiesApi
    public instruments:  InstrumentsApi
    public legalEntities:  LegalEntitiesApi
    public login:  LoginApi
    public persons:  PersonsApi
    public portfolioGroups:  PortfolioGroupsApi
    public portfolios:  PortfoliosApi
    public propertyDefinitions:  PropertyDefinitionsApi
    public quotes:  QuotesApi
    public reconciliations:  ReconciliationsApi
    public referencePortfolio:  ReferencePortfolioApi
    public relationDefinitions:  RelationDefinitionsApi
    public relations:  RelationsApi
    public scopes:  ScopesApi
    public search:  SearchApi
    public systemConfiguration:  SystemConfigurationApi
    public transactionPortfolios:  TransactionPortfoliosApi
}
