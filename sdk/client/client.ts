// Require the libraries
import localVarRequest from 'request';
import querystring from 'querystring'

// Import a list of the LUSID APIs
const lusid = require('../api');
// Import each of the LUSID APIs
import {
  ApplicationMetadataApi,
  DataTypesApi,
  DerivedTransactionPortfoliosApi,
  InstrumentsApi,
  LoginApi,
  PortfolioGroupsApi,
  PortfoliosApi,
  PropertyDefinitionsApi,
  ReconciliationsApi,
  ReferencePortfolioApi,
  ScopesApi,
  SystemConfigurationApi,
  TransactionPortfoliosApi } from '../api/apis'

// Set the default path to the secrets file
const secretsPath = './secrets.json'
// Set the default amount of seconds before token expiry to call a refresh
const refreshLimit = 3580

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
export enum Source {
  // Use an environment variable to populate the credential
  Environment,
  // Use a file called secrets.json file to populate the credential
  Secrets,
  // Use a raw value or variable to populate the credential
  Raw
}

/*
To ensure that you have all the credentials correctly populated we use a
Credentials class. This class is only ever used inside function calls. This
means that the sensitive credentials are never stored and are only pulled from
their sources when required.
*/
class Credentials {
  // The credentials
  public tokenUrl: string
  public username: string
  public password: string
  public clientId: string
  public clientSecret: string

  constructor(
    tokenUrl: string,
    username: string,
    password: string,
    clientId: string,
    clientSecret: string
  ) {
      this.tokenUrl = tokenUrl
      this.username = username
      this.password = password
      this.clientId = clientId
      this.clientSecret = clientSecret
  }

}

/*
The LUSID API uses OAuth2.0 for authentication. The access token generated
through the OAuth2.0 flow expires after a given period of time. To ensure
uninterrupted access to LUSID we need to manage the refresh of this token.

The class below allows you to keep track of the current access token as well
as details regarding the token's expiry and last refresh
 */
class Oauth2 {
  // The access token to access the API
  public accessToken: string
  // The time that each token lasts before expiring in seconds
  public tokenExpiryDuration: number
  // The time till the token expires in seconds
  public tokenTimeTillExpiry: number
  // The time of the last refresh in seconds since 1970
  public tokenLastRefreshTime: number
  // The time that the last refresh check occured in seconds since 1970
  public tokenLastRefreshCheckTime: number

  // Constructor method to set each property
  constructor(
    accessToken: string | undefined,
    tokenExpiryTime: number,
    tokenTimeTillExpiry:number,
    tokenLastRefreshTime: number,
    tokenLastRefreshCheckTime: number
  ) {
    this.accessToken = accessToken
    this.tokenExpiryDuration = tokenExpiryTime
    this.tokenTimeTillExpiry = tokenTimeTillExpiry
    this.tokenLastRefreshTime = tokenLastRefreshTime
    this.tokenLastRefreshCheckTime = tokenLastRefreshCheckTime
  }
}

/*
The Api class exists to ensure that all the methods available on each of the
LUSID APIs show up when using code editors and interactive development
environments which have features such as IntelliSense.

It contains a property for each of the LUSID APIs.
*/
class Api {
  public applicationMetadata: ApplicationMetadataApi
  public dataTypes: DataTypesApi
  public derivedTransactionPortfolios: DerivedTransactionPortfoliosApi
  public instruments: InstrumentsApi
  public login: LoginApi
  public portfolioGroups: PortfolioGroupsApi
  public portfolios: PortfoliosApi
  public propertyDefinitions: PropertyDefinitionsApi
  public reconciliations: ReconciliationsApi
  public referencePortfolio: ReferencePortfolioApi
  public scopes: ScopesApi
  public systemConfiguration: SystemConfigurationApi
  public transactionPortfolios: TransactionPortfoliosApi
}

/*
To get connected with LUSID all you need to do is create a new client from
the Client class below. This class handles storage of the location of each
of the credentials, OAuth2.0 token refresh logic and is populated with every
one of LUSIDs APIs and their methods.
*/
export class Client {

  // Authentications object to hold the oauth2 details
  authentications: {[key: string]: Oauth2}
  // The base path for the client to call
  basePath: string
  // The available API endpoints
  api: Api
  // The path to the secrets file which may be used to store credentials
  secretsFilePath: string
  // The credential access details
  private tokenUrlDetails: [Source, string]
  private usernameDetails: [Source, string]
  private passwordDetails: [Source, string]
  private clientIdDetails: [Source, string]
  private clientSecretDetails: [Source, string]
  // The refresh limit in seconds before token expiry to trigger a refresh
  refreshLimit: number = refreshLimit

