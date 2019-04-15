"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../../client/client");
exports.client = new client_1.Client([client_1.Source.Environment, 'FBN_TOKEN_URL'], [client_1.Source.Environment, 'FBN_USERNAME'], [client_1.Source.Environment, 'FBN_PASSWORD'], [client_1.Source.Environment, 'FBN_CLIENT_ID'], [client_1.Source.Environment, 'FBN_CLIENT_SECRET'], [client_1.Source.Environment, 'FBN_LUSID_API_URL']);
