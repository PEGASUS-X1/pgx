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

    if (e.target.matches("#buscador_ava")) {

        if (e.key === "Escape") e.target.value = ""

        document.querySelectorAll(".carta_ava").forEach(fruta => {

            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? fruta.classList.remove("filtro-shar")
                : fruta.classList.add("filtro-shar")
        })

    }


})

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
                mostrarAvances();
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

function mostrarAvances() {
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

var Link_Online2 = "https://script.google.com/macros/s/AKfycbx1-MlkTUZDAeWLp0h4kqFLIHLiwaOIgQraoYVVX26eI_3oo2EUYBUuTbJSRigQw5tzbg/exec";

function SubirBtn_t() {
    var url_img_trabajo = $("#url_img_trabajo").val();
    var url_Archivo_trabajo = $("#url_Archivo_trabajo").val();
    var Nombre_trabajo = $("#Nombre_trabajo").val();
    var Fecha_trabajoo = $("#Fecha_trabajo").val();
    var selectedTablero_trabajo = $("#Alojamiento_selec_area").val();
    var Fecha_trabajo = "[ " + Fecha_trabajoo + " ]";  
    // Recuperar el valor de Link_Online del localStorage

    if (selectedTablero_trabajo.trim() !== '' && Link_Online2) {
        $.ajax({
            url: Link_Online2,
            method: 'POST',
            data: {
                selectedTablero_trabajo: selectedTablero_trabajo,
                url_img_trabajo: url_img_trabajo,
                url_Archivo_trabajo: url_Archivo_trabajo,
                Nombre_trabajo: Nombre_trabajo,
                Fecha_trabajo: Fecha_trabajo,
            },
            success: function (response) {
                alert('Agregado con éxito');
                mostrarAvances();
                // Limpiar los campos después de agregar el botón
                // $('#url_img_actividad').val('');
                $('#url_Archivo_trabajo').val('');
                $('#Nombre_trabajo').val('');
                $('#Fecha_trabajo').val('');
            },
            error: function (error) {
                console.error('Error al agregar: ', error);
            }
        });
    } else {
        alert('Por favor, seleccione un tablero y asegúrese de que la URL esté guardada antes de subir el botón.');
    }
}


function mostrarTrabajos() {
    if (Link_Online2) {
        $.ajax({
            url: Link_Online2,
            method: 'GET',
            success: function (response) {
                var Metodos_T = $('#Metodos_T');
                var Antropologia_T = $('#Antropologia_T');
                var Ambiente_T = $('#Ambiente_T');
                var Comunicacion_T = $('#Comunicacion_T');
                var Precalculo_T = $('#Precalculo_T');
                var Quechua_T = $('#Quechua_T');
                var Sistemas_T = $('#Sistemas_T');
                Metodos_T.empty();
                Antropologia_T.empty();
                Ambiente_T.empty();
                Comunicacion_T.empty();
                Precalculo_T.empty();
                Quechua_T.empty();
                Sistemas_T.empty();

                response.forEach(function (Btns_t) {
                    const contenedor_t = document.createElement("div");
                    contenedor_t.className = "carta_ava";
    
                    const Img_avance_t = document.createElement("img");
                    Img_avance_t.src = Btns_t.url_img_trabajo;
    
                    const xa_t = document.createElement("a");
                    xa_t.className = "x";
                    xa_t.target = "_blank";
                    xa_t.href = Btns_t.url_Archivo_trabajo;
    
                    const xh1_t = document.createElement("h1");
                    xh1_t.textContent = Btns_t.Nombre_trabajo;
                    xh1_t.className = "textodecarta",
                    xa_t.append(xh1_t);
    
                    const textofecha_t = document.createElement("p");
                    textofecha_t.className = "fechap"
                    textofecha_t.textContent = Btns_t.Fecha_trabajo;

                    contenedor_t.append(Img_avance_t);
                    contenedor_t.append(xa_t);
                    contenedor_t.append(textofecha_t);

                    if (Btns_t.selectedTablero_trabajo === 'Metodos') {
                        Metodos_T.append(contenedor_t);
                    } else if (Btns_t.selectedTablero_trabajo === 'Antropologia') {
                        Antropologia_T.append(contenedor_t);
                    } else if (Btns_t.selectedTablero_trabajo === 'Ambiente') {
                        Ambiente_T.append(contenedor_t);
                    } else if (Btns_t.selectedTablero_trabajo === 'Comunicacion') {
                        Comunicacion_T.append(contenedor_t);
                    } else if (Btns_t.selectedTablero_trabajo === 'Precalculo') {
                        Precalculo_T.append(contenedor_t);
                    } else if (Btns_t.selectedTablero_trabajo === 'Quechua') {
                        Quechua_T.append(contenedor_t);
                    } else if (Btns_t.selectedTablero_trabajo === 'Sistemas') {
                        Sistemas_T.append(contenedor_t);
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
    mostrarAvances();
    mostrarTrabajos();
});
