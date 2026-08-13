import { Fragment } from 'react'
import { motion } from 'framer-motion'
import './ui.css'

/**
 * Word-by-word mask reveal. Each word rides up out of an
 * overflow-hidden line box, staggered left to right.
 */
export default function SplitText({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 0.045,
  duration = 0.9,
  animate,
  once = true,
}) {
  const words = String(text).split(' ')

  const container = {
    hidden: {},
    visible: {
      transition: { delayChildren: delay, staggerChildren: stagger },
    },
  }

  const word = {
    hidden: { y: '110%' },
    visible: {
      y: '0%',
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  }

  // when `animate` is supplied the parent controls the state (e.g. after the
  // preloader); otherwise the reveal is driven by the viewport
  const trigger = animate
    ? { animate }
    : { whileInView: 'visible', viewport: { once, margin: '-12% 0px' } }

  const MotionTag = motion[Tag] || motion.span

  return (
    <MotionTag
      className={`split ${className}`}
      variants={container}
      initial="hidden"
      {...trigger}
    >
      {words.map((w, i) => (
        // the space lives between the masks, not inside them — a trailing
        // space inside an overflow-hidden inline-block gets trimmed away
        <Fragment key={`${w}-${i}`}>
          <span className="split__word">
            <motion.span className="split__inner" variants={word}>
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </MotionTag>
  )
}
