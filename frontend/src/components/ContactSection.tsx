import { useState, useRef, useCallback } from 'react'
import { Phone, Mail, Loader2 } from 'lucide-react'

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  message: string
  _trap: string   // honeypot
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const INITIAL: FormState = { name: '', email: '', phone: '', company: '', message: '', _trap: '' }

function validateField(name: keyof FormErrors, value: string): string | undefined {
  if (name === 'name') {
    if (!value.trim()) return 'Name is required. Please enter your full name.'
  }
  if (name === 'email') {
    if (!value.trim()) return 'Email is required. Please enter your email address.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email looks incorrect. Check for a missing @ or domain.'
  }
  if (name === 'message') {
    if (!value.trim()) return 'Message is required. Tell us what you need.'
  }
  return undefined
}

function validateAll(data: FormState): FormErrors {
  const errors: FormErrors = {}
  const fields = ['name', 'email', 'message'] as const
  for (const f of fields) {
    const err = validateField(f, data[f])
    if (err) errors[f] = err
  }
  return errors
}

const labelStyle: React.CSSProperties = {
  color: 'var(--color-text-muted)',
  fontFamily: 'var(--font-mono)',
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormErrors, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  // Refs for auto-focus on submit with errors
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const fieldRefs = { name: nameRef, email: emailRef, message: messageRef }

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Re-validate if already touched
    if (touched[name as keyof FormErrors]) {
      const err = validateField(name as keyof FormErrors, value)
      setErrors((prev) => ({ ...prev, [name]: err }))
    }
  }, [touched])

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const fieldName = name as keyof FormErrors
    if (!['name', 'email', 'message'].includes(fieldName)) return
    setTouched((prev) => ({ ...prev, [fieldName]: true }))
    const err = validateField(fieldName, value)
    setErrors((prev) => ({ ...prev, [fieldName]: err }))
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validateAll(form)
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      // Auto-focus first invalid field
      for (const f of ['name', 'email', 'message'] as const) {
        if (errs[f]) {
          fieldRefs[f].current?.focus()
          break
        }
      }
      return
    }
    if (form._trap) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
        }),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('sent')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacts" className="py-24 scroll-mt-16" style={{ backgroundColor: 'var(--section-alt-bg)' }} aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-mono)' }}
            >
              Get in touch
            </p>
            <h2
              id="contact-heading"
              className="text-4xl sm:text-5xl font-extrabold uppercase leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              Contact us
            </h2>
            <p className="leading-relaxed mb-10" style={{ color: 'var(--color-text-secondary)' }}>
              Tell us what you need. We'll respond within one business day with availability
              and pricing.
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+27683927937"
                  className="inline-flex items-center gap-3 text-sm font-medium transition-colors"
                  style={{ minHeight: '44px', color: 'var(--color-text-secondary)' }}
                >
                  <Phone
                    size={18}
                    style={{ color: 'var(--color-brand)' }}
                    aria-hidden="true"
                  />
                  +27(0)68 392 7937
                </a>
              </li>
              <li>
                <a
                  href="mailto:jason@jtkspares.co.za"
                  className="inline-flex items-center gap-3 text-sm font-medium transition-colors"
                  style={{ minHeight: '44px', color: 'var(--color-text-secondary)' }}
                >
                  <Mail
                    size={18}
                    style={{ color: 'var(--color-brand)' }}
                    aria-hidden="true"
                  />
                  jason@jtkspares.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div aria-live="polite">
            {status === 'sent' ? (
              <div
                className="p-8 border text-center"
                style={{ borderColor: 'var(--color-brand-strong)', backgroundColor: 'var(--card-bg)' }}
                role="alert"
              >
                <p
                  className="text-2xl font-bold uppercase mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                >
                  Thank you!
                </p>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Your message has been received. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-6 border p-6 sm:p-8" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                {/* Honeypot */}
                <div aria-hidden="true" style={{ display: 'none' }}>
                  <label htmlFor="_trap">Leave this empty</label>
                  <input
                    id="_trap"
                    name="_trap"
                    type="text"
                    value={form._trap}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-widest mb-2" style={labelStyle}>
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={nameRef}
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="block w-full px-3 py-2 border text-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: errors.name ? 'var(--input-border-error)' : 'var(--input-border)',
                      minHeight: '44px',
                    }}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium uppercase tracking-widest mb-2" style={labelStyle}>
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={emailRef}
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="block w-full px-3 py-2 border text-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: errors.email ? 'var(--input-border-error)' : 'var(--input-border)',
                      minHeight: '44px',
                    }}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone (optional) */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-widest mb-2" style={labelStyle}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    className="block w-full px-3 py-2 border text-sm focus:outline-none focus:ring-2"
                    style={{ minHeight: '44px', borderColor: 'var(--input-border)' }}
                  />
                </div>

                {/* Company (optional) */}
                <div>
                  <label htmlFor="company" className="block text-xs font-medium uppercase tracking-widest mb-2" style={labelStyle}>
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    className="block w-full px-3 py-2 border text-sm focus:outline-none focus:ring-2"
                    style={{ minHeight: '44px', borderColor: 'var(--input-border)' }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium uppercase tracking-widest mb-2" style={labelStyle}>
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    ref={messageRef}
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className="block w-full px-3 py-2 border text-sm focus:outline-none focus:ring-2 resize-none"
                    style={{ borderColor: errors.message ? 'var(--input-border-error)' : 'var(--input-border)' }}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <p role="alert" className="text-sm text-red-600">
                    Something went wrong. Please try again or email us directly at jason@jtkspares.co.za.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white uppercase tracking-wide transition-opacity disabled:opacity-60"
                  style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)', minHeight: '44px', fontFamily: 'var(--font-mono)' }}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Sending
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
