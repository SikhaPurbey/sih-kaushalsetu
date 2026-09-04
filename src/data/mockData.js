export const funnel = {
  registered: 10245,
  enrolled: 9100,
  completed: 7820,
  certified: 6900,
  employed: 5430,
}

export const kpis = {
  employmentRate: 78.7,
  jobMatchRate: 71.2,
  retention3mo: 91,
  retention6mo: 84,
  retention12mo: 76,
  avgSalary: '₹21,400',
  salaryGrowth: 8.4,
  activeProgrammes: 12,
}

export const trainees = [
  { id: 'T-1042', name: 'Rahul Sharma', district: 'Pune', programme: 'CNC Machine Operator', certified: true, employed: true, jobMatch: 'High', salary: 24000, retention: '6-Month', status: 'On Track' },
  { id: 'T-1043', name: 'Priya Patil', district: 'Nagpur', programme: 'Digital Skills Bootcamp', certified: true, employed: true, jobMatch: 'Medium', salary: 19500, retention: '3-Month', status: 'On Track' },
  { id: 'T-1044', name: 'Amit Kale', district: 'Nashik', programme: 'Communication Skills', certified: true, employed: false, jobMatch: 'Low', salary: 0, retention: 'N/A', status: 'At Risk' },
  { id: 'T-1045', name: 'Sneha Joshi', district: 'Pune', programme: 'CNC Machine Operator', certified: true, employed: true, jobMatch: 'High', salary: 26500, retention: '12-Month', status: 'On Track' },
  { id: 'T-1046', name: 'Vikram Deshmukh', district: 'Aurangabad', programme: 'Digital Skills Bootcamp', certified: false, employed: false, jobMatch: 'Low', salary: 0, retention: 'N/A', status: 'At Risk' },
]

export const traineeDetails = {
  'T-1042': {
    skills: ['CNC Operation — 90%', 'Machine Safety — 100%', 'CAD — 50%', 'Programming — 30%'],
    journey: 'Training → Certification → Job → 3-Month Retention ✓ → 6-Month Retention ✓',
    recommendation: 'Improve CNC programming skills for better career progression.'
  },
  'T-1043': {
    skills: ['SEO — 75%', 'Content Writing — 85%', 'Analytics — 60%'],
    journey: 'Training → Certification → Job → 3-Month Retention ✓',
    recommendation: 'Add advanced analytics training to improve growth prospects.'
  },
  'T-1044': {
    skills: ['Communication — 55%', 'Interview Skills — 40%'],
    journey: 'Training → Certification → Job Search in progress',
    recommendation: 'Prioritize interview readiness and communication practice.'
  },
  'T-1045': {
    skills: ['CNC Operation — 95%', 'Machine Safety — 100%', 'CAD — 70%'],
    journey: 'Training → Certification → Job → 3-Month ✓ → 6-Month ✓ → 12-Month ✓',
    recommendation: 'Candidate for supervisory training track.'
  },
  'T-1046': {
    skills: ['Digital Literacy — 40%', 'SEO — 20%'],
    journey: 'Training in progress — not yet certified',
    recommendation: 'Additional mentoring recommended before certification exam.'
  },
}

export const programmes = [
  { name: 'CNC Machine Operator', enrolled: 320, completed: 280, certified: 260, employed: 210, employmentRate: 75, retention: 88, avgSalary: '₹25,200' },
  { name: 'Digital Skills Bootcamp', enrolled: 450, completed: 400, certified: 370, employed: 310, employmentRate: 78, retention: 82, avgSalary: '₹19,800' },
  { name: 'Communication Skills', enrolled: 200, completed: 150, certified: 140, employed: 90, employmentRate: 60, retention: 70, avgSalary: '₹16,500' },
]

export const skillGaps = [
  { skill: 'Communication', level: 38, demand: 'High', gap: 62 },
  { skill: 'Digital Skills', level: 48, demand: 'High', gap: 52 },
  { skill: 'CNC', level: 59, demand: 'Medium', gap: 41 },
  { skill: 'Data Analysis', level: 70, demand: 'Medium', gap: 30 },
]

export const aiInsights = [
  {
    problem: 'High skill mismatch detected among manufacturing trainees in District X.',
    evidence: 'CNC programme shows 75% employment rate but only 59% average skill proficiency at placement.',
    action: 'Introduce advanced practical CNC training before placement.',
    impact: 'Projected +12% employment rate over next cohort.'
  },
  {
    problem: 'Digital-skills industry demand is rising faster than current training coverage.',
    evidence: 'Digital Skills Bootcamp enrollment up 18% QoQ; industry job postings up 34% QoQ.',
    action: 'Expand Digital Skills Bootcamp capacity by 25%.',
    impact: 'Could close ~150 unmet placements per quarter.'
  },
  {
    problem: 'Communication Skills programme has comparatively low employment despite decent completion.',
    evidence: 'Completion rate 75%, but employment rate only 60% — lowest among active programmes.',
    action: 'Add job-readiness and interview-prep module.',
    impact: 'Estimated employment rate improvement to 70%+.'
  },
]