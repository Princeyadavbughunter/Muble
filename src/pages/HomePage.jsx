import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

import useLenis from '../hooks/useLenis'
import Hero from '../components/Hero'
import ClientLogos from '../components/ClientLogos'
import Capabilities from '../components/Capabilities'
import CityProjects from '../components/CityProjects'
import Team from '../components/Team'
import Clientele from '../components/Clientele'
import Contact from '../components/Contact'

export default function HomePage() {
  useLenis()

  useEffect(() => {
    document.body.classList.remove('is-loading')
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="site is-ready">
      <Hero />
      <ClientLogos />
      <Capabilities />
      <CityProjects />
      <Team />
      <Clientele />
      <Contact />
    </main>
  )
}
