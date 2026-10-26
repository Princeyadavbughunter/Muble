import { motion } from 'framer-motion'
import './clientLogos.css'

const CLIENTS = [
  {
    id: 'ifc',
    name: 'IFC',
    desc: 'International Finance Corp',
    category: 'Commercial Architecture',
  },
  {
    id: 'wave',
    name: 'WAVE',
    desc: 'Wave Infratech',
    category: 'Turnkey Civil & Fitouts',
  },
  {
    id: 'nexa',
    name: 'NEXA',
    desc: 'Premium Automotive Experience',
    category: 'Hospitality Lounges',
  },
  {
    id: 'emaar',
    name: 'EMAAR',
    desc: 'Luxury Properties & Estates',
    category: 'Five-Star Residences',
  },
  {
    id: 'indigo',
    name: 'INDIGO',
    desc: 'Aviation & Global Workspaces',
    category: 'Modular Workstations',
  },
  {
    id: 'medanta',
    name: 'Medanta',
    desc: 'The Medicity Healthcare',
    category: 'Hospital Interior & Suites',
  },
  {
    id: 'prag',
    name: 'PRAG',
    desc: 'PRAG Industries',
    category: 'Bareshell Transformation',
  },
  {
    id: 'nirvasa',
    name: 'Nirvasa',
    desc: 'Healthcare & Wellness',
    category: 'Biophilic Clinical Design',
  },
]

export default function ClientLogos() {
  return (
    <section className="client-logos-section" id="clients">
      <div className="client-logos-container">
        {/* Section Header */}
        <div className="client-logos-head">
          <span className="eyebrow client-logos-eyebrow">
            Trusted Partners &amp; Enterprise Clients
          </span>
          <h2 className="client-logos-title">
            Crafting Spaces for Industry Leaders
          </h2>
          <p className="client-logos-subtitle">
            From specialized healthcare facilities and corporate headquarters to
            five-star hospitality suites and turnkey architectural shells.
          </p>
        </div>

        {/* 2 Rows of 4 Logo Cards (Exact Image 2 Specification) */}
        <div className="client-logos-grid">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={client.id}
              className="client-logo-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="client-logo-badge">
                <span className={`client-logo-text client-logo-${client.id}`}>
                  {client.name}
                </span>
              </div>
              <div className="client-logo-info">
                <span className="client-logo-name">{client.desc}</span>
                <span className="client-logo-cat">{client.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Highlight Stats */}
        <div className="client-logos-foot">
          <div className="client-stat-item">
            <span className="client-stat-num">100%</span>
            <span className="client-stat-label">Turnkey Delivery</span>
          </div>
          <div className="client-stat-divider" />
          <div className="client-stat-item">
            <span className="client-stat-num">250K+</span>
            <span className="client-stat-label">Sq.Ft Executed</span>
          </div>
          <div className="client-stat-divider" />
          <div className="client-stat-item">
            <span className="client-stat-num">8+</span>
            <span className="client-stat-label">Enterprise Partners</span>
          </div>
        </div>
      </div>
    </section>
  )
}
