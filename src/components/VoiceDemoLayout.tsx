import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, PhoneOff, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: any) => void;
        open: () => void;
        close: () => void;
        interact: (request: any) => Promise<any>;
      };
    };
  }
}

interface VoiceDemoLayoutProps {
  title: string;
  description: string;
  projectId: string;
  versionId: string;
  suggestions?: string[];
}

const VoiceDemoLayout: React.FC<VoiceDemoLayoutProps> = ({
  title,
  description,
  projectId,
  versionId,
  suggestions = []
}) => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [voiceflowLoaded, setVoiceflowLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const currentAudioSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Load Voiceflow widget script
    const loadVoiceflowScript = () => {
      return new Promise<void>((resolve, reject) => {
        // Check if script already exists
        if (document.querySelector('script[src*="voiceflow.com/widget"]')) {
          if (window.voiceflow) {
            setVoiceflowLoaded(true);
            resolve();
          } else {
            reject(new Error('Voiceflow script loaded but API not available'));
          }
          return;
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
        
        script.onload = () => {
          // Initialize Voiceflow widget
          if (window.voiceflow) {
            try {
              window.voiceflow.chat.load({
                verify: { projectID: projectId },
                url: 'https://general-runtime.voiceflow.com',
                versionID: versionId,
               voice: {
                 url: "https://runtime-api.voiceflow.com"
               },
                assistant: {
                  stylesheet: 'https://cdn.voiceflow.com/widget-next/bundle.mjs'
                }
              });
              setVoiceflowLoaded(true);
              resolve();
            } catch (err) {
              console.error('Error initializing Voiceflow:', err);
              setError('Failed to initialize Voiceflow widget');
              reject(err);
            }
          } else {
            const error = new Error('Voiceflow API not available after script load');
            setError('Voiceflow API not available');
            reject(error);
          }
        };

        script.onerror = () => {
          const error = new Error('Failed to load Voiceflow script');
          setError('Failed to load Voiceflow script');
          reject(error);
        };

        document.head.appendChild(script);
      });
    };

    loadVoiceflowScript().catch(console.error);

    // Cleanup function
    return () => {
      if (currentAudioSourceRef.current) {
        currentAudioSourceRef.current.stop();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [projectId, versionId]);

  const initializeSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      throw new Error('Speech recognition not supported in this browser');
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = async (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');

      if (event.results[event.results.length - 1].isFinal) {
        await sendMessageToVoiceflow(transcript);
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      if (event.error === 'not-allowed') {
        setError('Microphone access denied. Please allow microphone access and try again.');
      } else if (event.error === 'network') {
        setError('Speech recognition service encountered a network error. Please check your internet connection and try again.');
      }
    };

    recognition.onend = () => {
      if (isCallActive) {
        // Restart recognition if call is still active
        setTimeout(() => {
          if (isCallActive && recognitionRef.current) {
            recognitionRef.current.start();
          }
        }, 100);
      }
    };

    return recognition;
  };

  const sendMessageToVoiceflow = async (message: string) => {
    if (!voiceflowLoaded || !window.voiceflow) {
      console.error('Voiceflow not loaded');
      return;
    }

    try {
      setIsSpeaking(true);
      
      // Send message to Voiceflow
      const response = await window.voiceflow.chat.interact({
        type: 'text',
        payload: message
      });

      // Handle response - look for speak traces
      if (response && response.length > 0) {
        for (const trace of response) {
          if (trace.type === 'speak' && trace.payload) {
            // Use text-to-speech for the response
            await speakText(trace.payload.message || trace.payload);
          }
        }
      }

    } catch (error) {
      console.error('Error sending message to Voiceflow:', error);
      setError('Failed to communicate with AI agent');
    } finally {
      setIsSpeaking(false);
    }
  };

  const speakText = async (text: string) => {
    return new Promise<void>((resolve) => {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onend = () => {
          setIsSpeaking(false);
          resolve();
        };

        utterance.onerror = () => {
          setIsSpeaking(false);
          resolve();
        };

        setIsSpeaking(true);
        speechSynthesis.speak(utterance);
      } else {
        setIsSpeaking(false);
        resolve();
      }
    });
  };

  const startCall = async () => {
    if (!voiceflowLoaded) {
      setError('Voiceflow not loaded yet. Please wait and try again.');
      return;
    }

    try {
      setIsConnecting(true);
      setError(null);

      // Initialize speech recognition
      const recognition = initializeSpeechRecognition();
      recognitionRef.current = recognition;

      // Request microphone permission and start recognition
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      recognition.start();
      
      setIsCallActive(true);
      setIsConnecting(false);

      // Send initial message to start conversation
      await sendMessageToVoiceflow('Hello');

    } catch (error) {
      console.error('Error starting call:', error);
      setError('Failed to start call. Please check microphone permissions.');
      setIsConnecting(false);
    }
  };

  const endCall = async () => {
    try {
      // Stop speech recognition
      if (recognitionRef.current) {
        recognitionRef.current.stop();
        recognitionRef.current = null;
      }

      // Stop any ongoing speech synthesis
      if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
      }

      // Send goodbye message
      if (voiceflowLoaded && window.voiceflow) {
        await sendMessageToVoiceflow('goodbye');
      }
      
      setIsCallActive(false);
      setIsSpeaking(false);
      setIsConnecting(false);
      setError(null);

    } catch (error) {
      console.error('Error ending call:', error);
      // Force end the call even if there's an error
      setIsCallActive(false);
      setIsSpeaking(false);
      setIsConnecting(false);
    }
  };

  const getCallButtonContent = () => {
    if (isConnecting) {
      return (
        <>
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
          Connecting...
        </>
      );
    }
    
    if (isCallActive) {
      return (
        <>
          <Phone className="w-4 h-4 mr-2" />
          Call Active
        </>
      );
    }
    
    return (
      <>
        <Phone className="w-4 h-4 mr-2" />
        Start Call
      </>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white text-gray-900 pt-16"
    >
      <Header />

      <main className="container mx-auto px-6 pt-12 pb-24">
        {/* Back to Voice Demos */}
        <Link to="/ai-voice-demos" className="block mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to AI Voice Demos
          </motion.div>
        </Link>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            {description}
          </p>

          {/* Call Interface */}
          <div className="max-w-md mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Try the Demo
              </h2>
              
              {suggestions.length > 0 && isCallActive && (
                <div className="text-sm text-gray-500 mb-4 p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium mb-2">💡 Try saying:</p>
                  <ul className="space-y-1">
                    {suggestions.map((suggestion, index) => (
                      <li key={index}>"{suggestion}"</li>
                    ))}
                  </ul>
                </div>
              )}

              {error && (
                <div className="text-sm text-red-600 mb-4 p-3 bg-red-50 rounded-lg">
                  {error}
                </div>
              )}
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={startCall}
                disabled={isCallActive || isConnecting || !voiceflowLoaded}
                className={`flex items-center px-8 py-4 rounded-full font-medium transition-all duration-200 ${
                  isCallActive || isConnecting || !voiceflowLoaded
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 text-white hover:shadow-lg transform hover:scale-105'
                }`}
                aria-label={isCallActive ? 'Call in progress' : 'Start voice call with AI agent'}
              >
                {getCallButtonContent()}
              </button>
              
              {isCallActive && (
                <button
                  onClick={endCall}
                  className="flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                  aria-label="End voice call"
                >
                  <PhoneOff className="w-4 h-4 mr-2" />
                  End Call
                </button>
              )}
            </div>

            {/* Call Status Indicator */}
            {(isCallActive || isConnecting) && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className={`w-2 h-2 rounded-full ${
                    isConnecting ? 'bg-yellow-500 animate-pulse' :
                    isSpeaking ? 'bg-green-500 animate-pulse' : 
                    'bg-blue-500'
                  }`}></div>
                  <span className="text-gray-600">
                    {isConnecting ? 'Connecting to AI agent...' :
                     'Call Active'}
                  </span>
                </div>
              </div>
            )}

            {!voiceflowLoaded && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading AI voice agent...
                </div>
              </div>
            )}
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default VoiceDemoLayout;