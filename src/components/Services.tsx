import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './ui'
import { Utensils, BarChart2, MessageCircle } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: <Utensils size={28} />,
    title: 'Custom Meal Plans',
    desc: 'Personalized daily meal plans based on your body type, health goals, and food preferences. Every bite planned for maximum nutrition.',
  },
  {
    icon: <BarChart2 size={28} />,
    title: 'Health Tracking',
    desc: 'Weekly progress monitoring with body composition analysis and plan adjustments to keep you on track toward your goals.',
  },
  {
    icon: <MessageCircle size={28} />,
    title: '1-on-1 Consultation',
    desc: 'Dedicated WhatsApp support and regular check-ins to answer your questions and keep you motivated throughout your journey.',
  },
]

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <SectionTitle title="What We Offer" subtitle="Comprehensive nutrition services tailored to your lifestyle" />
        <div className="services-grid">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.12}>
              <motion.div className="service-card" whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.25 }}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
