import { useState } from 'react'
import { Phone, Mail } from 'lucide-react'

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

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Name is required'
  if (!data.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email address'
  if (!data.message.trim()) errors.message = 'Message is required'
  return errors
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // Honeypot check (bot-filled field)
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
    <section id="contacts" className="py-24 scroll-mt-16" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--jtk-orange)' }}
            >
              Get in touch
            </p>
            <h2
              id="contact-heading"
              className="text-4xl sm:text-5xl font-extrabold uppercase leading-tight mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'var(--jtk-navy)' }}
            >
              Contact us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Tell us what you need. We'll respond within one business day with availability
              and pricing.
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+27683927937"
                  className="inline-flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  style={{ minHeight: '44px' }}
                >
                  <Phone
                    size={18}
                    style={{ color: 'var(--jtk-orange)' }}
                    aria-hidden="true"
                  />
                  +27(0)68 392 7937
                </a>
              </li>
              <li>
                <a
                  href="mailto:jason@jtkspares.co.za"
                  className="inline-flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  style={{ minHeight: '44px' }}
                >
                  <Mail
                    size={18}
                    style={{ color: 'var(--jtk-orange)' }}
                    aria-hidden="true"
                  />
                  jason@jtkspares.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div>
            {status === 'sent' ? (
              <div
                className="p-8 border text-center"
                style={{ borderColor: 'var(--jtk-orange)' }}
                role="alert"
              >
                <p
                  className="text-2xl font-bold uppercase mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'var(--jtk-navy)' }}
                >
                  Thank you!
                </p>
                <p className="text-gray-600">Your message has been received. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="block w-full px-3 py-2 border text-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: errors.name ? '#dc2626' : '#d1d5db',
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="block w-full px-3 py-2 border text-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: errors.email ? '#dc2626' : '#d1d5db',
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    className="block w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2"
                    style={{ minHeight: '44px' }}
                  />
                </div>

                {/* Company (optional) */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    className="block w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2"
                    style={{ minHeight: '44px' }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className="block w-full px-3 py-2 border text-sm focus:outline-none focus:ring-2 resize-none"
                    style={{ borderColor: errors.message ? '#dc2626' : '#d1d5db' }}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <p role="alert" className="text-sm text-red-600">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 text-sm font-semibold text-white uppercase tracking-wide transition-opacity disabled:opacity-60"
                  style={{ backgroundColor: 'var(--jtk-orange)', minHeight: '44px' }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
