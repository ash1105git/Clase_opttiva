let numeroConDecimal = 3.14159
let numeroSinDecimalRedondeo = numeroConDecimal.toFixed(3) // Redondea a 3 decimales
console.log(numeroSinDecimalRedondeo) // 3.142

const redondeoNumeroAbajo = Math.floor(numeroConDecimal) // Redondea hacia abajo
console.log(redondeoNumeroAbajo) // 3

let numeroAleatorio = Math.random() // Genera un número aleatorio entre 0 y 1
console.log(numeroAleatorio) // Ejemplo: 0.123456789

// genera un número aleatorio entre 0 y 100 

let numeroAleatorioEntreCien = Math.random() * 100
console.log(numeroAleatorioEntreCien) // Ejemplo: 45.678