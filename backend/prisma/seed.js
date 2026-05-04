const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'ChangeMe123!', 10);

  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@jtkspares.co.za' },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || 'jason@jtkspares.co.za',
      password,
      role: 'ADMIN',
      name: 'JTK Admin',
    },
  });

  const parts = [
    {
      sku: 'JTK-HYD-014',
      name: 'Hydraulic pump assembly',
      description: 'Replacement pump assembly for high-load mobile and plant equipment.',
      category: 'HYDRAULIC',
      manufacturer: 'Bosch Rexroth compatible',
      model: 'Multi-fit',
      compatibleMachinery: ['Presses', 'Loaders', 'Plant equipment'],
      priceRange: 'Quote on request',
      inStock: true,
      leadTime: '2-3 business days',
      certifications: ['ISO documentation available'],
      images: [],
    },
    {
      sku: 'JTK-ELE-088',
      name: 'Industrial control relay',
      description: 'Control relay for panels, conveyors, hoists, and repair jobs.',
      category: 'ELECTRICAL',
      manufacturer: 'Schneider compatible',
      model: '24V/220V variants',
      compatibleMachinery: ['Conveyors', 'Control panels', 'Hoists'],
      priceRange: 'R 650 - R 1,900',
      inStock: true,
      leadTime: 'Same day dispatch',
      certifications: ['Supplier certificate available'],
      images: [],
    },
    {
      sku: 'JTK-SEA-032',
      name: 'Cylinder seal kit',
      description: 'Seal kit for hydraulic cylinder repair and planned maintenance.',
      category: 'SEALS',
      manufacturer: 'Multi-brand',
      model: 'Custom measured',
      compatibleMachinery: ['Hydraulic cylinders', 'Excavators', 'Presses'],
      priceRange: 'R 450 - R 2,400',
      inStock: false,
      leadTime: '1-2 business days',
      certifications: ['Material certificate on request'],
      images: [],
    },
  ];

  for (const part of parts) {
    await prisma.part.upsert({
      where: { sku: part.sku },
      update: part,
      create: part,
    });
  }
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
