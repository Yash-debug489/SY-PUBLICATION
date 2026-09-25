import { Link, useParams } from 'react-router-dom'
import Img from '../components/Img.jsx'
import Gallery from '../components/Gallery.jsx'
import Reveal from '../components/Reveal.jsx'
import { Meta, Display, Numeral, MetaRows, Rule } from '../components/Type.jsx'
import { getSerial, serials } from '../data/catalogue.js'

// Asymmetric placement for the "From the edition" images (repeats if you add more)
const layout = [
  'md:col-span-7 md:col-start-1',
  'md:col-span-4 md:col-start-9 md:mt-40',
  'md:col-span-5 md:col-start-3',
  'md:col-span-6 md:col-start-7 md:mt-28',
  'md:col-span-7 md:col-start-2',
]

export default function Serial() {
  const { slug } = useParams()
  const serial = getSerial(slug)

  if (!serial) {
    return (
      <div className="wrap gutter pt-24">
        <Display as="h1" size="lg">Not in the catalogue.</Display>
        <Link to="/publications" className="u-link mt-8 inline-block text-meta uppercase">Return to publications</Link>
      </div>
    )
  }

  const next = serials[(serials.indexOf(serial) + 1) % serials.length]

  return (
    <article>
      {/* ---------- HEADER ---------- */}
      <header className="wrap gutter grid gap-10 pt-14 md:grid-cols-12 md:pt-24">
        <div className="md:col-span-4">
          <Meta as="p">Serial</Meta>
          <Numeral className="mt-3">{serial.number}</Numeral>
        </div>
        <div className="md:col-span-8 md:self-end">
          <Meta as="p">{serial.header}</Meta>
          <Display as="h1" size="xl" className="mt-5 !text-[clamp(2.5rem,7vw,7rem)]">{serial.title}</Display>
        </div>
      </header>

      {/* ---------- GALLERY ---------- */}
      <section className="wrap gutter mt-16 md:mt-24" aria-label="Gallery">
        <Gallery images={serial.gallery} />
      </section>

      {/* ---------- INFORMATION + DESCRIPTION ---------- */}
      <section className="wrap gutter mt-28 grid gap-16 md:mt-44 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <Img src={serial.mark} alt="" hideOnError fit="contain" className="mb-10 h-14 w-40 !bg-transparent" />
            <MetaRows rows={serial.info} />
          </div>
        </div>

        <div className="space-y-6 md:col-span-6 md:col-start-6">
          {serial.description.map((line, n) => (
            <Reveal key={n} delay={n === 0 ? 0 : 60}>
              {n === 0 ? (
                <p className="font-serif text-[1.9rem] leading-[1.2] md:text-[2.5rem]">{line}</p>
              ) : line.length < 30 ? (
                <p className="font-serif text-[1.5rem] leading-[1.2] text-mute">{line}</p>
              ) : (
                <p className="max-w-[52ch] text-[1.0625rem] leading-[1.8] text-charcoal">{line}</p>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- FROM THE EDITION / THE OBJECT ---------- */}
      <section className="wrap gutter mt-32 md:mt-52" aria-labelledby="edition-heading">
        <div className="border-t border-rule pt-4">
          <Meta as="h2" id="edition-heading" className="!text-ink">{serial.sectionTitle}</Meta>
        </div>

        <div className="mt-14 grid gap-16 md:mt-24 md:grid-cols-12 md:gap-x-10 md:gap-y-0">
          {serial.sectionItems.map((it, n) => (
            <figure key={it.src + n} className={`group ${layout[n % layout.length]} ${n > 0 ? 'md:mb-0' : ''}`}>
              <Img src={it.src} alt={it.caption} ratio={it.ratio} hover drift={n % 2 ? 18 : 26} className="w-full" />
              <figcaption className="mt-3 flex items-baseline justify-between border-t border-rule pt-3">
                <Meta className="!text-ink">{it.caption}</Meta>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------- CLOSING BLOCK ---------- */}
      <section className="wrap gutter mt-36 md:mt-56">
        <Rule />
        <div className="grid gap-12 pt-16 md:grid-cols-12 md:pt-24">
          <Reveal className="md:col-span-7">
            <p className="font-serif text-display-lg uppercase">
              {serial.closing.map((l, i) => (
                <span key={l} className={`block ${i === 2 ? 'text-mute' : ''}`}>{l}</span>
              ))}
            </p>
          </Reveal>

          <div className="md:col-span-3 md:col-start-10 md:self-end">
            <Meta as="p">Next serial</Meta>
            <Link to={next.path} className="group mt-3 block">
              <span className="block font-serif text-display-md transition-colors duration-500 group-hover:text-accent">Serial {next.number}</span>
              <span className="mt-1 block text-meta uppercase text-mute">{next.category}</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
