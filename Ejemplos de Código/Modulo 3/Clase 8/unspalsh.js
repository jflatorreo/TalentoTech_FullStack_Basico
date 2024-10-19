const UNSPLASH_API_KEY = 'UCnAJQC_PR1sZvqGjUx40APVW1gmhYBiO7_i2pI_Kr8';
const UNSPLASH_API_URL = 'https://api.unsplash.com/photos/random';

async function obtenerImagenes(cantidad) {
    const imagenes = [];
    try {
        const response = await fetch(`${UNSPLASH_API_URL}?count=${cantidad}&client_id=${UNSPLASH_API_KEY}`);
        if (!response.ok) {
           //manejar los errores posibles
             throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();
        data.forEach(imagen => {
            //Recibir la imágen y agregarla a un arreglo de imágnes
             imagenes.push(imagen.urls.regular);
        });
    } catch (error) {
        //Manejar los errores de red
    }
    return imagenes;
}

// Prueba tu función
obtenerImagenes(1)
    .then(imagenes => console.log('Imágenes obtenidas:', imagenes))
    .catch(error => console.error('Error en la solicitud:', error));
