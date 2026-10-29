import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Doctors', to: '/doctors' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar({ onBook }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="SmileCare Dental home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-name">smilecare<span>.</span><small>DENTAL STUDIO</small></span>
        </Link>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <div className={`nav-content${menuOpen ? ' is-open' : ''}`}>
          <div className="nav-links">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <Button onClick={() => { closeMenu(); onBook() }} className="nav-cta">Book a visit</Button>
        </div>
      </nav>
    </header>
  )
}
