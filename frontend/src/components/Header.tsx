import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Services', href: '#services', sectionId: 'services' },
  { label: 'Certifications', href: '#certifications', sectionId: 'certifications' },
  { label: 'Contacts', href: '#contacts', sectionId: 'contacts' },
] as const

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.sectionId)
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(4,13,27,0.92)' : 'var(--color-surface-dark)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderColor: 'rgba(255,255,255,0.08)',
      } as React.CSSProperties}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[76px] items-center justify-between py-3 sm:min-h-[84px]">
          {/* Logo */}
          <a
            href="#"
            aria-label="JTK Spares — back to top"
            className="navbar-brand shrink-0 self-stretch py-1"
          >
            <img
              src="/jtk_logo.svg"
              alt="JTK Spares"
              className="navbar-brand__logo max-w-[220px] sm:max-w-[290px] lg:max-w-[320px]"
            />
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href, sectionId }) => {
              const isActive = activeSection === sectionId
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className="text-sm font-medium uppercase tracking-wider transition-colors duration-200"
                  style={{
                    color: isActive ? 'var(--color-brand)' : 'rgba(255,255,255,0.65)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-brand)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = isActive ? 'var(--color-brand)' : 'rgba(255,255,255,0.65)' }}
                >
                  {label}
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contacts"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-white uppercase tracking-wide transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-brand)' }}
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
          style={{ backgroundColor: 'var(--color-surface-dark)', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <nav aria-label="Mobile navigation" className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href, sectionId }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-medium uppercase tracking-wider transition-colors"
                style={{ color: activeSection === sectionId ? 'var(--color-brand)' : 'rgba(255,255,255,0.7)' }}
              >
                {label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setMenuOpen(false)}
              className="mt-2 py-3 px-4 text-sm font-semibold text-white text-center uppercase tracking-wide transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
