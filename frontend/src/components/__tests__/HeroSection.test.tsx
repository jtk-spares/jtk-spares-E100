import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HeroSection from '../HeroSection'

describe('HeroSection', () => {
  it('renders the main headline', () => {
    render(<HeroSection />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the forklift hero image layer', () => {
    const { container } = render(<HeroSection />)
    expect(container.querySelector('[data-testid="hero-forklift-image"]')).toHaveAttribute('src', '/forklift-hero.webp')
  })

  it('headline contains JTK or industrial parts context', () => {
    render(<HeroSection />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.textContent).toMatch(/parts|spares|industrial|sourcing/i)
  })

  it('renders a primary CTA link to #contacts', () => {
    render(<HeroSection />)
    const cta = screen.getByRole('link', { name: /quote|contact|enquire/i })
    expect(cta).toHaveAttribute('href', '#contacts')
  })

  it('renders a secondary CTA link to #services', () => {
    render(<HeroSection />)
    const cta = screen.getByRole('link', { name: /services|what we do/i })
    expect(cta).toHaveAttribute('href', '#services')
  })
})
