import { lazy, Suspense } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

// Below-fold sections loaded lazily for faster initial paint
const AboutSection = lazy(() => import('./components/AboutSection'))
const ServicesSection = lazy(() => import('./components/ServicesSection'))
const CertificationsSection = lazy(() => import('./components/CertificationsSection'))
const PartnersSection = lazy(() => import('./components/PartnersSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))

function SectionFallback() {
  return (
    <div
      className="py-24"
      aria-hidden="true"
      style={{ minHeight: '400px', backgroundColor: 'var(--section-alt-bg)' }}
    />
  )
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CertificationsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <PartnersSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
