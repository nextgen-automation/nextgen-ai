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
    <nav className="bg-white border-b border-[#E5E5E5] fixed w-full top-0 z-[1000]" style={{ padding: '1rem 2rem' }}>
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={scrollToTop} className="flex items-center space-x-2 group">
          <Bot className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold text-gray-900">NextGen-AI</h1>
        </button>
        <div className="flex items-center space-x-8">
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
          <button className="bg-[#2D6BFF] text-white px-6 py-2 rounded-full">
            Book a Free Meeting
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;