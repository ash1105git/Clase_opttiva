/*que es una clase?
* Una clase es una plantilla para crear objetos. 
* Define propiedades y métodos que los objetos creados a partir de la clase tendrán.
* Ejemplo de uso: */

 class Persona {
   constructor(Nombre, Edad) {
     this.Nombre = Nombre;
     this.Edad = Edad;
   }
   metodo() {

   }

   saludar() {
     console.log(`Hola, mi nombre es ${this.Nombre} y tengo ${this.Edad} años.`);
   }
}

   //Crear objetos (instancias)
   //Para usar una clase, se crea una instancia de la misma utilizando la palabra clave "new".

   const persona1 = new Persona("Juan", 25);
   persona1.saludar(); // Salida: Hola, mi nombre es Juan y tengo 25 años.

   //metodo this
   //El operador this se refiere al objeto actual en el contexto de la clase.

   class Perro {
     constructor(nombre, raza) {
       this.nombre = nombre;
       this.raza = raza;
     }

     ladrar() {
       console.log(`${this.nombre} dice: ¡Guau!`);
     }
   }

   const perro1 = new Perro("Fido", "Labrador");
   perro1.ladrar();
   // Salida: Fido dice: ¡Guau!

   //herencia entre clases
   //La herencia permite crear una nueva clase basada en una clase existente.
    //La nueva clase hereda las propiedades y métodos de la clase base.
    
    class Estudiante extends Persona {
      constructor(Nombre, Edad, Carrera) {
        super(Nombre, Edad); // Llama al constructor de la clase base
        this.Carrera = Carrera;
      }

      estudiar() {
        console.log(`${this.Nombre} está estudiando ${this.Carrera}.`);
      }
    }

    /*Buenas prácticas de programación orientada a objetos:
    - Nombres de clases en pascal case (ejemplo: Persona, Estudiante, MiClase).
    - Nombres de métodos y propiedades en camel case (ejemplo: nombre, edad, saludar).
    - Metodos con nombres descriptivos (ejemplo: calcularEdad, mostrarInformacion).
    - Métodos con verbos en infinitivo (ejemplo: calcular, mostrar, guardar).
    - Propiedades con nombres descriptivos (ejemplo: nombre, edad, direccion).
    - utilizar const y let en lugar de var para declarar variables.
    - separar responsabilidades en diferentes clases.
    - evitar clases con demasiadas responsabilidades (clases "Dios").*/

    //Ejercicio práctico:

    /*1. Crear una clase Libro con propiedades como título, autor y año de publicación. Agregar un método
    para mostrar la información del libro.*/
   
    class Libro {
        constructor(titulo, autor, anio) {
            this.titulo = titulo;
            this.autor = autor;
            this.anio = anio;
        }
            mostrarInformacion() {
            console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Año: ${this.anio}`);
        }
    }
    
    
        /*2. Crear una clase Estudiante que herede de Persona y tenga una propiedad adicional llamada
    carrera. Agregar un método para mostrar la información del estudiante.*/

    class Estudiante extends Persona {
        constructor(nombre, edad, carrera) {
            super(nombre, edad);
            this.carrera = carrera;
        }
    
        mostrarInformacion() {
            console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera}`);
        }
    }

     
    /*3. Crear una clase CuentaBancaria con métodos depositar(), retirar() y consultarSaldo().*/
    class CuentaBancaria {
        constructor(saldoInicial) {
            this.saldo = saldoInicial;
        }
    
        depositar(monto) {
            this.saldo += monto;
            console.log(`Depositaste ${monto}. Saldo actual: ${this.saldo}`);
        }
    
        retirar(monto) {
            if (monto <= this.saldo) {
                this.saldo -= monto;
                console.log(`Retiraste ${monto}. Saldo actual: ${this.saldo}`);
            } else {
                console.log("Fondos insuficientes.");
            }
        }
    
        consultarSaldo() {
            console.log(`Saldo actual: ${this.saldo}`);
        }
    }
    

