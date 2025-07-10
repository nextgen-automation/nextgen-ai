import React from 'react';
import VoiceDemoLayout from './components/VoiceDemoLayout';

const VoiceDemoHotline: React.FC = () => {
  return (
    <VoiceDemoLayout
      title="Information Hotline Agent"
      description="Experience our AI information hotline agent that can provide automated information services. This demo simulates a real estate information hotline where callers can get property information based on their location."
      instructions="Press 1 for property information, What houses are available near me?, Tell me about properties in downtown, What's the average price in this area?"
    />
  );
};

export default VoiceDemoHotline;