const asignaturaSelect = document.getElementById('Asignatura');
const temaSelect = document.getElementById('Tema');
const mentorSelect = document.getElementById('Mentor');
const clasesSelect = document.getElementById('Clases');
const reproductorVideo = document.getElementById('reproductor-video');
const temarioDiv = document.getElementById('temario');
const librosContainer = document.getElementById('librosContainer');
const EjerciciosContainer = document.getElementById('EjerciciosContainer');

const asignaturas = {
    Aritmetica: [
        {
            NombreDeltema: "TEORIA DE CONJUNTOS",
            // Libros: [
            //     {
            //         ImgDelLibro: "https://i.pinimg.com/736x/53/ae/33/53ae3344970a80102469b06d0fce7329.jpg",
            //         NombreDelLibro: "Libro 1",
            //         AutorDelLibro: "Autor 1",
            //         url: ""
            //     },
            //     {
            //         ImgDelLibro: "",
            //         NombreDelLibro: "Libro 2",
            //         AutorDelLibro: "Autor 2",
            //         url: ""
            //     }
            // ],
            // Ejercicios: [
            //     {
            //         ImgDelEjercicio: "https://i.pinimg.com/736x/53/ae/33/53ae3344970a80102469b06d0fce7329.jpg",
            //         url: "https://github.com/pegasus1v1/reforzamiento/blob/bd402e568100b53d2d95183b2490b0b81d79536e/aritmetica/teoria%20de%20conjuntos/ejercicios/Pool%20Elias%20-%20conjuntos%20y%20numeracion.pdf"
            //     }
            // ],
            Mentores: [
                {
                    NonbreDelMentor: "Cesar Billena",
                    videos: [
                        {
                            numero: "Teoría de Conjunto", url: "https://drive.google.com/file/d/10eZCZxH7bn66Byf_i_Td4gXWgqt0ZmiN/preview"
                        },
                        {
                            numero: "Teoría de Conjuntos", url: "https://drive.google.com/file/d/1MlvDYDBbWWYjQe35zNV9ios8rwg5O63o/preview"
                        }
                    ]
                },
                {
                    NonbreDelMentor: "Isidoro Ruiz",
                    videos: [
                        {
                            numero: "Teoría de Conjuntos", url: "https://www.youtube.com/embed/ljBbGBcVLw8?si=EP68pwM0udnNk-bM"
                        },
                        {
                            numero: "Teoría de Conjuntos", url: "https://www.youtube.com/embed/sQ2HwwLmiz0?si=b61X4fAQ70keLHTo"
                        },
                        {
                            numero: "Conjuntos - Problemas resueltos [DE ADMISIÓN]", url: "https://www.youtube.com/embed/reS_ZSCmiJ8?si=pCR2g7avrx2FTdAD"
                        }
                    ]
                },
                {
                    NonbreDelMentor: "Ricardo Melgar",
                    videos: [
                        {
                            numero: "ARITMÉTICA - Teoría de Conjuntos", url: "https://www.youtube.com/embed/B0jJzAizZrY?si=BLaa4NazqXSbaMwi"
                        },
                        {
                            numero: "ARITMÉTICA - Teoría de Conjuntos", url: "https://www.youtube.com/embed/9G902Oe8kRQ?si=lDMp2uajGuO6Zox1"
                        }
                    ]
                },
                {
                    NonbreDelMentor: "Pool Elías",
                    videos: [
                        {
                            numero: "Repaso de Teoría de Conjuntos", url: "https://www.youtube.com/embed/hLy3MG0q3-8?si=SYZ72zsk5Z4EM_nB"
                        },
                        {
                            numero: "ARITMÉTICA - Aplicaciones con conjuntos", url: "https://www.youtube.com/embed/MXu7GChVXM4?si=NbUY0J3pW36ohVE2"
                        },
                        {
                            numero: "ARITMÉTICA - Conjuntos y numeración [Ejercicios]", url: "https://www.youtube.com/embed/wYgreIJrpNM?si=2XMG5HhEXbFHQXk3"
                        }
                    ]
                },
                {
                    NonbreDelMentor: "Akira Kamiya",
                    videos: [
                        {
                            numero: "ARITMÉTICA - Operaciones entre Conjuntos", url: "https://www.youtube.com/embed/w3onKqRfux0?si=E-p6L3SNNEgCxboN"
                        }
                    ]
                },
                {
                    NonbreDelMentor: "Matemática con LQH",
                    videos: [
                        {
                            numero: "TEORIA DE CONJUNTOS CONJUNTOS",
                            url: "https://www.youtube.com/embed/B8WJwYh5fiU?si=ij2ESflZM54woA9k"
                        },
                        {
                            numero: "TEORIA DE CONJUNTOS CONJUNTOS",
                            url: "https://www.youtube.com/embed/Y9Ft4hSH88o?si=vS2Kzn3iSiSKMQfy"
                        },
                        {
                            numero: "TEORIA DE CONJUNTOS CONJUNTOS",
                            url: "https://www.youtube.com/embed/uTvs4NjF-_g?si=6_rUiNvB8-2z4QBB"
                        },
                        {
                            numero: "CONJUNTOS EJERCICIOS RESUELTOS PARA UNIVERSITARIOS",
                            url: "https://www.youtube.com/embed/ZS7Jdrj1d1U?si=MHSpo4KzSXY3tvLN"
                        },
                        {
                            numero: "CONJUNTOS EJERCICIOS RESUELTOS PARA UNIVERSITARIOS",
                            url: "https://www.youtube.com/embed/ntbun2gRvwM?si=S2OD1yqrJIOsw4aC"
                        },
                        {
                            numero: "CONJUNTOS EJERCICIOS RESUELTOS PARA UNIVERSITARIOS",
                            url: "https://www.youtube.com/embed/lpWe1g3_J4E?si=iEktMbHWJI9rHJRz"
                        },
                        {
                            numero: "CONJUNTOS EJERCICIOS RESUELTOS PARA UNIVERSITARIOS",
                            url: "https://www.youtube.com/embed/p77x7i5uLec?si=mvLuSVwxMTwFjjoq"
                        }
                    ]
                },
                {
                    NonbreDelMentor: "Roberto Placencia",
                    videos: [
                        {
                            numero: "CONJUNTOS ",
                            url: "https://www.youtube.com/embed/1gVOTrh88Ds?si=uQ4Q7s3xPMUC3uEh"
                        },
                    ]
                },
                {
                    NonbreDelMentor: "JULS",
                    videos: [
                        {
                            numero: "Conjuntos súper fácil",
                            url: "https://www.youtube.com/embed/JdM97KFdAcI?si=PCOOX3gLVaDJqJeF"
                        },
                        {
                            numero: "Ejercicios de Conjuntos tipo examen de admisión",
                            url: "https://www.youtube.com/embed/3JgjnF3rIMA?si=3sxnJHtqu7iAiMJd"
                        },
                        {
                            numero: "Ejercicios tipo de conjuntos super super fácil",
                            url: "https://www.youtube.com/embed/5l9hafcTQwM?si=MdAsOgHLCIRUNWVX"
                        },
                        {
                            numero: "Mas ejercicios de conjuntos super fácil",
                            url: "https://www.youtube.com/embed/44yEdS7afqs?si=3lHEF-_qGMf47CYo"
                        },
                        {
                            numero: "conjuntos fácil y facil",
                            url: "https://www.youtube.com/embed/NHpsHvAXzCA?si=hPozWnCVIddOQC3u"
                        },
                        {
                            numero: "Mas ejercicios de conjuntos super fácil",
                            url: "https://www.youtube.com/embed/YJNUiwMEdr0?si=_NXM0WkBgxXbUMYW"
                        },
                        {
                            numero: "Ejercicio de conjuntos tipo super fácil",
                            url: "https://www.youtube.com/embed/Cr6nNnVA_T8?si=KDtN0kH55wMMFZIp"
                        }
                    ]
                }
            ],
        },
        {
            NombreDeltema: "SISTEMA DE NÚMEROS NATURALES Y ENTEROS",
            Mentores: [
                { 
                    NonbreDelMentor: "DS pro virtual", 
                    videos: [
                        { numero: "SISTEMA DE NÚMEROS NATURALES", url: "https://www.youtube.com/embed/kOwDC_rqwVc?si=tdmtfs-aSb_uG7Dh" },
                        { numero: "SISTEMA DE NÚMEROS NATURALES", url: "https://www.youtube.com/embed/k5WCjZbq3AY?si=GCpJpbetK-YTYDvH" }
                    ] 
                },
                { 
                    NonbreDelMentor: "Matemática con LQH", 
                    videos: [
                        { numero: "Sistema de los Números Naturales y Enteros", url: "https://www.youtube.com/embed/rNL_LgWLubA?si=RgIeuq5d36-R8SwW" },
                        { numero: "Sistema de los Números Naturales y Enteros", url: "https://www.youtube.com/embed/MIpWzu-xWbA?si=Wyy_GgbapsB1DbDw" },
                    ] 
                },
                {
                    NonbreDelMentor: "Juls", 
                    videos: [
                        { numero: "SISTEMA DE NÚMEROS NATURALES Y ENTEROS", url: "https://www.youtube.com/embed/-3C5kAniR8o?si=CYgaMI5SQFyaqFHe" },
                        { numero: "SISTEMA DE NÚMEROS NATURALES Y ENTEROS", url: "https://www.youtube.com/embed/rtNC7g1h_JA?si=S0HdmCuwZI_uYbmv" }
                    ] 
                }
            ]
        },
        {
            NombreDeltema: "SISTEMA DE NÚMEROS RACIONALES",
            Mentores: [
                { 
                    NonbreDelMentor: "Ricardo Melgar",
                    videos: [
                        { numero: "ARITMÉTICA - Números racionales", url: "https://www.youtube.com/embed/rsdJpbKUOqk?si=tfZ26zCMmWjU37sN" },
                        { numero: "ARITMÉTICA - Números racionales", url: "https://www.youtube.com/embed/SvD8RsNBsLA?si=egXvCLGp5-QS2oJu" },
                        { numero: "ARITMÉTICA - Números racionales", url: "https://www.youtube.com/embed/dUddUIMdspw?si=Y0XKA1TCG0sVO3QL" },
                        { numero: "ARITMÉTICA - Números racionales", url: "https://www.youtube.com/embed/aSlq9MrgS5A?si=YasmEdPV0CCzOz-w" }
                    ] 
                },
                { 
                    NonbreDelMentor: "Akira Kamiya", 
                    videos: [   
                        { numero: "Números racionales", url: "https://www.youtube.com/embed/Rj_VSDgC518?si=3m88VHfw5mLQkctU" }
                    ] 
                },
                { 
                    NonbreDelMentor: "Matemática con LQH", 
                    videos: [
                        { numero: "Números racionales", url: "https://www.youtube.com/embed/lQQPnFIwpts?si=r0GR5xgesLk39-RC" },
                        { numero: "Números racionales", url: "https://www.youtube.com/embed/GOY0ptVCQAU?si=UwqHsot0sIZiR3Pr" },
                        { numero: "Números racionales", url: "https://www.youtube.com/embed/5seeStWwDXg?si=2-cqK-1mel54mnFm" }
                    ] 
                },
                { 
                    NonbreDelMentor: "Juls", 
                    videos: [
                        { numero: "Números racionales", url: "https://www.youtube.com/embed/BmGLmbSSSA4?si=D2f9rfx3BWQhbmdf" },
                    ] 
                },
                
                { 
                    NonbreDelMentor: "Akira Kamiya",
                    videos: [
                        { numero: "SUMAS NOTABLES | DEMOSTRACIONES", url: "https://www.tokyvideo.com/es/embed/454278" },
                    ] 
                },
        
            ]
        },
        {
            NombreDeltema: "SUCESIONES Y SUMATORIAS NOTABLES",
            Mentores: [
                { 
                    NonbreDelMentor: "Matemática con LQH",
                    videos: [
                        { numero: "Sucesiones y Sumatorias", url: "https://www.youtube.com/embed/uSslmPew9O0?si=Em0t53sEdJf4Zspz" },
                        { numero: "Sucesiones y Sumatorias", url: "https://www.youtube.com/embed/lWzfBqXk9Ts?si=1Cgq8zmJKwsEi2-_" },
                        { numero: "Sucesiones y Sumatorias", url: "https://www.youtube.com/embed/5-YZHWyitck?si=rLyjEnRG60PV0P8S" }
                    ] 
                },
                { 
                    NonbreDelMentor: "Grupo Ciencias",
                    videos: [
                        { numero: "Sucesiones cuadráticas y lineales", url: "https://www.youtube.com/embed/umf01J-7-hY?si=7ucQASfDwzFqkJdH" },
                        { numero: "Nuevo Método S - Serie Fibonacci", url: "https://www.youtube.com/embed/TukRKk5cDWg?si=aAS2cXGEhpPRUIVM" },
                    ] 
                },
                { 
                NonbreDelMentor: "Academia De Internet",
                    videos: [
                        { numero: " SUCESIONES Y SUMATORIAS NOTABLES", url: "https://www.youtube.com/embed/6_a21uyu2ls?si=aG9kZcEIre7J5z_h" },
                    ] 
                }
            ]
        },
        {
            NombreDeltema: "SISTEMAS DE NUMERACIÓN",
            Mentores: [
                { 
                    NonbreDelMentor: "Tu Profe En Linea",
                    videos: [
                        { numero: "SISTEMA DE NUMERACIÓN (Teoría y ejemplos)", url: "https://www.youtube.com/embed/ol78PGvRay8?si=0vXiB1LkOQWYhF_M" },
                        { numero: "SISTEMA DE NUMERACIÓN: Números bien escritos", url: "https://www.youtube.com/embed/mCLQi-mZ-80?si=QagIoPQDwuCaaL01" },
                        { numero: "SISTEMA DE NUMERACIÓN: Cambio de Base (Teoría y ejemplos)", url: "https://www.youtube.com/embed/pjHjxzQHw9c?si=ewwR1JRDCebfy9-O" },
                        { numero: "SISTEMA DE NUMERACIÓN: Ecuaciones con 2 variables", url: "https://www.youtube.com/embed/EUUHFHzg4OU?si=LGuu2psDz63D2zOE" },
                        { numero: "SISTEMA DE NUMERACIÓN: Ecuaciones con Tres variables o más", url: "https://www.youtube.com/embed/fbEulbMgZno?si=DRqBOBoyaCX7zl8g" },
                        { numero: "SISTEMA DE NUMERACIÓN: Métodos Especiales de Cambio de Base", url: "https://www.youtube.com/embed/kvbjM-CBH3E?si=lIEJKR7UpuUodxtj" },
                        { numero: "SISTEMA DE NUMERACIÓN (Problemas de bases)", url: "https://www.youtube.com/embed/O4lIdEAJiMY?si=WrM9YbF7vwvLMAnH" },
                        { numero: "SISTEMA DE NUMERACIÓN (Fórmulas Especiales)", url: "https://www.youtube.com/embed/XarOL-Vuye4?si=g9E9fa4haZwoCQJS" },
                        { numero: "SISTEMA DE NUMERACIÓN: Problemas de Admisión (UNI - UNJBG)", url: "https://www.youtube.com/embed/krLbznfLEj8?si=NJAeo7TIHTMh36HN" },
                        { numero: "Sistema de Numeración (Examen Fase Dos)", url: "https://www.youtube.com/embed/KBQK4xziNI8?si=v0ouMjQX1REd-kVT" },
                        { numero: "SISTEMA DE NUMERACIÓN Y CUATRO OPERACIONES (Centro Pre Universitario)", url: "https://www.youtube.com/embed/JcO_A0GsyhI?si=pPRovGYm6kaaZwrZ" },
                        { numero: "SISTEMA DE NUMERACIÓN (CEPU UNJBG)", url: "https://www.youtube.com/embed/F16HjJJtpN4?si=8fDnOiFa1PD2C_8J" },
                        { numero: "NUMERACIÓN Y CUATRO OPERACIONES (CEPU OTOÑO 2017)", url: "https://www.youtube.com/embed/wrKNLWs5q2A?si=A9Z0EkbhjmZCQFuD" },
                        { numero: "NUMERACIÓN (Truco Matemático)", url: "https://www.youtube.com/embed/PbOzuJ0SPcE?si=ZMTC-B_A-_AmJrJe" },
                        { numero: "SISTEMA DE NUMERACIÓN: ¿Cuál es tu respuesta?", url: "https://www.youtube.com/embed/LrgQKuA1Tsc?si=3QA0EmI3BF_Rw4jA" },
                        { numero: "SISTEMA DE NUMERACIÓN 2: ¿Cuál es tu respuesta?", url: "https://www.youtube.com/embed/SRnR9HWvxy8?si=MaPZ1Vs7n4xpoSsO" },
                        { numero: "SISTEMA DE NUMERACIÓN 3: ¿Cuál es tu respuesta?", url: "https://www.youtube.com/embed/5ArQ6-KKY2s?si=YL0mjL8Q6-SdybVA" },
                        { numero: "SISTEMA DE NUMERACIÓN 04: ¿Cuál es tu respuesta?", url: "https://www.youtube.com/embed/TeiikZbYRFw?si=7lk_pQRe2cl_KSjL" },
                        { numero: "SISTEMA DE NUMERACIÓN 5: ¿Cuál es tu respuesta?", url: "https://www.youtube.com/embed/IRygp7rbPRc?si=T0NLi9rIUuYs95g4" },
                        { numero: "NUMERACION Y CUATRO OPERACIONES (Cepu Invierno 2017)", url: "https://www.youtube.com/embed/8Gvu3MQdiQk?si=NBo4Mu631CXw0OsS" }
                    ] 
                }
            ]
        }
    ],
    Algebra:[
        {
            NombreDeltema: "TEORIA DE CONJUNTOS",
            Mentores: [
                {
                    NonbreDelMentor: "Cesar Billena",
                    videos: [
                        {
                            numero: "Teoría de Conjunto", url: "https://drive.google.com/file/d/10eZCZxH7bn66Byf_i_Td4gXWgqt0ZmiN/preview"
                        },
                        {
                            numero: "Teoría de Conjuntos", url: "https://drive.google.com/file/d/1MlvDYDBbWWYjQe35zNV9ios8rwg5O63o/preview"
                        }
                    ]
                }
            ],
        }
    ]
};

