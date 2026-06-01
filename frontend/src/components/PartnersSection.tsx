import FadeContent from './ui/FadeContent'

const PARTNERS = [
  'Appletizer',
  'Coca-Cola',
  'Western Cape Milling',
  'Bio-Gas',
  'Tiger Wheel & Tyre',
  'Waltons Bidvest',
  'Western Cape Fruit Processors',
]

export default function PartnersSection() {
  // Duplicate the list so the marquee seamlessly loops
  const doubled = [...PARTNERS, ...PARTNERS]

  return (
    <section
      id="partners"
      className="py-24 scroll-mt-16 overflow-hidden"
      style={{ backgroundColor: 'var(--section-alt-bg)' }}
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeContent>
          <div className="text-center mb-16">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-mono)' }}
            >
              Trusted by
            </p>
            <h2
              id="partners-heading"
              className="text-4xl sm:text-5xl font-extrabold uppercase leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              Our Clients &amp; Partners
            </h2>
          </div>
        </FadeContent>
      </div>

      {/* Accessible list, hidden visually but present for tests and screen readers */}
      <ul className="sr-only">
        {PARTNERS.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      {/* Visual marquee */}
      <div
        aria-hidden="true"
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="marquee-track">
          {doubled.map((name, i) => (
            <div
              key={i}
              data-label={name}
              className="marquee-item flex-shrink-0 mx-4 px-6 py-4 border"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                color: 'var(--color-text-primary)',
                whiteSpace: 'nowrap',
                minWidth: '10rem',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
