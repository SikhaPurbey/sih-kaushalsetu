import { kpis, programmes } from '../data/mockData'
import EmploymentChart from '../components/EmploymentChart'

function Employment() {
  return (
    <div>
      <h2>Employment Analytics</h2>
      <div className="kpi-row">
        <div className="kpi-card"><h3>Employment Rate</h3><p>{kpis.employmentRate}%</p></div>
        <div className="kpi-card"><h3>Job Match Rate</h3><p>{kpis.jobMatchRate}%</p></div>
        <div className="kpi-card"><h3>Avg Salary</h3><p>{kpis.avgSalary}</p></div>
        <div className="kpi-card"><h3>Salary Growth</h3><p className="trend up">↑ {kpis.salaryGrowth}%</p></div>
      </div>
      <EmploymentChart />
      <h3 style={{ margin: '20px 0 10px' }}>Employment by Programme</h3>
      <table className="data-table">
        <thead><tr><th>Programme</th><th>Employed</th><th>Employment Rate</th></tr></thead>
        <tbody>
          {programmes.map((p, i) => (
            <tr key={i}><td>{p.name}</td><td>{p.employed}</td><td>{p.employmentRate}%</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Employment