//db.js - Configurar interacción datos, coneccion con base de datos

//1. Importar dependecias
import mongoose from 'mongoose';

const connetionMongo = async () => {
    //Conexion base de datos
    await mongoose.connect(process.env.CONEXION_DB,{})
    //Control de errores -> try-catch
    try{
        console.log('Conexión exitosa con la base de datos');
    }catch(error){
        console.error('error de conexión: ', error.message);
    }
}

export default connetionMongo;