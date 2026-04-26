import useFadeUp from '../hooks/useFadeUp'

const CrossSVG = () => (
  <svg className="blessing-cross" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11 2v6H5v4h6v10h4V12h6V8h-6V2h-4z"/>
  </svg>
)

export default function Blessing() {
  const ref = useFadeUp()
  return (
    <section className="blessing-section">
      {/* BLESSING BACKGROUND PHOTO: swap background-image in index.css → .blessing-section */}
      {/* Overlay is now a warm ivory wash (see CSS) */}
      <div className="blessing-overlay" />
      <div className="blessing-content fade-up" ref={ref}>
        <CrossSVG />
        <p className="blessing-text">
          "May the Lord bless you and keep you;<br />
          may His face shine upon you."
        </p>
        <div className="blessing-ref">— Numbers 6:24</div>
      </div>
    </section>
  )
}
