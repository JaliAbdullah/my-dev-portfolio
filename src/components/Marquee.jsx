import profile from '../data/profile.js'

export default function Marquee() {
  const text = profile.marqueeItems.join(' \u2726 ') + ' \u2726 '
  return (
    <div className="w-full bg-on-background text-primary-container py-4 marquee-container">
      <div className="marquee-content font-label-mono text-label-mono text-lg uppercase font-bold tracking-widest">
        {text.repeat(2)}
      </div>
    </div>
  )
}
