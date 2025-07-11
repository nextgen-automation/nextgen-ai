import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';

interface VoiceDemoLayoutProps {
  title: string;
  description: string;
  instructions?: string;
}

const VoiceDemoLayout: React.FC<VoiceDemoLayoutProps> = ({
  title,
  description,
  instructions
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white text-gray-900 pt-16"
    >
      <Header />

      <main className="container mx-auto px-6 pt-12 pb-24">
        {/* Back to Voice Demos */}
        <Link to="/ai-voice-demos" className="block mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to AI Voice Demos
          </motion.div>
        </Link>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            {description}
          </p>

          {/* Instructions Section */}
          <div className="max-w-2xl mx-auto bg-purple-50 rounded-2xl p-8 border border-purple-200">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">
                How to Try the Demo
              </h2>
              
              <div className="text-left space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Look for the chat widget</p>
                    <p className="text-gray-600 text-sm">You'll find a chat widget at the bottom left corner of your screen</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Click to start the voice demo</p>
                    <p className="text-gray-600 text-sm">The widget will have a "Start a call" option - click it to begin your voice conversation with the AI agent</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Speak naturally</p>
                    <p className="text-gray-600 text-sm">Talk to the AI agent just like you would with a human receptionist</p>
                  </div>
                </div>
              </div>

              {instructions && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    <strong>💡 Try saying:</strong> {instructions}
                  </p>
                </div>
              )}
            </div>

            {/* Visual indicator pointing to bottom left */}
            <div className="relative">
              <div className="flex items-center justify-center gap-2 text-purple-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="font-medium">Look for the chat widget below</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              {/* Arrow pointing to bottom left */}
              <div className="absolute -bottom-4 left-8 transform rotate-45">
                <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default VoiceDemoLayout;