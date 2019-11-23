var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var partnerSchema = new Schema({
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company"
    },
    name: String,
    company_name: String,
    address: String,
    remove_status: Number
});

module.exports = mongoose.model("Partner", partnerSchema);