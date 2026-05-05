import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contacts', href: '#contacts' },
] as const

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b"
      style={{ backgroundColor: 'var(--jtk-navy)', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" aria-label="JTK Spares — back to top" className="flex items-center">
            <span
              className="font-bold text-xl uppercase tracking-wide text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              JTK{' '}
              <span style={{ color: 'var(--jtk-orange)' }}>Spares</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-white/70 hover:text-white uppercase tracking-wider transition-colors duration-200"
                style={{ '--tw-hover-color': 'var(--jtk-orange)' } as React.CSSProperties}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contacts"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-white uppercase tracking-wide transition-colors duration-200"
              style={{ backgroundColor: 'var(--jtk-orange)' }}
            >
              Get a Quote
            </a>
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2 text-white flex items-center justify-center"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t"
          style={{ backgroundColor: 'var(--jtk-navy)', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <nav aria-label="Mobile navigation" className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-medium text-white/70 hover:text-white uppercase tracking-wider transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setMenuOpen(false)}
              className="mt-2 py-3 px-4 text-sm font-semibold text-white text-center uppercase tracking-wide transition-colors"
              style={{ backgroundColor: 'var(--jtk-orange)' }}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
