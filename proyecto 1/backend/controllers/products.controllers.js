// 1. Importar modulos

import { productModel }  from '../models/products.models';

// Prueba inicial de mis controladores

//Peticion GET - Muestra productos
export const getProducts = async (req,res) =>{
    return res.send('Funciona la petición GET');
}

//Petición POST - Crea los productos uno por uno
export const postProduct  = async (req,res) => {
    return res.send('Funciona la petición POST')
}

//Petición DELETE - Elimina los productos por ID
export const deleteProductByID  = async (req,res) => {
    return res.send('Funciona la petición DELETE')
}

//Petición PUT - Actualiza los productos por ID
export const putProductByID  = async (req,res) => {
    return res.send('Funciona la petición PUT')
}
