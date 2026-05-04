const prisma = require('../config/database');

async function listParts(req, res) {
  const page = Math.max(Number(req.query.page) || 1, 1);
  const limit = Math.min(Math.max(Number(req.query.limit) || 12, 1), 50);
  const skip = (page - 1) * limit;
  const q = req.query.q || req.query.search;

  const where = {
    ...(req.query.category ? { category: req.query.category } : {}),
    ...(req.query.inStock ? { inStock: req.query.inStock === 'true' } : {}),
    ...(q ? {
      OR: [
        { sku: { contains: q, mode: 'insensitive' } },
        { name: { contains: q, mode: 'insensitive' } },
        { description: { contains: q, mode: 'insensitive' } },
        { manufacturer: { contains: q, mode: 'insensitive' } },
      ],
    } : {}),
  };

  const [parts, total] = await Promise.all([
    prisma.part.findMany({ where, skip, take: limit, orderBy: { createdAt: 'desc' } }),
    prisma.part.count({ where }),
  ]);

  res.json({
    parts,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  });
}

async function getPart(req, res) {
  const part = await prisma.part.findUnique({
    where: { id: req.params.id },
  });

  if (!part) {
    return res.status(404).json({
      error: {
        message: 'Part not found',
        code: 'PART_NOT_FOUND',
      },
    });
  }

  return res.json({ part });
}

module.exports = {
  listParts,
  getPart,
};
