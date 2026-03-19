import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import heroBg from '../assets/hero-bg.png'
import './Hero.css'

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(27,67,50,.88), rgba(45,106,79,.72)), url(${heroBg})` }}>
      <div className="hero-shapes">
        <div className="shape s1" />
        <div className="shape s2" />
        <div className="shape s3" />
      </div>
      <div className="hero-content container">
        <motion.div className="hero-badge" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
          🌿 Certified Dietician &amp; Nutrition Expert
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
          Eat <span className="accent">Smart</span>.<br />Live <span className="accent">Better</span>.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.5 }}>
          Personalized meal plans crafted by Nupur to help you achieve your health goals — naturally, deliciously, and sustainably.
        </motion.p>
        <motion.div className="hero-btns" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
          <button className="btn btn-primary" onClick={() => handleScroll('#pricing')}>View Meal Plans</button>
          <button className="btn btn-outline" onClick={() => handleScroll('#contact')}>Book a Consultation</button>
        </motion.div>
        <motion.div className="hero-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
          <div className="stat"><strong>50+</strong><span>Happy Clients</span></div>
          <div className="divider" />
          <div className="stat"><strong>5+</strong><span>Years Experience</span></div>
          <div className="divider" />
          <div className="stat"><strong>100%</strong><span>Natural Plans</span></div>
        </motion.div>
      </div>
      <motion.button
        className="scroll-hint"
        onClick={() => handleScroll('#about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}
