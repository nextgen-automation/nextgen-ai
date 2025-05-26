import React from 'react';
import { motion } from 'framer-motion';

const ExOfAIIntegrations: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-16">Examples of AI Integrations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Chat Agents Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
          >
            <div className="border-r border-gray-600 absolute right-0 top-[10%] h-[80%] hidden md:block" />
            <h2 className="text-2xl font-bold mb-6 text-blue-400">AI Chat Agents</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-blue-500">•</span>
                <p className="text-gray-300">p1 chat agents</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-500">•</span>
                <p className="text-gray-300">p2 chat agents</p>
              </div>
            </div>
          </motion.div>

          {/* AI Caller Agents Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
          >
            <div className="border-r border-gray-600 absolute right-0 top-[10%] h-[80%] hidden md:block" />
            <h2 className="text-2xl font-bold mb-6 text-purple-400">AI Caller Agents</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-purple-500">•</span>
                <p className="text-gray-300">p1 caller agents</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-500">•</span>
                <p className="text-gray-300">p2 caller agents</p>
              </div>
            </div>
          </motion.div>

          {/* AI Powered Automations Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 text-green-400">AI Powered Automations</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">•</span>
                <p className="text-gray-300">p1 Automations</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">•</span>
                <p className="text-gray-300">p2 Automations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExOfAIIntegrations;