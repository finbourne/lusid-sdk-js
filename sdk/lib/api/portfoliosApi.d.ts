/// <reference types="node" />
import http = require('http');
import { DeletedEntityResponse } from '../model/deletedEntityResponse';
import { Portfolio } from '../model/portfolio';
import { PortfolioProperties } from '../model/portfolioProperties';
import { Property } from '../model/property';
import { ResourceListOfPortfolio } from '../model/resourceListOfPortfolio';
import { ResourceListOfProcessedCommand } from '../model/resourceListOfProcessedCommand';
import { UpdatePortfolioRequest } from '../model/updatePortfolioRequest';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum PortfoliosApiApiKeys {
}
export declare class PortfoliosApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'oauth2': OAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PortfoliosApiApiKeys, value: string): void;
    accessToken: string;
    /**
     * Delete a single portfolio. The deletion of the portfolio will be valid from the portfolio\'s creation datetime. This means that the portfolio will no longer exist at any effective datetime from the asAt datetime of deletion.
     * @summary [EARLY ACCESS] Delete portfolio
     * @param scope The scope of the portfolio.
     * @param code The code of the portfolio.
     */
    deletePortfolio(scope: string, code: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeletedEntityResponse;
    }>;
    /**
     * Delete one or more properties from a single portfolio.
     * @summary [EARLY ACCESS] Delete portfolio properties
     * @param scope The scope of the portfolio to delete properties from.
     * @param code The code of the portfolio to delete properties from. Together with the scope this uniquely              identifies the portfolio.
     * @param portfolioPropertyKeys The property keys of the properties to delete. These take the format              {domain}/{scope}/{code} e.g. \&quot;Portfolio/Manager/Id\&quot;. Each property must be from the \&quot;Portfolio\&quot; domain.
     * @param effectiveAt The effective datetime or cut label at which to delete the properties. Defaults to the current LUSID system datetime if not specified.
     */
    deletePortfolioProperties(scope: string, code: string, portfolioPropertyKeys: Array<string>, effectiveAt?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeletedEntityResponse;
    }>;
    /**
     * Retrieve the definition of a single portfolio.
     * @summary [EARLY ACCESS] Get portfolio
     * @param scope The scope of the portfolio to retrieve the definition for.
     * @param code The code of the portfolio to retrieve the definition for. Together with the scope this              uniquely identifies the portfolio.
     * @param effectiveAt The effective datetime or cut label at which to retrieve the portfolio definition. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the portfolio definition. Defaults to return the latest version of the portfolio definition if not specified.
     */
    getPortfolio(scope: string, code: string, effectiveAt?: string, asAt?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Portfolio;
    }>;
    /**
     * Gets all the commands that modified a single portfolio, including any input transactions.
     * @summary [EARLY ACCESS] Get portfolio commands
     * @param scope The scope of the portfolio to retrieve the commands for.
     * @param code The code of the portfolio to retrieve the commands for. Together with the scope this uniquely identifies              the portfolio.
     * @param fromAsAt The lower bound asAt datetime (inclusive) from which to retrieve commands. There is no lower bound if this is not specified.
     * @param toAsAt The upper bound asAt datetime (inclusive) from which to retrieve commands. There is no upper bound if this is not specified.
     * @param filter Expression to filter the result set. Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     */
    getPortfolioCommands(scope: string, code: string, fromAsAt?: Date, toAsAt?: Date, filter?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ResourceListOfProcessedCommand;
    }>;
    /**
     * List all the properties of a single portfolio.
     * @summary [EARLY ACCESS] Get portfolio properties
     * @param scope The scope of the portfolio to list the properties for.
     * @param code The code of the portfolio to list the properties for. Together with the scope this uniquely              identifies the portfolio.
     * @param effectiveAt The effective datetime or cut label at which to list the portfolio\&#39;s properties. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to list the portfolio\&#39;s properties. Defaults to return the latest version of each property if not specified.
     */
    getPortfolioProperties(scope: string, code: string, effectiveAt?: string, asAt?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PortfolioProperties;
    }>;
    /**
     * List all the portfolios matching the specified criteria.
     * @summary [EARLY ACCESS] List portfolios
     * @param effectiveAt The effective datetime or cut label at which to list the portfolios. Defaults to the current LUSID              system datetime if not specified.
     * @param asAt The asAt datetime at which to list the portfolios. Defaults to return the latest version              of each portfolio if not specified.
     * @param page The pagination token to use to continue listing portfolios from a previous call to list portfolios. This  value is returned from the previous call. If a pagination token is provided the filter, effectiveAt  and asAt fields must not have changed since the original request. Also, if set, a start value cannot be provided.
     * @param start When paginating, skip this number of results.
     * @param limit When paginating, limit the number of returned results to this many. Defaults to 65,535 if not specified.
     * @param filter Expression to filter the result set. Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param query Expression specifying the criteria that the returned portfolios must meet e.g. to see which              portfolios have holdings in the instruments with a Lusid Instrument Id (LUID) of \&#39;LUID_PPA8HI6M\&#39; or a Figi of \&#39;BBG000BLNNH6\&#39;              you would specify \&quot;instrument.identifiers in ((\&#39;LusidInstrumentId\&#39;, \&#39;LUID_PPA8HI6M\&#39;), (\&#39;Figi\&#39;, \&#39;BBG000BLNNH6\&#39;))\&quot;.
     * @param portfolioPropertyKeys A list of property keys from the \&quot;Portfolio\&quot; domain to decorate onto each portfolio.              These take the format {domain}/{scope}/{code} e.g. \&quot;Portfolio/Manager/Id\&quot;.
     */
    listPortfolios(effectiveAt?: string, asAt?: Date, page?: string, start?: number, limit?: number, filter?: string, query?: string, portfolioPropertyKeys?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ResourceListOfPortfolio;
    }>;
    /**
     * List all the portfolios in a single scope.
     * @summary [EARLY ACCESS] List portfolios for scope
     * @param scope The scope of the portfolios.
     * @param effectiveAt The effective datetime or cut label at which to list the portfolios. Defaults to the current LUSID              system datetime if not specified.
     * @param asAt The asAt datetime at which to list the portfolios. Defaults to return the latest version              of each portfolio if not specified.
     * @param filter Expression to filter the result set. Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param portfolioPropertyKeys A list of property keys from the \&quot;Portfolio\&quot; domain to decorate onto each portfolio.              These take the format {domain}/{scope}/{code} e.g. \&quot;Portfolio/Manager/Id\&quot;.
     */
    listPortfoliosForScope(scope: string, effectiveAt?: string, asAt?: Date, filter?: string, portfolioPropertyKeys?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ResourceListOfPortfolio;
    }>;
    /**
     * Update the definition of a single portfolio. Not all elements within a portfolio definition are  modifiable due to the potential implications for data already stored against the portfolio.
     * @summary [EARLY ACCESS] Update portfolio
     * @param scope The scope of the portfolio to update the definition for.
     * @param code The code of the portfolio to update the definition for. Together with the scope this uniquely              identifies the portfolio.
     * @param effectiveAt The effective datetime or cut label at which to update the definition. Defaults to the current              LUSID system datetime if not specified.
     * @param request The updated portfolio definition.
     */
    updatePortfolio(scope: string, code: string, effectiveAt?: string, request?: UpdatePortfolioRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Portfolio;
    }>;
    /**
     * Update or insert one or more properties onto a single portfolio. A property will be updated if it  already exists and inserted if it does not. All properties must be of the domain \'Portfolio\'.
     * @summary [EARLY ACCESS] Upsert portfolio properties
     * @param scope The scope of the portfolio to update or insert the properties onto.
     * @param code The code of the portfolio to update or insert the properties onto. Together with the scope              this uniquely identifies the portfolio.
     * @param portfolioProperties The properties to be updated or inserted onto the portfolio. Each property in              the request must be keyed by its unique property key. This has the format {domain}/{scope}/{code} e.g. \&quot;Portfolio/Manager/Id\&quot;.
     */
    upsertPortfolioProperties(scope: string, code: string, portfolioProperties?: {
        [key: string]: Property;
    }, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PortfolioProperties;
    }>;
}
