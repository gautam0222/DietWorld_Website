import { motion } from 'framer-motion'
import beforeImg from '../assets/before-photo.png'
import afterImg from '../assets/after-photo.png'
import { FadeIn, SectionTitle } from './ui'
import './Transformations.css'



export default function Transformations() {
  return (
    <section className="transformations section" id="transformations">
      <div className="container">
        <SectionTitle title="Transformation Stories" subtitle="Real results from real clients across Nagpur and India" />

        <FadeIn delay={0.1}>
          <div className="nupur-story">
            <div className="nupur-story-text">
              <h3>Nupur's Personal Journey</h3>
              <p>My journey into nutrition started from my own struggles with weight and health. I realized that fad diets don't work, and true transformation comes from understanding your body and eating what you love in a balanced way.</p>
              <p>Through simple, home-cooked food and deep nutritional science, I transformed my own life. Now, I dedicate my career to helping you experience the same freedom and health.</p>
            </div>
            <div className="nupur-story-photos">
              <div className="photo-placeholder" style={{ padding: 0, overflow: 'hidden', border: 'none' }}>
                <img src={beforeImg} alt="Nupur Before" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="photo-placeholder" style={{ padding: 0, overflow: 'hidden', border: 'none' }}>
                <img src={afterImg} alt="Nupur After" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </FadeIn>


      </div>
    </section>
  )
}
