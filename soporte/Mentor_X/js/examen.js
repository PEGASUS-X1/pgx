document.addEventListener('DOMContentLoaded', function () {
    var Examenes = document.getElementById("Examenes");

    Examenes.addEventListener('change', function() {
        var Tipo_De_Examen = Examenes.value;

        if (document.getElementById("dynamicScript")) {
            document.getElementById("dynamicScript").remove();
        }

        var newScript = document.createElement('script');
        newScript.id = "dynamicScript";

        if (Tipo_De_Examen === 'Andina' ){
            newScript.src = "a.js";
        } else if (Tipo_De_Examen === 'Unssac' ){
            newScript.src = "./js/DataExamenes.js";
        }

        document.body.appendChild(newScript);
    });

});


var menu = document.getElementById("menu");
var menu_barra = document.getElementById("menu_barra");
var close = document.getElementById("close");
close.onclick = function(){
    menu.style.display = "block";
    menu_barra.classList.remove("abierto")
}
menu.onclick = function(){
    menu_barra.classList.add("abierto")
    menu.style.display = "none";
}

const texto = document.getElementById("texto");
const textos = [
    `El mundo está lleno de cosas que no son como queremos, donde haya luz, tiene que haber oscuridad mientras exista, la idea del ganador siempre existirá, el perdedor es la idea egoísta de defender la paz, aquella que provoca las guerras, el odio nace de proteger lo que amamos.
    `
];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function escribirTexto() {
    const textoActual = textos[index];
    if (isDeleting) {
        texto.innerHTML = textoActual.substring(0, charIndex - 1)
            .split('')
            .map(char => `<span>${char}</span>`)
            .join('');
    } else {
        texto.innerHTML = textoActual.substring(0, charIndex + 1)
            .split('')
            .map(char => `<span>${char}</span>`)
            .join('');
    }

    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

    if ((!isDeleting && charIndex === textoActual.length) || (isDeleting && charIndex === 0)) {
        // Permanecer en el estado actual sin cambiar index ni reiniciar el temporizador
        setTimeout(escribirTexto, 2500);
    } else {
        setTimeout(escribirTexto, isDeleting ? 50 : 80);
    }
}

var lading = document.getElementById("lading");
var no_puedo = document.getElementById("no_puedo");
var audio = document.getElementById("audio");
var comensar2 = document.getElementById("comensar2");
var quiz_container = document.getElementById("quiz-container");
function nopuedo(){
    escribirTexto();
    lading.style.display = "none";
    no_puedo.style.display = "block";
    audio.play()
    comensar2.style.display = "none";
    setTimeout(() => {
        comensar2.style.display = "block";
    }, 24100);
}

function comensar() {
    quiz_container.style.display = "block";
    lading.style.display = "none";
    no_puedo.style.display = "none";
    barra.style.position = "relative";
    barra.style.background = "#000";
    initializeQuiz();
}
    // Obtener referencias a los botones por su ID
const boton1 = document.getElementById('comensar1');
const boton2 = document.getElementById('comensar2');
var barra = document.getElementById("barra");

boton1.addEventListener('click', comensar);
boton2.addEventListener('click', comensar);


