"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Require the libraries
var request_1 = __importDefault(require("request"));
var querystring_1 = __importDefault(require("querystring"));
// Import a list of the LUSID APIs
var lusid = require('../api');
// Set the default path to the secrets file
var secretsPath = './secrets.json';
// Set the default amount of seconds before token expiry to call a refresh
var refreshLimit = 3580;
/*
To authenticate with a third party identity provider, a number of credentials
are required e.g. username, password, clientId, clientSecret etc.

Each credential may be sourced from a different location, the three locations
that you can use with the client are:

- An environment variable,
- A secrets.json file located in the client folder of the LUSID SDK
- A variable or raw string

The enum below is for use in identifying the source of each credential when
you create a client
*/
var Source;
(function (Source) {
    // Use an environment variable to populate the credential
    Source[Source["Environment"] = 0] = "Environment";
    // Use a file called secrets.json file to populate the credential
    Source[Source["Secrets"] = 1] = "Secrets";
    // Use a raw value or variable to populate the credential
    Source[Source["Raw"] = 2] = "Raw";
})(Source = exports.Source || (exports.Source = {}));
/*
To ensure that you have all the credentials correctly populated we use a
Credentials class. This class is only ever used inside function calls. This
means that the sensitive credentials are never stored and are only pulled from
their sources when required.
*/
var Credentials = /** @class */ (function () {
    function Credentials(tokenUrl, username, password, clientId, clientSecret) {
        this.tokenUrl = tokenUrl;
        this.username = username;
        this.password = password;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }
    return Credentials;
}());
/*
The LUSID API uses OAuth2.0 for authentication. The access token generated
through the OAuth2.0 flow expires after a given period of time. To ensure
uninterrupted access to LUSID we need to manage the refresh of this token.

The class below allows you to keep track of the current access token as well
as details regarding the token's expiry and last refresh
 */
