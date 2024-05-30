const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fitness_tracker', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully');
});

// Define Workout model
const Workout = require('./models/Workout');

// Route to handle form submission and save workout data
app.post('/workouts', async (req, res) => {
    const { type, duration, caloriesBurned, goals } = req.body;

    try {
        const newWorkout = new Workout({ type, duration, caloriesBurned, goals });
        await newWorkout.save();
        res.status(201).json(newWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get all workouts
app.get('/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});




