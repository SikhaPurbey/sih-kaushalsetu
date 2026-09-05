import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './layouts/Layout'
import Dashboard from './pages/Dashboard'
import Trainees from './pages/Trainees'
import Employment from './pages/Employment'
import Skills from './pages/Skills'
import Programmes from './pages/Programmes'
import Analytics from './pages/Analytics'
import AIInsights from './pages/AIInsights'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import MyProfile from './pages/MyProfile'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/my-profile"
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="trainees" element={<Trainees />} />
            <Route path="employment" element={<Employment />} />
            <Route path="skills" element={<Skills />} />
            <Route path="programmes" element={<Programmes />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="ai-insights" element={<AIInsights />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App