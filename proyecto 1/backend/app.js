//app.js - Acceder el proyecto, activa el servidor y configura las conexiones
// Patrón de diseño PROYECTO MVC (Modelo - Vista - Controlador)
/* 
    Modelo - Estructura de datos, guardar DB
    Controlador - Lógica, acceder al modelo 
    Vista - Como se ven los datos (frontend) en backend formato JSON (Postman)
*/
/*
    Paso a paso para un proyecto desde 0 BACKEND
    1. Node - NPM
    2. Inicializar el proyecto (npm run dev)
    3. Instalar dependencias (NPM-EXPRESS-DOTENV)
    4. Montar el servidor - Import express -> app.js
    5. env - Variables de entorno
    6. Conexión a base de datos
    7. MVC
        7.1. Modelos - Esquema de datos
        7.2. Controladores - Funcionamiento
        7.3. Rutas - En donde se hacen las peticiones
    8. Consumir esa API - Recursos desde su front
*/

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

//middleware - Intermediario entre el servidor y las peticiones 
//Leer y enviar datos en formato json
app.use(express.json());

//usar las rutas 
app.use ('/', productsRouter);


//3. Escuchar servidor

app.listen(port, ()=>{
    console.log(`El servidor se esta escuchando en: http://localhost:${port}`);
})
