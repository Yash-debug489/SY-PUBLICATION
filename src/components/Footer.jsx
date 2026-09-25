import { Link } from 'react-router-dom'
import { Meta, Rule } from './Type.jsx'
import Reveal from './Reveal.jsx'

export default function Footer() {
  return (
    <footer className="mt-32 md:mt-48">
      {/* Quiet closing line */}
      <div className="wrap gutter pb-24 md:pb-36">
        <Reveal>
          <p className="max-w-[22ch] font-serif text-display-md italic text-mute">
            Not everything worth publishing is meant for everyone.
          </p>
        </Reveal>
      </div>

      {/* Colophon */}
      <div className="border-t border-rule">
        <div className="wrap gutter grid gap-14 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <p className="font-serif text-[2rem] leading-none">SY Publication</p>
            <p className="mt-6 text-meta uppercase text-charcoal">
              Independent Publishing House<br />Private Editions<br />Est. 2026
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <Meta as="p" className="mb-4">Catalogue</Meta>
            <ul className="space-y-2 text-meta uppercase">
              <li><Link to="/publications/serial-001" className="u-link">Serial 001 — Print</Link></li>
              <li><Link to="/publications/serial-002" className="u-link">Serial 002 — Object</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <Meta as="p" className="mb-4">Index</Meta>
            <ul className="space-y-2 text-meta uppercase">
              <li><Link to="/publications" className="u-link">Publications</Link></li>
              <li><Link to="/archive" className="u-link">Archive</Link></li>
              <li><Link to="/about" className="u-link">About</Link></li>
            </ul>
          </div>
        </div>

        <Rule />
        <div className="wrap gutter flex flex-col gap-3 py-6 md:flex-row md:items-baseline md:justify-between">
          <Meta>© SY Publication 2026</Meta>
          <Meta className="opacity-70">Created for someone worth publishing.</Meta>
          <Meta className="normal-case tracking-normal italic text-[0.8125rem] !text-charcoal font-serif">
            Made with unreasonable attention to detail.
          </Meta>
        </div>
      </div>
    </footer>
  )
}
