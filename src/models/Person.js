var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company"
    },
    name: {
      type: String,
      required: true
    },
    gender: String,
    fatherName: String,
    motherName: String,
    // startGrade: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Grade"
    // },
    // passGrade: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Grade"
    // },
    // academicstudents: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "AcademicStudent"
    // }],

    interviews: [{
      type: Schema.Types.ObjectId,
      ref: "Interview"
    }],
    isActive: {
      type: Number,
      default: 1
    },
    createdUser: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    updatedUser: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    updated: {
      type: Date,
      // `Date.now()` returns the current unix timestamp as a number
      default: Date.now
    }
});

module.exports = mongoose.model("Student", studentSchema);