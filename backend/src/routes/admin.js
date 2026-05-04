const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const asyncHandler = require('../middleware/asyncHandler');
const validate = require('../middleware/validate');
const { requireAuth, requireRole } = require('../middleware/auth');
const prisma = require('../config/database');

const router = express.Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

router.post('/auth/login', validate(loginSchema), asyncHandler(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { email: req.body.email },
  });

  if (!user || user.role !== 'ADMIN') {
    return res.status(401).json({
      error: {
        message: 'Invalid login details',
        code: 'INVALID_LOGIN',
      },
    });
  }

  const passwordMatches = await bcrypt.compare(req.body.password, user.password);

  if (!passwordMatches) {
    return res.status(401).json({
      error: {
        message: 'Invalid login details',
        code: 'INVALID_LOGIN',
      },
    });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '8h' },
  );

  return res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    },
  });
}));

router.post('/auth/logout', (req, res) => {
  res.status(204).send();
});

router.use(requireAuth, requireRole('ADMIN'));

router.get('/stats', asyncHandler(async (req, res) => {
  const [
    quoteCount,
    newQuoteCount,
    partCount,
    inquiryCount,
    diagnosisCount,
  ] = await Promise.all([
    prisma.quote.count(),
    prisma.quote.count({ where: { status: 'NEW' } }),
    prisma.part.count(),
    prisma.inquiry.count(),
    prisma.diagnosisRequest.count(),
  ]);

  res.json({
    stats: {
      quoteCount,
      newQuoteCount,
      partCount,
      inquiryCount,
      diagnosisCount,
    },
  });
}));

router.get('/activity', asyncHandler(async (req, res) => {
  const [quotes, inquiries, diagnoses] = await Promise.all([
    prisma.quote.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
    prisma.inquiry.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
    prisma.diagnosisRequest.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
  ]);

  res.json({
    activity: [
      ...quotes.map((item) => ({ type: 'quote', id: item.id, title: item.customerName, createdAt: item.createdAt })),
      ...inquiries.map((item) => ({ type: 'inquiry', id: item.id, title: item.subject, createdAt: item.createdAt })),
      ...diagnoses.map((item) => ({ type: 'diagnosis', id: item.id, title: item.machineryType, createdAt: item.createdAt })),
    ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 10),
  });
}));

module.exports = router;
