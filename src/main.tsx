import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import ExOfAIIntegrations from './ExOfAIIntegrations'
import ExamplesAIChat from './ExamplesAIChat'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/examples" element={<ExOfAIIntegrations />} />
        <Route path="/ai-chat-agents" element={<ExamplesAIChat />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)