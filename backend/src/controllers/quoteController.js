const prisma = require('../config/database');

async function createQuote(req, res) {
  const quote = await prisma.quote.create({
    data: normalizeQuoteInput(req.body),
  });

  res.status(201).json({
    message: 'Quote request received',
    quote,
  });
}

async function listQuotes(req, res) {
  const quotes = await prisma.quote.findMany({
    orderBy: { createdAt: 'desc' },
    take: 100,
  });

  res.json({ quotes });
}

async function getQuote(req, res) {
  const quote = await prisma.quote.findUnique({
    where: { id: req.params.id },
    include: { attachments: true },
  });

  if (!quote) {
    return res.status(404).json({
      error: {
        message: 'Quote not found',
        code: 'QUOTE_NOT_FOUND',
      },
    });
  }

  return res.json({ quote });
}

async function updateQuoteStatus(req, res) {
  const data = {
    status: req.body.status,
    quotedAmount: req.body.quotedAmount,
    quotedAt: req.body.status === 'QUOTED' ? new Date() : undefined,
  };

  const quote = await prisma.quote.update({
    where: { id: req.params.id },
    data,
  });

  res.json({ quote });
}

async function deleteQuote(req, res) {
  await prisma.quote.delete({
    where: { id: req.params.id },
  });

  res.status(204).send();
}

function normalizeQuoteInput(input) {
  return {
    ...input,
    company: input.company || null,
  };
}

module.exports = {
  createQuote,
  listQuotes,
  getQuote,
  updateQuoteStatus,
  deleteQuote,
};
