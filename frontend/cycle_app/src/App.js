import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import UserHome from './Component/UserHome/UserHome';
import UserStore from './Component/UserStore/UserStore';
import DealerHome from './Component/dealerHome/dealerHome';
import AddCycleStore from './Component/dealerHome/addCycleStore'
import AddCycle from './Component/dealerHome/addCycle'
import EditCycle from './Component/dealerHome/editCycle'
import DealerProfile from './Component/dealerHome/profile'
import UserProfile from './Component/UserHome/UserProfile';
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
                    <Route path="/user/store" element={<UserStore/>}/>
                    <Route path="/user/profile" element={<UserProfile/>}/>
                    <Route path="/dealer/home" element={<DealerHome/>}/>
                    <Route path="/addCycleStore" element={<AddCycleStore/>}/>
                    <Route path="/addCycle" element={<AddCycle/>}/>
                    <Route path="/editCycle" element={<EditCycle/>}/>
                    <Route path="/dealer/profile" element={<DealerProfile/>}/>
                    {/* <Route path="/user/profile" element={ <UserProfile /> } /> */}

                </Routes>
            </div>
        </Router>
        
    )
}