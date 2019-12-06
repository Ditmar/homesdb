var mongo = require("./connect");

var Schema = mongo.Schema;
var thingSchema = new Schema({}, {strict: false});
var LISTING = mongo.model("listings", thingSchema);

module.exports = LISTING;