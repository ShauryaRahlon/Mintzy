import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import QASection from "./components/QASection";
import WaitlistSection from "./components/WaitlistSection";
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <QASection />
      <WaitlistSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
