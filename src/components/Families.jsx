import useFadeUp from '../hooks/useFadeUp'

function FamilyPanel({ title, members, note, delay = '0s' }) {
  const ref = useFadeUp()
  return (
    <div className="family-panel fade-up" ref={ref} style={{ transitionDelay: delay }}>
      <h3>{title}</h3>
      {members.map((m, i) => (
        <div className="family-member" key={i}>
          <div className="family-name">{m.name}</div>
          <div className="family-role">{m.role}</div>
        </div>
      ))}
      {note && <div className="family-note">{note}</div>}
    </div>
  )
}

export default function Families() {
  const headRef = useFadeUp()

  return (
    <section className="family-section">
      <h2 className="fade-up" ref={headRef}>Two Families. One God. One Joy.</h2>

      <div className="family-container">
        <FamilyPanel
          title="Groom's Family"
          members={[
            { name: 'Shantu Padayattil', role: 'Father' },
            { name: 'Bindu Shantu',      role: 'Mother' },
          ]}
          delay="0s"
        />
        <FamilyPanel
          title="Bride's Family"
          members={[
            { name: 'Thekkanath Pulickalan Paulachan', role: 'Father' },
            { name: 'Litty Paul',                     role: 'Mother' },
          ]}
          note="Thekkanath Pulickalan House, Besleham, Karukutty, Ernakulam"
          delay="0.15s"
        />
      </div>
    </section>
  )
}
