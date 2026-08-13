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

export const heroImage = img('photo-1631679706909-1844bbd07221', 2200)
export const heroAlt =
  'A calm cream living room with rattan mirrors and low seating'

export const ctaImage = img('photo-1618221195710-dd6b41faaea6', 1400)
export const ctaAlt = 'A warm living room in late afternoon light'

export const navLinks = [
  { label: 'Collections', href: '#collections' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Studio', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
]
