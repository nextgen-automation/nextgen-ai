import React from 'react';
import VoiceDemoLayout from './components/VoiceDemoLayout';

const VoiceDemoOutreach: React.FC = () => {
  return (
    <VoiceDemoLayout
      title="Outreach Agent"
      description="Experience our AI outreach agent that can make professional sales calls to potential prospects with custom scripts tailored to your business needs. This agent will talk to you as if calling a potential prospect to offer real estate services."
      projectId="686e86e91b77fd494630d99b"
      versionId="686e86e91b77fd494630d99c"
      suggestions={[
        "Hello, who is this?",
        "I'm not interested",
        "Tell me more about your services",
        "What's the price range?",
        "Can you send me more information?"
      ]}
    />
  );
};

export default VoiceDemoOutreach;