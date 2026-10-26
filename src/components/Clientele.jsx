import "./clientele.css";

const ROW_1 = [
  {
    id: "pepsico",
    name: "PepsiCo",
    render: () => (
      <div className="client-logo-item" title="PepsiCo">
        <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" fill="#004B93" />
          <path d="M 2 50 A 48 48 0 0 1 98 50 C 75 50 65 30 50 30 C 35 30 25 50 2 50 Z" fill="#E32934" />
          <path d="M 2 50 A 48 48 0 0 0 98 50 C 75 50 65 68 50 68 C 35 68 25 50 2 50 Z" fill="#FFFFFF" />
        </svg>
        <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.5px", color: "#004B93", fontFamily: "'Public Sans', sans-serif" }}>
          PEPSICO
        </span>
      </div>
    ),
  },
  {
    id: "razorpay",
    name: "Razorpay",
    render: () => (
      <div className="client-logo-item" title="Razorpay">
        <svg width="24" height="28" viewBox="0 0 60 72" fill="none">
          <path d="M12 0 L48 0 L32 28 L56 28 L8 72 L20 38 L4 38 Z" fill="#0c6cf2" />
        </svg>
        <span style={{ fontWeight: 800, fontSize: 21, fontStyle: "italic", letterSpacing: "-0.8px", color: "#0c2340", fontFamily: "'Public Sans', sans-serif" }}>
          Razorpay
        </span>
      </div>
    ),
  },
  {
    id: "wns",
    name: "WNS",
    render: () => (
      <div className="client-logo-item" title="WNS Global Services">
        <span style={{ fontWeight: 900, fontSize: 26, letterSpacing: "1px", color: "#111111", fontFamily: "'Public Sans', sans-serif", display: "inline-flex", alignItems: "baseline" }}>
          W<span style={{ color: "#e31837" }}>N</span>S
        </span>
      </div>
    ),
  },
  {
    id: "hdfc",
    name: "HDFC Bank",
    render: () => (
      <div className="client-logo-item" title="HDFC Bank" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        <div style={{ background: "#004c8f", color: "#fff", padding: "5px 10px", borderRadius: 4, display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" fill="#004c8f" rx="3" />
            <rect x="5" y="5" width="30" height="30" fill="#ffffff" />
            <rect x="14" y="5" width="12" height="30" fill="#004c8f" />
            <rect x="5" y="14" width="30" height="12" fill="#004c8f" />
            <rect x="14" y="14" width="12" height="12" fill="#ed1c24" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span style={{ fontWeight: 900, fontSize: 13, letterSpacing: "0.5px", color: "#fff" }}>HDFC BANK</span>
            <span style={{ fontSize: 7, opacity: 0.9, color: "#fff", letterSpacing: "-0.2px" }}>We understand your world</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "techm",
    name: "Tech Mahindra",
    render: () => (
      <div className="client-logo-item" title="Tech Mahindra" style={{ display: "inline-flex", flexDirection: "column", lineHeight: 0.95 }}>
        <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: "0.5px", color: "#333333" }}>Tech</span>
        <span style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.5px", color: "#e31837" }}>Mahindra</span>
      </div>
    ),
  },
  {
    id: "r1",
    name: "R1",
    render: () => (
      <div className="client-logo-item" title="R1 RCM">
        <span style={{ fontWeight: 900, fontSize: 32, letterSpacing: "-1px", color: "#004b98", fontFamily: "'Public Sans', sans-serif" }}>
          R1<span style={{ color: "#0085d0" }}>.</span>
        </span>
      </div>
    ),
  },
  {
    id: "genpact",
    name: "Genpact",
    render: () => (
      <div className="client-logo-item" title="Genpact" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
          <path d="M20 2 L36 11 L36 29 L20 38 L4 29 L4 11 Z" fill="#e84a5f" />
          <path d="M20 2 L36 11 L20 20 L4 11 Z" fill="#ff7582" />
          <path d="M20 20 L36 11 L36 29 L20 38 Z" fill="#2b580c" opacity="0.3" />
          <path d="M20 20 L4 11 L4 29 L20 38 Z" fill="#004b98" opacity="0.4" />
        </svg>
        <span style={{ fontWeight: 700, fontSize: 19, letterSpacing: "-0.5px", color: "#2d7abf", fontFamily: "'Public Sans', sans-serif" }}>
          genpact
        </span>
      </div>
    ),
  },
];

const ROW_2 = [
  {
    id: "ibm",
    name: "IBM",
    render: () => (
      <div className="client-logo-item" title="IBM">
        <svg width="50" height="22" viewBox="0 0 100 44" fill="#1f70c1">
          <rect y="0" width="100" height="3" />
          <rect y="6" width="100" height="3" />
          <rect y="12" width="100" height="3" />
          <rect y="18" width="100" height="3" />
          <rect y="24" width="100" height="3" />
          <rect y="30" width="100" height="3" />
          <rect y="36" width="100" height="3" />
          <rect y="42" width="100" height="3" />
        </svg>
      </div>
    ),
  },
  {
    id: "tcs",
    name: "TCS",
    render: () => (
      <div className="client-logo-item" title="Tata Consultancy Services">
        <span style={{ fontWeight: 900, fontSize: 30, letterSpacing: "-1px", fontFamily: "'Public Sans', sans-serif", background: "linear-gradient(90deg, #e31b23, #ff6a00, #9b26af)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          tcs
        </span>
      </div>
    ),
  },
  {
    id: "lg",
    name: "LG",
    render: () => (
      <div className="client-logo-item" title="LG" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
        <svg width="26" height="26" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="19" fill="#a50034" />
          <circle cx="14" cy="16" r="2.5" fill="#ffffff" />
          <path d="M 27 15 L 20 15 L 20 26 L 27 26" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontWeight: 800, fontSize: 20, color: "#666", letterSpacing: "1px" }}>LG</span>
      </div>
    ),
  },
  {
    id: "nykaa",
    name: "Nykaa",
    render: () => (
      <div className="client-logo-item" title="Nykaa">
        <span style={{ fontWeight: 900, fontSize: 23, fontStyle: "italic", letterSpacing: "1.2px", color: "#fc2779", fontFamily: "'Public Sans', sans-serif" }}>
          NYKAA
        </span>
      </div>
    ),
  },
  {
    id: "nestle",
    name: "Nestlé",
    render: () => (
      <div className="client-logo-item" title="Nestle" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
        <svg width="24" height="22" viewBox="0 0 60 50" fill="#4d7298">
          <ellipse cx="30" cy="38" rx="28" ry="10" fill="#718ba7" opacity="0.6"/>
          <path d="M15 25 Q30 5 45 25 Q30 35 15 25 Z" fill="#4d7298"/>
          <circle cx="25" cy="18" r="4" fill="#ffffff"/>
        </svg>
        <span style={{ fontWeight: 700, fontSize: 17, color: "#4d7298", letterSpacing: "0.2px" }}>Nestlé</span>
      </div>
    ),
  },
  {
    id: "wipro",
    name: "Wipro",
    render: () => (
      <div className="client-logo-item" title="Wipro" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
        <svg width="26" height="26" viewBox="0 0 40 40">
          <circle cx="20" cy="8" r="3" fill="#e81123" />
          <circle cx="28" cy="12" r="3" fill="#ff8c00" />
          <circle cx="32" cy="20" r="3" fill="#ffc83b" />
          <circle cx="28" cy="28" r="3" fill="#107c10" />
          <circle cx="20" cy="32" r="3" fill="#008272" />
          <circle cx="12" cy="28" r="3" fill="#0078d7" />
          <circle cx="8" cy="20" r="3" fill="#4b3869" />
          <circle cx="12" cy="12" r="3" fill="#b4009e" />
          <circle cx="20" cy="20" r="3.5" fill="#32145a" />
        </svg>
        <span style={{ fontWeight: 700, fontSize: 17, color: "#22194d", letterSpacing: "0.5px" }}>wipro</span>
      </div>
    ),
  },
  {
    id: "idfc",
    name: "IDFC FIRST Bank",
    render: () => (
      <div className="client-logo-item" title="IDFC FIRST Bank">
        <div style={{ background: "#9c1d26", color: "#fff", padding: "5px 10px", borderRadius: 4, display: "inline-flex", alignItems: "center", gap: 7 }}>
          <div style={{ border: "1.5px solid #fff", width: 15, height: 15, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ background: "#fff", width: 6, height: 6 }} />
          </div>
          <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.5px" }}>IDFC FIRST Bank</span>
        </div>
      </div>
    ),
  },
  {
    id: "maruti",
    name: "Maruti Suzuki",
    render: () => (
      <div className="client-logo-item" title="Maruti Suzuki" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
        <svg width="22" height="22" viewBox="0 0 40 40" fill="#2d3748">
          <path d="M8 6 L32 6 L20 20 L32 34 L8 34 L20 20 Z" fill="#4a5568" />
        </svg>
        <span style={{ fontWeight: 900, fontSize: 15, letterSpacing: "1.5px", color: "#2d3748" }}>MARUTI</span>
      </div>
    ),
  },
];

// Duplicate for infinite seamless scroll
const ROW_1_SEAMLESS = [...ROW_1, ...ROW_1, ...ROW_1];
const ROW_2_SEAMLESS = [...ROW_2, ...ROW_2, ...ROW_2];

export default function Clientele() {
  return (
    <section className="clientele-section" id="clientele">

      {/* Header aligned with page grid */}
      <div className="clientele-header-wrap">
        <span className="clientele-eyebrow">CLIENTELE</span>
        <h2 className="clientele-title">
          Trusted by 100+ Companies across the Globe
        </h2>
      </div>

      {/* Full Bleed Right-to-Left Infinite Marquee */}
      <div className="clientele-ticker-wrapper">

        {/* Row 1 — Moving Right to Left */}
        <div className="clientele-marquee-track track-row-1">
          {ROW_1_SEAMLESS.map((c, i) => (
            <div key={`${c.id}-1-${i}`} className="clientele-logo-box">
              {c.render()}
            </div>
          ))}
        </div>

        {/* Row 2 — Moving Right to Left */}
        <div className="clientele-marquee-track track-row-2">
          {ROW_2_SEAMLESS.map((c, i) => (
            <div key={`${c.id}-2-${i}`} className="clientele-logo-box">
              {c.render()}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
