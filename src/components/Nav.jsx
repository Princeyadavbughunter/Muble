import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, capabilities } from '../data/site'
import './nav.css'

const EASE = [0.76, 0, 0.24, 1]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const dropdownTimeoutRef = useRef(null)

  // freeze page behind overlay or cart drawer
  useEffect(() => {
    const lenis = window.__lenis
    if (open || cartOpen) {
      lenis?.stop()
      document.body.style.overflow = 'hidden'
    } else {
      lenis?.start()
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open, cartOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setCartOpen(false)
        setDropdownOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setDropdownOpen(true)
  }

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 180)
  }

  const handleSelectCapability = (id) => {
    setDropdownOpen(false)
    setOpen(false)
    window.dispatchEvent(new CustomEvent('select-capability', { detail: id }))
  }

  return (
    <>
      <header className={`ecomuz-nav-container ${open ? 'is-over' : ''}`}>
        {/* Brand Logo - Muble */}
        <a className="ecomuz-logo" href="#top" aria-label="Muble — Home">
          Muble
        </a>

        {/* Center Links */}
        <nav className="ecomuz-nav-links" aria-label="Primary Navigation">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div
                  key={link.label}
                  className="ecomuz-dropdown-wrap"
                  onMouseEnter={handleMouseEnterDropdown}
                  onMouseLeave={handleMouseLeaveDropdown}
                >
                  <button
                    type="button"
                    className={`ecomuz-nav-link ecomuz-dropdown-btn ${dropdownOpen ? 'is-active' : ''}`}
                    onClick={() => setDropdownOpen((v) => !v)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`ecomuz-chevron ${dropdownOpen ? 'is-rotated' : ''}`}
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        className="ecomuz-dropdown-panel"
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="ecomuz-dropdown-box">
                          <div className="ecomuz-dropdown-head">
                            <span className="eyebrow">Our Capabilities</span>
                            <span className="ecomuz-dropdown-sub-head">
                              Architectural &amp; Modular Fitouts
                            </span>
                          </div>

                          <div className="ecomuz-dropdown-items">
                            {link.children?.map((child) => {
                              const cap = capabilities.find(
                                (c) => c.id === child.id
                              )
                              return (
                                <a
                                  key={child.label}
                                  href={child.href}
                                  className="ecomuz-dropdown-item"
                                  onClick={() => handleSelectCapability(child.id)}
                                >
                                  <div className="ecomuz-dropdown-item-thumb">
                                    <img
                                      src={cap?.image || '/hero_living_slats.jpg'}
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="ecomuz-dropdown-item-info">
                                    <span className="ecomuz-dropdown-item-title">
                                      {child.label}
                                    </span>
                                    <span className="ecomuz-dropdown-item-desc">
                                      {cap?.tagline || 'Bespoke design'}
                                    </span>
                                  </div>
                                  <span className="ecomuz-dropdown-arrow">&rarr;</span>
                                </a>
                              )
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <a key={link.href} href={link.href} className="ecomuz-nav-link">
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Right Area: Exact Ecomuz Cart trigger & mobile menu burger */}
        <div className="ecomuz-nav-right">
          <button
            className="ecomuz-cart-trigger"
            onClick={() => setCartOpen(true)}
            aria-label="Shopping bag with 0 items"
            title="Shopping cart"
          >
            <div className="ecomuz-cart-icon">
              {/* Exact SVG from ecomuz.framer.ai */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4.34 16.878 3.179 9.936c-.19-1.13-.284-1.694.007-2.065.292-.371.83-.371 1.906-.371H18.91c1.076 0 1.614 0 1.906.37.29.372.196.936.007 2.066l-1.163 6.942c-.41 2.448-.615 3.672-1.427 4.397S16.253 22 13.92 22h-3.84c-2.333 0-3.5 0-4.312-.725-.812-.724-1.017-1.949-1.427-4.397ZM7 7.5V7a5 5 0 0 1 10 0v.5m-12.5 10h15" />
              </svg>
            </div>
            {/* Exact pill badge border: 1.5px solid rgba(33,33,33,0.5); border-radius: 80px; */}
            <span className="ecomuz-cart-badge">0</span>
          </button>

          <button
            className={`ecomuz-burger-btn ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && <CartDrawer onClose={() => setCartOpen(false)} />}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <MenuOverlay
            onClose={() => setOpen(false)}
            onSelectCapability={handleSelectCapability}
          />
        )}
      </AnimatePresence>
    </>
  )
}

function CartDrawer({ onClose }) {
  return (
    <>
      <motion.div
        className="cart-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        className="cart-drawer"
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Shopping Cart Drawer"
      >
        <div className="cart-drawer__head">
          <div>
            <span className="eyebrow">Your Selection</span>
            <h3 className="h3 cart-drawer__title">Cart &amp; Inquiries</h3>
          </div>
          <button
            className="cart-drawer__close"
            onClick={onClose}
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>

        <div className="cart-drawer__body">
          <div className="cart-drawer__empty">
            <div className="cart-drawer__empty-icon">
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4.34 16.878 3.179 9.936c-.19-1.13-.284-1.694.007-2.065.292-.371.83-.371 1.906-.371H18.91c1.076 0 1.614 0 1.906.37.29.372.196.936.007 2.066l-1.163 6.942c-.41 2.448-.615 3.672-1.427 4.397S16.253 22 13.92 22h-3.84c-2.333 0-3.5 0-4.312-.725-.812-.724-1.017-1.949-1.427-4.397ZM7 7.5V7a5 5 0 0 1 10 0v.5m-12.5 10h15" />
              </svg>
            </div>
            <p className="cart-drawer__empty-title">Your bag is empty</p>
            <p className="body-sm cart-drawer__empty-desc">
              Select bespoke modular furniture or request an architectural consultation.
            </p>
            <a
              href="#collections"
              className="btn btn--ghost cart-drawer__cta"
              onClick={onClose}
            >
              Explore Collections
            </a>
          </div>
        </div>

        <div className="cart-drawer__foot">
          <div className="cart-drawer__summary-row">
            <span className="body-sm">Consultation</span>
            <span className="cart-drawer__free">Complimentary</span>
          </div>
          <a
            href="#contact"
            className="btn cart-drawer__submit"
            onClick={onClose}
          >
            Book Free Consultation &rarr;
          </a>
        </div>
      </motion.aside>
    </>
  )
}

function MenuOverlay({ onClose, onSelectCapability }) {
  const [capsExpanded, setCapsExpanded] = useState(true)

  return (
    <motion.div
      className="menu"
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      animate={{ clipPath: 'inset(0 0 0% 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div className="menu__grid">
        <div className="menu__list">
          {/* Home */}
          <div className="menu__line">
            <motion.a
              href="#top"
              onClick={onClose}
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              exit={{ y: '110%' }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              <span className="menu__index">01</span>
              Home
            </motion.a>
          </div>

          {/* Our Capabilities with accordion */}
          <div className="menu__line menu__line--capabilities">
            <div className="menu__caps-header">
              <motion.a
                href="#capabilities"
                onClick={onClose}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                exit={{ y: '110%' }}
                transition={{ duration: 0.65, delay: 0.22 }}
              >
                <span className="menu__index">02</span>
                Our Capabilities
              </motion.a>
              <button
                type="button"
                className="menu__caps-toggle"
                onClick={() => setCapsExpanded((v) => !v)}
                aria-label="Toggle capabilities list"
              >
                {capsExpanded ? '—' : '+'}
              </button>
            </div>

            {capsExpanded && (
              <motion.div
                className="menu__caps-sublist"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.35 }}
              >
                {capabilities.map((cap) => (
                  <a
                    key={cap.id}
                    href="#capabilities"
                    className="menu__cap-subitem"
                    onClick={() => {
                      onSelectCapability(cap.id)
                    }}
                  >
                    <span className="menu__cap-dot" />
                    <span className="menu__cap-name">{cap.title}</span>
                  </a>
                ))}
              </motion.div>
            )}
          </div>

          {/* About us */}
          <div className="menu__line">
            <motion.a
              href="#about"
              onClick={onClose}
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              exit={{ y: '110%' }}
              transition={{ duration: 0.65, delay: 0.3 }}
            >
              <span className="menu__index">03</span>
              About us
            </motion.a>
          </div>

          {/* Projects */}
          <div className="menu__line">
            <motion.a
              href="#projects"
              onClick={onClose}
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              exit={{ y: '110%' }}
              transition={{ duration: 0.65, delay: 0.38 }}
            >
              <span className="menu__index">04</span>
              Projects
            </motion.a>
          </div>
        </div>

        <motion.div
          className="menu__aside"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.45, duration: 0.6 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <div>
            <p className="eyebrow">Capabilities</p>
            <p className="body-sm">
              Bareshell Interior · Luxury Hotel Interior · Hospital Interior · Innovative Modular Furniture
            </p>
          </div>
          <div>
            <p className="eyebrow">Studio</p>
            <p className="body-sm">
              18 Prescott Row, London E1 6QL
              <br />
              hello@ecomuz.studio · +44 20 7946 0122
            </p>
          </div>
          <div className="menu__social">
            <a href="#contact" onClick={onClose} className="link-under">
              Instagram
            </a>
            <a href="#contact" onClick={onClose} className="link-under">
              Inquire
            </a>
            <a href="#contact" onClick={onClose} className="link-under">
              Catalog
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
