// frontend/src/App.js
import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import './App.css';
const App = () => {
  return (

      <div>
        {/* Navigation can be added here */}
        <nav>
          <ul>
            <li className="btw"><a href="#home">Home</a></li>
            <li id="btw1"><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </nav>
        <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      </div>
    
  );
};

export default App;
