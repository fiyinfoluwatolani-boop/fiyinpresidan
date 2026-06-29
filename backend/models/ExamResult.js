const mongoose = require('mongoose');

const examResultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  courseCode: {
    type: String,
    required: true,
    uppercase: true
  },
  courseName: String,
  studentName: {
    type: String,
    required: true
  },
  answers: [{
    questionNumber: Number,
    selectedAnswer: String,
    correctAnswer: String,
    isCorrect: Boolean,
    question: String,
    explanation: String
  }],
  totalQuestions: {
    type: Number,
    default: 40
  },
  correctAnswers: {
    type: Number,
    default: 0
  },
  wrongAnswers: {
    type: Number,
    default: 0
  },
  score: {
    type: Number,
    default: 0 // percentage
  },
  timeSpent: {
    type: Number // in seconds
  },
  status: {
    type: String,
    enum: ['completed', 'submitted', 'in-progress'],
    default: 'completed'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ExamResult', examResultSchema);
