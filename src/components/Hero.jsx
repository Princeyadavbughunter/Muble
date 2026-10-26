import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './hero.css'

// =========================================================================
// CLIENT VIDEO CONFIGURATION:
// When client gives the video (e.g. hero_video.mp4), place it in /public
// and set CLIENT_VIDEO_URL = '/hero_video.mp4'.
// While null, the high-resolution photo auto-slideshow will play seamlessly.
// =========================================================================
const CLIENT_VIDEO_URL = null

const SCENES = [
  {
    id: 'scene-1',
    title: 'Modern Living (Slats & Sofa)',
    image: '/hero_living_slats.jpg',
    alt: 'Calm modern living room with fluted oak timber slats and modular cream sofa',
  },
  {
    id: 'scene-2',
    title: 'Modern Living (Wide Angle)',
    image: '/hero_living_angle2.jpg',
    alt: 'Architectural living room with wide view of modular sofa and light oak coffee table',
  },
]

export default function Hero({ ready }) {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0)
  const timerRef = useRef(null)

  // Right side 2 photos automatically switch every 5 seconds
  useEffect(() => {
    if (CLIENT_VIDEO_URL) return // if video is active, no need to auto-switch photos

    const startAutoSlide = () => {
      timerRef.current = setInterval(() => {
        setActiveSceneIndex((prev) => (prev + 1) % SCENES.length)
      }, 5000)
    }

    startAutoSlide()

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const handleSelectScene = (index) => {
    setActiveSceneIndex(index)
    // reset timer so user gets full 5 seconds on chosen slide
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = setInterval(() => {
        setActiveSceneIndex((prev) => (prev + 1) % SCENES.length)
      }, 5000)
    }
  }

  const activeScene = SCENES[activeSceneIndex]

  return (
    <section className="hero-fullscreen" id="top">
      <span id="capabilities" className="capabilities-anchor" aria-hidden="true" />

      {/* Fullscreen Media Background (Video ready + Auto-switching Photo fallback) */}
      <div className="hero-bg-wrapper">
        <AnimatePresence mode="wait">
          {CLIENT_VIDEO_URL ? (
            <video
              key="client-hero-video"
              autoPlay
              loop
              muted
              playsInline
              poster={activeScene.image}
              className="hero-bg-media hero-bg-video"
            >
              <source src={CLIENT_VIDEO_URL} type="video/mp4" />
            </video>
          ) : (
            <motion.img
              key={activeScene.id}
              src={activeScene.image}
              alt={activeScene.alt}
              className="hero-bg-media hero-bg-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
        </AnimatePresence>

        {/* Ambient subtle vignette to ensure left text is 100% crisp and readable */}
        <div className="hero-bg-gradient" />
      </div>

      {/* Main Content Area (Left aligned, matching reference screenshot) */}
      <div className="hero-content-container">
        <motion.div
          className="hero-left-copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="hero-title-modern">
            Designed for
            <br />
            modern living
          </h1>

          <p className="hero-subtitle-modern">
            Furniture that turns a house into a calm, modern home you&apos;ll
            love coming back to every single day
          </p>

          <div className="hero-cta-wrapper">
            <a href="#collections" className="hero-btn-white">
              Shop now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Floating Preview Thumbnails (Auto-switching & Clickable) */}
      <motion.div
        className="hero-right-thumbs"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Scene previews"
      >
        {SCENES.map((scene, idx) => {
          const isActive = idx === activeSceneIndex
          return (
            <button
              key={scene.id}
              type="button"
              className={`hero-thumb-card ${isActive ? 'is-active' : ''}`}
              onClick={() => handleSelectScene(idx)}
              aria-label={`View ${scene.title}`}
              title={scene.title}
            >
              <img src={scene.image} alt={scene.title} loading="lazy" />
              {isActive && (
                <motion.div
                  className="hero-thumb-progress"
                  layoutId="thumbActiveRing"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          )
        })}
      </motion.div>
    </section>
  )
}
