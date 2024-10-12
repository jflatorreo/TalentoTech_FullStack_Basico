

// Función para convertir de Celsius a Fahrenheit
function celsiusToFahrenheit () {
//alert("Esta es la función celsiusToFahrenheit");
    let f;
    let celsius;

    celsius = document.getElementById("celsius").value

    f = celsius*(9/5)+32;

    document.getElementById("fahrenheit").value = f;
return f;
}
// Funci ´o n para convertir de Fahrenheit a Celsius
function fahrenheitToCelsius () {
   // alert("Esta es la función fahrenheitToCelsius");
    let fahrenheit;
    let celsius;

    fahrenheit = document.getElementById("fahrenheit").value

    celsius = (fahrenheit-32)*(5/9);

    document.getElementById("celsius").value = celsius;
    return celsius;
}

function p() {
    let a = prompt ("ingrese un numero");

    alert ("su numero ingresado fue: "+a)
}


// Prueba tus funciones aqu ´ı
//console.log (celsiusToFahrenheit (10) ) ; // Deber ´ı a imprimir 32
//console.log (fahrenheitToCelsius (32) ) ; // Deber ´ı a imprimir 0