import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkoutList from './WorkoutList';
import './WorkoutForm.css';

const WorkoutForm = () => {
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [caloriesBurned, setCaloriesBurned] = useState('');
    const [goals, setGoals] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const workout = { type, duration, caloriesBurned, goals };

        try {
            const response = await fetch('http://localhost:5000/workouts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(workout),
            });

            if (response.ok) {
                // Redirect to WorkoutList page after successful submission
                navigate('/WorkoutList');
            } else {
                console.error('Failed to submit workout');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='container'>
          <h2> Fill The WorkoutForm</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Type:
                <input type="text"  placeholder="type" value={type} onChange={(e) => setType(e.target.value)} />
            </label>
            <label>
                Duration:
                <input type="number" placeholder="duration"  value={duration} onChange={(e) => setDuration(e.target.value)} />
            </label>
            <label>
                Calories Burned:
                <input type="number" placeholder="caloriesBurned" value={caloriesBurned} onChange={(e) => setCaloriesBurned(e.target.value)} />
            </label>
            <label>
                Goal:
                <input type="text" value={goals} placeholder="days"  onChange={(e) => setGoals(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
        <div className='WorkoutList'>
        <WorkoutList/>
        </div>
    
        </div>
    );
};

export default WorkoutForm;


