import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders a phone link with tel: href', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /\+27/i })
    expect(link.getAttribute('href')).toMatch(/^tel:/)
  })

  it('renders an email link with mailto: href', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /jason@jtkspares/i })
    expect(link.getAttribute('href')).toMatch(/^mailto:/)
  })

  it('renders a WhatsApp CTA link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /whatsapp/i })
    expect(link).toBeInTheDocument()
  })

  it('renders the physical address', () => {
    render(<Footer />)
    expect(screen.getByText(/Parow/i)).toBeInTheDocument()
  })

  it('renders the company registration number', () => {
    render(<Footer />)
    expect(screen.getByText(/2023\/885133\/07/i)).toBeInTheDocument()
  })

  it('renders Jason Kwalie as contact name', () => {
    render(<Footer />)
    expect(screen.getByText(/Jason Kwalie/i)).toBeInTheDocument()
  })
})
