const express = require('express');
const router = express.Router();
const sumaController = require('../controllers/sumaController');

router.get('/:valor1/:valor2', sumaController.suma)

module.exports = router;