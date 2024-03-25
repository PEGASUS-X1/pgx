var canbiador_Libros = document.getElementById("canbiador_Libros");
var canbiador_Lives = document.getElementById("canbiador_Lives");
var libros_barra = document.getElementById("libros_barra");
var lives = document.getElementById("lives");

// // Make sure the elements with IDs "canbiador_Libros" and "canbiador_Lives" exist
// if (canbiador_Libros && canbiador_Lives) {
//     canbiador_Libros.addEventListener("click", ccanbiador_Libros);
//     canbiador_Lives.addEventListener("click", ccanbiador_Lives);
// }

function ccanbiadorLibros() {
    canbiador_Libros.classList.add("active");
    canbiador_Lives.classList.remove("active");
    libros_barra.style.display = "block";
    lives.style.display = "none";
};

function ccanbiadorLives() {
    canbiador_Libros.classList.remove("active");
    canbiador_Lives.classList.add("active");
    lives.style.display = "block";
    libros_barra.style.display = "none";
}

function LibrosModalAbrir(){
    var Modallibros = document.getElementById("Modal-libros");
    Modallibros.style.display = "block";
    //document.body.classList.toggle('no-scroll');
}

var user3 = document.getElementById("user3");
user3.textContent = "Feliz Año Nuevo " + localStorage.getItem('nombre');

function visualisadorModalAbrir(){
    var visualisador_de_pdfs = document.getElementById("visualisador_de_pdfs");
    visualisador_de_pdfs.style.display = "block";
}
function visualisadorModalClose(){
    var visualisador_de_pdfs = document.getElementById("visualisador_de_pdfs");
    visualisador_de_pdfs.style.display = "none";
}

function ComentariosModalAbrir(){
    var comentarios_upload = document.getElementById("comentarios_upload");
    comentarios_upload.style.display = "block";
}

function ComentariosModalClose(){
var comentarios_upload = document.getElementById("comentarios_upload");
comentarios_upload.style.display = "none";
}

function LibrosModalClose(){
    var Modallibros = document.getElementById("Modal-libros");
    Modallibros.style.display = "none";
}
 // Función para verificar y aplicar el estado guardado en el almacenamiento local
        function applySavedState() {
            const isNightMode = localStorage.getItem('nightMode') === 'true';
            const switchButton = document.getElementById('switch');
            const audio = document.getElementById('nightModeAudio');
        
            if (isNightMode) {
                switchButton.classList.add('active');
                document.body.classList.add('skull');
                audio.play();
            } else {
                switchButton.classList.remove('active');
                document.body.classList.remove('skull');
                audio.pause();
            }
        }
        
        // JavaScript para alternar la clase "active" en el botón y guardar el estado
        document.getElementById('switch').addEventListener('click', function () {
            this.classList.toggle('active');
            document.body.classList.toggle('skull');
            const isNightMode = this.classList.contains('active');
            localStorage.setItem('nightMode', isNightMode.toString());
        
            // Reproducir o detener la canción según el estado del modo nocturno
            const audio = document.getElementById('nightModeAudio');
            if (isNightMode) {
                audio.play();
            } else {
                audio.pause();
            }
        });
        
        // Aplicar el estado guardado al cargar la página
        applySavedState();

        // var Exitt = document.getElementById('Exitt');
        
        // Asignar el evento onclick
        function Exitt() {
            localStorage.clear();
            location.reload();
        }


