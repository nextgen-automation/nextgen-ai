import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactFormButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/faqs-contact-us', { state: { scrollToContactForm: true } });
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-[#2D6BFF] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
      aria-label="Navigate to contact form"
    >
      Contact Us
    </button>
  );
};

export default ContactFormButton;