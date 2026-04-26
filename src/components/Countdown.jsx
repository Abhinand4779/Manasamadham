import { useState, useEffect } from 'react'
import useFadeUp from '../hooks/useFadeUp'

const TARGET = new Date('July 05, 2026 11:00:00').getTime()

function pad(n) { return String(n).padStart(2, '0') }

function getCountdown() {
  const dist = TARGET - Date.now()
  if (dist <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00' }
  return {
    days: pad(Math.floor(dist / 86400000)),
    hours: pad(Math.floor((dist % 86400000) / 3600000)),
    minutes: pad(Math.floor((dist % 3600000) / 60000)),
    seconds: pad(Math.floor((dist % 60000) / 1000)),
  }
}

function CountBox({ value, label }) {
  return (
    <div className="countdown-box">
      <div className="countdown-number">{value}</div>
      <div className="countdown-label">{label}</div>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getCountdown)
  const headRef = useFadeUp()
  const gridRef = useFadeUp()

  useEffect(() => {
    const id = setInterval(() => setTime(getCountdown()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="countdown-section">
      <h2 className="fade-up" ref={headRef}>The moment is almost here…</h2>
      <div className="countdown-grid fade-up" ref={gridRef} style={{ transitionDelay: '0.15s' }}>
        <CountBox value={time.days}    label="Days" />
        <span className="countdown-sep">:</span>
        <CountBox value={time.hours}   label="Hours" />
        <span className="countdown-sep">:</span>
        <CountBox value={time.minutes} label="Minutes" />
        <span className="countdown-sep">:</span>
        <CountBox value={time.seconds} label="Seconds" />
      </div>
    </section>
  )
}
