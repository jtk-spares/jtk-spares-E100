import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import CertificationsSection from './components/CertificationsSection'
import PartnersSection from './components/PartnersSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CertificationsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
