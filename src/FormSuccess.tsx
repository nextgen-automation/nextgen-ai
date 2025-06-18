import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import BookMeetingButton from './components/BookMeetingButton';

const FormSuccess: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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

      <main className="container mx-auto px-6 pt-20 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto" aria-hidden="true" />
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Thank you for contacting NextGen-AI. We've received your message and will get back to you within 12 hours.
            </p>
            <p className="text-gray-500">
              We're excited to discuss how AI can transform your business.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link 
              to="/"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors font-medium"
              aria-label="Return to homepage"
            >
              <Home className="w-5 h-5" aria-hidden="true" />
              Return to Homepage
            </Link>
            
            <Link 
              to="/examples"
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-full transition-colors font-medium"
              aria-label="Explore our AI demos"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Explore Our Demos
            </Link>
          </motion.div>

          {/* Additional Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gray-50 rounded-xl p-8 border border-gray-200"
            aria-label="What happens next"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">1</span>
                <span>We'll review your message and business needs within 12 hours</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">2</span>
                <span>Our AI specialists will prepare a customized consultation for your business</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">3</span>
                <span>We'll reach out to schedule a free consultation to discuss your AI transformation</span>
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                Want to schedule a call right now instead of waiting?
              </p>
              <BookMeetingButton />
            </div>
          </motion.section>
        </div>
      </main>
    </motion.div>
  );
};

export default FormSuccess;