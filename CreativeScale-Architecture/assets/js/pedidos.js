const ModalImg = document.getElementById('modal-img');
const ImgBtn = document.getElementById('ImgBtn');
const CloseImg = document.querySelector('.close-img');

ImgBtn.addEventListener('click', function () {
  ModalImg.style.display = "block";
});

CloseImg.addEventListener('click', function () {
  ModalImg.style.display = "none";
});


const cajaabierta = document.getElementById('caja');
const desplegadoroption = document.getElementById('desplegador-optioon');
const desplegadoraoption = document.querySelector('.desplegador-optioon');

desplegadoroption.addEventListener('click', function () {
  cajaabierta.style.display = "none";
  desplegadoraoption.style.display = "block";
  desplegadoroption.style.display = "none";
});

desplegadoraoption.addEventListener('click', function () {
  cajaabierta.style.display = "block";
  desplegadoroption.style.display = "block";
  desplegadoraoption.style.display = "none";
});

const baruser = document.getElementById('bar-client-cover');
const closebar = document.querySelector('.close-bar-client-cover');
const openbar = document.getElementById('open-bar-client-cover');

openbar.addEventListener('click', function () {
  baruser.style.display = "block";
});

closebar.addEventListener('click', function () {
  baruser.style.display = "none";
});


const ModalPreguntas = document.getElementById('modal-ques');
const closes = document.querySelector('.closes');
const oopen = document.getElementById('oopen');

oopen.addEventListener('click', function () {
  ModalPreguntas.style.display = "block";
});

closes.addEventListener('click', function () {
  ModalPreguntas.style.display = "none";
});

const PremiumCartBtn = document.getElementById('PremiumCartBtn');
const hidePremiumCartBtn = document.getElementById('hidePremiumCartBtn');
const premiumContend = document.querySelector('.covertura-black');

PremiumCartBtn.addEventListener('click', function () {
  premiumContend.style.display = "block";
});

hidePremiumCartBtn.addEventListener('click', function () {
  premiumContend.style.display = "none";
});

//     document.addEventListener("contextmenu", function(event) {
//       event.preventDefault();
//   });
// Define un array de contraseñas
// var passwords = ["gratis", "gratis", "gratis"];

// function checkPassword() {
//   var input = document.getElementById("password-input");
//   var enteredPassword = input.value;

//   // Verificar si la contraseña ingresada coincide con alguna de las contraseñas en el array
//   var passwordCorrect = false;
//   for (var i = 0; i < passwords.length; i++) {
//     var password = passwords[i];
//     if (enteredPassword === password) {
//       passwordCorrect = true;
//       break;
//     }
//   }

//   if (passwordCorrect) {
//     var passwordContent = document.getElementById("password");
//     passwordContent.style.display = "none";
//   } else {
//     alert("Contraseña incorrecta. Inténtalo de nuevo.");
//   }
// }

    function verificarLogo() {
      var logo = document.getElementById("password");

      if (!logo) {
          // Si el logo no existe, mostrar un mensaje de error y deshabilitar el sitio.
          alert("Ten mucho cuidado con lo que haces amigo. :)");
          document.body.innerHTML = ''; // Esto eliminará todo el contenido dentro del cuerpo del documento.
      }
  }

  // Llama a la función verificarLogo para que se ejecute inicialmente.
  verificarLogo();

  // Puedes usar setInterval para verificar periódicamente si el logo sigue existiendo.
  var intervalo = setInterval(verificarLogo, 1000);
    // Supongamos que ya tienes un elemento div con la clase "premium" en tu HTML
