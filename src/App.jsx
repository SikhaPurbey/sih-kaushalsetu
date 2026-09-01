import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
  )
}
export default App