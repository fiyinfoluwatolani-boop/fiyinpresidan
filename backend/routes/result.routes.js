const express = require('express');
const router = express.Router();
const ExamResult = require('../models/ExamResult');

// Submit exam result
router.post('/submit', async (req, res) => {
  try {
    const {
      userId,
      courseCode,
      courseName,
      studentName,
      answers,
      totalQuestions,
      timeSpent
    } = req.body;

    if (!studentName || !courseCode || !answers) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Calculate score
    let correctAnswers = 0;
    answers.forEach(answer => {
      if (answer.isCorrect) {
        correctAnswers++;
      }
    });

    const wrongAnswers = totalQuestions - correctAnswers;
    const score = Math.round((correctAnswers / totalQuestions) * 100);

    const result = await ExamResult.create({
      userId,
      courseCode: courseCode.toUpperCase(),
      courseName,
      studentName,
      answers,
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      score,
      timeSpent,
      status: 'completed'
    });

    res.status(201).json({
      success: true,
      message: 'Exam submitted successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get exam result by ID
router.get('/:resultId', async (req, res) => {
  try {
    const result = await ExamResult.findById(req.params.resultId);
    if (!result) {
      return res.status(404).json({ error: 'Result not found' });
    }
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user results
router.get('/user/:userId', async (req, res) => {
  try {
    const results = await ExamResult.find({ userId: req.params.userId })
      .sort({ submittedAt: -1 });
    
    res.status(200).json({
      success: true,
      count: results.length,
      data: results
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
