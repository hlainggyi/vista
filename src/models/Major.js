var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var majorSchema = new Schema({
  mm: String,
  jp: String
});

module.exports = mongoose.model("Major", majorSchema);
