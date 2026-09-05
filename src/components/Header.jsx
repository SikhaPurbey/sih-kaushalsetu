import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Header() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  return (
    <header className="app-header">
      <div>
        <h1>KaushalSetu</h1>
        <p>Skill & Employment Intelligence</p>
      </div>
      {user && (
        <div className="header-user">
          <span>{user.name}</span>
          <button className="btn btn-secondary" onClick={() => { logout(); navigate('/') }}>Logout</button>
        </div>
      )}
    </header>
  )
}

export default Header