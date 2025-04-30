const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hola Mundo'));
app.listen(3000, () => console.log('Servidor en puerto 3000'));


// Para ejecutar el servidor, usa el siguiente comando en la terminal:  
// node holamundo.js
// Para probar el servidor, abre Postman y realiza una solicitud GET a la URL: http://localhost:3000/