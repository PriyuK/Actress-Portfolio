import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import Showreel from './components/Showreel/Showreel';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Showreel />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
