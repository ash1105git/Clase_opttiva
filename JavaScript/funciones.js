/*
    Funciones: son bloques de código que se pueden ejec
    utar en cualquier momento.
    
    function nombreFuncion(){
    //bloque de código
    }
    */
    function saludar(){
        console.log("Hola, bienvenido a la clase de programación");
        }
        saludar();
        //Ejercicio rápido
        /* Funcion que suma dos nùmeros */
        function suma(a,b){
            console.log(a+b);
         //   return a+b;
        }
        suma(5,3);
        /*
        Ejercicio rápido
        Crear una funcion que trabaje como una calculadora, que reciba dos parametros: num1 y num2 y realice
        la suma, resta, multiplicación y división de ambos números.
        */  
       function calculadora(num1,num2){             
        let suma = num1 + num2;
        let resta = num1 - num2;
        let multiplicacion = num1 * num2;
        let division = num1 / num2;
        console.log("El resultado de la suma es igual a "+ suma);
        console.log("El resultado de la resta es igual a "+ resta); 
        console.log("El resultado de la multiplicación es igual a "+ multiplicacion);
        console.log("El resultado de la división es igual a "+ division);
        }
        calculadora(10,5);