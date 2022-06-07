import React from 'react';
import { Routes, Route } from "react-router-dom";
import CreatPost from './pages/CreatPost';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import './App.css';


const App = () => {
  return (
    <div>
      <Navbar />
     
      <div>
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/creatpost' element={<CreatPost />} />
            <Route path='/login' element={<Login />} />

          </Routes>
        

      </div>
    </div>
  )
}

export default App