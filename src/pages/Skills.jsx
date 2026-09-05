import { skillGaps } from '../data/mockData'
import SkillGapChart from '../components/SkillGapChart'

function Skills() {
  return (
    <div>
      <h2>Skills Analysis</h2>
      <SkillGapChart />
      <table className="data-table" style={{ marginTop: '20px' }}>
        <thead>
          <tr><th>Skill</th><th>Current Level</th><th>Industry Demand</th><th>Gap</th><th>Recommended Training</th></tr>
        </thead>
        <tbody>
          {skillGaps.map((s, i) => (
            <tr key={i}>
              <td>{s.skill}</td><td>{s.level}%</td><td>{s.demand}</td>
              <td><span className={`badge ${s.gap >= 50 ? 'risk' : 'ok'}`}>{s.gap}% gap</span></td>
              <td>{s.recommended}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Skills