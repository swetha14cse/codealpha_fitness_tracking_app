// App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
// import Register from './Register';
// import Login from './Login';
// import WorkoutForm from './WorkoutForm';
// import WorkoutList from './WorkoutList';
// import './App.css';



// function App() {
//     return (
//         <Router>
//             <div className='container'>
//             <h1> Welcome to FITTRACK!! </h1>
//              <h3> To Track Your Workout...</h3> 
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/register">New User? Register</Link>
//                         </li>
//                         <li>
//                             <Link to="/login">Already Registered? Login</Link>
//                         </li>
//                     </ul>
                
  
//                 </nav>
//                 <Routes> {/* Wrap your Routes here */}
//                     <Route path="/register" element={<Register />} /> {/* Use element prop */}
//                     <Route path="/login" element={<Login />} /> {/* Use element prop */}
//                     <Route path="/WorkoutForm" element={<WorkoutForm />} />{/* Use element prop */}
//                     <Route path="/WorkoutForm" element={<WorkoutList />} />
//                     {/* Use element prop */}
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import './App.css';

// Define a simple Home component for the default path
const Home = () => (
    <>
        <h1> Welcome to FITTRACK!! </h1>
        <h3> To Track Your Workout...</h3> 
    </>
);

function App() {
    return (
        <Router>
            <div className='container'>
                {/* Navigation links for all pages */}
                <nav>
                    <ul>
                        <li>
                            {/* Link to the home path, which is typically '/' */}
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/register">New User? Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Already Registered? Login</Link>
                        </li>
                        {/* * Add a link for the Workout components. 
                          * Assuming users go to the List or Form after login. 
                        */}
                        <li>
                             <Link to="/workouts/new">Log New Workout</Link>
                        </li>
                         <li>
                             <Link to="/workouts">View Workouts</Link>
                        </li>
                    </ul>
                </nav>
                
                {/* * Define all your routes within <Routes>
                  * FIX 1: Use unique paths for WorkoutForm and WorkoutList.
                  * FIX 2: Add a default route for the Home page.
                  * FIX 3: Add a protected route (or placeholder) for the app dashboard.
                */}
                <Routes>
                    {/* Default route for the home page */}
                    <Route path="/" element={<Home />} />
                    
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    
                    {/* * Use a specific path like /workouts/new for the Form 
                    */}
                    <Route path="/workouts/new" element={<WorkoutForm />} />
                    
                    {/* * Use a specific path like /workouts for the List 
                    */}
                    <Route path="/workouts" element={<WorkoutList />} />
                    
                    {/* You might want a dashboard or a main app area after login */}
                    {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;


