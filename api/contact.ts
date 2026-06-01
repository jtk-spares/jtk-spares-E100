import type { VercelRequest, VercelResponse } from '@vercel/node'
import mysql from 'mysql2/promise'

// Lazy-initialised connection pool (reused across warm invocations)
let pool: mysql.Pool | null = null

function getPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '3306', 10),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
    })
  }
  return pool
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Allow only POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // CORS — restrict to configured origin in production
  const allowedOrigin = process.env.ALLOWED_ORIGIN ?? '*'
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin)
  res.setHeader('Access-Control-Allow-Methods', 'POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  const { name, email, phone, company, message, _trap } = req.body ?? {}

  // Honeypot — silently reject bots
  if (_trap) {
    return res.status(200).json({ message: 'ok' })
  }

  // Input validation
  const errors: Record<string, string> = {}
  if (!name?.trim()) errors.name = 'Name is required'
  if (!email?.trim()) errors.email = 'Email is required'
  else if (!EMAIL_RE.test(email)) errors.email = 'Invalid email address'
  if (!message?.trim()) errors.message = 'Message is required'

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors })
  }

  // Sanitise inputs (trim only — mysql2 uses parameterised queries)
  const safeData = {
    name: String(name).trim().slice(0, 255),
    email: String(email).trim().slice(0, 255),
    phone: phone ? String(phone).trim().slice(0, 50) : null,
    company: company ? String(company).trim().slice(0, 255) : null,
    message: String(message).trim().slice(0, 5000),
  }

  try {
    const db = getPool()
    await db.execute(
      `INSERT INTO inquiries (name, email, phone, company, message)
       VALUES (?, ?, ?, ?, ?)`,
      [safeData.name, safeData.email, safeData.phone, safeData.company, safeData.message],
    )

    return res.status(200).json({ message: 'Inquiry received.' })
  } catch (err) {
    // Log for server diagnostics — never expose DB details to client
    console.error('[contact] DB insert failed:', (err as Error).message)
    return res.status(500).json({ error: 'Could not save your message. Please try again.' })
  }
}
