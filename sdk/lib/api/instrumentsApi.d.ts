/// <reference types="node" />
import { InstrumentDefinition } from '../model/instrumentDefinition';
import http = require('http');
import { DeleteInstrumentResponse } from '../model/deleteInstrumentResponse';
import { GetInstrumentsResponse } from '../model/getInstrumentsResponse';
import { Instrument } from '../model/instrument';
import { MatchInstrumentsResponse } from '../model/matchInstrumentsResponse';
import { Property } from '../model/property';
import { ResourceListOfInstrument } from '../model/resourceListOfInstrument';
import { ResourceListOfString } from '../model/resourceListOfString';
import { UpdateInstrumentIdentifierRequest } from '../model/updateInstrumentIdentifierRequest';
import { UpsertInstrumentPropertiesResponse } from '../model/upsertInstrumentPropertiesResponse';
import { UpsertInstrumentPropertyRequest } from '../model/upsertInstrumentPropertyRequest';
import { UpsertInstrumentsResponse } from '../model/upsertInstrumentsResponse';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum InstrumentsApiApiKeys {
}
export declare class InstrumentsApi {
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
    setApiKey(key: InstrumentsApiApiKeys, value: string): void;
    accessToken: string;
    /**
     * Attempt to delete one or more \"client\" instruments.    The response will include those instruments that could not be deleted (as well as any available details).                It is important to always check the 'Failed' set for any unsuccessful results.
     * @summary Delete instrument
     * @param identifierType The type of identifier being supplied
     * @param identifier The instrument identifier
     */
    deleteInstrument(identifierType: string, identifier: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteInstrumentResponse;
    }>;
    /**
     * Get a collection of instruments by a set of identifiers. Optionally, it is possible to decorate each instrument with specified property data.
     * @summary Search instrument definition
     * @param effectiveAt Optional. The effective date of the query
     * @param asAt Optional. The AsAt date of the query
     * @param instrumentPropertyKeys Optional. Keys of the properties to be decorated on to the instrument
     * @param aliases The list of market aliases (e.g ISIN, Ticker) to find instruments by.
     */
    findInstruments(effectiveAt?: Date, asAt?: Date, instrumentPropertyKeys?: Array<string>, aliases?: Array<Property>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ResourceListOfInstrument;
    }>;
    /**
     * Get an individual instrument by the one of its unique instrument identifiers. Optionally, it is possible to decorate each instrument with specified property data.
     * @summary Get instrument definition
     * @param identifierType The type of identifier being supplied
     * @param identifier The identifier of the requested instrument
     * @param effectiveAt Optional. The effective date of the query
     * @param asAt Optional. The AsAt date of the query
     * @param instrumentPropertyKeys Optional. Keys of the properties to be decorated on to the instrument
     */
    getInstrument(identifierType: string, identifier: string, effectiveAt?: Date, asAt?: Date, instrumentPropertyKeys?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Instrument;
    }>;
    /**
     * Gets the set of identifiers that have been configured as unique identifiers for instruments.     Only CodeTypes returned from this end point can be used as identifiers for instruments.
     * @summary Get allowable instrument identifiers
     */
    getInstrumentIdentifiers(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ResourceListOfString;
    }>;
    /**
     * Get a collection of instruments by a set of identifiers. Optionally, it is possible to decorate each instrument with specified property data.
     * @summary Get instrument definition
     * @param identifierType The type of identifiers being supplied
     * @param identifiers The identifiers of the instruments to get
     * @param effectiveAt Optional. The effective date of the request
     * @param asAt Optional. The as at date of the request
     * @param instrumentPropertyKeys Optional. Keys of the properties to be decorated on to the instrument
     */
    getInstruments(identifierType: string, identifiers: Array<string>, effectiveAt?: Date, asAt?: Date, instrumentPropertyKeys?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetInstrumentsResponse;
    }>;
    /**
     * Lists all instruments that have been mastered within LUSID.
     * @summary Get all of the currently mastered instruments in LUSID
     * @param asAt Optional. The AsAt time
     * @param effectiveAt Optional. The effective date of the query
     * @param page Optional. The pagination token to continue listing instruments. This value is returned from a previous call to ListInstruments.  If this is set, then the sortBy, filter, effectiveAt, and asAt fields must not have changed. Also, if set, a start value cannot be set.
     * @param sortBy Optional. Order the results by these fields. Use use the &#39;-&#39; sign to denote descending order e.g. -MyFieldName
     * @param start Optional. When paginating, skip this number of results
     * @param limit Optional. When paginating, limit the number of returned results to this many
     * @param filter Optional. Expression to filter the result set - the default filter returns only instruments in the Active state
     * @param instrumentPropertyKeys Optional. Keys of the properties to be decorated on to the instrument
     */
    listInstruments(asAt?: Date, effectiveAt?: Date, page?: string, sortBy?: Array<string>, start?: number, limit?: number, filter?: string, instrumentPropertyKeys?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ResourceListOfInstrument;
    }>;
    /**
     * Search for a set of instruments from an external instrument mastering service
     * @summary Find externally mastered instruments
     * @param identifierType The type of identifiers being supplied
     * @param identifiers The identifiers of the instruments to get
     */
    matchInstruments(identifierType?: string, identifiers?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MatchInstrumentsResponse;
    }>;
    /**
     * Adds, updates, or removes an identifier on an instrument
     * @summary Update instrument identifier
     * @param identifierType The type of identifier being supplied
     * @param identifier The instrument identifier
     * @param request The identifier to add, update, or remove
     */
    updateInstrumentIdentifier(identifierType: string, identifier: string, request?: UpdateInstrumentIdentifierRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Instrument;
    }>;
    /**
     * Attempt to master one or more instruments in LUSID's instrument master. Each instrument is keyed by some unique key. This key is unimportant, and serves only as a method to identify created instruments in the response.    The response will return both the collection of successfully created instruments, as well as those that were rejected and why their creation failed. They will be keyed against the key supplied in the  request.                It is important to always check the 'Failed' set for any unsuccessful results.
     * @summary Upsert instruments
     * @param requests The instrument definitions
     */
    upsertInstruments(requests?: {
        [key: string]: InstrumentDefinition;
    }, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpsertInstrumentsResponse;
    }>;
    /**
     * Attempt to upsert property data for one or more instruments, properties, and effective dates.    The response will include the details of any failures that occurred during data storage.                It is important to always check the 'Failed' collection for any unsuccessful results.
     * @summary Upsert instrument properties
     * @param instrumentProperties The instrument property data
     */
    upsertInstrumentsProperties(instrumentProperties?: Array<UpsertInstrumentPropertyRequest>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpsertInstrumentPropertiesResponse;
    }>;
}
