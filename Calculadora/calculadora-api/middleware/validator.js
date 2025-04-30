const { body } = require('express-validator');

const validarOperacion = [
  body('operacion')
    .notEmpty().withMessage('La operación es obligatoria.')
    .isIn(['sumar', 'restar', 'multiplicar', 'dividir', 'potencia', 'modulo', 'raiz'])
    .withMessage('Operación inválida. Las operaciones válidas son: sumar, restar, multiplicar, dividir, potencia, modulo, raiz.'),

  body('num1')
    .notEmpty().withMessage('El primer número es obligatorio.')
    .isNumeric().withMessage('El primer número debe ser un valor numérico.'),

  body('num2')
    .custom((value, { req }) => {
      // Si la operación no es "raiz", "num2" debería estar presente
      if (req.body.operacion !== 'raiz' && !value) {
        throw new Error('El segundo número es obligatorio.');
      }
      // Si la operación es "raiz", "num2" no es necesario
      return true;
    })
    .isNumeric().withMessage('El segundo número debe ser un valor numérico.')
    .optional({ nullable: true }) // Permite que "num2" sea opcional solo si la operación es "raiz"
];

module.exports = { validarOperacion };