const divPremium = document.querySelector('.contenedor-prime');


    let cartaIdCounter = 1;
    const cartBtn = document.getElementById('cart-btn');
    const hideCartBtn = document.getElementById('hide-cart-btn');
    const cartContainer = document.querySelector('.cart-items-container');
    const black = document.querySelector('.cart-items-container-black');

    cartBtn.addEventListener('click', function () {
        cartContainer.classList.add('open');
        black.classList.add('open-black');
    });

    hideCartBtn.addEventListener('click', function () {
        cartContainer.classList.remove('open');
        black.classList.remove('open-black');
    });

    const productos = [];

    function crearCartaProducto(producto) {
      const cartaId = `carta-${cartaIdCounter}`;
      cartaIdCounter++;
  
      const carta = document.createElement("div");
      carta.classList.add("carta-productos");
      carta.id = cartaId; // Asigna la ID única a la carta

        const imagen = document.createElement("img");
        imagen.src = producto.imgSrc;

        const titulo = document.createElement("h3");
        titulo.classList.add("carta-productos-title");
        titulo.textContent = producto.titulo;

        const propiedades = document.createElement("p");
        propiedades.classList.add("carta-productos-propiedades");
        propiedades.textContent = "Propiedades:";



        const precios = document.createElement("p");
        precios.classList.add("carta-productos-propiedades");
        precios.textContent = "Precios:";

        const OpcionesDePago = document.createElement("a");
        OpcionesDePago.classList.add("carta-productos-propiedades");
        OpcionesDePago.textContent = "Tipo De Pago";
          // !1 Elaboracion De Proyectos De Edificacion (privados y publicos)
          // ?1.1 Documentos de propiedad, Certificado De Parametros Urbanisticos, Estudio De Mecanicas De suelo
          // 1.2 El profecional entregara el expediente tecnico(memoria descriptiva, espesificaciones tecnicas,metrados,presupuesto, relacion de insumos y planos) de ejecucion de obra aprobado por la municipalidad 
          // !2 Ejecucion-De-Proyectos
          // ?2.1 Proyecto De Edificacion Aprobado, Desipnacion del supervisor de obra(profacional que ejerce control o vigilancia de la obra y que verifique el cumplimiento de expediente tecnico), adelantos(monetario)
          // !3 Supervision-De-Ejecucion-De-Proyectos
          // ?3.1 control de calidad del proyecto(capacidad portante del terreno, control de resistencia del conquerto, control de calidad de los materiales), Control economico del proyecto(conpatibilisar los gastos efectuados con el programado en el expediente tecnico), control de plazo de ejecucion del proyecto(conpatibilisar el plazo de ejecucion ejecutado con el programado en el experiente tecnico), recepcion de obra(revicion y entrega con el propietario del cunplimiento del expediente tecnico) y liquidacion de obra(rendicion de cuentas fisico y financiera de la obra)
        const opcionesSelect = [
            "Elaboracion-De-Proyectos-De-Edificacion",
            "Ejecucion-De-Proyectos",
            "Supervision-De-Ejecucion-De-Proyectos"
        ];

        const select = document.createElement("select");
        select.classList.add("selec");
        select.placeholder = "Elige una opción";

        const opcionSelecciona = document.createElement("option");
        opcionSelecciona.disabled = true;
        opcionSelecciona.selected = true;
        opcionSelecciona.textContent = "Categorias";

        select.appendChild(opcionSelecciona);

        opcionesSelect.forEach(opcion => {
            const option = document.createElement("option");
            option.value = opcion;
            option.textContent = opcion;
            select.appendChild(option);
        });

        // Agrega un nuevo select para el fabricante
        const fabricanteSelect = document.createElement("select");
        fabricanteSelect.classList.add("selec-frabricante");
        fabricanteSelect.id = "selec-frabricante";
        fabricanteSelect.placeholder = "Elige un fabricante";

        const fabricanteOpciones = [
            { nombre: "Arquitecto Sandro Cuba", valor: "sandro_cuba" },
            { nombre: "Arquitecta Dariela Cuba", valor: "dariela_cuba" },
            { nombre: "ING Civil Wilson Champi", valor: "wilson_champi" },
            { nombre: "Pegasus X", valor: "pegasus_x" },
            { nombre: "Estudiantes", valor: "aaa" }
        ];

        const opcionFabricanteSelecciona = document.createElement("option");
        opcionFabricanteSelecciona.disabled = true;
        opcionFabricanteSelecciona.selected = true;
        opcionFabricanteSelecciona.textContent = producto.placeholder;
        fabricanteSelect.appendChild(opcionFabricanteSelecciona);

        fabricanteOpciones.forEach(fabricante => {
            // const optionFabricante = document.createElement("option");
            // optionFabricante.value = fabricante;
            // optionFabricante.textContent = fabricante;
            const optionFabricante = document.createElement("option");
            optionFabricante.value = fabricante.valor;
            optionFabricante.textContent = fabricante.nombre;
            fabricanteSelect.appendChild(optionFabricante);
        });

        if (cartaId === 'carta-1' || cartaId === 'carta-2') {
            const opcionesDeshabilitar = [
              { nombre: 'ING Civil Wilson Champi', valor: 'wilson_champi' },
              { nombre: 'Aquitecta Dariela Cuba', valor: 'dariela_cuba' },
              { nombre: 'Aquitecto Sandro Cuba', valor: 'sandro_cuba' },
              { nombre: 'Pegasus X', valor: 'pegasus_x' }
            ];
          
            opcionesDeshabilitar.forEach(opcion => {
              const elemento = fabricanteSelect.querySelector(`option[value="${opcion.valor}"]`);
              if (elemento) {
                elemento.disabled = true;
                elemento.hidden = true;
              }
            });
          }
        const notasContainer = document.createElement("div");
        notasContainer.classList.add("carta-productos-notasContainer");
        notasContainer.id = "notas-container";
// Suponiendo que producto.notas es un array de notas
// Suponiendo que producto.notas es un array de notas
const notas = producto.notas;

if (notas && notas.length > 0) {
  for (const nota of notas) {
    const notaElement = document.createElement("p");
    notaElement.textContent = nota;
    notasContainer.appendChild(notaElement);

    // Agregar un espacio de separación entre las notas
    notaElement.style.marginBottom = "-5px"; // Ajusta el valor según tus preferencias
  }
}

        const br = document.createElement("br");
        const br1 = document.createElement("br");

        const especificaciontext = document.createElement("p");
        especificaciontext.classList.add("especificaciontext");
        especificaciontext.textContent = "Elige las propiedades o especificaciones de la categoria a pedir:";

        // Categorias - Planos
        const ubicacion = document.createElement("textarea");
        ubicacion.classList.add("textarea-delgados", "categoria-campo", "Elaboracion-De-Proyectos-De-Edificacion");
        ubicacion.placeholder = 'Especifica tu ubicacion aquí...';
        ubicacion.value = "Ubicacion:";

        const area = document.createElement("textarea");
        area.classList.add("textarea-delgados", "categoria-campo", "Elaboracion-De-Proyectos-De-Edificacion");
        area.placeholder = 'Especifica tu area aquí...';
        area.value = "Area:";

        const perimetro = document.createElement("textarea");
        perimetro.classList.add("textarea-delgados", "categoria-campo", "Elaboracion-De-Proyectos-De-Edificacion");
        perimetro.placeholder = 'Especifica tu perimetro aquí...';
        perimetro.value = "Perimetro:";

        // const planosEscala = document.createElement("textarea");
        // planosEscala.classList.add("textarea-delgados", "categoria-campo", "planos");
        // planosEscala.placeholder = 'Especifica la escala aquí...';
        // planosEscala.value = "Escala:";

        const Documentos = document.createElement("textarea");
        Documentos.classList.add("textarea-delgados", "categoria-campo", "Elaboracion-De-Proyectos-De-Edificacion");
        Documentos.placeholder = 'Especifica la escala aquí...';
        Documentos.value = "Documentos de propiedad:";

        const zonificacionUrbana = document.createElement("textarea");
        zonificacionUrbana.classList.add("textarea-delgados", "categoria-campo", "Elaboracion-De-Proyectos-De-Edificacion");
        zonificacionUrbana.placeholder = 'Especifica la escala aquí...';
        zonificacionUrbana.value = "Zonificacion Urbana:";

        const Pisos = document.createElement("textarea");
        Pisos.classList.add("textarea-delgados", "categoria-campo", "Elaboracion-De-Proyectos-De-Edificacion");
        Pisos.placeholder = 'Especifica la escala aquí...';
        Pisos.value = "Pisos:";

        const planosEspecificaciones = document.createElement("textarea");
        planosEspecificaciones.classList.add("textarea", "categoria-campo", "Elaboracion-De-Proyectos-De-Edificacion");
        planosEspecificaciones.placeholder = 'Especifica tus requerimientos aquí...';
        planosEspecificaciones.value = "Especificaciones:";

        // Categorias - Dibujos
        const dibujo = document.createElement("textarea");
        dibujo.classList.add("textarea-delgados", "categoria-campo", "dibujos");
        dibujo.placeholder = 'Especifica el dibujo aquí...';
        dibujo.value = "Dibujo de:";

        const tamaño = document.createElement("textarea");
        tamaño.classList.add("textarea-delgados", "categoria-campo", "dibujos");
        tamaño.placeholder = 'Especifica el tamaño aquí...';
        tamaño.value = "Tamaño:";

        const tipoEscala = document.createElement("textarea");
        tipoEscala.classList.add("textarea-delgados", "categoria-campo", "dibujos");
        tipoEscala.placeholder = 'Especifica la escala aquí...';
        tipoEscala.value = "Escala:";

        const dibujoEspecificaciones = document.createElement("textarea");
        dibujoEspecificaciones.classList.add("textarea", "categoria-campo", "dibujos");
        dibujoEspecificaciones.placeholder = 'Especifica tus requerimientos aquí...';
        dibujoEspecificaciones.value = "";

        // Categorias - Etc
        const etc = document.createElement("textarea");
        etc.classList.add("textarea", "categoria-campo", "etc");
        etc.placeholder = 'Especifica tus requerimientos aquí...';
        etc.value = "Especificaciones:";

        const btnAgregar = document.createElement("a");
        btnAgregar.classList.add("btn-buy");
        btnAgregar.innerHTML = '<i class="fa fa-shopping-cart" aria-hidden="true"></i> Agregar al Carrito';
        btnAgregar.addEventListener("click", () => {
            const categoriaSeleccionada = select.value;
            const fabricanteSeleccionado = fabricanteSelect.value;
            const especificacion = obtenerEspecificacion(carta, categoriaSeleccionada);

            if (!productos.includes(producto) && especificacion.trim() !== "") {
                productos.push({ producto, categoria: categoriaSeleccionada, fabricante: fabricanteSeleccionado, especificacion });

                actualizarCajaCompras();
                alert("agregado");
            }
        });

        carta.appendChild(imagen);
        carta.appendChild(titulo);
        carta.appendChild(propiedades);
        carta.appendChild(notasContainer);
        carta.appendChild(especificaciontext);
        // Agrega el nuevo select al formulario
        carta.appendChild(fabricanteSelect);
        carta.appendChild(select);

        carta.appendChild(ubicacion);
        carta.appendChild(area);
        carta.appendChild(perimetro);
        // carta.appendChild(planosEscala);
        carta.appendChild(Documentos);
        carta.appendChild(zonificacionUrbana);
        carta.appendChild(Pisos);
        carta.appendChild(planosEspecificaciones);

        carta.appendChild(dibujo);
        carta.appendChild(tamaño);
        carta.appendChild(tipoEscala);
        carta.appendChild(dibujoEspecificaciones);

        carta.appendChild(etc);
        carta.appendChild(br);
        carta.appendChild(br1);
        carta.appendChild(btnAgregar);

        return carta;
      }

    function obtenerEspecificacion(carta, categoria) {
        const camposCategoria = carta.querySelectorAll(`.${categoria}`);
        let especificacion = "";

        camposCategoria.forEach(campo => {
            if (campo.value && campo.value.trim() !== campo.placeholder) {
                especificacion += campo.value + "\n";
            }
        });

        return especificacion.trim();
    }

    function actualizarCajaCompras() {
        const cajaCompras = document.getElementById("productosEnCaja");
        cajaCompras.innerHTML = "";

        productos.forEach((producto, index) => {
            const div = document.createElement("div");
            div.classList.add("carta-1");

            const imagen = document.createElement("img");
            imagen.src = producto.producto.imgSrc;

            const li = document.createElement("h3");
            li.classList.add("carta-productos-title");
            li.textContent = producto.producto.titulo;

            const propiedades = document.createElement("p");
            propiedades.classList.add("carta-productos-propiedades");
            propiedades.textContent = "Propiedades:";

            const notasContainer = document.createElement("div");
            notasContainer.classList.add("carta-productos-notasContainer");
            notasContainer.id = "notas-container";
// Suponiendo que producto.notas es un array de notas
const notas = producto.producto.notas;

if (notas && notas.length > 0) {
  for (const nota of notas) {
    const notaElement = document.createElement("p");
    notaElement.textContent = nota;
    notasContainer.appendChild(notaElement);

    // Agregar un espacio de separación entre las notas
    notaElement.style.marginBottom = "-5px"; // Ajusta el valor según tus preferencias
  }
}

            const categoria = document.createElement("p");
            categoria.classList.add("carta-productos-categoria");
            categoria.textContent = `Categoría: ${producto.categoria}`;

            const fabricante = document.createElement("p");
            fabricante.classList.add("carta-productos-fabricante");
            fabricante.textContent = `Fabricante: ${producto.fabricante}`;

            const especificaciontext = document.createElement("p");
            especificaciontext.classList.add("especificaciontext");
            especificaciontext.textContent = "Tus Especificaciones Son:";

    // Dividir producto.especificacion en especificaciones individuales
    const especificaciones = producto.especificacion.split('\n');


            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add("eliminar");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.addEventListener("click", () => {
                eliminarProducto(index);
                alert("eliminado");
            });
            // especificacion.innerHTML = producto.especificacion.replace(/\n/g, "<br>");

            div.appendChild(imagen);
            div.appendChild(li);
            div.appendChild(propiedades);
            div.appendChild(notasContainer);
            div.appendChild(categoria);
            div.appendChild(fabricante);
            div.appendChild(especificaciontext);
                // Crear un campo de entrada (input) para cada especificación
    especificaciones.forEach((especificacion, i) => {
      const especificacionInput = document.createElement("input");
      especificacionInput.type = "text";
      especificacionInput.value = especificacion;

      // Agregar un identificador único a cada campo de entrada
      especificacionInput.id = `especificacion-${index}-${i}`;

       // Agregar el campo de entrada
       div.appendChild(especificacionInput);
    });

            cajaCompras.appendChild(div);
        });

        actualizarEnlaceWhatsApp();
    }

    function eliminarProducto(index) {
        productos.splice(index, 1);
        actualizarCajaCompras();
    }
    function actualizarEnlaceWhatsApp() {
      const mensajeProductos = productos.map(producto => {
        const cartaProducto = producto.producto;
        const titulo = cartaProducto.titulo;
        const categoria = producto.categoria;
        const fabricante = producto.fabricante;
        const Regin = document.getElementById('Región').value;
        const provincia = document.getElementById('provincia').value;
        const distrito = document.getElementById('distrito').value;
        const nombre = localStorage.getItem('username');
        const especificaciones = producto.especificacion; // Obtener las especificaciones del producto
    
        return `Categoría: ${categoria}\nFabricante: ${fabricante}\nServicio: ${titulo}\nEspecificaciones:\n${especificaciones}\nRegión: ${Regin}\nProvincia: ${provincia}\nDistrito: ${distrito}\nPersona: ${nombre}`;
      }).join("\n\n"); // Agregar líneas en blanco entre productos
    
      const mensaje = encodeURIComponent(mensajeProductos);
      const numeroWhatsApp = "+51933933565"; // Cambia esto al número deseado
      const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    
      const btnEnviarWhatsApp = document.getElementById("btnEnviarWhatsApp");
      btnEnviarWhatsApp.href = enlaceWhatsApp;
      btnEnviarWhatsApp.target = "_blank";
    }
    

    document.addEventListener("DOMContentLoaded", () => {
        const productosContainer = document.getElementById("productos");

        const listaProductos = [
            {
                imgSrc: "https://www.ingegeek.site/wp-content/uploads/2022/08/plano-e1616172387551-800x400-1.jpg",
                titulo: "Basico",
                placeholder: "Elige El Profesional O Grupo",
                // codigo: "YXR7-O5FM-KHI4",
                notas: []
            },
            {
                imgSrc: "https://www.ingegeek.site/wp-content/uploads/2022/08/plano-e1616172387551-800x400-1.jpg",
                titulo: "Basico",
                placeholder: "Elige El Profesional O Grupo",
                // codigo: "YXR7-O5FM-KHI4",
                notas: []
            },
            {
                imgSrc: "https://www.ingegeek.site/wp-content/uploads/2022/08/plano-e1616172387551-800x400-1.jpg",
                titulo: "Premiun",
                placeholder: "Elige El Profesional O Grupo",
                // codigo: "YXR7-O5FM-KHI4",
                notas: []
            }
        ];

        listaProductos.forEach(producto => {
            const cartaProducto = crearCartaProducto(producto);
            productosContainer.appendChild(cartaProducto);
        });

        const selectElements = document.querySelectorAll('.selec');
        selectElements.forEach(select => {
            select.addEventListener('change', function () {
                const cartaProducto = this.closest('.carta-productos');
                const camposCategoria = cartaProducto.querySelectorAll('.categoria-campo');

                camposCategoria.forEach(campo => {
                    campo.style.display = 'none';
                });

                const categoriaSeleccionada = this.value;
                const camposMostrar = cartaProducto.querySelectorAll(`.${categoriaSeleccionada}`);
                camposMostrar.forEach(campo => {
                    campo.style.display = 'block';
                });

            });
        });
    // Mueve la carta con ID "carta-3" al div "premium"
    const carta3 = document.getElementById('carta-3');
    if (divPremium && carta3) {
        divPremium.appendChild(carta3);
    }
    const btnEnviarWhatsApp = document.getElementById("btnEnviarWhatsApp");
    btnEnviarWhatsApp.addEventListener("click", function (event) {
      event.preventDefault();
    
      const mensajeProductos = productos.map(producto => {
        const cartaProducto = producto.producto;
        const titulo = cartaProducto.titulo;
        const categoria = producto.categoria;
        const fabricante = producto.fabricante;
        const Regin = document.getElementById('Región').value;
        const provincia = document.getElementById('provincia').value;
        const distrito = document.getElementById('distrito').value;
        const nombre = localStorage.getItem('username');
        const especificaciones = producto.especificacion; // Obtener las especificaciones del producto
    
        return `Categoría: ${categoria}\nFabricante: ${fabricante}\nServicio: ${titulo}\nEspecificaciones:\n${especificaciones}\nRegión: ${Regin}\nProvincia: ${provincia}\nDistrito: ${distrito}\nPersona: ${nombre}`;
      }).join("\n\n"); // Agregar líneas en blanco entre productos
    
      const mensaje = encodeURIComponent(mensajeProductos);
      const numeroWhatsApp = "+51933933565"; // Cambia esto al número deseado
      const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    
      window.open(enlaceWhatsApp, "_blank");
    });

        actualizarCajaCompras();
    });
    
    // Obtiene el elemento h1 por su ID
    var textoGenerado = document.getElementById("texto-generado");

        // Obtener todos los elementos textarea con la clase "autoresize"
        var textareas = document.querySelectorAll("textarea.autoresize");

        // Agregar un evento input a cada textarea
        textareas.forEach(function(textarea) {
            textarea.addEventListener("input", function () {
                this.style.height = "auto";
                this.style.height = this.scrollHeight + "px";
            });
        });

    // Array de títulos
