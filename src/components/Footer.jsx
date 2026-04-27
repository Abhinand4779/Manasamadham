import useFadeUp from '../hooks/useFadeUp'

const CrossSVG = () => (
  <svg className="footer-cross" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11 2v6H5v4h6v10h4V12h6V8h-6V2h-4z"/>
  </svg>
)

const bestWishes = [
  'Preslin Paul · Deepa Preslin · Eva Preslin',
  'Privelin Paul · Ancy Privelin · Marquez Paul Privelin · Kiarah Mariam Privelin',
  
]

export default function Footer() {
  const namesRef = useFadeUp()
  const dateRef  = useFadeUp()
  const wishRef  = useFadeUp()
  const quoteRef = useFadeUp()
  const microRef = useFadeUp()

  return (
    <footer className="footer">
      <div className="footer-names fade-up" ref={namesRef}>Ninan &amp; Anu</div>
      <div className="footer-date fade-up"  ref={dateRef}>05 · July · 2026</div>

      <CrossSVG />

      <div className="best-wishes-container fade-up" ref={wishRef}>
        <div className="best-wishes-title">Best Wishes</div>
        <div className="best-wishes-list">
          {bestWishes.map((line, i) => (
            <span key={i}>
              {line}
              {i < bestWishes.length - 1 && <><br /><br /></>}
            </span>
          ))}
        </div>
      </div>

      <p className="footer-quote fade-up" ref={quoteRef}>
        "To God be the glory — forever and ever."
      </p>
      <div className="footer-micro fade-up" ref={microRef}>
        ✦ Made with love &middot; {new Date().getFullYear()} ✦
      </div>
    </footer>
  )
}
