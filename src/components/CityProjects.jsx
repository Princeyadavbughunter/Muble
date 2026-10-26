import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";
import "./cityProjects.css";

const CITIES = ["All", "Noida", "Delhi", "Gurugram"];
const VISIBLE = 3;
const GAP = 20;           // must match CSS gap
const H_PAD = 96;         // total horizontal padding (48px each side)
const SCROLL_PER_STEP = 380;

const ALL_PROJECTS = [
  { id: 1, title: "Corporate HQ Fit-Out",    city: "Gurugram", image: "/bareshell_interior.jpg" },
  { id: 2, title: "Luxury Hotel Suite",       city: "Delhi",    image: "/hotel_interior.jpg" },
  { id: 3, title: "Modular Office Campus",    city: "Noida",    image: "/modular_furniture.jpg" },
  { id: 4, title: "Medical Centre Interiors", city: "Gurugram", image: "/hospital_interior.jpg" },
  { id: 5, title: "Premium Workspace Design", city: "Delhi",    image: "/hero_living_slats.jpg" },
  { id: 6, title: "Residential Tower Lobby",  city: "Noida",    image: "/hero_living_angle2.jpg" },
];

function getCardWidth() {
  // container = viewport - padding; card = (container - 2 gaps) / 3
  const container = window.innerWidth - H_PAD;
  return (container - GAP * (VISIBLE - 1)) / VISIBLE;
}

export default function CityProjects() {
  const [activeCity, setActiveCity] = useState("All");
  const [currentStep, setCurrentStep] = useState(0);
  const [cardWidth, setCardWidth] = useState(getCardWidth);
  const outerRef = useRef(null);

  // Recalculate on resize
  useEffect(() => {
    function onResize() { setCardWidth(getCardWidth()); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const filtered =
    activeCity === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.city === activeCity);

  const hiddenCount = Math.max(0, filtered.length - VISIBLE);
  const extraScroll = hiddenCount * SCROLL_PER_STEP;

  // Precise pixel shift: each hidden card = 1 card width + 1 gap
  const maxShiftPx = -(hiddenCount * (cardWidth + GAP));

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, maxShiftPx]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setCurrentStep(Math.round(v * hiddenCount));
  });

  function scrollToStep(step) {
    if (!outerRef.current) return;
    const sectionTop = outerRef.current.getBoundingClientRect().top + window.scrollY;
    const targetY = sectionTop + step * SCROLL_PER_STEP;
    if (window.__lenis) window.__lenis.scrollTo(targetY, { duration: 0.9 });
    else window.scrollTo({ top: targetY, behavior: "smooth" });
  }

  function handleCityChange(city) {
    setActiveCity(city);
    setCurrentStep(0);
    if (outerRef.current) {
      const top = outerRef.current.getBoundingClientRect().top + window.scrollY;
      if (window.__lenis) window.__lenis.scrollTo(top, { duration: 0.6 });
      else window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <div
      ref={outerRef}
      className="cp-outer"
      id="city-projects"
      style={{ height: `calc(100vh + ${extraScroll}px)` }}
    >
      <div className="cp-sticky">

        {/* Header */}
        <div className="cp-top">
          <span className="cp-eyebrow">Recently Completed Projects</span>
          <h2 className="cp-title">
            Spaces we have <span className="cp-title-light">built across cities</span>
          </h2>
        </div>

        {/* Tab Bar + Arrows */}
        <div className="cp-tabbar">
          {CITIES.map((city) => (
            <button
              key={city}
              className={`cp-tab ${activeCity === city ? "cp-tab--active" : ""}`}
              onClick={() => handleCityChange(city)}
            >
              {city}
            </button>
          ))}

          {hiddenCount > 0 && (
            <div className="cp-arrows">
              <button
                className={`cp-arrow ${currentStep === 0 ? "cp-arrow--disabled" : ""}`}
                onClick={() => scrollToStep(Math.max(currentStep - 1, 0))}
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className={`cp-arrow ${currentStep >= hiddenCount ? "cp-arrow--disabled" : ""}`}
                onClick={() => scrollToStep(Math.min(currentStep + 1, hiddenCount))}
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Scroll-driven track */}
        <div className="cp-track-container">
          <motion.div className="cp-track" style={{ x }}>
            {filtered.map((project) => (
              <div
                key={project.id}
                className="cp-card"
                style={{ width: cardWidth, flexShrink: 0 }}
              >
                <div className="cp-img-wrap">
                  <img src={project.image} alt={project.title} className="cp-img" loading="lazy" />
                </div>
                <p className="cp-card-title">{project.title}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        {hiddenCount > 0 && (
          <div className="cp-dots">
            {Array.from({ length: hiddenCount + 1 }).map((_, i) => (
              <button
                key={i}
                className={`cp-dot ${i === currentStep ? "cp-dot--active" : ""}`}
                onClick={() => scrollToStep(i)}
                aria-label={`Step ${i + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
