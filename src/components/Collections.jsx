import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { collections } from '../data/site'
import SplitText from '../ui/SplitText'
import Reveal from '../ui/Reveal'
import './collections.css'

/**
 * Pinned horizontal gallery: the section is tall, the viewport inside it is
 * sticky, and vertical scroll progress drives the track sideways.
 * Below 900px it degrades to an ordinary vertical stack.
 */
export default function Collections() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [distance, setDistance] = useState(0)
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')

    const measure = () => {
      const on = mq.matches && !reduce.matches
      setPinned(on)
      if (!on || !trackRef.current) return setDistance(0)
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth))
    }

    measure()
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    mq.addEventListener('change', measure)
    window.addEventListener('resize', measure)

    return () => {
      ro.disconnect()
      mq.removeEventListener('change', measure)
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distance])
  const x = useSpring(rawX, { stiffness: 140, damping: 30, mass: 0.4 })
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      className={`coll ${pinned ? 'is-pinned' : ''}`}
      id="collections"
      ref={sectionRef}
      style={pinned ? { height: `calc(100svh + ${distance}px)` } : undefined}
    >
      <div className="coll__sticky">
        <div className="coll__head">
          <div>
            <Reveal>
              <span className="eyebrow">Collections</span>
            </Reveal>
            <h2 className="h2 coll__title">
              <SplitText text="Five rooms, made piece by piece" />
            </h2>
          </div>
          <Reveal delay={0.1} className="coll__note">
            <p className="body-sm">
              Every collection is a starting point, not a catalogue. Dimensions,
              timber and cloth are specified to your room.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="coll__track"
          ref={trackRef}
          style={pinned ? { x } : undefined}
        >
          {collections.map((c, i) => (
            <Card key={c.id} item={c} index={i} pinned={pinned} />
          ))}

          <div className="coll__end">
            <p className="h3">
              Nothing here quite right? <br />
              <span className="italic">We draw from scratch too.</span>
            </p>
            <a className="btn" href="#contact">
              Start a commission
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </motion.div>

        {pinned && (
          <div className="coll__progress" aria-hidden="true">
            <motion.span style={{ scaleX: progress }} />
          </div>
        )}
      </div>
    </section>
  )
}

function Card({ item, index, pinned }) {
  const inner = (
    <>
      <div className="card__media frame" data-cursor="view">
        <motion.img
          src={item.image}
          alt={item.alt}
          loading={index > 1 ? 'lazy' : 'eager'}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <span className="card__pieces">{item.pieces}</span>
      </div>

      <div className="card__body">
        <span className="card__index">{item.index}</span>
        <div>
          <h3 className="h3">{item.name}</h3>
          <p className="body-sm card__tagline">{item.tagline}</p>
          <p className="body-sm">{item.text}</p>
        </div>
      </div>
    </>
  )

  // in the pinned track the cards are already revealed by the sideways
  // motion, so the fade-up is only used in the stacked fallback
  return pinned ? (
    <article className="card">{inner}</article>
  ) : (
    <Reveal as="article" className="card" delay={0.04 * index}>
      {inner}
    </Reveal>
  )
}
