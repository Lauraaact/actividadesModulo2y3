//app.js - Acceder el proyecto, activa el servidor y configura las conexiones

// 1. Importar las dependencias y modulos
import express from 'express';
import dotenv from 'dotenv';

// Variables de entorno: Información delicada

import connetionMongo from './config/db.js';
import productsRouter from './routes/products.routes.js';

//2. Configurar servidor y variables de entorno

const app = express (); //Configura servidor
dotenv.config();//Configura variables de entorno
const port = process.env.PORT;

//conectese a la base de datos
connetionMongo();
//usar las rutas 
app.use ('/', productsRouter);

app.get('/',(req, res)=>{
    res.send('HOLA, Esto es una petición a mi servidor');
})

//3. Escuchar servidor

app.listen(port, ()=>{
    console.log(`El servidor se esta escuchando en: http://localhost:${port}`);
})
