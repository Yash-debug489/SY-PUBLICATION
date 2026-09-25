/* ==========================================================================
   SY PUBLICATION — CATALOGUE DATA
   Everything you'll want to edit lives in this file.
   Images live in /public/assets/...  (referenced here as /assets/...)
   If an image file is missing, the site shows a labelled placeholder
   that tells you exactly which file to drop in.
   ========================================================================== */

// ---- Titles: change these once, they update everywhere ----
export const MAGAZINE_TITLE = '[INSERT MAGAZINE TITLE]'
export const LIGHT_TITLE = '[INSERT LIGHT PRODUCT NAME]'

// ---- Site-wide ----
export const site = {
  name: 'SY Publication',
  tagline: 'Independent publishing for stories worth keeping.',
  supporting: 'An independent publishing house producing limited editorial works and personal objects.',
  established: '2026',
  logo: '/assets/brand/sy-logo.png', // navbar logo. Falls back to a typeset "SY" if missing.
}

// ---- The two serials ----
export const serials = [
  {
    number: '001',
    slug: 'serial-001',
    path: '/publications/serial-001',
    title: MAGAZINE_TITLE,
    category: 'Personalised Edition',
    header: 'Personalised Edition',
    format: 'Print',
    edition: '001',
    status: 'Private',
    cover: '/assets/serial-001/cover.jpg',
    coverRatio: '3 / 4',
    mark: '/assets/serial-001/magazine-logo.png', // optional small logo shown on the page
    gallery: [
      { src: '/assets/serial-001/cover.jpg', alt: 'Cover', ratio: '4 / 5' },
      { src: '/assets/serial-001/page-01.jpg', alt: 'Interior spread 1', ratio: '4 / 5' },
      { src: '/assets/serial-001/page-02.jpg', alt: 'Interior spread 2', ratio: '4 / 5' },
      { src: '/assets/serial-001/page-03.jpg', alt: 'Interior spread 3', ratio: '4 / 5' },
    ],
    info: [
      ['Title', MAGAZINE_TITLE],
      ['Serial', '001'],
      ['Format', 'Printed edition'],
      ['Edition size', '01'],
      ['Subject', 'One person'],
      ['Status', 'Private archive'],
    ],
    description: [
      'Serial 001 is the first publication released by SY Publication.',
      'Created as a deeply personal editorial edition, the magazine documents a person through photographs, memories, fragments of history, observations, and carefully selected details.',
      'It is less a conventional magazine and more a portrait assembled in print.',
      'Every page was designed specifically for its subject.',
      'There will never be another identical edition.',
    ],
    sectionTitle: 'From the edition',
    // Add / remove items freely. Captions are placeholders — edit them.
    sectionItems: [
      { src: '/assets/serial-001/page-01.jpg', caption: 'The beginning', ratio: '4 / 5' },
      { src: '/assets/serial-001/page-02.jpg', caption: 'A collection of memories', ratio: '1 / 1' },
      { src: '/assets/serial-001/page-03.jpg', caption: 'The people who matter', ratio: '4 / 5' },
      { src: '/assets/serial-001/page-04.jpg', caption: 'My love', ratio: '5 / 4' },
      { src: '/assets/serial-001/page-05.jpg', caption: 'The next chapter', ratio: '4 / 5' },
    ],
    closing: ['Edition 001', 'One copy produced', 'Private collection'],
  },
  {
    number: '002',
    slug: 'serial-002',
    path: '/publications/serial-002',
    title: LIGHT_TITLE,
    category: 'Object / Light',
    header: 'Custom Object',
    format: 'Object',
    edition: '001',
    status: 'Private',
    cover: '/assets/serial-002/product-01.jpg',
    coverRatio: '1 / 1',
    mark: '/assets/serial-002/light-logo.png',
    gallery: [
      { src: '/assets/serial-002/product-01.jpg', alt: 'The light', ratio: '4 / 5' },
      { src: '/assets/serial-002/product-02.jpg', alt: 'The light, detail', ratio: '4 / 5' },
      { src: '/assets/serial-002/product-03.jpg', alt: 'The light, lit', ratio: '4 / 5' },
    ],
    info: [
      ['Title', LIGHT_TITLE],
      ['Serial', '002'],
      ['Format', 'Light / Object'],
      ['Edition', '001'],
      ['Quantity', 'One'],
      ['Status', 'Private collection'],
    ],
    description: [
      'Serial 002 extends the visual language of SY Publication beyond the printed page.',
      'Designed as a physical object to accompany the first edition, the piece translates the identity of the publication into something that can exist beyond paper.',
      'A small object.',
      'A private edition.',
      'Made for one.',
    ],
    sectionTitle: 'The object',
    // Placeholder descriptions — replace with your own.
    sectionItems: [
      { src: '/assets/serial-002/product-02.jpg', caption: 'The form', ratio: '4 / 5' },
      { src: '/assets/serial-002/product-03.jpg', caption: 'The light', ratio: '1 / 1' },
      { src: '/assets/serial-002/product-04.jpg', caption: 'The detail', ratio: '5 / 4' },
    ],
    closing: ['Edition 001', 'One of one', 'Private collection'],
  },
]

// ---- About page: the "currently" block ----
export const aboutStats = [
  ['02', 'Serials'],
  ['02', 'Works'],
  ['01', 'Subject'],
  ['01', 'Private archive'],
]

export const getSerial = (slug) => serials.find((s) => s.slug === slug)
