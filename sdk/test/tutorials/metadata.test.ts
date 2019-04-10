// Require the LUSID client and libraries
const clientAuthentication = require('./apiClientAuthentication.js')
const {Client} = require('./apiClientInitialisation')

var client = new Client()
var clientBuilder = clientAuthentication.lusidApiClientBuilder;

clientBuilder(client).then((client) => {
  client.api.applicationMetadata.getLusidVersions().then((result) => {
    console.log(result.body)})
})


export {};
