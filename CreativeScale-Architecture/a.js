            // Definir un objeto que mapea nombres de usuario a contraseñas
      var usuariosContrasenas = {
          "Joseph Anthony Laucata Zuñiga": "admin",
          "Usuario2": "Contraseña2",
          "Usuario3": "Contraseña3"
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
                var saludo = "¡Holii, " + username + " Bienvenido!";
                textoGenerado.textContent = saludo; // Actualizar el texto generado con el saludo

              // Mostrar mensaje de bienvenida si el control de seguridad ya se realizó hoy
              //alert("¡Hola, " + username + "! Bienvenido.");
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
              var fechaHora = obtenerFechaHora();
              var url = "https://script.google.com/macros/s/AKfycbx4wyov3Eo9Y244XgwOuonBwWRcHCHOkEZCbqPdpoNi_F2Y9aNvroX71IeJ5Jtv0lGI/exec";
              var data = {
                  nombre: nombre
              };

              $.post(url, JSON.stringify(data), function (response) {
                  alert(response);
              });

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
                      alert("😋 ¡Hola! Es hora de acceder. 😋\n🤭 Si no tienes tus claves, accede a este\n🔗 link: 'pegasus-v2.tk/resgistro' 🔗 para obtener tu acceso. 😏\n\n☠️ ¡No te equivoques! ☠️");
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

                  if (usuariosContrasenas[username] === codigo) {
                      showLoader();
                      setTimeout(function () {
                          hideLoader();
                                            var saludo = "¡Holii, " + username + " Bienvenido!";
                            textoGenerado.textContent = saludo;

                          alert(" ✅ Acceso concedido ✅ ");
                          guardarDatos(username);

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
