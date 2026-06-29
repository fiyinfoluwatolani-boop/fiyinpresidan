const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single course
router.get('/:code', async (req, res) => {
  try {
    const course = await Course.findOne({ code: req.params.code.toUpperCase() });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
