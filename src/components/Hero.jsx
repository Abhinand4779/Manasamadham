import { useEffect, useRef } from 'react'

const CrossSVG = () => (
  <svg className="hero-cross" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11 2v6H5v4h6v10h4V12h6V8h-6V2h-4z"/>
  </svg>
)

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Tiny delay so CSS transition has a frame to start from
    const t = requestAnimationFrame(() => {
      sectionRef.current?.classList.add('hero-loaded')
    })
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <CrossSVG />
        <div className="hero-label">Manasamadham</div>
        <h1 className="hero-names">
          <span className="name">Ninan</span>
          <span className="amp">&amp;</span>
          <span className="name">Anu</span>
        </h1>
        <div className="hero-date">Sunday &middot; 05 July 2026</div>
        <p className="hero-verse">
          &ldquo;What God has joined together, let no one separate.&rdquo;
        </p>
      </div>

      <div className="scroll-arrow" aria-hidden="true">&#8595;</div>
    </section>
  )
}
