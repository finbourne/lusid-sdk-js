export declare enum Source {
    Environment = 0,
    Secrets = 1,
    Raw = 2
}
export declare class Client {
    authentications: any;
    basePath: string;
    api: any;
    secretsFilePath: string;
    private tokenUrlDetails;
    private usernameDetails;
    private passwordDetails;
    private clientIdDetails;
    private clientSecretDetails;
    refreshLimit: number;
    constructor(tokenUrlDetails: [Source, string], usernameDetails: [Source, string], passwordDetails: [Source, string], clientIdDetails: [Source, string], clientSecretDetails: [Source, string], apiUrlDetails: [Source, string]);
    apiFunctionWrapper(apiFunction: any, api: any, self: any): () => Promise<{}>;
    private fetchCredentials;
    private getCurrentEpochTime;
    private refreshToken;
    private checkTokenRefresh;
    private getAccessToken;
}
