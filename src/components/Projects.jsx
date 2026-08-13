import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '../data/site'
import SplitText from '../ui/SplitText'
import Reveal from '../ui/Reveal'
import './projects.css'

/**
 * Stacking cards: each project pins to the viewport and is pressed down a
 * little as the next one slides over it, so the set reads as a deck.
 */
export default function Projects() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section className="section proj" id="projects">
      <div className="wrap proj__head">
        <div>
          <Reveal>
            <span className="eyebrow">Selected work</span>
          </Reveal>
          <h2 className="h1 proj__title">
            <SplitText text="Rooms we have" />
            <SplitText text="already lived in" className="italic" />
          </h2>
        </div>
        <Reveal delay={0.1} className="proj__lede">
          <p className="body-lg">
            Four of the last fourteen years. Each one began with a conversation
            in an empty room and ended with us moving a lamp two inches left.
          </p>
        </Reveal>
      </div>

      <div className="proj__stack" ref={containerRef}>
        {projects.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index, total, progress }) {
  // every card below the top of the deck settles a touch smaller
  const targetScale = 1 - (total - index) * 0.04
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])
  const imageScale = useTransform(progress, [index / total, 1], [1, 1.12])

  return (
    <div
      className="proj__pin"
      style={{ top: `calc(6vh + ${index * 26}px)` }}
    >
      <motion.article
        className="proj__card"
        style={{ scale }}
        data-cursor="view"
      >
        <div className="proj__media">
          <motion.img
            src={project.image}
            alt={`${project.title}, ${project.place}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            style={{ scale: imageScale }}
          />
        </div>

        <div className="proj__overlay">
          <div className="proj__meta-top">
            <span className="eyebrow">{project.scope}</span>
            <span className="eyebrow">{project.year}</span>
          </div>

          <div className="proj__meta-bottom">
            <h3 className="h1 proj__name">{project.title}</h3>
            <div className="proj__foot">
              <span className="eyebrow">{project.place}</span>
              <span className="link-under">View project</span>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  )
}
