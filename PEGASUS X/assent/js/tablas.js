var tablas = document.getElementById("tablas");
var tableros = document.getElementById("tableros");


function applySavedState_Estaciones() {
    const isEstacionesMode = localStorage.getItem('EstacionesMode') === 'true';
    const Switch_Estacione_Button = document.getElementById('switch_Estaciones');
    const tableros = document.getElementById("tableros");


    if (isEstacionesMode) {
        Switch_Estacione_Button.classList.add('Estacio');
        tableros.classList.add('dia');
    } else {
        Switch_Estacione_Button.classList.remove('Estacio');
        tableros.classList.remove('dia');
    }
}

document.getElementById('switch_Estaciones').addEventListener('click', function () {
    this.classList.toggle('Estacio');
    document.body.classList.toggle('dia');
    const isEstacionesMode = this.classList.contains('Estacio');

    localStorage.setItem('EstacionesMode', isEstacionesMode.toString());
    location.reload();
});

function applySavedState_Tableros() {
    const isSaveMode = localStorage.getItem('SaveMode') === 'true';
    const switch_Save_Button = document.getElementById('switch_Tableros');
    const tableross = document.getElementById("tableros");


    if (isSaveMode) {
        switch_Save_Button.classList.add('Save');
        tableross.style.display = "block";

    } else {
        switch_Save_Button.classList.remove('Save');
        tableross.style.display = "none";
    }
}

// JavaScript para alternar la clase "active" en el botón y guardar el estado
document.getElementById('switch_Tableros').addEventListener('click', function () {
    this.classList.toggle('Save');
    // document.body.classList.toggle('skull');
    const isSaveMode = this.classList.contains('Save');

    localStorage.setItem('SaveMode', isSaveMode.toString());

    location.reload();
});

applySavedState_Estaciones();

applySavedState_Tableros();

function abrirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}
function colsemodal() {

    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

const close_modal = document.getElementById("close_modal");
const boton1 = document.getElementById('agregar_links1');
const boton2 = document.getElementById('agregar_links2');
const boton3 = document.getElementById('agregar_links3');

close_modal.addEventListener('click', colsemodal);
boton1.addEventListener('click', abrirModal);
boton2.addEventListener('click', abrirModal);
boton3.addEventListener('click', abrirModal);


function mostrarFavicon() {
    var urlInput = document.getElementById('Url').value;
    var faviconInput = document.getElementById('faviconInput');

    // Extraer el dominio de la URL
    var dominio = obtenerDominio(urlInput);

    // Construir la URL del favicon
    var faviconUrl = 'https://www.google.com/s2/favicons?domain=' + dominio;

    // Establecer el valor del campo de entrada del favicon
    faviconInput.value = faviconUrl;
}

function obtenerDominio(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}


function dalte1() {
    localStorage.removeItem("botones_tablero1");
    location.reload();
}

function dalte2() {
    localStorage.removeItem("botones_tablero2");
    location.reload();
}

function dalte3() {
    localStorage.removeItem("botones_tablero3");
    location.reload();
}

