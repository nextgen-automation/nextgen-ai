import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Wrench, Phone, PhoneOff, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RuntimeClientFactory } from '@voiceflow/runtime-client-js';
import Header from './components/Header';
import ContactFormButton from './components/ContactFormButton';

const ExamplesAIVoice: React.FC = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [voiceflowClient, setVoiceflowClient] = useState<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const currentAudioSourceRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Initialize Voiceflow client
    const initializeVoiceflow = async () => {
      try {
        const factory = new RuntimeClientFactory({
          projectID: '686e87825ecbc2a7a7136848',
          versionID: 'production',
          apiKey: 'VF.DM.686e87825ecbc2a7a7136848.hzb98PW2zxyo2DyY',
          apiEndpoint: 'https://general-runtime.voiceflow.com',
        });

        const client = factory.createClient();
        setVoiceflowClient(client);

        // Set up event listeners
        client.on('speak', async (event: any) => {
          if (event.payload?.src) {
            await playAudio(event.payload.src);
          }
        });

        client.on('end', () => {
          setIsCallActive(false);
          setIsSpeaking(false);
          setIsConnecting(false);
        });

      } catch (error) {
        console.error('Failed to initialize Voiceflow client:', error);
      }
    };

    initializeVoiceflow();

    // Cleanup function
    return () => {
      if (currentAudioSourceRef.current) {
        currentAudioSourceRef.current.stop();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const playAudio = async (audioUrl: string) => {
    try {
      setIsSpeaking(true);

      // Initialize AudioContext if not already done
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const audioContext = audioContextRef.current;

      // Resume AudioContext if suspended (required by some browsers)
      if (audioContext.state === 'suspended') {
        await audioContext.resume();
      }

      // Fetch and decode audio
      const response = await fetch(audioUrl);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      // Stop any currently playing audio
      if (currentAudioSourceRef.current) {
        currentAudioSourceRef.current.stop();
      }

      // Create and play new audio source
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);

      source.onended = () => {
        setIsSpeaking(false);
        currentAudioSourceRef.current = null;
      };

      currentAudioSourceRef.current = source;
      source.start();

    } catch (error) {
      console.error('Error playing audio:', error);
      setIsSpeaking(false);
    }
  };

  const startCall = async () => {
    if (!voiceflowClient) {
      console.error('Voiceflow client not initialized');
      return;
    }

    try {
      setIsConnecting(true);
      
      // Start the conversation
      const response = await voiceflowClient.start();
      
      setIsCallActive(true);
      setIsConnecting(false);

      // Handle initial response if it contains audio
      if (response?.trace) {
        for (const trace of response.trace) {
          if (trace.type === 'speak' && trace.payload?.src) {
            await playAudio(trace.payload.src);
          }
        }
      }

    } catch (error) {
      console.error('Error starting call:', error);
      setIsConnecting(false);
    }
  };

  const endCall = async () => {
    if (!voiceflowClient) return;

    try {
      // Stop any currently playing audio
      if (currentAudioSourceRef.current) {
        currentAudioSourceRef.current.stop();
        currentAudioSourceRef.current = null;
      }

      // Send goodbye message to gracefully end conversation
      await voiceflowClient.sendText('goodbye');
      
      setIsCallActive(false);
      setIsSpeaking(false);
      setIsConnecting(false);

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
    'Business Receptionist Agent - Spending a lot of money and time to manage your receptionist? What if we cut cost by 80%.',
    'Outreach Agent - Need to call 1000s of leads?',
    'Personal Assistant Agent - Need someone available 24/7 to consistently update your calendar?',
    'Information Hotline Agent - Press "1" to hear about the houses close to your current address.',
    'Appointment Reminders Via Call - Tired of no-shows?'
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
            {voiceAgentTitles.map((title, index) => (
              <li key={index}>
                {index === 0 ? (
                  // First item - Business Receptionist Agent with interactive demo
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 text-2xl" aria-hidden="true">•</span>
                      <span className="text-purple-600 text-lg">{title}</span>
                    </div>
                    
                    {/* Voice Agent Demo Controls */}
                    <div className="ml-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Try the Business Receptionist Agent
                          </h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Experience our AI voice agent that can handle calls, schedule appointments, and answer common questions - just like a human receptionist.
                          </p>
                          
                          {isCallActive && (
                            <div className="text-sm text-gray-500 mb-2">
                              💡 Try saying: "I'd like to schedule an appointment" or "What are your business hours?"
                            </div>
                          )}
                        </div>
                        
                        <div className="flex gap-3">
                          <button
                            onClick={startCall}
                            disabled={isCallActive || isConnecting}
                            className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                              isCallActive || isConnecting
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
                    </div>
                  </div>
                ) : (
                  // Other items - regular display with construction notice
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 text-2xl" aria-hidden="true">•</span>
                    <span className="text-purple-600 text-lg">
                      {title}
                      {index >= 1 && (
                        <>
                          {' '}
                          <Wrench className="w-4 h-4 inline mx-1" aria-hidden="true" />
                          [Under construction]
                        </>
                      )}
                    </span>
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