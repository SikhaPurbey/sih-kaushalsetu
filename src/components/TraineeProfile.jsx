function TraineeProfile() {
  return (
    <div className="profile-card">
      <h2>Rahul Sharma</h2>
      <p className="role">CNC Technician</p>

      <div className="profile-row">
        <span>Training:</span> CNC Machine Operator
      </div>
      <div className="profile-row">
        <span>Certification:</span> ✓ Certified
      </div>
      <div className="profile-row">
        <span>Employment:</span> ✓ Employed
      </div>
      <div className="profile-row">
        <span>Salary:</span> ₹24,000/month
      </div>

      <h3>Skills</h3>
      <ul className="skills-list">
        <li>CNC Operation — 90%</li>
        <li>Machine Safety — 100%</li>
        <li>CAD — 50%</li>
        <li>Programming — 30%</li>
      </ul>

      <h3>Employment Journey</h3>
      <p>Training → Certification → Job → 3-Month Retention ✓ → 6-Month Retention ✓</p>

      <div className="ai-insight">
        <h3>🤖 AI Recommendation</h3>
        <p>Improve CNC programming skills for better career progression.</p>
      </div>
    </div>
  )
}

export default TraineeProfile