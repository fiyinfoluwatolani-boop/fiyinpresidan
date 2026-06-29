const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: [true, 'Course code is required'],
    uppercase: true
  },
  questionNumber: {
    type: Number,
    required: true
  },
  question: {
    type: String,
    required: [true, 'Question text is required']
  },
  options: {
    type: [String],
    required: [true, 'Options are required'],
    validate: {
      validator: function(v) {
        return v.length === 4;
      },
      message: 'Must have exactly 4 options'
    }
  },
  correctAnswer: {
    type: String,
    required: [true, 'Correct answer is required']
  },
  explanation: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Question', questionSchema);
