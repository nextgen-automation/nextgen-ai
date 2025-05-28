import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import BookMeetingButton from './components/BookMeetingButton';

const ExamplesAIVoice: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white text-gray-900 pt-16 pb-24"
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
            <div className="flex items-center">
              <ChevronLeft className="w-6 h-6 text-purple-500 transform transition-transform group-hover:-translate-x-2 mr-4" />
              <div className="flex flex-wrap items-center gap-8">
                <h2 className="text-2xl font-bold text-purple-600">AI Voice Agents</h2>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <p className="text-gray-600">Answer calls even when you're unavailable</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <p className="text-gray-600">No more stress over absent staff -- no unanswered clients</p>
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
          className="mt-12 px-6"
        >
          <ul className="space-y-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <li key={num}>
                <Link to="" className="flex items-center gap-2">
                  <span className="text-purple-600 text-2xl">•</span>
                  <span className="text-purple-600 text-lg">AI Voice Agent {num}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-16 pl-6">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-gray-700">
                Feeling excited to get your business a personal AI voice agent? →
              </span>
              <BookMeetingButton />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Still in doubt? Talk to Nemo →</span>
                <div className="w-12 h-12 bg-transparent">
                  {/* Space reserved for future chat widget */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExamplesAIVoice;