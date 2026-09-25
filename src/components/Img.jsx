import { useEffect, useRef, useState } from 'react'

/**
 * Image with three jobs:
 *  1. fades / settles in when it loads
 *  2. optional slow hover zoom (wrap parent in className="group" and pass hover)
 *  3. optional subtle scroll drift (drift = max pixels)
 * If the file is missing it renders a labelled placeholder showing the path to replace.
 */
export default function Img({ src, alt = '', ratio, className = '', hover = false, drift = 0, hideOnError = false, fit = 'cover' }) {
  const [state, setState] = useState('loading')
  const wrap = useRef(null)
  const inner = useRef(null)

  useEffect(() => setState('loading'), [src])

  useEffect(() => {
    if (!drift || state === 'error') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      raf = 0
      const w = wrap.current
      const i = inner.current
      if (!w || !i) return
      const r = w.getBoundingClientRect()
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight
      i.style.transform = `translate3d(0, ${(-p * drift).toFixed(1)}px, 0) scale(1.12)`
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => {
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [drift, state])

  if (state === 'error' && hideOnError) return null

  return (
    <div ref={wrap} className={`relative overflow-hidden bg-paper-deep ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      {state !== 'error' ? (
        <div ref={inner} className="absolute inset-0 will-change-transform">
          <div className={`h-full w-full transition-transform duration-[1400ms] ease-calm ${hover ? 'group-hover:scale-[1.035]' : ''}`}>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              onLoad={() => setState('loaded')}
              onError={() => setState('error')}
              className={`h-full w-full transition-all duration-[1400ms] ease-calm ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${state === 'loaded' ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0'}`}
            />
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-rule p-4 text-center">
          <span className="text-meta uppercase text-mute">Placeholder</span>
          <span className="max-w-full break-all font-sans text-[11px] text-charcoal">Replace: public{src}</span>
        </div>
      )}
    </div>
  )
}
