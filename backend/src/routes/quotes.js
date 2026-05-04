const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const validate = require('../middleware/validate');
const { requireAuth, requireRole } = require('../middleware/auth');
const quoteController = require('../controllers/quoteController');
const { quoteSchema, quoteStatusSchema } = require('../validators/quoteSchema');

const router = express.Router();

router.post('/', validate(quoteSchema), asyncHandler(quoteController.createQuote));
router.get('/:id', asyncHandler(quoteController.getQuote));
router.get('/', requireAuth, requireRole('ADMIN'), asyncHandler(quoteController.listQuotes));
router.patch('/:id/status', requireAuth, requireRole('ADMIN'), validate(quoteStatusSchema), asyncHandler(quoteController.updateQuoteStatus));
router.delete('/:id', requireAuth, requireRole('ADMIN'), asyncHandler(quoteController.deleteQuote));

module.exports = router;
