const express = require('express');
const { z } = require('zod');
const asyncHandler = require('../middleware/asyncHandler');
const validate = require('../middleware/validate');
const { requireAuth, requireRole } = require('../middleware/auth');
const inquiryController = require('../controllers/inquiryController');
const { inquirySchema } = require('../validators/inquirySchema');

const router = express.Router();

router.post('/', validate(inquirySchema), asyncHandler(inquiryController.createInquiry));
router.get('/', requireAuth, requireRole('ADMIN'), asyncHandler(inquiryController.listInquiries));
router.patch('/:id', requireAuth, requireRole('ADMIN'), validate(z.object({
  status: z.enum(['NEW', 'IN_PROGRESS', 'RESOLVED', 'CLOSED']),
})), asyncHandler(inquiryController.updateInquiry));

module.exports = router;
