import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

const ExamplesAIChat: React.FC = () => {
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
        <Link to="/examples" className="block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="w-full py-8 px-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl border border-gray-200 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <ChevronLeft className="w-6 h-6 text-blue-500 transform transition-transform group-hover:-translate-x-2" />
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
            </div>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-12"
        >
          <ul className="space-y-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <li key={num} className="flex items-center gap-2">
                <span className="text-blue-600 text-2xl">•</span>
                <span className="text-blue-600 text-lg">AI Chat Agent {num}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExamplesAIChat;