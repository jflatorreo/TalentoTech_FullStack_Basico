class Usuario {
    constructor(nombre,password,date) {
        this.nombre = nombre;
        this.date = date;
        this.password = password;
    }

    static crear(usuario, callback) {
        const query = 'INSERT INTO users (nombre, password, date) VALUES (?, ?, ?)';
        const valores = [usuario.nombre, usuario.password, usuario.date];

        connection.query(query, valores, (error, resultados) => {
            if (error) {
                return callback(error);
            }
            callback(null, resultados.insertId);
        });
    }

    static obtenerPorId(id, callback) {
        const query = 'SELECT * FROM users WHERE id = ?';

        connection.query(query, [id], (error, resultados) => {
            if (error) {
                return callback(error);
            }
            callback(null, resultados[0]);
        });
    }
}

module.exports = Usuario;
