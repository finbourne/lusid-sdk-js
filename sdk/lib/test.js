var lusid = require("./api");
var holdingAdjustment = new lusid.AdjustHoldingRequest();
holdingAdjustment.instrumentIdentifiers = {
    'Instrument/default/Figi': 'BBG000BLNNH6'
};
console.log(holdingAdjustment);
var metadata = new lusid.ApplicationMetadataApi();
metadata._basePath = 'https://api.lusid.com';
console.log(metadata.authentications);
