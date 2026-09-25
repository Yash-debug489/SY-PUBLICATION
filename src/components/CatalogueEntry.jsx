import { Link } from 'react-router-dom'
import Img from './Img.jsx'
import { Meta, Numeral, MetaRows } from './Type.jsx'

/** Archive-style catalogue entry (used on Home). */
export default function CatalogueEntry({ serial, className = '', drift = 24 }) {
  return (
    <article className={className}>
      <Link to={serial.path} className="group block" aria-label={`${serial.title}, Serial ${serial.number}`}>
        <Img src={serial.cover} alt={serial.title} ratio={serial.coverRatio} hover drift={drift} className="w-full" />

        <div className="mt-6 flex items-end justify-between gap-6">
          <div>
            <Meta as="p">Serial</Meta>
            <Numeral className="!text-[clamp(4rem,9vw,8rem)] !leading-[0.85] transition-colors duration-700 group-hover:text-accent">{serial.number}</Numeral>
          </div>
          <Meta className="pb-2 text-right">{serial.category}</Meta>
        </div>

        <h3 className="mt-6 font-serif text-display-md">{serial.title}</h3>
      </Link>

      <MetaRows
        className="mt-8"
        rows={[
          ['Format', serial.format],
          ['Edition', serial.edition],
          ['Status', serial.status],
        ]}
      />
    </article>
  )
}
