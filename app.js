const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const saludoRouter = require('./routes/saludo')
const dividirRouter = require('./routes/dividir')
const sumaRouter = require('./routes/suma')
const parRouter = require('./routes/par')
const compraseRouter = require('./routes/listaDeCompras')
const nombrePost = require('./routes/nombrePost')


const app = express();

//usos con express
app.use(logger("dev"))  //ver dev en la doc de morgan
app.use(express.json()) //para aceptar objetos json que ingresen
app.use(cors())

app.use('/saludo', saludoRouter);   //ej http://localhost:3000/saludo/augusto/fons
app.use('/dividir', dividirRouter); //ej http://localhost:3000/dividir/99/33
app.use('/suma', sumaRouter);   //ej: http://localhost:3000/suma/18/2
app.use('/par', parRouter); //ej: http://localhost:3000/par?numero=14 || http://localhost:3000/par?numero=7
app.use('/compras', compraseRouter); // ej: //http://localhost:3000/compras?semana=1 || //http://localhost:3000/compras?semana=2
app.use('/', nombrePost)

module.exports = app;