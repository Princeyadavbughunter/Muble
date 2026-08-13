import { motion } from 'framer-motion'

/**
 * Generic fade-and-lift on scroll. Kept deliberately soft —
 * long duration, small travel, so it reads as settling rather than sliding.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  duration = 1,
  className = '',
  once = true,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-10% 0px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
