import "./capabilities.css";

const CAPABILITIES = [
  {
    id: "bareshell",
    number: "01",
    label: "Our Capabilities",
    title: "Bareshell Office Transformation",
    desc: "We convert raw concrete shells into world-class workspaces. From MEP planning and false ceiling systems to premium flooring and bespoke joinery — every millimetre is precision-crafted for your brand.",
    tags: ["Turnkey Execution", "Corporate Fit-Out", "Modular Systems"],
    image: "/bareshell_interior.jpg",
  },
  {
    id: "modular",
    number: "02",
    label: "Our Capabilities",
    title: "Innovative Modular Furniture",
    desc: "Purpose-built modular furniture systems that evolve with your space. Precision-engineered in our in-house workshop, each piece balances structural integrity with refined aesthetics.",
    tags: ["Custom Fabrication", "Ergonomic Design", "In-House Workshop"],
    image: "/modular_furniture.jpg",
  },
  {
    id: "spaceplanning",
    number: "03",
    label: "Our Capabilities",
    title: "Space Planning Expert",
    desc: "Strategic space planning that maximises flow, function, and feeling. We map every square foot to deliver environments that inspire productivity, comfort, and a lasting sense of place.",
    tags: ["3D Visualization", "Workflow Mapping", "Zoning Strategy"],
    image: "/hotel_interior.jpg",
  },
];

export default function Capabilities() {
  return (
    <section className="cap-section" id="capabilities">
      {CAPABILITIES.map((cap) => (
        <div key={cap.id} className={`cap-card cap-card--${cap.id}`}>
          <div className="cap-text">
            <span className="cap-eyebrow">{cap.label}</span>
            <span className="cap-number">{cap.number}</span>
            <h2 className="cap-title">{cap.title}</h2>
            <p className="cap-desc">{cap.desc}</p>
            <ul className="cap-tags">
              {cap.tags.map((t) => (
                <li key={t} className="cap-tag">{t}</li>
              ))}
            </ul>
            <button className="cap-cta">
              Explore
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="cap-img-wrap">
            <img src={cap.image} alt={cap.title} className="cap-img" loading="lazy" />
          </div>
        </div>
      ))}
    </section>
  );
}
