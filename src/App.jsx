import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Programs from './components/Programs';
import Research from './components/Research';
import CampusLife from './components/CampusLife';
import Recruiters from './components/Recruiters';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pastel-mint-50">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <Research />
        <CampusLife />
        <Recruiters />
        <Testimonials />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;
