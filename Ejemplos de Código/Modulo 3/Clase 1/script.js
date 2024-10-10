
window.addEventListener("scroll", function() {
    var nav = document.getElementById("navbar");
    if (window.scrollY > 150) { // Cambia el fondo después de 50px de desplazamiento
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});