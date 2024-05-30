import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Summary from './components/Summary.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import Calculator from './components/Calculator.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Experience />
      <Education />
      <Skills />
      <Summary />
      <Contact />
      <Calculator />
    </div>
  );
}

export default App;
