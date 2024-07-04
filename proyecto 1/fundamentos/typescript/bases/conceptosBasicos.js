// en typescrip - se tiene observador/observable: Permite que se este ejecutando el código todo el tiempo -- "tsc - watch .\archivo.ts"
//abrir dos terminales "node --watch .\archivo.js"
console.log('Estos son los conceptos básicos de typescript');
// INFERENCIA DE TIPOS
/*
    En Typescrip importa el tipo de variable.
    El primer tipo de dato que se da al declarar la variable se mantiene
*/
// Declaración explicita
let miNumero;
// Asignar valor =
miNumero = 11;
// TIPOS DE DATOS
/*
    DATOS PRIMITIVOS
        string - texto
        number - numero
        boolean - true, false
        undefined
        null
    DATOS ESPECIALES
        Array - arreglo
        objetos
        unknown - Recibe cualquier tipo de dato
        any - Guarda cualquier tipo de dato
*/
let texto;
texto = 'laura';
let numero;
numero = 11;
let booleano;
booleano = true;
let indefinido;
indefinido = undefined;
let nulo;
nulo = null;
let arreglo;
arreglo = [1, 2, 3];
let miArreglo;
miArreglo = ['LAURA', 'ANDREA'];
let desconocido;
desconocido = 'luisa';
desconocido = 22;
desconocido = [true, true, false];
let cualquiera;
cualquiera = 'laura';
let objeto; // [] o {}
objeto = [];
let objetoCarro;
objetoCarro = {
    marca: 'BMW',
    color: 'rojo',
    vendido: true
};
// FUNCIONES 
/*
    Retorna o no
    si es void retorna undefined
*/
let retorno;
function miFuncion1() {
    console.log('Hola soy una funcion');
}
//ejecute
miFuncion1();
//guarde en una variable
retorno = miFuncion1();
console.log(retorno);
//variable le puede dar parametros y especificar respuesta
const miFuncion2 = (num1) => {
    console.log('Hola soy la funcion ' + num1);
    return num1 * 5;
};
let retorno2 = miFuncion2(444);
console.log(retorno2);
