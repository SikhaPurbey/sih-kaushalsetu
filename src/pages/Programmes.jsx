import { programmes } from '../data/mockData'

function Programmes() {
  return (
    <div>
      <h2>Programme Performance</h2>

      {programmes.map((p, i) => {
        const completionRate = Math.round((p.completed / p.enrolled) * 100)
        const certRate = Math.round((p.certified / p.completed) * 100)
        return (
          <div key={i} className="programme-card">
            <h3>{p.name}</h3>
            <div className="mini-funnel">
              <div className="mini-step"><span>{p.enrolled}</span>Enrolled</div>
              <div className="mini-arrow">→</div>
              <div className="mini-step"><span>{p.completed}</span>Completed</div>
              <div className="mini-arrow">→</div>
              <div className="mini-step"><span>{p.certified}</span>Certified</div>
              <div className="mini-arrow">→</div>
              <div className="mini-step highlight"><span>{p.employed}</span>Employed</div>
            </div>
            <div className="programme-stats">
              <span>Completion: {completionRate}%</span>
              <span>Certification: {certRate}%</span>
              <span className={`badge ${p.employmentRate >= 75 ? 'ok' : 'risk'}`}>Employment: {p.employmentRate}%</span>
              <span>Retention: {p.retention}%</span>
              <span>Avg Salary: {p.avgSalary}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Programmes