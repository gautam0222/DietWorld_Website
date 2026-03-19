import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from './ui'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import './Testimonials.css'

const reviews = [
  { name: 'Priya Sharma', role: 'IT Professional', city: 'Delhi', text: "Nupur's meal plans changed my life! I lost 10kg in just 2 months without ever feeling hungry. The food is delicious and so easy to prepare at home." },
  { name: 'Anita Verma', role: 'Teacher', city: 'Mumbai', text: "As a working mom, I needed meals that were quick and healthy. Nupur understood my constraints perfectly. My energy levels are through the roof!" },
  { name: 'Rahul Mehta', role: 'Business Owner', city: 'Pune', text: "I was skeptical about online diet plans, but Nupur's personalized approach won me over completely. The WhatsApp support makes all the difference." },
  { name: 'Sneha Patel', role: 'Fitness Enthusiast', city: 'Bangalore', text: "Best investment in my health ever. Nupur's plans are practical, delicious, and actually work. Highly recommend the Complete Meal Plan!" },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  const go = useCallback((d: number) => {
    setDir(d)
    setIdx(i => (i + d + reviews.length) % reviews.length)
  }, [])

  useEffect(() => {
    const t = setInterval(() => go(1), 4500)
    return () => clearInterval(t)
  }, [go])

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <SectionTitle title="What Clients Say" light />
        <div className="carousel">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="review-card"
            >
              <div className="stars">{[...Array(5)].map((_, i) => <Star key={i} size={20} fill="var(--gold)" color="var(--gold)" />)}</div>
              <blockquote>"{reviews[idx].text}"</blockquote>
              <div className="author">
                <div className="author-avatar">{reviews[idx].name[0]}</div>
                <div>
                  <strong>{reviews[idx].name}</strong>
                  <span>{reviews[idx].role} · {reviews[idx].city}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="carousel-nav">
            <button onClick={() => go(-1)} aria-label="Previous"><ChevronLeft size={22} /></button>
            <div className="dots">
              {reviews.map((_, i) => (
                <button key={i} className={`dot${i === idx ? ' active' : ''}`} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }} aria-label={`Review ${i + 1}`} />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next"><ChevronRight size={22} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
