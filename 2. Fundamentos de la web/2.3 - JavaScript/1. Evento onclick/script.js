function changeText(element) {
    if(element.innerHTML == "Logout") {
        element.innerHTML = "Login";
    } else {
        element.innerHTML = "Logout";
    }
}

function removeBtn(element) {
    element.remove();
}