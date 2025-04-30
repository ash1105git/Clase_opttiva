const express = require('express');
const app = express();
const port = 5001;

app.use(express.json()); // Necesario para interpretar datos JSON en el body

let usuarios = [
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'Ana', edad: 30 },
    { id: 3, nombre: 'Pedro', edad: 28 }
];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
    const { nombre, edad } = req.body;

    if (!nombre || !edad) {
        return res.status(400).json({ mensaje: 'Nombre y edad son requeridos.' });
    }

    const nuevoUsuario = {
        id: usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1,
        nombre,
        edad
    };

    usuarios.push(nuevoUsuario);

    res.status(201).json(nuevoUsuario);
});

app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const usuarioIndex = usuarios.findIndex(usuario => usuario.id === parseInt(id));

    if (usuarioIndex === -1) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
    }

    const usuarioEliminado = usuarios.splice(usuarioIndex, 1)[0];

    res.status(200).json(usuarioEliminado);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

// Para ejecutar el servidor, usa el siguiente comando en la terminal:
// node envioDatos.js
// Para probar el servidor, abre Postman y realiza una solicitud GET a la URL:
//// http://localhost:5001/usuarios