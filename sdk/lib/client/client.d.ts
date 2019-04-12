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
    private tokenUrl;
    private username;
    private password;
    private clientId;
    private clientSecret;
    refreshLimit: number;
    constructor(tokenUrl: [Source, string], username: [Source, string], password: [Source, string], clientId: [Source, string], clientSecret: [Source, string], apiUrl: [Source, string]);
    apiFunctionWrapper(apiFunction: any, api: any, self: any): () => Promise<{}>;
    private fetchCredentials;
    private getCurrentEpochTime;
    private refreshToken;
    private checkTokenRefresh;
    private getAccessToken;
}
