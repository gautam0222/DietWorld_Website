import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './FinalCTA.css'

export default function FinalCTA() {
  const handleScroll = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="final-cta">
      <div className="container">
        <motion.div 
          className="cta-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Don't wait until tomorrow to start feeling your best.</h2>
          <p>Join 50+ happy clients who have transformed their lives with Nupur's meal plans without sacrificing the food they love.</p>
          <button className="btn btn-gold" onClick={handleScroll}>
            Start Your Journey <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
