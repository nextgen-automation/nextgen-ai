import React from 'react';
import { Bot } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (window.location.pathname === '/') {
      servicesSection?.scrollIntoView();
    } else {
      navigate('/', { state: { scrollToServices: true } });
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-black fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold text-white">NextGen-AI</h1>
        </div>
        <div className="flex items-center space-x-8">
          <button onClick={scrollToTop} className="text-white hover:text-white/80 transition-colors">Home</button>
          <button onClick={scrollToServices} className="text-white hover:text-white/80 transition-colors">Our Services</button>
          <Link to="/examples" className="text-white hover:text-white/80 transition-colors">Watch Examples of AI Integrations</Link>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors">
            Book a Free Meeting
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;