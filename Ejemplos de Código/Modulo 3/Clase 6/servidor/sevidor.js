const express = require('express');

const app = express();
app.use(express.json());

const users = [
    {id:1,nombre:'Julian'},
    {id:2,nombre:'Juana'},
    {id:3,nombre:'Pepe'}]

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/', (req, res) => {
    res.send("Bienvenido al servidor");
})

app.listen(3000, () =>
    console.log('El servidor está corriendo en el puerto 3000'));