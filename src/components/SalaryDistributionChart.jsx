import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { salaryDistribution } from '../data/mockData'

function SalaryDistributionChart() {
  return (
    <div className="chart-box">
      <h3>Salary Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={salaryDistribution}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SalaryDistributionChart