const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const partController = require('../controllers/partController');

const router = express.Router();

router.get('/', asyncHandler(partController.listParts));
router.get('/search', asyncHandler(partController.listParts));
router.get('/:id', asyncHandler(partController.getPart));

module.exports = router;
