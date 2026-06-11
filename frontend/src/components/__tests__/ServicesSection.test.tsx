import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ServicesSection from '../ServicesSection'

describe('ServicesSection', () => {
  it('has an id of "services" for anchor navigation', () => {
    const { container } = render(<ServicesSection />)
    expect(container.querySelector('#services')).toBeInTheDocument()
  })

  it('renders a section heading', () => {
    render(<ServicesSection />)
    expect(screen.getByRole('heading', { name: /services/i })).toBeInTheDocument()
  })

  it('renders service images for each card', () => {
    render(<ServicesSection />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('src', '/service-part-sourcing.jpeg')
    expect(images[4]).toHaveAttribute('src', '/service-compliance.jpeg')
  })

  it('does not render card titles or descriptions under images', () => {
    render(<ServicesSection />)
    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument()
    expect(screen.queryByText(/part sourcing/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/reverse alarms, strobe lights/i)).not.toBeInTheDocument()
  })
})
