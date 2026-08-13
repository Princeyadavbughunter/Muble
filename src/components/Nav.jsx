import { useEffect, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import { navLinks } from '../data/site'
import Magnetic from '../ui/Magnetic'
import './nav.css'

const EASE = [0.76, 0, 0.24, 1]

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setSolid(y > 40)
    // never hide the bar while the overlay is up
    if (open) return setHidden(false)
    setHidden(y > prev && y > 220)
  })

  // freeze the page behind the overlay
  useEffect(() => {
    const lenis = window.__lenis
    if (open) {
      lenis?.stop()
      document.body.style.overflow = 'hidden'
    } else {
      lenis?.start()
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <motion.header
        className={`nav ${solid ? 'is-solid' : ''} ${open ? 'is-over' : ''}`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <a className="nav__brand" href="#top" aria-label="Muble — home">
          <span className="nav__mark">Muble</span>
          <span className="nav__mark nav__mark--italic" aria-hidden="true">.</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              <span className="nav__link-inner">
                <span>{l.label}</span>
                <span aria-hidden="true">{l.label}</span>
              </span>
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <Magnetic strength={0.25} className="nav__cta-wrap">
            <a className="btn nav__cta" href="#contact">
              Book a consultation
            </a>
          </Magnetic>

          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && <MenuOverlay onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

function MenuOverlay({ onClose }) {
  return (
    <motion.div
      className="menu"
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      animate={{ clipPath: 'inset(0 0 0% 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <div className="menu__grid">
        <div className="menu__list">
          {navLinks.map((l, i) => (
            <div className="menu__line" key={l.href}>
              <motion.a
                href={l.href}
                onClick={onClose}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                exit={{ y: '110%', transition: { duration: 0.4, ease: EASE } }}
                transition={{
                  duration: 0.85,
                  delay: 0.25 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="menu__index">0{i + 1}</span>
                {l.label}
              </motion.a>
            </div>
          ))}
        </div>

        <motion.div
          className="menu__aside"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.8 } }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
          <div>
            <p className="eyebrow">Studio</p>
            <p className="body-sm">
              18 Prescott Row
              <br />
              London E1 6QL
            </p>
          </div>
          <div>
            <p className="eyebrow">Enquiries</p>
            <p className="body-sm">
              hello@muble.studio
              <br />
              +44 20 7946 0122
            </p>
          </div>
          <div className="menu__social">
            <a href="#contact" className="link-under">Instagram</a>
            <a href="#contact" className="link-under">Pinterest</a>
            <a href="#contact" className="link-under">Journal</a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
