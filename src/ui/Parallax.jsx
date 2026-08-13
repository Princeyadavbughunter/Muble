import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

/**
 * Moves its child against the scroll direction while the element
 * crosses the viewport.
 *
 * `amount` is the drift as a fraction of the container height (0.12 = 12%).
 * The inner layer is oversized by that amount on both edges and offset back
 * up, so the frame stays fully covered at either end of the travel.
 */
export default function Parallax({ children, amount = 0.12, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.4,
  })

  // travel expressed against the inner layer's own height
  const travel = (amount / (1 + 2 * amount)) * 100
  const y = useTransform(smooth, [0, 1], [`${travel}%`, `${-travel}%`])

  return (
    <div ref={ref} className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        style={{
          y,
          position: 'absolute',
          top: `${-amount * 100}%`,
          left: 0,
          width: '100%',
          height: `${(1 + 2 * amount) * 100}%`,
          willChange: 'transform',
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
