import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import ContactFormButton from './components/ContactFormButton';

const ExamplesAIChat: React.FC = () => {
  const prototypeLinks = [
    'https://creator.voiceflow.com/prototype/683656b828ea50513a429275',
    'https://creator.voiceflow.com/prototype/683760e525f48f411e989f73', // Customer Support Agent
    '', // Appointment setter Agent - no link
    '', // Shopping assistant Agent - no link
    ''  // Quote Generation - no link
  ];

  const agentTitles = [
    'Lead Generation Agent – Still hunting leads manually?',
    'Customer Support Agent - Have a Shopify store?',
    'Appointment Setting Agent - Still booking appointments yourself?',
    'Shopping assistant Agent - Too many products, confused customers? Give them a shopping assistant.',
    'Quote Generation - Still giving out estimations yourself?'
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
          <div className="w-full py-8 px-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl border border-gray-200 cursor-pointer group">
            <div className="flex items-center">
              <ChevronLeft className="w-6 h-6 text-blue-500 transform transition-transform group-hover:-translate-x-2 mr-4" aria-hidden="true" />
              <h1 className="text-2xl font-bold text-blue-600">AI Chat Agents Demos</h1>
            </div>
            <div className="mt-4 ml-10 flex items-center gap-x-8">
              <div className="flex items-center gap-2">
                <span className="text-blue-500" aria-hidden="true">•</span>
                <p className="text-gray-600">Capture leads while you focus on clients</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500" aria-hidden="true">•</span>
                <p className="text-gray-600">Works when you're in court, in a meeting or asleep</p>
              </div>
            </div>
          </div>
        </Link>

        <section className="mt-12 px-6" aria-label="AI Chat Agent examples">
          <ul className="space-y-4">
            {agentTitles.map((title, index) => (
              <li key={index}>
                {(index === 0 || index === 1) ? (
                  // First two items (Lead Generation Agent and Customer Support Agent) - external links
                  <a 
                    href={prototypeLinks[index]} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2"
                    aria-label={`View ${title} demo`}
                  >
                    <span className="text-blue-600 text-2xl" aria-hidden="true">•</span>
                    <span className="text-blue-600 text-lg">{title}</span>
                  </a>
                ) : (
                  // Other items - clickable but no navigation
                  <Link 
                    to="" 
                    className="flex items-center gap-2"
                    aria-label={`Learn about ${title}`}
                  >
                    <span className="text-blue-600 text-2xl" aria-hidden="true">•</span>
                    <span className="text-blue-600 text-lg">
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
                )}
              </li>
            ))}
          </ul>

          <div className="mt-16 pl-6">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-gray-700">
                Feeling excited to get your business a personal AI chat agent? →
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
        </section>
      </main>
    </motion.div>
  );
};

export default ExamplesAIChat;