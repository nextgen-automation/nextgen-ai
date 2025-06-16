import React, { useState } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import BookMeetingButton from './BookMeetingButton';
import { scrollToServices, scrollToTop } from '../utils/scrollUtils';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine if we're on the homepage
  const isHomePage = location.pathname === '/';

  const handleScrollToServices = () => {
    scrollToServices(navigate, location.pathname);
    setIsMobileMenuOpen(false);
  };

  const handleScrollToTop = () => {
    if (location.pathname === '/') {
      scrollToTop();
    } else {
      navigate('/');
    }
    setIsMobileMenuOpen(false);
  };

  const handleFAQsContactClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-[1000] border-b transition-all duration-300 ${
        isHomePage 
          ? 'bg-black border-gray-700' 
          : 'bg-white border-gray-200 shadow-sm'
      }`} 
      style={{ padding: '1rem 2rem', borderBottomWidth: '1px' }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <button 
          onClick={handleScrollToTop} 
          className="flex items-center space-x-2 group"
          aria-label="Go to homepage"
        >
          <Bot className="w-8 h-8 text-blue-500" aria-hidden="true" />
          <h1 className={`text-2xl font-bold transition-colors ${
            isHomePage ? 'text-white' : 'text-gray-900'
          }`}>
            NextGen-AI
          </h1>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={handleScrollToTop} 
            className={`transition-colors ${
              isHomePage 
                ? `text-gray-300 hover:text-white ${location.pathname === '/' ? 'text-white font-medium' : ''}`
                : `text-gray-700 hover:text-gray-900 ${location.pathname === '/' ? 'text-gray-900 font-medium' : ''}`
            }`}
            aria-label="Navigate to home page"
          >
            Home
          </button>
          <button 
            onClick={handleScrollToServices} 
            className={`transition-colors ${
              isHomePage 
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900'
            }`}
            aria-label="Navigate to our services section"
          >
            Our Services
          </button>
          <Link 
            to="/faqs-contact-us" 
            className={`transition-colors ${
              isHomePage 
                ? `text-gray-300 hover:text-white ${location.pathname === '/faqs-contact-us' ? 'text-white font-medium' : ''}`
                : `text-gray-700 hover:text-gray-900 ${location.pathname === '/faqs-contact-us' ? 'text-gray-900 font-medium' : ''}`
            }`}
            aria-label="View FAQs and contact information"
          >
            FAQs/Contact Us
          </Link>
          <BookMeetingButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`block md:hidden p-2 transition-colors ${
            isHomePage 
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-700 hover:text-gray-900'
          }`}
          aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6\" aria-hidden="true" /> : <Menu className="w-6 h-6\" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className={`md:hidden border-t py-4 ${
            isHomePage 
              ? 'bg-black border-gray-700'
              : 'bg-white border-gray-200'
          }`}
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <div className="container mx-auto px-6 space-y-4">
            <button 
              onClick={handleScrollToTop} 
              className={`block w-full text-left transition-colors py-2 ${
                isHomePage 
                  ? `text-gray-300 hover:text-white ${location.pathname === '/' ? 'text-white font-medium' : ''}`
                  : `text-gray-700 hover:text-gray-900 ${location.pathname === '/' ? 'text-gray-900 font-medium' : ''}`
              }`}
              aria-label="Navigate to home page"
            >
              Home
            </button>
            <button 
              onClick={handleScrollToServices} 
              className={`block w-full text-left transition-colors py-2 ${
                isHomePage 
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              aria-label="Navigate to our services section"
            >
              Our Services
            </button>
            <Link 
              to="/faqs-contact-us" 
              onClick={handleFAQsContactClick}
              className={`block w-full text-left transition-colors py-2 ${
                isHomePage 
                  ? `text-gray-300 hover:text-white ${location.pathname === '/faqs-contact-us' ? 'text-white font-medium' : ''}`
                  : `text-gray-700 hover:text-gray-900 ${location.pathname === '/faqs-contact-us' ? 'text-gray-900 font-medium' : ''}`
              }`}
              aria-label="View FAQs and contact information"
            >
              FAQs/Contact Us
            </Link>
            <div className="pt-2 w-full">
              <BookMeetingButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;