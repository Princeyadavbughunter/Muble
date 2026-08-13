import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './preloader.css'

const WORDS = ['Oak', 'Linen', 'Alabaster', 'Brass', 'Muble']
const CURTAIN = { duration: 1.1, ease: [0.76, 0, 0.24, 1] }

// two stacked curtains: the ink panel lifts first, revealing clay beneath,
// which lifts a beat later onto the site
const panel = { exit: { y: '-100%', transition: CURTAIN } }
const sheet = { exit: { y: '-100%', transition: { ...CURTAIN, delay: 0.12 } } }

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    let raf
    let timer
    const start = performance.now()
    const total = 1900

    const tick = (now) => {
      const t = Math.min(1, (now - start) / total)
      // decelerating curve — fast at first, lingers near the end
      const eased = 1 - Math.pow(1 - t, 2.2)
      setCount(Math.round(eased * 100))
      setWordIndex(Math.min(WORDS.length - 1, Math.floor(eased * WORDS.length)))
      if (t < 1) raf = requestAnimationFrame(tick)
      else timer = setTimeout(() => setOpen(false), 300)
    }

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {open && (
        <motion.div className="pre" initial="idle" animate="idle" exit="exit">
          <motion.div className="pre__sheet" variants={sheet} />

          <motion.div className="pre__panel" variants={panel}>
            <div className="pre__inner">
              <motion.div
                className="pre__brand"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="pre__mark">Muble</span>
                <span className="eyebrow">Est. 2011 — Bespoke Interiors</span>
              </motion.div>

              {/* a roll, not a cross-fade: the outgoing word leaves through
                  the top of the mask as the next arrives from below, so the
                  slot is never empty and the two never sit on top of
                  each other */}
              <div className="pre__word" aria-hidden="true">
                <AnimatePresence>
                  <motion.span
                    key={wordIndex}
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                  >
                    {WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="pre__foot">
                <div className="pre__bar">
                  <span
                    className="pre__bar-fill"
                    style={{ transform: `scaleX(${count / 100})` }}
                  />
                </div>
                <span className="pre__count">
                  {String(count).padStart(3, '0')}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
