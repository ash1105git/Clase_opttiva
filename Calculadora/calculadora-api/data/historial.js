let historial = [];

const agregarHistorial = (operacion, num1, num2, resultado) => {
  const operacionHistorial = {
    operacion,
    num1,
    num2,
    resultado,
    timestamp: new Date().toISOString(),
  };

  historial.unshift(operacionHistorial);

  if (historial.length > 10) {
    historial.pop();
  }
};

const obtenerHistorial = () => historial;

module.exports = { agregarHistorial, obtenerHistorial };
// module.exports = { agregarHistorial, obtenerHistorial };
// module.exports = { agregarHistorial, obtenerHistorial };