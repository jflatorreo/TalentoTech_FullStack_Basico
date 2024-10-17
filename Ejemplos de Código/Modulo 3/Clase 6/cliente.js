fetch ('http://www.mipagina.com',{
    method: 'GET',
    headers: {'content-type': 'application/json'},
})
.then(function (response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.text();
})
.then(data => {
    console.log("Datos Recibidos:" + data);
})


fetch ('http://localhost:3000/users',{
    method: 'GET',
    headers: {'content-type': 'application/json'},
})
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log("Datos Recibidos:" + data[2].id);
    })