  // Constructor method which takes the details on where to find the credentials
  constructor(
    tokenUrlDetails: [Source, string],
    usernameDetails: [Source, string],
    passwordDetails: [Source, string],
    clientIdDetails: [Source, string],
    clientSecretDetails: [Source, string],
    apiUrlDetails: [Source, string],
    ) {

    // Set the path to the secrets file
    this.secretsFilePath = secretsPath

    // Set the credential details
    this.tokenUrlDetails = tokenUrlDetails
    this.usernameDetails = usernameDetails
    this.passwordDetails = passwordDetails
    this.clientIdDetails = clientIdDetails
    this.clientSecretDetails = clientSecretDetails

    // Set the base path for the API
    this.basePath = this.fetchCredentials(apiUrlDetails[0], apiUrlDetails[1])

    // Set the authentications to use oauth2
    this.authentications = {'oauth2': new Oauth2(undefined, 0,0,0,0)}

    // Create a new instance of the API
    this.api = new Api()
    // Iterate over the API endpoints and add each to our client
    lusid.APIS.forEach((api: any) => {
      // Create a new instance of the api endpoint
      let apiInstance = new api(this.basePath)
      // Get the name of the API
      let apiName: string = apiInstance.constructor.name
      // Shorten the api name slightly by removing API at the end
      apiName = apiName.substring(0, apiName.length - 3)
      // Make the API endpoint camel case
      apiName = apiName[0].toLowerCase() + apiName.slice(1)
      // Add the endpoint to our client
      this.api[apiName] = apiInstance

      // For each function on the API
      for (var prop in this.api[apiName]) {
        // Exclude two non-api specific functions
        if (typeof(this.api[apiName][prop]) == 'function' && !['setDefaultAuthentication', 'setApiKey'].includes(prop)) {
          // Wrap each method with token refresh logic
          this.api[apiName][prop] = this.apiFunctionWrapper(
            this.api[apiName][prop],
            this.api[apiName],
            this)
        }

      }

    })
  }

  /*
  The function below is a wrapper function which wraps the input function
  'apiFunction' with token refresh logic to ensure uninterrupted access to LUSID.
  */
  public apiFunctionWrapper(apiFunction, api, self) {

    // Return a function
    return function() {
      // Collect the arguments passed into the wrapper to use later
      var topLevelArguments = arguments
      // Return a promise to ensure that the function remains 'thenable'
      return new Promise(function(resolve, reject) {
        // Trigger a token refresh
        var oauthPopulated = self.refreshToken(
          self.authentications['oauth2'],
          self.refreshLimit,
          self.tokenUrlDetails,
          self.usernameDetails,
          self.passwordDetails,
          self.clientIdDetails,
          self.clientSecretDetails
        )
        // Once this has completed pass the oauth2 details on
        oauthPopulated.then(function(oauth2Details: Oauth2) {
          // Update the clients oauth2 details
          self.authentications.oauth2 = oauth2Details
          // Update the access token of the api being called
          api['authentications']['oauth2']['accessToken'] = self.authentications.oauth2.accessToken
          /*
          Resolve the promise with the function that was wrapped
          In this case api is the api that this function is a part of,
          this is required to ensure that the function is called
          in the right context. The second argument topLevelArguments
          is the arguments passed into the Wrapper
          */
          resolve(apiFunction.apply(api, topLevelArguments))
        })
        // Error handling
        .catch((err) => reject(err))
      })
    }
  }

  /*
  The fetchCredentials function gets the credentials from the specified source
  */
  private fetchCredentials(source: Source, value: string): string {

    // Environment source
    if (source == Source.Environment) {
      // Set the credential using an environment variable
      var credential: string = process.env[value] || 'MISSING'
      // If it the environment variable does not exist then throw error
      if (credential == 'MISSING') {
        throw "Environment variable " + value + " has not been specified"
      }

    // Raw or variable source
    } else if (source == Source.Raw) {
      // Set the credential directly
      var credential: string = value

    // Secrets source
    } else if (source = Source.Secrets) {
      // Try and import the credentials file
      try {
        var credentials: any = require(this.secretsFilePath)
      // If there are any problems throw an error
      } catch (e) {
        throw "File " + this.secretsFilePath + " could not be found/read, ensure that it exists in the client folder"
      }
      // If the property exists in the secrets file set the credential
      if (credentials.hasOwnProperty(value)) {
        var credential: string = credentials[value]
      } else {
        throw "The specified value " + value + " does not exist in the file"
      }

    // If the source is incorrectly specified
    } else {
      let availableSources: string[]
      for (var availableSource in Source) {
        availableSources.push(availableSource)
      }
      throw "Source is not valid, must be one of " + availableSources.toString()
    }

    // Return the credential
    return credential
  }

