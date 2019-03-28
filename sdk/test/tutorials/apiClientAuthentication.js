// Require the LUSID SDK and libraries
const lusid = require('../../src/index')
const {client} = require('./apiClientInitialisation')
const querystring = require("querystring");
const superagent = require("superagent")

// Gets the current time in seconds since 1970, used for token refresh
var getCurrentEpochTime = function() {
  return Math.floor(new Date() / 1000)
}

var checkTokenRefresh = function(oauth2, refreshLimit) {
  // Check if an access token already exists, if not trigger refresh
  if (oauth2.accessToken === undefined) {
    return true
  }

  // If it does exist check that it has not expired
  var currentTime = getCurrentEpochTime()
  var difference = currentTime - oauth2.lastRefreshCheckTime
  oauth2.apiTokenTimeTillExpiry -= difference
  oauth2.lastRefreshCheckTime = currentTime

  // If the token will expire in less than ten minutes trigger refresh
  if (oauth2.apiTokenTimeTillExpiry < refreshLimit) {
    return true
  }
  // Else don't trigger a refresh
  return false
}

// A client builder function for authentication with Okta to access LUSID
var lusidApiClientBuilder = function(client) {

  if (!checkTokenRefresh(client.authentications['oauth2'], 600)) {
    return new Promise(function(resolve, reject) {
      resolve(client)
  })
}

  // Initialise an array to hold your access credentials
  var accessDetails = {}
  var secretsFile = 'secrets.json'

  // Populate your access details from environmental variables
  accessDetails.tokenUrl = process.env.FBN_TOKEN_URL || null
  accessDetails.apiUrl = process.env.FBN_LUSID_API_URL || null
  accessDetails.username = process.env.FBN_USERNAME || null
  accessDetails.password = process.env.FBN_PASSWORD || null
  accessDetails.clientId = process.env.FBN_CLIENT_ID || null
  accessDetails.clientSecret = process.env.FBN_CLIENT_SECRET || null

  // Check if any of the required details are missing
  if (Object.values(accessDetails).some((element) => element === null)) {
    // If so use a secrets file instead
    console.log(`There are missing environment variables, falling back to ${secretsFile} file...`)
    var secrets = require(`./${secretsFile}`).api
    accessDetails.tokenUrl = secrets.tokenUrl
    accessDetails.apiUrl = secrets.apiUrl
    accessDetails.username = secrets.username
    accessDetails.password = secrets.password
    accessDetails.clientId = secrets.clientId
    accessDetails.clientSecret = secrets.clientSecret
    console.log(`Access details populated with the ${secretsFile} file.`)
  } else {
    // If not, no need to change anything
    console.log(`All environment details present, no need for ${secretsFile} file.`)
  }

  // Return a promise which builds the LUSID API Client
  return new Promise(function(resolve, reject) {

    // Set your headers for authentication with Okta only x-www-form-urlencoded supported
    var headers = {headers: {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    }}

    // Set your request body for authentication with Okta
    var requestBody = querystring.stringify({
        grant_type: "password",
        username: accessDetails.username,
        password: accessDetails.password,
        scope: "openid client groups",
        client_id: accessDetails.clientId,
        client_secret: accessDetails.clientSecret
      })

    // Make a POST request to Okta to get a LUSID access token
    superagent
      .post(accessDetails.tokenUrl)
      .send(requestBody)
      .set(headers)
      .then((result) => {
        return {
          statusCode: result.statusCode,
          apiToken: result.body.access_token,
          apiTokenExpiry: result.body.expires_in
        }})
      .then((oktaResponse) => {
        if (oktaResponse.statusCode == 200) {
          var oauth2 = client.authentications.oauth2
          oauth2.accessToken = oktaResponse.apiToken;
          oauth2.apiTokenExpiry = oktaResponse.apiTokenExpiry
          oauth2.apiTokenTimeTillExpiry = oktaResponse.apiTokenExpiry
          oauth2.lastRefreshTime = Math.floor(new Date() / 1000)
          oauth2.lastRefreshCheckTime = oauth2.lastRefreshTime
          client.basePath = accessDetails.apiUrl;
          resolve(client)
        } else {
          reject(oktaResponse)
        }
      })
      .catch((err) => {
        reject(err)
      });
    })
}

// Export your client builder function
module.exports = {
  lusidApiClientBuilder: lusidApiClientBuilder
}
