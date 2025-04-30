/*Que es find y findIndex?  
find es un método que devuelve el primer elemento de un array que cumple con una condición especificada. 
findIndex, por otro lado, devuelve el índice del primer elemento que cumple con la condición. 
Ambos métodos son útiles para buscar elementos en arrays de manera eficiente. 

*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const esMayorQueCinco = (numero) => numero > 5
console.log(numeros.find(esMayorQueCinco)) // 6

console .log(numeros.findIndex(esMayorQueCinco)) // 5
// En este caso, find devuelve el primer número mayor que 5, que es 6,
console.log(numeros.findIndex((numero) => numero > 5)) // 5
// y findIndex devuelve el índice de ese número en el array, que es 5.