const { z } = require('zod');

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  subject: z.string().trim().min(3).max(160),
  message: z.string().trim().min(10).max(3000),
  type: z.enum(['GENERAL', 'TECHNICAL', 'BILLING', 'SUPPORT', 'OTHER']).default('GENERAL'),
});

module.exports = {
  inquirySchema,
};
