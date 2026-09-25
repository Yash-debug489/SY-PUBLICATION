# SY Publication

React + Vite + Tailwind. No backend.

## Run
```
npm install
npm run dev        # local preview
npm run build      # outputs /dist
```

## Add your images
Drop files into `public/assets/` using these exact names. Missing files show a
labelled placeholder that tells you which file to add.

```
public/assets/
  brand/
    sy-logo.png          navbar logo (falls back to a typeset "SY")
    favicon.png
  serial-001/
    cover.jpg            magazine cover
    page-01.jpg ... page-05.jpg   interior pages
    magazine-logo.png    optional, shown on the Serial 001 page
  serial-002/
    product-01.jpg ... product-04.jpg
    light-logo.png       optional, shown on the Serial 002 page
```
Different filenames or a different number of images? Edit the paths in
`src/data/catalogue.js`; add or remove entries in `gallery` and `sectionItems`.

## Edit content
- `src/data/catalogue.js`: titles (`MAGAZINE_TITLE`, `LIGHT_TITLE` at the top),
  serial/edition numbers, metadata rows, descriptions, captions, image paths.
- `src/pages/*.jsx`: page copy for Home, About, Archive.
- `src/components/Footer.jsx`: colophon and closing lines.
- `tailwind.config.js`: the single accent colour (`accent`). Set it to a colour
  sampled from your SY logo. Palette and fonts are defined there too.

## Deploy
`public/_redirects` (Netlify) and `vercel.json` (Vercel) already make deep links
like `/publications/serial-001` work.
