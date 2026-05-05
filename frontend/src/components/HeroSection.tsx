import { ArrowRight, Wrench } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen pt-16"
      style={{ backgroundColor: 'var(--jtk-navy)' }}
      aria-label="Hero"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,.3) 59px, rgba(255,255,255,.3) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,.3) 59px, rgba(255,255,255,.3) 60px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-white/20 text-xs uppercase tracking-widest text-white/60">
            <Wrench size={12} aria-hidden="true" />
            <span>South African Industrial Spares</span>
          </div>

          {/* H1 */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Industrial{' '}
            <span style={{ color: 'var(--jtk-orange)' }}>parts</span>
            {' '}sourced
            <br />
            fast.
          </h1>

          <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-10">
            JTK Spares supplies and sources mechanical, electrical, and hydraulic spares for
            South African manufacturers — with the reliability your operations demand.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white uppercase tracking-wide transition-colors duration-200"
              style={{ backgroundColor: 'var(--jtk-orange)', minHeight: '44px' }}
            >
              Get a Quote
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide border border-white/30 text-white/80 hover:text-white hover:border-white/60 transition-colors duration-200"
              style={{ minHeight: '44px' }}
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
