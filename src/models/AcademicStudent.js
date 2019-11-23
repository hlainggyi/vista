var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AcademicStudentSchema = new Schema({
    yearId: {
      type: Schema.Types.ObjectId,
      ref: "AcademicYear"
    },
    // year: String,
    schoolId: {
      type: Schema.Types.ObjectId,
      ref: "School"
    },
    // school: String,
    gradeId: {
      type: Schema.Types.ObjectId,
      ref: "Grade"
    },
    // grade: String,
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "Student"
    },
    status: String,  // Fail, Success, Leave, Still
    isActive: {      // isActive is (Still or Leave = 0) and (Success or Fail = 1)
      type: Number,
      default: 1
    },
    // student: String,
    name: String,
    gender: String,
    startDate: {
      type: Date,
      // `Date.now()` returns the current unix timestamp as a number
      default: Date.now
    },
    image: String
});


module.exports = mongoose.model("AcademicStudent", AcademicStudentSchema);