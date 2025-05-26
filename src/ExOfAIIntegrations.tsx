import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

const ExOfAIIntegrations: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white text-gray-900 pt-16"
    >
      <Header />

      <div className="container mx-auto px-6 pt-12">
        <h1 className="text-4xl font-bold text-center mb-16">Examples of AI Integrations</h1>
        
        <div className="space-y-8">
          {/* AI Chat Agents Section */}
          <Link to="" className="block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full py-8 px-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl border border-gray-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-8">
                  <h2 className="text-2xl font-bold text-blue-600">AI Chat Agents</h2>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <p className="text-gray-600">p1 chat agents</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <p className="text-gray-600">p2 chat agents</p>
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
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="w-full py-8 px-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl border border-gray-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-8">
                  <h2 className="text-2xl font-bold text-purple-600">AI Caller Agents</h2>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <p className="text-gray-600">p1 caller agents</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <p className="text-gray-600">p2 caller agents</p>
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
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="w-full py-8 px-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl border border-gray-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-8">
                  <h2 className="text-2xl font-bold text-green-600">AI Powered Automations</h2>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">•</span>
                      <p className="text-gray-600">p1 Automations</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">•</span>
                      <p className="text-gray-600">p2 Automations</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-green-500 transform transition-transform group-hover:translate-x-2" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ExOfAIIntegrations;