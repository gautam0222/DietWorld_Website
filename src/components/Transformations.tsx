import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './ui'
import './Transformations.css'

const items = [
  { label: 'Lost 12kg in 3 months', text: 'Complete Meal Plan', color: '#2D6A4F' },
  { label: 'Lost 8kg in 2 months', text: 'Dinner Plan', color: '#40916C' },
  { label: 'Healthy weight gain', text: 'Complete Meal Plan', color: '#1B4332' },
  { label: 'Reversed pre-diabetes', text: 'Custom Diet Plan', color: '#C9A84C' },
]

export default function Transformations() {
  return (
    <section className="transformations section" id="transformations">
      <div className="container">
        <SectionTitle title="Transformation Stories" subtitle="Real results from real clients across Nagpur and India" />
        <div className="transform-grid">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <motion.div className="transform-card" whileHover={{ scale: 1.025 }} transition={{ duration: 0.22 }}>
                {/* REPLACE WITH: before-after-{i+1}.jpg */}
                <img
                  src={`https://placehold.co/600x360/${item.color.replace('#', '')}/FFFFFF?text=${encodeURIComponent(item.label)}`}
                  alt={item.label}
                  loading="lazy"
                />
                <div className="transform-overlay">
                  <span className="tl">{item.label}</span>
                  <span className="ts">{item.text}</span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
