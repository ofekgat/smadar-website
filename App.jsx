import React from 'react';
import Navbar from './components/Navbar'; // Import Navbar component
import Hero from './components/Hero';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FacebookEmbed from './components/FacebookEmbed';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="scrollable-content">
      <Hero />
      <Process />
      <Testimonials />
      <FacebookEmbed />
      </div>
      
    </div>

  );
}

export default App;