var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var interviewYearSchema = new Schema({
  date: Date,
  title: String,
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company"
  },
  partner: {
    type: Schema.Types.ObjectId,
    ref: "Partner"
  },
  persons: [
    {
      _id: {
        type: Schema.Types.ObjectId,
        ref: "Person"
      },
      name: {
        mm: String,
        jp: String
      },
      married: Boolean,
      age: Number,
      edus: String,
      remarks: {
        type: String,
        default: null
      },
      memo: {
        type: String,
        default: null
      },
      profileImage: String
    }
  ]
});

module.exports = mongoose.model("Interview", interviewYearSchema);
