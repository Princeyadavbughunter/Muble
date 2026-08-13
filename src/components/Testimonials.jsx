import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../data/site'
import Reveal from '../ui/Reveal'
import './testimonials.css'

const DURATION = 7000
const EASE = [0.22, 1, 0.36, 1]

export default function Testimonials() {
  const [[index, dir], setState] = useState([0, 1])
  const [paused, setPaused] = useState(false)

  const go = useCallback((next, direction) => {
    setState([(next + testimonials.length) % testimonials.length, direction])
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => go(index + 1, 1), DURATION)
    return () => clearTimeout(t)
  }, [index, paused, go])

  const item = testimonials[index]

  return (
    <section
      className="section quote"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="wrap quote__inner">
        <Reveal>
          <span className="eyebrow">In their words</span>
        </Reveal>

        <div className="quote__stage">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              className="quote__block"
              custom={dir}
              initial={{ opacity: 0, y: 30 * dir }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 * dir }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <p className="h2 quote__text">“{item.quote}”</p>
              <footer className="quote__by">
                <span className="quote__name">{item.name}</span>
                <span className="body-sm">{item.meta}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="quote__controls">
          <button
            className="quote__arrow"
            onClick={() => go(index - 1, -1)}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className="quote__dots" role="tablist" aria-label="Testimonials">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                className={`quote__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => go(i, i > index ? 1 : -1)}
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
              >
                <span className="quote__dot-track">
                  {i === index && (
                    <motion.span
                      className="quote__dot-fill"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: paused ? 0.35 : 1 }}
                      transition={{
                        duration: paused ? 0.4 : DURATION / 1000,
                        ease: paused ? EASE : 'linear',
                      }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>

          <button
            className="quote__arrow"
            onClick={() => go(index + 1, 1)}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
