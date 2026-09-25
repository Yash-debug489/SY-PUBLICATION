import { Meta, Display } from '../components/Type.jsx'
import Reveal from '../components/Reveal.jsx'
import { aboutStats } from '../data/catalogue.js'

export default function About() {
  return (
    <div className="wrap gutter pt-14 md:pt-24">
      <Meta as="p">Statement</Meta>
      <Display as="h1" size="xl" className="mt-6">About SY</Display>

      <div className="mt-20 grid gap-12 md:mt-32 md:grid-cols-12">
        <div className="space-y-6 md:col-span-7 md:col-start-1">
          <Reveal>
            <p className="font-serif text-[1.9rem] leading-[1.2] md:text-[2.6rem]">
              SY Publication is an independent publishing project focused on limited editions, personal narratives, and objects with a story attached to them.
            </p>
          </Reveal>
        </div>

        <div className="space-y-6 md:col-span-4 md:col-start-9 md:pt-3">
          <Reveal delay={150} className="space-y-6 text-[1.0625rem] leading-[1.8] text-charcoal">
            <p>Rather than publishing for a market, SY publishes with a subject in mind.</p>
            <p>Each edition begins with a person, a memory, an idea, or a moment worth preserving.</p>
          </Reveal>
          <Reveal delay={300} className="font-serif text-[1.5rem] leading-[1.25]">
            <p>The catalogue is intentionally small.</p>
            <p className="text-mute">The work is intentionally specific.</p>
          </Reveal>
        </div>
      </div>

      {/* Currently */}
      <section className="mt-32 md:mt-52" aria-label="Currently">
        <div className="border-t border-rule pt-4">
          <Meta as="h2" className="!text-ink">Currently</Meta>
        </div>
        <ul>
          {aboutStats.map(([n, label], i) => (
            <Reveal as="li" key={label} delay={i * 90} className="grid grid-cols-12 items-baseline gap-4 border-b border-rule py-4 md:py-6">
              <span className="col-span-5 font-serif text-[clamp(4.5rem,15vw,15rem)] leading-[0.85] tracking-tight md:col-span-6">{n}</span>
              <span className="col-span-7 font-serif text-display-lg md:col-span-6">{label}</span>
            </Reveal>
          ))}
        </ul>
      </section>
    </div>
  )
}
