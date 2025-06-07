import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Phone, Zap, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import BookMeetingButton from './components/BookMeetingButton';

function App() {
  const [splineError, setSplineError] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js';
    document.head.appendChild(script);

    script.onerror = () => {
      console.error('Failed to load Spline viewer script');
      setSplineError(true);
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (location.state?.scrollToServices) {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleSplineError = (error) => {
    console.error('Spline viewer error:', error);
    setSplineError(true);
  };

  const handleSplineLoad = () => {
    setSplineLoaded(true);
    setSplineError(false);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-16"
    >
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Spline Animation Container */}
        <div className="absolute inset-0">
          {!splineError ? (
            <spline-viewer
              url="https://prod.spline.design/kwId3fBFWvxHdNui/scene.splinecode"
              onError={handleSplineError}
              onLoad={handleSplineLoad}
              loading-anim
              events-target="global"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
              <p className="text-gray-400">Interactive 3D visualization unavailable</p>
            </div>
          )}
        </div>

        <div className="container mx-auto px-6 relative z-10 min-h-screen">
          {/* Hero Text - Centered Layout */}
          <div className="pt-32 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut"
              }}
              className="mb-4"
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Increasing Profit.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.7,
                ease: "easeOut"
              }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Reducing Costs.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.9,
                ease: "easeOut"
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Powered by AI
              </h2>
            </motion.div>
          </div>

          {/* Bottom Content - Premium Overlay Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 1.2,
              ease: "easeOut"
            }}
            className="absolute bottom-12 left-0 right-0 mx-auto bg-gray-100 rounded-xl border border-gray-300 shadow-lg overflow-hidden max-w-2xl"
          >
            <div className="px-8 py-8 text-center">
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Discover tailored AI solutions that eliminate inefficiencies and drive business growth
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={scrollToServices}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors font-medium"
                >
                  Get Started Now
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-gray-400 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors font-medium">
                  Watch Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-xl bg-gray-100 border border-gray-300 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Bot className="w-12 h-12 text-blue-500" />
                  <h3 className="text-xl font-bold text-gray-900">AI Chat Agents</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Engage website visitors instantly, answer FAQs, and qualify leads — all without lifting a finger.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Your 24/7 AI Agent That Never Sleeps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Never miss an inquiry—even outside business hours</span>
                  </li>
                </ul>
              </motion.div>
              <Link to="/examples" className="block w-full">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors font-medium">
                  See AI Chat Agents in Action
                </button>
              </Link>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 rounded-xl bg-gray-100 border border-gray-300 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Phone className="w-12 h-12 text-blue-500" />
                  <h3 className="text-xl font-bold text-gray-900">AI Voice Agents</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Let AI answer, make and route your business calls like a pro.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Handle scheduling, appointment confirmations, and routine questions — all in natural conversation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Natural-sounding voices that feel truly human</span>
                  </li>
                </ul>
              </motion.div>
              <Link to="/examples" className="block w-full">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors font-medium">
                  See AI Voice Agents in Action
                </button>
              </Link>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-8 rounded-xl bg-gray-100 border border-gray-300 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Zap className="w-12 h-12 text-blue-500" />
                  <h3 className="text-xl font-bold text-gray-900">AI-Powered Automations</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Let AI handle the repetitive. Focus on what only you can do.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Automate admin tasks with intelligent automations tailored to your workflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Automatically fill forms, update calendars, and more</span>
                  </li>
                </ul>
              </motion.div>
              <Link to="/examples" className="block w-full">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors font-medium">
                  Explore AI Powered Automations
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default App;