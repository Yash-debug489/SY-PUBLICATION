import { Link } from 'react-router-dom'
import { Meta, Display, Rule } from '../components/Type.jsx'
import CatalogueEntry from '../components/CatalogueEntry.jsx'
import Reveal from '../components/Reveal.jsx'
import { serials, site } from '../data/catalogue.js'

const step = (n) => ({ animationDelay: `${n * 160}ms` })

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="wrap gutter pb-20 pt-14 md:pb-28 md:pt-24">
        <div className="hero-in flex items-baseline justify-between" style={step(0)}>
          <Meta>Independent Publishing House</Meta>
          <Meta>Est. {site.established}</Meta>
        </div>

        <h1 className="mt-10 md:mt-16" aria-label="SY Publication">
          <span className="hero-in block font-serif text-numeral !leading-[0.8]" style={step(1)}>SY</span>
          {/* PUBLICATION set edge to edge beneath the wordmark */}
          <span aria-hidden="true" className="hero-in mt-6 flex justify-between font-sans text-[clamp(0.75rem,2.4vw,2rem)] font-light uppercase md:mt-10" style={step(2)}>
            {'PUBLICATION'.split('').map((c, i) => <span key={i}>{c}</span>)}
          </span>
        </h1>

        <Rule className="hero-in mt-14 md:mt-20" />

        <div className="hero-in mt-10 grid gap-8 md:grid-cols-12" style={step(3)}>
          <p className="font-serif text-display-md italic md:col-span-7">{site.tagline}</p>
          <p className="max-w-[34ch] text-[0.9375rem] leading-relaxed text-charcoal md:col-span-3 md:col-start-10">{site.supporting}</p>
        </div>
      </section>

      {/* ---------- CURRENT CATALOGUE ---------- */}
      <section className="wrap gutter pt-8 md:pt-16" aria-labelledby="catalogue">
        <div className="flex items-baseline justify-between border-t border-rule pt-4">
          <Meta as="h2" className="!text-ink" id="catalogue">Current catalogue</Meta>
          <Link to="/publications" className="u-link text-meta uppercase">View all publications</Link>
        </div>

        <div className="mt-14 grid gap-24 md:mt-20 md:grid-cols-12 md:gap-y-0">
          <CatalogueEntry serial={serials[0]} className="md:col-span-6 md:col-start-1" drift={28} />
          <CatalogueEntry serial={serials[1]} className="md:col-span-5 md:col-start-8 md:mt-[30vh]" drift={20} />
        </div>
      </section>

      {/* ---------- THE REVEAL ---------- */}
      <section className="mt-36 bg-charcoal text-paper md:mt-56" aria-labelledby="why-one">
        <div className="wrap gutter grid gap-14 py-28 md:grid-cols-12 md:py-44">
          <Reveal className="md:col-span-4">
            <Display as="h2" size="lg" className="text-paper" >
              <span id="why-one">Why only one?</span>
            </Display>
          </Reveal>

          <div className="space-y-8 md:col-span-6 md:col-start-7">
            <Reveal delay={0}>
              <p className="font-serif text-[1.75rem] leading-[1.25] md:text-[2.25rem]">SY Publication was never intended to produce work at scale.</p>
            </Reveal>
            <Reveal delay={250} className="space-y-1 font-serif text-[1.35rem] leading-[1.4] text-paper/75 md:text-[1.6rem]">
              <p>Some stories are too specific to become mass-produced.</p>
              <p>Some objects are made for a single person.</p>
              <p>Some editions exist simply because someone deserved to have their story preserved.</p>
            </Reveal>
            <Reveal delay={500}>
              <p className="text-[0.9375rem] text-paper/60">The current catalogue contains two such works.</p>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-paper/15">
          <div className="wrap gutter py-24 md:py-40">
            <Reveal>
              <p className="font-serif text-display-lg">
                Two editions.<br />
                One subject.<br />
                <span className="text-paper/55">A very small archive.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
