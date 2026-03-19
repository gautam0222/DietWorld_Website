import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './ui'
import food1 from '../assets/food-1.png'
import food2 from '../assets/food-2.png'
import food3 from '../assets/food-3.png'
import food4 from '../assets/food-4.png'
import food5 from '../assets/food-5.png'
import food6 from '../assets/food-6.png'
import './FoodGallery.css'

const items = [
  { src: food1, label: 'Nutritious Breakfast' },
  { src: food2, label: 'Power Lunch Bowl' },
  { src: food3, label: 'Balanced Dinner' },
  { src: food4, label: 'Smoothie Bowls' },
  { src: food5, label: 'Fresh Salads' },
  { src: food6, label: 'Healthy Snacks' },
]

export default function FoodGallery() {
  return (
    <section className="food-gallery section" id="gallery">
      <div className="container">
        <SectionTitle title="Our Food Gallery" subtitle="Healthy never looked so delicious" />
        <div className="food-grid">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08}>
              <motion.div className="food-item" whileHover={{ scale: 1.02 }} transition={{ duration: 0.25 }}>
                <img src={item.src} alt={item.label} loading="lazy" />
                <div className="food-overlay">
                  <span>{item.label}</span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
