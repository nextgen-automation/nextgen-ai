import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Wrench, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import ContactFormButton from './components/ContactFormButton';

const ExamplesAIVoice: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const voiceAgentTitles = [
    {
      title: 'Business Receptionist Agent',
      description: 'Spending a lot of money and time to manage your receptionist? What if we cut cost by 80%.',
      path: '/voice-demo/receptionist'
    },
    {
      title: 'Outreach Agent',
      description: 'This type of agent will outbound calls to potential prospects with custom scripts needed and demanded by the business. When the start call button is pressed the user will talk to an agent which will talk to them as if they are calling a potential prospect to offer real estate services.',
      path: '/voice-demo/outreach'
    },
    {
      title: 'Personal Assistant Agent',
      description: 'Need someone available 24/7 to consistently update your calendar?',
      path: '/voice-demo/assistant'
    },
    {
      title: 'Information Hotline Agent',
      description: 'Press "1" to hear about the houses close to your current address.',
      path: '/voice-demo/hotline'
    },
    {
      title: 'Appointment Reminders Via Call',
      description: 'Tired of no-shows?',
      path: '/voice-demo/reminders'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white text-gray-900 pt-16 pb-24"
    >
      <Header />

      <main className="container mx-auto px-6 pt-12">
        <Link to="/demos" className="block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="w-full py-8 px-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl border border-gray-200 cursor-pointer group"
          >
            <div className="flex items-center">
              <ChevronLeft className="w-6 h-6 text-purple-500 transform transition-transform group-hover:-translate-x-2 mr-4" aria-hidden="true" />
              <h1 className="text-2xl font-bold text-purple-600">
                AI Voice Agents Demos
              </h1>
            </div>
            <div className="mt-4 ml-10 flex items-center gap-x-8">
              <div className="flex items-center gap-2">
                <span className="text-purple-500" aria-hidden="true">•</span>
                <p className="text-gray-600">Answer calls even when you're unavailable</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500" aria-hidden="true">•</span>
                <p className="text-gray-600">No more stress over absent staff -- no unanswered clients</p>
              </div>
            </div>
          </motion.div>
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-12 px-6"
          aria-label="AI Voice Agent examples"
        >
          <ul className="space-y-6">
            {voiceAgentTitles.map((agent, index) => (
              <li key={index}>
                {index === 0 || index === 1 ? (
                  // First two items - Business Receptionist Agent and Outreach Agent with working demos
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="text-xl font-bold text-purple-600 mb-2">
                      {agent.title}
                    </h4>
                    <p className="text-gray-600 mb-6">
                      {agent.description}
                    </p>
                    
                    {/* Voice Agent Demo Link */}
                    <div className="p-4 bg-white rounded-lg border border-gray-200">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-2">
                            Try the {agent.title}
                          </h5>
                          <p className="text-sm text-gray-600 mb-4">
                            {index === 0 
                              ? 'Experience our AI voice agent that can handle calls, schedule appointments, and answer common questions - just like a human receptionist.'
                              : 'Experience our AI outreach agent that can make professional sales calls to potential prospects with custom scripts tailored to your business needs.'
                            }
                          </p>
                        </div>
                        
                        <div className="flex gap-3">
                          <Link 
                            to={agent.path}
                            className="flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                            aria-label={`Start demo for ${agent.title}`}
                          >
                            Start Demo
                            <ArrowUpRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Other items - regular display with construction notice
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="text-xl font-bold text-purple-600 mb-2 flex items-center gap-2">
                      {agent.title}
                      <Wrench className="w-5 h-5" aria-hidden="true" />
                      <span className="text-sm font-normal">[Under construction]</span>
                    </h4>
                    <p className="text-gray-600">
                      {agent.description}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-16 pl-6">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-gray-700">
                Feeling excited to get your business a personal AI voice agent? →
              </span>
              <ContactFormButton />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Still in doubt? Talk to Nemo →</span>
                <div className="w-12 h-12 bg-transparent">
                  {/* Space reserved for future chat widget */}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default ExamplesAIVoice;