import { NavLink } from 'react-router-dom'

function Sidebar() {
  
    const links = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/dashboard/trainees', label: 'Trainees' },
    { to: '/dashboard/employment', label: 'Employment' },
    { to: '/dashboard/skills', label: 'Skills' },
    { to: '/dashboard/programmes', label: 'Programmes' },
    { to: '/dashboard/analytics', label: 'Analytics' },
    { to: '/dashboard/ai-insights', label: 'AI Insights' },
    { to: '/dashboard/reports', label: 'Reports' },
    { to: '/dashboard/settings', label: 'Settings' },
  ] 

  return (
    <nav>
      <h2>Menu</h2>
      <ul>
        {links.map(l => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar