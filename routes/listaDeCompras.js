const express = require('express');
const router = express.Router();
const listaDeCompras = require('../controllers/comprasController')

router.get('/', listaDeCompras.compras);

module.exports = router;