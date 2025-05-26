import React from 'react';
import { Bot } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    <nav className="bg-custom-gray border-b border-custom-border-gray fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={scrollToTop} className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-custom-blue" />
          <h1 className="text-2xl font-bold text-white">NextGen-AI</h1>
        </button>
        <div className="flex items-center space-x-8">
          <button 
            onClick={scrollToTop} 
            className={`text-custom-text hover:text-white transition-colors ${location.pathname === '/' ? 'text-custom-blue' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={scrollToServices} 
            className="text-custom-text hover:text-white transition-colors"
          >
            Our Services
          </button>
          <Link 
            to="/examples" 
            className={`text-custom-text hover:text-white transition-colors ${location.pathname === '/examples' ? 'text-custom-blue' : ''}`}
          >
            Watch Examples of AI Integrations
          </Link>
          <button className="bg-custom-blue text-white px-6 py-2 rounded-full">
            Book a Free Meeting
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;