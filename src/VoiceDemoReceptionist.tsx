import React, { useEffect } from 'react';
import VoiceDemoLayout from './components/VoiceDemoLayout';
import VoiceflowChatWidget from './components/VoiceflowChatWidget';

const VoiceDemoReceptionist: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <VoiceDemoLayout
        title="Business Receptionist Agent"
        description="Experience our AI voice agent that can handle calls, schedule appointments, and answer common questions - just like a human receptionist. This agent can reduce your receptionist costs by up to 80% while providing 24/7 availability."
        instructions="I'd like to schedule an appointment, What are your business hours?, Can you tell me about your services?, I need to reschedule my appointment"
      />
      
      {/* Load the Voiceflow chat widget only for this page */}
      <VoiceflowChatWidget projectID="686e83961b77fd494630d6e3" />
    </>
  );
};

export default VoiceDemoReceptionist;