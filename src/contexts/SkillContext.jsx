import { createContext, useContext, useState } from 'react'

const SkillContext = createContext()

export const useSkill = () => {
  return useContext(SkillContext)
}

export const SkillProvider = ({ children }) => {
  const [skills, setSkills] = useState([])
  const [userSkills, setUserSkills] = useState([])
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Mock function to get all available skills
  const getAllSkills = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const mockSkills = [
        { id: '1', title: 'Web Development', category: 'Technology', rate: 50, userId: 'user1', username: 'John Doe' },
        { id: '2', title: 'Graphic Design', category: 'Design', rate: 35, userId: 'user2', username: 'Jane Smith' },
        { id: '3', title: 'Content Writing', category: 'Writing', rate: 25, userId: 'user3', username: 'Mike Johnson' },
        { id: '4', title: 'Photography', category: 'Arts', rate: 40, userId: 'user4', username: 'Sarah Wilson' },
        { id: '5', title: 'Marketing Strategy', category: 'Business', rate: 60, userId: 'user5', username: 'David Brown' },
      ]
      
      setSkills(mockSkills)
      return mockSkills
    } catch (err) {
      setError(err.message || 'Failed to fetch skills')
      return []
    } finally {
      setLoading(false)
    }
  }

  // Mock function to get user's offered skills
  const getUserSkills = async (userId) => {
    setLoading(true)
    setError(null)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 600))
      
      const mockUserSkills = [
        { id: '101', title: 'JavaScript Tutoring', category: 'Technology', rate: 45, status: 'active' },
        { id: '102', title: 'React Development', category: 'Technology', rate: 55, status: 'active' },
      ]
      
      setUserSkills(mockUserSkills)
      return mockUserSkills
    } catch (err) {
      setError(err.message || 'Failed to fetch user skills')
      return []
    } finally {
      setLoading(false)
    }
  }

  // Mock function to offer a new skill
  const offerSkill = async (skillData) => {
    setLoading(true)
    setError(null)
    
    try {
      // Simulate API call
      console.log('Offering new skill:', skillData)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newSkill = {
        id: Date.now().toString(),
        ...skillData,
        status: 'active'
      }
      
      setUserSkills(prev => [...prev, newSkill])
      return { success: true, skill: newSkill }
    } catch (err) {
      setError(err.message || 'Failed to offer skill')
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  // Mock function to get wallet transactions
  const getTransactions = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const mockTransactions = [
        { id: 't1', type: 'earned', amount: 100, description: 'Web Development for User123', date: '2023-11-10' },
        { id: 't2', type: 'spent', amount: 50, description: 'Graphic Design from User456', date: '2023-11-05' },
        { id: 't3', type: 'earned', amount: 75, description: 'JavaScript Tutoring for User789', date: '2023-10-28' },
      ]
      
      setTransactions(mockTransactions)
      return mockTransactions
    } catch (err) {
      setError(err.message || 'Failed to fetch transactions')
      return []
    } finally {
      setLoading(false)
    }
  }

  const value = {
    skills,
    userSkills,
    transactions,
    loading,
    error,
    getAllSkills,
    getUserSkills,
    offerSkill,
    getTransactions
  }

  return (
    <SkillContext.Provider value={value}>
      {children}
    </SkillContext.Provider>
  )
}
