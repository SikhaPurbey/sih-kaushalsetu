const programmes = [
  { name: 'CNC Machine Operator', enrolled: 320, completed: 280, employed: 210 },
  { name: 'Digital Skills Bootcamp', enrolled: 450, completed: 400, employed: 310 },
  { name: 'Communication Skills', enrolled: 200, completed: 150, employed: 90 },
]

function Programmes() {
  return (
    <div>
      <h2>Programme Performance</h2>
      <table className="data-table">
        <thead>
          <tr><th>Programme</th><th>Enrolled</th><th>Completed</th><th>Employed</th></tr>
        </thead>
        <tbody>
          {programmes.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td><td>{p.enrolled}</td><td>{p.completed}</td><td>{p.employed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Programmes