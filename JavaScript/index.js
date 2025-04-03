console.log("Hola Mundo");
console.log("Otro Hola Mundo");
/*Variables en JavaScript
var: Se utiliza para declarar variables globales o locales.

let: Se utiliza para declarar variables que pueden cambiar su valor.
const: Se utiliza para declarar variables que no pueden cambiar su valor.
*/

let nombre = "Juan";
console.log(nombre);


let estatura = 1.75;
let peso= 80;
let imc = peso / (estatura * estatura);
console.log(imc);
/*F5 para ejecutar el programa*/
//Realizar una calculadora en JavaScript
let num1 = 10;
let num2 = 20;
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
//Salida de datos
console.log("El resultado de la suma es igual a "+ suma);
console.log("El resultado de la resta es igual a "+ resta); 
console.log("El resultado de la multiplicación es igual a "+ multiplicacion);
console.log("El resultado de la división es igual a "+ division);
 //operaciones con var
 var num3 = 10;
var num4 = 20;
var suma2 = num3 + num4;
var resta2 = num3 - num4;    
var multiplicacion2 = num3 * num4;
var division2 = num3 / num4;
//Salida de datos
console.log("El resultado de la suma es igual a "+ suma);
console.log("El resultado de la resta es igual a "+ resta);
console.log("El resultado de la multiplicación es igual a "+ multiplicacion);
console.log("El resultado de la división es igual a "+ division);
//Aprendimos
/*- Variables en JavaScript
- Ejecutar scripts en Node.JavaScript
- Realizar operaciones matemáticas
/*

/*Reto:
¿Es posible redeclarar variables en JavaScript?
en caso afirmativo ¿qué sucede con el valor de la variable? y ¿como se realiza la redeclaración?*/
//Respuesta
/*Si es posible redeclarar variables en JavaScript, pero el valor de la variable se sobreescribe con el nuevo valor.    */
let nombreJuan = "Juan";
const estaturaJuan = 1.75;
imc_juan = 80 / (estaturaJuan * estaturaJuan);
console.log(imc_juan);

//Reasignación de constantes
// estatura = 1.80;
// console.log(estatura);

//Ejercicio rápido
/*
crear un nuevo script que almacene mi nombre en una variable y mi edad 
en otra variable, luego imprimir en consola el mensaje "Hola mi nombre es (nombre) y tengo (edad) años"
*/
let nombreLuisa = "Luisa Fernanda";
let edadLuisa = 33;
console.log("Hola mi nombre es "+ nombreLuisa + " y tengo "+ edadLuisa + " años");
/*
Tipos de datos en JavaScript
- Number: Números enteros o decimales
- String: Cadena de texto
- Boolean: Verdadero o Falso
- Undefined: Valor no definido
- Null: Valor nulo
- Object: Objeto
- Symbol: Valor único
let numero = 10;
let numero2 = 10.5;
*/

console.log("Tipos de datos y algunos trucos");
let numero = 10, numero2 = 10.5;
let texto = "Hola Mundo", texto2 = 'Hola Mundo';
console.log(numero);

/* condicionales en JavaScript
if(condicion){
    //bloque de código si se cumple la condición
}else{  
    //bloque de código si no se cumple la condición
}
-esle if: permite evaluar otra condición si la anterior no se cumple
-else: permite ejecutar un bloque de código si ninguna de las condiciones anteriores se cumple
*/
// Declaración de una variable para la edad  
let edad = 20; // Puedes cambiar este valor para probar diferentes condiciones  

// Usando un condicional if-else  
if (edad > 18) {  
    console.log("Eres mayor de 18 años.");  
} else {  
    console.log("No eres mayor de 18 años.");  
}  

//Ejercicio rápido
/*
Crear un nuevo script que determine si un estudiante está 
iniciando su formación profesional, si está en proceso de formación o ya está próximo
a terminar.
*/
let semestre = 6;
if(semestre < 2){
    console.log("El estudiante está iniciando su formación profesional");   
}
else if(semestre >=2 && semestre <= 6){
    console.log("El estudiante está en proceso de formación");
}
else{
    console.log("El estudiante está próximo a terminar");
}

//Switch
/*
Switch es empleado para ejecutar diferentes bloques de código según diferentes condiciones.
*/
let dia = "lunes";
switch(dia){
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Fin de semana");
        break;
    default:
        console.log("No es un día válido");
        break;
}   

let semestre2 = 6;
switch(semestre2){
    case 1:
        console.log("El estudiante está iniciando su formación profesional");
        break;
    case 2:
        console.log("El estudiante está iniciando su formación profesional");
        break;
    case 3: 
    console.log("El estudiante está en proceso de formación");
        break;
    case 4:
        console.log("El estudiante está en proceso de formación");
        break;
    case 5:
        console.log("El estudiante está en proceso de formación");
        break;
    case 6:
        console.log("El estudiante está en proceso de formación");
        break;
    case 7:
        console.log("El estudiante está próximo a terminar");
        break
    case 8:
        console.log("El estudiante está próximo a terminar");
        break;
    default:
        console.log("No es un semestre válido");
        break;
}
