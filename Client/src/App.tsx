import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import QASection from './components/QASection';
import WaitlistSection from './components/WaitlistSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <QASection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}

export default App;