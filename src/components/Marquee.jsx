import { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValueEvent,
} from 'framer-motion'
import './marquee.css'

const wrap = (min, max, v) => {
  const range = max - min
  return range === 0 ? min : ((((v - min) % range) + range) % range) + min
}

/**
 * Continuous ticker that speeds up — and reverses — with scroll velocity.
 * Four copies of the row keep the loop seamless at any width.
 */
export default function Marquee({
  items = [],
  baseVelocity = -2.4,
  className = '',
}) {
  const baseX = useMotionValue(0)
  const direction = useRef(1)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4], {
    clamp: false,
  })

  useMotionValueEvent(smoothVelocity, 'change', (v) => {
    if (v < -1) direction.current = -1
    else if (v > 1) direction.current = 1
  })

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`)

  useAnimationFrame((_, delta) => {
    let moveBy = direction.current * baseVelocity * (delta / 1000)
    moveBy += direction.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  const row = (key) => (
    <span className="marquee__row" key={key} aria-hidden={key !== 0}>
      {items.map((item, i) => (
        <span className="marquee__item" key={i}>
          {item}
          <span className="marquee__sep" aria-hidden="true" />
        </span>
      ))}
    </span>
  )

  return (
    <div className={`marquee ${className}`}>
      <motion.div className="marquee__track" style={{ x }}>
        {[0, 1, 2, 3].map(row)}
      </motion.div>
    </div>
  )
}
