/// <reference types="node" />
import { PropertyValue } from '../model/propertyValue';
import http = require('http');
import { DeletedEntityResponse } from '../model/deletedEntityResponse';
import { Portfolio } from '../model/portfolio';
import { PortfolioProperties } from '../model/portfolioProperties';
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
     * Delete a portfolio at the specified effectiveAt
     * @summary [EARLY ACCESS] Delete portfolio
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param effectiveAt Optional. The effective date of the deletion
     */
    deletePortfolio(scope: string, code: string, effectiveAt?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeletedEntityResponse;
    }>;
    /**
     * Delete one, many or all property values from a portfolio for the specified effectiveAt                Specifying no effectiveAt will delete all properties
     * @summary [EARLY ACCESS] Delete portfolio properties
     * @param scope The scope of the portfolio
     * @param code Code for the portfolio
     * @param effectiveAt Optional. The effective date of the deletion
     * @param portfolioPropertyKeys Optional. The keys of the properties to be deleted. None specified indicates the intention to delete all properties from the portfolio
     */
    deletePortfolioProperties(scope: string, code: string, effectiveAt?: string, portfolioPropertyKeys?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeletedEntityResponse;
    }>;
    /**
     * Retrieves the basic set of information about a portfolio using the specified scope and code.
     * @summary [EARLY ACCESS] Get portfolio definition
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param effectiveAt Optional. The effective date of the data
     * @param asAt Optional. The AsAt date of the data
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
     * Gets all commands that modified a specific portfolio, including any input transactions.
     * @summary [EARLY ACCESS] Get commands
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param fromAsAt Optional. Filters commands by those that were processed at or after this date and time
     * @param toAsAt Optional. Filters commands by those that were processed at or before this date and time
     * @param sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param start Optional. When paginating, skip this number of results
     * @param limit Optional. When paginating, limit the number of returned results to this many.
     * @param filter Optional. Expression to filter the result set
     */
    getPortfolioCommands(scope: string, code: string, fromAsAt?: Date, toAsAt?: Date, sortBy?: Array<string>, start?: number, limit?: number, filter?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ResourceListOfProcessedCommand;
    }>;
    /**
     * Get the properties of a portfolio
     * @summary [EARLY ACCESS] Get portfolio properties
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param effectiveAt Optional. The effective date of the data
     * @param asAt Optional. The AsAt date of the data
     * @param sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param start Optional. When paginating, skip this number of results
     * @param limit Optional. When paginating, limit the number of returned results to this many.
     */
    getPortfolioProperties(scope: string, code: string, effectiveAt?: string, asAt?: Date, sortBy?: Array<string>, start?: number, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PortfolioProperties;
    }>;
    /**
     * List all portfolios matching the specified criteria.                Example query syntax for the query parameter:                - To see which portfolios have holdings in the specified instruments:                    instrument.identifiers in (('LusidInstrumentId', 'LUID_PPA8HI6M'), ('Figi', 'BBG000BLNNH6'))                * Note that copy/pasting above examples results in incorrect single quote character
     * @summary [EARLY ACCESS] List portfolios
     * @param effectiveAt Optional. The effective date of the data
     * @param asAt Optional. The AsAt date of the data
     * @param page Optional. The pagination token to continue listing portfolios. This value is returned from a previous call to ListPortfolios.  If this is set, then the sortBy, filter, query, effectiveAt, and asAt fields must not have changed. Also, if set, a start  value cannot be set.
     * @param sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param start Optional. When paginating, skip this number of results
     * @param limit Optional. When paginating, limit the number of returned results to this many.
     * @param filter Optional. Expression to filter the result set
     * @param query Optional. Expression specifying the criteria that the returned portfolios must meet
     * @param portfolioPropertyKeys Optional. Keys of the properties to be decorated on to the portfolio
     */
    listPortfolios(effectiveAt?: string, asAt?: Date, page?: string, sortBy?: Array<string>, start?: number, limit?: number, filter?: string, query?: string, portfolioPropertyKeys?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ResourceListOfPortfolio;
    }>;
    /**
     * List all the portfolios in the specified scope
     * @summary [EARLY ACCESS] List portfolios for scope
     * @param scope The scope
     * @param effectiveAt Optional. The effective date of the data
     * @param asAt Optional. The AsAt date of the data
     * @param sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param start Optional. When paginating, skip this number of results
     * @param limit Optional. When paginating, limit the number of returned results to this many.
     * @param filter Optional. Expression to filter the result set
     * @param portfolioPropertyKeys Optional. Keys of the properties to be decorated on to the portfolio
     */
    listPortfoliosForScope(scope: string, effectiveAt?: string, asAt?: Date, sortBy?: Array<string>, start?: number, limit?: number, filter?: string, portfolioPropertyKeys?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ResourceListOfPortfolio;
    }>;
    /**
     * Update the definition of a specific portfolio. Note, some parts of a portfolio definition are not available for modification after the initial creation.
     * @summary [EARLY ACCESS] Update portfolio definition
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param effectiveAt Optional. The effective date for the change
     * @param request The updated portfolio definition
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
     * Upsert one or more property values to a portfolio. All properties must be of the domain Portfolio.
     * @summary [EARLY ACCESS] Upsert portfolio properties
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param portfolioProperties The property values to be upserted to the portfolio. Time variant properties must have an EffectiveFrom date.
     */
    upsertPortfolioProperties(scope: string, code: string, portfolioProperties?: {
        [key: string]: PropertyValue;
    }, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PortfolioProperties;
    }>;
}
