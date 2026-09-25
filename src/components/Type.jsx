/* Reusable typography primitives */

/** Small uppercase metadata */
export const Meta = ({ as: Tag = 'span', className = '', children }) => (
  <Tag className={`text-meta uppercase text-mute ${className}`}>{children}</Tag>
)

/** Serif display heading. size: xl | lg | md */
const displaySizes = { xl: 'text-display-xl', lg: 'text-display-lg', md: 'text-display-md' }
export const Display = ({ as: Tag = 'h2', size = 'lg', className = '', children, ...rest }) => (
  <Tag className={`font-serif font-normal ${displaySizes[size]} ${className}`} {...rest}>{children}</Tag>
)

/** Oversized serial number, e.g. 001 */
export const Numeral = ({ children, className = '' }) => (
  <span aria-hidden="true" className={`block font-serif text-numeral ${className}`}>{children}</span>
)

export const Rule = ({ className = '' }) => <hr className={`border-0 border-t border-rule ${className}`} />

/** Editorial paragraph in serif */
export const Lede = ({ className = '', children }) => (
  <p className={`font-serif text-[1.5rem] leading-[1.3] md:text-[1.9rem] ${className}`}>{children}</p>
)

/** Label / value rows separated by hairlines */
export const MetaRows = ({ rows, className = '' }) => (
  <dl className={className}>
    {rows.map(([label, value]) => (
      <div key={label} className="flex items-baseline justify-between gap-6 border-t border-rule py-3 last:border-b">
        <dt className="text-meta uppercase text-mute">{label}</dt>
        <dd className="text-right text-meta uppercase text-ink">{value}</dd>
      </div>
    ))}
  </dl>
)
