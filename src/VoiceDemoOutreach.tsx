import React from 'react';
import VoiceDemoLayout from './components/VoiceDemoLayout';
import VoiceflowChatWidget from './components/VoiceflowChatWidget';

const VoiceDemoOutreach: React.FC = () => {
  return (
    <>
      <VoiceDemoLayout
        title="Outreach Agent"
        description="Experience our AI outreach agent that can make professional sales calls to potential prospects with custom scripts tailored to your business needs. This agent will talk to you as if calling a potential prospect to offer real estate services."
        instructions="Hello, who is this?, I'm not interested, Tell me more about your services, What's the price range?, Can you send me more information?"
      />
      
      {/* Load the Voiceflow chat widget only for this page */}
      <VoiceflowChatWidget projectID="686e86e91b77fd494630d99b" />
    </>
  );
};

export default VoiceDemoOutreach;