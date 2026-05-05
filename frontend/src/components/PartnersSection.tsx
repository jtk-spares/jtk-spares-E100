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
  return (
    <section
      id="partners"
      className="py-24 scroll-mt-16"
      style={{ backgroundColor: 'var(--jtk-surface)' }}
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--jtk-orange)' }}
          >
            Trusted by
          </p>
          <h2
            id="partners-heading"
            className="text-4xl sm:text-5xl font-extrabold uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'var(--jtk-navy)' }}
          >
            Our Clients &amp; Partners
          </h2>
        </div>

        <ul className="flex flex-wrap justify-center gap-4">
          {PARTNERS.map((name) => (
            <li
              key={name}
              className="px-6 py-4 bg-white border border-gray-200 text-sm font-semibold uppercase tracking-wide"
              style={{ color: 'var(--jtk-navy)' }}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
