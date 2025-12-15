import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { injectSpeedInsights } from '@vercel/speed-insights'
import './index.css'
import App from './App.jsx'
import RaceRoomPolicy from './pages/RaceRoomPolicy.jsx'

// Initialize Vercel Speed Insights on the client side
injectSpeedInsights()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/race-room-policy" element={<RaceRoomPolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
