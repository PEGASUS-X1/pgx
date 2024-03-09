var Navegador = document.getElementById("Navegador");
var barra = document.getElementById("barra");
var close = document.getElementById("close");
barra.onclick = function(){
    Navegador.style.display = "block";
}
close.onclick = function(){
    Navegador.style.display = "none";
}
var nombre_aporte = document.getElementById("nombre_aporte");
nombre_aporte.value = localStorage.getItem('nombre');
// var nombre_aportee = document.getElementById("nombre_aportee");
// nombre_aportee.value = localStorage.getItem('nombre');
function selectFile() {
    document.getElementById('fileToUpload').click();
}
var user2 = document.getElementById("user2");
user2.textContent = localStorage.getItem("nombre");
document.getElementById('fileToUpload').addEventListener('change', function () {
    const fileInput = document.getElementById('fileToUpload');
    const fileNameDisplay = document.getElementById('fileName');
if (fileInput.files.length > 0) {
    fileNameDisplay.value = fileInput.files[0].name;
} else {
    fileNameDisplay.value = "Ningún archivo seleccionado";
}
});
  
  // Sustituye aquí tus credenciales
var firebaseConfig = {
    apiKey: "AIzaSyCowkKlW7BEgdp_8GeRfQgg42OkSOrGzm8",
    authDomain: "fotos-b8a54.firebaseapp.com",
    projectId: "fotos-b8a54",
    storageBucket: "fotos-b8a54.appspot.com",
    messagingSenderId: "1037713159028",
    appId: "1:1037713159028:web:7386b0783a47e73f8b7221",
    measurementId: "G-909LJ5JLLG"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  async function subirArchivo() {
    var inputFile = document.getElementById("fileToUpload");
    var archivosContainer = document.getElementById("archivosContainer");
  
    if (inputFile.files.length == 0) {
      alert("Por favor selecciona un archivo");
      return;
    }
  
    var file = inputFile.files[0];
    var username = localStorage.getItem('nombre');
  
    if (!username) {
      alert("Debes iniciar sesión para subir archivos.");
      return;
    }
  
    // Crear una referencia al directorio del usuario en Firebase Storage
    var storageRef = firebase.storage().ref(username + "/" + file.name);
  
    try {
      await storageRef.put(file);
      console.log("Carga completada...");
  
      var filePath = username + "/" + file.name;
      mostrarArchivo(filePath, archivosContainer, file); // Pasa 'file' como argumento
    } catch (error) {
      console.error("Error al subir el archivo:", error);
      alert("Ocurrió un error al subir el archivo. Por favor, inténtalo de nuevo.");
    }
  }
  

  async function mostrarArchivo(path, container, file) {
    var storageRef = firebase.storage().ref(path);
    var url = await storageRef.getDownloadURL();
  

    var cartaArchivoDiv = document.createElement("div");
    cartaArchivoDiv.classList.add("carta-archivo");
  
    var imageElement = document.createElement("img");
    imageElement.src = "https://play-lh.googleusercontent.com/PzZQE76kE0nbJKfLuQPypAkyMoJQ10Zexg1cmOoBKQ1h9JV-CJ3ejM47sJHWtaew6jM";
  
    var urlElement = document.createElement("input");
    urlElement.classList.add("urlElement");
    urlElement.value = url;
    urlElement.id = "Multimedia";
    urlElement.disabled = true;
  
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function () {
      alert("Se elimino el archivo");
      eliminarArchivo(path, container, cartaArchivoDiv);
    };
  
    cartaArchivoDiv.appendChild(imageElement);
    cartaArchivoDiv.appendChild(urlElement);
    cartaArchivoDiv.appendChild(deleteButton);
  
    container.appendChild(cartaArchivoDiv);
  }
  
  async function eliminarArchivo(path, container, cartaArchivoDiv) {
    try {
      await firebase.storage().ref(path).delete();
      console.log("Archivo eliminado de Firebase Storage.");
  
      // Remover la tarjeta de archivo del contenedor
      container.removeChild(cartaArchivoDiv);
    } catch (error) {
      console.error("Error al eliminar el archivo:", error);
      alert("Ocurrió un error al eliminar el archivo. Por favor, inténtalo de nuevo.");
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos referencias a los botones
    var block_libros = document.getElementById("block_libros");
    var block_Videos = document.getElementById("block_Videos");
    var Desblock_Libros = document.getElementById("Desblock_Libros");
    var Desblock_Videos = document.getElementById("Desblock_Videos");
    // Agregamos oyentes de eventos a los botones
    Desblock_Libros.addEventListener("click", function() {
      // Agregamos la clase 'destacado' al botón 1
      block_libros.style.display = "block";
      block_Videos.style.display = "none";
      Desblock_Libros.classList.add("destacado"); 
      // Quitamos la clase 'destacado' al botón 2 (si la tiene)
      Desblock_Videos.classList.remove("destacado");
    });

    Desblock_Videos.addEventListener("click", function() {
      // Agregamos la clase 'destacado' al botón 2
      block_libros.style.display = "none";
      block_Videos.style.display = "block";
      Desblock_Videos.classList.add("destacado");
      // Quitamos la clase 'destacado' al botón 1 (si la tiene)
      Desblock_Libros.classList.remove("destacado");
    });
  });
  function GuardarLibro() {
    var Nombre_Del_Aportador = localStorage.getItem('nombre');
    var Img_Libro = "https://play-lh.googleusercontent.com/PzZQE76kE0nbJKfLuQPypAkyMoJQ10Zexg1cmOoBKQ1h9JV-CJ3ejM47sJHWtaew6jM";
    var pdf = $('#Multimedia').val();
    var Nombre_Libro = $('#Nombre_Libro').val();
    var Nombre_Autor = $('#Nombre_Autor').val();
    var Grupo_Libros = $("#Grupo_Libros").val();
    var Tema_Libros = $("#Tema_Libros").val();

    if (Img_Libro.trim() !== '') {
        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbxCk7mT8dim7gasnxsxyeUu7KV8tUxVCFLbQYSBZD4nvVz45A-uj-PqsR_i3Wzq55BCzA/exec',
            method: 'POST',
            data: {
                Img_Libro: Img_Libro,
                Nombre_Del_Aportador: Nombre_Del_Aportador,
                pdf: pdf,
                Nombre_Libro: Nombre_Libro,
                Nombre_Autor: Nombre_Autor,
                Grupo_Libros: Grupo_Libros,
                Tema_Libros: Tema_Libros,
            },
            success: function(responseLibro) {
                alert('Agregado con éxito');
                mostrarLibros();
            },
            error: function(error) {
                console.error('Error al agregar: ', error);
            }
        });

        // Limpiar los campos después de agregar el comentario
        $('#Multimedia').val('');
        $('#Nombre_Libro').val('');
        $('#Nombre_Autor').val('');
        $('#Grupo_Libros').val('');
        $('#Tema_Libros').val('');
    }
}
function GuardarVideo() {
  var asignaturass = $('#asignatura').val();
  var Tema_videos = $('#Tema_videos').val();
  var Mentor_videos = $('#Mentor_videos').val();
  var Clase_mentor = $('#Clase_mentor').val();
  var Link_Del_Video = $("#Link_Del_Video").val();

  if (asignaturass.trim() !== '') {
      $.ajax({
          url: 'https://script.google.com/macros/s/AKfycbweKuYpug7U09fEiWsMP8culDRTR8lCaPjA935tIF2iJP7ADKPLV4ulTXBNumzixyiq/exec',
          method: 'POST',
          data: {
            asignaturass: asignaturass,
              Tema_videos: Tema_videos,
              Mentor_videos: Mentor_videos,
              Clase_mentor: Clase_mentor,
              Link_Del_Video: Link_Del_Video,
          },
          success: function(responseVideo) {
              alert('Agregado con éxito');
              mostrarVideos();
          },
          error: function(error) {
              console.error('Error al agregar: ', error);
          }
      });

      // Limpiar los campos después de agregar el comentario
      $('#Tema_videos').val('');
      $('#Mentor_videos').val('');
      $('#Mentor_videos').val('');
      $("#Clase_mentor").val("");
      $("#Link_Del_Video").val("");
  }
}

