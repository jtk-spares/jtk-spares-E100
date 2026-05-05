import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />

      <main>
        <section id="hero" style={{ paddingTop: '64px' }}>
          {/* Phase 2: Hero section */}
        </section>

        <section id="about" className="py-24 scroll-mt-16">
          {/* Phase 2: About section */}
        </section>

        <section id="services" className="py-24 scroll-mt-16" style={{ backgroundColor: 'var(--jtk-surface)' }}>
          {/* Phase 2: Services section */}
        </section>

        <section id="certifications" className="py-24 scroll-mt-16">
          {/* Phase 2: Certifications section */}
        </section>

        <section id="partners" className="py-24 scroll-mt-16" style={{ backgroundColor: 'var(--jtk-surface)' }}>
          {/* Phase 2: Partners scroll section — NOT in nav */}
        </section>

        <section id="contacts" className="py-24 scroll-mt-16">
          {/* Phase 2: Contact form section */}
        </section>
      </main>

      <Footer />
    </>
  )
}
