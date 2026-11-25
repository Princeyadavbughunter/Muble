import { motion } from 'framer-motion'
import './aboutUs.css'

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      {/* ── Part 1: Company Content ── */}
      <div className="about-content-wrap">
        <motion.div
          className="about-content-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="about-brand-title">
            Mueble<span className="about-brand-dot">.</span>
          </h2>

          <div className="about-paragraphs">
            <p>
              Mueble India India is not just designing interiors - it's redefining how workspaces feel, function, and perform.
              As the founder of Mueble India, believes that the future of work deserves more than traditional layouts, dull
              cabins, and copied designs. It deserves intent, intelligence, and identity.
            </p>
            <p>
              With a sharp eye for detail and a deep understanding of how people actually work, Mueble India approaches
              every project as a business tool—not just a visual upgrade. His vision is simple yet powerful: workspaces
              should inspire ambition, improve productivity, and reflect the mindset of the people who use them.
            </p>
            <p>
              Mueble India stands at the intersection of architecture, business strategy, and modern lifestyle—breaking
              away from outdated norms to create environments that are bold, efficient, and future-ready.
            </p>
          </div>

          <div className="about-divider" />

          <div className="about-why">
            <h3 className="about-why-title">
              WHY MUEBLE INDIA?
            </h3>
            <p className="about-why-text">
              You don't choose Mueble India just for design.<br />
              You choose Mueble India for designing differently.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Part 2: Message from Founder ── */}
      <div className="founder-section">
        <div className="founder-bg-pattern" aria-hidden="true" />
        <div className="founder-inner">
          <motion.div
            className="founder-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="founder-label">
              MESSAGE FROM <span className="founder-label-accent">FOUNDER</span>
            </h3>

            <blockquote className="founder-quote">
              <p>
                "I don't believe offices should feel ordinary.<br />
                They should motivate, represent who you are, and push people to do their best work.<br />
                When you choose <strong>Mueble India</strong>, you're not just building a workspace—<br />
                you're building the future of how your business operates."
              </p>
            </blockquote>

            <div className="founder-signature">
              <span className="founder-signature-text">— Rahul Gautam</span>
            </div>
          </motion.div>

          <motion.div
            className="founder-image-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/founder_rahul.jpg"
              alt="Rahul Gautam — Founder of Mueble India"
              className="founder-image"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
