
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
    function checkPassword() {
      var input = document.getElementById("password-input");
      var enteredPassword = input.value;

      // Cargar las contraseñas desde el archivo "contraseñas.txt"
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "contraseñas.txt", false);
      xhr.send();

      if (xhr.status === 200) {
          var passwords = xhr.responseText.split("\n");

          // Verificar si la contraseña ingresada coincide con alguna de las contraseñas
          var passwordCorrect = false;
          for (var i = 0; i < passwords.length; i++) {
              var password = passwords[i].trim(); // Eliminar espacios en blanco
              if (enteredPassword === password) {
                  passwordCorrect = true;
                  break;
              }
          }

          if (passwordCorrect) {
              var passwordContent = document.getElementById("password");
              passwordContent.style.display = "none";
          } else {
              alert("Contraseña incorrecta. Inténtalo de nuevo.");
          }
      } else {
          alert("Eror 404");
      }
  }
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

        const opcionesSelect = [
            "Planos",
            "Dibujos",
            "Etc"
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

        const fabricanteOpciones = ["Aquitecto Sandro Cuba","Aquitecta Dariela Cuba", "ING Civil Wilson Champi", "Pegasus X", "Estudiantes"];

        const opcionFabricanteSelecciona = document.createElement("option");
        opcionFabricanteSelecciona.disabled = true;
        opcionFabricanteSelecciona.selected = true;
        opcionFabricanteSelecciona.textContent = producto.placeholder;
        fabricanteSelect.appendChild(opcionFabricanteSelecciona);

        fabricanteOpciones.forEach(fabricante => {
            const optionFabricante = document.createElement("option");
            optionFabricante.value = fabricante;
            optionFabricante.textContent = fabricante;
            fabricanteSelect.appendChild(optionFabricante);
        });

// Luego, deshabilita la opción "Estudiantes" si es necesario
if (cartaId === 'carta-1' || cartaId === 'carta-2') {
    const opcionesDeshabilitar = [
        'ING Civil Wilson Champi',
        'Aquitecta Dariela Cuba',
        'Aquitecto Sandro Cuba',
        'Pegasus X'
    ];
      
      opcionesDeshabilitar.forEach(opcion => {
        const elemento = fabricanteSelect.querySelector(`option[value="${opcion}"]`);
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

        const especificaciontext = document.createElement("p");
        especificaciontext.classList.add("especificaciontext");
        especificaciontext.textContent = "Elige las propiedades o especificaciones de la categoria a pedir:";

        // Categorias - Planos
        const ubicacion = document.createElement("textarea");
        ubicacion.classList.add("textarea-delgados", "categoria-campo", "planos");
        ubicacion.placeholder = 'Especifica tu ubicacion aquí...';
        ubicacion.value = "Ubicacion:";

        const area = document.createElement("textarea");
        area.classList.add("textarea-delgados", "categoria-campo", "planos");
        area.placeholder = 'Especifica tu area aquí...';
        area.value = "Area:";

        const perimetro = document.createElement("textarea");
        perimetro.classList.add("textarea-delgados", "categoria-campo", "planos");
        perimetro.placeholder = 'Especifica tu perimetro aquí...';
        perimetro.value = "Perimetro:";

        // const planosEscala = document.createElement("textarea");
        // planosEscala.classList.add("textarea-delgados", "categoria-campo", "planos");
        // planosEscala.placeholder = 'Especifica la escala aquí...';
        // planosEscala.value = "Escala:";

        const Documentos = document.createElement("textarea");
        Documentos.classList.add("textarea-delgados", "categoria-campo", "planos");
        Documentos.placeholder = 'Especifica la escala aquí...';
        Documentos.value = "Documentos de propiedad:";

        const zonificacionUrbana = document.createElement("textarea");
        zonificacionUrbana.classList.add("textarea-delgados", "categoria-campo", "planos");
        zonificacionUrbana.placeholder = 'Especifica la escala aquí...';
        zonificacionUrbana.value = "Zonificacion Urbana:";

        const Pisos = document.createElement("textarea");
        Pisos.classList.add("textarea-delgados", "categoria-campo", "planos");
        Pisos.placeholder = 'Especifica la escala aquí...';
        Pisos.value = "Pisos:";

        const planosEspecificaciones = document.createElement("textarea");
        planosEspecificaciones.classList.add("textarea", "categoria-campo", "planos");
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

            const especificacion = document.createElement("p");
            especificacion.classList.add("especificacion-p");
            especificacion.textContent = producto.especificacion;

            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add("eliminar");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.addEventListener("click", () => {
                eliminarProducto(index);
                alert("eliminado");
            });
            especificacion.innerHTML = producto.especificacion.replace(/\n/g, "<br>");

            div.appendChild(imagen);
            div.appendChild(li);
            div.appendChild(propiedades);
            div.appendChild(notasContainer);
            div.appendChild(categoria);
            div.appendChild(fabricante);
            div.appendChild(especificaciontext);
            div.appendChild(especificacion);
            div.appendChild(btnEliminar);
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
            const especificaciones = producto.especificacion;

            const cartaProducto = producto.producto;
            const titulo = cartaProducto.titulo;
            const categoria = producto.categoria;
            const fabricante = producto.fabricante;
            const Regin = document.getElementById('Región').value;
            const provincia = document.getElementById('provincia').value;
            const distrito = document.getElementById('distrito').value;
            const nombre = localStorage.getItem('username');
            // const pas = cartaProducto.codigo;

            return `Categoría: ${categoria}\nFabricante: ${fabricante}\nServicio: ${titulo}\nEspecificaciones: \n${especificaciones}\nRegión: ${Regin}\nProvincia: ${provincia}\nDistrito: ${distrito}\nPersona: ${nombre}`;
        }).join("");

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
                notas: ["Precio: 30$", "Tiempo: 30 dias", "Botecetos: null"]
            },
            {
                imgSrc: "https://www.ingegeek.site/wp-content/uploads/2022/08/plano-e1616172387551-800x400-1.jpg",
                titulo: "Basico",
                placeholder: "Elige El Profesional O Grupo",
                // codigo: "YXR7-O5FM-KHI4",
                notas: ["Precio: 30$", "Tiempo: 30 dias", "Botecetos: null"]
            },
            {
                imgSrc: "https://www.ingegeek.site/wp-content/uploads/2022/08/plano-e1616172387551-800x400-1.jpg",
                titulo: "Premiun",
                placeholder: "Elige El Profesional O Grupo",
                // codigo: "YXR7-O5FM-KHI4",
                notas: ["Precio: 40$", "Tiempo: 30 dias"]
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
                const especificaciones = producto.especificacion;

                const cartaProducto = producto.producto;
                const titulo = cartaProducto.titulo;
                const categoria = producto.categoria;
                const fabricante = producto.fabricante;
                const Regin = document.getElementById('Región').value;
                const provincia = document.getElementById('provincia').value;
                const distrito = document.getElementById('distrito').value;
                const nombre = localStorage.getItem('username');

                // const pas = cartaProducto.codigo;

                return `Categoría: ${categoria}\nFabricante: ${fabricante}\nServicio: ${titulo}\nEspecificaciones: \n${especificaciones}\nRegión: ${Regin}\nProvincia: ${provincia}\nDistrito: ${distrito}\nPersona: ${nombre}`;
            }).join("");

            const mensaje = encodeURIComponent(mensajeProductos);
            const numeroWhatsApp = "+51933933565"; // Cambia esto al número deseado
            const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

            window.open(enlaceWhatsApp, "_blank");
        });

        actualizarCajaCompras();
    });