import useFadeUp from '../hooks/useFadeUp'

const RingsSVG = () => (
  <svg className="rings-icon" viewBox="0 0 80 40" aria-hidden="true">
    <circle cx="24" cy="20" r="14" fill="none" stroke="#b8842a" strokeWidth="2.5"/>
    <circle cx="56" cy="20" r="14" fill="none" stroke="#b8842a" strokeWidth="2.5"/>
  </svg>
)

const OrnamentLine = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', margin: '16px 0' }}>
    <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, #d4a94e)' }} />
    <svg width="12" height="12" viewBox="0 0 12 12" fill="#b8842a" aria-hidden="true">
      <polygon points="6,0 7.5,4.5 12,6 7.5,7.5 6,12 4.5,7.5 0,6 4.5,4.5"/>
    </svg>
    <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, #d4a94e)' }} />
  </div>
)

function PersonCard({ side, name, relation, parents, note, delay = '0s' }) {
  const ref = useFadeUp()
  return (
    <div className="person-card fade-up" ref={ref} style={{ transitionDelay: delay }}>
      <div className="person-initial">{name[0]}</div>
      <OrnamentLine />
      <div className="person-name">{name}</div>
      <div className="person-relation">{relation}</div>
      <div className="person-parents">{parents}</div>
      {note && <div className="person-note">{note}</div>}
    </div>
  )
}

export default function Couple() {
  const headRef  = useFadeUp()
  const ruleRef  = useFadeUp()
  const ringsRef = useFadeUp()

  return (
    <section className="couple-section">
      <h2 className="fade-up" ref={headRef}>Two souls, one blessing</h2>
      <hr className="gold-rule fade-up" ref={ruleRef} />

      <div className="couple-grid">
        <PersonCard
          name="Ninan"
          relation="Son of"
          parents="Shantu Padayattil & Bindu Shantu"
          delay="0s"
        />

        <div className="couple-center-divider fade-up" ref={ringsRef} style={{ transitionDelay: '0.2s' }}>
          <RingsSVG />
        </div>

        <PersonCard
          name="Anu"
          relation="Daughter of"
          parents="Thekkanath Pulickalan Paulachan & Litty Paul"
          note="Thekkanath Pulickalan House, Besleham, Karukutty, Ernakulam"
          delay="0.1s"
        />
      </div>
    </section>
  )
}
