import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PartnersSection from '../PartnersSection'

describe('PartnersSection', () => {
  it('has an id of "partners" for anchor navigation', () => {
    const { container } = render(<PartnersSection />)
    expect(container.querySelector('#partners')).toBeInTheDocument()
  })

  it('renders a section heading', () => {
    render(<PartnersSection />)
    expect(screen.getByRole('heading', { name: /partner|client/i })).toBeInTheDocument()
  })

  it('renders Coca-Cola as a client', () => {
    render(<PartnersSection />)
    expect(screen.getByText(/Coca.Cola/i)).toBeInTheDocument()
  })

  it('renders Tiger Wheel & Tyre as a client', () => {
    render(<PartnersSection />)
    expect(screen.getByText(/Tiger Wheel/i)).toBeInTheDocument()
  })

  it('renders Appletizer as a client', () => {
    render(<PartnersSection />)
    expect(screen.getByText(/Appletizer/i)).toBeInTheDocument()
  })

  it('renders at least 5 client names', () => {
    render(<PartnersSection />)
    // Each partner rendered inside a list or grid item
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBeGreaterThanOrEqual(5)
  })
})
