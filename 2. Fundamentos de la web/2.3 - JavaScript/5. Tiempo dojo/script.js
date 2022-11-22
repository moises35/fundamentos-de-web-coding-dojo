console.log("Script cargado correctamente");

// Obtenemos el elemento Cookies del dom
const cookies = document.getElementById("cookies");

function showMessage(element) {
    console.log("Queriendo obtener la información de : " + element.textContent);
    alert(`Loading ${element.textContent} weather report...`);
    // Podemos mostrar un texto opcional haciendo alusión de que los datos no pueden cargarse
    // alert(`Oops, we can't bring the ${element.textContent} weather information, try again later.`);
}


// Cambiar temperaturas entre sistema Celsius y Fahrenheit
function cambiarSistema(element) {
    const temperaturas = document.querySelectorAll(".temp");
    // Si es C entonces convertimos a Celsius, sino a Fahrenheit
    if(element.value === 'c') {
        for(var i = 0; i < temperaturas.length; i++) {
            // Para la temperatura máxima
            var aux = parseInt(temperaturas[i].children[0].children[0].textContent)
            temperaturas[i].children[0].children[0].textContent = fahrenheitToCelsius(aux);

            // Para la temperatura minima
            aux = parseInt(temperaturas[i].children[1].children[0].textContent)
            temperaturas[i].children[1].children[0].textContent = fahrenheitToCelsius(aux);
        }
    } else {
        for(var i = 0; i < temperaturas.length; i++) {
            // Para la temperatura máxima
            var aux = parseInt(temperaturas[i].children[0].children[0].textContent)
            temperaturas[i].children[0].children[0].textContent = celsiusToFahrenheit(aux);
            
            // Para la temperatura minima
            aux = parseInt(temperaturas[i].children[1].children[0].textContent)
            temperaturas[i].children[1].children[0].textContent = celsiusToFahrenheit(aux);
        }
    }
}


function celsiusToFahrenheit(temp) {
    // Redondeamos a 0 decimales
    return Math.round((temp * 9/5) + 32);
}

function fahrenheitToCelsius(temp) {
    // Redondeamos a 0 decimales
    return Math.round((temp - 32) * 5/9);
}

// Función para eliminar el elemento cookies
function closeCookie() {
    console.log("Cerrando el elemento cookies");
    cookies.remove();
}