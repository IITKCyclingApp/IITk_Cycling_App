import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import UserHome from './Component/UserHome/UserHome';
import DealerHome from './Component/dealerHome/dealerHome';
// import UserProfile from './Component/UserProfile/UserProfile';
// import LoginPage from './pages/login'
// import RegisterPage from './pages/register'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                {/* <p>hello</p> */}
                <Routes>
                  
                    <Route path="/" element={ <Home /> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/user/home" element={ <UserHome /> } />
                    <Route path="/dealer/home" element={<DealerHome/>}/>
                    {/* <Route path="/user/profile" element={ <UserProfile /> } /> */}

                </Routes>
            </div>
        </Router>
        
    )
}