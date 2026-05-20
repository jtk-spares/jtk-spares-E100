import { Search, Wrench, Settings, Zap, Package, HeadphonesIcon } from 'lucide-react'
import FadeContent from './ui/FadeContent'

const SERVICES = [
  {
    icon: Search,
    title: 'Part Sourcing',
    description:
      'We identify and procure hard-to-find mechanical, electrical, hydraulic, and pneumatic spares from our supplier network.',
  },
  {
    icon: Package,
    title: 'Procurement & Logistics',
    description:
      'End-to-end procurement management — supplier negotiation, order tracking, and delivery coordination to your site.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Support',
    description:
      'Planned and reactive maintenance parts kits assembled to your equipment specifications and service schedules.',
  },
  {
    icon: Settings,
    title: 'Installation Assistance',
    description:
      'On-site installation coordination for major component replacements, reducing machine downtime.',
  },
  {
    icon: Zap,
    title: 'Electrical Components',
    description:
      'Motors, drives, PLCs, sensors, and electrical assemblies sourced from OEM and quality-approved suppliers.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Technical Consultation',
    description:
      'Not sure what you need? Our team helps identify the correct specification for your equipment from drawings or samples.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 scroll-mt-16"
      style={{ backgroundColor: 'var(--section-alt-bg)' }}
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <FadeContent>
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-mono)' }}
          >
            What we do
          </p>
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl font-extrabold uppercase leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
          >
            Our Services
          </h2>
        </div>
        </FadeContent>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <FadeContent key={title} delay={i * 60}>
            <article
              className="card-hover p-6 border h-full"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
              }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-5"
                style={{ backgroundColor: 'var(--color-surface-panel-strong)', color: 'var(--color-brand)' }}
              >
                <Icon size={18} aria-hidden="true" />
              </div>
              <h3
                className="font-bold text-base uppercase tracking-wide mb-3"
                style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}
              >
                {title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{description}</p>
            </article>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}
