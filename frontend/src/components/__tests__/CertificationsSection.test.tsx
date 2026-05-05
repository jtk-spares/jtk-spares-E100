import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CertificationsSection from '../CertificationsSection'

describe('CertificationsSection', () => {
  it('has an id of "certifications" for anchor navigation', () => {
    const { container } = render(<CertificationsSection />)
    expect(container.querySelector('#certifications')).toBeInTheDocument()
  })

  it('renders a section heading', () => {
    render(<CertificationsSection />)
    expect(screen.getByRole('heading', { name: /certif/i })).toBeInTheDocument()
  })

  it('renders at least 1 certification or compliance item', () => {
    render(<CertificationsSection />)
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBeGreaterThanOrEqual(1)
  })

  it('mentions CIDB or B-BBEE or ISO', () => {
    render(<CertificationsSection />)
    expect(screen.getAllByText(/CIDB|B-BBEE|ISO|compliant/i).length).toBeGreaterThanOrEqual(1)
  })
})
