import { Phone, Mail, MapPin } from 'lucide-react'

const WA_NUMBER = '27683927937'
const WA_MSG = encodeURIComponent('Hi, I need assistance with spare parts.')

export default function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{ backgroundColor: 'var(--color-surface-dark)', borderColor: 'var(--card-border)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span
              className="font-bold text-xl text-white uppercase tracking-wide"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              JTK <span style={{ color: 'var(--color-brand)' }}>Spares</span>
            </span>
            <p className="mt-3 text-sm max-w-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Industrial parts and equipment sourcing for South African manufacturers.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <p className="text-sm" style={{ color: 'var(--color-text-primary)' }}>Jason Kwalie</p>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>Director</p>
              </li>
              <li>
                <a
                  href="tel:+27683927937"
                  className="inline-flex items-center gap-2 text-sm transition-colors"
                  style={{ color: 'var(--color-text-secondary)', minHeight: '44px' }}
                >
                  <Phone size={14} style={{ color: 'var(--color-brand)' }} aria-hidden="true" />
                  +27(0)68 392 7937
                </a>
              </li>
              <li>
                <a
                  href="mailto:jason@jtkspares.co.za"
                  className="inline-flex items-center gap-2 text-sm transition-colors"
                  style={{ color: 'var(--color-text-secondary)', minHeight: '44px' }}
                >
                  <Mail size={14} style={{ color: 'var(--color-brand)' }} aria-hidden="true" />
                  jason@jtkspares.co.za
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors"
                  style={{ color: 'var(--color-text-secondary)', minHeight: '44px' }}
                  aria-label="WhatsApp Jason Kwalie"
                >
                  {/* WhatsApp brand SVG, no emoji */}
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ color: 'var(--color-brand)', flexShrink: 0 }}
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
              Location
            </h3>
            <address className="not-italic">
              <div className="flex gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <MapPin
                  size={14}
                  style={{ color: 'var(--color-brand)', marginTop: '2px', flexShrink: 0 }}
                  aria-hidden="true"
                />
                <span>
                  Unit 11 Dunda Park
                  <br />
                  23 Junction Road
                  <br />
                  Parow Ind 7493
                </span>
              </div>
            </address>
            <p className="mt-4 text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>Reg No: 2023/885133/07</p>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t"
          style={{ borderColor: 'var(--card-border)' }}
        >
          <p className="text-xs text-center" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
            &copy; {new Date().getFullYear()} JTK Spares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
