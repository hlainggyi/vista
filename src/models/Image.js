var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var imageSchema = new Schema({
  src: String,
  person: {
    type: Schema.Types.ObjectId,
    ref: "Person"
  }
});

module.exports = mongoose.model("Image", imageSchema);
