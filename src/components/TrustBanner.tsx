import { HeartPulse, Sparkles, ClipboardList, Leaf } from 'lucide-react'
import './TrustBanner.css'

const badges = [
  { icon: <ClipboardList size={22} />, text: 'Tailored Meal Plans' },
  { icon: <Leaf size={22} />, text: 'No Starvation Diets' },
  { icon: <HeartPulse size={22} />, text: '100% Natural Recipes' },
  { icon: <Sparkles size={22} />, text: '50+ Happy Transformations' },
]

export default function TrustBanner() {
  // We duplicate the array to guarantee a seamless, infinite marquee scroll loop on ultra-wide screens
  const marqueeItems = [...badges, ...badges, ...badges, ...badges]

  return (
    <div className="trust-banner">
      <div className="trust-track">
        {marqueeItems.map((b, i) => (
          <div className="trust-item" key={i}>
            <div className="trust-icon-wrap">{b.icon}</div>
            <span>{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
