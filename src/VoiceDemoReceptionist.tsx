import React, { useEffect } from 'react';
import VoiceDemoLayout from './components/VoiceDemoLayout';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: any) => void;
        close: () => void;
        destroy: () => void;
      };
    };
  }
}

const VoiceDemoReceptionist: React.FC = () => {
  useEffect(() => {
    // Load Voiceflow widget script for this specific demo
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(d, t) {
          var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
          v.onload = function() {
            window.voiceflow.chat.load({
              verify: { projectID: '686e83961b77fd494630d6e3' },
              url: 'https://general-runtime.voiceflow.com',
              versionID: 'production',
              voice: {
                url: "https://runtime-api.voiceflow.com"
              }
            });
          }
          v.onerror = function() {
            console.warn('Voiceflow widget failed to load');
          }
          v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
          v.type = "text/javascript"; 
          s.parentNode.insertBefore(v, s);
      })(document, 'script');
    `;
    
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      // Close and destroy the Voiceflow widget
      if (window.voiceflow && window.voiceflow.chat) {
        try {
          window.voiceflow.chat.close();
          if (window.voiceflow.chat.destroy) {
            window.voiceflow.chat.destroy();
          }
        } catch (error) {
          console.warn('Error closing Voiceflow widget:', error);
        }
      }

      // Remove the widget DOM elements
      const widgetElements = document.querySelectorAll('[data-voiceflow], .vfrc-widget, .vfrc-chat');
      widgetElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });

      // Remove all Voiceflow-related scripts
      const voiceflowScripts = document.querySelectorAll('script[src*="voiceflow"], script[src*="widget"]');
      voiceflowScripts.forEach(scriptElement => {
        if (scriptElement.parentNode) {
          scriptElement.parentNode.removeChild(scriptElement);
        }
      });

      // Remove the script we added
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }

      // Clear the global voiceflow object
      if (window.voiceflow) {
        delete window.voiceflow;
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