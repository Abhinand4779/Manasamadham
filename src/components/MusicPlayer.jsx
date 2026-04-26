import { useState, useRef, useEffect } from 'react'

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-label="Play music">
    <path d="M8 5v14l11-7z"/>
  </svg>
)
const PauseIcon = () => (
  <svg viewBox="0 0 24 24" aria-label="Pause music">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>
)

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  // Try to start music on first user interaction anywhere
  useEffect(() => {
    const tryPlay = () => {
      if (!playing && audioRef.current) {
        audioRef.current.play()
          .then(() => setPlaying(true))
          .catch(() => {/* blocked by browser policy */})
      }
      document.removeEventListener('click', tryPlay)
    }
    document.addEventListener('click', tryPlay)
    return () => document.removeEventListener('click', tryPlay)
  }, [playing])

  const toggle = (e) => {
    e.stopPropagation()
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      {/* Background music — replace src with a hosted romantic track */}
      <audio ref={audioRef} loop preload="none">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      <button className="music-player" onClick={toggle} aria-label={playing ? 'Pause music' : 'Play music'}>
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
    </>
  )
}
