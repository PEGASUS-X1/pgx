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

