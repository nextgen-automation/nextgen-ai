import React from 'react';
import VoiceDemoLayout from './components/VoiceDemoLayout';

const VoiceDemoAssistant: React.FC = () => {
  return (
    <VoiceDemoLayout
      title="Personal Assistant Agent"
      description="Experience our AI personal assistant that's available 24/7 to manage your calendar, handle scheduling, and assist with various administrative tasks. This agent never sleeps and is always ready to help."
      instructions="What's on my schedule today?, Schedule a meeting for tomorrow, Cancel my 3 PM appointment, What's my availability next week?"
    />
  );
};

export default VoiceDemoAssistant;