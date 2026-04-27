import { useEffect, useRef } from 'react'

const photos = [
  { src: '/photos/photo12.jpg', alt: 'Ninan & Anu — Walking together', wide: true },
  { src: '/photos/IMG_4062.JPEG', alt: 'Ninan & Anu — Garden joy' },
  { src: '/photos/photo4.jpg', alt: 'Ninan & Anu — Staircase glance' },
  { src: '/photos/photo1.jpg', alt: 'Ninan & Anu — Hand in hand' },
  { src: '/photos/photo2.jpg', alt: 'Ninan & Anu — Together' },
  { src: '/photos/photo11.jpg', alt: 'Ninan & Anu — Walking Portrait' },
  { src: '/photos/photo5.jpg', alt: 'Ninan & Anu — Black & white portrait', wide: true },
]

export default function Gallery() {
  const sectionRef = useRef(null)

  // Single observer on the section — no per-item overhead
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('gallery-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="gallery-section" ref={sectionRef}>
      <h2>A glimpse of us</h2>
      <div className="gallery-grid">
        {photos.map((p, i) => (
          <div
            key={i}
            className={`gallery-item gallery-item-anim${p.wide ? ' wide' : ''}`}
            style={{ '--i': i }}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