function actualizarLibrosYEjercicios() {
    const asignatura = asignaturaSelect.value;
    const tema = temaSelect.value;

    if (tema) {
        const libros = asignaturas[asignatura].find(t => t.NombreDeltema === tema).Libros;
        const ejercicios = asignaturas[asignatura].find(t => t.NombreDeltema === tema).Ejercicios;

        // Limpiar libros anteriores
        librosContainer.innerHTML = '';

        // Crear cartas de libros
        libros.forEach(libro => {
            const carta = document.createElement('div');
            carta.className = 'carta-libro';

            const imagen = document.createElement('img');
            imagen.src = libro.ImgDelLibro;
            carta.appendChild(imagen);

            const nombre = document.createElement('p');
            nombre.textContent = `Libro: ${libro.NombreDelLibro}`;
            carta.appendChild(nombre);

            const autor = document.createElement('p');
            autor.textContent = `Autor: ${libro.AutorDelLibro}`;
            carta.appendChild(autor);

            librosContainer.appendChild(carta);
        });

        // Limpiar ejercicios anteriores
        EjerciciosContainer.innerHTML = '';

        // Crear cartas de ejercicios
        ejercicios.forEach(ejercicio => {
            const carta = document.createElement('a');
            carta.className = 'carta-libro';
            carta.href = ejercicio.url;
            
            const imagen = document.createElement('img');
            imagen.src = ejercicio.ImgDelEjercicio;
            carta.appendChild(imagen);

            EjerciciosContainer.appendChild(carta);
        });
    }
}

