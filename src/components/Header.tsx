import React, { useState } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import BookMeetingButton from './BookMeetingButton';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (window.location.pathname === '/') {
      servicesSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToServices: true } });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMobileMenuOpen(false);
  };

  const handleExamplesClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-[1000] border-b border-[#E5E5E5]" style={{ padding: '1rem 2rem', borderBottomWidth: '1px' }}>
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={scrollToTop} className="flex items-center space-x-2 group">
          <Bot className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold text-gray-900">NextGen-AI</h1>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={scrollToTop} 
            className={`text-gray-700 hover:text-gray-900 transition-colors ${location.pathname === '/' ? 'text-gray-900' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={scrollToServices} 
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Our Services
          </button>
          <Link 
            to="/examples" 
            className={`text-gray-700 hover:text-gray-900 transition-colors ${location.pathname === '/examples' ? 'text-gray-900' : ''}`}
          >
            Watch Examples of AI Integrations
          </Link>
          <BookMeetingButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="block md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-6 space-y-4">
            <button 
              onClick={scrollToTop} 
              className={`block w-full text-left text-gray-700 hover:text-gray-900 transition-colors py-2 ${location.pathname === '/' ? 'text-gray-900 font-medium' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={scrollToServices} 
              className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              Our Services
            </button>
            <Link 
              to="/examples" 
              onClick={handleExamplesClick}
              className={`block w-full text-left text-gray-700 hover:text-gray-900 transition-colors py-2 ${location.pathname === '/examples' ? 'text-gray-900 font-medium' : ''}`}
            >
              Watch Examples of AI Integrations
            </Link>
            <div className="pt-2">
              <BookMeetingButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;