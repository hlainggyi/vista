var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var uploadSchema = new Schema({
  etag: String,
  url: String,
  key: String,
  bucket: String,
  name: {
    type: String,
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  person: {
    type: Schema.Types.ObjectId,
    ref: 'Person'
  }
});

module.exports = mongoose.model("Upload", uploadSchema);
