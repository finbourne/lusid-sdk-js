export * from './applicationMetadataApi';
import { ApplicationMetadataApi } from './applicationMetadataApi';
export * from './cutLabelDefinitionsApi';
import { CutLabelDefinitionsApi } from './cutLabelDefinitionsApi';
export * from './dataTypesApi';
import { DataTypesApi } from './dataTypesApi';
export * from './derivedTransactionPortfoliosApi';
import { DerivedTransactionPortfoliosApi } from './derivedTransactionPortfoliosApi';
export * from './instrumentsApi';
import { InstrumentsApi } from './instrumentsApi';
export * from './loginApi';
import { LoginApi } from './loginApi';
export * from './portfolioGroupsApi';
import { PortfolioGroupsApi } from './portfolioGroupsApi';
export * from './portfoliosApi';
import { PortfoliosApi } from './portfoliosApi';
export * from './propertyDefinitionsApi';
import { PropertyDefinitionsApi } from './propertyDefinitionsApi';
export * from './reconciliationsApi';
import { ReconciliationsApi } from './reconciliationsApi';
export * from './referencePortfolioApi';
import { ReferencePortfolioApi } from './referencePortfolioApi';
export * from './scopesApi';
import { ScopesApi } from './scopesApi';
export * from './searchApi';
import { SearchApi } from './searchApi';
export * from './systemConfigurationApi';
import { SystemConfigurationApi } from './systemConfigurationApi';
export * from './transactionPortfoliosApi';
import { TransactionPortfoliosApi } from './transactionPortfoliosApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [ApplicationMetadataApi, CutLabelDefinitionsApi, DataTypesApi, DerivedTransactionPortfoliosApi, InstrumentsApi, LoginApi, PortfolioGroupsApi, PortfoliosApi, PropertyDefinitionsApi, ReconciliationsApi, ReferencePortfolioApi, ScopesApi, SearchApi, SystemConfigurationApi, TransactionPortfoliosApi];
