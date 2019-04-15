"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require the LUSID client and libraries
var clientAuthentication = require('./apiClientAuthentication.js');
var client_1 = require("../../client/client");
var client = new client_1.Client([client_1.Source.Secrets, 'tokenUrl'], [client_1.Source.Raw, 'jarvis.automated.tests@finbourne.com'], [client_1.Source.Secrets, 'password'], [client_1.Source.Secrets, 'clientId'], [client_1.Source.Secrets, 'clientSecret'], [client_1.Source.Environment, 'FBN_API_URL']);
client.api.applicationMetadata.getLusidVersions().then(function (result) {
    console.log(result.body);
});
