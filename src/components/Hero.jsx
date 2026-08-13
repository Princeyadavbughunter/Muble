import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { heroImage, heroAlt } from '../data/site'
import SplitText from '../ui/SplitText'
import './hero.css'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero({ ready }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // the headline drifts up and dims as the media takes over
  const headY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const headOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14])

  const state = ready ? 'visible' : 'hidden'

  return (
    <section className="hero" id="top" ref={ref}>
      <motion.div
        className="hero__head"
        style={{ y: headY, opacity: headOpacity }}
      >
        <motion.div
          className="hero__eyebrow"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={state}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          <span className="eyebrow">Bespoke furniture &amp; interiors</span>
          <span className="hero__dash" />
          <span className="eyebrow">London · Est. 2011</span>
        </motion.div>

        <h1 className="display hero__title">
          <SplitText text="Rooms that hold" animate={state} delay={0.35} />
          <SplitText
            text="their own silence"
            animate={state}
            delay={0.5}
            className="hero__title-2"
          />
        </h1>
      </motion.div>

      <div className="hero__media">
        <motion.div
          className="hero__clip"
          variants={{
            hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
            visible: { clipPath: 'inset(0% 0% 0% 0%)' },
          }}
          initial="hidden"
          animate={state}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div className="hero__frame" style={{ y: imgY, scale: imgScale }}>
            <motion.img
              src={heroImage}
              alt={heroAlt}
              variants={{ hidden: { scale: 1.35 }, visible: { scale: 1 } }}
              initial="hidden"
              animate={state}
              transition={{ duration: 1.8, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
            />
          </motion.div>
          <div className="hero__veil" />
        </motion.div>
      </div>

      <motion.div
        className="hero__foot"
        variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        animate={state}
        transition={{ duration: 1, delay: 1.05, ease: EASE }}
      >
        <p className="body-lg hero__blurb">
          We design and make furniture for people who intend to stay. Fourteen
          years of rooms built slowly, in oak, linen and light.
        </p>

        <div className="hero__stats">
          <Stat value="140+" label="Rooms completed" />
          <Stat value="11" label="Countries" />
          <Stat value="1" label="Workshop, in Kent" />
        </div>

        <a className="hero__scroll" href="#philosophy" aria-label="Scroll to studio">
          <span className="eyebrow">Scroll</span>
          <span className="hero__scroll-line">
            <span />
          </span>
        </a>
      </motion.div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="hero__stat">
      <span className="hero__stat-value">{value}</span>
      <span className="body-sm">{label}</span>
    </div>
  )
}
