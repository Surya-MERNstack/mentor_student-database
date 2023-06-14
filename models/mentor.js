// models/mentor.js
const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  student_id: [
    {
      type: String,
      require: true,
    },
  ],
});

module.exports = mongoose.model("Mentor", mentorSchema);
