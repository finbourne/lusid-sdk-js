// Require the LUSID SDK and libaries
const lusid = require('../api');
import localVarRequest = require('request');
import http = require('http');
const querystring = require('querystring')
const superagent = require('superagent')
const secretsPath = './secrets.json'

const refreshLimit = 300

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
  private tokenUrl: string
  private username: string
  private password: string
  private clientId: string
  private clientSecret: string

  // The refresh limit in seconds before token expiry to trigger a refresh
  refreshLimit: number = refreshLimit

  // Constructor method
  constructor(
    tokenUrl: [Source, string],
    username: [Source, string],
    password: [Source, string],
    clientId: [Source, string],
    clientSecret: [Source, string],
    apiUrl: [Source, string],
    ) {

    // Set the path to the secrets file
    this.secretsFilePath = secretsPath

    // Set the credentials
    this.tokenUrl = this.fetchCredentials(tokenUrl[0], tokenUrl[1])
    this.username = this.fetchCredentials(username[0], username[1])
    this.password = this.fetchCredentials(password[0], password[1])
    this.clientId = this.fetchCredentials(clientId[0], clientId[1])
    this.clientSecret = this.fetchCredentials(clientSecret[0], clientSecret[1])
    this.basePath = this.fetchCredentials(apiUrl[0], apiUrl[1])

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

  apiFunctionWrapper(apiFunction, api, self) {

    return function() {
      var topLevelArguments = arguments

      return new Promise(function(resolve, reject) {

        var oauthPopulated = self.refreshToken(
          self.authentications['oauth2'],
          self.refreshLimit,
          self.tokenUrl,
          self.username,
          self.password,
          self.clientId,
          self.clientSecret
        )

      oauthPopulated.then(function(oauth2Details: Oauth2) {
        api['authentications']['oauth2'] = oauth2Details
        resolve(apiFunction.apply(api, topLevelArguments))
      })
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
    tokenUrl: string,
    username: string,
    password: string,
    clientId: string,
    clientSecret: string
  ): Promise<Oauth2> {

      return new Promise((resolve, reject) => {

        // Check if the token needs a refresh
        if (this.checkTokenRefresh(oauth2, refreshLimit)) {

          // If so get a new access token
          this.getAccessToken(
            tokenUrl,
            username,
            password,
            clientId,
            clientSecret
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
