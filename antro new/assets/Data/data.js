var usuariosContrasenas = {
    "admin": {
        password: "admin",
        modelo: "Premiun",
        imagen: "https://i.pinimg.com/564x/69/8b/3b/698b3b755ed139278036e55264a8e0da.jpg",
        mensajes: [
            {
                MensajeClass: "mensaje-card",
                NombreDelMensaje: "aaaaa",
                ImgDelMensaje: "https://i.pinimg.com/564x/69/8b/3b/698b3b755ed139278036e55264a8e0da.jpg",
                VideoDelMensaje: "",
                ContenidoDelMensaje: "",
                UrlDelMensaje: "",
                conternedor: null
            },
            {
                MensajeClass: "mensaje-baner",
                NombreDelMensaje: "",
                ImgDelMensaje: "",
                BanerDelMensaje: "https://media.discordapp.net/attachments/1183035326701240370/1183047771280900208/F24EC46344BA7EE66BADB727BAAF0F99DBA079B0BC7B80D445B9CCD49F2BBA61.jpg",
                VideoDelMensaje: "",
                ContenidoDelMensaje: null,
                UrlDelMensaje: "",
                conternedor: [
                    `
            <span class="descuento">30%</span>
                <div class="baner-tex" style="--clr:#ffd900">
                    <div class="infos" >
                        <span class="alertas" style="--clr:#ffd900"><i class="fa fa-triangle-exclamation"></i> La seguridad esta mal <i class="fa fa-triangle-exclamation"></i></span>
                    </div>
                    <h1>Demon Slayer</h1>
                    <p class="sinopsis">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus odio alias minus minima delectus neque tenetur consectetur iusto, saepe fugiat laudantium quis deserunt, eveniet unde maxime excepturi facere nobis ipsum?</p>
                </div>
            `
                ]
            }
        ]
    },
    "juan": {
        password: "juan",
        modelo: "Premiun",
        imagen: "https://i.pinimg.com/564x/69/8b/3b/698b3b755ed139278036e55264a8e0da.jpg",
        mensajes: [
            {
                NombreDelMensaje: "",
                ImgDelMensaje: "",
                VideoDelMensaje: "",
                UrlDelMensaje: ""
            },
            {
                NombreDelMensaje: "",
                ImgDelMensaje: "",
                VideoDelMensaje: "",
                UrlDelMensaje: ""
            }
        ]
    }
};
$(document).ready(function () {
    var lastSecurityCheckDate = localStorage.getItem('lastSecurityCheckDate');
    var today = new Date().toLocaleDateString();

    if (lastSecurityCheckDate === today) {
        showWelcomeMessage();
    } else {
        performSecurityCheck();
    }
});

