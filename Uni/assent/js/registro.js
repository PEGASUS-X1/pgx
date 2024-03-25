function Guardar() {
    console.log("Guardar() function called");
    var nombre = $('#nombre').val().trim();
    var numero = $('#numero').val().trim();
    var seleccion = $('#Area').val();

    console.log("Nombre:", nombre);
    console.log("Número:", numero);
    console.log("Selección de área:", seleccion);

    if (nombre !== '' && numero !== '' && seleccion !== null) {
        console.log("Todos los campos están completos. Enviando formulario...");

        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbyfzoGwdkaRCtFTWmmL2_BCbckCO-rOd0ruQipJc0vXUpehZkXs1S0L1tlyFq6qg9WIpw/exec',
            method: 'POST',
            data: {
                nombre: nombre,
                numero: numero,
                seleccion: seleccion,
            },
            success: function(responseLibro) {
                alert('Te Agregaste con Éxito ' + nombre);
                mostrar();
            },
            error: function(error) {
                console.error('Ups Hubo un error: ', error);
            }
        });

        // Limpiar los campos después de agregar el comentario
        $('#nombre').val('');
        $('#numero').val('');
        $('#Area').val('');
        ocultarElemento();
    } else {
        alert('Por favor completa todos los campos antes de enviar el formulario.');
    }
}

// // {/* <button id="botonMostrar" onclick="mostrarElemento()">Mostrar Elemento</button> */}

function ocultarElemento() {
    const audioElement = document.getElementById("miMusica");
    audioElement.play();
    const fechaActual = new Date();
    const fechaReaparicion = new Date();
    fechaReaparicion.setDate(fechaActual.getDate() + 100000000000000);
    const fechaReaparicionUTC = fechaReaparicion.toUTCString();
    
    document.cookie = `ocultarElemento=true; expires=${fechaReaparicionUTC}; path=/`;

    setTimeout(() => {
        window.location.href = "/home.html"; 
    }, 15000);

    document.getElementById("elementoParaOcultar").style.display = "none";
    document.getElementById("visible").style.display = "block";
    document.getElementById("botonOcultar").disabled = true;
    document.getElementById("botonMostrar").disabled = false;
}

function mostrarElemento() {
    // Eliminar la cookie
    document.cookie = "ocultarElemento=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Mostrar el elemento oculto y ocultar el elemento visible
    document.getElementById("elementoParaOcultar").style.display = "block";
    document.getElementById("visible").style.display = "none";

    // Habilitar el botón de ocultar y deshabilitar el botón de mostrar
    document.getElementById("botonOcultar").disabled = false;
    document.getElementById("botonMostrar").disabled = true;
}

// Verificar si la cookie existe al cargar la página
window.onload = function () {
    if (document.cookie.includes("ocultarElemento=true")) {
        window.location.href = "/home.html"; 
        ocultarElemento(); // Llamar a la función de ocultar directamente si la cookie existe
    }
};

function actualizarEnlace() {
    var seleccion = document.getElementById("Area").value;
    var links = document.querySelectorAll(".wasap a");
    
    for (var i = 0; i < links.length; i++) {
        links[i].style.display = "none";
    }
    
    var linkToShow = document.getElementById(seleccion);
    if (linkToShow) {
        linkToShow.style.display = "block";
    }
}