var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var nationSchema = new Schema({
  mm: String,
  jp: String
});

module.exports = mongoose.model("Nation", nationSchema);
