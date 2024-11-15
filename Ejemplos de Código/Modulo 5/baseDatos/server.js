const express = require('express');
const usuarioRouter = require('./routes/UserRoutes');
const app = express();

app.use(express.json());
app.use('/api/v1', usuarioRouter);


app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});