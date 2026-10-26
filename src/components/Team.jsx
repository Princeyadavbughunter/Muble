import "./team.css";

const TEAM = [
  {
    id: "ceo",
    name: "Arjun Mehta",
    role: "Founder & CEO",
    img: "/team_arjun.jpg",
  },
  {
    id: "design",
    name: "Priya Sharma",
    role: "Principal Designer",
    img: "/team_priya.jpg",
  },
  {
    id: "pm",
    name: "Rohit Kapoor",
    role: "Project Director",
    img: "/team_rohit.jpg",
  },
];

export default function Team() {
  return (
    <section className="team-section" id="team">

      {/* ── Left: person cards ── */}
      <div className="team-cards">
        {TEAM.map((member, i) => (
          <div key={member.id} className="team-card" style={{ "--delay": `${i * 0.08}s` }}>
            {/* Portrait Image container */}
            <div className="team-avatar">
              <img
                src={member.img}
                alt={member.name}
                className="team-avatar-img"
                loading="lazy"
              />
              {/* Subtle gradient vignette at bottom */}
              <div className="team-avatar-vignette" />
              {/* Decorative accent bar at bottom */}
              <div className="team-avatar-bar" />
            </div>

            {/* Info */}
            <div className="team-info">
              <span className="team-role">{member.role}</span>
              <h3 className="team-name">{member.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* ── Right: dark info panel ── */}
      <div className="team-panel">
        <span className="team-panel-eyebrow">Our People</span>
        <h2 className="team-panel-title">Meet the Experts</h2>
        <p className="team-panel-desc">
          Every Muble project is led by experienced architects, interior
          designers, and project specialists who bring precision, passion,
          and a deep understanding of space to every engagement.
        </p>
        <div className="team-panel-stats">
          <div className="team-stat">
            <span className="team-stat-num">15+</span>
            <span className="team-stat-label">Years Combined Experience</span>
          </div>
          <div className="team-stat-divider" />
          <div className="team-stat">
            <span className="team-stat-num">200+</span>
            <span className="team-stat-label">Projects Delivered</span>
          </div>
        </div>
        <button className="team-panel-cta">
          Work With Us
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

    </section>
  );
}
