document.querySelectorAll("#dalte").forEach(function(element) {
    element.style.display = "none";
});


$(document).ready(function () {
    // Obtener el botón y el campo de entrada
    var guardarBtn = $("#guardar_Link_Online");
    var linkInput = $("#Link_Online");

    // Manejar el clic en el botón
    guardarBtn.click(function () {
        // Obtener el valor del campo de entrada
        var linkValue = linkInput.val();

        // Verificar si el valor no está vacío
        if (linkValue.trim() !== '') {
            // Guardar el valor en el localStorage
            localStorage.setItem('Link_Online', linkValue);
            alert('Link guardado con éxito en el localStorage.');
        } else {
            alert('Por favor, ingrese un enlace antes de guardar.');
        }
    });

    // Si hay un valor guardado previamente en el localStorage, establecerlo en el campo de entrada
    var storedLink = localStorage.getItem('Link_Online');
    if (storedLink) {
        linkInput.val(storedLink);
    }

    // Llamar a la función mostrarBtns después de cargar la página
    mostrarBtns();
});

function SubirBtn() {
    var selectedTablero = $("#selec_tableros").val();
    var nombreBtn = $("#Nombre").val();
    var urlBtn = $("#Url").val();
    var colorBtn = $("#color").val();
    var colorBtnBac = $("#colorBtnBac").val();
    var Faviconsrc = $("#faviconInput").val();
    
    // Recuperar el valor de Link_Online del localStorage
    var Link_Online = localStorage.getItem('Link_Online');

    if (selectedTablero.trim() !== '' && Link_Online) {
        $.ajax({
            url: Link_Online,
            method: 'POST',
            data: {
                selectedTablero: selectedTablero,
                nombreBtn: nombreBtn,
                urlBtn: urlBtn,
                colorBtn: colorBtn,
                colorBtnBac: colorBtnBac,
                Faviconsrc: Faviconsrc,
            },
            success: function (response) {
                alert('Agregado con éxito');
                mostrarBtns();
            },
            error: function (error) {
                console.error('Error al agregar: ', error);
            }
        });

        // Limpiar los campos después de agregar el botón
        $('#selec_tableros').val('');
        $('#Nombre').val('');
        $('#Url').val('');
        $('#color').val('');
        $('#colorBtnBac').val('');
        $('#faviconInput').val('');
    } else {
        alert('Por favor, seleccione un tablero y asegúrese de que la URL esté guardada antes de subir el botón.');
    }
    $("#modal").hide();
}

function mostrarBtns() {
    var Link_Online = localStorage.getItem('Link_Online');

    if (Link_Online) { // Verificar si hay una URL guardada en el localStorage
        $.ajax({
            url:  Link_Online,
            method: 'GET',
            success: function (response) {
                var Tab1 = $('#tab1 #btns_links');
                var Tab2 = $('#tab2 #btns_links');
                var Tab3 = $('#tab3 #btns_links');
                Tab1.empty();
                Tab2.empty();
                Tab3.empty();

                response.forEach(function (Btns) {
                    const contenedor = document.createElement("div");
                    contenedor.className = "conternedora";

                    const ImgIcon = document.createElement("img");
                    ImgIcon.src = Btns.Faviconsrc;

                    const nuevoBtn = document.createElement("a");
                    nuevoBtn.href = Btns.urlBtn;
                    nuevoBtn.target = "_blank";
                    nuevoBtn.className = "links";
                    nuevoBtn.style.backgroundColor = Btns.colorBtnBac;
                    nuevoBtn.style.color = Btns.colorBtn;
                    nuevoBtn.textContent = Btns.nombreBtn;

                    contenedor.append(ImgIcon);
                    contenedor.append(nuevoBtn);

                    if (Btns.selectedTablero === 'tab1') {
                        Tab1.append(contenedor);
                    } else if (Btns.selectedTablero === 'tab2') {
                        Tab2.append(contenedor);
                    } else if (Btns.selectedTablero === 'tab3') {
                        Tab3.append(contenedor);
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
