import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Mock login function
  const login = async (email, password) => {
    setLoading(true)
    setError(null)
    
    try {
      // Simulating API call
      // This would be replaced with an actual API call
      console.log(`Attempting to login with: ${email}`)
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful login for demo purposes
      if (email && password) {
        const userData = {
          id: '123',
          email,
          name: 'Test User',
          trustScore: 85
        }
        
        setCurrentUser(userData)
        setIsAuthenticated(true)
        return { success: true, user: userData }
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (err) {
      setError(err.message || 'An error occurred during login')
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  // Mock register function
  const register = async (email, password, name) => {
    setLoading(true)
    setError(null)
    
    try {
      // Simulating API call
      console.log(`Attempting to register: ${email}`)
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful registration
      if (email && password && name) {
        const userData = {
          id: '123',
          email,
          name,
          trustScore: 50
        }
        
        setCurrentUser(userData)
        setIsAuthenticated(true)
        return { success: true, user: userData }
      } else {
        throw new Error('All fields are required')
      }
    } catch (err) {
      setError(err.message || 'An error occurred during registration')
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  // Mock logout function
  const logout = () => {
    setCurrentUser(null)
    setIsAuthenticated(false)
  }

  const value = {
    currentUser,
    isAuthenticated,
    loading,
    error,
    login,
    register,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
