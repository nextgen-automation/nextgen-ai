import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

const ExOfAIIntegrations: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Header />

      <div className="container mx-auto px-6 pt-32">
        <h1 className="text-4xl font-bold text-center mb-16">Examples of AI Integrations</h1>
        
        <div className="space-y-8">
          {/* AI Chat Agents Section */}
          <Link to="" className="block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full py-8 px-6 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/60 hover:shadow-xl transition-all duration-300 rounded-xl border border-gray-700 shadow-lg cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-8">
                  <h2 className="text-2xl font-bold text-blue-400">AI Chat Agents</h2>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <p className="text-gray-300">p1 chat agents</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <p className="text-gray-300">p2 chat agents</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-blue-500 transform transition-transform group-hover:translate-x-2" />
              </div>
            </motion.div>
          </Link>

          {/* AI Caller Agents Section */}
          <Link to="" className="block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full py-8 px-6 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/60 hover:shadow-xl transition-all duration-300 rounded-xl border border-gray-700 shadow-lg cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-8">
                  <h2 className="text-2xl font-bold text-purple-400">AI Caller Agents</h2>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <p className="text-gray-300">p1 caller agents</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <p className="text-gray-300">p2 caller agents</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-purple-500 transform transition-transform group-hover:translate-x-2" />
              </div>
            </motion.div>
          </Link>

          {/* AI Powered Automations Section */}
          <Link to="" className="block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full py-8 px-6 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/60 hover:shadow-xl transition-all duration-300 rounded-xl border border-gray-700 shadow-lg cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-8">
                  <h2 className="text-2xl font-bold text-green-400">AI Powered Automations</h2>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">•</span>
                      <p className="text-gray-300">p1 Automations</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">•</span>
                      <p className="text-gray-300">p2 Automations</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-green-500 transform transition-transform group-hover:translate-x-2" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExOfAIIntegrations;