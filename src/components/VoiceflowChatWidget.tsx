import { useEffect } from 'react';

interface VoiceflowChatWidgetProps {
  projectID: string;
}

const VoiceflowChatWidget: React.FC<VoiceflowChatWidgetProps> = ({ projectID }) => {
  useEffect(() => {
    // Load the Voiceflow script first
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    
    script.onload = () => {
      if (window.voiceflow && window.voiceflow.chat) {
        // Load widget when component mounts with memory persistence
        window.voiceflow.chat.load({
          verify: { projectID },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          },
          assistant: { 
            persistence: 'memory' // Ephemeral sessions - won't persist across page navigations
          }
        });
        
        // Show the widget
        window.voiceflow.chat.show();
      }
    };

    script.onerror = () => {
      console.warn('Voiceflow widget failed to load');
    };

    document.body.appendChild(script);

    // Cleanup function - called when component unmounts
    return () => {
      if (window.voiceflow && window.voiceflow.chat) {
        // Hide the widget UI first
        window.voiceflow.chat.hide();
        // Close any active chat sessions
        window.voiceflow.chat.close();
      }
      
      // Remove the script from DOM
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [projectID]);

  // This component doesn't render any visible HTML elements
  return null;
};

export default VoiceflowChatWidget;