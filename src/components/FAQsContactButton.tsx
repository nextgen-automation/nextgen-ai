import React from 'react';
import { useNavigate } from 'react-router-dom';

const FAQsContactButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/faqs-contact-us');
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-[#2D6BFF] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
      aria-label="Navigate to FAQs and Contact Us page"
    >
      FAQs/Contact Us
    </button>
  );
};

export default FAQsContactButton;