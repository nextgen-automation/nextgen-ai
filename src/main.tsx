import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, useLocation, useEffect } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import App from './App'
import DemosOfAIIntegrations from './DemosOfAIIntegrations'
import DemosAIChat from './DemosAIChat'
import DemosAIVoice from './DemosAIVoice'
import DemosAIAutomations from './DemosAIAutomations'
import FAQsContactUs from './FAQsContactUs'
import VoiceDemoReceptionist from './VoiceDemoReceptionist'
import VoiceDemoOutreach from './VoiceDemoOutreach'
import VoiceDemoAssistant from './VoiceDemoAssistant'
import VoiceDemoHotline from './VoiceDemoHotline'
import VoiceDemoReminders from './VoiceDemoReminders'
import NotFound from './NotFound'
import './index.css'

function AnimatedRoutes() {
  const location = useLocation();
  
  // Centralized scroll-to-top on route change
  useEffect(() => {
    // Only scroll to top if we're not handling special scroll behavior
    if (!location.state?.scrollToServices && !location.state?.scrollToContactForm) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.state]);
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/demos" element={<DemosOfAIIntegrations />} />
        <Route path="/ai-chat-demos" element={<DemosAIChat />} />
        <Route path="/ai-voice-demos" element={<DemosAIVoice />} />
        <Route path="/ai-automation-demos" element={<DemosAIAutomations />} />
        <Route path="/voice-demo/receptionist" element={<VoiceDemoReceptionist />} />
        <Route path="/voice-demo/outreach" element={<VoiceDemoOutreach />} />
        <Route path="/voice-demo/assistant" element={<VoiceDemoAssistant />} />
        <Route path="/voice-demo/hotline" element={<VoiceDemoHotline />} />
        <Route path="/voice-demo/reminders" element={<VoiceDemoReminders />} />
        <Route path="/faqs-contact-us" element={<FAQsContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AnimatedRoutes />
    </Router>
  </React.StrictMode>,
)