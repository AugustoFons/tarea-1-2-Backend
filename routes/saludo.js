const express = require('express');
const router = express.Router();
const SaludoControllers = require('../controllers/saludoControllers');

router.get('/:name/:last_name', SaludoControllers.saludo);


module.exports = router;