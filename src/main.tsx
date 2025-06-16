import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import App from './App'
import ExOfAIIntegrations from './ExOfAIIntegrations'
import ExamplesAIChat from './ExamplesAIChat'
import ExamplesAIVoice from './ExamplesAIVoice'
import ExamplesAIAutomations from './ExamplesAIAutomations'
import FAQsContactUs from './FAQsContactUs'
import NotFound from './NotFound'
import './index.css'

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/examples" element={<ExOfAIIntegrations />} />
        <Route path="/ai-chat-agents" element={<ExamplesAIChat />} />
        <Route path="/ai-voice-agents" element={<ExamplesAIVoice />} />
        <Route path="/ai-powered-automations" element={<ExamplesAIAutomations />} />
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