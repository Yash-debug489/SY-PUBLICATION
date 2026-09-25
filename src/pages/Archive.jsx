import { Link } from 'react-router-dom'
import { Meta, Display } from '../components/Type.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Archive() {
  return (
    <div className="wrap gutter flex min-h-[72vh] flex-col justify-between pb-6 pt-14 md:pt-24">
      <div>
        <Meta as="p">Restricted</Meta>
        <Display as="h1" size="xl" className="mt-6">Private Archive</Display>
      </div>

      <div className="mt-24 grid gap-10 md:grid-cols-12">
        <div className="space-y-10 md:col-span-6 md:col-start-6">
          <Reveal className="space-y-1 font-serif text-[1.75rem] leading-[1.25] md:text-[2.25rem]">
            <p>Some publications are made for the public.</p>
            <p className="text-mute">Others are made for the person they belong to.</p>
          </Reveal>

          <Reveal delay={200} className="max-w-[48ch] space-y-5 text-[1.0625rem] leading-[1.8] text-charcoal">
            <p>The SY archive currently contains a very small number of private editions.</p>
            <p>Access to the complete archive is reserved for the subject of the collection.</p>
          </Reveal>

          <Reveal delay={350}>
            <Link to="/publications" className="u-link text-meta uppercase">View the public catalogue</Link>
          </Reveal>
        </div>
      </div>

      <div className="mt-24 flex items-center gap-3 border-t border-rule pt-4">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
        <Meta className="!text-ink">Archive status — Active</Meta>
      </div>
    </div>
  )
}
