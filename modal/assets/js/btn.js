function configurarModalButtons(modalId, buttons) {
    Object.keys(buttons).forEach(function (buttonId) {
        const buttonElement = document.getElementById(buttonId + '_' + modalId.split('_')[2]);
        const buttonConfig = buttons[buttonId];

        if (buttonElement) {
            buttonElement.textContent = buttonConfig.text;

            // Establecer href a '#' si es null
            buttonElement.href = buttonConfig.href !== null ? buttonConfig.href : '#';

            if (buttonConfig.onclick) {
                buttonElement.onclick = buttonConfig.onclick;
            }
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    // Configuración para el primer modal
    configurarModalButtons('Modal_Pgx_1', {
        button_1: { text: 'Nuevo Texto 1', href: null, onclick: null },
        button_2: { text: 'Nuevo Texto 2', href: 'https://www.ejemplo.com', onclick: function () { alert('Hiciste clic en el botón 2 del primer modal.'); } },
        button_3: { text: 'Nuevo Texto 3', href: 'https://www.ejemplo.com', onclick: function () { alert('Hiciste clic en el botón 3 del primer modal.'); } }
    });

    // Configuración para el segundo modal
    configurarModalButtons('Modal_Pgx_2', {
        button_1: { text: 'Nuevo Texto 1', href: 'https://www.ejemplo.com', onclick: function () { alert('Hiciste clic en el botón 1 del segundo modal.'); } },
        button_2: { text: 'Nuevo Texto 2', href: 'https://www.ejemplo.com', onclick: function () { alert('Hiciste clic en el botón 2 del segundo modal.'); } },
        button_3: { text: 'Nuevo Texto 3', href: 'https://www.ejemplo.com', onclick: function () { alert('Hiciste clic en el botón 3 del segundo modal.'); } }
    });
});