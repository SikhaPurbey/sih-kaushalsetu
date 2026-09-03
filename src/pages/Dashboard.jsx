import KpiCard from '../components/kpiCard'
import EmploymentChart from '../components/EmploymentChart'
import SkillGapChart from '../components/SkillGapChart'
import AIInsightCard from '../components/AIInsightCard'

function Dashboard() {
  return (
    <>
      <div className="kpi-row">
        <KpiCard title="Total Trainees" value="10,245" />
        <KpiCard title="Training Completed" value="7,820" />
        <KpiCard title="Employed" value="5,430" />
        <KpiCard title="Employment Rate" value="69.4%" />
      </div>
      <div className="chart-row">
        <EmploymentChart />
        <SkillGapChart />
      </div>
      <AIInsightCard />
    </>
  )
}
export default Dashboard