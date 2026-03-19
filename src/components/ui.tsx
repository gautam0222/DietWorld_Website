import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}

export const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : 0,
      x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface SectionTitleProps {
  title: string
  subtitle?: string
  light?: boolean
}

export const SectionTitle = ({ title, subtitle, light = false }: SectionTitleProps) => (
  <FadeIn>
    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
        color: light ? 'var(--white)' : 'var(--green-dark)',
        marginBottom: '12px'
      }}>{title}</h2>
      {subtitle && (
        <p style={{ color: light ? 'rgba(255,255,255,.75)' : 'var(--gray)', fontSize: '1.05rem', maxWidth: 520, margin: '0 auto' }}>
          {subtitle}
        </p>
      )}
      <div style={{
        width: 60, height: 4,
        background: light ? 'linear-gradient(90deg, var(--gold), rgba(255,255,255,.4))' : 'linear-gradient(90deg, var(--gold), var(--green))',
        borderRadius: 2,
        margin: '16px auto 0'
      }} />
    </div>
  </FadeIn>
)
