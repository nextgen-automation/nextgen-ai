import React, { useEffect } from 'react';

const VoiceflowChatWidget: React.FC = () => {
  useEffect(() => {
    // Check if Voiceflow script is already loaded to prevent duplicates
    if (document.querySelector('script[src*="voiceflow.com/widget-next/bundle.mjs"]')) {
      return;
    }

    // Create and inject the Voiceflow widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    
    script.onload = function() {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: '6835f01106ddb99ff491f24d' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      }
    };
    
    script.onerror = function() {
      console.warn('Voiceflow widget failed to load');
    };

    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src*="voiceflow.com/widget-next/bundle.mjs"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default VoiceflowChatWidget;