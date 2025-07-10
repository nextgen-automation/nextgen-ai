import React, { useEffect } from 'react';
import VoiceDemoLayout from './components/VoiceDemoLayout';

const VoiceDemoReceptionist: React.FC = () => {
  useEffect(() => {
    // Load Voiceflow widget script for this specific demo
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    
    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: '686e83961b77fd494630d6e3' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      }
    };

    script.onerror = () => {
      console.warn('Voiceflow widget failed to load');
    };

    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <VoiceDemoLayout
      title="Business Receptionist Agent"
      description="Experience our AI voice agent that can handle calls, schedule appointments, and answer common questions - just like a human receptionist. This agent can reduce your receptionist costs by up to 80% while providing 24/7 availability."
      instructions="I'd like to schedule an appointment, What are your business hours?, Can you tell me about your services?, I need to reschedule my appointment"
    />
  );
};

export default VoiceDemoReceptionist;