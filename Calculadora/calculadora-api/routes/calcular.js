const express = require('express');
const router = express.Router();
const { agregarHistorial } = require('../data/historial'); // Importar el historial
const { validarOperacion } = require('../middleware/validator'); // Importar la validación desde el archivo 'validator.js'
const { validationResult } = require('express-validator'); // Para obtener los errores de validación

// Función para manejar operaciones
const realizarOperacion = (operacion, num1, num2) => {
  switch (operacion) {
    case 'sumar':
      return num1 + num2;
    case 'restar':
      return num1 - num2;
    case 'multiplicar':
      return num1 * num2;
    case 'dividir':
      if (num2 === 0) {
        throw new Error('No se puede dividir entre 0');
      }
      return num1 / num2;
    case 'potencia':
      return Math.pow(num1, num2);
    case 'modulo':
      return num1 % num2;
    case 'raiz':
      if (num1 < 0) {
        throw new Error('La raíz cuadrada no está definida para números negativos');
      }
      return Math.sqrt(num1);
    default:
      throw new Error('Operación no válida');
  }
};

// Ruta para operaciones con dos parámetros
router.get('/:operacion/:num1/:num2', (req, res) => {
  const { operacion, num1, num2 } = req.params;

  // Convertir los parámetros a números
  const numero1 = parseFloat(num1);
  const numero2 = parseFloat(num2);

  // Validación de parámetros
  if (isNaN(numero1) || isNaN(numero2)) {
    return res.status(400).json({ error: 'Los parámetros deben ser números válidos' });
  }

  try {
    // Realizar la operación
    const resultado = realizarOperacion(operacion, numero1, numero2);

    // Agregar al historial
    agregarHistorial(operacion, numero1, numero2, resultado);

    // Responder con el resultado
    res.json({
      operacion,
      num1: numero1,
      num2: numero2,
      resultado,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para operaciones con un solo parámetro (por ejemplo, raíz cuadrada)
router.get('/:operacion/:num1', (req, res) => {
  const { operacion, num1 } = req.params;

  // Convertir el parámetro a número
  const numero1 = parseFloat(num1);

  // Validación de parámetros
  if (isNaN(numero1)) {
    return res.status(400).json({ error: 'El parámetro debe ser un número válido' });
  }

  try {
    // Realizar la operación
    const resultado = realizarOperacion(operacion, numero1, null);

    // Agregar al historial
    agregarHistorial(operacion, numero1, null, resultado);

    // Responder con el resultado
    res.json({
      operacion,
      num1: numero1,
      resultado,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para la operación POST con validación
router.post('/', validarOperacion, (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { operacion, num1, num2 } = req.body;

  try {
    const resultado = realizarOperacion(operacion, parseFloat(num1), num2 !== undefined ? parseFloat(num2) : null);

    agregarHistorial(operacion, num1, num2, resultado);

    res.json({
      operacion,
      num1,
      ...(num2 !== undefined && { num2 }),
      resultado
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
