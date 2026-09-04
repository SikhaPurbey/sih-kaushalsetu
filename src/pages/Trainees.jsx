import { useState } from 'react'
import { trainees, traineeDetails } from '../data/mockData'

function Trainees() {
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [expandedId, setExpandedId] = useState(null)

  const filtered = trainees.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterStatus === 'All' || t.status === filterStatus)
  )

  return (
    <div>
      <h2>Trainees</h2>
      <div className="filter-row">
        <input
          type="text"
          placeholder="Search trainee by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="filter-select">
          <option value="All">All Status</option>
          <option value="On Track">On Track</option>
          <option value="At Risk">At Risk</option>
        </select>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>District</th><th>Programme</th>
            <th>Certified</th><th>Employed</th><th>Job Match</th><th>Salary</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => (
            <>
              <tr key={t.id} onClick={() => setExpandedId(expandedId === t.id ? null : t.id)} className="clickable-row">
                <td>{t.id}</td>
                <td>{t.name}</td>
                <td>{t.district}</td>
                <td>{t.programme}</td>
                <td>{t.certified ? '✓' : '—'}</td>
                <td>{t.employed ? '✓' : '—'}</td>
                <td>{t.jobMatch}</td>
                <td>{t.salary ? `₹${t.salary.toLocaleString()}` : 'N/A'}</td>
                <td><span className={`badge ${t.status === 'At Risk' ? 'risk' : 'ok'}`}>{t.status}</span></td>
              </tr>
              {expandedId === t.id && (
                <tr className="expand-row">
                  <td colSpan="9">
                    <div className="profile-card">
                      <h3>Skills</h3>
                      <ul className="skills-list">
                        {traineeDetails[t.id].skills.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                      <h3>Employment Journey</h3>
                      <p>{traineeDetails[t.id].journey}</p>
                      <div className="ai-insight">
                        <h3>🤖 AI Recommendation</h3>
                        <p>{traineeDetails[t.id].recommendation}</p>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
      {filtered.length === 0 && <p>No trainees found.</p>}
    </div>
  )
}

export default Trainees