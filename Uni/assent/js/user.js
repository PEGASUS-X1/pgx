function mostrar() {
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbyfzoGwdkaRCtFTWmmL2_BCbckCO-rOd0ruQipJc0vXUpehZkXs1S0L1tlyFq6qg9WIpw/exec',
        method: 'GET',
        success: function(responseLibro) {
            var tabla = $('<table>').addClass('tablaLibros');

            // Crea la cabecera de la tabla
            var cabecera = $('<tr>');
            cabecera.append($('<th>').text('N°'));
            cabecera.append($('<th>').text('Area'));
            cabecera.append($('<th>').text('Nombre'));
            cabecera.append($('<th>').text('Número'));
            tabla.append(cabecera);

            // Llena la tabla con los datos obtenidos de la respuesta AJAX
            responseLibro.forEach(function(libro, index) {
                var fila = $('<tr>').addClass('buscado'); 
                fila.append($('<td>').text(index + 1));
                fila.append($('<td>').text(libro.seleccion));
                fila.append($('<td>').text(libro.nombre));
                fila.append($('<td>').text(libro.numero));
                tabla.append(fila);
            });

            // Vacía el contenedor de libros y luego agrega la tabla
            var CajadeLibros = $('#CajadeLibros');
            CajadeLibros.empty().append(tabla);
        },
        error: function(error) {
            console.error('Error', error);
        }
    });
}


$(document).ready(function() {
    mostrar();
});
