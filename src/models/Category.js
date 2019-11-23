var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: String,
    feature: String, // Technician or Training
    educations: [{
      type: Schema.Types.ObjectId,
      ref: "Education"
    }]
})

module.exports = mongoose.model("Category", categorySchema);