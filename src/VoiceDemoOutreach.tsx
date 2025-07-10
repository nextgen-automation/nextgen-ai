import React from 'react';
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

const VoiceDemoOutreach: React.FC = () => {
  React.useEffect(() => {
    // Load Voiceflow widget script for this specific demo
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(d, t) {
          var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
          v.onload = function() {
            window.voiceflow.chat.load({
              verify: { projectID: '686e86e91b77fd494630d99b' },
              url: 'https://general-runtime.voiceflow.com',
              versionID: '686e86e91b77fd494630d99c',
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
      title="Outreach Agent"
      description="Experience our AI outreach agent that can make professional sales calls to potential prospects with custom scripts tailored to your business needs. This agent will talk to you as if calling a potential prospect to offer real estate services."
      instructions="Hello, who is this?, I'm not interested, Tell me more about your services, What's the price range?, Can you send me more information?"
    />
  );
};

export default VoiceDemoOutreach;