import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-box">
        <h1>KaushalSetu</h1>
        <p>Skill & Employment Intelligence Platform</p>
        <div className="landing-actions">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/register" className="btn btn-secondary">Create Account</Link>
        </div>
      </div>
    </div>
  )
}

export default Landing