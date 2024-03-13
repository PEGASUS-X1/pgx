document.addEventListener('DOMContentLoaded', function () {
    let ultimoZIndex = 10; // Inicializa el último zIndex con un valor base

    const botonesAbrir = document.querySelectorAll('.Abrir_Pgx');
    botonesAbrir.forEach(function (boton) {
        boton.addEventListener('click', function () {
            const modalTargetId = 'Modal_Pgx_' + boton.getAttribute('data-modal');
            const modal = document.querySelector('[data-modal-pgx="' + boton.getAttribute('data-modal') + '"]');

            if (modal) {
                modal.style.display = 'block';
                ultimoZIndex++; // Incrementa el último zIndex
                modal.style.zIndex = ultimoZIndex.toString(); // Asigna el zIndex al modal
            }
        });
    });

    const spansCerrar = document.querySelectorAll('#Close_Pgx');
    spansCerrar.forEach(function (span) {
        span.addEventListener('click', function () {
            const modalId = span.closest('.Modal_Pgx').getAttribute('data-modal-pgx');
            const modal = document.querySelector('[data-modal-pgx="' + modalId + '"]');

            if (modal) {
                modal.style.display = 'none';
            }
        });
    });
});
