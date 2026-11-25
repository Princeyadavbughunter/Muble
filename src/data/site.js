// Central content source — edit copy & imagery here, nothing else needs to change.

const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const collections = [
  {
    id: 'living',
    index: '01',
    name: 'The Living Room',
    tagline: 'Low seating, long afternoons',
    text: 'Deep-seated sofas in bouclé and undyed linen, built on solid oak frames that outlive their trends.',
    image: img('photo-1555041469-a586c61ea9bc'),
    alt: 'A deep green velvet sofa on a pale oak floor',
    pieces: '24 pieces',
  },
  {
    id: 'dining',
    index: '02',
    name: 'The Dining Room',
    tagline: 'Where the evening slows',
    text: 'Single-slab walnut tables, hand-finished with a soft oil that keeps the grain awake to the light.',
    image: img('photo-1522708323590-d24dbb6b0267'),
    alt: 'A dining table laid with glassware in afternoon light',
    pieces: '16 pieces',
  },
  {
    id: 'seating',
    index: '03',
    name: 'Chairs & Occasional',
    tagline: 'The quiet character piece',
    text: 'Sculptural silhouettes that hold a corner without raising their voice. Caning, leather, tanned canvas.',
    image: img('photo-1567538096630-e0c55bd6374c'),
    alt: 'A buttoned occasional chair against a pale wall',
    pieces: '31 pieces',
  },
  {
    id: 'bedroom',
    index: '04',
    name: 'The Bedroom',
    tagline: 'Built for the last hour of the day',
    text: 'Upholstered headboards, low platforms, and storage that disappears into the architecture.',
    image: img('photo-1531835551805-16d864c8d311'),
    alt: 'A low bed with linen bedding beneath a row of framed prints',
    pieces: '19 pieces',
  },
  {
    id: 'light',
    index: '05',
    name: 'Light & Objects',
    tagline: 'The finishing sentence',
    text: 'Alabaster, brushed brass and paper shades — the layer that turns a room into a place.',
    image: img('photo-1540932239986-30128078f3c5'),
    alt: 'Three brushed brass pendant shades hung at staggered heights',
    pieces: '42 pieces',
  },
]

export const projects = [
  {
    id: 'p1',
    title: 'Ashcombe House',
    place: 'Cotswolds, UK',
    year: '2025',
    scope: 'Full interior architecture',
    image: img('photo-1616486338812-3dadae4b4ace', 1800),
  },
  {
    id: 'p2',
    title: 'Marlow Penthouse',
    place: 'London, UK',
    year: '2025',
    scope: 'Furniture & styling',
    image: img('photo-1600607687939-ce8a6c25118c', 1800),
  },
  {
    id: 'p3',
    title: 'Casa Ferrer',
    place: 'Menorca, ES',
    year: '2024',
    scope: 'Interiors & bespoke joinery',
    image: img('photo-1600210492486-724fe5c67fb0', 1800),
  },
  {
    id: 'p4',
    title: 'The Linden Loft',
    place: 'Copenhagen, DK',
    year: '2024',
    scope: 'Concept & furnishing',
    image: img('photo-1615529182904-14819c35db37', 1800),
  },
]

export const process = [
  {
    n: '01',
    title: 'Conversation',
    body: 'We start in your space, not on a moodboard. How you move through a room tells us more than any brief ever could.',
  },
  {
    n: '02',
    title: 'Composition',
    body: 'Plans, elevations and material boards. You see the room in full — proportion, palette and light — before a single piece is ordered.',
  },
  {
    n: '03',
    title: 'Craft',
    body: 'Our workshop and a small circle of makers build to the drawing. Every joint is signed off by hand, not by machine.',
  },
  {
    n: '04',
    title: 'Placement',
    body: 'We install everything ourselves, down to the last object, and leave only when the room reads as one thought.',
  },
]

export const testimonials = [
  {
    quote:
      'They understood the house better than we did. Two years on, nothing feels like a decision we would take back.',
    name: 'Elena & Marcus Reyes',
    meta: 'Ashcombe House',
  },
  {
    quote:
      'Restraint is the rarest thing to buy. Muble sold us less than we asked for, and the rooms are better for it.',
    name: 'Priya Raghunathan',
    meta: 'Marlow Penthouse',
  },
  {
    quote:
      'Every piece arrived like it had already been living there. That is the whole trick, and they make it look simple.',
    name: 'Joan Ferrer',
    meta: 'Casa Ferrer',
  },
]

export const philosophyImages = {
  tall: img('photo-1586023492125-27b2c045efd7', 1200),
  tallAlt: 'An upholstered armchair beside a floor lamp and a framed print',
  wide: img('photo-1616627561950-9f746e330187', 1000),
  wideAlt: 'A close view of striped linen bedding and a tan leather cushion',
}

export const heroImage = '/hero_wood_slats.jpg'
export const heroAlt =
  'Warm architectural interior with vertical oak acoustic slats and minimalist luxury seating'

export const ctaImage = img('photo-1618221195710-dd6b41faaea6', 1400)
export const ctaAlt = 'A warm living room in late afternoon light'

