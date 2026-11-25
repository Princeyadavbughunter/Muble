import "./clientele.css";

const ROW_1 = [
  { id: "zomato", name: "Zomato", logo: "/clients/zomato.png" },
  { id: "swiggy", name: "Swiggy", logo: "/clients/swiggy.png" },
  { id: "hdfc_bank", name: "HDFC Bank", logo: "/clients/hdfc_bank.png" },
  { id: "axis_bank", name: "Axis Bank", logo: "/clients/axis_bank.png" },
  { id: "kotak", name: "Kotak", logo: "/clients/kotak.png" },
  { id: "indiamart", name: "IndiaMart", logo: "/clients/indiamart.png" },
  { id: "justdial", name: "JustDial", logo: "/clients/justdial.png" },
  { id: "samsung", name: "Samsung", logo: "/clients/samsung.png" },
  { id: "maruti_suzuki", name: "Maruti Suzuki", logo: "/clients/maruti_suzuki.png" },
  { id: "nexa", name: "NEXA", logo: "/clients/nexa.png" },
  { id: "indigo", name: "IndiGo", logo: "/clients/indigo.png" },
  { id: "medanta", name: "Medanta", logo: "/clients/medanta.png" },
  { id: "dlf", name: "DLF", logo: "/clients/dlf.png" },
  { id: "m3m_ifc", name: "M3M IFC", logo: "/clients/M3M IFC Corporate Logo.png" },
  { id: "maersk", name: "Maersk", logo: "/clients/maersk.png" },
  { id: "jll", name: "JLL", logo: "/clients/jll.png" },
  { id: "vip", name: "VIP", logo: "/clients/vip.png" },
  { id: "swiss", name: "Swiss", logo: "/clients/swiss.png" },
];

const ROW_2 = [
  { id: "bodycraft", name: "Bodycraft", logo: "/clients/bodycraft.png" },
  { id: "automat", name: "Automat", logo: "/clients/automat.png" },
  { id: "candor", name: "Candor", logo: "/clients/candor.png" },
  { id: "airvasa", name: "Airvasa", logo: "/clients/airvasa.png" },
  { id: "e_international", name: "E International", logo: "/clients/e_international.png" },
  { id: "five_s_digital", name: "5S Digital", logo: "/clients/five_s_digital.png" },
  { id: "dermapuritys", name: "Dermapuritys", logo: "/clients/dermapuritys.png" },
  { id: "digital_live_services", name: "Digital Live Services", logo: "/clients/digital_live_services.png" },
  { id: "hira_sweets", name: "Hira Sweets", logo: "/clients/hira_sweets.png" },
  { id: "icarda", name: "ICARDA", logo: "/clients/icarda.png" },
  { id: "louis_berger", name: "Louis Berger", logo: "/clients/louis_berger.png" },
  { id: "mgf_metropolitan", name: "MGF Metropolitan", logo: "/clients/mgf_metropolitan.png" },
  { id: "ocean", name: "Ocean", logo: "/clients/ocean.png" },
  { id: "personiv", name: "Personiv", logo: "/clients/personiv.png" },
  { id: "rostfrei_steels", name: "Rostfrei Steels", logo: "/clients/rostfrei_steels.png" },
  { id: "trade_india", name: "Trade India", logo: "/clients/trade_india.png" },
  { id: "united", name: "United", logo: "/clients/united.png" },
  { id: "xl_laboratories", name: "XL Laboratories", logo: "/clients/xl_laboratories.png" },
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
              <img
                src={c.logo}
                alt={c.name}
                className="clientele-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Row 2 — Moving Right to Left */}
        <div className="clientele-marquee-track track-row-2">
          {ROW_2_SEAMLESS.map((c, i) => (
            <div key={`${c.id}-2-${i}`} className="clientele-logo-box">
              <img
                src={c.logo}
                alt={c.name}
                className="clientele-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
