import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FadeIn, SectionTitle } from './ui'
import './FAQ.css'

const faqs = [
  { q: 'Do I have to starve myself to lose weight?', a: 'Absolutely not! My plans focus on eating the right foods in the right proportions. You will actually feel more full and energized while achieving your goals.' },
  { q: 'Are the ingredients expensive or hard to find?', a: 'No. All plans use simple, local, and home-cooked ingredients that you probably already have in your kitchen or can easily find at your nearest local grocery store.' },
  { q: 'What if I travel frequently or eat out often?', a: 'That is completely normal! I provide travel-friendly fallback guides and strategies for dining out so you never have to pause your health journey.' },
  { q: 'How does the WhatsApp consultation format work?', a: 'I will personally be in touch with you via WhatsApp. You can ask questions, share your meal pictures, and get instant feedback and motivation directly from me.' },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <SectionTitle title="Frequently Asked Questions" subtitle="Everything you need to know before starting your journey" />
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`faq-item ${openIdx === i ? 'active' : ''}`} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                <div className="faq-q">
                  <h4>{faq.q}</h4>
                  <ChevronDown size={20} className="faq-icon" />
                </div>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: 'easeInOut' }}>
                      <p className="faq-a">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
