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