import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./contact.css";

const FIELDS = [
  { name: "name", label: "Your name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "place", label: "Where is the room?", type: "text", autoComplete: "address-level2" },
  { name: "message", label: "What are you hoping for?", type: "text", autoComplete: "off" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrap">

        {/* Section Header */}
        <div className="contact-header">
          <span className="contact-eyebrow">CONTACT</span>
          <h2 className="contact-title">
            <span className="contact-title-line1">Let’s begin</span>
            <span className="contact-title-line2">with a room</span>
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="contact-grid">

          {/* Left: Sticky Living Room Photo */}
          <div className="contact-media-wrap">
            <div className="contact-media">
              <img
                src="/cta_living.jpg"
                alt="A warm living room with coffee table and modern seating"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Panel & Form */}
          <div className="contact-panel">
            <p className="contact-lede">
              Tell us a little about the space. We reply to every enquiry within two working days, and the first conversation costs nothing.
            </p>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  className="contact-done"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="contact-done-title">Thank you.</h3>
                  <p className="contact-done-desc">
                    Your note is with the studio. Expect a reply within two working days.
                  </p>
                  <button className="contact-btn-reset" onClick={() => setSent(false)}>
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={onSubmit}>
                  {FIELDS.map((f) => (
                    <div key={f.name} className="contact-field">
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type}
                        autoComplete={f.autoComplete}
                        placeholder=" "
                        required
                      />
                      <label htmlFor={f.name}>{f.label}</label>
                      <span className="contact-field-line" />
                    </div>
                  ))}

                  <div className="contact-submit-wrap">
                    <button className="contact-btn-submit" type="submit">
                      <span>SEND ENQUIRY</span>
                      <span className="contact-btn-arrow">→</span>
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>

            {/* Direct Studio Contact Info */}
            <div className="contact-direct">
              <div className="contact-direct-col">
                <span className="contact-direct-eyebrow">OR WRITE TO US</span>
                <a className="contact-mail-link" href="mailto:hello@muble.studio">
                  hello@muble.studio
                </a>
              </div>

              <div className="contact-direct-col">
                <span className="contact-direct-eyebrow">STUDIO</span>
                <p className="contact-studio-address">
                  18 Prescott Row, London E1 6QL<br />
                  Mon–Fri, 9–6
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
