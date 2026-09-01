function TraineeProfile({ trainee }) {
  return (
    <div className="profile-card">
      <h2>{trainee.name}</h2>
      <p className="role">{trainee.role}</p>

      <div className="profile-row"><span>Training:</span> {trainee.training}</div>
      <div className="profile-row"><span>Certification:</span> {trainee.certified ? '✓ Certified' : 'Pending'}</div>
      <div className="profile-row"><span>Employment:</span> {trainee.employed ? '✓ Employed' : 'Unemployed'}</div>
      <div className="profile-row"><span>Salary:</span> {trainee.salary}</div>

      <h3>Skills</h3>
      <ul className="skills-list">
        {trainee.skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>

      <h3>Employment Journey</h3>
      <p>{trainee.journey}</p>

      <div className="ai-insight">
        <h3>🤖 AI Recommendation</h3>
        <p>{trainee.recommendation}</p>
      </div>
    </div>
  )
}

export default TraineeProfile