/// <reference types="node" />
import { PerpetualPropertyValue } from '../model/perpetualPropertyValue';
import http = require('http');
import { AddTransactionPropertyResponse } from '../model/addTransactionPropertyResponse';
import { AdjustHolding } from '../model/adjustHolding';
import { AdjustHoldingRequest } from '../model/adjustHoldingRequest';
import { CreatePortfolioDetails } from '../model/createPortfolioDetails';
import { CreateTransactionPortfolioRequest } from '../model/createTransactionPortfolioRequest';
import { DeletedEntityResponse } from '../model/deletedEntityResponse';
import { ExecutionRequest } from '../model/executionRequest';
import { HoldingsAdjustment } from '../model/holdingsAdjustment';
import { Portfolio } from '../model/portfolio';
import { PortfolioDetails } from '../model/portfolioDetails';
import { ResourceListOfHoldingsAdjustmentHeader } from '../model/resourceListOfHoldingsAdjustmentHeader';
import { TransactionQueryParameters } from '../model/transactionQueryParameters';
import { TransactionRequest } from '../model/transactionRequest';
import { UpsertPortfolioExecutionsResponse } from '../model/upsertPortfolioExecutionsResponse';
import { UpsertPortfolioTransactionsResponse } from '../model/upsertPortfolioTransactionsResponse';
import { VersionedResourceListOfOutputTransaction } from '../model/versionedResourceListOfOutputTransaction';
import { VersionedResourceListOfPortfolioHolding } from '../model/versionedResourceListOfPortfolioHolding';
import { VersionedResourceListOfTransaction } from '../model/versionedResourceListOfTransaction';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum TransactionPortfoliosApiApiKeys {
}
export declare class TransactionPortfoliosApi {
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
    setApiKey(key: TransactionPortfoliosApiApiKeys, value: string): void;
    accessToken: string;
    /**
     * Upsert one or more transaction properties to a single transaction in a portfolio
     * @summary Add transaction properties
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param transactionId Id of transaction
     * @param transactionProperties Transaction properties values
     */
    addTransactionProperty(scope: string, code: string, transactionId: string, transactionProperties?: {
        [key: string]: PerpetualPropertyValue;
    }, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddTransactionPropertyResponse;
    }>;
    /**
     * Adjust one or more holdings in a transaction portfolio    Prompt the creation of transactions in a specific transaction portfolio to bring selected holdings to the specified targets
     * @summary Adjust holdings
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param effectiveAt The effective date of the change
     * @param holdingAdjustments The selected set of holdings adjustments
     */
    adjustHoldings(scope: string, code: string, effectiveAt: Date, holdingAdjustments?: Array<AdjustHoldingRequest>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AdjustHolding;
    }>;
    /**
     * Builds and returns the collection of all types of transactions that affect the holdings of a portfolio in to a set of output transactions
     * @summary Build output transactions
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param asAt Optional. The AsAt date of the data
     * @param sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param start Optional. When paginating, skip this number of results
     * @param limit Optional. When paginating, limit the number of returned results to this many.
     * @param instrumentPropertyKeys Optional. Keys for the instrument property values to be decorated onto the transactions
     * @param filter Optional. Expression to filter the result set
     * @param parameters Optional. Transaction query parameters
     */
    buildTransactions(scope: string, code: string, asAt?: Date, sortBy?: Array<string>, start?: number, limit?: number, instrumentPropertyKeys?: Array<string>, filter?: string, parameters?: TransactionQueryParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VersionedResourceListOfOutputTransaction;
    }>;
    /**
     * Cancel previous adjust-holdings for the portfolio for a specific date
     * @summary Cancel holdings adjustments
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param effectiveAt The effective date of the change
     */
    cancelAdjustHoldings(scope: string, code: string, effectiveAt: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeletedEntityResponse;
    }>;
    /**
     * Create a transaction portfolio in a specific scope
     * @summary Create transaction portfolio
     * @param scope The scope into which the transaction portfolio will be created
     * @param createRequest The transaction portfolio definition
     */
    createPortfolio(scope: string, createRequest?: CreateTransactionPortfolioRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Portfolio;
    }>;
    /**
     * Delete one or more executions from a transaction portfolio
     * @summary Delete executions
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param executionIds Ids of executions to delete
     */
    deleteExecutions(scope: string, code: string, executionIds?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeletedEntityResponse;
    }>;
    /**
     * Delete a property value from a single transaction in a portfolio
     * @summary Delete transaction property
     * @param scope The scope of the portfolio
     * @param code Code for the portfolio
     * @param transactionId Id of the transaction to delete the property from
     * @param transactionPropertyKey The key of the property to be deleted
     */
    deletePropertyFromTransaction(scope: string, code: string, transactionId: string, transactionPropertyKey?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeletedEntityResponse;
    }>;
    /**
     * Delete one or more transactions from a transaction portfolio
     * @summary Delete transactions
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param transactionIds Ids of transactions to delete
     */
    deleteTransactions(scope: string, code: string, transactionIds?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeletedEntityResponse;
    }>;
    /**
     * Get the details document associated with a transaction portfolio                When requesting details from a derived transaction portfolio, the returned set of details could come from a different transaction portfolio
     * @summary Get portfolio details
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param effectiveAt Optional. The effective date of the data
     * @param asAt Optional. The AsAt date of the data
     */
    getDetails(scope: string, code: string, effectiveAt?: Date, asAt?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PortfolioDetails;
    }>;
    /**
     * Get the aggregate holdings of a transaction portfolio.  If no effectiveAt or asAt  are supplied then values will be defaulted to the latest system time.
     * @summary Get holdings
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param byTaxlots Option to expand holdings to return the underlying tax-lots
     * @param effectiveAt Optional. The effective date of the portfolio
     * @param asAt Optional. The AsAt date of the data
     * @param sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param start Optional. When paginating, skip this number of results
     * @param limit Optional. When paginating, limit the number of returned results to this many.
     * @param filter Optional. Expression to filter the result set
     * @param instrumentPropertyKeys Optional. Keys for the instrument property values to be decorated onto the holdings
     */
    getHoldings(scope: string, code: string, byTaxlots?: boolean, effectiveAt?: Date, asAt?: Date, sortBy?: Array<string>, start?: number, limit?: number, filter?: string, instrumentPropertyKeys?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VersionedResourceListOfPortfolioHolding;
    }>;
    /**
     * Get a holdings adjustment for a transaction portfolio at a specific effective time.    A holdings adjustment definition will only be returned if one exists for the specified effective time
     * @summary Get holding adjustment
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param effectiveAt The effective time of the holdings adjustment
     * @param asAt Optional. The AsAt date of the data
     */
    getHoldingsAdjustment(scope: string, code: string, effectiveAt: Date, asAt?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HoldingsAdjustment;
    }>;
    /**
     * Get the transactions from a transaction portfolio    When the requested portfolio is a derived transaction portfolio, the returned set of transactions is the union set of all transactions of the parent (and ancestors) and the specified portfolio.
     * @summary Get transactions
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param fromTransactionDate Optional. Limit the returned transactions to those with a transaction date equal or later than this date
     * @param toTransactionDate Optional. Limit the returned transactions to those with a transaction date equal or before this date
     * @param asAt Optional. The AsAt date of the data
     * @param sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param start Optional. When paginating, skip this number of results
     * @param limit Optional. When paginating, limit the number of returned results to this many.
     * @param instrumentPropertyKeys Optional. Keys for the instrument property values that will be decorated onto the transactions
     * @param filter Optional. Expression to filter the result set
     */
    getTransactions(scope: string, code: string, fromTransactionDate?: Date, toTransactionDate?: Date, asAt?: Date, sortBy?: Array<string>, start?: number, limit?: number, instrumentPropertyKeys?: Array<string>, filter?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VersionedResourceListOfTransaction;
    }>;
    /**
     * Get holdings adjustments from a transaction portfolio in an interval of effective time.
     * @summary List holdings adjustments
     * @param scope The scope of the portfolio
     * @param code Code for the portfolio
     * @param fromEffectiveAt Holdings adjustments between this time (inclusive) and the toEffectiveAt are returned.
     * @param toEffectiveAt Holdings adjustments between this time (inclusive) and the fromEffectiveAt are returned.
     * @param asAt Optional. The AsAt date of the data
     */
    listHoldingsAdjustments(scope: string, code: string, fromEffectiveAt?: Date, toEffectiveAt?: Date, asAt?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ResourceListOfHoldingsAdjustmentHeader;
    }>;
    /**
     * Prompt the creation of transactions in a specific transaction portfolio to bring all holdings to the specified targets
     * @summary Set all holdings on a transaction portfolio
     * @param scope The scope of the transaction portfolio
     * @param code The code of the transaction portfolio
     * @param effectiveAt The effective date of the change
     * @param holdingAdjustments The complete set of holdings adjustments for the portfolio
     */
    setHoldings(scope: string, code: string, effectiveAt: Date, holdingAdjustments?: Array<AdjustHoldingRequest>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AdjustHolding;
    }>;
    /**
     * Inserts new executions, or updates those already present
     * @summary Upsert executions
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param executions The executions to be updated
     */
    upsertExecutions(scope: string, code: string, executions?: Array<ExecutionRequest>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpsertPortfolioExecutionsResponse;
    }>;
    /**
     * Update the portfolio details for the specified transaction portfolios or add if it doesn't already exist (in the case of a derived transaction portfolio).
     * @summary Upsert details
     * @param scope The scope of the portfolio
     * @param code The code of the portfolio
     * @param effectiveAt Optional. The effective date of the change
     * @param details The set of details for the portfolio
     */
    upsertPortfolioDetails(scope: string, code: string, effectiveAt?: Date, details?: CreatePortfolioDetails, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PortfolioDetails;
    }>;
    /**
     * Upsert transactions
     * @summary Upsert transactions into the specified transaction portfolio
     * @param scope The scope of the portfolio
     * @param code The code for the portfolio
     * @param transactions The transactions to be upserted
     */
    upsertTransactions(scope: string, code: string, transactions?: Array<TransactionRequest>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpsertPortfolioTransactionsResponse;
    }>;
}
