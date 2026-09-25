import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Img from './Img.jsx'
import { site } from '../data/catalogue.js'

const links = [
  ['Publications', '/publications'],
  ['Archive', '/archive'],
  ['About', '/about'],
]

function Logo() {
  return (
    <Link to="/" aria-label="SY Publication, home" className="relative flex h-8 w-16 items-center">
      {/* Text fallback sits underneath; logo image covers it when present */}
      <span className="font-serif text-[1.75rem] leading-none tracking-tight">SY</span>
      <Img src={site.logo} alt="SY" hideOnError fit="contain" className="!absolute inset-0 !bg-paper" />
    </Link>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="wrap gutter flex h-16 items-center justify-between md:h-20">
        <div className="w-16"><Logo /></div>

        <nav className="hidden items-center gap-12 md:flex" aria-label="Primary">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} className="u-link text-meta uppercase">{label}</NavLink>
          ))}
        </nav>

        <button
          className="text-meta uppercase md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 z-30 h-[calc(100dvh-4rem)] bg-paper transition-opacity duration-500 ease-calm md:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden={!open}
      >
        <nav className="gutter flex h-full flex-col justify-between pb-10 pt-12" aria-label="Mobile">
          <ul className="space-y-4">
            {links.map(([label, to]) => (
              <li key={to}>
                <NavLink to={to} tabIndex={open ? 0 : -1} className="block font-serif text-[3.25rem] leading-none">{label}</NavLink>
              </li>
            ))}
          </ul>
          <p className="text-meta uppercase text-mute">Independent Publishing House<br />Private Editions</p>
        </nav>
      </div>
    </header>
  )
}
