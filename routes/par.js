const express = require('express');
const router = express.Router();
const parController = require('../controllers/parController');

router.get('/', parController.par)

module.exports = router;