import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;