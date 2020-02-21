var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var partnerSchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company"
  },
  name: String,
  companyName: String,
  logo: String,
  email: {
    type: String,
    lowercase: true,
    unique: true,
    trim: true
  },
  address: String,
  status: Number
});

module.exports = mongoose.model("Partner", partnerSchema);
