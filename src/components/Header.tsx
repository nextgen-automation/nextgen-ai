import React from 'react';
import { Bot } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import BookMeetingButton from './BookMeetingButton';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (window.location.pathname === '/') {
      servicesSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToServices: true } });
    }
  };

  const scrollToTop = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-[1000] ${
        isHomePage 
          ? 'bg-black/30 backdrop-blur-sm border-b-0' 
          : 'bg-white border-b border-[#E5E5E5]'
      }`} 
      style={{ padding: '1rem 2rem', borderBottomWidth: isHomePage ? '0' : '1px' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={scrollToTop} className="flex items-center space-x-2 group">
          <Bot className="w-8 h-8 text-blue-500" />
          <h1 className={`text-2xl font-bold ${isHomePage ? 'text-white' : 'text-gray-900'}`}>
            NextGen-AI
          </h1>
        </button>
        <div className="flex items-center space-x-8">
          <button 
            onClick={scrollToTop} 
            className={`transition-colors ${
              isHomePage 
                ? 'text-white hover:text-gray-300' 
                : `text-gray-700 hover:text-gray-900 ${location.pathname === '/' ? 'text-gray-900' : ''}`
            }`}
          >
            Home
          </button>
          <button 
            onClick={scrollToServices} 
            className={`transition-colors ${
              isHomePage 
                ? 'text-white hover:text-gray-300' 
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Our Services
          </button>
          <Link 
            to="/examples" 
            className={`transition-colors ${
              isHomePage 
                ? 'text-white hover:text-gray-300' 
                : `text-gray-700 hover:text-gray-900 ${location.pathname === '/examples' ? 'text-gray-900' : ''}`
            }`}
          >
            Watch Examples of AI Integrations
          </Link>
          <BookMeetingButton />
        </div>
      </div>
    </nav>
  );
};

export default Header;