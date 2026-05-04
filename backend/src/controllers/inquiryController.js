const prisma = require('../config/database');

async function createInquiry(req, res) {
  const inquiry = await prisma.inquiry.create({
    data: {
      ...req.body,
      phone: req.body.phone || null,
    },
  });

  res.status(201).json({
    message: 'Inquiry received',
    inquiry,
  });
}

async function listInquiries(req, res) {
  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: 'desc' },
    take: 100,
  });

  res.json({ inquiries });
}

async function updateInquiry(req, res) {
  const inquiry = await prisma.inquiry.update({
    where: { id: req.params.id },
    data: req.body,
  });

  res.json({ inquiry });
}

module.exports = {
  createInquiry,
  listInquiries,
  updateInquiry,
};
