// app.js

const express = require('express');
const calcularRoutes = require('./routes/calcular');
const logger = require('./middleware/logger');
const { obtenerHistorial } = require('./data/historial'); // Importar historial

const app = express();
app.use(express.json());

// Middleware de logging
app.use(logger);

// Rutas
app.use('/calcular', calcularRoutes);

// Ruta para historial
app.get('/historial', (req, res) => {
  res.json(obtenerHistorial());
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
