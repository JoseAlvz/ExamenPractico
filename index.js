//Importamos las dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Creamos una constante al valor del puerto
const PUERTO = process.env.PORT || 3000;

//Emplear nuestras rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y HBS
const app = express();
app.set('view engine', 'hbs'),
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

//vamos a decirle al express la ruta a emplear
app.use('/', pintoresRouter);

/*La conexion con MongoDB*/
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://JoseAlvarez:1234567890@cluster0-zooz1.mongodb.net/Pintores?retryWrites=true&w=majority';
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Conexion establecida');
    })
    .catch(err=> console.log(err));

    /*arrancar el servidor web*/
    app.listen(PUERTO, ()=>{
        console.log('Escuchando el puerto...');
    });

