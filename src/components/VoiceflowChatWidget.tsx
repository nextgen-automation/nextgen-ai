import React, { useEffect } from 'react';

const VoiceflowChatWidget: React.FC = () => {
  useEffect(() => {
    // Check if script already exists to prevent duplicates
    if (document.querySelector('script[src*="voiceflow.com/widget"]')) {
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(d, t) {
          var v = d.createElement(t);
          v.onload = function() {
            window.voiceflow.chat.load({
              verify: { projectID: '6835f01106ddb99ff491f24d' },
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
          d.body.appendChild(v);
      })(document, 'script');
    `;
    
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src*="voiceflow.com/widget"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default VoiceflowChatWidget;