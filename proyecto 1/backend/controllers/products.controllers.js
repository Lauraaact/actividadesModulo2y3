// 1. Importar modulos

import { productModel }  from '../models/products.models.js';

// Prueba inicial de mis controladores

//Peticion GET - Muestra TODOS los productos
export const getProducts = async (req,res) =>{
    // Manejo de errores
    try{
        let products = await productModel.find();
        //Validación enel caso que no hayan productos (!products)
        if(products.length == 0){
            //404 not found - No se encontro lo que se busca
            return res.status(404).json({message: 'No se encontraron productos'});
        }
        //200 - Todo ok
        return res.status(200).send(products);
    } catch (error){
        //500 - Error innesperado en el servidor
        return res.status(500).json({message : 'Error de servidor' + error.message});
    }
}

//Petición POST - Crea los productos uno por uno
export const postProduct  = async (req,res) => {
    //body - Contenido de petición
    const {nombre, imagen, precio} = req.body;
    // Validacción ingreso de datos
    if (!nombre || !imagen || !precio){
        return res.status(400).json({message : 'Debe ingresar todos los campos requeridos'});
    }
    try{
        const newProduct = await productModel.create(req.body);
        // 201 - se creo correctamente
        return res.status(201).json(newProduct);
    }catch(error){
        return res.status(500).json({message : 'Error de servidor' + error.message});
    }
}

//Petición DELETE - Elimina los productos por ID
export const deleteProductByID  = async (req,res) => {
    let idForDelete = req.params._id;
    let productDeleted = await productModel.findByIdAndDelete(idForDelete);
    if (!productDeleted){
        return res.status (404).json({message : 'No se encontro el producto para eliminar'});
    }
    return res.status(200).json({msg : 'Producto eliminado correctamente'});
}

//Petición PUT - Actualiza los productos por ID
export const putProductByID  = async (req,res) => {
    try {
        //acceder al parametro _id
        let idForUpdate = req.params._id;
        //acceder al cuerpo de la petición
        //1. Indica ID 2. Accede al cuerpo 
        let productUpdated = await productModel.findByIdAndUpdate(idForUpdate, req.body);
        //Validación cuando no se encuentra el producto solicitado
        if (!productUpdated){
            return res.status (404).json({message : 'No se encontro el producto para modificar'});
        }
        return res.status(200).json({message : 'Producto actualizado correctamente'});
    }catch(error){
        return res.status(500).json({message : 'Error de servidor' + error.message});
    }
}
