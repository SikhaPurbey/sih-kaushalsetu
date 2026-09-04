import { funnel, kpis } from '../data/mockData'
import EmploymentChart from '../components/EmploymentChart'
import SkillGapChart from '../components/SkillGapChart'
import AIInsightCard from '../components/AIInsightCard'

function Dashboard() {
  return (
    <>
      <section className="dash-section">
        <h2>Overview — Training to Employment Funnel</h2>
        <div className="funnel-row">
          <div className="funnel-step"><span>{funnel.registered.toLocaleString()}</span>Registered</div>
          <div className="funnel-arrow">→</div>
          <div className="funnel-step"><span>{funnel.enrolled.toLocaleString()}</span>Enrolled</div>
          <div className="funnel-arrow">→</div>
          <div className="funnel-step"><span>{funnel.completed.toLocaleString()}</span>Completed</div>
          <div className="funnel-arrow">→</div>
          <div className="funnel-step"><span>{funnel.certified.toLocaleString()}</span>Certified</div>
          <div className="funnel-arrow">→</div>
          <div className="funnel-step highlight"><span>{funnel.employed.toLocaleString()}</span>Employed</div>
        </div>
      </section>

      <section className="dash-section">
        <h2>Employment Outcomes</h2>
        <div className="kpi-row">
          <div className="kpi-card"><h3>Employment Rate</h3><p>{kpis.employmentRate}%</p></div>
          <div className="kpi-card"><h3>Job Match Rate</h3><p>{kpis.jobMatchRate}%</p></div>
          <div className="kpi-card"><h3>6-Month Retention</h3><p>{kpis.retention6mo}%</p></div>
          <div className="kpi-card"><h3>Avg Salary</h3><p>{kpis.avgSalary} <span className="trend up">↑ {kpis.salaryGrowth}%</span></p></div>
        </div>
      </section>

      <section className="dash-section">
        <h2>Training & Skill Intelligence</h2>
        <div className="chart-row">
          <EmploymentChart />
          <SkillGapChart />
        </div>
      </section>

      <section className="dash-section">
        <h2>AI Recommendations</h2>
        <AIInsightCard />
      </section>
    </>
  )
}
export default Dashboard