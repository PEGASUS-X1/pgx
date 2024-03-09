var ImgDelComentario = document.getElementById('ImgDelComentario')
ImgDelComentario.src = "https://i.pinimg.com/564x/73/74/85/737485415532167f9fab09d621df9b9b.jpg";

var NombreDelComentario = document.getElementById('NombreDelComentario')
NombreDelComentario.value = localStorage.getItem('nombre');


function Comentar() {
    var NombreDelComentario = localStorage.getItem("nombre");
    var ImgDelComentario = "https://i.pinimg.com/564x/73/74/85/737485415532167f9fab09d621df9b9b.jpg";
    var coment = $('#coment').val();
    var multimedia = $('#Multimedia').val();
    var urlcomente = $('#urlcomente').val();

    if (ImgDelComentario.trim() !== '') {
        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbwz7SBycG361eHdQH4-UXEFwlApof34icSTfZw_QNWnWDXkyR0IV9-PRLcqVC_SFxkGXg/exec',
            method: 'POST',
            data: {
                ImgDelComentario: ImgDelComentario,
                NombreDelComentario: NombreDelComentario,
                coment: coment,
                Multimedia: multimedia,
                urlcomente: urlcomente
            },
            success: function(response) {
                alert('Agregado con éxito');
                mostrarComentarios();
            },
            error: function(error) {
                console.error('Error al agregar: ', error);
            }
        });

        // Limpiar los campos después de agregar el comentario
        $('#coment').val('');
        $('#Multimedia').val('');
        $('#urlcomente').val('');
    }
}

function mostrarComentarios() {
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbwz7SBycG361eHdQH4-UXEFwlApof34icSTfZw_QNWnWDXkyR0IV9-PRLcqVC_SFxkGXg/exec',
        method: 'GET',
        success: function(response) {
            var Cajadecomentarios = $('#Cajadecomentarios');
            Cajadecomentarios.empty();

            response.forEach(function(Comentario) {
                const comentariosuser = document.createElement('div');
                comentariosuser.className = 'comentarios-user';

                const superr = document.createElement('div');
                superr.className = 'comentarios-super';

                if (Comentario.ImgDelComentario) {
                    const imagen = document.createElement('img');
                    imagen.src = Comentario.ImgDelComentario;
                    imagen.className = 'comentarios-imagen-user';
                    superr.append(imagen);
                }

                const NombreDelComentario = document.createElement('p');
                NombreDelComentario.textContent = Comentario.NombreDelComentario + " dice:";
                NombreDelComentario.className = 'comentarios-NombreDelComentario-user';
                superr.append(NombreDelComentario);

                comentariosuser.append(superr);

                const bajo = document.createElement('div');
                bajo.className = 'comentarios-bajo';

                const ComentarioElement = document.createElement('p');
                ComentarioElement.textContent = Comentario.coment;
                ComentarioElement.className = 'comentarios-ComentarioElement-user';
                bajo.append(ComentarioElement);

                if (Comentario.Multimedia) {
                    const Im = document.createElement('img');
                    Im.src = Comentario.Multimedia;
                    Im.className = 'comentarios-Im-user';
                    bajo.append(Im);
                }

                if (Comentario.urlcomente) {
                    const iframecoment = document.createElement('iframe');
                    iframecoment.src = Comentario.urlcomente;
                    iframecoment.className = 'comentarios-iframe-user';
                    bajo.append(iframecoment);
                }

                comentariosuser.append(bajo);
                Cajadecomentarios.append(comentariosuser);
            });
        },
        error: function(error) {
            console.error('Error', error);
        }
    });
}

$(document).ready(function() {
    mostrarComentarios();
});
