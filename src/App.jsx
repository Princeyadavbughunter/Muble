import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

import useLenis from './hooks/useLenis'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Philosophy from './components/Philosophy'
import Collections from './components/Collections'
import Projects from './components/Projects'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/app.css'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const MARQUEE = [
  'Solid oak',
  'Undyed linen',
  'Hand-finished',
  'Made in Kent',
  'Built to outlast us',
]

export default function App() {
  // with reduced motion there is no curtain, so the site is ready immediately
  const [ready, setReady] = useState(() => prefersReducedMotion())

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
  })

  // Lenis first, so the effects below can reach window.__lenis
  useLenis()

  // a refresh should always land at the top, behind the curtain
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  // hold the page still until the preloader clears
  useEffect(() => {
    document.body.classList.toggle('is-loading', !ready)
    if (ready) window.__lenis?.start()
    else window.__lenis?.stop()
  }, [ready])

  return (
    <>
      {!prefersReducedMotion() && <Preloader onDone={() => setReady(true)} />}
      <Cursor />

      <motion.div
        className="scroll-bar"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <Nav />

      <main
        className={`site ${ready ? 'is-ready' : ''}`}
        aria-busy={!ready}
      >
        <Hero ready={ready} />

        <Marquee items={MARQUEE} />

        <Philosophy />
        <Collections />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <div className="grain" aria-hidden="true" />
    </>
  )
}
