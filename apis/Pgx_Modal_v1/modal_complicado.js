const Modal_PGX = document.createElement("div");
Modal_PGX.id = "Modal_PX";

function Pegasus_Modal({
    PGX_Titulo_Modal,
    PGX_Texto_Modal,
    PGX_Img_Modal,
    PGX_Btn1_Modal,
    PGX_Btn1_Modal_href,
    PGX_Btn1_Modal_onclick,
    PGX_Btn2_Modal,
    PGX_Btn2_Modal_href,
    PGX_Btn2_Modal_onclick,
    PGX_Btn3_Modal,
    PGX_Btn3_Modal_href,
    PGX_Btn3_Modal_onclick,
}) {

    Modal_PGX.innerHTML = `
    <div class="Modal_Pgx" id="Modal_Pgx">
    <div class="Content_Above">
        <span id="Close_Pgx"  onclick="cerrarModal()">⨉</span>
        <h1>${PGX_Titulo_Modal}</h1>
    </div>
    <div class="Content_Center">
        <p>${PGX_Texto_Modal}</p>
        <img src="${PGX_Img_Modal}">
    </div>
    <div class="Content_Below">
        <div class="Content_Below_left">
            <a class="button" href="${PGX_Btn1_Modal_href}" onclick="${PGX_Btn1_Modal_onclick}">${PGX_Btn1_Modal}</a>
            <a class="button" href="${PGX_Btn2_Modal_href}" onclick="${PGX_Btn2_Modal_onclick}">${PGX_Btn2_Modal}</a>
        </div>
        <div class="Content_Below_right">
            <a class="button" href="${PGX_Btn3_Modal_href}" onclick="${PGX_Btn3_Modal_onclick}">${PGX_Btn3_Modal}</a>
        </div>
    </div>
</div>
        `;

    document.body.appendChild(Modal_PGX);
}

function cerrarModal() {
    var Modal_PGX = document.getElementById("Modal_PX");
    Modal_PGX.remove();
}


// function mostrarNotificacionAlerta1() {
//     Pegasus_Modal({
//         PGX_Titulo_Modal: "holaaa",
//         PGX_Texto_Modal: "1",
//         PGX_Img_Modal: "",
//         PGX_Btn1_Modal: "hola",
//         PGX_Btn1_Modal_href: "",
//         PGX_Btn1_Modal_onclick: "",
//         PGX_Btn2_Modal: "1",
//         PGX_Btn2_Modal_href: "",
//         PGX_Btn2_Modal_onclick: "",
//         PGX_Btn3_Modal: "1",
//         PGX_Btn3_Modal_href: "",
//         PGX_Btn3_Modal_onclick: "",
//     });
// }
