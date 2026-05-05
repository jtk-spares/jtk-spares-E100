import { ShieldCheck } from 'lucide-react'

const CERTIFICATIONS = [
  {
    title: 'CIDB Registered',
    detail: 'Construction Industry Development Board — Graded contractor status.',
  },
  {
    title: 'B-BBEE Compliant',
    detail: 'Broad-Based Black Economic Empowerment — Level 1 contributor.',
  },
  {
    title: 'CSD Registered Supplier',
    detail: 'Listed on the Central Supplier Database for government and parastatal procurement.',
  },
  {
    title: 'Registered Company',
    detail: 'Registered with the CIPC — Reg No: 2023/885133/07.',
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 scroll-mt-16" aria-labelledby="cert-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--jtk-orange)' }}
          >
            Compliance
          </p>
          <h2
            id="cert-heading"
            className="text-4xl sm:text-5xl font-extrabold uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'var(--jtk-navy)' }}
          >
            Certifications
          </h2>
        </div>

        {/* List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CERTIFICATIONS.map(({ title, detail }) => (
            <li
              key={title}
              className="flex gap-4 p-6 border border-gray-200 bg-white"
            >
              <ShieldCheck
                size={24}
                style={{ color: 'var(--jtk-orange)', flexShrink: 0, marginTop: '2px' }}
                aria-hidden="true"
              />
              <div>
                <p
                  className="font-bold uppercase tracking-wide text-sm mb-1"
                  style={{ color: 'var(--jtk-navy)', fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {title}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