function limpiarOpcionesSelect(select) {
    // Limpiar opciones anteriores
    while (select.options.length > 0) {
        select.remove(0);
    }
}

// function actualizarLibrosYEjercicios() {
//     const asignatura = asignaturaSelect.value;
//     const tema = temaSelect.value;

//     if (tema) {
//         const libros = asignaturas[asignatura].find(t => t.NombreDeltema === tema).Libros;
//         const ejercicios = asignaturas[asignatura].find(t => t.NombreDeltema === tema).Ejercicios;

//         // Limpiar libros anteriores
//         librosContainer.innerHTML = '';

//         // Crear cartas de libros
//         libros.forEach(libro => {
//             const carta = document.createElement('a');
//             carta.className = 'carta-libro';
//             carta.href = libro.url;
//             carta.target = "_blank";
//             const imagen = document.createElement('img');
//             imagen.src = libro.ImgDelLibro;
//             carta.appendChild(imagen);

//             const nombre = document.createElement('p');
//             nombre.textContent = `${libro.NombreDelLibro}`;
//             carta.appendChild(nombre);

//             const autor = document.createElement('p');
//             autor.textContent = `${libro.AutorDelLibro}`;
//             carta.appendChild(autor);

//             librosContainer.appendChild(carta);
//         });

//         // Limpiar ejercicios anteriores
//         EjerciciosContainer.innerHTML = '';

