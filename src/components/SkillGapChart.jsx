import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { skill: 'Communication', gap: 62 },
  { skill: 'Digital Skills', gap: 52 },
  { skill: 'CNC', gap: 41 },
  { skill: 'Data Analysis', gap: 30 },
]

function SkillGapChart() {
  return (
    <div className="chart-box">
      <h3>Skill Gap Analysis</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="skill" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="gap" fill="#f97316" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SkillGapChart