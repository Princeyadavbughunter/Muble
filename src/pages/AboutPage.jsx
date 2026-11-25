import { useEffect } from 'react'
import useLenis from '../hooks/useLenis'
import AboutUs from '../components/AboutUs'

export default function AboutPage() {
  useLenis()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="site is-ready">
      <AboutUs />
    </main>
  )
}