//         // Crear cartas de ejercicios
//         ejercicios.forEach(ejercicio => {
//             const carta = document.createElement('a');
//             carta.className = 'carta-libro';
//             carta.href = ejercicio.url;
//             carta.target = "_blank";
//             const imagen = document.createElement('img');
//             imagen.src = ejercicio.ImgDelEjercicio;
//             carta.appendChild(imagen);

//             EjerciciosContainer.appendChild(carta);
//         });
//     }
// }

asignaturaSelect.addEventListener('change', function() {
    // Limpiar opciones anteriores en el temaSelect y mentorSelect
    limpiarOpcionesSelect(temaSelect);
    limpiarOpcionesSelect(mentorSelect);

    const asignatura = this.value;
    const temas = asignaturas[asignatura];

    // Limpiar temario anterior
    temarioDiv.innerHTML = '';
    let NumerosTemario = 1;

    // Agregar primera opción
    const optionPrimera = document.createElement('option');
    optionPrimera.value = "";
    optionPrimera.textContent = "Selecciona El Tema";
    temaSelect.appendChild(optionPrimera);

    // Crear opciones de temario
    temas.forEach(tema => {
        const Numero = `${NumerosTemario}.- `;
        NumerosTemario++;
        const option = document.createElement('option');
        option.value = tema.NombreDeltema;
        option.textContent = Numero + tema.NombreDeltema;
        temaSelect.appendChild(option);

        const paragraph = document.createElement('p');
        paragraph.textContent = Numero + tema.NombreDeltema;
        temarioDiv.appendChild(paragraph);
    });

    // Actualizar libros y ejercicios al cambiar la asignatura
    // actualizarLibrosYEjercicios();
});

