import { ArrowRight, Wrench } from 'lucide-react'
import BlurText from './ui/BlurText'

const STATS = [
  { value: '200+', label: 'Parts Sourced' },
  { value: '7', label: 'Industries Served' },
  { value: '24hr', label: 'Response Time' },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen pt-16"
      style={{ backgroundColor: 'var(--color-surface-dark)' }}
      aria-label="Hero"
    >
      {/* SVG dot-grid texture */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.07 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      {/* Orange glow accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 20%, rgba(234,92,39,0.12) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-white/20 text-xs uppercase tracking-widest text-white/60">
            <Wrench size={12} aria-hidden="true" />
            <span>South African Industrial Spares</span>
          </div>

          {/* Animated H1 */}
          <BlurText
            text="Industrial parts sourced fast."
            as="h1"
            animateBy="words"
            delay={90}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" } as React.CSSProperties}
          />

          <p className="text-lg max-w-xl leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
            JTK Spares supplies and sources mechanical, electrical, and hydraulic spares for
            South African manufacturers, with the reliability your operations demand.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white uppercase tracking-wide transition-colors duration-200"
              style={{ backgroundColor: 'var(--color-brand)', minHeight: '44px' }}
            >
              Get a Quote
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide border text-white/80 hover:text-white transition-colors duration-200"
              style={{ borderColor: 'rgba(255,255,255,0.3)', minHeight: '44px' }}
            >
              Our Services
            </a>
          </div>

          {/* Stat strip */}
          <div
            className="flex flex-wrap gap-0 divide-x"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)', divideColor: 'rgba(255,255,255,0.1)' } as React.CSSProperties}
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col px-6 pt-5 first:pl-0">
                <span
                  className="text-3xl font-extrabold uppercase leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'var(--color-brand)' }}
                >
                  {value}
                </span>
                <span className="text-xs uppercase tracking-widest mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
