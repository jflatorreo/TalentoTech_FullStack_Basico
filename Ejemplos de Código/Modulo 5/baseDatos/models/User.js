const mysql = require("mysql2");

class User {
    constructor(nombre, password, date) {
        this.nombre = nombre;
        this.password = password;
        this.date = date;
    }

    static crear(usuario, callback) {
        const connection = require('../config/database');
        const query = 'INSERT INTO users (nombre, password, fecha_registro) VALUES (?, ?, ?)';
        const valores = [usuario.nombre, usuario.password, usuario.date];

        const finalQuery = mysql.format(query, valores);
        console.log('Query:', finalQuery);

        connection.query(query, valores, (error, resultados) => {
            if (error) {
                return callback(error);
            }
            callback(null, resultados.insertId);
        });
    }
}

module.exports = User;