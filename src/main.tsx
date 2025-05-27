import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import ExOfAIIntegrations from './ExOfAIIntegrations'
import ExamplesAIChat from './ExamplesAIChat'
import ExamplesAIVoice from './ExamplesAIVoice'
import ExamplesAIAutomations from './ExamplesAIAutomations'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/examples" element={<ExOfAIIntegrations />} />
        <Route path="/ai-chat-agents" element={<ExamplesAIChat />} />
        <Route path="/ai-voice-agents" element={<ExamplesAIVoice />} />
        <Route path="/ai-powered-automations" element={<ExamplesAIAutomations />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)