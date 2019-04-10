// Require the LUSID SDK and libaries
const lusid = require('../../api');

// The class for the client
export class Client {

  // Authentications object to hold the oauth2 details
  authentications: any
  // The base path for the client to call
  basePath: string
  // The available API endpoints
  api: any

  // Constructor methods
  constructor() {
    // Set the authentications to use oauth2
    this.authentications = {'oauth2': {}}
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
      this.api[apiName] = new api()
    })
  }
}
