// server/routes/workouts.js
const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// Get all workouts
router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new workout
router.post('/', async (req, res) => {
    const workout = new Workout({
        type: req.body.type,
        duration: req.body.duration,
        caloriesBurned: req.body.caloriesBurned,
        goals: req.body.goals
    });

    try {
        const newWorkout = await workout.save();
        res.status(201).json(newWorkout);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
