const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

const StudentModel = mongoose.model("student", studentSchema);

module.exports = {
  StudentModel,
};
