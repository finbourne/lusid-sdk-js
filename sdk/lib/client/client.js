"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Require the LUSID SDK and libaries
var lusid = require('../api');
var querystring = require('querystring');
var secretsPath = './secrets.json';
var superagent = require('superagent');
var refreshLimit = 600;
// Create an enum for use in defining the source of each credential
var Source;
(function (Source) {
    // Use an environment variable to populate
    Source[Source["Environment"] = 0] = "Environment";
    // Use a file called secrets.json file to populate
    Source[Source["Secrets"] = 1] = "Secrets";
    // Use a raw value or variable to populate
    Source[Source["Raw"] = 2] = "Raw";
})(Source = exports.Source || (exports.Source = {}));
// This class containes the OAuth2.0 details
var Oauth2 = /** @class */ (function () {
    function Oauth2(accessToken, tokenExpiryTime, tokenTimeTillExpiry, tokenLastRefreshTime, tokenLastRefreshCheckTime) {
        this.accessToken = accessToken;
        this.tokenExpiryDuration = tokenExpiryTime;
        this.tokenTimeTillExpiry = tokenTimeTillExpiry;
        this.tokenLastRefreshTime = tokenLastRefreshTime;
        this.tokenLastRefreshCheckTime = tokenLastRefreshCheckTime;
    }
    return Oauth2;
}());
// The class for the client
var Client = /** @class */ (function () {
    // Constructor method
    function Client(tokenUrl, username, password, clientId, clientSecret, apiUrl) {
        var _this = this;
        // The refresh limit in seconds before token expiry to trigger a refresh
        this.refreshLimit = refreshLimit;
        // Set the path to the secrets file
        this.secretsFilePath = secretsPath;
        // Set the credentials
        this.tokenUrl = this.fetchCredentials(tokenUrl[0], tokenUrl[1]);
        this.username = this.fetchCredentials(username[0], username[1]);
        this.password = this.fetchCredentials(password[0], password[1]);
        this.clientId = this.fetchCredentials(clientId[0], clientId[1]);
        this.clientSecret = this.fetchCredentials(clientSecret[0], clientSecret[1]);
        this.basePath = this.fetchCredentials(apiUrl[0], apiUrl[1]);
        console.log(this.basePath);
        // Set the authentications to use oauth2
        this.authentications = { 'oauth2': new Oauth2(undefined, 0, 0, 0, 0) };
        // Iterate over the API endpoints and add each to our client
        this.api = {};
        lusid.APIS.forEach(function (api) {
            var apiInstance = new api();
            // Get the name of the API
            var apiName = apiInstance.constructor.name;
            // Shorten the api name slightly by removing API at the end
            apiName = apiName.substring(0, apiName.length - 3);
            // Make the API endpoint camel case
            apiName = apiName[0].toLowerCase() + apiName.slice(1);
            // Add the endpoint to our client
            _this.api[apiName] = new api();
            // Add the base path and accessToken
            _this.api[apiName]['_basePath'] = _this.basePath;
            _this.api[apiName]['authentications']['oauth2']['accessToken'] = _this.authentications['oauth2'].accessToken;
            // For each function on the API
            for (var prop in _this.api[apiName]) {
                // Exclude two non-api specific functions
                if (typeof (_this.api[apiName][prop]) == 'function' && !['setDefaultAuthentication', 'setApiKey'].includes(prop)) {
                    _this.api[apiName][prop] = _this.apiFunctionWrapper(_this.api[apiName][prop], _this.api[apiName]);
                }
            }
        });
    }
    Client.prototype.apiFunctionWrapper = function (apiFunction, api) {
        var _this = this;
        return function () {
            _this.refreshToken(_this.authentications['oauth2'], _this.refreshLimit, _this.tokenUrl, _this.username, _this.password, _this.clientId, _this.clientSecret)
                .then(function (oauthPopulated) {
                api['authentications']['oauth2']['accessToken'] = oauthPopulated.accessToken;
                return apiFunction.apply(this, arguments);
            });
        };
    };
    // Gets the credentials from the specified source
    Client.prototype.fetchCredentials = function (source, value) {
        // Environment source
        if (source == Source.Environment) {
            // Set the credential using an environment variable
            var credential = process.env[value] || 'MISSING';
            // If it the environment variable does not exist then throw error
            if (credential == 'MISSING') {
                throw "Environment variable " + value + " has not been specified";
            }
            // Raw or variable source
        }
        else if (source == Source.Raw) {
            // Set the credential directly
            var credential = value;
            // Secrets source
        }
        else if (source = Source.Secrets) {
            // Try and import the credentials file
            try {
                var credentials = require(this.secretsFilePath);
                // If there are any problems throw an error
            }
            catch (e) {
                throw "File " + this.secretsFilePath + " could not be found/read, ensure that it exists in the client folder";
            }
            // If the property exists in the secrets file set the credential
            if (credentials.hasOwnProperty(value)) {
                var credential = credentials[value];
            }
            else {
                throw "The specified value " + value + " does not exist in the file";
            }
            // If the source is incorrectly specified
        }
        else {
            var availableSources = void 0;
            for (var availableSource in Source) {
                availableSources.push(availableSource);
            }
            throw "Source is not valid, must be one of " + availableSources.toString();
        }
        // Return the credential
        return credential;
    };
    // Gets the current time in seconds since 1970, used for token refresh
    Client.prototype.getCurrentEpochTime = function () {
        return Math.floor(new Date().getTime() / 1000);
    };
    // This function handles refreshing the token when required
    Client.prototype.refreshToken = function (oauth2, refreshLimit, tokenUrl, username, password, clientId, clientSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // Returns a promise
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // Check if the token needs a refresh
                        if (_this.checkTokenRefresh(oauth2, refreshLimit)) {
                            // If so get a new access token
                            _this.getAccessToken(tokenUrl, username, password, clientId, clientSecret)
                                // Call then and return the oauth object to avoid nested promises in return
                                .then(function (oauthObject) {
                                console.log('inside then');
                                resolve(oauthObject);
                            });
                        }
                        else {
                            // If no refresh required just return the oauth object
                            resolve(oauth2);
                        }
                    })];
            });
        });
    };
    // Checks if the access token requires a refresh
    Client.prototype.checkTokenRefresh = function (oauth2, refreshLimit) {
        // Check if an access token already exists, if not trigger refresh
        if (oauth2.accessToken === undefined) {
            // Call Okta to get access details
            return true;
        }
        // If it does exist check that it has not expired
        var currentTime = this.getCurrentEpochTime();
        var difference = currentTime - oauth2.tokenLastRefreshTime;
        oauth2.tokenTimeTillExpiry -= difference;
        oauth2.tokenLastRefreshCheckTime = currentTime;
        // If the token will expire in less than the refresh limit
        if (oauth2.tokenTimeTillExpiry < refreshLimit) {
            // Call Okta to get access details
            return true;
        }
        // Else don't trigger a refresh
        return false;
    };
    // Gets an access token form Okta to use to interact with the API
    Client.prototype.getAccessToken = function (tokenUrl, username, password, clientId, clientSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // Returns a rpomise
                console.log('running get access token');
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        console.log('inside promise');
                        // Set the headers for authentication with Okta - only x-www-form-urlencoded supported
                        var headers = { headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/x-www-form-urlencoded"
                            } };
                        console.log('headers set');
                        // Set the request body for authentication with Okta
                        var requestBody = querystring.stringify({
                            grant_type: "password",
                            username: username,
                            password: password,
                            scope: "openid client groups",
                            client_id: clientId,
                            client_secret: clientSecret
                        });
                        console.log('request body set');
                        // Make a POST request to Okta to get a LUSID access token
                        superagent
                            .post(tokenUrl)
                            .send(requestBody)
                            .set(headers)
                            .then(function (result) {
                            console.log('response from okta' + result.statusCode);
                            return {
                                statusCode: result.statusCode,
                                apiToken: result.body.access_token,
                                apiTokenExpiry: result.body.expires_in
                            };
                        })
                            // Using the OktaResponse get the access token and refresh details
                            .then(function (oktaResponse) {
                            if (oktaResponse.statusCode == 200) {
                                console.log('response from okta setting oAuth2');
                                var oAuth2 = new Oauth2(oktaResponse.apiToken, oktaResponse.apiTokenExpiry, oktaResponse.apiTokenExpiry, _this.getCurrentEpochTime(), _this.getCurrentEpochTime());
                                resolve(oAuth2);
                            }
                            else {
                                throw "Okta returned status code of " + oktaResponse.statusCode + " please check your connection and credentials";
                            }
                        })
                            .catch(function (err) { return reject(err); });
                    })];
            });
        });
    };
    return Client;
}());
exports.Client = Client;
