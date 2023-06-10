// models/student.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mentor_name: { type: String, require : true},
});

module.exports = mongoose.model('Student', studentSchema);