function showWelcomeMessage() {
    var username = localStorage.getItem('username');

    if (username) {

        var mensajeGeneral = `
            <span class="descuento">30%</span>
                <div class="baner-tex" style="--clr:#ffd900">
                    <div class="infos" >
                        <span class="alertas" style="--clr:#ffd900"><i class="fa fa-triangle-exclamation"></i> La seguridad esta mal <i class="fa fa-triangle-exclamation"></i></span>
                    </div>
                    <h1>Demon Slayer</h1>
                    <p class="sinopsis">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus odio alias minus minima delectus neque tenetur consectetur iusto, saepe fugiat laudantium quis deserunt, eveniet unde maxime excepturi facere nobis ipsum?</p>
                </div>
            `;
        var mensajeDiv = document.createElement("div");
        mensajeDiv.className = "mensaje-baner";
        mensajeDiv.innerHTML = mensajeGeneral;
        document.getElementById("mensajes-container").appendChild(mensajeDiv);

        $(".user").text(username);
        var saludo = "Hola, " + username + " Bienvenid@!";
        document.getElementById("texto-generado").textContent = saludo;

        var TipoModelos = localStorage.getItem('TipoModelo');

        if (TipoModelos) {
            var TipoModelo = document.getElementById("Modelo-user");
            TipoModelo.textContent = TipoModelos;

            if (TipoModelos === "Premiun") {
                var passwordElement = document.getElementById("password");
                passwordElement.style.display = "none";
                var TipoModelo = document.getElementById("Modelo-user");
                TipoModelo.textContent = "💎 " + TipoModelos + " 💎";
                TipoModelo.style.background = "#00ffc8";
            }
        }

        var mensajes = localStorage.getItem('mensajes');
        if (mensajes) {
            mensajes = JSON.parse(mensajes);
            var mensajesDiv = document.getElementById("mensajes-container");

            mensajes.forEach(function (mensaje) {
                var mensajeDiv = document.createElement("div");
                mensajeDiv.className = mensaje.MensajeClass;
                mensajeDiv.style.background = "url(" + mensaje.BanerDelMensaje + ") center";
                mensajeDiv.style.backgroundSize = "cover";
                mensajeDiv.style.backgroundRepeat = "";
                //mensajeDiv.innerHTML = "<h3>" + mensaje.NombreDelMensaje + "</h3>";

                const NombreMensaje = document.createElement('h1');
                NombreMensaje.textContent = mensaje.NombreDelMensaje;
                NombreMensaje.className = 'mensaje-Nombre';

                const imgMensaje = document.createElement('img');
                imgMensaje.src = mensaje.ImgDelMensaje;
                imgMensaje.className = 'mensaje-img';

                const ContenidoMensaje = document.createElement('p');
                ContenidoMensaje.textContent = mensaje.ContenidoDelMensaje;
                ContenidoMensaje.className = 'mensaje-Contenido';

                const Mensajebaner = document.createElement('div');
                Mensajebaner.innerHTML = mensaje.conternedor;

                mensajeDiv.appendChild(NombreMensaje);
                mensajeDiv.appendChild(imgMensaje);
                mensajeDiv.appendChild(ContenidoMensaje);
                mensajeDiv.appendChild(Mensajebaner);
                mensajesDiv.appendChild(mensajeDiv);
            });
        }

        var imagenUsuarioURL = localStorage.getItem('imagenUsuario');

        if (imagenUsuarioURL) {
            var imagenUsuario = document.getElementById("img-user");
            imagenUsuario.src = imagenUsuarioURL;
            imagenUsuario.alt = "Imagen de Usuario";
        }
    } else {
        performSecurityCheck();
    }
    hideLoader();
}