var user4 = document.getElementById("user4");
user4.textContent = "Feliz Año Nuevo " + localStorage.getItem('nombre');
// function Desblock_Libros(){
//   block_libros.style.display = "block";
//   block_Videos.style.display = "none";
//   block_libros.classList.add("destacado");
//   block_Videos.classList.remove("destacado");
// }
// function Desblock_Videos(){
//   block_libros.style.display = "none";
//   block_Videos.style.display = "block";
//   block_Videos.classList.add("destacado");
//   block_libros.classList.remove("destacado");
// }
    // let alarmTime;
    // let alarmTimer;

    // const initialAlarmTime = new Date('January 1, 2050 11:06:01').getTime();
    // const alarmActivated = localStorage.getItem('alarmActivated');

    // if (alarmActivated === 'true') {
    //   showDiv();
    // } else {
    //   updateCountdown();
    //   alarmTimer = setTimeout(() => {
    //     showDiv();
    //     saveState();
    //     clearInterval(countdownInterval);
    //   }, Math.max(initialAlarmTime - Date.now(), 0));
    // }

    // function updateCountdown() {
    //   const now = new Date();
    //   const timeDiff = Math.max(initialAlarmTime - now.getTime(), 0);
    //   const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    //   const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    //   const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    //   const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    //   document.getElementById('countdown').textContent = formattedTime;
    // }


    // function showDiv() {
    //   document.getElementById('Feliz').style.display = 'block';
    // }

    // function saveState() {
    //   localStorage.setItem('alarmActivated', 'true');
    // }

    // const countdownInterval = setInterval(updateCountdown, 1000);