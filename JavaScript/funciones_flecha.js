// funciones flecha: son una forma más corta de escribir funciones en JavaScript.
    // () => {} 
        let saludar2 = () => {
            console.log("Hola, bienvenido a la clase de programación");
        }
        saludar2();
        //Ejercicio rápido
        /*
        Crear una función flecha que sume dos números.
        */
        let suma2 = (a,b) => {
            console.log(a+b);
        }
        suma2(5,3);
        /*
        Ejercicio rápido
        Crear una función flecha que trabaje como una calculadora, que reciba dos parametros: num1 y num2 y realice
        la suma, resta, multiplicación y división de ambos números.
        */
        let calculadora2 = (num1,num2) => {             
            let suma = num1 + num2;
            let resta = num1 - num2;
            let multiplicacion = num1 * num2;
            let division = num1 / num2;
            console.log("El resultado de la suma es igual a "+ suma);
            console.log("El resultado de la resta es igual a "+ resta); 
            console.log("El resultado de la multiplicación es igual a "+ multiplicacion);
            console.log("El resultado de la división es igual a "+ division);
            }
            calculadora2(10,5);
            //Ejercicio rápido
            /*
            Crear una función flecha que reciba un número como parametro y muestre la tabla de multiplicar de ese número.
            */
            let tablaMultiplicar = (numero) => {
                for(let i=1; i<=10; i++){
                    console.log(numero + " x " + i + " = " + numero*i);
                }
            }
            tablaMultiplicar(5);
            //Ejercicio rápido
            /*
            Crear una función flecha que reciba un número como parametro y muestre si es par o impar.
            */
            let parImpar = (numero) => {
                if(numero%2 == 0){
                    console.log("El número es par");
                }else{
                    console.log("El número es impar");
                }
            }
            parImpar(5);
            parImpar(6);
            //Ejercicio rápido
            /*
            Crear una función flecha que reciba un número como parametro y muestre si es positivo o negativo.
            */
            let positivoNegativo = (numero) => {
                if(numero>=0){
                    console.log("El número es positivo");
                }else{
                    console.log("El número es negativo");
                }
            }
            positivoNegativo(5);
            positivoNegativo(-6);
            //Ejercicio rápido
            /*
            Crear una función flecha que reciba un número como parametro y muestre si es primo o no.
            */
            let primo = (numero) => {
                let contador = 0;
                for(let i=1; i<=numero; i++){
                    if(numero%i == 0){
                        contador++;
                    }
                }
                if(contador == 2){
                    console.log("El número es primo");
                }
                else{
                    console.log("El número no es primo");
                }
            }
            primo(5);
            primo(6);
            //Ejercicio rápido