const express = require('express');
const User = require('./models/User');
const app = express();

app.use(express.json());

// Ruta para crear un nuevo usuario
app.post('/usuarios', (req, res) => {
    const { nombre, password, date } = req.body;

    const nuevoUsuario = new User(nombre, password, date);

    User.crear(nuevoUsuario, (error, usuarioId) => {
        if (error) {
            return res.status(500).json({
                error: true,
                mensaje: 'Error al crear usuario'
            });
        }

        res.status(201).json({
            error: false,
            mensaje: 'User creado exitosamente',
            usuarioId
        });
    });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
