var usuariosContrasenas = {
    "joseph": {
        nombre_completo: "Joseph Anthony Laucata Zuñiga",
        password: "ANTOnis./",
        modelo: "Editor",
        imagen: "https://i.pinimg.com/564x/2f/7f/93/2f7f939e6d8c2179c273103d29671d0b.jpg",
        img_portada: "https://th.bing.com/th/id/OIG2.KnDodfmsY79MCEzwha_I?w=1024&h=1024&rs=1&pid=ImgDetMain",
        mensajes: [
        ]
    },
    "eder": {
        nombre_completo: "Eder Arturo Aco Corrales",
        password: "eder",
        modelo: "Premiun",
        imagen: "https://scontent.flim14-1.fna.fbcdn.net/v/t1.6435-1/106132220_3089476767805951_3796786986856248814_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qkjLVhWyiqkAX89F1A2&_nc_ht=scontent.flim14-1.fna&oh=00_AfApjukG4zYhouJUHg-tArqHuxpzP7nxKs_YvbPb-UzMFw&oe=66126307",
        img_portada: "https://scontent.flim14-1.fna.fbcdn.net/v/t1.6435-9/52942912_2127010310719273_3731949344656457728_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XaHGrTlozWEAX8DNrvj&_nc_ht=scontent.flim14-1.fna&oh=00_AfCPwn0xjc2u4eg2zuUTfX_f8rPU0yAAyY_-UayhXpI2kg&oe=66128388",
        mensajes: [
            {
                MensajeClass: "mensaje-card",
                NombreDelMensaje: "",
                ImgDelMensaje: "",
                VideoDelMensaje: "",
                ContenidoDelMensaje: "",
                UrlDelMensaje: "",
                conternedor: null
            },
            {
                MensajeClass: "mensaje-baner",
                NombreDelMensaje: "",
                ImgDelMensaje: "",
                BanerDelMensaje: "",
                VideoDelMensaje: "",
                ContenidoDelMensaje: null,
                UrlDelMensaje: "",
                conternedor: [
                    `
            `]
            }
        ]
    },
    "antonia": {
        nombre_completo: "Antonia Ttito Ttica",
        password: "antonia",
        modelo: "Premiun",
        imagen: "https://scontent.fcuz2-1.fna.fbcdn.net/v/t39.30808-6/317394425_1309215203000563_1321609245364205910_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_aid=0&_nc_ohc=z2PK9raVsvYAX_sdZ2F&_nc_oc=AQlWCUYtsfW9elAXDguLSMtu6-p3k55_cuN_ubBVH0k6sHRIo5wLuCj8HI97ULOGj3k&_nc_ht=scontent.fcuz2-1.fna&oh=00_AfCFydU6m5j8LoupkCstZxWQyZY-xwlNcW1tuUkWGKi7mQ&oe=65F0C313",
        img_portada: "https://scontent.fcuz2-1.fna.fbcdn.net/v/t1.18169-9/18700111_108667873055308_5001874756332183414_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VtqfMPfT1LQAX_lsvt0&_nc_ht=scontent.fcuz2-1.fna&oh=00_AfAbf4PK1WygWDaDS6K1bU0Z8wqvyyPK9lgc21qS4ZpuJg&oe=66131358",
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

        var TipoModelos = localStorage.getItem('TipoModelo');

        if (TipoModelos) {
            var TipoModelo = document.getElementById("Modelo-user");
            TipoModelo.textContent = TipoModelos;

            // Eliminar los elementos con la clase "edit" solo si no es "Editor"
            if (TipoModelos !== "Editor") {
                var passwordElements = document.getElementsByClassName("edit");
                while (passwordElements.length > 0) {
                    passwordElements[0].parentNode.removeChild(passwordElements[0]);
                }
            }

            if (TipoModelos === "Premiun") {
                TipoModelo.textContent = "💎 " + TipoModelos + " 💎";
                TipoModelo.style.background = "#00ffc8";
            } else if (TipoModelos === "Editor") {
                TipoModelo.textContent = "✒️ " + TipoModelos + " ✒️";
                TipoModelo.style.background = "red";
                var Modelo_user = document.getElementById("Modelo-user");

                Modelo_user.onclick = function () {
                    TipoModelo.textContent = "✒️ Editando ✒️";
                    var passwordElements = document.getElementsByClassName("edit");
                    for (var i = 0; i < passwordElements.length; i++) {
                        passwordElements[i].style.display = "block";
                    } 

                    var Modal_Pgxs = document.getElementsByClassName("Modal_Pgx");
                    for (var i = 0; i < Modal_Pgxs.length; i++) {
                        Modal_Pgxs[i].style.display = "none";
                    } 
                }
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

        var nombre_completos = localStorage.getItem("nombre_completo");
        if (nombre_completos) {
            var nombre_completo = document.getElementById("nombre_completo");
            nombre_completo.textContent = nombre_completos;

        }

        var img_portadas = localStorage.getItem("img_portada");
        if (img_portadas) {
            var img_portada = document.getElementById("img_portada");
            img_portada.style.background = "url(" + img_portadas + ") center center";
            img_portada.style.backgroundSize = "cover"
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

                    var nombre_completos = usuariosContrasenas[username].nombre_completo;
                    var nombre_completo = document.getElementById("nombre_completo");
                    nombre_completo.textContent = nombre_completos;

                    localStorage.setItem('nombre_completo', nombre_completos);

                    var img_portadas = usuariosContrasenas[username].img_portada;
                    var img_portada = document.getElementById("img_portada");
                    img_portada.style.background = "url(" + img_portadas + ") center center";
                    img_portada.style.backgroundSize = "cover"

                    localStorage.setItem('img_portada', img_portadas);


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


                    if (username === 'joseph') {
                        // Mostrar una alerta específica para el usuario 'admin'
                        alert("!Bienvenido 😎 Pegasus X 😎");
                    } else {
                        alert("!Bienvenido 😎 " + nombre_completos + " 😎 es un gusto saludar soy Pegasus X!")
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
