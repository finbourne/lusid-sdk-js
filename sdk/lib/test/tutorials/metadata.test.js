"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require the LUSID client and libraries
var clientBuilder_1 = require("./clientBuilder");
clientBuilder_1.client.api.applicationMetadata.getLusidVersions().then(function (result) {
    console.log(result.body);
});
