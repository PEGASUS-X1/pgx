// Obtener todos los botones con la clase btn_lector
var botonesLector = document.querySelectorAll(".btn_lector");

// Función para manejar el evento click en los botones
function manejarClick(event) {
    var elemento = event.target;
    var medio = elemento.getAttribute("data-medio");
    var medioElemento = document.getElementById(medio);

    if (medioElemento.paused) {
        medioElemento.play();
        elemento.innerHTML = '<i class="fa fa-stop"></i> Dejar De Leer';
    } else {
        medioElemento.pause();
        elemento.innerHTML = '<i class="fa fa-play"></i> Leer';
    }
}

// Agregar el evento click a todos los botones
botonesLector.forEach(function(boton) {
    boton.addEventListener("click", manejarClick);
});
