var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var degreeSchema = new Schema({
  mm: String,
  jp: String
});

module.exports = mongoose.model("Degree", degreeSchema);
