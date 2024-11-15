const express = require('express');
const Usuario = require('../models/User');
const mysql = require('mysql2');
const router = express.Router();

router.post('/usuarios', (req, res) => {

    const { nombre, password, date} = req.body;

    const nuevoUsuario = new Usuario(nombre, password, date);

    Usuario.crear(nuevoUsuario, (error, usuarioId) => {
        if (error) {
            return res.status(500).json({
                error: true,
                mensaje: 'Error al crear usuario'
            });
        }

        res.status(201).json({
            error: false,
            mensaje: 'Usuario creado exitosamente',
            usuarioId
        });
    });
});

router.get('/usuarios/:id', (req, res) => {
    const connection = require('../config/database');
    const userId = req.params.id;

    const query = 'SELECT * FROM users WHERE id = ?';

    const finalQuery = mysql.format(query, userId);
    console.log('Query:', finalQuery);

    connection.query(query, [userId], (error, resultados) => {
        if (error) {
            return res.status(500).json({
                error: true,
                mensaje: 'Error al obtener usuario'
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                error: true,
                mensaje: 'Usuario no encontrado'
            });
        }

        res.json(resultados[0]);
    });
});

module.exports = router;