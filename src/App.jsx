import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'

import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import './styles/app.css'

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
  })

  useEffect(() => {
    document.body.classList.remove('is-loading')
  }, [])

  return (
    <BrowserRouter>
      <Cursor />

      <motion.div
        className="scroll-bar"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />

      <div className="grain" aria-hidden="true" />
    </BrowserRouter>
  )
}
