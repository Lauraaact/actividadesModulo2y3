// 1. Importar dependecias y módulos
// Importar mongose -> Schema -> Plantilla de los productos
import mongoose from 'mongoose';
const schema = mongoose.Schema;
// Construir esquema del producto, como se guarda la info del producto en la bd
const productSchema = new schema({
    nombre : {
        type : String,
        require : true
    },
    imagen : {
        type : String,
    },
    precio : {
        type : Number,
        require : true
    }
});

// con el modelo crear la colección donde se gurdan los datos
// mongoose.model - Crea el modelo 
// 1. Nombre de la colección 
// 2. Dar como parametro el esquema
export const productModel = mongoose.model('usuario',productSchema);
