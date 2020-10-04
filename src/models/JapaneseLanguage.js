var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var JapaneseLanguageSchema = new Schema({
  person: {
    type: Schema.Types.ObjectId,
    ref: "Person"
  },
  jplanguageLevel: String,
  toDate: Date,
  fromDate: Date,
  passDate: Date,
  certificate: {
    mm: String,
    jp: String
  },
  training: {
    mm: String,
    jp: String
  }
});

module.exports = mongoose.model("JapaneseLanguage", JapaneseLanguageSchema);
