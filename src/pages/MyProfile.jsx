import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function MyProfile() {
  const { user, setUser, logout } = useAuth()
    const navigate = useNavigate()
  const [newSkill, setNewSkill] = useState('')
  const [newSkillLevel, setNewSkillLevel] = useState('Beginner')
  const [uploadStatus, setUploadStatus] = useState('')

  function addSkill() {
    if (!newSkill.trim()) return
    setUser({ ...user, skills: [...user.skills, { name: newSkill, level: newSkillLevel }] })
    setNewSkill('')
  }

  function removeSkill(index) {
    setUser({ ...user, skills: user.skills.filter((_, i) => i !== index) })
  }

  function handleResumeUpload(e) {
    const file = e.target.files[0]
    if (!file) return
    setUploadStatus('uploading')
    setTimeout(() => {
      setUser({ ...user, resume: { name: file.name, size: (file.size / 1024).toFixed(0) + ' KB' } })
      setUploadStatus('success')
    }, 800)
  }

  function removeResume() {
    setUser({ ...user, resume: null })
    setUploadStatus('')
  }

  if (!user) return null

  return (
    <div>
      <div className="profile-header-row">
        <h2>My Profile</h2>
               <button className="btn btn-secondary" onClick={() => { logout(); navigate('/') }}>Logout</button>
      </div>

      <section className="dash-section">
        <h3>Personal Information</h3>
        <div className="profile-card">
          <div className="profile-row"><span>Name:</span> {user.name}</div>
          <div className="profile-row"><span>Email:</span> {user.email}</div>
          <div className="profile-row"><span>Mobile:</span> {user.mobile || '—'}</div>
          <div className="profile-row"><span>Location:</span> {user.location || '—'}</div>
          <div className="profile-row"><span>Trainee ID:</span> {user.traineeId}</div>
        </div>
      </section>

      <section className="dash-section">
        <h3>Education</h3>
        <div className="profile-card">
          <div className="profile-row"><span>Highest Qualification:</span> {user.education || '—'}</div>
        </div>
      </section>

      <section className="dash-section">
        <h3>Skills</h3>
        <div className="profile-card">
          <div className="skill-add-row">
            <input placeholder="Skill name" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />
            <select value={newSkillLevel} onChange={(e) => setNewSkillLevel(e.target.value)}>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <button className="btn btn-primary" onClick={addSkill}>Add Skill</button>
          </div>
          <ul className="skills-list">
            {user.skills.length === 0 && <li>No skills added yet.</li>}
            {user.skills.map((s, i) => (
              <li key={i}>
                {s.name} — {s.level}
                <button className="remove-btn" onClick={() => removeSkill(i)}>✕</button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dash-section">
        <h3>Resume / CV</h3>
        <div className="profile-card">
          {!user.resume && (
            <label className="upload-btn">
              Upload CV
              <input type="file" accept=".pdf" onChange={handleResumeUpload} hidden />
            </label>
          )}
          {uploadStatus === 'uploading' && <p>Uploading...</p>}
          {user.resume && (
            <div className="file-row">
              <span>{user.resume.name} ({user.resume.size})</span>
              <button className="remove-btn" onClick={removeResume}>Remove</button>
            </div>
          )}
        </div>
      </section>

            <section className="dash-section">
        <h3>Certificates</h3>
        <div className="profile-card">
          <p>Certificate upload coming soon — backend integration required.</p>
        </div>
      </section>

      <div style={{ marginTop: '20px' }}>
        <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>Continue to Dashboard</button>
      </div>
    </div>
  )
}

export default MyProfile