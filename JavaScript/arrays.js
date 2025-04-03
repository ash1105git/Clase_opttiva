/*que es un array?
Un array es una estructura de datos que permite almacenar múltiples valores en una sola variable.
Un array puede contener elementos de diferentes tipos, como números, cadenas de texto, objetos, etc. Los arrays son útiles para organizar y manipular conjuntos de datos relacionados.
*/
let miArray = []; // Declaración de un array vacío

//array con elementos predefinidos
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas); // ["manzana", "banana", "naranja"]
console.log(frutas[0]); // "manzana"

//modificar un elemento uva por banana
frutas[1] = "uva";
console.log(frutas); // ["manzana", "uva", "naranja"]
console.log(frutas[1]); // "uva"

//pop() elimina el último elemento de un array y lo devuelve
frutas.pop(); // Elimina "naranja"
console.log(frutas); // ["manzana", "uva"]

//push() agrega uno o más elementos al final de un array y devuelve la nueva longitud del array
frutas.push("naranja"); // Agrega "naranja" al final
console.log(frutas); // ["manzana", "uva", "naranja"]

//shift() elimina el primer elemento de un array y lo devuelve
frutas.shift(); // Elimina "manzana"
console.log(frutas); // ["uva"]

//unshift() agrega uno o más elementos al inicio de un array y devuelve la nueva longitud del array
frutas.unshift("kiwi", "fresa"); // Agrega "kiwi" y "fresa" al inicio       
console.log(frutas); // ["kiwi", "fresa", "uva"]

//splice() cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar
// El primer argumento es el índice en el que se comenzará a modificar el array
frutas.splice(1, 1, "mango", "piña"); // Elimina "fresa" y agrega "mango" y "piña"
console.log(frutas); // ["kiwi", "mango", "piña", "uva"]

//slice() extrae una sección de un array y devuelve un nuevo array
// El primer argumento es el índice de inicio y el segundo es el índice de fin (no incluido)    
let frutasExtraidas = frutas.slice(1, 3); // Extrae "mango" y "piña"
console.log(frutasExtraidas); // ["mango", "piña"]