import { Apple, Instagram } from 'lucide-react'
import './Footer.css'

const sections = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Plans', href: '#pricing' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Now', href: '#contact' },
]

export default function Footer() {
  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Apple size={22} color="var(--gold)" style={{ fill: 'var(--gold)', fillOpacity: 0.2 }} />
              <span style={{ fontFamily: "'Playfair Display', serif" }}>Dietworld_nupurs</span>
            </div>
            <p>Helping you eat better, feel healthier, and live your best life — one meal at a time.</p>
            <a href="https://www.instagram.com/dietworld_nupurs" target="_blank" rel="noopener noreferrer" className="footer-ig">
              <Instagram size={18} />
              @dietworld_nupurs
            </a>
          </div>
          <nav className="footer-links">
            <strong>Quick Links</strong>
            {sections.map(s => (
              <a key={s.href} href={s.href} onClick={e => { e.preventDefault(); scroll(s.href) }}>{s.label}</a>
            ))}
          </nav>
          <div className="footer-contact">
            <strong>Contact</strong>
            <p>📱 +91 90493 33389</p>
            <p>📍 Nagpur, India</p>
            <p>🕐 Mon–Sat: 9 AM – 7 PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Dietworld_nupurs · Nagpur, India · Made with 💚</p>
        </div>
      </div>
    </footer>
  )
}
