// MOCK AUTH SERVICE — replace with real API calls when backend is ready.
// Expected future endpoints:
// POST /api/users/register
// POST /api/users/login
// GET /api/users/me
// PUT /api/users/profile
// POST /api/users/documents
// POST /api/users/certificates

export async function mockRegister(data) {
  await new Promise((r) => setTimeout(r, 500))
  return {
    name: data.name,
    email: data.email,
    mobile: data.mobile,
    education: data.education,
    location: data.location,
    traineeId: data.traineeId || `TR-${Math.floor(1000 + Math.random() * 9000)}`,
    skills: [],
    resume: null,
  }
}

export async function mockLogin(email, password) {
  await new Promise((r) => setTimeout(r, 500))
  if (!email || !password) {
    throw new Error('Email and password are required.')
  }
  return {
    name: 'Demo Trainee',
    email,
    mobile: '',
    education: '',
    location: '',
    traineeId: 'TR-DEMO',
    skills: [],
    resume: null,
  }
}