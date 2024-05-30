// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
import Register from './Register';
import Login from './Login';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import './App.css';



function App() {
    return (
        <Router>
            <div className='container'>
            <h1> Welcome to FITTRACK!! </h1>
             <h3> To Track Your Workout...</h3> 
                <nav>
                    <ul>
                        <li>
                            <Link to="/register">New User? Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Already Registered? Login</Link>
                        </li>
                    </ul>
                
  
                </nav>
                <Routes> {/* Wrap your Routes here */}
                    <Route path="/register" element={<Register />} /> {/* Use element prop */}
                    <Route path="/login" element={<Login />} /> {/* Use element prop */}
                    <Route path="/WorkoutForm" element={<WorkoutForm />} />{/* Use element prop */}
                    <Route path="/WorkoutForm" element={<WorkoutList />} />
                    {/* Use element prop */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;



