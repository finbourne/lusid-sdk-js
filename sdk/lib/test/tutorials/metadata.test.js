"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require the LUSID client and libraries
var clientAuthentication = require('./apiClientAuthentication.js');
var Client = require('./apiClientInitialisation').Client;
var client = new Client();
var clientBuilder = clientAuthentication.lusidApiClientBuilder;
clientBuilder(client).then(function (client) {
    client.api.applicationMetadata.getLusidVersions().then(function (result) {
        console.log(result.body);
    });
});
