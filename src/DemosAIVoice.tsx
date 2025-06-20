import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import ContactFormButton from './components/ContactFormButton';

const ExamplesAIVoice: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const voiceAgentTitles = [
    'Business Receptionist Agent - Spending a lot of money and time to manage your receptionist? What if we cut cost by 80%.',
    'Outreach Agent - Need to call 1000s of leads?',
    'Personal Assistant Agent - Need someone available 24/7 to consistently update your calendar?',
    'Information Hotline Agent - Press "1" to hear about the houses close to your current address.',
    'Appointment Reminders Via Call - Tired of no-shows?'
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
          <ul className="space-y-4">
            {voiceAgentTitles.map((title, index) => (
              <li key={index}>
                <Link 
                  to="" 
                  className="flex items-center gap-2"
                  aria-label={`Learn about ${title}`}
                >
                  <span className="text-purple-600 text-2xl" aria-hidden="true">•</span>
                 <span className="text-purple-600 text-lg">
                   {title}
                   {index >= 2 && (
                     <>
                       {' '}
                       <Wrench className="w-4 h-4 inline mx-1" aria-hidden="true" />
                       [Under construction]
                     </>
                   )}
                 </span>
                </Link>
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