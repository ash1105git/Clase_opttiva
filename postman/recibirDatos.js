const express = require('express'); // Importa el módulo express
const bodyParser = require('body-parser'); // Importa el módulo body-parser para manejar datos del cuerpo de las solicitudes
const app = express(); // Crea una instancia de la aplicación Express
const port = 6000; // Define el puerto en el que se ejecutará el servidor (6000)

app.use(bodyParser.json()); // Configura body-parser para analizar el cuerpo de las solicitudes en formato JSON

app.post('/usuarios', (req, res) => {
    const nuevoUsuario = req.body; // Obtiene el nuevo usuario del cuerpo de la solicitud
    console.log('Nuevo usuario recibido:', nuevoUsuario); // Imprime el nuevo usuario en la consola
    res.send('Usuario creado exitosamente'); // Envía una respuesta de éxito al cliente
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`); // Mensaje de confirmación al iniciar el servidor
});

// Para ejecutar el servidor, usa el siguiente comando en la terminal:      
// node envioDatos.js
// Para probar el servidor, abre Postman y realiza una solicitud POST a la URL: http://localhost:6000/usuarios
// Asegúrate de enviar un cuerpo JSON en la solicitud, por ejemplo: { "nombre": "Juan", "edad": 30 }
// Puedes usar la pestaña "Body" en Postman y seleccionar "raw" y "JSON" para enviar el cuerpo de la solicitud en formato JSON.
// Asegúrate de que el servidor esté en ejecución antes de enviar la solicitud desde Postman.
// Si el servidor está funcionando correctamente, deberías ver el mensaje "Nuevo usuario recibido:" seguido de los datos del nuevo usuario en la consola del servidor.
// También deberías recibir la respuesta "Usuario creado exitosamente" en Postman.