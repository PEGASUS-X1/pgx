var select = document.getElementById('miSelect');
var contenidoOpcion1 = document.getElementById('contenidoOpcion1');
var contenidoOpcion2 = document.getElementById('contenidoOpcion2');
var contenidoOpcion3 = document.getElementById('contenidoOpcion3');
var contenidoOpcion4 = document.getElementById('contenidoOpcion4');
var contenidoOpcion5 = document.getElementById('contenidoOpcion5');
var contenidoOpcion6 = document.getElementById('contenidoOpcion6');
var contenidoOpcion7 = document.getElementById('contenidoOpcion7');
var contenidoOpcion8 = document.getElementById('contenidoOpcion8');
var contenidoOpcion9 = document.getElementById('contenidoOpcion9');
var contenidoOpcion10 = document.getElementById('contenidoOpcion10');
var contenidoOpcion11 = document.getElementById('contenidoOpcion11');
select.addEventListener('change', function() {
    contenidoOpcion1.style.display = 'none';
    contenidoOpcion2.style.display = 'none';
    contenidoOpcion3.style.display = 'none';
    contenidoOpcion4.style.display = 'none';
    contenidoOpcion5.style.display = 'none';
    contenidoOpcion6.style.display = 'none';
    contenidoOpcion7.style.display = 'none';
    contenidoOpcion8.style.display = 'none';
    contenidoOpcion9.style.display = 'none';
    contenidoOpcion10.style.display = 'none';
    contenidoOpcion11.style.display = 'none';

    var opcionSeleccionada = select.value;
    if (opcionSeleccionada === 'Cuadrado') {
        contenidoOpcion1.style.display = 'block';
    } else if (opcionSeleccionada === 'Triangulo') {
        contenidoOpcion2.style.display = 'block';
    } else if (opcionSeleccionada === 'Rectangulo') {
        contenidoOpcion3.style.display = 'block';
    } else if (opcionSeleccionada === 'Paralelogramo') {
        contenidoOpcion4.style.display = 'block';
    } else if (opcionSeleccionada === 'Rombo') {
        contenidoOpcion5.style.display = 'block';
    } else if (opcionSeleccionada === 'Cometa') {
        contenidoOpcion6.style.display = 'block';
    } else if (opcionSeleccionada === 'Trapecio') {
        contenidoOpcion7.style.display = 'block';
    } else if (opcionSeleccionada === 'Circulo') {
        contenidoOpcion8.style.display = 'block';
    }  else if (opcionSeleccionada === 'Poligono-Regular') {
        contenidoOpcion9.style.display = 'block';
    } else if (opcionSeleccionada === 'Corona-Circular') {
        contenidoOpcion10.style.display = 'block';
    } else if (opcionSeleccionada === 'Sector-Circular') {
        contenidoOpcion11.style.display = 'block';
    }
});

