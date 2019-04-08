"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require the LUSID SDK and libaries
var lusid = require('../../api');
// The class for the client
var Client = /** @class */ (function () {
    // Constructor methods
    function Client() {
        var _this = this;
        // Set the authentications to use oauth2
        this.authentications = { 'oauth2': {} };
        // Iterate over the API endpoints and add each to our client
        this.api = {};
        lusid.APIS.forEach(function (api) {
            var apiInstance = new api();
            // Get the name of the API
            var apiName = apiInstance.constructor.name;
            // Shorten the api name slightly by removing API at the end
            apiName = apiName.substring(0, apiName.length - 3);
            // Make the API endpoint camel case
            apiName = apiName[0].toLowerCase() + apiName.slice(1);
            // Add the endpoint to our client
            _this.api[apiName] = new api();
        });
    }
    return Client;
}());
exports.Client = Client;