var animos = [
"¿ "+ localStorage.getItem('username') + " Estás listo para dar vida a tus proyectos? En nuestra página web, puedes solicitar planos personalizados que harán realidad tus ideas. Nuestro equipo de expertos está listo para crear planos precisos y detallados que se ajusten perfectamente a tus necesidades. ¡No esperes más! Haz tu pedido ahora y comienza a construir tus sueños ?", 
"¿ " + localStorage.getItem('username') + " Necesitas planos de calidad profesional? En nuestra página web, te ofrecemos una solución fácil y rápida. Solo tienes que hacer clic en el botón de pedido, proporcionarnos tus especificaciones y en poco tiempo recibirás planos excepcionales. No pierdas más tiempo buscando en otro lugar. ¡Haz tu pedido hoy mismo y experimenta la diferencia que ofrecemos ?", 
"¿ " + localStorage.getItem('username') + " Quieres simplificar tu proceso de diseño? En nuestra página web, te ofrecemos la oportunidad de obtener planos precisos y bien diseñados con tan solo unos pocos clics. Nuestro equipo de arquitectos y diseñadores está listo para trabajar en tu proyecto. Haz tu pedido ahora y descubre lo fácil que puede ser obtener planos de alta calidad. ¡No esperes más para empezar a construir tu futuro! ?"];
var indiceActual = 0;

