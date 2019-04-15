// Require the LUSID SDK and libaries
const lusid = require('../api');
import localVarRequest = require('request');
import http = require('http');
const querystring = require('querystring')
const superagent = require('superagent')
const secretsPath = './secrets.json'

const refreshLimit = 3580

// Create an enum for use in defining the source of each credential
export enum Source {
  // Use an environment variable to populate the credential
  Environment,
  // Use a file called secrets.json file to populate the credential
  Secrets,
  // Use a raw value or variable to populate the credential
  Raw
}

// This class containes the OAuth2.0 details
class Oauth2 {
  // The access token to access the API
  accessToken: string
  // The time that each token lasts before expiring in seconds
  tokenExpiryDuration: number
  // The time till the token expires in seconds
  tokenTimeTillExpiry: number
  // The time of the last refresh in seconds since 1970
  tokenLastRefreshTime: number
  // The time that the last refresh check occured in seconds since 1970
  tokenLastRefreshCheckTime: number

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

// The class for the client
export class Client {

  // Authentications object to hold the oauth2 details
  authentications: any = {}
  // The base path for the client to call
  basePath: string
  // The available API endpoints
  api: any = {}
  // The path to the secrets file which may be used to store credentials
  secretsFilePath: string
  // The credentials
  private tokenUrlDetails: [Source, string]
  private usernameDetails: [Source, string]
  private passwordDetails: [Source, string]
  private clientIdDetails: [Source, string]
  private clientSecretDetails: [Source, string]

  // The refresh limit in seconds before token expiry to trigger a refresh
  refreshLimit: number = refreshLimit

  // Constructor method
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

    // Set the credentials
    this.tokenUrlDetails = tokenUrlDetails
    this.usernameDetails = usernameDetails
    this.passwordDetails = passwordDetails
    this.clientIdDetails = clientIdDetails
    this.clientSecretDetails = clientSecretDetails

    // Set the base path for the API
    this.basePath = this.fetchCredentials(apiUrlDetails[0], apiUrlDetails[1])

    // Set the authentications to use oauth2
    this.authentications = {'oauth2': new Oauth2(undefined, 0,0,0,0)}

    // Iterate over the API endpoints and add each to our client
    this.api = {}
    lusid.APIS.forEach((api: any) => {
      let apiInstance = new api()
      // Get the name of the API
      let apiName: string = apiInstance.constructor.name
      // Shorten the api name slightly by removing API at the end
      apiName = apiName.substring(0, apiName.length - 3)
      // Make the API endpoint camel case
      apiName = apiName[0].toLowerCase() + apiName.slice(1)
      // Add the endpoint to our client
      this.api[apiName] = apiInstance
      // Add the base path and accessToken
      this.api[apiName]['_basePath'] = this.basePath
      this.api[apiName]['authentications']['oauth2']['accessToken'] = this.authentications['oauth2'].accessToken
      // For each function on the API
      for (var prop in this.api[apiName]) {
        // Exclude two non-api specific functions
        if (typeof(this.api[apiName][prop]) == 'function' && !['setDefaultAuthentication', 'setApiKey'].includes(prop)) {
          this.api[apiName][prop] = this.apiFunctionWrapper(
            this.api[apiName][prop],
            this.api[apiName],
            this)
        }

      }

    })
  }

  // Wrapper function to add refresh token logic to every API call
  apiFunctionWrapper(apiFunction, api, self) {

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
          /* Resolve the promise with the function that was wrapped
          /* In this case api is the api that this function is a part of,
          /* this is required to ensure that the function is called
          /* in the right context. The second argument topLevelArguments
          /* is the arguments passed into the Wrapper
          */
          resolve(apiFunction.apply(api, topLevelArguments))
        })
        // Error handling
        .catch((err) => reject(err))
      })
    }
  }

  // Gets the credentials from the specified source
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

  // Gets the current time in seconds since 1970, used for token refresh
  private getCurrentEpochTime() {
    return Math.floor(new Date().getTime() / 1000)
  }

  // This function handles refreshing the token when required
  private refreshToken(
    oauth2: Oauth2,
    refreshLimit: number,
    tokenUrlDetails: [Source, string],
    usernameDetails: [Source, string],
    passwordDetails: [Source, string],
    clientIdDetails: [Source, string],
    clientSecretDetails: [Source, string]
  ): Promise<Oauth2> {

      return new Promise((resolve, reject) => {

        // Check if the token needs a refresh
        if (this.checkTokenRefresh(oauth2, refreshLimit)) {

          // Populate the credentials using the details provided to the client
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
          // Call then and return the oauth object to avoid nested promises in return
          .then((oauthObject: Oauth2) => {
            resolve(oauthObject)
          })
          .catch((err) => reject(err))
        } else {
          // If no refresh required just return the oauth object
          resolve(oauth2)
        }
    })
  }

  // Checks if the access token requires a refresh
  private checkTokenRefresh(
    oauth2: Oauth2,
    refreshLimit: number
  ): boolean {

    // Check if an access token already exists, if not trigger refresh
    if (oauth2.accessToken === undefined) {
      // Call Okta to get access details
      console.log('Access Token not Initialised - Calling Okta to refresh')
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
      console.log('Access Token Close to Expiring - Calling Okta to refresh')
      return true
    }
    // Else don't trigger a refresh
    console.log('Access Token Valid - No refresh required')
    return false
  }


  // Gets an access token form Okta to use to interact with the API
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
      var headers = {headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }}

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
      superagent
        .post(tokenUrl)
        .send(requestBody)
        .set(headers)
        .then((result) => {
          return {
            statusCode: result.statusCode,
            apiToken: result.body.access_token,
            apiTokenExpiry: result.body.expires_in
          }})
        // Using the OktaResponse get the access token and refresh details
        .then((oktaResponse) => {
          if (oktaResponse.statusCode == 200) {
            let oAuth2 = new Oauth2(
              oktaResponse.apiToken,
              oktaResponse.apiTokenExpiry,
              oktaResponse.apiTokenExpiry,
              this.getCurrentEpochTime(),
              this.getCurrentEpochTime()
            )
            resolve(oAuth2)
          } else {
            throw "Okta returned status code of " + oktaResponse.statusCode + " please check your connection and credentials"
          }
        })
        .catch((err) => reject(err))
    })
  }

}
