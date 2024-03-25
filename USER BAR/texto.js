const texto = document.getElementById("texto");
        const textos = [ `` , ``, ``];
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;

        function escribirTexto() {
            const textoActual = textos[index];
            if (isDeleting) {
                texto.innerHTML = textoActual.substring(0, charIndex - 1)
                    .split('')
                    .map(char => `<span>${char}</span>`)
                    .join('');
            } else {
                texto.innerHTML = textoActual.substring(0, charIndex + 1)
                    .split('')
                    .map(char => `<span>${char}</span>`)
                    .join('');
            }

            charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

            if (!isDeleting && charIndex === textoActual.length) {
                isDeleting = true;
                setTimeout(escribirTexto, 2500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % textos.length;
                setTimeout(escribirTexto, 500);
            } else {
                setTimeout(escribirTexto, isDeleting ? 50 : 100);
            }
        }

        escribirTexto();