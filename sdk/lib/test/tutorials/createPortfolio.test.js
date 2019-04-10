"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require the LUSID SDK and libraries
var api_1 = require("../../api");
var apiClientInitialisation_1 = require("./apiClientInitialisation");
var clientAuthentication = require('./apiClientAuthentication.js');
var uuid4 = require('uuid/v4');
var client = new apiClientInitialisation_1.Client();
var clientBuilder = clientAuthentication.lusidApiClientBuilder;
function createTransactionPortfolio(scope, createRequest) {
    return new Promise(function (resolve, reject) {
        clientBuilder(client).then(function (client) {
            client.api.transactionPortfolios.createPortfolio(scope, createRequest)
                .then(function (res) { return resolve(res.body); })
                .catch(function (err) { return reject(err); });
        });
    });
}
var createRequest = new api_1.CreateTransactionPortfolioRequest();
createRequest.displayName = "UK Equities";
createRequest.code = "UKEQTY";
createRequest.baseCurrency = "GBP";
createTransactionPortfolio(uuid4(), createRequest)
    .then(function (portfolio) { return console.log(portfolio); })
    .catch(function (err) { return console.log(err); });
