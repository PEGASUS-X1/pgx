var textoGenerado = document.getElementById("texto-generado");
        function salir(){
    localStorage.removeItem("lastSecurityCheckDate");
    location.reload();
}

var abrir_bar = document.getElementById("abrir_bar");
var bar = document.getElementById("bar");
var bar_abri = document.getElementById("bar_abri");

abrir_bar.onclick = function(){
    if(bar.style.display === " " || bar.style.display === "none"){
        bar.style.display = "block";
        bar_abri.classList.remove("fa-bars");
        bar_abri.classList.add("fa-times");
    } else {
        bar.style.display = "none";
        bar_abri.classList.add("fa-bars");
        bar_abri.classList.remove("fa-times");
    }
}

function cambiarScript() {
    var Alojamiento_selec = document.getElementById("Alojamiento_selec").value;
    var Actividades = document.getElementById("Actividades");
    var Trabajos = document.getElementById("Trabajos");
    var button_3_actividades = document.getElementById("button_3_actividades");
    var button_3_trabajos = document.getElementById("button_3_trabajos");
    if (Alojamiento_selec === "Actividades") {
        Actividades.style.display = "block";
        button_3_actividades.style.display = "block";
        button_3_trabajos.style.display = "none";
        Trabajos.style.display = "none";
    } else if (Alojamiento_selec === "Trabajos") {
        Trabajos.style.display = "block";
        button_3_trabajos.style.display = "block";
        button_3_actividades.style.display = "none";
        Actividades.style.display = "none";
    } else {
        Trabajos.style.display = "none";
        Actividades.style.display = "none";
        button_3_actividades.style.display = "none";
        button_3_trabajos.style.display = "none";
    }
}

var Alojamientos = document.getElementById("Alojamientos");
var Alojamiento = document.getElementById("Alojamiento");
var uploads = document.getElementById("uploads");
var upload = document.getElementById("upload");


Alojamientos.onclick = function(){
    if(Alojamiento.style.display === "block" || Alojamiento.style.display === ""){
      Alojamiento.style.display = "none";
      upload.style.display = "none";
    } else{
        Alojamiento.style.display = "block";
        upload.style.display = "none";
    }
}

uploads.onclick = function(){
  if( upload.style.display === "" || upload.style.display === "none"){
      upload.style.display = "block";
      Alojamiento.style.display = "none";
  } else{
      upload.style.display = "none";
  }
}

function selectFile() {
    document.getElementById('fileToUpload').click();
}

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
    var username = localStorage.getItem("nombre_completo");
  
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
    cartaArchivoDiv.classList.add("carta_archivo");
  
    var imageElement = document.createElement("img");
    imageElement.src = "https://play-lh.googleusercontent.com/PzZQE76kE0nbJKfLuQPypAkyMoJQ10Zexg1cmOoBKQ1h9JV-CJ3ejM47sJHWtaew6jM";
  
    var urlElement = document.createElement("input");
    urlElement.classList.add("urlElement");
    urlElement.value = url;
    urlElement.id = "Multimedia";
    urlElement.disabled = true;

    var copyButton = document.createElement("button");
    copyButton.classList.add("copyButton");
    copyButton.textContent = "Copiar URL";
    copyButton.onclick = function () {
      copyToClipboard(urlElement);
    };

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function () {
      alert("Se elimino el archivo");
      eliminarArchivo(path, container, cartaArchivoDiv);
    };
  
    cartaArchivoDiv.appendChild(imageElement);
    cartaArchivoDiv.appendChild(urlElement);
    cartaArchivoDiv.appendChild(copyButton);
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
  function copyToClipboard(elem) {
    // create hidden text element, if it doesn't already exist
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
      origSelectionStart = elem.selectionStart;
      origSelectionEnd = elem.selectionEnd;
    }
    var copyText = document.createElement("input");
    copyText.style.position = "absolute";
    copyText.style.left = "-9999px";
    document.body.appendChild(copyText);
    copyText.value = elem.value;
    copyText.select();
    document.execCommand("copy");
    document.body.removeChild(copyText);
    if (isInput) {
      elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    }
    alert("Url Copiada")
  }