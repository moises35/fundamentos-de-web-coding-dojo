console.log("page loaded...");

const nameUser = document.getElementById("name");
const connectionRequests = document.getElementById("connectionRequests");
const countConections = document.getElementById("countConections");

// Función para modificar el nombre del perfil con la opción "edit profile"
function editName() {
    var newName = prompt("Ingrese el nuevo nombre: ", nameUser.textContent);
    if(newName != null) {
        nameUser.textContent = newName;
    }
}


// En la parte de peticiones de conexión:
// Si el user presiona en rechazar se borra el elemento
//y se disminuye el contador de conectionRequests
function removeConection(element) {
    element.parentElement.parentElement.remove();
    connectionRequests.textContent = parseInt(connectionRequests.textContent) - 1;
}

// Si el user acepta la petición lo agregamos a la lista y aumentamos el contador de countConections
function aceptConection(element) {
    removeConection(element);
    countConections.textContent = parseInt(countConections.textContent) + 1;
}