import axios from 'axios'

const API_URL = 'https://api.skillcoin.com/api' // This would be your actual API URL

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add request interceptor to include auth token in headers
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const login = async (email, password) => {
  try {
    // In a real app, this would actually call the API
    console.log('Login request for:', email)
    
    // Mock successful response
    return {
      user: {
        id: '123',
        email,
        name: 'Demo User',
      },
      token: 'mock-jwt-token',
    }
    
    // Actual implementation would be:
    // const response = await apiClient.post('/auth/login', { email, password })
    // return response.data
  } catch (error) {
    console.error('Login error:', error)
    throw error
  }
}

export const register = async (userData) => {
  try {
    // In a real app, this would actually call the API
    console.log('Register request with data:', userData)
    
    // Mock successful response
    return {
      user: {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
      },
      token: 'mock-jwt-token',
    }
    
    // Actual implementation would be:
    // const response = await apiClient.post('/auth/register', userData)
    // return response.data
  } catch (error) {
    console.error('Register error:', error)
    throw error
  }
}

export const logout = async () => {
  try {
    // Remove token from local storage
    localStorage.removeItem('token')
    
    // In a real app, this might call the API to invalidate the token server-side
    console.log('User logged out')
    
    // Actual implementation might be:
    // const response = await apiClient.post('/auth/logout')
    // return response.data
    
    return { success: true }
  } catch (error) {
    console.error('Logout error:', error)
    throw error
  }
}

export const getCurrentUser = async () => {
  try {
    // In a real app, this would actually call the API
    const token = localStorage.getItem('token')
    
    if (!token) {
      throw new Error('No authentication token found')
    }
    
    // Mock successful response
    return {
      id: '123',
      email: 'user@example.com',
      name: 'Demo User',
    }
    
    // Actual implementation would be:
    // const response = await apiClient.get('/auth/me')
    // return response.data
  } catch (error) {
    console.error('Get current user error:', error)
    throw error
  }
}

export default {
  login,
  register,
  logout,
  getCurrentUser,
}
