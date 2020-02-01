var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NrcSchema = new Schema({
  nrclists: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model("Nrc", NrcSchema);
