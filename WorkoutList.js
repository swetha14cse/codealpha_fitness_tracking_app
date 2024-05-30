import React, { useEffect, useState } from 'react';
import './WorkoutList.css'; 

const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('http://localhost:5000/workouts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched data:', data); // Add this line to check fetched data
                setWorkouts(data);
            } catch (error) {
                console.error('Error fetching workouts:', error);
            }
        };

        fetchWorkouts();
    }, []);

    return (
        <div className='workout-list-container'>
            <h1>Workout List</h1>
            <ul className='workout-list'>
                {workouts.map(workout => (
                    <li key={workout._id} className='workout-item'>
                        <h2>{workout.type}</h2>
                        <p>Duration: {workout.duration} minutes</p>
                        <p>Calories Burned: {workout.caloriesBurned}</p>
                        <p>Goals: {workout.goals}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutList;



