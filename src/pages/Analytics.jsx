import EmploymentChart from '../components/EmploymentChart'
import SkillGapChart from '../components/SkillGapChart'

function Analytics() {
  return (
    <div>
      <h2>Analytics Overview</h2>
      <div className="chart-row">
        <EmploymentChart />
        <SkillGapChart />
      </div>
    </div>
  )
}

export default Analytics