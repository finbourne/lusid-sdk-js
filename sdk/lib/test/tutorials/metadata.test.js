"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require the LUSID client and libraries
var clientBuilder_1 = require("./clientBuilder");
describe('Collect Metatdata', function () {
    it('Should fetch the LUSID version information', function (done) {
        clientBuilder_1.client.api.applicationMetadata.getLusidVersions()
            .then(function (result) {
            console.log(result.body);
            done();
        })
            .catch(function (err) { return console.log(err.response.statusCode, err.response.statusMessage); });
    });
});
