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

/* MEAN STACK 
    STACKS - Conjunto de tecnologia para crear apps
    Escalabilidad: Hacer productos más fácil
    Programación modular (Separar equipo de front y backend)
    Practicidad - Mantenimiento - Legibilidad
*/
/* Modelo C-S (Cliente-Servidor)
    Cliente - Estático
        Lo que se ve (Interfaz)
        UX UI - experiencia de usuario
        Navegador
        Frontend
    PETICIONES Y RESPUESTAS
    Servidor - Dinámico
        DB - Base de datos
        Logica
        Backend
        Base - Funcionalidad
        Dinamismo (Modificación información)
        Peticiones APIS - CRUD
*/
/* 
    node.js - Entorno de ejecucion Js en el servidor
    Base de datos - Espacio de almacenamiento de información
    MongoDB - Gestor de la base de datos, local o en la nube
        NoSQL - Collecciones y documentos JSON
    MongoDB Atlas - Servicio en la nube para gestionar las db de Mongo
    EXPRESS - Dependencia, Framework esquema de trabajo para montar servidor y rutas de peticiones
    Patrones de diseño - Estandar para estructurar proyectos
        Escalabilidad 
        Mantenimiento y reutilización (Modulos)
        Modelo MVC
    Modulos - Fragmentos de codigos propios
    Dependencias - Fragmentos codigos terceros - requiere paquetes npm
    Express dotenv: Gestión e integración de variables de entorno (Info sensible)
    Mongoose : Integracion con Mongoo - Esquema y modelo
    Nodemon : Ver cambios en tiempo real reinicia el servidosr
    Postman - Cliente Prueba
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


//3. Escuchar servidor - Inicia

app.listen(port, ()=>{
    console.log(`El servidor se esta escuchando en: http://localhost:${port}`);
})
