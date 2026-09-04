import { aiInsights } from '../data/mockData'

function AIInsights() {
  return (
    <div>
      <h2>AI Insights <span className="demo-tag">DEMO</span></h2>
      {aiInsights.map((insight, i) => (
        <div key={i} className="insight-card">
          <p><strong>Problem:</strong> {insight.problem}</p>
          <p><strong>Evidence:</strong> {insight.evidence}</p>
          <p><strong>Recommended Action:</strong> {insight.action}</p>
          <p><strong>Expected Impact:</strong> {insight.impact}</p>
        </div>
      ))}
    </div>
  )
}

export default AIInsights