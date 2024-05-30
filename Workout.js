// server/models/Workout.js
const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    caloriesBurned: {
        type: String,
        required: true
    },
    goals: {
        type: String
    }
});

module.exports = mongoose.model('Workout', workoutSchema);
