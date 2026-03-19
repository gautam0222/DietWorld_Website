import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Apple } from 'lucide-react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Plans', href: '#pricing' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Now', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="nav-inner container">
        <a href="#" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Apple size={26} strokeWidth={2} color="var(--gold)" style={{ fill: 'var(--gold)', fillOpacity: 0.2 }} />
          <span style={{ fontFamily: "'Playfair Display', serif" }}>Dietworld_nupurs</span>
        </a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => { e.preventDefault(); handleLink(l.href) }}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="nav-cta-btn" onClick={e => { e.preventDefault(); handleLink('#contact') }}>Book Now</a>
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={e => { e.preventDefault(); handleLink(l.href) }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
