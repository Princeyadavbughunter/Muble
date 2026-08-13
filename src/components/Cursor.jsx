import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import './cursor.css'

/**
 * Two-part cursor: a hairline ring that lags behind a small dot.
 * Elements opt into states with data-cursor="view" | "link" | "drag".
 * Skipped entirely on touch / coarse pointers.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [mode, setMode] = useState(null)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const ring = { stiffness: 260, damping: 26, mass: 0.7 }
  const dot = { stiffness: 900, damping: 40, mass: 0.35 }

  const rx = useSpring(x, ring)
  const ry = useSpring(y, ring)
  const dx = useSpring(x, dot)
  const dy = useSpring(y, dot)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!fine.matches) return
    setEnabled(true)
    document.body.classList.add('has-cursor')

    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }

    const onOver = (e) => {
      const target = e.target.closest?.('[data-cursor]')
      if (target) return setMode(target.dataset.cursor)
      const clickable = e.target.closest?.('a, button, input, textarea')
      setMode(clickable ? 'link' : null)
    }

    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.body.classList.remove('has-cursor')
    }
  }, [x, y])

  if (!enabled) return null

  const isView = mode === 'view'
  const isLink = mode === 'link'

  return (
    <div className="cursor" aria-hidden="true">
      <motion.div
        className={`cursor__ring ${isView ? 'is-view' : ''}`}
        style={{ x: rx, y: ry }}
      >
        <motion.div
          className={`cursor__ring-shape ${isView ? 'is-solid' : ''}`}
          animate={{
            scale: isView ? 1 : isLink ? 0.55 : 1,
            opacity: visible ? 1 : 0,
            backgroundColor: isView ? 'rgba(169,113,75,1)' : 'rgba(169,113,75,0)',
            borderColor: isView
              ? 'rgba(169,113,75,1)'
              : 'rgba(255,255,255,0.55)',
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence>
            {isView && (
              <motion.span
                className="cursor__label"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                View
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <motion.div
        className="cursor__dot"
        style={{ x: dx, y: dy }}
        animate={{ opacity: visible && !isView ? 1 : 0, scale: isLink ? 1.6 : 1 }}
        transition={{ duration: 0.25 }}
      />
    </div>
  )
}
