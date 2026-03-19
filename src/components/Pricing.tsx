import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './ui'
import { CheckCircle } from 'lucide-react'
import './Pricing.css'

const plans = [
  {
    icon: '🥗',
    name: 'Complete Meal Plan',
    price: '₹4,500',
    duration: '/ 6 days',
    sub: 'Full Day Coverage',
    badge: 'Most Popular',
    badgeColor: 'var(--gold)',
    features: ['Customized Breakfast Menu', 'Nutritious Lunch Options', 'Balanced Dinner Recipes', 'Healthy Snack Guide', 'Weekly Progress Check-in', 'WhatsApp Support'],
    dark: true,
  },
  {
    icon: '🍽️',
    name: 'Dinner Plan',
    price: '₹2,500',
    duration: '/ 6 days',
    sub: 'Evening Nutrition Focus',
    badge: 'Best Value',
    badgeColor: 'var(--green)',
    features: ['Customized Dinner Menu', 'Calorie-Controlled Portions', 'Light Evening Snack Guide', 'Grocery Shopping List', 'Bi-weekly Check-in'],
    dark: false,
  },
]

export default function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <SectionTitle title="Meal Plans & Pricing" subtitle="Choose the plan that fits your lifestyle" />
        <div className="pricing-grid">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.15}>
              <motion.div className={`price-card${p.dark ? ' dark' : ''}`} whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                <div className="price-badge" style={{ background: p.badgeColor }}>{p.badge}</div>
                <div className="plan-icon">{p.icon}</div>
                <h3>{p.name}</h3>
                <div className="price-row">
                  <span className="price">{p.price}</span>
                  <span className="dur">{p.duration}</span>
                </div>
                <p className="plan-sub">{p.sub}</p>
                <ul className="features">
                  {p.features.map(f => (
                    <li key={f}>
                      <CheckCircle size={17} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`btn ${p.dark ? 'btn-gold' : 'btn-green'}`} onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  Book Now →
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