function performSecurityCheck() {
    var maxAttempts = 3;
    var attempts = 0;
    var isAvisoMostrado = false;
    var controluno = false;
    var controldos = false;

    function showLoader() {
        $("#overlay").fadeIn();
    }

    function hideLoader() {
        $("#overlay").fadeOut();
    }

    function guardarDatos(nombre) {
        //var fechaHora = obtenerFechaHora();
        //var url = "https://script.google.com/macros/s/AKfycby1aVTFUQOvTLePapUGtgR-nZ49jo_Z3NDJBQpbIFM_o0ucMMBzOlVXwcqHjqD--N27/exec";
        //var data = {
        //    nombre: nombre
        //};

        //$.post(url, JSON.stringify(data), function (response) {
        //    alert(response);
        //});

        var lastReloadDate = localStorage.getItem('lastReloadDate');
        var today = new Date().toLocaleDateString();

        if (lastReloadDate !== today) {
            setTimeout(function () {
                localStorage.setItem('lastReloadDate', today);
                window.location.reload();
            }, 5000);
        }
    }

    function obtenerFechaHora() {
        var now = new Date();
        var fecha = now.toLocaleDateString();
        var hora = now.toLocaleTimeString();
        return fecha + " " + hora;
    }

    function checkNombre() {
        if (attempts < maxAttempts) {
            if (!isAvisoMostrado) {
                alert("😋 ¡Hola! Es hora de acceder. 😋\n🤭 Si no tienes tus claves, accede a este\n🔗 link: 'pegasus-v2.tk/registro' 🔗 para obtener tu acceso. 😏\n\n☠️ ¡No te equivoques! ☠️");
                isAvisoMostrado = true;
            }

            if (!controluno) {
                alert("Control De Seguridad 1");
                controluno = true;
            }

            var username = prompt("Ingrese el nombre de seguridad");

            if (usuariosContrasenas.hasOwnProperty(username)) {
                checkCodigo(username);
            } else {
                attempts++;
                alert("Nombre de seguridad incorrecto. Intento " + attempts + " de " + maxAttempts);
                checkNombre();
            }
        } else {
            showLoader();
            setTimeout(hideLoader, 5000);
            window.location.href = "404.html";
        }
    }

    function checkCodigo(username) {
        if (attempts < maxAttempts) {
            if (!controldos) {
                alert("Control De Seguridad 2");
                controldos = true;
            }

            var codigo = prompt("Ingrese la contraseña");

            if (usuariosContrasenas[username].password === codigo) {
                showLoader();
                setTimeout(function () {
                    hideLoader();
                    var saludo = "Hola," + username + " Bienvenid@!";
                    textoGenerado.textContent = saludo;

                    var TipoModelos = usuariosContrasenas[username].modelo;
                    var TipoModelo = document.getElementById("Modelo-user");
                    TipoModelo.textContent = TipoModelos;
                    localStorage.setItem('TipoModelo', TipoModelos);

                    // Agregar imagen de usuario aquí
                    var imagenUsuarioURL = usuariosContrasenas[username].imagen;
                    var imagenUsuario = document.getElementById("img-user");
                    imagenUsuario.src = imagenUsuarioURL;
                    imagenUsuario.alt = "Imagen de Usuario";
                    // document.getElementById("texto-generado").appendChild(imagenUsuario);

                    // Almacenar la URL de la imagen en el almacenamiento local
                    localStorage.setItem('imagenUsuario', imagenUsuarioURL);


                    var mensajes = usuariosContrasenas[username].mensajes;

                    if (mensajes) {
                        var mensajesDiv = document.getElementById("mensajes-container");
                        localStorage.setItem('mensajes', JSON.stringify(mensajes));

                        mensajes.forEach(function (mensaje) {
                            var mensajeDiv = document.createElement("div");
                            mensajeDiv.className = mensaje.MensajeClass;
                            mensajeDiv.style.background = "url(" + mensaje.BanerDelMensaje + ") center";
                            mensajeDiv.style.backgroundSize = "cover";
                            mensajeDiv.style.backgroundRepeat = "";
                            //mensajeDiv.innerHTML = "<h3>" + mensaje.NombreDelMensaje + "</h3>";

                            const NombreMensaje = document.createElement('h1');
                            NombreMensaje.textContent = mensaje.NombreDelMensaje;
                            NombreMensaje.className = 'mensaje-Nombre';

                            const imgMensaje = document.createElement('img');
                            imgMensaje.src = mensaje.ImgDelMensaje;
                            imgMensaje.className = 'mensaje-img';

                            const ContenidoMensaje = document.createElement('p');
                            ContenidoMensaje.textContent = mensaje.ContenidoDelMensaje;
                            ContenidoMensaje.className = 'mensaje-Contenido';

                            const Mensajebaner = document.createElement('div');
                            Mensajebaner.innerHTML = mensaje.conternedor;

                            mensajeDiv.appendChild(NombreMensaje);
                            mensajeDiv.appendChild(imgMensaje);
                            mensajeDiv.appendChild(ContenidoMensaje);
                            mensajeDiv.appendChild(Mensajebaner);
                            mensajesDiv.appendChild(mensajeDiv);
                        });
                    }


                    if (username === 'admin') {
                        // Mostrar una alerta específica para el usuario 'admin'
                        alert("¡Acceso de administrador!");
                    } else {
                        alert(" ✅ Acceso concedido ✅ ");
                    }
                    //if (usuariosContrasenas[username].mensaje) {
                    //    alert(usuariosContrasenas[username].mensaje);
                    //}

                    guardarDatos(username, imagenUsuarioURL, TipoModelos);

                    var today = new Date().toLocaleDateString();
                    localStorage.setItem('lastSecurityCheckDate', today);

                    localStorage.setItem('username', username);
                }, 5000);
            } else {
                attempts++;
                alert("Contraseña incorrecta. Intento " + attempts + " de " + maxAttempts);
                checkCodigo(username);
            }
        } else {
            showLoader();
            setTimeout(hideLoader, 5000);
            window.location.href = "404.html";
        }
    }
    showLoader();
    checkNombre();
}

function showLoader() {
    var lastSecurityCheckDate = localStorage.getItem('lastSecurityCheckDate');
    var today = new Date().toLocaleDateString();

    if (lastSecurityCheckDate !== today) {
        $("#overlay").fadeIn();
    }
}

function hideLoader() {
    $("#overlay").fadeOut();
}