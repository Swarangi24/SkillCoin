import { Routes, Route } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

// Layouts
import MainLayout from './layouts/MainLayout'
import DashboardLayout from './layouts/DashboardLayout'

// Public Pages
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LandingPage.jsx'
import RegisterPage from './pages/RegisterPage'

// Dashboard Pages
import Dashboard from './pages/Dashboard'
import OfferSkillPage from './pages/OfferSkillPage'
import RequestSkillPage from './pages/RequestSkillPage'
import WalletPage from './pages/WalletPage'
import TrustScorePage from './pages/TrustScorePage'
import ProfilePage from './pages/ProfilePage'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  
  return children
}

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      
      {/* Protected Dashboard Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="offer-skill" element={<OfferSkillPage />} />
        <Route path="request-skill" element={<RequestSkillPage />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="trust-score" element={<TrustScorePage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}

export default App
