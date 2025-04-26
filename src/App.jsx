import { Routes, Route, Navigate } from 'react-router-dom'

// Layouts
import MainLayout from './layouts/MainLayout'
import DashboardLayout from './layouts/DashboardLayout'

// Public Pages
import LandingPage from './pages/LandingPage'

// Dashboard Pages
import Dashboard from './pages/Dashboard'
import OfferSkillPage from './pages/OfferSkillPage'
import RequestSkillPage from './pages/RequestSkillPage'
import WalletPage from './pages/WalletPage'
import TrustScorePage from './pages/TrustScorePage'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
      
      {/* Dashboard Routes - No longer protected */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="offer-skill" element={<OfferSkillPage />} />
        <Route path="request-skill" element={<RequestSkillPage />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="trust-score" element={<TrustScorePage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      
      {/* Redirect other routes to dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App
