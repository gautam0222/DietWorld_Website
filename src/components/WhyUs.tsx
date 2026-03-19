import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './ui'
import { ClipboardList, Scale, UserCheck, RefreshCw } from 'lucide-react'
import './WhyUs.css'

const usps = [
  { icon: <ClipboardList size={24} />, title: 'Easy to Manage', desc: 'Simple plans that fit into your busy schedule without stress.' },
  { icon: <Scale size={24} />, title: 'Weight Loss', desc: 'Proven strategies for sustainable, healthy weight management.' },
  { icon: <UserCheck size={24} />, title: 'Nutritionist Approved', desc: 'Every plan is crafted by a certified clinical dietician.' },
  { icon: <RefreshCw size={24} />, title: 'Flexible Plans', desc: 'Customize and adjust your plan anytime based on your needs.' },
]

function BMICalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState<{ bmi: string; cat: string; cls: string } | null>(null)

  const calculate = () => {
    const h = parseFloat(height) / 100
    const w = parseFloat(weight)
    if (!h || !w || h <= 0 || w <= 0) return
    const bmi = (w / (h * h)).toFixed(1)
    const b = parseFloat(bmi)
    let cat = '', cls = ''
    if (b < 18.5) { cat = 'Underweight'; cls = 'under' }
    else if (b < 25)  { cat = 'Normal Weight'; cls = 'normal' }
    else if (b < 30)  { cat = 'Overweight'; cls = 'over' }
    else              { cat = 'Obese'; cls = 'obese' }
    setResult({ bmi, cat, cls })
  }

  return (
    <FadeIn>
      <div className="bmi-card">
        <div className="bmi-header">
          <h3>Quick BMI Check</h3>
          <p>Know your body, eat smarter</p>
        </div>
        <div className="bmi-inputs">
          <label>
            <span>Height (cm)</span>
            <input type="number" placeholder="e.g. 165" value={height} onChange={e => setHeight(e.target.value)} min={50} max={300} />
          </label>
          <label>
            <span>Weight (kg)</span>
            <input type="number" placeholder="e.g. 60" value={weight} onChange={e => setWeight(e.target.value)} min={10} max={500} />
          </label>
        </div>
        <button className="btn btn-primary bmi-btn" onClick={calculate}>Calculate BMI</button>
        {result && (
          <motion.div className={`bmi-result ${result.cls}`} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }}>
            <strong>BMI: {result.bmi}</strong> — {result.cat}
          </motion.div>
        )}
      </div>
    </FadeIn>
  )
}

export default function WhyUs() {
  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <SectionTitle title="Why Choose DietWorld?" subtitle="What sets us apart from the rest" />
        <div className="usp-grid">
          {usps.map((u, i) => (
            <FadeIn key={u.title} delay={i * 0.1}>
              <motion.div className="usp-tile" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <div className="usp-icon">{u.icon}</div>
                <h4>{u.title}</h4>
                <p>{u.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        <BMICalculator />
      </div>
    </section>
  )
}
