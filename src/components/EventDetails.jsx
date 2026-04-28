import useFadeUp from '../hooks/useFadeUp'

const CalendarIcon = () => (
  <svg className="event-icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.89 4 3.01 4.9 3.01 6L3 20a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg>
)
const ClockIcon = () => (
  <svg className="event-icon" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
)
const LocationIcon = () => (
  <svg className="event-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" /></svg>
)

// Replace href with actual Google Maps link
const MAP_URL = 'https://maps.app.goo.gl/mi7Sghc3iEpdZAFJ6?g_st=iw'

export default function EventDetails() {
  const headRef = useFadeUp()
  const subtitleRef = useFadeUp()
  const card1Ref = useFadeUp()
  const card2Ref = useFadeUp()
  const card3Ref = useFadeUp()
  const footerRef = useFadeUp()

  return (
    <section className="event-section">
      <div className="event-top-line" />
      <h2 className="fade-up" ref={headRef}>You Are Invited</h2>
      <p className="event-subtitle fade-up" ref={subtitleRef}>
        Join us as we begin our forever
      </p>

      <div className="event-cards">
        {/* Date */}
        <div className="event-card fade-up" ref={card1Ref}>
          <CalendarIcon />
          <div className="event-label">Date</div>
          <div className="event-value">Sunday<br />05 July 2026</div>
        </div>

        {/* Time */}
        <div className="event-card fade-up" ref={card2Ref} style={{ transitionDelay: '0.1s' }}>
          <ClockIcon />
          <div className="event-label">Time</div>
          <div className="event-value">12.00 PM</div>
        </div>

        {/* Venue — clickable map link */}
        <a href={MAP_URL} target="_blank" rel="noopener noreferrer"
          className="event-card fade-up" ref={card3Ref} style={{ transitionDelay: '0.2s' }}>
          <LocationIcon />
          <div className="event-label">Venue</div>
          <div className="event-value">St. Joseph's Church<br />Besleham</div>
          <div className="event-subvalue">Karukutty, Angamaly · Tap for Map ↗</div>
        </a>
      </div>

      <div className="event-footer fade-up" ref={footerRef}>
        <hr className="event-divider" />
        <p className="event-footer-text">
          Followed by a blessing meal and fellowship at the Parish Hall.
          <br />Your presence is our greatest joy.
        </p>
      </div>
    </section>
  )
}
