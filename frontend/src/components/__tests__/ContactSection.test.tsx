import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import ContactSection from '../ContactSection'

describe('ContactSection', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => ({ message: 'sent' }) }))
  })

  it('has an id of "contacts" for anchor navigation', () => {
    const { container } = render(<ContactSection />)
    expect(container.querySelector('#contacts')).toBeInTheDocument()
  })

  it('renders a section heading', () => {
    render(<ContactSection />)
    expect(screen.getByRole('heading', { name: /contact|get in touch|enquir/i })).toBeInTheDocument()
  })

  it('renders a name input', () => {
    render(<ContactSection />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
  })

  it('renders an email input', () => {
    render(<ContactSection />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('renders a message textarea', () => {
    render(<ContactSection />)
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders a submit button', () => {
    render(<ContactSection />)
    expect(screen.getByRole('button', { name: /send|submit/i })).toBeInTheDocument()
  })

  it('renders a honeypot field that is visually hidden', () => {
    const { container } = render(<ContactSection />)
    const honeypot = container.querySelector('[aria-hidden="true"]')
    expect(honeypot).toBeInTheDocument()
  })

  it('shows a success message after valid submission', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    await user.type(screen.getByLabelText(/name/i), 'Test User')
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/message/i), 'Hello there')
    await user.click(screen.getByRole('button', { name: /send|submit/i }))
    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })
  })

  it('shows validation error when name is empty', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    await user.click(screen.getByRole('button', { name: /send|submit/i }))
    await waitFor(() => {
      expect(screen.getAllByRole('alert').length).toBeGreaterThanOrEqual(1)
    })
  })
})
