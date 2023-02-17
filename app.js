const express = require('express');
const saludoRouter = require('./routes/saludo')
const dividirRouter = require('./routes/dividir')
const sumaRouter = require('./routes/suma')
const parRouter = require('./routes/par')
const compraseRouter = require('./routes/listaDeCompras')


const app = express();

app.use('/saludo', saludoRouter);   //ej http://localhost:3000/saludo/augusto/fons
app.use('/dividir', dividirRouter); //ej http://localhost:3000/dividir/99/33
app.use('/suma', sumaRouter);   //ej: http://localhost:3000/suma/18/2
app.use('/par', parRouter); //ej: http://localhost:3000/par?numero=14 || http://localhost:3000/par?numero=7
app.use('/compras', compraseRouter); // ej: //http://localhost:3000/compras?semana=1 || //http://localhost:3000/compras?semana=2


module.exports = app;