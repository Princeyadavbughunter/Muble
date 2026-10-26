import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal'
import Magnetic from '../ui/Magnetic'
import './footer.css'

const columns = [
  {
    title: 'Explore',
    links: ['Collections', 'Projects', 'Process', 'Journal'],
  },
  {
    title: 'Studio',
    links: ['About', 'The workshop', 'Materials', 'Careers'],
  },
  {
    title: 'Elsewhere',
    links: ['Instagram', 'Pinterest', 'Newsletter', 'Trade programme'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__top">
          <div className="footer__say">
            <Reveal>
              <p className="h3 footer__say-text">
                Made slowly in Kent, <span className="italic">placed carefully anywhere.</span>
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <form
                className="footer__sub"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter"
              >
                <input
                  type="email"
                  placeholder="Email for the quarterly letter"
                  aria-label="Email address"
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  →
                </button>
              </form>
            </Reveal>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {columns.map((col, i) => (
              <Reveal key={col.title} delay={0.05 * i} className="footer__col">
                <p className="eyebrow">{col.title}</p>
                <ul>
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#top">{l}</a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </nav>
        </div>

        {/* Muble wordmark — bottom 20% hidden/clipped at the line */}
        <div className="footer__mark-wrap">
          <motion.div
            className="footer__mark"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-5%' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            Muble<span className="italic">.</span>
          </motion.div>
        </div>

        <div className="footer__bar">
          <span className="body-sm">© {new Date().getFullYear()} Muble Ltd.</span>
          <span className="body-sm">Registered in England · 08842217</span>
          <Magnetic strength={0.25}>
            <a className="link-under footer__top-link" href="#top">
              Back to top ↑
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  )
}
