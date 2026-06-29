const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, 'Course code is required'],
    unique: true,
    uppercase: true
  },
  title: {
    type: String,
    required: [true, 'Course title is required']
  },
  description: String,
  totalQuestions: {
    type: Number,
    default: 40
  },
  duration: {
    type: Number,
    default: 30 // in minutes
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Course', courseSchema);
