const { z } = require('zod');

const quoteSchema = z.object({
  customerName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(40),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  industryType: z.enum([
    'MINING',
    'MANUFACTURING',
    'CONSTRUCTION',
    'AGRICULTURE',
    'MARINE',
    'LOGISTICS',
    'OTHER',
  ]),
  machineryType: z.string().trim().min(2).max(160),
  problemDescription: z.string().trim().min(10).max(5000),
  urgency: z.enum(['EMERGENCY', 'HIGH', 'NORMAL', 'LOW']),
  preferredContactMethod: z.enum(['EMAIL', 'PHONE', 'WHATSAPP']),
});

const quoteStatusSchema = z.object({
  status: z.enum(['NEW', 'REVIEWED', 'QUOTED', 'ACCEPTED', 'REJECTED', 'EXPIRED']),
  quotedAmount: z.coerce.number().positive().optional(),
});

module.exports = {
  quoteSchema,
  quoteStatusSchema,
};
