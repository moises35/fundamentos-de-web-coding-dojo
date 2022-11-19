console.log("page loaded...");

function stopVideo(element) {
    element.classList.remove("cursor");
    element.pause();
}

function playVideo(element) {
    element.classList.add("cursor");
    element.play();
}