var textodeanimo = document.getElementById("textodeanimo");
textodeanimo.textContent = "¿ "+ localStorage.getItem('username') + " Quieres convertir tus ideas en realidad? En nuestra plataforma en línea, la magia de la arquitectura y el diseño está a solo un clic de distancia. Nuestro equipo de profesionales se encargará de transformar tus conceptos en planos con precisión y estilo. No dejes que tus proyectos se queden en el papel, ¡haz tu pedido ahora y comienza a construir tus sueños ?";

// Función para cambiar el título
function cambiarAnimo() {
  var textodeanimo = document.querySelectorAll(".textodeanimo");

  //var textodeanimo = document.getElementById("textodeanimo");
  textodeanimo.forEach(function (textodeanimo) {

  textodeanimo.textContent = animos[indiceActual];
});
  indiceActual = (indiceActual + 1) % animos.length;
}

setInterval(cambiarAnimo, 5000); 
    var username = document.getElementById("username")
    username.textContent = localStorage.getItem('username') ; 



    function selectFile() {
      document.getElementById('fileToUpload').click();
    }
    
    document.getElementById('fileToUpload').addEventListener('change', function() {
      const fileInput = document.getElementById('fileToUpload');
      const fileNameDisplay = document.getElementById('fileName');
      if (fileInput.files.length > 0) {
        fileNameDisplay.value = fileInput.files[0].name;
      } else {
        fileNameDisplay.value = "Ningún archivo seleccionado";
      }
    });
