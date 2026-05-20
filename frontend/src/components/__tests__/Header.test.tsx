import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../Header'

describe('Header', () => {
  it('renders the JTK Spares brand name', () => {
    render(<Header />)
    // Logo link aria-label contains "JTK Spares"
    expect(screen.getByRole('link', { name: /JTK Spares/i })).toBeInTheDocument()
  })

  it('uses the supplied SVG navbar logo asset', () => {
    const { container } = render(<Header />)
    expect(container.querySelector('.navbar-brand__logo')).toHaveAttribute('src', '/jtk_logo.svg')
  })

  it('renders About nav link pointing to #about', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: /^about$/i })
    expect(link).toHaveAttribute('href', '#about')
  })

  it('renders Services nav link pointing to #services', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: /^services$/i })
    expect(link).toHaveAttribute('href', '#services')
  })

  it('renders Certifications nav link pointing to #certifications', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: /^certifications$/i })
    expect(link).toHaveAttribute('href', '#certifications')
  })

  it('renders Contacts nav link pointing to #contacts', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: /^contacts$/i })
    expect(link).toHaveAttribute('href', '#contacts')
  })

  it('renders a mobile menu toggle button with accessible label', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /open menu|close menu|menu/i })).toBeInTheDocument()
  })

  it('does NOT include Partners in the nav', () => {
    render(<Header />)
    expect(screen.queryByRole('link', { name: /^partners$/i })).not.toBeInTheDocument()
  })
})
