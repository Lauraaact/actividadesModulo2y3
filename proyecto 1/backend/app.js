// 1. Importar las dependencias y modulos
import express from 'express';
import dotenv from 'dotenv';
// Variables de entorno: Información delicada

//2. Configurar servidor y variables de entorno

const app = express (); //Configura servidor
dotenv.config();//Configura variables de entorno
const port = process.env.PORT;

//3. Escuchar servidor
app.listen(port, ()=>{
    console.log(`El servidor se esta escuchando en: http://localhost:${port}`);
})