  /*
  Gets the current time in seconds since 1970, used for token refresh calculations
  and to keep track of the last refresh
  */
  private getCurrentEpochTime() {
    return Math.floor(new Date().getTime() / 1000)
  }

  /*
  This function handles refreshing the token when required. It checks for a
  token refresh and if required it fetches the appropriate credentials, calls
  the identity provider and retrieves a new access token
  */
  private async refreshToken(
    oauth2: Oauth2,
    refreshLimit: number,
    tokenUrlDetails: [Source, string],
    usernameDetails: [Source, string],
    passwordDetails: [Source, string],
    clientIdDetails: [Source, string],
    clientSecretDetails: [Source, string]
  ): Promise<Oauth2> {
      // Return a promise
      return new Promise((resolve, reject) => {

        // Check if the token needs a refresh
        if (this.checkTokenRefresh(oauth2, refreshLimit)) {

          // If so, populate the credentials
          var credentials = new Credentials(
            this.fetchCredentials(tokenUrlDetails[0], tokenUrlDetails[1]),
            this.fetchCredentials(usernameDetails[0], usernameDetails[1]),
            this.fetchCredentials(passwordDetails[0], passwordDetails[1]),
            this.fetchCredentials(clientIdDetails[0], clientIdDetails[1]),
            this.fetchCredentials(clientSecretDetails[0], clientSecretDetails[1])
          )

          // Get a new access token using these credentials
          this.getAccessToken(
            credentials.tokenUrl,
            credentials.username,
            credentials.password,
            credentials.clientId,
            credentials.clientSecret
          )
          // Return the oauth object to avoid nested promises in return
          .then((oauthObject: Oauth2) => {
            // Resolve the promise
            resolve(oauthObject)
          })
          .catch((err) => reject(err))
        } else {
          // If no refresh required just return the oauth object
          resolve(oauth2)
        }
    })
  }

  /*
  This function checks if the access token supplied via an OAuth2.0 flow requires
  refreshing. It looks to see if the access token is undefined (meaning that
  it has never been set) or if it is close to expiring.

  If a refresh is required it returns true, else it returns false
  */
  private checkTokenRefresh(
    oauth2: Oauth2,
    refreshLimit: number
  ): boolean {

    // Check if an access token already exists, if not trigger refresh
    if (oauth2.accessToken === undefined) {
      // Call Okta to get access details
      return true
    }

    // If it does exist check that it has not expired
    var currentTime: number = this.getCurrentEpochTime()
    var difference: number = currentTime - oauth2.tokenLastRefreshTime
    oauth2.tokenTimeTillExpiry -= difference
    oauth2.tokenLastRefreshCheckTime = currentTime

    // If the token will expire in less than the refresh limit
    if (oauth2.tokenTimeTillExpiry < refreshLimit) {
      // Call Okta to get access details
      return true
    }
    // Else don't trigger a refresh
    return false
  }


  /*
  This function calls the identity provider to get an access token
  */
  private async getAccessToken(
    tokenUrl: string,
    username: string,
    password: string,
    clientId: string,
    clientSecret: string
  ): Promise<Oauth2> {
    // Returns a rpomise

    return new Promise((resolve, reject) => {

      // Set the headers for authentication with Okta - only x-www-form-urlencoded supported
      var headers = {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }

      // Set the request body for authentication with Okta
      var requestBody = querystring.stringify({
          grant_type: "password",
          username: username,
          password: password,
          scope: "openid client groups",
          client_id: clientId,
          client_secret: clientSecret
        })

      // Make a POST request to Okta to get a LUSID access token
      let localVarRequestOptions: localVarRequest.Options = {
          method: 'POST',
          headers: headers,
          uri: tokenUrl,
          useQuerystring: false,
          json: true,
          body: requestBody
      };

      localVarRequest(localVarRequestOptions, (err, res, body) => {
        if (err) {
          reject (err)
        } else if (res.statusCode == 200) {
          let oAuth2 = new Oauth2(
            body.access_token,
            body.expires_in,
            body.expires_in,
            this.getCurrentEpochTime(),
            this.getCurrentEpochTime())
          resolve (oAuth2)
        } else {
          reject (body)
        }
      })
    })
  }

}
