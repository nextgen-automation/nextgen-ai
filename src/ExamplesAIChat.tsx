import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import BookMeetingButton from './components/BookMeetingButton';

const ExamplesAIChat: React.FC = () => {
  const prototypeLinks = [
    'https://creator.voiceflow.com/prototype/683656b828ea50513a429275',
    'https://creator.voiceflow.com/prototype/683760e525f48f411e989f73',
    'https://creator.voiceflow.com/prototype/683760c725f48f411e989f5b',
    'https://creator.voiceflow.com/prototype/683761464e4dc0e4ff1c09b5',
    'https://creator.voiceflow.com/prototype/683761354e4dc0e4ff1c09a3'
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
              <ChevronLeft className="w-6 h-6 text-blue-500 transform transition-transform group-hover:-translate-x-2 mr-4" />
              <h2 className="text-2xl font-bold text-blue-600">AI Chat Agents</h2>
            </div>
            <div className="mt-4 ml-10 flex items-center gap-x-8">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">•</span>
                <p className="text-gray-600">Capture leads while you focus on clients</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">•</span>
                <p className="text-gray-600">Works when you're in court, in a meeting or asleep</p>
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
            {prototypeLinks.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span className="text-blue-600 text-2xl">•</span>
                  <span className="text-blue-600 text-lg">AI Chat Agent {index + 1}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-16 pl-6">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-gray-700">
                Feeling excited to get your business a personal AI chat agent? →
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

export default ExamplesAIChat;