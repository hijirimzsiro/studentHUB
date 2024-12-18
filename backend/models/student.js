const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  grade: { type: String, required: true },
  class: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('Student', studentSchema);

