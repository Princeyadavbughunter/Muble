import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { process } from '../data/site'
import SplitText from '../ui/SplitText'
import Reveal from '../ui/Reveal'
import './process.css'

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 90%'],
  })
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="section proc" id="process">
      <div className="wrap proc__grid">
        <div className="proc__aside">
          <Reveal>
            <span className="eyebrow">How we work</span>
          </Reveal>
          <h2 className="h1 proc__title">
            <SplitText text="Four steps," />
            <SplitText text="no surprises" className="italic" />
          </h2>
          <Reveal delay={0.1}>
            <p className="body-lg proc__lede">
              Most projects run eight to sixteen weeks. You will know the cost
              of the whole room before we cut anything.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a className="btn btn--light" href="#contact">
              Book a consultation
              <span className="btn-arrow">→</span>
            </a>
          </Reveal>
        </div>

        <div className="proc__steps-wrap" ref={ref}>
          <div className="proc__rail" aria-hidden="true">
            <motion.span style={{ scaleY: railScale }} />
          </div>

          <ol className="proc__steps">
            {process.map((s, i) => (
              <Reveal as="li" className="proc__step" key={s.n} delay={i * 0.05}>
                <span className="proc__n">{s.n}</span>
                <div className="proc__body">
                  <h3 className="h2">{s.title}</h3>
                  <p className="body-lg">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
