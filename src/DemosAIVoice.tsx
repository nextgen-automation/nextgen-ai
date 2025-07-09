import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Wrench, Phone, PhoneOff, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import ContactFormButton from './components/ContactFormButton';

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

const ExamplesAIVoice: React.FC = () => {
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
                verify: { projectID: '686e83961b77fd494630d6e3' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: '686e83961b77fd494630d6e4',
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
  }, []);

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
      if (isSpeaking) {
        return (
          <>
            <div className="w-4 h-4 mr-2 flex items-center justify-center">
              <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
            </div>
            AI Speaking...
          </>
        );
      }
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

  const voiceAgentTitles = [
    {
      title: 'Business Receptionist Agent',
      description: 'Spending a lot of money and time to manage your receptionist? What if we cut cost by 80%.'
    },
    {
      title: 'Outreach Agent',
      description: 'Need to call 1000s of leads?'
    },
    {
      title: 'Personal Assistant Agent',
      description: 'Need someone available 24/7 to consistently update your calendar?'
    },
    {
      title: 'Information Hotline Agent',
      description: 'Press "1" to hear about the houses close to your current address.'
    },
    {
      title: 'Appointment Reminders Via Call',
      description: 'Tired of no-shows?'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white text-gray-900 pt-16 pb-24"
    >
      <Header />

      <main className="container mx-auto px-6 pt-12">
        <Link to="/demos" className="block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="w-full py-8 px-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl border border-gray-200 cursor-pointer group"
          >
            <div className="flex items-center">
              <ChevronLeft className="w-6 h-6 text-purple-500 transform transition-transform group-hover:-translate-x-2 mr-4" aria-hidden="true" />
              <h1 className="text-2xl font-bold text-purple-600">
                AI Voice Agents Demos
              </h1>
            </div>
            <div className="mt-4 ml-10 flex items-center gap-x-8">
              <div className="flex items-center gap-2">
                <span className="text-purple-500" aria-hidden="true">•</span>
                <p className="text-gray-600">Answer calls even when you're unavailable</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500" aria-hidden="true">•</span>
                <p className="text-gray-600">No more stress over absent staff -- no unanswered clients</p>
              </div>
            </div>
          </motion.div>
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-12 px-6"
          aria-label="AI Voice Agent examples"
        >
          <ul className="space-y-6">
            {voiceAgentTitles.map((agent, index) => (
              <li key={index}>
                {index === 0 ? (
                  // First item - Business Receptionist Agent with interactive demo
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="text-xl font-bold text-purple-600 mb-2">
                      {agent.title}
                    </h4>
                    <p className="text-gray-600 mb-6">
                      {agent.description}
                    </p>
                    
                    {/* Voice Agent Demo Controls */}
                    <div className="p-4 bg-white rounded-lg border border-gray-200">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-2">
                            Try the Business Receptionist Agent
                          </h5>
                          <p className="text-sm text-gray-600 mb-4">
                            Experience our AI voice agent that can handle calls, schedule appointments, and answer common questions - just like a human receptionist.
                          </p>
                          
                          {isCallActive && (
                            <div className="text-sm text-gray-500 mb-2">
                              💡 Try saying: "I'd like to schedule an appointment" or "What are your business hours?"
                            </div>
                          )}

                          {error && (
                            <div className="text-sm text-red-600 mb-2 p-2 bg-red-50 rounded">
                              {error}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex gap-3">
                          <button
                            onClick={startCall}
                            disabled={isCallActive || isConnecting || !voiceflowLoaded}
                            className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
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
                              className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                              aria-label="End voice call"
                            >
                              <PhoneOff className="w-4 h-4 mr-2" />
                              End Call
                            </button>
                          )}
                        </div>
                      </div>
                      
                      {/* Call Status Indicator */}
                      {(isCallActive || isConnecting) && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-2 text-sm">
                            <div className={`w-2 h-2 rounded-full ${
                              isConnecting ? 'bg-yellow-500 animate-pulse' :
                              isSpeaking ? 'bg-green-500 animate-pulse' : 
                              'bg-blue-500'
                            }`}></div>
                            <span className="text-gray-600">
                              {isConnecting ? 'Connecting to AI agent...' :
                               isSpeaking ? 'AI agent is speaking' :
                               'Ready to listen - speak now'}
                            </span>
                          </div>
                        </div>
                      )}

                      {!voiceflowLoaded && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Loading AI voice agent...
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // Other items - regular display with construction notice
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="text-xl font-bold text-purple-600 mb-2 flex items-center gap-2">
                      {agent.title}
                      <Wrench className="w-5 h-5" aria-hidden="true" />
                      <span className="text-sm font-normal">[Under construction]</span>
                    </h4>
                    <p className="text-gray-600">
                      {agent.description}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-16 pl-6">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-gray-700">
                Feeling excited to get your business a personal AI voice agent? →
              </span>
              <ContactFormButton />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Still in doubt? Talk to Nemo →</span>
                <div className="w-12 h-12 bg-transparent">
                  {/* Space reserved for future chat widget */}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default ExamplesAIVoice;