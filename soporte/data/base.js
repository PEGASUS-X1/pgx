document.addEventListener("DOMContentLoaded", function () {
    // Verificar si ya se guardó el nombre en el local storage
    const nombreGuardado = localStorage.getItem("nombre");
    if (nombreGuardado) {
        // Si ya se guardó el nombre, ocultar el overlay
        ocultarOverlay();
        $(".user").text(nombreGuardado);
    }

    // Verificar el estado del botón en el localStorage
    const mostrarBoton = localStorage.getItem("mostrarBoton");
    if (mostrarBoton === "false") {
        // Si el indicador está establecido en "false", ocultar el botón
        ocultarBoton();
    }
});

function guardarNombre() {
    const nombre = document.getElementById("cual-nombre").value;

    if (validarNombre(nombre)) {
        // Verificar si ya se guardó el nombre previamente
        const nombreGuardado = localStorage.getItem("nombre");

        if (!nombreGuardado) {
            // Guardar el nombre en el local storage
            localStorage.setItem("nombre", nombre);
            alert("Hola " + nombre);
            // Ocultar el overlay
            ocultarOverlay();
            $(".user").text(nombre);

            // Configurar el temporizador para recargar la página después de 5 segundos
            setTimeout(function () {
                if (!localStorage.getItem("recargada")) {
                    localStorage.setItem("recargada", "true");
                    // Recargar la página
                    location.reload();
                }
            }, 5000);
        } else {
            alert("El nombre ya ha sido guardado.");
        }
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

function handleKeyPress(event) {
    // Verificar si la tecla presionada es Enter
    if (event.key === "Enter") {
        // Evitar que se realice la acción por defecto del Enter en un formulario
        event.preventDefault();
        // Llamar a la función guardarNombre
        guardarNombre();
    }
}



function validarNombre(nombre) {
    // Verificar si contiene alguna mala palabra
    const malasPalabras = ["Mierda", "mala_palabra_2"]; // Agrega las malas palabras que desees
    for (const palabra of malasPalabras) {
        if (nombre.toLowerCase().includes(palabra)) {
            alert("Por favor, ingrese un nombre válido.");
            return false;
        }
    }

    // Verificar si es un número
    if (!isNaN(nombre)) {
        alert("Por favor, ingrese un nombre válido.");
        return false;
    }

    // Capitalizar la primera letra del nombre
    const nombreCapitalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    document.getElementById("cual-nombre").value = nombreCapitalizado;

    return true;
}

function ocultarOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

var username = localStorage.getItem('nombre');

var textoGenerado = document.getElementById("texto-generado");

var saludo = "Hola, " + username + " Bienvenid@!";
textoGenerado.textContent = saludo;

// Seleccionar el botón por su ID
var Exit = document.getElementById('Exit');
var refresh = document.getElementById('refresh');

// Asignar el evento onclick
Exit.onclick = function() {
    
    localStorage.clear();
    localStorage.removeItem("alarmActivated");
    location.reload();
};

function holaaa(){
    localStorage.removeItem("alarmActivated");
    location.reload();
}

refresh.onclick = function() {
    location.reload();
};