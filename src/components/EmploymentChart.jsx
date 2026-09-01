import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', rate: 60 },
  { month: 'Feb', rate: 63 },
  { month: 'Mar', rate: 66 },
  { month: 'Apr', rate: 69.4 },
]

function EmploymentChart() {
  return (
    <div className="chart-box">
      <h3>Employment Rate</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="rate" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EmploymentChart