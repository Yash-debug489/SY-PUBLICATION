import { Link } from 'react-router-dom'
import Img from '../components/Img.jsx'
import { Meta, Display, Numeral } from '../components/Type.jsx'
import { serials } from '../data/catalogue.js'

export default function Publications() {
  return (
    <div className="wrap gutter pt-14 md:pt-24">
      <Meta as="p">Catalogue index</Meta>
      <Display as="h1" size="xl" className="mt-6">Publications</Display>
      <p className="mt-8 max-w-[44ch] text-charcoal">
        A limited catalogue of private editions and commissioned works. Two serials have been released.
      </p>

      <ul className="mt-20 border-t border-rule md:mt-28">
        {serials.map((s) => (
          <li key={s.slug} className="border-b border-rule">
            <Link to={s.path} className="group grid items-center gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-12">
              <div className="md:col-span-3">
                <Meta as="p">Serial</Meta>
                <Numeral className="!text-[clamp(4.5rem,11vw,10rem)] !leading-[0.85] transition-colors duration-700 group-hover:text-accent">{s.number}</Numeral>
              </div>

              <div className="md:col-span-5">
                <h2 className="font-serif text-display-md">{s.title}</h2>
                <Meta as="p" className="mt-3">{s.category}</Meta>
              </div>

              <dl className="grid grid-cols-3 gap-4 md:col-span-2 md:block md:space-y-2">
                {[['Format', s.format], ['Edition', s.edition], ['Status', s.status]].map(([k, v]) => (
                  <div key={k} className="md:flex md:justify-between md:gap-4">
                    <dt className="text-meta uppercase text-mute">{k}</dt>
                    <dd className="text-meta uppercase">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="w-28 md:col-span-2 md:w-full md:max-w-[9rem] md:justify-self-end">
                <Img src={s.cover} alt="" ratio="4 / 5" hover />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
