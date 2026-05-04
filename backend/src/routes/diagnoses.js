const express = require('express');
const { z } = require('zod');
const asyncHandler = require('../middleware/asyncHandler');
const validate = require('../middleware/validate');
const { requireAuth, requireRole } = require('../middleware/auth');
const diagnosisController = require('../controllers/diagnosisController');
const { diagnosisSchema } = require('../validators/diagnosisSchema');

const router = express.Router();

router.post('/', validate(diagnosisSchema), asyncHandler(diagnosisController.createDiagnosis));
router.get('/:id', asyncHandler(diagnosisController.getDiagnosis));
router.get('/', requireAuth, requireRole('ADMIN'), asyncHandler(diagnosisController.listDiagnoses));
router.patch('/:id', requireAuth, requireRole('ADMIN'), validate(z.object({
  status: z.enum(['REQUESTED', 'SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED']).optional(),
  diagnosisReport: z.string().max(5000).optional(),
  technicianNotes: z.string().max(5000).optional(),
  scheduledAt: z.coerce.date().optional(),
})), asyncHandler(diagnosisController.updateDiagnosis));

module.exports = router;
