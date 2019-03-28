// Require the LUSID SDK and libraries
const lusid = require('../../src/index')
const clientAuthentication = require('./apiClientAuthentication.js')
const {client} = require('./apiClientInitialisation')

var clientBuilder = clientAuthentication.lusidApiClientBuilder;

clientBuilder(client).then((client) => {
  client.api.metadata.getLusidVersions().then((result) => {
    console.log(result)})
})
