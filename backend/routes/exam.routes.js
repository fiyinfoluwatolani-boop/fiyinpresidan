const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Get all questions for a course
router.get('/:courseCode', async (req, res) => {
  try {
    const questions = await Question.find({ courseCode: req.params.courseCode.toUpperCase() })
      .sort({ questionNumber: 1 });
    
    if (!questions.length) {
      return res.status(404).json({ error: 'No questions found for this course' });
    }

    res.status(200).json({
      success: true,
      count: questions.length,
      data: questions
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
