import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Footer />
    </div>
  );
}

export default App;