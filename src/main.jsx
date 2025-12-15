import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { injectSpeedInsights } from '@vercel/speed-insights'
import './index.css'
import App from './App.jsx'
import RaceRoomPolicy from './pages/RaceRoomPolicy.jsx'
import { RaceRoomTermsEN, RaceRoomTermsIT } from './pages/RaceRoomTerms.jsx'

// Initialize Vercel Speed Insights on the client side
injectSpeedInsights()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/race-room-policy" element={<RaceRoomPolicy />} />
        <Route path="/race-room-terms-en" element={<RaceRoomTermsEN />} />
        <Route path="/race-room-terms-it" element={<RaceRoomTermsIT />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
