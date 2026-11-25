import { motion } from 'framer-motion'
import './clientLogos.css'

const CLIENTS = [
  {
    id: 'nexa',
    name: 'NEXA',
    desc: 'Premium Automotive Experience',
    category: 'Hospitality Lounges',
    logo: '/clients/nexa.png',
  },
  {
    id: 'indigo',
    name: 'IndiGo',
    desc: 'Aviation & Global Workspaces',
    category: 'Modular Workstations',
    logo: '/clients/indigo.png',
  },
  {
    id: 'medanta',
    name: 'Medanta',
    desc: 'The Medicity Healthcare',
    category: 'Hospital Interior & Suites',
    logo: '/clients/medanta.png',
  },
  {
    id: 'hdfc_bank',
    name: 'HDFC Bank',
    desc: 'Banking & Financial Services',
    category: 'Corporate Interiors',
    logo: '/clients/hdfc_bank.png',
  },
  {
    id: 'samsung',
    name: 'Samsung',
    desc: 'Global Technology Leader',
    category: 'Experience Centres',
    logo: '/clients/samsung.png',
  },
  {
    id: 'maruti_suzuki',
    name: 'Maruti Suzuki',
    desc: 'Automobile Showrooms',
    category: 'Showroom Design & Fitouts',
    logo: '/clients/maruti_suzuki.png',
  },
  {
    id: 'dlf',
    name: 'DLF',
    desc: 'Luxury Properties & Estates',
    category: 'Five-Star Residences',
    logo: '/clients/dlf.png',
  },
  {
    id: 'm3m_ifc',
    name: 'M3M IFC',
    desc: 'International Financial Center',
    category: 'Commercial Architecture & Towers',
    logo: '/clients/M3M IFC Corporate Logo.png',
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

        {/* 2 Rows of 4 Logo Cards */}
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
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo-img"
                  loading="lazy"
                />
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
            <span className="client-stat-num">36+</span>
            <span className="client-stat-label">Enterprise Partners</span>
          </div>
        </div>
      </div>
    </section>
  )
}
