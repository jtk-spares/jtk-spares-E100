import { ShieldCheck } from 'lucide-react'
import FadeContent from './ui/FadeContent'

const CERTIFICATIONS = [
  {
    title: 'CIDB Registered',
    detail: 'Construction Industry Development Board, graded contractor status.',
  },
  {
    title: 'B-BBEE Compliant',
    detail: 'Broad-Based Black Economic Empowerment, Level 1 contributor.',
  },
  {
    title: 'CSD Registered Supplier',
    detail: 'Listed on the Central Supplier Database for government and parastatal procurement.',
  },
  {
    title: 'Registered Company',
    detail: 'Registered with the CIPC, Reg No: 2023/885133/07.',
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 scroll-mt-16" aria-labelledby="cert-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <FadeContent>
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-mono)' }}
          >
            Compliance
          </p>
          <h2
            id="cert-heading"
            className="text-4xl sm:text-5xl font-extrabold uppercase leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
          >
            Certifications
          </h2>
        </div>
        </FadeContent>

        {/* List */}
        <FadeContent delay={100}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CERTIFICATIONS.map(({ title, detail }) => (
            <li
              key={title}
              className="card-hover flex gap-4 p-6 border"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <ShieldCheck
                size={22}
                style={{ color: 'var(--color-brand)', flexShrink: 0, marginTop: '3px' }}
                aria-hidden="true"
              />
              <div>
                <p
                  className="font-bold uppercase tracking-wide text-sm mb-2"
                  style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}
                >
                  {title}
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{detail}</p>
              </div>
            </li>
          ))}
        </ul>
        </FadeContent>
      </div>
    </section>
  )
}
