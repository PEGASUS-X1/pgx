var url_img_actividad = document.getElementById("url_img_actividad");
var url_Archivo_actividad = document.getElementById("url_Archivo_actividad");
var Nombre_Actividad = document.getElementById("Nombre_Actividad");
var Fecha_Actividad = document.getElementById("Fecha_Actividad");
//! XD
var IMG_ejemplo = document.getElementById("IMG_ejemplo");
var Enlace_ejemplo = document.getElementById("Enlace_ejemplo");
var Nombre_ejemplo = document.getElementById("Nombre_ejemplo");
var fecha_ejemplo = document.getElementById("fecha_ejemplo");

function actualizarDatos() {
    IMG_ejemplo.src = url_img_actividad.value;
    Enlace_ejemplo.href =  url_Archivo_actividad.value;
    Nombre_ejemplo.textContent = Nombre_Actividad.value;
    fecha_ejemplo.textContent = Fecha_Actividad.value;
}

$(document).ready(function () {
    actualizarDatos();

    url_img_actividad.addEventListener("input", actualizarDatos);
    url_Archivo_actividad.addEventListener("input", actualizarDatos);
    Nombre_Actividad.addEventListener("input", actualizarDatos);
    Fecha_Actividad.addEventListener("input", actualizarDatos);
});

document.addEventListener("keyup", e => {

    if (e.target.matches("#buscador_act")) {

        if (e.key === "Escape") e.target.value = ""

        document.querySelectorAll(".carta_avance").forEach(fruta => {

            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? fruta.classList.remove("filtro-shar")
                : fruta.classList.add("filtro-shar")
        })

    }


})

var Link_Online = "https://script.google.com/macros/s/AKfycbziKTXltWyYjyZwT5bRN063JRTbldpAe5A5KR78tE5Uc_go1k2DA1_f-FVzxlM7q-aD/exec";

function SubirBtn() {
    var url_img_actividad = $("#url_img_actividad").val();
    var url_Archivo_actividad = $("#url_Archivo_actividad").val();
    var Nombre_Actividad = $("#Nombre_Actividad").val();
    var Fecha_Actividadd = $("#Fecha_Actividad").val();
    var selectedTablero = $("#Alojamiento_selec_area").val();
    var Fecha_Actividad = "[ " + Fecha_Actividadd + " ]";  
    // Recuperar el valor de Link_Online del localStorage

    if (selectedTablero.trim() !== '' && Link_Online) {
        $.ajax({
            url: Link_Online,
            method: 'POST',
            data: {
                selectedTablero: selectedTablero,
                url_img_actividad: url_img_actividad,
                url_Archivo_actividad: url_Archivo_actividad,
                Nombre_Actividad: Nombre_Actividad,
                Fecha_Actividad: Fecha_Actividad,
            },
            success: function (response) {
                alert('Agregado con éxito');
                mostrarBtns();
                // Limpiar los campos después de agregar el botón
                // $('#url_img_actividad').val('');
                $('#url_Archivo_actividad').val('');
                $('#Nombre_Actividad').val('');
                $('#Fecha_Actividad').val('');
            },
            error: function (error) {
                console.error('Error al agregar: ', error);
            }
        });
    } else {
        alert('Por favor, seleccione un tablero y asegúrese de que la URL esté guardada antes de subir el botón.');
    }
}

function mostrarBtns() {
    if (Link_Online) {
        $.ajax({
            url: Link_Online,
            method: 'GET',
            success: function (response) {
                var Metodos = $('#Metodos');
                var Antropologia = $('#Antropologia');
                var Ambiente = $('#Ambiente');
                var Comunicacion = $('#Comunicacion');
                var Precalculo = $('#Precalculo');
                var Quechua = $('#Quechua');
                var Sistemas = $('#Sistemas');
                Metodos.empty();
                Antropologia.empty();
                Ambiente.empty();
                Comunicacion.empty();
                Precalculo.empty();
                Quechua.empty();
                Sistemas.empty();

                response.forEach(function (Btns) {
                    const contenedor = document.createElement("div");
                    contenedor.className = "carta_avance";
    
                    const Img_avance = document.createElement("img");
                    Img_avance.src = Btns.url_img_actividad;
    
                    const xa = document.createElement("a");
                    xa.className = "x";
                    xa.target = "_blank";
                    xa.href = Btns.url_Archivo_actividad;
    
                    const xh1 = document.createElement("h1");
                    xh1.textContent = Btns.Nombre_Actividad;
                    xh1.className = "textodecarta",
                    xa.append(xh1);
    
                    const textofecha = document.createElement("p");
                    textofecha.className = "fechap"
                    textofecha.textContent = Btns.Fecha_Actividad;

                    contenedor.append(Img_avance);
                    contenedor.append(xa);
                    contenedor.append(textofecha);

                    if (Btns.selectedTablero === 'Metodos') {
                        Metodos.append(contenedor);
                    } else if (Btns.selectedTablero === 'Antropologia') {
                        Antropologia.append(contenedor);
                    } else if (Btns.selectedTablero === 'Ambiente') {
                        Ambiente.append(contenedor);
                    } else if (Btns.selectedTablero === 'Comunicacion') {
                        Comunicacion.append(contenedor);
                    } else if (Btns.selectedTablero === 'Precalculo') {
                        Precalculo.append(contenedor);
                    } else if (Btns.selectedTablero === 'Quechua') {
                        Quechua.append(contenedor);
                    } else if (Btns.selectedTablero === 'Sistemas') {
                        Sistemas.append(contenedor);
                    }
                });
            },
            error: function (error) {
                console.error('Error', error);
            }
        });
    } else {
        console.log('No hay una URL guardada en el localStorage.');
    }
}



$(document).ready(function() {
    mostrarBtns();
});