// temaSelect.addEventListener('change', actualizarLibrosYEjercicios);

temaSelect.addEventListener('change', function () {
    const asignatura = asignaturaSelect.value;
    const tema = this.value;
    const mentores = asignaturas[asignatura].find(t => t.NombreDeltema === tema).Mentores;

    mentorSelect.innerHTML = '<option value="" disabled selected>Selecciona Al Mentor</option>';
    mentores.forEach(mentor => {
        const option = document.createElement('option');
        option.value = mentor.NonbreDelMentor;
        option.textContent = mentor.NonbreDelMentor;
        mentorSelect.appendChild(option);
    });
});

mentorSelect.addEventListener('change', function () {
    const asignatura = asignaturaSelect.value;
    const tema = temaSelect.value;
    const mentor = this.value;
    const videos = asignaturas[asignatura].find(t => t.NombreDeltema === tema).Mentores.find(m => m.NonbreDelMentor === mentor).videos;

    clasesSelect.innerHTML = '<option value="" disabled selected>Selecciona La Clase</option>';
    let Partes = 1;
    videos.forEach(video => {
        const Parte = `[Parte ${Partes}]`;
        Partes++;

        const option = document.createElement('option');
        option.value = video.url;
        option.textContent = `${video.numero}` + Parte;
        clasesSelect.appendChild(option);
    });
});

clasesSelect.addEventListener('change', function () {
    const videoUrl = this.value;
    reproductorVideo.src = videoUrl;
});