var Oauth2 = /** @class */ (function () {
    // Constructor method to set each property
    function Oauth2(accessToken, tokenExpiryTime, tokenTimeTillExpiry, tokenLastRefreshTime, tokenLastRefreshCheckTime) {
        this.accessToken = accessToken;
        this.tokenExpiryDuration = tokenExpiryTime;
        this.tokenTimeTillExpiry = tokenTimeTillExpiry;
        this.tokenLastRefreshTime = tokenLastRefreshTime;
        this.tokenLastRefreshCheckTime = tokenLastRefreshCheckTime;
    }
    return Oauth2;
}());
/*
The Api class exists to ensure that all the methods available on each of the
LUSID APIs show up when using code editors and interactive development
environments which have features such as IntelliSense.

It contains a property for each of the LUSID APIs.
*/
var Api = /** @class */ (function () {
    function Api() {
    }
    return Api;
}());
/*
To get connected with LUSID all you need to do is create a new client from
the Client class below. This class handles storage of the location of each
of the credentials, OAuth2.0 token refresh logic and is populated with every
one of LUSIDs APIs and their methods.
*/
var Client = /** @class */ (function () {
    // Constructor method which takes the details on where to find the credentials
    function Client(tokenUrlDetails, usernameDetails, passwordDetails, clientIdDetails, clientSecretDetails, apiUrlDetails) {
        var _this = this;
        // The refresh limit in seconds before token expiry to trigger a refresh
        this.refreshLimit = refreshLimit;
        // Set the path to the secrets file
        this.secretsFilePath = secretsPath;
        // Set the credential details
        this.tokenUrlDetails = tokenUrlDetails;
        this.usernameDetails = usernameDetails;
        this.passwordDetails = passwordDetails;
        this.clientIdDetails = clientIdDetails;
        this.clientSecretDetails = clientSecretDetails;
        // Set the base path for the API
        this.basePath = this.fetchCredentials(apiUrlDetails[0], apiUrlDetails[1]);
        // Set the authentications to use oauth2
        this.authentications = { 'oauth2': new Oauth2(undefined, 0, 0, 0, 0) };
        // Create a new instance of the API
        this.api = new Api();
        // Iterate over the API endpoints and add each to our client
        lusid.APIS.forEach(function (api) {
            // Create a new instance of the api endpoint
            var apiInstance = new api(_this.basePath);
            // Get the name of the API
            var apiName = apiInstance.constructor.name;
            // Shorten the api name slightly by removing API at the end
            apiName = apiName.substring(0, apiName.length - 3);
            // Make the API endpoint camel case
            apiName = apiName[0].toLowerCase() + apiName.slice(1);
            // Add the endpoint to our client
            _this.api[apiName] = apiInstance;
            // For each function on the API
            for (var prop in _this.api[apiName]) {
                // Exclude two non-api specific functions
                if (typeof (_this.api[apiName][prop]) == 'function' && !['setDefaultAuthentication', 'setApiKey'].includes(prop)) {
                    // Wrap each method with token refresh logic
                    _this.api[apiName][prop] = _this.apiFunctionWrapper(_this.api[apiName][prop], _this.api[apiName], _this);
                }
            }
        });
    }
    /*
    The function below is a wrapper function which wraps the input function
    'apiFunction' with token refresh logic to ensure uninterrupted access to LUSID.
    */
    Client.prototype.apiFunctionWrapper = function (apiFunction, api, self) {
        // Return a function
        return function () {
            // Collect the arguments passed into the wrapper to use later
            var topLevelArguments = arguments;
            // Return a promise to ensure that the function remains 'thenable'
            return new Promise(function (resolve, reject) {
                // Trigger a token refresh
                var oauthPopulated = self.refreshToken(self.authentications['oauth2'], self.refreshLimit, self.tokenUrlDetails, self.usernameDetails, self.passwordDetails, self.clientIdDetails, self.clientSecretDetails);
                // Once this has completed pass the oauth2 details on
                oauthPopulated.then(function (oauth2Details) {
                    // Update the clients oauth2 details
                    self.authentications.oauth2 = oauth2Details;
                    // Update the access token of the api being called
                    api['authentications']['oauth2']['accessToken'] = self.authentications.oauth2.accessToken;
                    /*
                    Resolve the promise with the function that was wrapped
                    In this case api is the api that this function is a part of,
                    this is required to ensure that the function is called
                    in the right context. The second argument topLevelArguments
                    is the arguments passed into the Wrapper
                    */
                    resolve(apiFunction.apply(api, topLevelArguments));
                })
                    // Error handling
                    .catch(function (err) { return reject(err); });
            });
        };
    };
    /*
    The fetchCredentials function gets the credentials from the specified source
    */
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
    /*
    Gets the current time in seconds since 1970, used for token refresh calculations
    and to keep track of the last refresh
    */
    Client.prototype.getCurrentEpochTime = function () {
        return Math.floor(new Date().getTime() / 1000);
    };
    /*
    This function handles refreshing the token when required. It checks for a
    token refresh and if required it fetches the appropriate credentials, calls
    the identity provider and retrieves a new access token
    */
    Client.prototype.refreshToken = function (oauth2, refreshLimit, tokenUrlDetails, usernameDetails, passwordDetails, clientIdDetails, clientSecretDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // Return a promise
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // Check if the token needs a refresh
                        if (_this.checkTokenRefresh(oauth2, refreshLimit)) {
                            // If so, populate the credentials
                            var credentials = new Credentials(_this.fetchCredentials(tokenUrlDetails[0], tokenUrlDetails[1]), _this.fetchCredentials(usernameDetails[0], usernameDetails[1]), _this.fetchCredentials(passwordDetails[0], passwordDetails[1]), _this.fetchCredentials(clientIdDetails[0], clientIdDetails[1]), _this.fetchCredentials(clientSecretDetails[0], clientSecretDetails[1]));
                            // Get a new access token using these credentials
                            _this.getAccessToken(credentials.tokenUrl, credentials.username, credentials.password, credentials.clientId, credentials.clientSecret)
                                // Return the oauth object to avoid nested promises in return
                                .then(function (oauthObject) {
                                // Resolve the promise
                                resolve(oauthObject);
                            })
                                .catch(function (err) { return reject(err); });
                        }
                        else {
                            // If no refresh required just return the oauth object
                            resolve(oauth2);
                        }
                    })];
            });
        });
    };
    /*
    This function checks if the access token supplied via an OAuth2.0 flow requires
    refreshing. It looks to see if the access token is undefined (meaning that
    it has never been set) or if it is close to expiring.
  
    If a refresh is required it returns true, else it returns false
    */
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
    /*
    This function calls the identity provider to get an access token
    */
    Client.prototype.getAccessToken = function (tokenUrl, username, password, clientId, clientSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // Returns a rpomise
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // Set the headers for authentication with Okta - only x-www-form-urlencoded supported
                        var headers = {
                            "Accept": "application/json",
                            "Content-Type": "application/x-www-form-urlencoded"
                        };
                        // Set the request body for authentication with Okta
                        var requestBody = querystring_1.default.stringify({
                            grant_type: "password",
                            username: username,
                            password: password,
                            scope: "openid client groups",
                            client_id: clientId,
                            client_secret: clientSecret
                        });
                        // Make a POST request to Okta to get a LUSID access token
                        var localVarRequestOptions = {
                            method: 'POST',
                            headers: headers,
                            uri: tokenUrl,
                            useQuerystring: false,
                            json: true,
                            body: requestBody
                        };
                        request_1.default(localVarRequestOptions, function (err, res, body) {
                            if (err) {
                                reject(err);
                            }
                            else if (res.statusCode == 200) {
                                var oAuth2 = new Oauth2(body.access_token, body.expires_in, body.expires_in, _this.getCurrentEpochTime(), _this.getCurrentEpochTime());
                                resolve(oAuth2);
                            }
                            else {
                                reject(body);
                            }
                        });
                    })];
            });
        });
    };
    return Client;
}());
exports.Client = Client;
