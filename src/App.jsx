import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Couple from './components/Couple'
import Gallery from './components/Gallery'
import EventDetails from './components/EventDetails'

import Blessing from './components/Blessing'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  return (
    <>
      <MusicPlayer />
      <Hero />
      <Countdown />
      <Couple />
      <Gallery />
      <EventDetails />

      <Blessing />
      <RSVP />
      <Footer />
    </>
  )
}
