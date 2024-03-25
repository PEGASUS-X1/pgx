
var textoGenerado = document.getElementById("texto-generado");
// selector input
function mostrarInput() {
    var selectordesocultador = document.getElementById("Tipo-De-Casos");
    var inputContainer1 = document.getElementById("input-container1");
    var inputContainer2 = document.getElementById("input-container2");
      
    if (selectordesocultador.value === "publico") {
        inputContainer1.style.display = "block";
    } else {
        inputContainer1.style.display = "none";
    }
    if (selectordesocultador.value === "privado"){
        inputContainer2.style.display = "block";
    } else {
        inputContainer2.style.display = "none";
    } 
}
// <select name="Tipo-De-Proyecto" id="Tipo-De-Casos" onchange="mostrarInput()">
// <option value="null" disabled selected>Tipo De Proyecto</option>
// <option value="publico">Público</option>
// <option value="privado">Privado</option>
// </select>

// <div id="input-container1" style="display: none;">
// <label for="otroInput">Ingrese otro valor:</label>
// <input type="text" id="otroInput" name="otroInput">
// </div>
// <div id="input-container2" style="display: none;">
// <label for="otroInput">Ingrese:</label>
// <input type="text" id="otroInput" name="otroInput">
// </div>

// verificador
function verificarLogo() {
    var logo = document.getElementById("password");

    if (!logo) {
        // Si el logo no existe, mostrar un mensaje de error y deshabilitar el sitio.
        alert("Ten mucho cuidado con lo que haces amigo. :)");
        document.body.innerHTML = ''; // Esto eliminará todo el contenido dentro del cuerpo del documento.
    }
}
verificarLogo();
var intervalo = setInterval(verificarLogo, 1000);
// btn de scroll
const container = document.getElementById('BarraUser');
        const scrollButton = document.getElementById('scrollButton');
        const innerContent = document.getElementById('BarraUser');
        
// Mostrar u ocultar el botón según la posición del scroll
container.addEventListener('scroll', () => {
    if (innerContent.clientHeight + container.scrollTop < innerContent.scrollHeight - 10) {
        scrollButton.innerHTML = '<i class="fas fa-arrow-down"></i>';
    } else {  
        scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    }
    });
  
  // Hacer scroll suavemente hacia arriba y cambiar el ícono
  scrollButton.addEventListener('click', () => {
    if (innerContent.scrollTop === 0) {
      // Si ya estamos arriba, cambiar el ícono y hacer scroll hacia abajo
      scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
      innerContent.scrollTo({ top: innerContent.scrollHeight, behavior: 'smooth' });
    } else {
      // Si estamos en otro lugar, cambiar el ícono y hacer scroll hacia arriba
      scrollButton.innerHTML = '<i class="fas fa-arrow-down"></i>';
      innerContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
// abridor del tablero
function tablero1(){
    var tablero1 = document.getElementById("tablero-1");
    var tablero2 = document.getElementById("tablero-2");
    var BarraUser = document.getElementById("BarraUser");
    tablero1.style.display = "none";
    tablero2.style.display = "block";
    BarraUser.style.display = "block";
}
function tablero2(){
    var tablero1 = document.getElementById("tablero-1");
    var tablero2 = document.getElementById("tablero-2");
    var BarraUser = document.getElementById("BarraUser");
    tablero2.style.display = "none";
    tablero1.style.display = "block";
    BarraUser.style.display = "none";
}
function modalNotificacion(){
    var modalNoti = document.getElementById("modal-Notificaciones")
    modalNoti.style.display = "none";
}

function modalNotificacionX(){
    var modalNoti = document.getElementById("modal-Notificaciones")
    modalNoti.style.display = "block";
    var elements = document.getElementsByClassName('boder');
    for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('stop-boder');
    };
}
// texto animador
const texto = document.getElementById("texto");
        const textos = [ 
            "¡Hola " + localStorage.getItem('username') + "! 🌟 Quería recordarte lo increíble que eres. Tu determinación y positividad son contagiosas. ¡Hoy es un nuevo día lleno de posibilidades para brillar! 💪😊",
            localStorage.getItem('username') + ", sé que has estado enfrentando desafíos, pero quiero decirte que admiro tu fuerza. ¡Eres más fuerte de lo que piensas! Estoy aquí para apoyarte en cada paso. 🌈💕", 
            "¡Buenos días, " + localStorage.getItem('username') + "! ☀️ Hoy es un regalo, así que ábrelo con una sonrisa. Tú tienes el poder de hacer que este día sea increíble. ¡Vamos, conquista el mundo! 🚀😄"
        ];
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;
        let lastShownDate = null;
    
        function escribirTexto() {
            const today = new Date().toLocaleDateString();
    
            if (lastShownDate !== today) {
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
    
                if (!isDeleting && charIndex === textoActual.length) {
                    isDeleting = true;
                    setTimeout(() => {
                        texto.innerHTML += "<br><br>Atentamente, El Equipo Pegasus X";
                        setTimeout(escribirTexto, 2500);
                    }, 1000);
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    index = (index + 1) % textos.length;
                    lastShownDate = today;
                    setTimeout(escribirTexto, 500);
                } else {
                    setTimeout(escribirTexto, isDeleting ? 50 : 100);
                }
            } else {
                // No se muestra ningún texto hoy, puedes hacer algo diferente si lo deseas
                setTimeout(escribirTexto, 1200);
            }
        }
    
        escribirTexto();
        setTimeout(function() {
            document.getElementById('bellIcon').classList.add('stop-rotation');
          }, 4000);

        // setTimeout(function() {
        //     var elements = document.getElementsByClassName('boder');
          
        //     for (var i = 0; i < elements.length; i++) {
        //       elements[i].classList.add('stop-boder');
        //     }
        // }, 4000);