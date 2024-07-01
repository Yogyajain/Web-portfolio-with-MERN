// frontend/src/App.js
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
const App = () => {
  return (

      <>
        {/* Navigation can be added here */}
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        </Routes>
      </>
    
  );
};

export default App;
