import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { districtEmployment } from '../data/mockData'

function DistrictEmploymentChart() {
  return (
    <div className="chart-box">
      <h3>Employment by District</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={districtEmployment}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="district" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="trained" fill="#94a3b8" name="Trained" />
          <Bar dataKey="employed" fill="#2563eb" name="Employed" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DistrictEmploymentChart