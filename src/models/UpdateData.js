var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UpdateDataSchema = new Schema({
  name: String,
  data: [
    {
      mm: String,
      jp: String
    }
  ]
});

module.exports = mongoose.model("Nrc", UpdateDataSchema);
