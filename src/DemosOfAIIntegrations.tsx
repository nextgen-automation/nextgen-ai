import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

const ExOfAIIntegrations: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Load Voiceflow widget
    const voiceflowScript = document.createElement('script');
    voiceflowScript.type = 'text/javascript';
    voiceflowScript.innerHTML = `
      (function(d, t) {
          var v = d.createElement(t);
          v.onload = function() {
            window.voiceflow.chat.load({
              verify: { projectID: '6835f01106ddb99ff491f24d' },
              url: 'https://general-runtime.voiceflow.com',
              versionID: 'production',
              voice: {
                url: "https://runtime-api.voiceflow.com"
              }
            });
          }
          v.onerror = function() {
            console.warn('Voiceflow widget failed to load');
          }
          v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
          v.type = "text/javascript"; 
          d.body.appendChild(v);
      })(document, 'script');
    `;
    document.body.appendChild(voiceflowScript);

    return () => {
      // Cleanup: remove the script when component unmounts
      if (document.body.contains(voiceflowScript)) {
        document.body.removeChild(voiceflowScript);
      }
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white text-gray-900 pt-16"
    >
      <Header />

      <main className="container mx-auto px-6 pt-12">
        <h1 className="text-4xl font-bold text-center mb-16">AI Integration Demos</h1>
        
        <div className="space-y-8">
          {/* AI Chat Agents Section */}
          <Link to="/ai-chat-demos" className="block">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full py-8 px-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl border border-gray-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-blue-600">AI Chat Agents Demos</h2>
                <ChevronRight className="w-6 h-6 text-blue-500 transform transition-transform group-hover:translate-x-2" aria-hidden="true" />
              </div>
              <div className="mt-4 flex items-center gap-x-8">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500" aria-hidden="true">•</span>
                  <p className="text-gray-600">Capture leads while you focus on clients</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500" aria-hidden="true">•</span>
                  <p className="text-gray-600">Works when you're in court, in a meeting or asleep</p>
                </div>
              </div>
            </motion.article>
          </Link>

          {/* AI Voice Agents Section */}
          <Link to="/ai-voice-demos" className="block">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="w-full py-8 px-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl border border-gray-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-purple-600">
                  AI Voice Agents Demos
                </h2>
                <ChevronRight className="w-6 h-6 text-purple-500 transform transition-transform group-hover:translate-x-2" aria-hidden="true" />
              </div>
              <div className="mt-4 flex items-center gap-x-8">
                <div className="flex items-center gap-2">
                  <span className="text-purple-500" aria-hidden="true">•</span>
                  <p className="text-gray-600">Answer calls even when you're unavailable</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-500" aria-hidden="true">•</span>
                  <p className="text-gray-600">No more stress over absent staff -- no unanswered clients</p>
                </div>
              </div>
            </motion.article>
          </Link>

          {/* AI Powered Automations Section */}
          <Link to="/ai-automation-demos" className="block">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="w-full py-8 px-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl border border-gray-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-teal-600">
                  AI-Powered Automations Demos
                </h2>
                <ChevronRight className="w-6 h-6 text-teal-500 transform transition-transform group-hover:translate-x-2" aria-hidden="true" />
              </div>
              <div className="mt-4 flex items-center gap-x-8">
                <div className="flex items-center gap-2">
                  <span className="text-teal-500" aria-hidden="true">•</span>
                  <p className="text-gray-600">Send confirmations, reminders, and follow-ups automatically</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-500" aria-hidden="true">•</span>
                  <p className="text-gray-600">Auto-generate invoices or summaries after appointments</p>
                </div>
              </div>
            </motion.article>
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default ExOfAIIntegrations;