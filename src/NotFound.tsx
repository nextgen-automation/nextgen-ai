import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import BookMeetingButton from './components/BookMeetingButton';

const NotFound: React.FC = () => {
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
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Oops! The page you're looking for doesn't exist.
            </p>
            <p className="text-gray-500">
              It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              to="/"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors font-medium"
              aria-label="Go to homepage"
            >
              <Home className="w-5 h-5" aria-hidden="true" />
              Go to Homepage
            </Link>
            
            <Link 
              to="/demos"
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-full transition-colors font-medium"
              aria-label="Explore our AI demos"
            >
              <Search className="w-5 h-5" aria-hidden="true" />
              Explore Our Demos
            </Link>
          </div>

          {/* Additional Help Section */}
          <section className="bg-gray-50 rounded-xl p-8 border border-gray-200" aria-label="Need help section">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Need Help Finding What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-6">
              Our AI solutions can help transform your business. Let's discuss how we can assist you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookMeetingButton />
              <div className="flex items-center gap-2 text-gray-600">
                <span>or talk to our AI assistant Nemo</span>
                <div className="w-8 h-8 bg-transparent">
                  {/* Space reserved for chat widget */}
                </div>
              </div>
            </div>
          </section>

          {/* Back Button */}
          <div className="mt-8">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors mx-auto"
              aria-label="Go back to previous page"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Go back to previous page
            </button>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default NotFound;