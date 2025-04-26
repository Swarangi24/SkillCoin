import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  
  const handleLogout = () => {
    logout()
    navigate('/')
  }
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">SkillCoin</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <NavLink to="/login" className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-gray-600 hover:text-primary"
                }>
                  Login
                </NavLink>
                <NavLink to="/register" className={({ isActive }) => 
                  isActive 
                    ? "btn btn-primary" 
                    : "btn bg-gray-100 text-gray-800 hover:bg-gray-200"
                }>
                  Register
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/dashboard" className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-gray-600 hover:text-primary"
                }>
                  Dashboard
                </NavLink>
                <button onClick={handleLogout} className="text-gray-600 hover:text-primary">
                  Logout
                </button>
              </>
            )}
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {!isAuthenticated ? (
              <>
                <NavLink 
                  to="/login"
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md ${
                      isActive 
                        ? "bg-primary text-white" 
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  Login
                </NavLink>
                <NavLink 
                  to="/register"
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md ${
                      isActive 
                        ? "bg-primary text-white" 
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  Register
                </NavLink>
              </>
            ) : (
              <>
                <NavLink 
                  to="/dashboard"
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md ${
                      isActive 
                        ? "bg-primary text-white" 
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
                <button 
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
