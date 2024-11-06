const http = require('http');
 
const servidor = http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Servidor Ok');
 });


 servidor.listen(3001, () => {
 console.log('Actualización del Servidor corriendo en http://localhost:3001/');
 });