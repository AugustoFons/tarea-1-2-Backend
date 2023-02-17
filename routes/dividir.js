const express = require('express');
const router = express.Router();
const dividirController = require('../controllers/dividirController');

router.get('/:dividendo/:divisor', dividirController.dividir)

module.exports = router;