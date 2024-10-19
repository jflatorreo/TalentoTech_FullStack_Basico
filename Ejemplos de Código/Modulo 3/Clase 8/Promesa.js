const miPromesa = new Promise((resolve, reject) => {
    // Código asíncrono
    setTimeout(()=> {

        const exito=false;

        if (exito) {
            let a=1+exito;
            resolve(a);
        } else {
            let b =0;
            b+=5;
           reject(b);

        }
    },1000)

});

miPromesa
    .then(data => {console.log(data);})

    .catch(error => {
        let a ="hola";
        console.error(error);

    });

async function miFuncionAsincrona (){
try {
        const response =  await fetch("https://qwertyuihgcg.typicode.com/uses")


        const exito = response.status;

        if (exito == 200) {

            return ("La solicitud se proceso correctamente y su contenido es " + response);
        }
        if (exito == 404) {
            return ("No se encontró el recurso")
        }

}
catch (error) {
    return "Este es un error de red:"+error;
}
}
miFuncionAsincrona().then((data)=> {
        console.log("ya se resolvió la promesa")
        console.log(data)
    }
);

console.log("Este mensaje esta despues de la promesa");

let b =0;
for(b;b<100;b++){
    console.log(b)
}



