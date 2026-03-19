import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, SectionTitle } from './ui'
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'
import './Contact.css'

interface FormState { name: string; phone: string; email: string; plan: string; date: string; message: string }
interface Errors { name?: string; phone?: string; email?: string; plan?: string }

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', plan: '', date: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!/^[0-9]{10,}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid phone number'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.plan) e.plan = 'Please select a plan'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field as keyof Errors]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <SectionTitle title="Book Your Plan" subtitle="Start your health journey today — Nupur will personally reach out to you" />
        <div className="contact-grid">
          <FadeIn direction="left">
            <div className="contact-form-wrap">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form key="form" onSubmit={handleSubmit} noValidate exit={{ opacity: 0, scale: .97 }}>
                    <div className={`fg${errors.name ? ' err' : ''}`}>
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange('name')} />
                      {errors.name && <span className="err-msg">{errors.name}</span>}
                    </div>
                    <div className={`fg${errors.phone ? ' err' : ''}`}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input id="phone" type="tel" placeholder="10-digit phone number" value={form.phone} onChange={handleChange('phone')} />
                      {errors.phone && <span className="err-msg">{errors.phone}</span>}
                    </div>
                    <div className={`fg${errors.email ? ' err' : ''}`}>
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange('email')} />
                      {errors.email && <span className="err-msg">{errors.email}</span>}
                    </div>
                    <div className={`fg${errors.plan ? ' err' : ''}`}>
                      <label htmlFor="plan">Select Plan *</label>
                      <select id="plan" value={form.plan} onChange={handleChange('plan')}>
                        <option value="">Choose a plan...</option>
                        <option value="complete">Complete Meal Plan — ₹4,500 / 6 days</option>
                        <option value="dinner">Dinner Plan — ₹2,500 / 6 days</option>
                      </select>
                      {errors.plan && <span className="err-msg">{errors.plan}</span>}
                    </div>
                    <div className="fg">
                      <label htmlFor="date">Preferred Start Date</label>
                      <input id="date" type="date" value={form.date} onChange={handleChange('date')} />
                    </div>
                    <div className="fg">
                      <label htmlFor="msg">Message (optional)</label>
                      <textarea id="msg" placeholder="Any dietary restrictions, goals, or questions..." value={form.message} onChange={handleChange('message')} />
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">Submit Booking Request →</button>
                  </motion.form>
                ) : (
                  <motion.div key="success" className="success-box" initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className="success-icon">✅</div>
                    <h3>Thank you, {form.name.split(' ')[0]}!</h3>
                    <p>Nupur will contact you within <strong>24 hours</strong> to discuss your plan.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Have questions? Reach out directly via WhatsApp for the fastest response from Nupur.</p>
              <div className="info-list">
                <div className="info-item"><div className="info-icon"><Phone size={18} /></div><span>+91 90493 33389</span></div>
                <div className="info-item"><div className="info-icon"><Instagram size={18} /></div><a href="https://www.instagram.com/dietworld_nupurs" target="_blank" rel="noopener noreferrer">@dietworld_nupurs</a></div>
                <div className="info-item"><div className="info-icon"><MapPin size={18} /></div><span>Nagpur, India</span></div>
                <div className="info-item"><div className="info-icon"><Clock size={18} /></div><span>Mon – Sat: 9 AM – 7 PM</span></div>
              </div>
              <a
                href="https://wa.me/919049333389?text=Hi%20Nupur!%20I%27m%20interested%20in%20your%20meal%20plans.%20Can%20you%20tell%20me%20more%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta"
              >
                <svg viewBox="0 0 32 32" fill="white" width={22} height={22}><path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.926 15.926 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.31 22.606c-.39 1.1-1.932 2.014-3.166 2.282-.846.18-1.95.324-5.668-1.218-4.762-1.972-7.826-6.81-8.064-7.126-.23-.316-1.932-2.572-1.932-4.904 0-2.332 1.224-3.476 1.658-3.952.39-.428 1.028-.624 1.64-.624.198 0 .376.01.536.018.47.02.708.048 1.018.788.39.928 1.34 3.26 1.458 3.498.118.238.236.554.078.87-.15.324-.282.468-.52.738-.238.27-.464.476-.702.768-.218.254-.464.526-.196.996.268.462 1.192 1.964 2.558 3.182 1.758 1.566 3.238 2.052 3.7 2.28.462.228.732.19 1-.116.278-.316 1.186-1.382 1.502-1.858.308-.476.624-.396 1.048-.238.43.158 2.724 1.284 3.19 1.518.462.238.772.352.886.55.118.198.118 1.148-.272 2.248z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
