import type { FC } from 'react'
import FadeContent from './ui/FadeContent'

const VALUES = [
  'Rapid sourcing across local and international suppliers',
  'Dedicated account management, one point of contact',
  'Competitive pricing with no compromise on quality',
  'Serving manufacturers across the Western Cape since 2023',
]

const AboutSection: FC = () => {
  return (
    <section id="about" className="py-24 scroll-mt-16" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <FadeContent>
          <div>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-brand)' }}
            >
              About us
            </p>
            <h2
              id="about-heading"
              className="text-4xl sm:text-5xl font-extrabold uppercase leading-tight mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'var(--color-surface-dark)' }}
            >
              About us: built on speed
              <br />
              and reliability
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              JTK Spares was founded by <strong>Jason Kwalie</strong> to solve a real problem.
              Manufacturers waiting days or weeks for parts that should arrive in hours. We cut
              through supplier complexity to get your line moving again.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Based in Parow, Cape Town, we partner with leading industrial clients
              across the Western Cape, sourcing mechanical, electrical, hydraulic, and
              pneumatic components from trusted local and international networks.
            </p>
          </div>
          </FadeContent>

          {/* Value list with left accent bars */}
          <FadeContent delay={120}>
          <div>
            <ul className="space-y-4">
              {VALUES.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-0 pl-4"
                  style={{ borderLeft: '3px solid var(--color-brand)' }}
                >
                  <span className="text-base leading-relaxed py-2 pl-3" style={{ color: 'var(--color-text-secondary)' }}>
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
