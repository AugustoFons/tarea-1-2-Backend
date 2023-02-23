# tareaN° 1 y 2 Backend
Tarea n° 1 y 2 del modulo de Backend en Academia Numen.


## 1) Armar un servidor en node que cuente con las siguientes rutas(URN):


Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).


Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y dividendo, la misma tiene que devolver un res.json({error: "no se puede dividir por cero"}) si el usuario ingresa un 0, si no es el caso devolver res.json({resultado}).


Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condición de que no se puedan enviar números menores que cero, y el resultado se debe devolver por medio de un res.json({resultado}).


Crear una ruta que reciba un numero (ruta con query) si el número es impar debe devolver un res.send("no autorizado") , y si el número es par debe devolver res.send("autorizado").


Crear una ruta “lista de compras” (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto}).

## 2) Crear un nuevo proyecto con express-generator y migrar el código de la clase pasada siguiendo las siguientes pautas:


En routers/users poner la ruta que recibe apellido y nombre para generar un saludo, poner el callback en un archivo controller.


En routers/maths poner todas las rutas relacionadas con suma, division y corroborar si el numero es par, poner el callback en un archivo controller.


En routers/list poner la ruta que crea el listado de las compras,  poner el callback en un archivo controller.


Crear una ruta con el metodo HTTP POST que haga lo siguiente: devolver un objeto JSON que contenga lo siguiente:
  
  
  {
  
  
    "nombre": "ACA VA EL NOMBRE",

    "status":"success"
  }

  el nombre que reciba se debe enviar por req.body.nombre
