var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var interviewYearSchema = new Schema({
    date: Date,
    title: String,
    partner: {
      type: Schema.Types.ObjectId,
      ref: "Partner"
    },
    persons: [{
      _id: { 
        type: Schema.Types.ObjectId,
        ref: "Person"
      },
      remark: String
    }]
});


module.exports = mongoose.model("Interview", interviewYearSchema);