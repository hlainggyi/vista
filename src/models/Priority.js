var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var prioritySchema = new Schema({
  mm: String,
  jp: String
});

module.exports = mongoose.model("Priority", prioritySchema);
