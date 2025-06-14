import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Phone, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import BookMeetingButton from './components/BookMeetingButton';
import { setupViewportFix, scrollToElement } from './utils/scrollUtils';

function App() {
  const [splineError, setSplineError] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Fix viewport units on iOS
    const cleanup = setupViewportFix();
    return cleanup;
  }, []);

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
      scrollToElement('services');
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
    scrollToElement('services');
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

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen pb-20" aria-label="Hero section">
          {/* Spline Animation Container */}
          <div className="absolute inset-0" aria-hidden="true">
            {!splineError ? (
              <spline-viewer
                url="https://prod.spline.design/kwId3fBFWvxHdNui/scene.splinecode"
                onError={handleSplineError}
                onLoad={handleSplineLoad}
                loading-anim
                events-target="global"
                style={{
                  position: 'fixed',
                  WebkitTransform: 'translate3d(0,0,0)',
                  transform: 'translateZ(0)'
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                <p className="text-gray-400">Interactive 3D visualization unavailable</p>
              </div>
            )}
          </div>

          <div className="container mx-auto px-6 relative z-10 min-h-screen">
            {/* Top-Left Overlay Box with all text */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut"
              }}
              className="absolute top-[50%] inset-x-0 mx-auto w-[90vw] max-w-md bg-black/70 rounded-2xl overflow-hidden md:top-32 md:left-0 md:inset-x-auto md:mx-0 md:w-auto"
            >
              <div className="px-8 md:px-10 py-6 text-left">
                {/* Increasing Profit */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.7,
                    ease: "easeOut"
                  }}
                  className="-mb-1 md:-mb-2"
                >
                  <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight md:leading-normal pb-1 md:pb-1">
                    Increasing Profit.
                  </h1>
                </motion.div>

                {/* Reducing Costs */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.9,
                    ease: "easeOut"
                  }}
                  className="mb-1 md:-mb-1"
                >
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight md:leading-normal pb-1 md:pb-1">
                    Reducing Costs.
                  </h2>
                </motion.div>

                {/* Powered by AI */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 1.1,
                    ease: "easeOut"
                  }}
                >
                  <h2 className="text-lg md:text-2xl font-bold text-white mb-1 leading-tight md:leading-normal">
                    Powered by AI
                  </h2>
                  <p className="text-white text-sm mb-4 leading-relaxed">
                    See how you can integrate the most powerful tools ever created. Right into your business.
                    <br />
                    Now!
                  </p>
                  <div className="flex flex-col sm:flex-row justify-start gap-2 sm:space-x-2 sm:gap-0">
                    <button 
                      onClick={scrollToServices}
                      className="bg-white hover:bg-gray-100 text-gray-900 px-5 py-2 rounded-full transition-colors text-sm font-medium"
                      aria-label="View our AI services"
                    >
                      Our Services
                    </button>
                    <BookMeetingButton />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-br from-black to-black relative z-10" aria-label="Our AI services">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <Bot className="w-12 h-12 text-blue-500" aria-hidden="true" />
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
                  <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors text-sm" aria-label="See AI Chat Agents examples">
                    See AI Chat Agents in Action
                  </button>
                </Link>
              </article>

              <article className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <Phone className="w-12 h-12 text-blue-500" aria-hidden="true" />
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
                  <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors text-sm" aria-label="See AI Voice Agents examples">
                    See AI Voice Agents in Action
                  </button>
                </Link>
              </article>

              <article className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <Zap className="w-12 h-12 text-blue-500" aria-hidden="true" />
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
                  <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors text-sm" aria-label="Explore AI Powered Automations examples">
                    Explore AI Powered Automations
                  </button>
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}

export default App;