import { ApplicationMetadataApi, DataTypesApi, DerivedTransactionPortfoliosApi, InstrumentsApi, LoginApi, PortfolioGroupsApi, PortfoliosApi, PropertyDefinitionsApi, ReconciliationsApi, ReferencePortfolioApi, ScopesApi, SystemConfigurationApi, TransactionPortfoliosApi } from '../api/apis';
export declare enum Source {
    Environment = 0,
    Secrets = 1,
    Raw = 2
}
declare class Oauth2 {
    accessToken: string;
    tokenExpiryDuration: number;
    tokenTimeTillExpiry: number;
    tokenLastRefreshTime: number;
    tokenLastRefreshCheckTime: number;
    constructor(accessToken: string | undefined, tokenExpiryTime: number, tokenTimeTillExpiry: number, tokenLastRefreshTime: number, tokenLastRefreshCheckTime: number);
}
declare class Api {
    applicationMetadata: ApplicationMetadataApi;
    dataTypes: DataTypesApi;
    derivedTransactionPortfolios: DerivedTransactionPortfoliosApi;
    instruments: InstrumentsApi;
    login: LoginApi;
    portfolioGroups: PortfolioGroupsApi;
    portfolios: PortfoliosApi;
    propertyDefinitions: PropertyDefinitionsApi;
    reconciliations: ReconciliationsApi;
    referencePortfolio: ReferencePortfolioApi;
    scopes: ScopesApi;
    systemConfiguration: SystemConfigurationApi;
    transactionPortfolios: TransactionPortfoliosApi;
}
export declare class Client {
    authentications: {
        [key: string]: Oauth2;
    };
    basePath: string;
    api: Api;
    secretsFilePath: string;
    private tokenUrlDetails;
    private usernameDetails;
    private passwordDetails;
    private clientIdDetails;
    private clientSecretDetails;
    refreshLimit: number;
    constructor(tokenUrlDetails: [Source, string], usernameDetails: [Source, string], passwordDetails: [Source, string], clientIdDetails: [Source, string], clientSecretDetails: [Source, string], apiUrlDetails: [Source, string]);
    apiFunctionWrapper(apiFunction: any, api: any, self: any): () => Promise<unknown>;
    private fetchCredentials;
    private getCurrentEpochTime;
    private refreshToken;
    private checkTokenRefresh;
    private getAccessToken;
}
export {};
