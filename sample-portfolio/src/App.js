import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
