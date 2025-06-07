import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Phone, Zap } from 'lucide-react';
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
          {/* Text Container - Mobile-specific positioning */}
          <div className="relative h-48 md:h-auto md:pt-32 flex md:flex-row items-start">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut"
              }}
              className="absolute top-[20px] left-0 w-full md:static md:w-1/3 text-left md:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-blue-400">
                Increasing Profit.
              </h2>
            </motion.div>

            {/* Center Space for Animation */}
            <div className="w-full md:w-1/3 h-0 md:h-auto" />

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.7,
                ease: "easeOut"
              }}
              className="absolute top-[196px] right-0 w-full md:static md:w-1/3 text-right md:text-right"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-purple-400">
                Reducing Costs.
              </h2>
            </motion.div>
          </div>

          {/* Bottom Content - Responsive overlay box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 1,
              ease: "easeOut"
            }}
            className="absolute bottom-12 left-4 right-4 md:left-0 md:right-0 mx-auto bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden max-w-xl"
          >
            <div className="px-6 md:px-8 py-6 text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                Powered by AI
              </h2>
              <p className="text-white text-sm mb-5">
                See how you can integrate the most powerful tool ever created — into your business. Now!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:space-x-2 sm:gap-0">
                <button 
                  onClick={scrollToServices}
                  className="bg-white hover:bg-gray-100 text-gray-900 px-5 py-2 rounded-full transition-colors text-sm font-medium"
                >
                  Our Services
                </button>
                <BookMeetingButton />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-black relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <Bot className="w-12 h-12 text-blue-500" />
                  <h3 className="text-xl font-bold">AI Chat Agents</h3>
                </div>
                <p className="text-gray-200 mt-4 mb-4">
                  Engage website visitors instantly, answer FAQs, and qualify leads — all without lifting a finger.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Your 24/7 AI Agent That Never Sleeps</li>
                  <li>• Never miss an inquiry—even outside business hours</li>
                </ul>
              </motion.div>
              <Link to="/examples" className="block w-full">
                <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors text-sm">
                  See AI Chat Agents in Action
                </button>
              </Link>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <Phone className="w-12 h-12 text-blue-500" />
                  <h3 className="text-xl font-bold">AI Voice Agents</h3>
                </div>
                <p className="text-gray-200 mt-4 mb-4">
                  Let AI answer, make and route your business calls like a pro.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Handle scheduling, appointment confirmations, and routine questions — all in natural conversation</li>
                  <li>• Natural-sounding voices that feel truly human</li>
                </ul>
              </motion.div>
              <Link to="/examples" className="block w-full">
                <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors text-sm">
                  See AI Voice Agents in Action
                </button>
              </Link>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <Zap className="w-12 h-12 text-blue-500" />
                  <h3 className="text-xl font-bold">AI-Powered Automations</h3>
                </div>
                <p className="text-gray-200 mt-4 mb-4">
                  Let AI handle the repetitive. Focus on what only you can do.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Automate admin tasks with intelligent automations tailored to your workflow</li>
                  <li>• Automatically fill forms, update calendars, and more</li>
                </ul>
              </motion.div>
              <Link to="/examples" className="block w-full">
                <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors text-sm">
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