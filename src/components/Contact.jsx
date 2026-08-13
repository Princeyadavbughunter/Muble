import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ctaImage, ctaAlt } from '../data/site'
import SplitText from '../ui/SplitText'
import Reveal from '../ui/Reveal'
import Parallax from '../ui/Parallax'
import Magnetic from '../ui/Magnetic'
import './contact.css'

const FIELDS = [
  { name: 'name', label: 'Your name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'place', label: 'Where is the room?', type: 'text', autoComplete: 'address-level2' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  // no backend here — wire this to your endpoint when you have one
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="contact__head">
          <Reveal>
            <span className="eyebrow">Contact</span>
          </Reveal>
          <h2 className="display contact__title">
            <SplitText text="Let’s begin" />
            <SplitText text="with a room" className="contact__line-2 italic" />
          </h2>
        </div>

        <div className="contact__grid">
          <div className="contact__media-wrap">
            <Parallax className="contact__media" amount={0.1}>
              <img src={ctaImage} alt={ctaAlt} />
            </Parallax>
          </div>

          <div className="contact__panel">
            <Reveal>
              <p className="body-lg contact__lede">
                Tell us a little about the space. We reply to every enquiry
                within two working days, and the first conversation costs
                nothing.
              </p>
            </Reveal>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  className="contact__done"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="h2">Thank you.</h3>
                  <p className="body-lg">
                    Your note is with the studio. Expect a reply from Nadia or
                    Tom within two working days.
                  </p>
                  <button className="link-under" onClick={() => setSent(false)}>
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="contact__form"
                  onSubmit={onSubmit}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  {FIELDS.map((f, i) => (
                    <Reveal key={f.name} delay={0.04 * i} className="field">
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type}
                        autoComplete={f.autoComplete}
                        placeholder=" "
                        required
                      />
                      <label htmlFor={f.name}>{f.label}</label>
                      <span className="field__line" />
                    </Reveal>
                  ))}

                  <Reveal delay={0.16} className="field field--area">
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="message">What are you hoping for?</label>
                    <span className="field__line" />
                  </Reveal>

                  <Reveal delay={0.2}>
                    <Magnetic strength={0.2}>
                      <button className="btn" type="submit">
                        Send enquiry
                        <span className="btn-arrow">→</span>
                      </button>
                    </Magnetic>
                  </Reveal>
                </motion.form>
              )}
            </AnimatePresence>

            <div className="contact__direct">
              <div>
                <p className="eyebrow">Or write to us</p>
                <a className="contact__mail" href="mailto:hello@muble.studio">
                  hello@muble.studio
                </a>
              </div>
              <div>
                <p className="eyebrow">Studio</p>
                <p className="body-sm">
                  18 Prescott Row, London E1 6QL
                  <br />
                  Mon–Fri, 9–6
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
