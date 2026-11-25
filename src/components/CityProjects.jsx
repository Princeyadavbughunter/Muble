import { useRef, useState, useEffect } from "react";
import { useScroll, useMotionValue, useMotionValueEvent, motion } from "framer-motion";
import "./cityProjects.css";

const CITIES = [
  "All",
  "Gurugram",
  "Delhi",
  "Noida",
  "Bangalore",
  "Faridabad",
  "Lucknow",
  "Udaipur",
  "Hubballi",
  "Bhopal",
  "Sonipat",
];
const VISIBLE = 3;
const GAP = 20;           // must match CSS gap
const H_PAD = 96;         // total horizontal padding (48px each side)
const SCROLL_PER_STEP = 160;

const ALL_PROJECTS = [
  // Gurgaon / Gurugram (1st)
  {
    id: 1,
    title: "Candor Techspace",
    city: "Gurugram",
    image: "/project/Candor techspace - Gurgaon.png",
  },
  {
    id: 2,
    title: "DLF Ltd",
    city: "Gurugram",
    image: "/project/DLF ltd  - Gurgaon.png",
  },
  {
    id: 3,
    title: "Medanta The Medicity",
    city: "Gurugram",
    image: "/project/Medanta - Gurgaon.png",
  },
  {
    id: 4,
    title: "Emaar Digital Greens",
    city: "Gurugram",
    image: "/project/eMAR DIGITAL GREEN - GUrgaon.png",
  },
  {
    id: 5,
    title: "Constl",
    city: "Gurugram",
    image: "/project/Constl - Gurgaon.png",
  },
  {
    id: 6,
    title: "Nirvasa Healthcare",
    city: "Gurugram",
    image: "/project/Nirvasa Healthcare - Gurgaon.png",
  },
  {
    id: 7,
    title: "CA Tushar Associate",
    city: "Gurugram",
    image: "/project/CA Tushar Associate - Gurgaon.png",
  },
  {
    id: 8,
    title: "Dermapuritys",
    city: "Gurugram",
    image: "/project/Dermapuritys - Gurgaon.png",
  },
  {
    id: 9,
    title: "Bright Co.",
    city: "Gurugram",
    image: "/project/bright co. - GURGAON.png",
  },
  {
    id: 10,
    title: "Plumage",
    city: "Gurugram",
    image: "/project/pLUMAGE - Gurgaon.png",
  },
  {
    id: 11,
    title: "Prag",
    city: "Gurugram",
    image: "/project/prag - Gurgaon.png",
  },

  // Delhi (2nd)
  {
    id: 12,
    title: "Automat Industries",
    city: "Delhi",
    image: "/project/Automat industries - Delhi.png",
  },

  // Noida (3rd)
  {
    id: 13,
    title: "Shoppers Stop",
    city: "Noida",
    image: "/project/shoppers stop - Noida.png",
  },
  {
    id: 14,
    title: "Digital Live Services",
    city: "Noida",
    image: "/project/Digital live Services - Noida.png",
  },

  // Other cities
  {
    id: 15,
    title: "Vision Studio",
    city: "Bangalore",
    image: "/project/vision Studio - Bangalore.png",
  },
  {
    id: 16,
    title: "Innovation Computech",
    city: "Faridabad",
    image: "/project/INNOvation computech - Faridabad.png",
  },
  {
    id: 17,
    title: "Medanta Hospital",
    city: "Lucknow",
    image: "/project/medanta lucknow.png",
  },
  {
    id: 18,
    title: "Nexa Service",
    city: "Udaipur",
    image: "/project/Nexa Service - Udaipur.png",
  },
  {
    id: 19,
    title: "Fives Digital",
    city: "Hubballi",
    image: "/project/Fives DIgital - HUBBALLI.png",
  },
  {
    id: 20,
    title: "Fives Digital",
    city: "Bhopal",
    image: "/project/Fives DIgital - BHopal.png",
  },
  {
    id: 21,
    title: "Crimsoune Club",
    city: "Sonipat",
    image: "/project/Crimsoune Club - SOnePAT.png",
  },
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
      : ALL_PROJECTS.filter((p) => {
          if (p.city.toLowerCase() === activeCity.toLowerCase()) return true;
          if (
            (activeCity.toLowerCase() === "gurugram" || activeCity.toLowerCase() === "gurgaon") &&
            (p.city.toLowerCase() === "gurugram" || p.city.toLowerCase() === "gurgaon")
          ) {
            return true;
          }
          return false;
        });

  const hiddenCount = Math.max(0, filtered.length - VISIBLE);
  const extraScroll = hiddenCount * SCROLL_PER_STEP;

  // Precise pixel shift: each hidden card = 1 card width + 1 gap
  const maxShiftPx = -(hiddenCount * (cardWidth + GAP));

  const x = useMotionValue(0);
  const maxProgressRef = useRef(0);
  const lastProgressRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const isScrollingDown = latest >= lastProgressRef.current;
    lastProgressRef.current = latest;

    // Reset when user scrolls all the way back to the top of this section
    if (latest <= 0.02) {
      maxProgressRef.current = 0;
      x.set(0);
      setCurrentStep(0);
      return;
    }

    if (isScrollingDown) {
      // Scrolling down (top to bottom): animate cards smoothly right to left
      maxProgressRef.current = Math.max(maxProgressRef.current, latest);
      x.set(maxProgressRef.current * maxShiftPx);
      setCurrentStep(Math.round(maxProgressRef.current * hiddenCount));
    } else {
      // Scrolling up (back): DO NOT scroll cards backwards horizontally
      // Cards stay at current position, allowing the page to scroll smoothly without horizontal movement
    }
  });

  function scrollToStep(step) {
    if (!outerRef.current) return;
    const sectionTop = outerRef.current.getBoundingClientRect().top + window.scrollY;
    const targetY = sectionTop + step * SCROLL_PER_STEP;
    const targetProgress = hiddenCount > 0 ? step / hiddenCount : 0;
    maxProgressRef.current = targetProgress;
    x.set(targetProgress * maxShiftPx);
    setCurrentStep(step);
    if (window.__lenis) window.__lenis.scrollTo(targetY, { duration: 0.7 });
    else window.scrollTo({ top: targetY, behavior: "smooth" });
  }

  function handleCityChange(city) {
    setActiveCity(city);
    setCurrentStep(0);
    maxProgressRef.current = 0;
    x.set(0);
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
        <div className="cp-tabbar-wrapper">
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
          </div>

          {hiddenCount > 0 && (
            <div className="cp-arrows">
              <button
                className={`cp-arrow ${currentStep === 0 ? "cp-arrow--disabled" : ""}`}
                onClick={() => scrollToStep(Math.max(currentStep - 1, 0))}
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className={`cp-arrow ${currentStep >= hiddenCount ? "cp-arrow--disabled" : ""}`}
                onClick={() => scrollToStep(Math.min(currentStep + 1, hiddenCount))}
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.city}`}
                    className="cp-img"
                    loading="lazy"
                  />
                </div>
                <div className="cp-card-info">
                  <p className="cp-card-title">{project.title}</p>
                  <span className="cp-card-location">{project.city}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
