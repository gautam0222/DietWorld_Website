import { FadeIn, SectionTitle } from './ui'
import { Award, Clock, Users, MapPin } from 'lucide-react'
import nupurImg from '../assets/nupur-portrait.png'
import './About.css'

const stats = [
  { icon: <Users size={20} />, num: '50+', label: 'Happy Clients' },
  { icon: <Clock size={20} />, num: '5+', label: 'Years Experience' },
  { icon: <Award size={20} />, num: '100%', label: 'Natural Plans' },
  { icon: <MapPin size={20} />, num: 'Nagpur', label: 'India' },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <FadeIn direction="left" className="about-img-wrap">
            <img src={nupurImg} alt="Nupur — Certified Dietician" className="about-img" />
            <div className="about-img-badge">
              <Award size={20} />
              <span>Certified Clinical Dietician</span>
            </div>
          </FadeIn>
          <div className="about-text">
            <FadeIn delay={0.1}>
              <span className="eyebrow">About Nupur</span>
              <h2>A Dietician Who <br />Truly Cares</h2>
              <p>A certified clinical dietician and nutrition expert based in <strong>Nagpur, India</strong>, with over <strong>5+ years</strong> of experience helping individuals achieve their wellness goals. Nupur believes that healthy eating should never feel like a punishment — every plan is crafted with love, science, and a deep understanding of your unique body.</p>
              <p>From weight management to therapeutic diets, Nupur combines evidence-based nutrition science with the flavors you already love to create sustainable, joyful lifestyle changes.</p>
            </FadeIn>
            <div className="about-stats">
              {stats.map((s, i) => (
                <FadeIn key={s.label} delay={0.15 + i * 0.1}>
                  <div className="about-stat">
                    <div className="stat-icon">{s.icon}</div>
                    <strong>{s.num}</strong>
                    <span>{s.label}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
