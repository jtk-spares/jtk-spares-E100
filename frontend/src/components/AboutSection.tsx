import { CheckCircle } from 'lucide-react'

const VALUES = [
  'Rapid sourcing across local and international suppliers',
  'Dedicated account management — one point of contact',
  'Competitive pricing with no compromise on quality',
  'Serving manufacturers across the Western Cape since 2023',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 scroll-mt-16" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--jtk-orange)' }}
            >
              About us
            </p>
            <h2
              id="about-heading"
              className="text-4xl sm:text-5xl font-extrabold uppercase leading-tight mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'var(--jtk-navy)' }}
            >
              About us — built on speed
              <br />
              and reliability
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              JTK Spares was founded by <strong>Jason Kwalie</strong> to solve a real problem —
              manufacturers waiting days or weeks for parts that should arrive in hours. We cut
              through supplier complexity to get your line moving again.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Based in Parow, Cape Town, we partner with leading industrial clients
              across the Western Cape, sourcing mechanical, electrical, hydraulic, and
              pneumatic components from trusted local and international networks.
            </p>
          </div>

          {/* Value list */}
          <div>
            <ul className="space-y-4">
              {VALUES.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    style={{ color: 'var(--jtk-orange)', flexShrink: 0, marginTop: '2px' }}
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 leading-relaxed">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
