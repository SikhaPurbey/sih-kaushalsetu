import { createContext, useContext, useState, useEffect } from 'react'
import { mockLogin, mockRegister } from '../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('kaushalsetu_user')
    return saved ? JSON.parse(saved) : null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('kaushalsetu_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('kaushalsetu_user')
    }
  }, [user])

  async function login(email, password) {
    const result = await mockLogin(email, password)
    setUser(result)
    return result
  }

  async function register(data) {
    const result = await mockRegister(data)
    setUser(result)
    return result
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}