"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require the LUSID SDK and libraries
var api_1 = require("../../api");
var clientBuilder_1 = require("./clientBuilder");
var uuid4 = require('uuid/v4');
function createTransactionPortfolio(scope, createRequest) {
    return new Promise(function (resolve, reject) {
        clientBuilder_1.client.api.transactionPortfolios.createPortfolio(scope, createRequest)
            .then(function (res) { return resolve(res.body); })
            .catch(function (err) { return reject(err); });
    });
}
var createRequest = new api_1.CreateTransactionPortfolioRequest();
createRequest.displayName = "UK Equities";
createRequest.code = "UKEQTY";
createRequest.baseCurrency = "GBP";
describe('Create portfolios', function () {
    it('Should create a portfolio', function (done) {
        createTransactionPortfolio(uuid4(), createRequest)
            .then(function (res) {
            console.log(res);
            done();
        })
            .catch(function (err) { return console.log(err.response.statusCode, err.response.statusMessage); });
    });
});
