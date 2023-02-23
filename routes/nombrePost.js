const express = require('express');
const router = express.Router();
const nombreController = require('../controllers/nombreController');

router.post('/nombre', nombreController.nombre);

module.exports = router;