import FadeContent from './ui/FadeContent'

const SERVICES = [
  {
    title: 'Part Sourcing',
    description:
      'We identify and procure hard-to-find mechanical, electrical, hydraulic, and pneumatic spares from our supplier network.',
    image: '/service-part-sourcing.jpeg',
    imageAlt: 'Bearings, seals, and hubs for industrial equipment',
  },
  {
    title: 'Procurement & Logistics',
    description:
      'End-to-end procurement management, supplier negotiation, order tracking, and delivery coordination to your site.',
    image: '/service-procurement-logistics.jpeg',
    imageAlt: 'Forklift tyres and wheels for heavy-duty operations',
  },
  {
    title: 'Maintenance Support',
    description:
      'Planned and reactive maintenance parts kits assembled to your equipment specifications and service schedules.',
    image: '/service-maintenance-support.jpeg',
    imageAlt: 'Filters, batteries, and service kits for equipment upkeep',
  },
  {
    title: 'Installation Assistance',
    description:
      'On-site installation coordination for major component replacements, reducing machine downtime.',
    image: '/service-installation.jpeg',
    imageAlt: 'Forks, chains, and lifting components for forklifts',
  },
  {
    title: 'Regulatory Compliance & Operator Licensing',
    description:
      'We handle mandatory operator licensing and medical certifications, alongside the sourcing and installation of required vehicle safety and compliance components such as reverse alarms, strobe lights, speed limiters, and safety cages.',
    image: '/service-compliance.jpeg',
    imageAlt: 'Forklift seats and operating controls for operator safety',
  },
  {
    title: 'Technical Consultation',
    description:
      'Not sure what you need? Our team helps identify the correct specification for your equipment from drawings or samples.',
    image: '/service-consultation.jpeg',
    imageAlt: 'Hydraulic pumps and cylinders for precise industrial control',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ title, description, image, imageAlt }, i) => (
            <FadeContent key={title} delay={i * 60}>
              <article
                className="group card-hover border h-full overflow-hidden flex flex-col"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--card-border)',
                }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="font-bold text-base uppercase tracking-wide mb-3"
                    style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {description}
                  </p>
                </div>
              </article>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}
