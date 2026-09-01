import { useState } from 'react'
import TraineeProfile from '../components/TraineeProfile'

const trainees = [
  {
    name: 'Rahul Sharma', role: 'CNC Technician', training: 'CNC Machine Operator',
    certified: true, employed: true, salary: '₹24,000/month',
    skills: ['CNC Operation — 90%', 'Machine Safety — 100%', 'CAD — 50%', 'Programming — 30%'],
    journey: 'Training → Certification → Job → 3-Month Retention ✓ → 6-Month Retention ✓',
    recommendation: 'Improve CNC programming skills for better career progression.'
  },
  {
    name: 'Priya Patil', role: 'Digital Marketing Associate', training: 'Digital Skills Bootcamp',
    certified: true, employed: true, salary: '₹19,500/month',
    skills: ['SEO — 75%', 'Content Writing — 85%', 'Analytics — 60%'],
    journey: 'Training → Certification → Job → 3-Month Retention ✓',
    recommendation: 'Add advanced analytics training to improve growth prospects.'
  },
  {
    name: 'Amit Kale', role: 'Trainee — Not Yet Placed', training: 'Communication Skills',
    certified: true, employed: false, salary: 'N/A',
    skills: ['Communication — 55%', 'Interview Skills — 40%'],
    journey: 'Training → Certification → Job Search in progress',
    recommendation: 'Prioritize interview readiness and communication practice.'
  }
]

function Trainees() {
  const [search, setSearch] = useState('')

  const filtered = trainees.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2>Trainees</h2>
      <input
        type="text"
        placeholder="Search trainee by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />
      {filtered.map((t, i) => <TraineeProfile key={i} trainee={t} />)}
      {filtered.length === 0 && <p>No trainees found.</p>}
    </div>
  )
}

export default Trainees