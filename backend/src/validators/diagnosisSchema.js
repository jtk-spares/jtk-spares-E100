const { z } = require('zod');

const diagnosisSchema = z.object({
  customerName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(40),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  location: z.string().trim().min(2).max(180),
  machineryType: z.string().trim().min(2).max(160),
  symptoms: z.string().trim().min(10).max(5000),
  machineryAge: z.string().trim().max(80).optional().or(z.literal('')),
  lastServiceDate: z.coerce.date().optional(),
  urgency: z.enum(['EMERGENCY', 'HIGH', 'NORMAL', 'LOW']),
  preferredSchedule: z.string().trim().min(2).max(160),
});

module.exports = {
  diagnosisSchema,
};
