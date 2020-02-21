var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var nrcSchema = new Schema({
  nrclists: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model("NRC", nrcSchema);
