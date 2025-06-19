import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import App from './App'
import DemosOfAIIntegrations from './DemosOfAIIntegrations'
import DemosAIChat from './DemosAIChat'
import DemosAIVoice from './DemosAIVoice'
import DemosAIAutomations from './DemosAIAutomations'
import FAQsContactUs from './FAQsContactUs'
import NotFound from './NotFound'
import './index.css'

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/demos" element={<DemosOfAIIntegrations />} />
        <Route path="/ai-chat-demos" element={<DemosAIChat />} />
        <Route path="/ai-voice-demos" element={<DemosAIVoice />} />
        <Route path="/ai-automation-demos" element={<DemosAIAutomations />} />
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