// sustituye aquí tus credenciales
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
  var imageContainer = document.getElementById("imageContainer");

  if (inputFile.files.length == 0) {
      alert("Por favor selecciona un archivo");
      return;
  }

  var file = inputFile.files[0];
  var username = localStorage.getItem('username');

  if (!username) {
      alert("Debes iniciar sesión para subir archivos.");
      return;
  }

  // Crear una referencia al directorio del usuario en Firebase Storage
  var storageRef = firebase.storage().ref(username + "/" + file.name);

  try {
      await storageRef.put(file);
      console.log("Carga completada...");

      var imagePath = username + "/" + file.name;
      mostrarImagen(imagePath, imageContainer, file); // Pasa 'file' como argumento
  } catch (error) {
      console.error("Error al subir el archivo:", error);
      alert("Ocurrió un error al subir el archivo. Por favor, inténtalo de nuevo.");
  }
}

  let cartaCounter = 1;
  async function mostrarImagen(path, container, file) { // Añade 'file' como argumento
      var storageRef = firebase.storage().ref(path);
      var url = await storageRef.getDownloadURL();

      const cartaNumero = `Img Numero: ${cartaCounter}`;
      cartaCounter++;
  
      var cartaImgDiv = document.createElement("div");
      cartaImgDiv.classList.add("carta-img");
  
      var imageElement = document.createElement("img");
      imageElement.src = url;
  
      var numero = document.createElement("p")
      numero.textContent = cartaNumero;

      var fileNameElement = document.createElement("input");
      fileNameElement.classList.add("fileNameElement");
      fileNameElement.value = file.name;        
      fileNameElement.disabled = true;

      var buttonElement = document.createElement("button");
      buttonElement.classList.add("button");
      buttonElement.textContent = "Copiar URL Del Archivo";
      buttonElement.onclick = function () {
          copiarURL(url);
      };
  
      cartaImgDiv.appendChild(imageElement);
      cartaImgDiv.appendChild(numero);
      cartaImgDiv.appendChild(fileNameElement);
      cartaImgDiv.appendChild(buttonElement);
  
      var imgCartaSubida = document.getElementById("imageContainer");
      imgCartaSubida.appendChild(cartaImgDiv);
  }

  function copiarURL(url) {
      var tempInput = document.createElement("input");
      document.body.appendChild(tempInput);
      tempInput.value = url;
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert("URL de la imagen copiada al portapapeles: " + url);
  }