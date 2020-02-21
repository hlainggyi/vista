var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eduSchema = new Schema({
  mm: String,
  jp: String
});

module.exports = mongoose.model("Edu", eduSchema);
