import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import './FloatingButtons.css'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="floating-wrap">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919049333389?text=Hi%20Nupur!%20I%27m%20interested%20in%20your%20meal%20plans.%20Can%20you%20tell%20me%20more%3F"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="white" width={28} height={28}>
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.926 15.926 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.31 22.606c-.39 1.1-1.932 2.014-3.166 2.282-.846.18-1.95.324-5.668-1.218-4.762-1.972-7.826-6.81-8.064-7.126-.23-.316-1.932-2.572-1.932-4.904 0-2.332 1.224-3.476 1.658-3.952.39-.428 1.028-.624 1.64-.624.198 0 .376.01.536.018.47.02.708.048 1.018.788.39.928 1.34 3.26 1.458 3.498.118.238.236.554.078.87-.15.324-.282.468-.52.738-.238.27-.464.476-.702.768-.218.254-.464.526-.196.996.268.462 1.192 1.964 2.558 3.182 1.758 1.566 3.238 2.052 3.7 2.28.462.228.732.19 1-.116.278-.316 1.186-1.382 1.502-1.858.308-.476.624-.396 1.048-.238.43.158 2.724 1.284 3.19 1.518.462.238.772.352.886.55.118.198.118 1.148-.272 2.248z"/>
        </svg>
        <span className="wa-tooltip">Chat with Nupur</span>
      </a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: .7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: .7 }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
