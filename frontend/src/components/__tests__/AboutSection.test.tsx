import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AboutSection from '../AboutSection'

describe('AboutSection', () => {
  it('has an id of "about" for anchor navigation', () => {
    const { container } = render(<AboutSection />)
    expect(container.querySelector('#about')).toBeInTheDocument()
  })

  it('renders a section heading', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
  })

  it('mentions JTK Spares by name', () => {
    render(<AboutSection />)
    expect(screen.getByText(/JTK Spares/i)).toBeInTheDocument()
  })

  it('mentions the director Jason Kwalie', () => {
    render(<AboutSection />)
    expect(screen.getByText(/Jason Kwalie/i)).toBeInTheDocument()
  })
})
