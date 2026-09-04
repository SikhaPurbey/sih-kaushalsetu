import { programmes } from '../data/mockData'

function Programmes() {
  return (
    <div>
      <h2>Programme Performance</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Programme</th><th>Enrolled</th><th>Completed</th><th>Certified</th>
            <th>Employed</th><th>Employment Rate</th><th>Retention</th><th>Avg Salary</th>
          </tr>
        </thead>
        <tbody>
          {programmes.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td><td>{p.enrolled}</td><td>{p.completed}</td><td>{p.certified}</td>
              <td>{p.employed}</td>
              <td><span className={`badge ${p.employmentRate >= 75 ? 'ok' : 'risk'}`}>{p.employmentRate}%</span></td>
              <td>{p.retention}%</td><td>{p.avgSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Programmes