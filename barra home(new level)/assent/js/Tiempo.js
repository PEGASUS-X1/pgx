var climas = document.getElementById("climas");

climas.onclick = function(){
    climas.style.display = "none";
    var tiempo = document.getElementById("general-tiem");
    tiempo.style.display = "block";
    setTimeout(() => {
        tiempo.style.display = "none";
        climas.style.display = "block";
    }, 5000);
}

const api = {
    key: '9e122cd782b2d0333f5fe4e7fa192062',
    url: `https://api.openweathermap.org/data/2.5/weather`
}

const hora = document.getElementById("hora");
const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const alertsDiv = document.getElementById('alerts');

async function searchByCoordinates(lat, lon) {
    try {
        const response = await fetch(`${api.url}?lat=${lat}&lon=${lon}&appid=${api.key}&lang=es`);
        const data = await response.json();
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        date.innerHTML = "Fecha: " + (new Date()).toLocaleDateString();
        const timezoneOffset = data.timezone;
        const localTime = new Date((new Date().getTime() + timezoneOffset + 8)).toLocaleTimeString();
        hora.innerHTML = `Hora: ${localTime}`;
        temp.innerHTML = `${toCelsius(data.main.temp)}°C`;
        weather.innerHTML = `${data.weather[0].description}`;
        updateImages(data);
        await fetchWeatherAlerts(lat, lon); 
    } catch (err) {
        console.error(err);
    }
}

async function fetchWeatherAlerts(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api.key}`);
        const data = await response.json();
        
        // Verificar si hay alertas meteorológicas
        if (data.hasOwnProperty('alerts')) {
            const alerts = data.alerts;
            alertsDiv.innerHTML = ''; // Limpiar alertas anteriores
            alerts.forEach(alert => {
                const alertElementEvent = document.createElement('input');
                const alertElementDescription = document.createElement('input');
                alertElementEvent.value = `Evento: ${alert.event}`
                alertElementDescription.value = `Descripcion: ${alert.description}`;
                alertElement.appendChild(alertElementEvent);
                alertElement.appendChild(alertElementDescription);
                alertsDiv.appendChild(alertElement);
            });
        } else {
            alertsDiv.innerHTML = '<input type="text" value="No hay alertas meteorológicas activas.">';
        }
    } catch (error) {
        console.error('Error al recuperar alertas meteorológicas:', error);
        alertsDiv.innerHTML = '<input type="text" value="Error al recuperar alertas meteorológicas.">';
    }
}

function updateImages(data) {
    const tempValue = toCelsius(data.main.temp);
    let iconClass = 'fa-cloud-sun';
    if (tempValue > 26) {
        iconClass = 'fa-sun';
    } else if (tempValue < 20) {
        iconClass = 'fa-snowflake';
    }
    tempImg.className = `fas ${iconClass} fa-3x`;
}

function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

window.addEventListener('load', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            searchByCoordinates(lat, lon);
        });

        setInterval(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                searchByCoordinates(lat, lon);
            });
        }, 3000);
    } else {
        alert("La geolocalización no está disponible en este navegador.");
    }
});
