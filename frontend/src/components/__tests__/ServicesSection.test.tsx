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

  it('renders at least 3 service items', () => {
    render(<ServicesSection />)
    // Each service should have a heading
    const serviceHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(serviceHeadings.length).toBeGreaterThanOrEqual(3)
  })

  it('renders Part Sourcing as a service', () => {
    render(<ServicesSection />)
    expect(screen.getByText(/part sourcing|sourcing/i)).toBeInTheDocument()
  })

  it('renders Maintenance or Repair as a service', () => {
    render(<ServicesSection />)
    expect(screen.getAllByText(/maintenance|repair|installation/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the regulatory compliance card copy', () => {
    render(<ServicesSection />)
    expect(screen.getByText(/Regulatory Compliance & Operator Licensing/i)).toBeInTheDocument()
    expect(screen.getByText(/reverse alarms, strobe lights, speed limiters, and safety cages/i)).toBeInTheDocument()
  })
})
