var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var familySchema = new Schema({
  mm: String,
  jp: String
});

module.exports = mongoose.model("Family", familySchema);
