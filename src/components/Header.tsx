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
    <nav className="bg-[#1F1F1F] fixed w-full top-0 z-[1000] border-b border-[#2D2D2D]" style={{ padding: '1rem 2rem', borderBottomWidth: '1px' }}>
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={scrollToTop} className="flex items-center space-x-2 group">
          <Bot className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold text-white">NextGen-AI</h1>
        </button>
        <div className="flex items-center space-x-8">
          <button 
            onClick={scrollToTop} 
            className={`text-[#F0F0F0] hover:text-white transition-colors ${location.pathname === '/' ? 'text-white' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={scrollToServices} 
            className="text-[#F0F0F0] hover:text-white transition-colors"
          >
            Our Services
          </button>
          <Link 
            to="/examples" 
            className={`text-[#F0F0F0] hover:text-white transition-colors ${location.pathname === '/examples' ? 'text-white' : ''}`}
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