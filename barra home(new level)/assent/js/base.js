

function modal_cerrar_controlador_almacenador(){
    var controlador_almacenador = document.getElementById("controlador_almacenador");
    controlador_almacenador.style.display = "none";
    location.reload();
}

var botones = document.getElementsByClassName("bar_btn");

// Iterar sobre cada botón para adjuntar el evento de clic
for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function() {
    // Eliminar la clase "activado" de todos los botones
    for (var j = 0; j < botones.length; j++) {
      botones[j].classList.remove("activado");
    }
    // Agregar la clase "activado" solo al botón seleccionado
    this.classList.add("activado");
  });
}

var chats = document.getElementById("chats");
var chat = document.getElementById("Chat");
chat.onclick = function(){
    if (chats.style.display === "" || chats.style.display === "none") {
        tableros.style.display = "none";
        Servicio.style.display = "none";
        chats.style.display = "block";
    } else {
        chats.style.display = "none";
        for (var j = 0; j < botones.length; j++) {
            botones[j].classList.remove("activado");
          }
    }
}

var tablas = document.getElementById("tablas");
var tableros = document.getElementById("tableros");
tablas.onclick = function(){
    if (tableros.style.display === "" || tableros.style.display === "none") {
        chats.style.display = "none";
        Servicio.style.display = "none";
        tableros.style.display = "block";
    } else {
        tableros.style.display = "none";
        for (var j = 0; j < botones.length; j++) {
            botones[j].classList.remove("activado");
        }
    }
}


var Servicios = document.getElementById("Servicios");
var Servicio = document.getElementById("Servicio");
Servicios.onclick = function(){
    if(Servicio.style.display === "" || Servicio.style.display === "none"){
        Servicio.style.display = "block";
        chats.style.display = "none";
        tableros.style.display = "none";
    } else {
        Servicio.style.display = "none";
        for (var j = 0; j < botones.length; j++) {
            botones[j].classList.remove("activado");
        }
    }
}