import { Search, Wrench, Settings, Zap, Package, HeadphonesIcon } from 'lucide-react'

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
      'End-to-end procurement management: supplier negotiation, order tracking, and delivery coordination to your site.',
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
      style={{ backgroundColor: 'var(--jtk-surface)' }}
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--jtk-orange)' }}
          >
            What we do
          </p>
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl font-extrabold uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'var(--jtk-navy)' }}
          >
            Our Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="bg-white p-6 border border-gray-100"
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-4"
                style={{ backgroundColor: 'var(--jtk-navy)' }}
              >
                <Icon size={18} className="text-white" aria-hidden="true" />
              </div>
              <h3
                className="font-bold text-base uppercase tracking-wide mb-2"
                style={{ color: 'var(--jtk-navy)', fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
