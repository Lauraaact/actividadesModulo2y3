// 1. Importaciones 
import express from 'express';
// Importar controladores
import { getProducts , postProduct, deleteProductByID, putProductByID } from '../controllers/products.controllers.js';

// 2. Configurar el Router de express
const productsRouter = express.Router();

// 3. Definir rutas
/*
    - Determinar ruta
    - Determinar que debe hacer
*/

//Ruta para peticion GET
productsRouter.get('/obtenerProductos', getProducts);

//Ruta para peticion POST
productsRouter.post('/registrarProducto', postProduct);

//Ruta para peticion DELETE
productsRouter.delete('/eliminarProducto/:_id', deleteProductByID);

//Ruta para peticion PUT
productsRouter.put('/actualizarProducto/:_id', putProductByID);

export default productsRouter;