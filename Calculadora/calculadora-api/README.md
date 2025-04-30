# API de Calculadora

Esta es una API de calculadora simple construida con **Node.js** y **Express**. Permite realizar operaciones matemáticas como sumar, restar, multiplicar, dividir, entre otras, y mantiene un historial de las operaciones realizadas.

## Requisitos

- **Node.js** (Recomendado versión 14 o superior)
- **npm** (Node Package Manager)

## Instalación

1. Clona o descarga este repositorio.
2. Navega al directorio del proyecto desde la terminal.
3. Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install

```

## Ejecución
Para ejecutar el servidor de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

Este comando iniciará el servidor en el puerto 3000 (o el puerto que hayas configurado).

## Rutas

**1. POST /calcular**

En Postman realiza una operación matemática.

Body (JSON):

```bash
{
  "operacion": "sumar",
  "num1": 5,
  "num2": 3
}
```

Respuesta (Ejemplo):

```bash
{
  "operacion": "sumar",
  "num1": 5,
  "num2": 3,
  "resultado": 8
}
```

## Validaciones


- operacion debe ser uno de: "sumar", "restar", "multiplicar", "dividir", "potencia", "modulo", "raiz".

- num1 y num2 deben ser números válidos.

- Si la operación es división y num2 es 0, se devolverá un error.

- Si la operación es raíz cuadrada y num1 es negativo, se devolverá un error.

## GET /historial
Obtiene el historial de las últimas operaciones realizadas.

**Respuesta (Ejemplo):**

```bash
[
  {
    "operacion": "sumar",
    "num1": 5,
    "num2": 3,
    "resultado": 8,
    "timestamp": "2025-04-30T12:30:45.123Z"
  },
  {
    "operacion": "restar",
    "num1": 10,
    "num2": 4,
    "resultado": 6,
    "timestamp": "2025-04-30T12:31:00.456Z"
  }
]
```

## GET /calcular/{operacion}/{num1}/{num2}

Realiza una operación con dos parámetros (num1 y num2).

****Ejemplo de solicitud:**
GET http://localhost:3000/calcular/sumar/5/3

**Respuesta:**

```bash
{
  "operacion": "sumar",
  "num1": 5,
  "num2": 3,
  "resultado": 8
}
```

## GET /calcular/{operacion}/{num1}

Realiza una operación con un solo parámetro (num1).

**Ejemplo de solicitud:**
GET http://localhost:3000/calcular/raiz/25

**Respuesta:**

```Bash
{
  "operacion": "raiz",
  "num1": 25,
  "resultado": 5
}

```