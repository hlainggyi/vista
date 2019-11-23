var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var educationSchema = new Schema({
    degree: String,
    major: [{
        type: String
    }],
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category"
    }
});

module.exports = mongoose.model("Education", educationSchema);