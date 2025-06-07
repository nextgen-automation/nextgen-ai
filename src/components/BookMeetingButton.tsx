import React from 'react';

const BookMeetingButton: React.FC = () => {
  const handleClick = () => {
    const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/nextgenai-automation/30min';
    window.open(calendlyUrl, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-[#2D6BFF] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
    >
      Book a Free Consultation
    </button>
  );
};

export default BookMeetingButton;