document.addEventListener('DOMContentLoaded', function () {
    const botonesAbrir = document.querySelectorAll('.Abrir_Pgx');
    botonesAbrir.forEach(function (boton) {
        boton.addEventListener('click', function () {
            const modalTargetId = 'Modal_Pgx_' + boton.getAttribute('data-modal');
            const modal = document.querySelector('[data-modal-pgx="' + boton.getAttribute('data-modal') + '"]');

            if (modal) {
                modal.style.display = 'block';
                mainCanvas.width = mainCanvas.offsetWidth;
                mainCanvas.height = mainCanvas.offsetHeight;
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



