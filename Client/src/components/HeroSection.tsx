"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const gridPattern = `data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%232563eb" fillOpacity="0.05"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-blue-950 to-black">
      {/* Parallax Background Elements */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: `url("${gridPattern}")`,
        }}
      ></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-slide-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-12 w-12 text-cyan-400 mr-4 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Mintzy
            </h1>
          </div>

          <div className="text-2xl md:text-4xl text-cyan-300 mb-8 h-16 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                "Intelligent AI Agents",
                2000,
                "Automated Solutions",
                2000,
                "Future of Business",
                2000,
                "Smart Automation",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your business operations with cutting-edge AI agents that
            work 24/7, learn from your data, and deliver unprecedented
            automation capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("waitlist")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Join Early Access
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Discover Features
            </button>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <button
            onClick={scrollToFeatures}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