export const capabilities = [
  {
    id: 'bareshell',
    title: 'Bareshell Interior',
    slug: 'bareshell-interior',
    tagline: 'Raw to Turnkey Civil & Architectural Execution',
    summary: 'Transforming structural bare shells into bespoke turnkey spaces. Complete MEP engineering, structural joinery, sound isolation, and high-precision architectural fitouts.',
    metrics: [
      { label: 'Delivered', val: '250K+ sq.ft' },
      { label: 'Scope', val: 'Turnkey Civil' },
      { label: 'Standard', val: 'Grade-A Prime' },
    ],
    image: '/slider/silder 1.png',
    alt: 'Bareshell interior undergoing architectural transformation with concrete and oak fluted walls',
  },
  {
    id: 'luxury-hotel',
    title: 'Luxury Hotel Interior',
    slug: 'luxury-hotel-interior',
    tagline: 'Five-Star Hospitality Suites & Signature Lounges',
    summary: 'Bespoke hotel environments that command presence. Acoustic fluted timber walls, integrated mood lighting, custom low seating, and master joinery for international luxury hospitality.',
    metrics: [
      { label: 'Suites', val: '40+ Completed' },
      { label: 'Panelling', val: 'Acoustic Fluted' },
      { label: 'Rating', val: '5-Star Hospitality' },
    ],
    image: '/hotel_interior.jpg',
    alt: 'Luxury hotel lounge with warm vertical wood slats and marble table',
  },
  {
    id: 'hospital',
    title: 'Hospital Interior',
    slug: 'hospital-interior',
    tagline: 'Clinical Precision Meets Biophilic Healing Sanctuaries',
    summary: 'Elevating healthcare architecture through tranquil biophilic design, curved timber contours, sterile-grade surfaces, and calming natural illumination that supports recovery.',
    metrics: [
      { label: 'Sterility', val: 'ISO Healthcare' },
      { label: 'Design', val: 'Biophilic Healing' },
      { label: 'Acoustics', val: 'Silent Recovery' },
    ],
    image: '/hospital_interior.jpg',
    alt: 'Luxury hospital wellness suite with blonde oak curves and indoor lush courtyard',
  },
  {
    id: 'modular-furniture',
    title: 'Innovative Modular Furniture',
    slug: 'modular-furniture',
    tagline: 'Precision Joinery & Reconfigurable Architectural Systems',
    summary: 'Solid oak and fluted walnut modular systems built to adapt with your life. Precision magnetic joinery, integrated ambient lighting, and bespoke ergonomic workstations built to outlast.',
    metrics: [
      { label: 'Flexibility', val: 'Infinite Modular' },
      { label: 'Timber', val: 'Solid English Oak' },
      { label: 'Craft', val: 'Kent Workshop' },
    ],
    image: '/slider/sl2.png',
    alt: 'Innovative modular workstation with illuminated oak shelving and fluted cabinets',
  },
]

export const enterpriseClients = [
  {
    id: 'nexa',
    name: 'NEXA',
    desc: 'Premium Automotive Experience',
    category: 'Hospitality Lounges',
    logo: '/clients/nexa.png',
  },
  {
    id: 'indigo',
    name: 'IndiGo',
    desc: 'Aviation & Global Workspaces',
    category: 'Modular Workstations',
    logo: '/clients/indigo.png',
  },
  {
    id: 'medanta',
    name: 'Medanta',
    desc: 'The Medicity Healthcare',
    category: 'Hospital Interior & Suites',
    logo: '/clients/medanta.png',
  },
  {
    id: 'hdfc_bank',
    name: 'HDFC Bank',
    desc: 'Banking & Financial Services',
    category: 'Corporate Interiors',
    logo: '/clients/hdfc_bank.png',
  },
  {
    id: 'samsung',
    name: 'Samsung',
    desc: 'Global Technology Leader',
    category: 'Experience Centres',
    logo: '/clients/samsung.png',
  },
  {
    id: 'maruti_suzuki',
    name: 'Maruti Suzuki',
    desc: 'Automobile Showrooms',
    category: 'Showroom Design & Fitouts',
    logo: '/clients/maruti_suzuki.png',
  },
  {
    id: 'dlf',
    name: 'DLF',
    desc: 'Luxury Properties & Estates',
    category: 'Five-Star Residences',
    logo: '/clients/dlf.png',
  },
  {
    id: 'm3m_ifc',
    name: 'M3M IFC',
    desc: 'International Financial Center',
    category: 'Commercial Architecture & Towers',
    logo: '/clients/M3M IFC Corporate Logo.png',
  },
]

export const navLinks = [
  { label: 'Home', href: '#top' },
  {
    label: 'Our Capabilities',
    href: '#capabilities',
    isDropdown: true,
    children: [
      { label: 'Bareshell Interior', href: '#capabilities', id: 'bareshell' },
      { label: 'Luxury Hotel Interior', href: '#capabilities', id: 'luxury-hotel' },
      { label: 'Hospital Interior', href: '#capabilities', id: 'hospital' },
      { label: 'Innovative Modular Furniture', href: '#capabilities', id: 'modular-furniture' },
    ],
  },
  { label: 'About us', href: '/about', isRoute: true },
  {
    label: 'Projects',
    href: '#clients',
    isProjectDropdown: true,
  },
]

