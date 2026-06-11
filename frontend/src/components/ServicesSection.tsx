import FadeContent from './ui/FadeContent'

const SERVICES = [
  {
    image: '/service-part-sourcing.jpeg',
    imageAlt: 'Bearings, seals, and hubs for industrial equipment',
  },
  {
    image: '/service-procurement-logistics.jpeg',
    imageAlt: 'Forklift tyres and wheels for heavy-duty operations',
  },
  {
    image: '/service-maintenance-support.jpeg',
    imageAlt: 'Filters, batteries, and service kits for equipment upkeep',
  },
  {
    image: '/service-installation.jpeg',
    imageAlt: 'Forks, chains, and lifting components for forklifts',
  },
  {
    image: '/service-compliance.jpeg',
    imageAlt: 'Forklift seats and operating controls for operator safety',
  },
  {
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
          {SERVICES.map(({ image, imageAlt }, i) => (
            <FadeContent key={image} delay={i * 60}>
              <article
                className="group card-hover border overflow-hidden"
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
              </article>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}
