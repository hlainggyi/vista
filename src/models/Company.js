var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var companySchema = new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
    unique: true,
    trim: true,
    required: true
  },
  address: String,
  yenExchangeRate: Number,
  logo: String,
  // profile: String,
  // level: {
  //     type: Schema.Types.ObjectId,
  //     ref: "SchoolLevel"
  // },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  partners: [
    {
      type: Schema.Types.ObjectId,
      ref: "Partner"
    }
  ],
  persons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Person"
    }
  ]
});

module.exports = mongoose.model("Company", companySchema);
