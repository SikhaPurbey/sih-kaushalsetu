import { NavLink } from 'react-router-dom'

function Sidebar() {
  const links = [
    { to: '/', label: 'Dashboard' },
    { to: '/trainees', label: 'Trainees' },
    { to: '/employment', label: 'Employment' },
    { to: '/skills', label: 'Skills' },
    { to: '/programmes', label: 'Programmes' },
    { to: '/analytics', label: 'Analytics' },
    { to: '/ai-insights', label: 'AI Insights' },
    { to: '/reports', label: 'Reports' },
    { to: '/settings', label: 'Settings' },
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