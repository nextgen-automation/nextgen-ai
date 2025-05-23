import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Calendar, LineChart } from 'lucide-react';

function App() {
  const [splineError, setSplineError] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

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

  const handleSplineError = (error) => {
    console.error('Spline viewer error:', error);
    setSplineError(true);
  };

  const handleSplineLoad = () => {
    setSplineLoaded(true);
    setSplineError(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="bg-black/30 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold">BusinessAIdevs</h1>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Spline Animation Container */}
        <div className="absolute inset-0">
          {!splineError ? (
            <spline-viewer
              url="https://prod.spline.design/53ooFT0w27gEdjzf/scene.splinecode"
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

        <div className="container mx-auto px-6 relative z-10 min-h-screen flex flex-col">
          {/* Text Container */}
          <div className="flex-1 flex items-center">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-1/3"
            >
              <h2 className="text-5xl font-bold text-blue-400">
                Increasing Profit.
              </h2>
            </motion.div>

            {/* Center Space for Animation */}
            <div className="w-1/3" />

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-1/3 text-right"
            >
              <h2 className="text-5xl font-bold text-purple-400">
                Reducing Costs.
              </h2>
            </motion.div>
          </div>

          {/* Bottom Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Powered by AI.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover tailored AI solutions that eliminate inefficiencies and drive business growth
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition-colors flex items-center">
                Get Started Now →
              </button>
              <button className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-full transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm"
            >
              <Bot className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">AI Chatbots</h3>
              <p className="text-gray-400 mb-4">
                Intelligent conversational agents that handle customer inquiries 24/7, reducing response times and improving satisfaction.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• 24/7 Customer Support</li>
                <li>• Instant Response Times</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm"
            >
              <LineChart className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">CRM Integration</h3>
              <p className="text-gray-400 mb-4">
                Seamlessly integrate AI with your existing CRM to automate data entry and enhance customer insights.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Automated Data Entry</li>
                <li>• Enhanced Analytics</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm"
            >
              <Calendar className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">AI Appointment Schedulers</h3>
              <p className="text-gray-400 mb-4">
                Smart scheduling systems that eliminate double-bookings and optimize your calendar automatically.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Automated Booking</li>
                <li>• Smart Calendar Management</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;