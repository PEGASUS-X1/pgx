
function mostrarLibros() {
    var grupoSeleccionado = $('#selectGrupo').val();
    var temaSeleccionado = $('#selectTema').val();
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbxCk7mT8dim7gasnxsxyeUu7KV8tUxVCFLbQYSBZD4nvVz45A-uj-PqsR_i3Wzq55BCzA/exec',
        method: 'GET',
        success: function(responseLibro) {
            var CajadeLibros = $('#CajadeLibros');
            CajadeLibros.empty();

            responseLibro.forEach(function(Comentario) {
                if ((grupoSeleccionado === 'todos' || Comentario.Grupo_Libros === grupoSeleccionado) &&
                    (temaSeleccionado === 'todos' || Comentario.Tema_Libros === temaSeleccionado)) {

                const LibroDiref = document.createElement('div');
                // LibroDiref.href = Comentario.pdf;
                LibroDiref.className = 'Libro_user buscado';

                const arriba = document.createElement('div');
                arriba.className = 'Libro_Img';

                const ImgLibro = document.createElement('img');
                ImgLibro.src = Comentario.Img_Libro;

                const NombreDelLibro = document.createElement('h1');
                NombreDelLibro.textContent = Comentario.Nombre_Libro;
                NombreDelLibro.className = 'NombreDelLibro';

                arriba.append(ImgLibro);
                arriba.append(NombreDelLibro);

                const abajo = document.createElement('div');
                abajo.className = 'Libro_Informacion';

                const NombreAutor = document.createElement('p');
                NombreAutor.textContent = "Autor: " + Comentario.Nombre_Autor;


                const NombreDelAportador = document.createElement('p');
                NombreDelAportador.className = 'Libro_NombreDelAportador';
                NombreDelAportador.textContent = "Aportado por: "+ Comentario.Nombre_Del_Aportador;
                
                const Grupo = document.createElement('p');
                Grupo.textContent = "Grupo: " + Comentario.Grupo_Libros;

                const Tema_Libro = document.createElement('p');
                Tema_Libro.textContent = "Tema: " + Comentario.Tema_Libros;
                
                abajo.append(NombreAutor);
                abajo.append(NombreDelAportador);
                abajo.append(Grupo);
                abajo.append(Tema_Libro);

                LibroDiref.append(arriba);
                LibroDiref.append(abajo);
                CajadeLibros.append(LibroDiref);
                LibroDiref.addEventListener('click', function () {
                    // Assuming visualisador_de_pdfs is an ID
                    $('#visualisador_de_pdfs').css('display', 'block');
                    var visualisador = document.getElementById("visualisador");
                    visualisador.data = Comentario.pdf;
                });
            }
            });
        },
        error: function(error) {
            console.error('Error', error);
        }
    });
}

$(document).ready(function() {
    $('#selectGrupo, #selectTema').on('change', function() {
        var espera = document.getElementById("espera");
        espera.textContent = "Espera Un Rato....";
        setTimeout(function() {
            espera.textContent = "";
        }, 2500);
        mostrarLibros();
    });

    mostrarLibros();
});

document.addEventListener("keyup", e=>{

    if (e.target.matches("#search-box")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".buscado").forEach(BUSCAR =>{
  
            BUSCAR.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?BUSCAR.classList.remove("filtro-shar")
            :BUSCAR.classList.add("filtro-shar")
        })
    }
})