function sacar(figura) {
    if (figura === 'Cuadrado') {
        var lado = parseFloat(document.getElementById("lado").value);
        var area = lado * lado;
        var perimetro = 4 * lado;
        document.getElementById("Area1").textContent = area;
        document.getElementById("Perimetro1").textContent = perimetro;
    } else if (figura === 'Triangulo') {
        var base = parseFloat(document.getElementById("base").value);
        var altura = parseFloat(document.getElementById("altura").value);
        var area = (base * altura) / 2;
        var perimetro = base * 3; // Esto asume un triángulo equilátero, ajusta según tus necesidades.
        document.getElementById("Area2").textContent = area;
        document.getElementById("Perimetro2").textContent = perimetro;
    } else if (figura === 'Rectangulo') {
        var baseRect = parseFloat(document.getElementById("baseRect").value);
        var alturaRect = parseFloat(document.getElementById("alturaRect").value);
        var area = baseRect * alturaRect;
        var perimetro = 2 * (baseRect + alturaRect);
        document.getElementById("Area3").textContent = area;
        document.getElementById("Perimetro3").textContent = perimetro;
    } else if (figura === 'Paralelogramo') {
        var baseParale = parseFloat(document.getElementById("baseParale").value);
        var alturaParale = parseFloat(document.getElementById("alturaParale").value);
        var ladoParale = parseFloat(document.getElementById("ladoParale").value);
        var area = baseParale * alturaParale;
        var perimetro = 2 * (baseParale + ladoParale);
        document.getElementById("Area4").textContent = area;
        document.getElementById("Perimetro4").textContent = perimetro;
    } else if (figura === 'Rombo') {
        var DRombo = parseFloat(document.getElementById("DRombo").value);
        var dRombo = parseFloat(document.getElementById("dRombo").value);
        var ladoRombo = parseFloat(document.getElementById("ladoRombo").value);
        divi = DRombo * dRombo;
        var area = divi / 2;
        var perimetro = 4 * ladoRombo;
        document.getElementById("Area5").textContent = area;
        document.getElementById("Perimetro5").textContent = perimetro;
    } else if (figura === 'Cometa') {
        var DCometa = parseFloat(document.getElementById("DCometa").value);
        var dCometa = parseFloat(document.getElementById("dCometa").value);
        var ladoCometa = parseFloat(document.getElementById("ladoCometa").value);
        var baseCometa = parseFloat(document.getElementById("baseCometa").value);
        divi = DCometa * dCometa;
        var area = divi / 2;
        var perimetro = 2 * (baseCometa + ladoCometa);
        document.getElementById("Area6").textContent = area;
        document.getElementById("Perimetro6").textContent = perimetro;
    } else if (figura === 'Trapecio') {
        var BaseMayorTra = parseFloat(document.getElementById("BaseMayorTra").value);
        var BaseMayorTra = parseFloat(document.getElementById("BaseMenorTra").value);
        var AlturaTra = parseFloat(document.getElementById("AlturaTra").value);
        var ladoATra = parseFloat(document.getElementById("ladoATra").value);
        var ladoCTra = parseFloat(document.getElementById("ladoCTra").value);
        divi = (BaseMayorTra + BaseMayorTra) * AlturaTra;
        var area = divi / 2;
        var perimetro = BaseMayorTra + BaseMayorTra + ladoATra + ladoCTra;
        document.getElementById("Area7").textContent = area;
        document.getElementById("Perimetro7").textContent = perimetro;
    } else if (figura === 'Circulo') {
        var radioCir = parseFloat(document.getElementById("radioCir").value);
        ele = radioCir * radioCir;
        var area = 3.14 * ele;
        var perimetro = 2 * 3.14 *radioCir;
        document.getElementById("Area8").textContent = area;
        document.getElementById("Perimetro8").textContent = perimetro;
    } else if (figura === 'Poligono-Regular') {
        var apotemaPoli = parseFloat(document.getElementById("apotemaPoli").value);
        var ladosPoli = parseFloat(document.getElementById("ladosPoli").value);
        var basePoli = parseFloat(document.getElementById("basePoli").value);
        var perimetro = ladosPoli * basePoli;
        divi = perimetro * apotemaPoli;
        var area = divi / 2;
        document.getElementById("Area9").textContent = area;
        document.getElementById("Perimetro9").textContent = perimetro;
    } else if (figura === 'Corona-Circular') {
        var BaseMayorTra = parseFloat(document.getElementById("RadioMayorCoro").value);
        var RadioMenorCoro = parseFloat(document.getElementById("RadioMenorCoro").value);
        aaseM = BaseMayorTra * BaseMayorTra;
        aaseN = RadioMenorCoro * RadioMenorCoro;
        // TotalBase = aaseM - aaseN;
        var area = 3.14 * (aaseM - aaseN);
        var perimetro = "nulo";
        document.getElementById("Area10").textContent = area;
        document.getElementById("Perimetro10").textContent = perimetro;
    } else if (figura === 'Sector-Circular') {
        var anguloSec = parseFloat(document.getElementById("anguloSec").value);
        var radioSec = parseFloat(document.getElementById("radioSec").value);
        R2 = radioSec * radioSec; 
        divi = 3.14 * R2 * anguloSec;
        conclu =  divi / 360;
        var area = conclu +"°";
        var perimetro = "nulo";
        document.getElementById("Area11").textContent = area;
        document.getElementById("Perimetro11").textContent = perimetro;
    }
}